"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, getStatusColor } from "@/data/projects";

const ProjectsTeaser = () => {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Get featured projects (top 3 most recent/important)
  const featuredProjects = projects
    .filter(project => project.state === "Deployed" || project.state === "In Development")
    .slice(0, 3);

  // Handle component mounting and visibility
  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
    <section className="py-12 bg-background" data-section="projects-teaser">
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
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions across various technologies and domains
            </p>
          </motion.div>

          {/* Featured Projects Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="group h-full overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift bg-card/50 backdrop-blur-sm">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant="secondary" 
                        className={`${getStatusColor(project.state)} border-0 shadow-lg`}
                      >
                        {project.state}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader className="space-y-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.link && (
                          <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary" />
                        )}
                        {project.github && (
                          <Github className="h-4 w-4 text-muted-foreground hover:text-primary" />
                        )}
                      </div>
                    </div>
                    
                    <CardDescription className="line-clamp-3 text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs border-border/50 bg-muted/30"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs border-border/50 bg-muted/30">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    {/* Project Date */}
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3 mr-1" />
                      {project.date}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Want to explore all my projects and see detailed case studies?
              </p>
              <Button asChild size="lg" className="group">
                <Link href="/projects" className="flex items-center space-x-2">
                  <span>View All Projects</span>
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

export default ProjectsTeaser;