import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarAlt,
  faExternalLinkAlt,
  faInfoCircle,
  faChevronDown,
  faChevronUp,
  faXmark,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
// Import projects data from central store
import projects, { formatDate, getStatusColor } from "../data/projects";

const ProjectsComponent = () => {
  // State management
  const [activeFilters, setActiveFilters] = useState({
    status: [], // Change to array to support multiple selections
  });
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Load filters from sessionStorage on mount
  useEffect(() => {
    // Load saved filters when component mounts
    const savedFilters = sessionStorage.getItem("projectFilters");
    if (savedFilters) {
      try {
        const parsed = JSON.parse(savedFilters);
        setActiveFilters(parsed.activeFilters || { status: [] });
      } catch (e) {
        console.error("Error parsing saved filters:", e);
      }
    }
  }, []);

  // Save filters to sessionStorage when they change
  useEffect(() => {
    sessionStorage.setItem(
      "projectFilters",
      JSON.stringify({
        activeFilters,
      }),
    );
  }, [activeFilters]);

  // Sort by date (newest first)
  const sortedProjects = [...projects].sort((a, b) => {
    const dateA = new Date(a.date.replace("-", "/"));
    const dateB = new Date(b.date.replace("-", "/"));
    return dateB - dateA;
  });

  // Get all unique statuses
  const allStatuses = [
    ...new Set(projects.map((project) => project.state)),
  ].sort();

  // Filter projects based on filters
  const filteredProjects = sortedProjects.filter((project) => {
    // Status filter - match if no statuses selected or if project status is in selected statuses
    const matchesStatus =
      activeFilters.status.length === 0 || activeFilters.status.includes(project.state);

    return matchesStatus;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilters]);

  // Filter handling
  const toggleStatusFilter = (status) => {
    setActiveFilters((prev) => {
      const newStatus = prev.status.includes(status)
        ? prev.status.filter((s) => s !== status)
        : [...prev.status, status];
      return { ...prev, status: newStatus };
    });
    // Reset to first page when filters change
    setCurrentPage(1);
  };

  const clearFilters = useCallback(() => {
    setActiveFilters({ status: [] });
    sessionStorage.removeItem("projectFilters");
    // Reset to first page when filters are cleared
    setCurrentPage(1);
  }, []);

  // Pagination controls
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Project card component
  const ProjectCard = ({ project }) => (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-divider bg-white shadow-sm transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg">
      {/* Image with status badge */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute right-3 top-3">
          <span
            className={`rounded-full px-2 py-1 text-xs font-medium ${getStatusColor(project.state)}`}
          >
            {project.state}
          </span>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2">
          <h3 className="line-clamp-1 text-lg font-bold text-text">
            {project.title}
          </h3>
          <div className="mt-1 flex items-center text-sm text-text/60">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
            <span>{formatDate(project.date)}</span>
          </div>
        </div>
        <p className="mb-3 line-clamp-2 text-sm text-text/70">
          {project.description}
        </p>
        {/* Tech tags */}
        <div className="mb-4 mt-auto">
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech, idx) => (
              <span
                key={idx}
                className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
        {/* Actions */}
        <div className="flex gap-2">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-lg bg-primary py-2 text-center text-xs font-medium text-white transition-all duration-300 hover:bg-primary/90 group-hover:shadow-md"
            >
              <FontAwesomeIcon
                icon={project.github ? faGithub : faExternalLinkAlt}
                className="mr-1"
              />
              {project.github ? "View Code" : "Visit Project"}
            </a>
          )}
          <Link
            to={`/project/${project.id}`}
            className={`${project.link ? "" : "flex-1"} rounded-lg border border-divider px-3 py-2 text-center text-xs font-medium transition-all duration-300 hover:bg-primary/5 group-hover:shadow-md`}
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-1" />
            Details
          </Link>
        </div>
      </div>
    </div>
  );

  // Show active filters when filter section is collapsed
  const ActiveFiltersBar = () => {
    if (activeFilters.status.length > 0) {
      return (
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-sm text-text/70">Active filters:</span>

          {activeFilters.status.map((status) => (
            <button
              key={status}
              onClick={() => toggleStatusFilter(status)}
              className={`flex items-center rounded-full px-2 py-1 text-xs ${getStatusColor(
                status,
              )}`}
            >
              {status}
              <FontAwesomeIcon icon={faXmark} className="ml-1 h-3 w-3" />
            </button>
          ))}

          <button
            onClick={clearFilters}
            className="ml-auto rounded-full bg-secondary/30 px-2 py-1 text-xs text-text/70 hover:bg-secondary/50"
          >
            Clear all
          </button>
        </div>
      );
    }
    return null;
  };

  // Filters section component
  const FiltersSection = () => (
    <div className="mb-8">
      <ActiveFiltersBar />
      <div className="flex flex-col gap-4 rounded-lg border border-divider bg-white p-4">
        {/* Status filter */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-text/70">Status:</span>
          <div className="flex flex-wrap gap-2">
            {allStatuses.map((status) => (
              <button
                key={status}
                onClick={() => toggleStatusFilter(status)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  activeFilters.status.includes(status)
                    ? getStatusColor(status)
                    : "bg-secondary/50 text-text hover:bg-secondary"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // Pagination component
  const Pagination = () => {
    if (totalPages <= 1) return null;
    
    // Generate page numbers to display
    const getPageNumbers = () => {
      const pageNumbers = [];
      const maxVisiblePages = 5;
      
      if (totalPages <= maxVisiblePages) {
        // Show all pages if total is less than max visible
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        // Always show first page
        pageNumbers.push(1);
        
        // Calculate start and end of visible pages
        let startPage = Math.max(2, currentPage - 1);
        let endPage = Math.min(totalPages - 1, currentPage + 1);
        
        // Adjust if we're near the beginning or end
        if (currentPage <= 2) {
          endPage = 4;
        } else if (currentPage >= totalPages - 1) {
          startPage = totalPages - 3;
        }
        
        // Add ellipsis if needed
        if (startPage > 2) {
          pageNumbers.push('...');
        }
        
        // Add middle pages
        for (let i = startPage; i <= endPage; i++) {
          pageNumbers.push(i);
        }
        
        // Add ellipsis if needed
        if (endPage < totalPages - 1) {
          pageNumbers.push('...');
        }
        
        // Always show last page
        pageNumbers.push(totalPages);
      }
      
      return pageNumbers;
    };
    
    return (
      <div className="mt-8 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              currentPage === 1
                ? "cursor-not-allowed text-text/30"
                : "text-text hover:bg-secondary/10"
            }`}
            aria-label="Previous page"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          
          {getPageNumbers().map((pageNumber, index) => (
            <React.Fragment key={index}>
              {pageNumber === '...' ? (
                <span className="px-2 text-text/50">...</span>
              ) : (
                <button
                  onClick={() => goToPage(pageNumber)}
                  className={`flex h-8 w-8 items-center justify-center rounded-full ${
                    currentPage === pageNumber
                      ? "bg-primary text-white"
                      : "text-text hover:bg-secondary/10"
                  }`}
                  aria-label={`Page ${pageNumber}`}
                  aria-current={currentPage === pageNumber ? "page" : undefined}
                >
                  {pageNumber}
                </button>
              )}
            </React.Fragment>
          ))}
          
          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`flex h-8 w-8 items-center justify-center rounded-full ${
              currentPage === totalPages
                ? "cursor-not-allowed text-text/30"
                : "text-text hover:bg-secondary/10"
            }`}
            aria-label="Next page"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    );
  };

  // Empty state
  const EmptyState = () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mb-4 h-16 w-16 text-text/30"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h3 className="mb-2 text-lg font-medium text-text">No projects found</h3>
      <p className="text-text/60">Try adjusting your filters</p>
      <button
        onClick={clearFilters}
        className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
      >
        Clear all filters
      </button>
    </div>
  );

  // Main component render
  return (
    <section
      id="projects-section"
      className="section-container min-h-screen"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title" className="section-title">
        Projects
      </h2>
      {/* Filters */}
      <FiltersSection />
      {/* Projects grid */}
      {filteredProjects.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          {/* Pagination */}
          <Pagination />
        </>
      ) : (
        <EmptyState />
      )}
    </section>
  );
};

export default ProjectsComponent;
