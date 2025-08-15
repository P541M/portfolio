"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Filter } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, getStatusColor, formatDate } from "@/data/projects";
import { Project } from "@/types";

const Projects = () => {
  const [filter, setFilter] = useState<"all" | Project["state"]>("all");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.state === filter
  );

  const displayedProjects = filteredProjects.slice(0, visibleProjects);
  const hasMoreProjects = filteredProjects.length > visibleProjects;

  // Handle component mounting and visibility
  useEffect(() => {
    setMounted(true);
    // Trigger visibility immediately for content above the fold or after short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Handle filter changes with smooth transitions
  const handleFilterChange = useCallback((newFilter: "all" | Project["state"]) => {
    if (newFilter === filter) return;
    
    setIsTransitioning(true);
    setFilter(newFilter);
    
    // Reset visible projects with a slight delay for smooth transition
    setTimeout(() => {
      setVisibleProjects(6);
      setIsTransitioning(false);
    }, 150);
  }, [filter]);

  // Ensure we don't show more projects than available when filter changes
  useEffect(() => {
    if (visibleProjects > filteredProjects.length && filteredProjects.length > 0) {
      setVisibleProjects(filteredProjects.length);
    }
  }, [filteredProjects.length, visibleProjects]);

  // Don't render anything until mounted (prevents hydration issues)
  if (!mounted) {
    return (
      <section id="projects" className="min-h-screen bg-muted/30 py-6">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A collection of projects showcasing my journey in software development,
              from innovative applications to practical solutions.
            </p>
          </div>
          {/* Loading skeleton */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-96 bg-muted/50 rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const filterOptions: { value: "all" | Project["state"]; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "Deployed", label: "Deployed" },
    { value: "In Development", label: "In Development" },
    { value: "In Testing", label: "In Testing" },
    { value: "Discontinued", label: "Discontinued" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
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
    <section id="projects" className="min-h-screen bg-muted/30 py-6">
      <div className="container px-4 mx-auto sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-4">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A collection of projects showcasing my journey in software development,
              from innovative applications to practical solutions.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2 mb-12">
            {filterOptions.map((option) => (
              <Button
                key={option.value}
                variant={filter === option.value ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterChange(option.value)}
                disabled={isTransitioning}
                className="text-xs disabled:opacity-50"
              >
                <Filter className="mr-1 h-3 w-3" />
                {option.label}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className={`grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-300 ${
              isTransitioning ? "opacity-50" : "opacity-100"
            }`}
          >
            {displayedProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="group h-full overflow-hidden hover-lift shadow-smooth hover:shadow-smooth-lg border-border/50">
                  {/* Project Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-3 right-3">
                      <Badge className={getStatusColor(project.state)}>
                        {project.state}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="line-clamp-1 group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Calendar className="mr-1 h-3 w-3" />
                          {formatDate(project.date)}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button
                        asChild
                        size="sm"
                        className="flex-1"
                      >
                        <Link href={`/projects/${project.id}`}>
                          View Details
                        </Link>
                      </Button>
                      
                      {project.link && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.github ? (
                              <Github className="h-4 w-4" />
                            ) : (
                              <ExternalLink className="h-4 w-4" />
                            )}
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          {hasMoreProjects && !isTransitioning && (
            <motion.div variants={itemVariants} className="text-center mt-12">
              <Button
                onClick={() => setVisibleProjects(prev => prev + 6)}
                variant="outline"
                size="lg"
              >
                Load More Projects ({filteredProjects.length - visibleProjects} remaining)
              </Button>
            </motion.div>
          )}

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div variants={itemVariants} className="text-center py-12">
              <div className="flex flex-col items-center space-y-3">
                <div className="text-4xl text-muted-foreground/30">🔍</div>
                <p className="text-muted-foreground text-lg font-medium">
                  No {filter === "all" ? "" : filter.toLowerCase()} projects found
                </p>
                <p className="text-muted-foreground/70 text-sm max-w-md">
                  {filter === "all" 
                    ? "It looks like there are no projects to display at the moment."
                    : `There are currently no projects with the "${filter}" status. Try selecting a different filter.`
                  }
                </p>
              </div>
            </motion.div>
          )}

          {/* Projects Count Display */}
          {filteredProjects.length > 0 && (
            <motion.div variants={itemVariants} className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Showing {Math.min(visibleProjects, filteredProjects.length)} of {filteredProjects.length} {filter === "all" ? "" : filter.toLowerCase()} projects
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;