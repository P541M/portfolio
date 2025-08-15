"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Users,
  Code,
  Mic,
  Award,
  Clock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { volunteerData } from "@/data/volunteer";

const VolunteerTeaser = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Get featured volunteer activities (most impactful ones)
  const featuredVolunteer = volunteerData.slice(0, 2);

  // Handle component mounting and visibility
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <Code className="h-5 w-5" />;
      case "microphone":
        return <Mic className="h-5 w-5" />;
      default:
        return <Heart className="h-5 w-5" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  if (!mounted) return null;

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">
              Community <span className="text-primary">Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Giving back through technology, mentorship, and community
              engagement
            </p>
          </motion.div>

          {/* Featured Volunteer Activities */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {featuredVolunteer.map((volunteer) => (
              <motion.div
                key={volunteer.id}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group h-full border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift bg-card/50 backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center space-x-2">
                          <Heart className="h-5 w-5 text-primary" />
                          <span>{volunteer.company}</span>
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className="w-fit bg-primary/10 text-primary border-primary/20"
                        >
                          {volunteer.category}
                        </Badge>
                      </div>
                      <Award className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Primary Role */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-lg flex items-center space-x-2">
                          {getIcon(volunteer.roles[0].icon || "")}
                          <span>{volunteer.roles[0].title}</span>
                        </h4>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{volunteer.roles[0].duration}</span>
                      </div>

                      <CardDescription className="text-sm leading-relaxed">
                        {volunteer.roles[0].description}
                      </CardDescription>
                    </div>

                    {/* Additional Roles */}
                    {volunteer.roles.length > 1 && (
                      <div className="space-y-2">
                        {volunteer.roles.slice(1).map((role, roleIndex) => (
                          <div
                            key={roleIndex}
                            className="flex items-center space-x-2 text-sm text-muted-foreground"
                          >
                            {getIcon(role.icon || "")}
                            <span>{role.title}</span>
                            <span className="text-xs">• {role.duration}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Values Highlight */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 text-center"
          >
            <div className="max-w-3xl mx-auto space-y-4">
              <Users className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-2xl font-semibold">
                Committed to{" "}
                <span className="text-primary">Community Growth</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe in using technology as a force for good, whether
                it&apos;s mentoring the next generation of developers,
                contributing to open-source projects, or helping organizations
                leverage technology to achieve their missions.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Want to learn more about my community involvement and volunteer
                initiatives?
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/volunteer" className="flex items-center space-x-2">
                  <span>View All Volunteer Work</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VolunteerTeaser;
