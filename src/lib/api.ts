import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { testimonialsData } from "@/data/testimonials";
import { Project, Service, Testimonial } from "@/types";

const RAW_API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";
const API_BASE_URL = RAW_API_URL.replace(/\/$/, "");

export interface ApiCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  displayOrder: number;
}

export interface ApiProject {
  id: string;
  title: string;
  slug: string;
  description: string;
  youtubeUrl: string;
  youtubeVideoId: string;
  thumbnailUrl?: string | null;
  categoryId: string;
  category?: {
    id: string;
    name: string;
    slug: string;
  };
  isFeatured: boolean;
  status: "DRAFT" | "PUBLISHED";
  displayOrder: number;
  createdAt: string;
  updatedAt: string;
}

export interface ApiHero {
  headline: string;
  subheadline: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  showreelYoutubeUrl: string;
  showreelVideoId?: string;
}

export interface ApiProfile {
  name: string;
  headline: string;
  bio: string;
  profileImage: string;
  location: string;
  availabilityStatus: string;
}

export interface ApiService {
  id: string;
  title: string;
  description: string;
  icon: string;
  displayOrder: number;
  isActive: boolean;
}

export interface ApiTestimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company?: string | null;
  message: string;
  avatarUrl?: string | null;
  rating: number;
  isPublished: boolean;
  displayOrder: number;
}

export interface ApiSettings {
  siteName: string;
  logoUrl?: string | null;
  faviconUrl?: string | null;
  contactEmail: string;
  phone?: string | null;
  whatsapp?: string | null;
  location?: string | null;
  socialLinks?: {
    youtube?: string | null;
    instagram?: string | null;
    linkedin?: string | null;
    twitter?: string | null;
    github?: string | null;
    whatsapp?: string | null;
  } | null;
  footerText?: string | null;
  seoTitle?: string | null;
  seoDescription?: string | null;
  ogImageUrl?: string | null;
}

// Reusable fetcher with timeout & fallback safety
async function fetchWithFallback<T>(endpoint: string, fallback: T): Promise<T> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const res = await fetch(`${API_BASE_URL}${endpoint}`, {
      signal: controller.signal,
      headers: {
        Accept: "application/json",
      },
      cache: "no-store", // Always fresh for dynamic portfolio updates
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      return fallback;
    }

    const json = await res.json();
    return json.data ?? fallback;
  } catch {
    // Network failure, backend offline, or server timeout: return graceful fallback
    return fallback;
  }
}

// 1. Hero
export async function getHero(): Promise<ApiHero> {
  return fetchWithFallback<ApiHero>("/hero", {
    headline: "PRECISION CUTS. CINEMATIC IMPACT.",
    subheadline: "FAHIMA STUDIO | OPEN FOR SELECT COMMISSIONS",
    description:
      "Post-production specialist for top YouTubers, podcasters, and high-growth brands across the US, UK, and Australia. Frame-accurate narrative pacing, 12-bit DaVinci color grading, and broadcast spatial audio engineering.",
    primaryButtonText: "Explore Selected Work",
    primaryButtonLink: "#work",
    secondaryButtonText: "Book Discovery Call",
    showreelYoutubeUrl: "https://www.youtube.com/watch?v=ScMzIvxBSi4",
    showreelVideoId: "ScMzIvxBSi4",
  });
}

// 2. Profile
export async function getProfile(): Promise<ApiProfile> {
  return fetchWithFallback<ApiProfile>("/profile", {
    name: "Fahima",
    headline: "Senior Video Editor & Post-Production Specialist",
    bio: "I craft high-retention commercial films, viral creator shorts, and narrative cuts for creators and global brands across the US, UK, and Australia — combining frame-accurate pacing, 12-bit DaVinci Resolve color grading, and broadcast spatial audio design.",
    profileImage:
      "https://i.ibb.co.com/pvM01V2h/A9-CC37-F4-A211-4-C07-958-B-86281-CB3030-B.jpg",
    location: "Remote / Worldwide (US, UK, AUS)",
    availabilityStatus: "Available for select commissions",
  });
}

// 3. Categories
export async function getCategories(): Promise<ApiCategory[]> {
  return fetchWithFallback<ApiCategory[]>("/categories", [
    { id: "1", name: "Long-Form", slug: "long-form", displayOrder: 1 },
    { id: "2", name: "Short-Form & Reels", slug: "short-form-and-reels", displayOrder: 2 },
    { id: "3", name: "Commercial", slug: "commercial", displayOrder: 3 },
    { id: "4", name: "Podcast", slug: "podcast", displayOrder: 4 },
    { id: "5", name: "Motion Graphics", slug: "motion-graphics", displayOrder: 5 },
  ]);
}

// 4. Projects (Published Only)
export async function getProjects(): Promise<Project[]> {
  const apiProjects = await fetchWithFallback<ApiProject[]>("/projects", []);

  if (apiProjects && apiProjects.length > 0) {
    // Map backend project model to frontend presentation schema
    return apiProjects.map((p, idx) => {
      const videoId = p.youtubeVideoId || "ScMzIvxBSi4";
      const ytThumb = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

      return {
        id: p.id,
        title: p.title,
        category: (p.category?.name as any) || "Commercial",
        shortDescription: p.description.slice(0, 140) + (p.description.length > 140 ? "..." : ""),
        fullDescription: p.description,
        thumbnail: p.thumbnailUrl || ytThumb,
        videoUrl: p.youtubeUrl,
        videoType: "youtube" as const,
        duration: "4K DCI",
        year: new Date(p.createdAt || Date.now()).getFullYear().toString(),
        client: p.category?.name || "Client Commission",
        softwareUsed: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
        featured: p.isFeatured,
      };
    });
  }

  // Fallback to static seed data
  return projectsData;
}

// 5. Services (Active Only)
export async function getServices(): Promise<Service[]> {
  const apiServices = await fetchWithFallback<ApiService[]>("/services", []);

  if (apiServices && apiServices.length > 0) {
    return apiServices.map((s, idx) => ({
      id: s.id,
      number: `0${idx + 1}`,
      title: s.title,
      tagline: s.title.toUpperCase(),
      shortDescription: s.description,
      deliverables: [
        "Frame-accurate narrative cut & pacing",
        "12-bit DaVinci Resolve color grade",
        "Spatial audio mastering & sound design",
        "Exported in 4K ProRes & web masters",
      ],
      tools: ["Premiere Pro", "DaVinci Resolve", "After Effects", "iZotope RX"],
      popular: idx === 1,
      iconName: s.icon,
    }));
  }

  return servicesData;
}

// 6. Testimonials (Published Only)
export async function getTestimonials(): Promise<Testimonial[]> {
  const apiTestimonials = await fetchWithFallback<ApiTestimonial[]>("/testimonials", []);

  if (apiTestimonials && apiTestimonials.length > 0) {
    return apiTestimonials.map((t) => ({
      id: t.id,
      name: t.clientName,
      role: t.clientRole + (t.company ? ` • ${t.company}` : ""),
      company: t.company || undefined,
      avatar:
        t.avatarUrl ||
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      projectCategory: "COMMISSION",
      text: t.message,
    }));
  }

  return testimonialsData;
}

// 7. Site Settings & SEO
export async function getSettings(): Promise<ApiSettings> {
  return fetchWithFallback<ApiSettings>("/settings", {
    siteName: "Fahima | Video Editor",
    contactEmail: "aminakhan.743634@gmail.com",
    location: "Remote / Worldwide (US, UK, AUS)",
    footerText:
      "© 2026 Fahima. All rights reserved. Cinematic storytelling for high-growth creators.",
    socialLinks: {
      youtube: "https://youtube.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
    seoTitle: "Fahima | Senior Video Editor & Post-Production Specialist",
    seoDescription:
      "Award-winning video editing, pacing, color grading and sound design for YouTube creators, podcasts, and commercial brands worldwide.",
  });
}

// 8. Contact Submission
export async function submitContactMessage(payload: {
  name: string;
  email: string;
  subject?: string;
  message: string;
}): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.message || "Failed to submit message");
    }

    return {
      success: true,
      message: json.message || "Message sent successfully!",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message || "Network error. Please try again or email directly.",
    };
  }
}
