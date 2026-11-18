export type ProjectCategory =
  | "All Projects"
  | "Long-Form"
  | "Short-Form & Reels"
  | "Commercial"
  | "Podcast"
  | "Motion Graphics";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  fullDescription?: string;
  thumbnail: string;
  videoUrl: string; // YouTube, Vimeo, or direct MP4 URL
  videoType: "youtube" | "vimeo" | "mp4";
  previewVideo?: string; // Auto-running silent looping background video URL
  duration?: string;
  year?: string;
  client?: string;
  softwareUsed?: string[];
  featured?: boolean;
  aspectRatio?: "16/9" | "9/16" | "4/5";
}

export interface Service {
  id: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  deliverables: string[];
  tools: string[];
  popular?: boolean;
  iconName?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  projectCategory: string;
  text: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface WorkflowStep {
  number: string;
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}
