"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building,
  Calendar,
  MapPin,
  Briefcase,
  Star,
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
import { timelineData } from "@/data/timeline";

const ExperienceTeaser = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Get featured experiences (most recent work experiences)
  const featuredExperiences = timelineData
    .filter((item) => item.type === "work")
    .slice(0, 2);

  // Handle component mounting and visibility
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

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
    <section className="py-24 bg-muted/30">
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
              Professional <span className="text-primary">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions and driving impact across diverse
              technology environments
            </p>
          </motion.div>

          {/* Featured Experiences */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {featuredExperiences.map((experience) => (
              <motion.div
                key={experience.id}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group h-full border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift bg-card/50 backdrop-blur-sm">
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center space-x-2">
                          <Building className="h-5 w-5" />
                          <span>{experience.company}</span>
                        </CardTitle>
                        <Badge variant="secondary" className="w-fit">
                          {experience.category}
                        </Badge>
                      </div>
                      <Star className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Most Recent Role */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-lg flex items-center space-x-2">
                          <Briefcase className="h-4 w-4 text-primary" />
                          <span>{experience.roles[0].title}</span>
                        </h4>
                      </div>

                      <div className="flex items-center text-sm text-muted-foreground space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{experience.roles[0].duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>Remote</span>
                        </div>
                      </div>

                      <CardDescription className="text-sm leading-relaxed">
                        {experience.roles[0].description}
                      </CardDescription>
                    </div>

                    {/* Additional Roles Indicator */}
                    {experience.roles.length > 1 && (
                      <div className="pt-4 border-t border-border/50">
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>
                            + {experience.roles.length - 1} additional role
                            {experience.roles.length > 2 ? "s" : ""}
                          </span>
                          <ArrowRight className="h-4 w-4 opacity-60" />
                        </div>
                      </div>
                    )}

                    {/* Work Term Report if available */}
                    {experience.hasWorkTermReport && (
                      <div className="flex items-center space-x-2 text-sm text-primary">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span>Work Term Report Available</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8"
          >
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">3+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">
                {timelineData.filter((item) => item.type === "work").length}
              </div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">
                Projects Delivered
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Interested in my complete professional journey and achievements?
              </p>
              <Button asChild size="lg" className="group">
                <Link
                  href="/experience"
                  className="flex items-center space-x-2"
                >
                  <span>View Full Experience</span>
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

export default ExperienceTeaser;
