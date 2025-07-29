"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";

interface NavigationOptions {
  smooth?: boolean;
  offset?: number;
}

export function useSmartNavigation() {
  const router = useRouter();
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const scrollToElement = useCallback((elementId: string, options: NavigationOptions = {}) => {
    const { smooth = true, offset = 80 } = options;
    
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: smooth ? "smooth" : "instant",
      });
    }
  }, []);

  const navigateToSection = useCallback((sectionId: string, options: NavigationOptions = {}) => {
    if (isHomePage) {
      // Same page navigation - just scroll
      scrollToElement(sectionId, options);
    } else {
      // Cross-page navigation - navigate then scroll
      router.push(`/?section=${sectionId}`);
    }
  }, [isHomePage, router, scrollToElement]);

  const navigateToHome = useCallback(() => {
    if (isHomePage) {
      // Already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home page
      router.push("/");
    }
  }, [isHomePage, router]);

  // Handle section scrolling when navigating from other pages
  useEffect(() => {
    if (isHomePage && typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const section = urlParams.get("section");
      
      if (section) {
        // Small delay to ensure page is loaded
        const timer = setTimeout(() => {
          scrollToElement(section);
          // Clean up URL without causing page reload
          const newUrl = window.location.pathname;
          window.history.replaceState({}, "", newUrl);
        }, 100);
        
        return () => clearTimeout(timer);
      }
    }
  }, [isHomePage, scrollToElement]);

  // Smart link handler for navigation items
  const handleNavClick = useCallback((href: string, event?: React.MouseEvent) => {
    if (event) {
      event.preventDefault();
    }

    if (href === "/") {
      navigateToHome();
    } else if (href.startsWith("#")) {
      const sectionId = href.slice(1);
      navigateToSection(sectionId);
    } else {
      // Regular navigation
      router.push(href);
    }
  }, [navigateToHome, navigateToSection, router]);

  return {
    navigateToSection,
    navigateToHome,
    handleNavClick,
    scrollToElement,
    isHomePage,
  };
}