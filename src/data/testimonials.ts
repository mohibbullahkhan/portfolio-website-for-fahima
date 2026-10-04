import { Testimonial } from "@/types";

/**
 * Client Testimonials (Editable Placeholders)
 * As instructed, these are structured placeholder entries that Fahima
 * can replace with genuine client reviews and feedback.
 */
export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Alex Morgan",
    role: "Content Director",
    company: "Studio Apex",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    projectCategory: "Cinematic Brand Film",
    rating: 5,
    text: "“Fahima transformed our raw footage into an absolute masterpiece. Her rhythm, sense of timing, and color grading elevated our campaign beyond what we envisioned. True professional craftsmanship!”",
    themeStyle: "lime", // Electric lime card like in the reference!
  },
  {
    id: "testimonial-2",
    name: "Marcus Vance",
    role: "Lead Creator",
    company: "Velocity Media",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    projectCategory: "Viral Social Shorts",
    rating: 5,
    text: "“Our average watch time jumped by over 60% after Fahima took over our short-form edits. Her dynamic cuts, sound design, and pacing hooks are second to none in the industry.”",
    themeStyle: "light", // Crisp light card like in reference!
  },
  {
    id: "testimonial-3",
    name: "Elena Rostova",
    role: "Brand Strategist",
    company: "Kinetix Global",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    projectCategory: "Commercial Product Launch",
    rating: 5,
    text: "“Flawless communication, quick turnaround, and an incredible eye for storytelling. She intuitively understood our brand voice on the very first cut. Fahima is our go-to editor now.”",
    themeStyle: "dark", // Dark charcoal card
  },
];
