"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, ArrowUp, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 text-center md:grid-cols-3 md:text-left">
          {/* Left Column - About */}
          <div>
            <Link
              href="/"
              className="mb-3 inline-block text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              PSALM ELEAZAR
            </Link>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              Technology Research Analyst at BMO with a passion for full-stack
              development and project management.
            </p>
          </div>

          {/* Middle Column - Contact Info */}
          <div>
            <h3 className="mb-4 font-medium text-foreground">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center justify-center md:justify-start">
                <Mail className="mr-3 h-4 w-4 text-primary" />
                <a
                  href="mailto:videna.psalmeleazar@gmail.com"
                  className="transition-colors duration-300 hover:text-primary"
                >
                  videna.psalmeleazar@gmail.com
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start">
                <MapPin className="mr-3 h-4 w-4 text-primary" />
                Toronto, Canada
              </p>
            </div>
          </div>

          {/* Right Column - Social Links */}
          <div>
            <h3 className="mb-4 font-medium text-foreground">Connect</h3>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    <IconComponent className="h-4 w-4" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar with Copyright and Back to Top */}
      <div className="border-t border-border/40 bg-muted/30">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 py-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Psalm Eleazar. All rights reserved.
          </p>
          <Button
            onClick={scrollToTop}
            variant="outline"
            size="sm"
            className="group flex items-center gap-2 bg-background hover:bg-primary hover:text-primary-foreground"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;