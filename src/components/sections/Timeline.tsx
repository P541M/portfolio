"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Server, 
  Cog, 
  Globe, 
  Computer, 
  BarChart3, 
  Users, 
  Film, 
  Pencil, 
  Code, 
  Building,
  ExternalLink
} from "lucide-react";
import { TimelineCard } from "@/components/ui/timeline-card";
import { timelineData } from "@/data/timeline";

const Timeline = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Handle component mounting and visibility
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200); // Slight delay for Timeline since it's further down

    return () => clearTimeout(timer);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "server":
        return <Server className="h-4 w-4" />;
      case "cog":
        return <Cog className="h-4 w-4" />;
      case "globe":
        return <Globe className="h-4 w-4" />;
      case "computer":
        return <Computer className="h-4 w-4" />;
      case "chart":
        return <BarChart3 className="h-4 w-4" />;
      case "users":
        return <Users className="h-4 w-4" />;
      case "film":
        return <Film className="h-4 w-4" />;
      case "pencil":
        return <Pencil className="h-4 w-4" />;
      case "code":
        return <Code className="h-4 w-4" />;
      case "building":
        return <Building className="h-4 w-4" />;
      default:
        return <Server className="h-4 w-4" />;
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  // Don't render anything until mounted (prevents hydration issues)
  if (!mounted) {
    return (
      <section id="timeline" className="min-h-screen bg-muted/30 pt-12 pb-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Professional Timeline
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              My professional journey through various roles and experiences in technology and business.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-96 bg-muted/50 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="timeline" className="min-h-screen bg-muted/30 pt-12 pb-6">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Professional Timeline
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              My professional journey through various roles and experiences in technology and business.
            </p>
          </motion.div>

          {/* Timeline Grid */}
          <motion.div
            variants={containerVariants}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {timelineData.map((item) => (
              <motion.div key={item.id} variants={itemVariants}>
                <TimelineCard item={item} getIcon={getIcon} />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <p className="text-muted-foreground mb-4">
              Interested in learning more about my background?
            </p>
            <a
              href="https://docs.google.com/document/d/14y5puVSbSHT0-GetZlJhusbWYR7hd1e_/edit?usp=sharing&ouid=100426459370719602883&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
            >
              View Full Resume
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;