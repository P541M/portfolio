import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, getStatusColor, formatDate } from "@/data/projects";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Psalm Eleazar`,
    description: project.description.substring(0, 160),
    openGraph: {
      title: `${project.title} - Psalm Eleazar`,
      description: project.description.substring(0, 160),
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Get related projects (same technologies or similar)
  const relatedProjects = projects
    .filter((p) => 
      p.id !== project.id && 
      p.technologies.some(tech => project.technologies.includes(tech))
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden rounded-lg border border-border">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge className={getStatusColor(project.state)}>
                    {project.state}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {formatDate(project.date)}
                  </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  {project.title}
                </h1>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap gap-3">
                {project.link && (
                  <Button asChild>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      {project.github ? (
                        <>
                          <Github className="h-4 w-4" />
                          View on GitHub
                        </>
                      ) : (
                        <>
                          <ExternalLink className="h-4 w-4" />
                          View Live Project
                        </>
                      )}
                    </a>
                  </Button>
                )}
                <Button variant="outline" asChild>
                  <Link href="/">
                    Get In Touch
                  </Link>
                </Button>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="font-semibold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Key Features & Highlights */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Project Highlights</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Technology Stack</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Built with modern technologies including {project.technologies.slice(0, 3).join(", ")}
                  {project.technologies.length > 3 && ` and ${project.technologies.length - 3} more`}.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Current Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Badge className={getStatusColor(project.state)}>
                    {project.state}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    {project.state === "Deployed" && "Live and accessible"}
                    {project.state === "In Development" && "Actively being developed"}
                    {project.state === "In Testing" && "Currently in testing phase"}
                    {project.state === "Discontinued" && "No longer maintained"}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Development Type</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {project.github ? "Open source project available on GitHub" : "Professional/commercial project"}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.map((relatedProject) => (
                <Card key={relatedProject.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative aspect-video overflow-hidden rounded-t-lg">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{relatedProject.title}</CardTitle>
                    <CardDescription>
                      {relatedProject.description.substring(0, 120)}...
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full">
                      <Link href={`/projects/${relatedProject.id}`}>
                        View Project
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}