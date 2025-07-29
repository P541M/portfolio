export interface Project {
  id: string;
  title: string;
  description: string;
  state: "Deployed" | "In Testing" | "In Development" | "Discontinued";
  link: string | null;
  image: string;
  technologies: string[];
  date: string;
  github: boolean;
}

export interface TimelineRole {
  title: string;
  description: string;
  duration: string;
  icon?: string;
}

export interface TimelineItem {
  id: string;
  company: string;
  roles: TimelineRole[];
  hasWorkTermReport: boolean;
  reportPath?: string;
  type: "work" | "education" | "volunteer";
  category: string;
}

export interface VolunteerItem {
  id: string;
  company: string;
  roles: TimelineRole[];
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}