"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Linkedin, Github, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {

  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/pevidena/",
      icon: Linkedin,
    },
    {
      name: "GitHub", 
      href: "https://github.com/P541M",
      icon: Github,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/psalmeleazar", 
      icon: Twitter,
    },
    {
      name: "Email",
      href: "mailto:videna.psalmeleazar@gmail.com",
      icon: Mail,
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

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center bg-background pt-16 md:pt-0"
      aria-labelledby="hero-title"
    >
      <div className="container px-4 py-6 md:py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative mb-8 text-center md:mb-12">
              <motion.p 
                variants={itemVariants}
                className="mb-2 text-xs font-medium uppercase tracking-wider text-primary md:text-sm"
              >
                Co-op Software Engineering Student @ UofG
              </motion.p>
              <motion.h1
                variants={itemVariants}
                id="hero-title"
                className="mb-0 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl"
              >
                <span className="text-primary">PSALM</span>{" "}
                ELEAZAR
              </motion.h1>
              <motion.div 
                variants={itemVariants}
                className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent md:mt-4 animate-fade-in"
              />
            </div>

            <div className="grid gap-8 md:grid-cols-2 md:gap-16">
              <div className="order-2 flex flex-col justify-center md:order-1">
                <motion.p 
                  variants={itemVariants}
                  className="mb-6 text-center text-sm text-muted-foreground md:mb-8 md:text-left md:text-base"
                >
                  Currently contributing as a{" "}
                  <span className="font-medium text-primary">
                    Technology Research Analyst
                  </span>{" "}
                  at{" "}
                  <a
                    href="https://www.bmo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-primary text-primary transition-colors duration-300 hover:border-primary/70 hover:text-primary/90"
                  >
                    Bank of Montreal (BMO)
                  </a>{" "}
                  and open to opportunities that challenge me to build engaging
                  digital experiences.
                </motion.p>
                
                <motion.div 
                  variants={itemVariants}
                  className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0"
                >
                  <Button
                    size="lg"
                    className="group"
                    asChild
                  >
                    <a
                      href="https://docs.google.com/document/d/14y5puVSbSHT0-GetZlJhusbWYR7hd1e_/edit?usp=sharing&ouid=100426459370719602883&rtpof=true&sd=true"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      View Resume
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={handleContactClick}
                    className="group"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact Me
                  </Button>
                </motion.div>
              </div>

              <div className="order-1 flex flex-col items-center justify-center md:order-2 md:items-end">
                <motion.div 
                  variants={itemVariants}
                  className="mb-4 text-center md:mb-6 md:text-right"
                >
                  <p className="mb-1 text-base font-medium text-foreground md:mb-2 md:text-lg">
                    Passionate about
                  </p>
                  <p className="text-xl font-light text-primary md:text-3xl">
                    Full-stack Development
                    <span className="mx-2 inline-block text-foreground">
                      &
                    </span>
                    Project Management
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="mt-3 flex items-center justify-center space-x-4 md:mt-4 md:justify-end md:space-x-5"
                >
                  {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className="group flex h-8 w-8 items-center justify-center rounded-full bg-background border border-border text-primary shadow-smooth transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-1 hover:shadow-smooth-md md:h-10 md:w-10"
                      >
                        <IconComponent className="h-4 w-4 md:h-5 md:w-5" />
                      </Link>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;