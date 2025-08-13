import Hero from "@/components/sections/Hero";
import ProjectsTeaser from "@/components/sections/ProjectsTeaser";
import ExperienceTeaser from "@/components/sections/ExperienceTeaser";
import VolunteerTeaser from "@/components/sections/VolunteerTeaser";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <ProjectsTeaser />
      <ExperienceTeaser />
      <VolunteerTeaser />
      <Contact />
    </div>
  );
}