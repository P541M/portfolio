"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Mail, Send, Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ContactFormData } from "@/types";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle component mounting and visibility
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 400); // Delay for Contact since it's at the bottom

    return () => clearTimeout(timer);
  }, []);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        form.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/pevidena/",
      icon: Linkedin,
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      href: "https://github.com/P541M",
      icon: Github,
      color: "hover:text-gray-800 dark:hover:text-gray-200",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/psalmeleazar",
      icon: Twitter,
      color: "hover:text-blue-400",
    },
    {
      name: "Email",
      href: "mailto:videna.psalmeleazar@gmail.com",
      icon: Mail,
      color: "hover:text-red-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  // Don't render anything until mounted (prevents hydration issues)
  if (!mounted) {
    return (
      <section id="contact" className="min-h-screen bg-muted/30 py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Have a project in mind or just want to say hello? I&apos;d love to hear from you.
              Let&apos;s discuss how we can work together.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="h-96 bg-muted/50 rounded-lg animate-pulse" />
              <div className="h-96 bg-muted/50 rounded-lg animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-screen bg-muted/30 py-6">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Have a project in mind or just want to say hello? I&apos;d love to hear from you.
              Let&apos;s discuss how we can work together.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Contact Information */}
              <motion.div variants={itemVariants} className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      Let&apos;s Connect
                    </CardTitle>
                    <CardDescription>
                      I&apos;m always open to discussing new opportunities, interesting projects,
                      or just having a chat about technology and development.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Current Role</h4>
                      <p className="text-sm text-muted-foreground">
                        Technology Research Analyst at Bank of Montreal (BMO)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Education</h4>
                      <p className="text-sm text-muted-foreground">
                        Co-op Software Engineering Student at University of Guelph
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Interests</h4>
                      <p className="text-sm text-muted-foreground">
                        Full-stack Development, Project Management, AI/ML, Cloud Technologies
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Connect with me</CardTitle>
                    <CardDescription>
                      Find me on these platforms
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-4">
                      {socialLinks.map((link) => {
                        const IconComponent = link.icon;
                        return (
                          <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex h-10 w-10 items-center justify-center rounded-lg border border-border transition-all hover:shadow-md ${link.color}`}
                            aria-label={link.name}
                          >
                            <IconComponent className="h-5 w-5" />
                          </a>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <Card>
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and I&apos;ll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input placeholder="your.email@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Message</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Tell me about your project or just say hello..."
                                  className="min-h-[120px]"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button
                          type="submit"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </Button>

                        {/* Status Messages */}
                        {submitStatus === "success" && (
                          <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                            <p className="text-sm text-green-800 dark:text-green-200">
                              Thank you! Your message has been sent successfully. I&apos;ll get back to you soon.
                            </p>
                          </div>
                        )}

                        {submitStatus === "error" && (
                          <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                            <p className="text-sm text-red-800 dark:text-red-200">
                              Sorry, there was an error sending your message. Please try again or contact me directly.
                            </p>
                          </div>
                        )}
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;