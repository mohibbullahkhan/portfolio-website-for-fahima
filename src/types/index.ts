export type ProjectCategory =
  | "All Projects"
  | "Reels & Shorts"
  | "Social Media Videos"
  | "Promotional Videos"
  | "Cinematic Editing"
  | "Commercial Videos";

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
  shortDescription: string;
  deliverables: string[];
  tools: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  projectCategory: string;
  rating: number;
  text: string;
  themeStyle: "lime" | "light" | "dark";
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  phase: string;
  title: string;
  description: string;
  details: string[];
}
