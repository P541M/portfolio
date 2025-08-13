"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Code2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/volunteer", label: "Volunteer" },
    { href: "/contact", label: "Contact" },
  ];

  const isActiveNavItem = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname === href;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-out",
        scrolled
          ? "glass shadow-smooth border-b border-border/30 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Enhanced Logo */}
          <Link
            href="/"
            className="group flex items-center space-x-3 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/30 transition-all duration-300" />
              <Code2 className="relative h-8 w-8 text-primary group-hover:rotate-12 transition-all duration-300" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center space-x-1">
                <span className="font-bold text-xl text-primary tracking-tight">PSALM</span>
                <span className="font-bold text-xl text-foreground tracking-tight">ELEAZAR</span>
              </div>
              <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
                Software Engineer
              </span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group",
                  "hover:bg-primary/10 hover:text-primary",
                  isActiveNavItem(item.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                <span className="relative z-10">{item.label}</span>
                {isActiveNavItem(item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                )}
                <div className="absolute inset-0 bg-primary/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              </Link>
            ))}
            
            <div className="ml-6 flex items-center space-x-3">
              <Button
                asChild
                size="sm"
                className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a
                  href="https://docs.google.com/document/d/14y5puVSbSHT0-GetZlJhusbWYR7hd1e_/edit?usp=sharing&ouid=100426459370719602883&rtpof=true&sd=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <Download className="h-4 w-4 transition-transform group-hover:scale-110" />
                  <span>Resume</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="relative p-2 hover:bg-primary/10"
            >
              <div className="relative w-6 h-6">
                <span
                  className={cn(
                    "absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out",
                    isOpen ? "rotate-45 top-3" : "rotate-0 top-1"
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out top-3",
                    isOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute block h-0.5 w-6 bg-current transition-all duration-300 ease-in-out",
                    isOpen ? "-rotate-45 top-3" : "rotate-0 top-5"
                  )}
                />
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation - Slide-out menu */}
        <div
          className={cn(
            "md:hidden fixed inset-x-0 top-20 transition-all duration-300 ease-in-out",
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          )}
        >
          <div className="glass border border-border/50 mx-4 rounded-xl shadow-lg backdrop-blur-xl">
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg",
                    "hover:bg-primary/10 hover:text-primary transform hover:translate-x-1",
                    isActiveNavItem(item.href)
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground"
                  )}
                  style={{
                    animationDelay: isOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t border-border/50">
                <Button
                  asChild
                  size="sm"
                  className="w-full group bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a
                    href="https://docs.google.com/document/d/14y5puVSbSHT0-GetZlJhusbWYR7hd1e_/edit?usp=sharing&ouid=100426459370719602883&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2"
                  >
                    <Download className="h-4 w-4 transition-transform group-hover:scale-110" />
                    <span>Download Resume</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;