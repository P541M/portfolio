"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Cog, Mic } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { volunteerData } from "@/data/volunteer";

const Volunteer = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle component mounting and visibility
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Slight delay for Volunteer since it's last

    return () => clearTimeout(timer);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="h-5 w-5" />;
      case "cog":
        return <Cog className="h-5 w-5" />;
      case "microphone":
        return <Mic className="h-5 w-5" />;
      default:
        return <Code className="h-5 w-5" />;
    }
  };

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
      <section id="volunteer" className="py-24 bg-background">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Volunteer Experience
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Contributing to the community through volunteer work and helping others grow.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-80 bg-muted/50 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="volunteer" className="py-24 bg-background">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Volunteer Experience
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Contributing to the community through volunteer work and helping others grow.
            </p>
          </motion.div>

          {/* Volunteer Grid */}
          <motion.div
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {volunteerData.map((volunteer) => (
              <motion.div key={volunteer.id} variants={itemVariants}>
                <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {/* Card Header with Company Name */}
                  <CardHeader className="relative bg-gradient-to-r from-primary/90 to-primary text-primary-foreground">
                    <CardTitle className="text-xl font-bold">
                      {volunteer.company}
                    </CardTitle>
                  </CardHeader>

                  {/* Card Content */}
                  <CardContent className="flex-grow p-6">
                    {volunteer.roles.map((role, idx) => (
                      <div key={idx} className="mb-6">
                        <div className="flex items-center mb-3">
                          <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 shadow-sm">
                            {role.icon && getIcon(role.icon)}
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">
                              {role.title}
                            </h4>
                          </div>
                        </div>
                        <div className="ml-15">
                          <p className="mb-2 text-sm italic text-primary/80">
                            {role.duration}
                          </p>
                          <p className="text-sm leading-relaxed text-muted-foreground">
                            {role.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>

                  {/* Footer with Category */}
                  <div className="border-t border-border bg-muted/30 px-6 py-3">
                    <div className="flex justify-end">
                      <Badge variant="secondary" className="text-xs">
                        {volunteer.category}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Interested in collaboration or volunteer opportunities?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get In Touch
              <svg
                className="ml-1 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Volunteer;