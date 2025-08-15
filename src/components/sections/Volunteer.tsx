"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Code, Cog, Mic } from "lucide-react";
import { VolunteerCard } from "@/components/ui/volunteer-card";
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
      <section id="volunteer" className="min-h-screen bg-muted/30 pt-12 pb-6">
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
    <section id="volunteer" className="min-h-screen bg-muted/30 pt-12 pb-6">
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
                <VolunteerCard volunteer={volunteer} getIcon={getIcon} />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Interested in collaboration or volunteer opportunities?
            </p>
            <a
              href="/contact"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
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