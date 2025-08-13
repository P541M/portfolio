"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSmartNavigation } from "@/hooks/useSmartNavigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { handleNavClick, isHomePage } = useSmartNavigation();
  const activeSection = useScrollSpy(["projects", "timeline", "volunteer", "contact"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#timeline", label: "Experience" },
    { href: "#volunteer", label: "Volunteer" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavItemClick = (href: string, event: React.MouseEvent) => {
    setIsOpen(false);
    handleNavClick(href, event);
  };

  const isActiveNavItem = (href: string) => {
    if (href === "/") {
      return pathname === "/" && (!isHomePage || !activeSection);
    }
    
    if (href.startsWith("#") && isHomePage) {
      const sectionId = href.slice(1);
      return activeSection === sectionId;
    }
    
    return pathname === href;
  };

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "glass shadow-smooth border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 font-bold text-xl"
          >
            <span className="text-primary">PSALM</span>
            <span className="text-foreground">ELEAZAR</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={(e) => handleNavItemClick(item.href, e)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary cursor-pointer",
                  isActiveNavItem(item.href)
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </button>
            ))}
            <Button
              asChild
              size="sm"
              className="ml-4"
            >
              <a
                href="https://docs.google.com/document/d/14y5puVSbSHT0-GetZlJhusbWYR7hd1e_/edit?usp=sharing&ouid=100426459370719602883&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b border-border">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={(e) => handleNavItemClick(item.href, e)}
                  className={cn(
                    "block w-full text-left px-3 py-2 text-base font-medium transition-colors hover:text-primary",
                    isActiveNavItem(item.href)
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button
                  asChild
                  size="sm"
                  className="w-full"
                >
                  <a
                    href="https://docs.google.com/document/d/14y5puVSbSHT0-GetZlJhusbWYR7hd1e_/edit?usp=sharing&ouid=100426459370719602883&rtpof=true&sd=true"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;