"use client";

import { ArrowRight, Download, Mail, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  const handleExploreClick = () => {
    const projectsSection = document.querySelector("[data-section='projects-teaser']");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
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

  return (
    <section
      id="hero-section"
      className="min-h-screen flex items-center justify-center bg-background"
      aria-labelledby="hero-title"
    >
      <div className="container px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium text-primary">
            Co-op Software Engineering Student @ UofG
          </p>
          
          <h1
            id="hero-title"
            className="mb-6 text-5xl font-bold tracking-tight text-foreground md:text-6xl"
          >
            <span className="text-primary">PSALM</span> ELEAZAR
          </h1>

          <p className="mb-8 text-lg text-muted-foreground max-w-2xl mx-auto">
            Currently contributing as a{" "}
            <span className="font-medium text-primary">Technology Research Analyst</span>{" "}
            at{" "}
            <a
              href="https://www.bmo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors underline underline-offset-4"
            >
              Bank of Montreal (BMO)
            </a>{" "}
            and open to opportunities that challenge me to build engaging digital experiences.
          </p>

          <p className="mb-8 text-base text-foreground">
            Passionate about{" "}
            <span className="text-primary font-medium">Full-stack Development</span>{" "}
            & <span className="text-primary font-medium">Project Management</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleExploreClick}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4" />
            </button>
            
            <a
              href="https://docs.google.com/document/d/14y5puVSbSHT0-GetZlJhusbWYR7hd1e_/edit?usp=sharing&ouid=100426459370719602883&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              View Resume
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <IconComponent className="h-5 w-5" />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;