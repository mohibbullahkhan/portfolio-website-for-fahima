import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    id: "professional-video-editing",
    number: "01",
    title: "Professional Video Editing",
    shortDescription: "Seamless editing, creative cuts, transitions, pacing rhythm, and compelling visual storytelling crafted for maximum engagement.",
    deliverables: [
      "Narrative Pacing & Rhythm Optimization",
      "Seamless Match Cuts & Creative Transitions",
      "Multi-Cam Footage Synchronization",
      "Sound Design & SFX Layering",
    ],
    tools: ["Adobe Premiere Pro", "Final Cut Pro"],
    popular: true,
  },
  {
    id: "reels-short-form",
    number: "02",
    title: "Reels & Short-Form Videos",
    shortDescription: "High-retention viral content built specifically for Instagram Reels, YouTube Shorts, and TikTok algorithms with dynamic kinetic captions.",
    deliverables: [
      "Scroll-Stopping 3-Second Hooks",
      "Animated Dynamic Subtitles & Emojis",
      "Punchy Sound Effects & Beat Drops",
      "Optimized 9:16 Aspect Formats",
    ],
    tools: ["Premiere Pro", "CapCut Pro", "After Effects"],
    popular: true,
  },
  {
    id: "color-grading",
    number: "03",
    title: "Color Grading",
    shortDescription: "Professional color correction and cinematic visual enhancement turning flat LOG footage into rich, filmic visual art.",
    deliverables: [
      "Primary Balance & Shot-to-Shot Matching",
      "Custom Cinematic Film Emulation Looks",
      "Skin Tone Isolation & Beautification",
      "HDR & Rec.709 Master Exports",
    ],
    tools: ["DaVinci Resolve Studio", "FilmConvert"],
    popular: false,
  },
  {
    id: "motion-graphics",
    number: "04",
    title: "Motion Graphics",
    shortDescription: "Creative typography, lower thirds, 2D/3D animated transitions, logo reveals, and visual effects that elevate production value.",
    deliverables: [
      "Kinetic Typography & Title Sequences",
      "Custom Lower Thirds & Callout Overlays",
      "Logo Reveals & Brand Stingers",
      "Compositing & Green Screen Keying",
    ],
    tools: ["Adobe After Effects", "Blender"],
    popular: false,
  },
];
