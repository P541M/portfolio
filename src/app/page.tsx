import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Volunteer from "@/components/sections/Volunteer";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Projects />
      <Timeline />
      <Volunteer />
      <Contact />
    </div>
  );
}