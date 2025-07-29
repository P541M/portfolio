import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects } from "@/data/projects";
import ProjectPageContent from "./ProjectPageContent";

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

  return <ProjectPageContent project={project} />;
}