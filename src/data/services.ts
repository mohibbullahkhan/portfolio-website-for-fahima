import { Service } from "@/types";

export const servicesData: Service[] = [
  {
    id: "long-form-editing",
    number: "01",
    title: "Long-Form Editing",
    tagline: "YouTube Documentaries & Video Essays",
    shortDescription:
      "Crafted for high-retention YouTube creators, video essayists, and documentary filmmakers. Calibrated narrative rhythm, strategic chapter pacing, and emotional story arcs that keep audiences watching till the final second.",
    deliverables: [
      "Narrative Structuring & Story Arc Pacing",
      "Dynamic B-Roll & Visual Context Integration",
      "Chapter Markers & Hook Retention Optimization",
      "Multi-Track Sound Design & Audio Leveling",
      "YouTube End Screen & Card Integration",
    ],
    tools: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "Frame.io"],
    popular: true,
  },
  {
    id: "short-form-editing",
    number: "02",
    title: "Short-Form Editing",
    tagline: "TikTok, Instagram Reels & YouTube Shorts",
    shortDescription:
      "Engineered for vertical algorithmic distribution. Scroll-stopping 3-second hook setups, animated kinetic typography, rapid visual pattern interrupts, and punchy sound design designed to maximize completion rates and shares.",
    deliverables: [
      "Scroll-Stopping 3-Second Hook Architecture",
      "Custom Kinetic Captions, Subtitles & Emojis",
      "Bass-Driven SFX, Risers & Beat Syncing",
      "Native 9:16 Optimized Delivery with Safe Zones",
      "Platform-Specific Algorithmic Formatting",
    ],
    tools: ["Premiere Pro", "CapCut Pro", "After Effects"],
    popular: true,
  },
  {
    id: "podcast-editing",
    number: "03",
    title: "Podcast Editing",
    tagline: "Multi-Cam Video Podcasts & Studio Talk Shows",
    shortDescription:
      "Turn raw multi-microphone, multi-camera studio discussions into polished broadcast video podcasts. Seamless speaker switching, background noise reduction, speaker lower-thirds, and high-energy viral bite-sized cutdowns.",
    deliverables: [
      "Automated / Precise Multi-Camera Angle Switching",
      "Broadcast Speech Isolation & Noise Cleanup (-16 LUFS)",
      "Branded Lower Thirds, Guest Badges & Topic Cards",
      "Timestamped Chapter Markers & Episode Packaging",
      "Short-Form Clip Repurposing for Social Media",
    ],
    tools: ["DaVinci Resolve Studio", "Adobe Audition", "Premiere Pro"],
    popular: false,
  },
  {
    id: "commercial-editing",
    number: "04",
    title: "Commercial Editing",
    tagline: "Brand Ads, Product Launches & Paid Campaigns",
    shortDescription:
      "High-impact visual advertising for DTC brands, tech companies, and agencies. Speed ramps, macro product showcase cuts, 12-bit DaVinci color grading, and broadcast-spec audio engineering to drive conversions and prestige.",
    deliverables: [
      "High-Energy Commercial Cutdowns (15s, 30s, 60s)",
      "Tactile Macro Product Highlighting & Match Cuts",
      "12-Bit Film LUT Emulation & Skin-Tone Mastering",
      "Music Licensing Synchronization & Spatial Audio",
      "Multi-Aspect Ratio Exports (16:9, 9:16, 4:5, 1:1)",
    ],
    tools: ["DaVinci Resolve Studio", "Premiere Pro", "After Effects"],
    popular: true,
  },
  {
    id: "motion-graphics",
    number: "05",
    title: "Motion Graphics",
    tagline: "Title Sequences, Kinetic Typography & VFX",
    shortDescription:
      "Elevate production value with custom motion design. Kinetic 2D/3D title sequences, branded lower thirds, animated infographic overlays, screen compositing, and dynamic graphic transitions tailored to your visual identity.",
    deliverables: [
      "Custom Kinetic Typography & Title Cards",
      "UI/UX Screen Mockup Animations & Screen Tracking",
      "Logo Stingers, Lower Thirds & Callout Graphics",
      "Seamless Graphic Match Cuts & Transitions",
      "Green Screen Keying & Visual Cleanup",
    ],
    tools: ["Adobe After Effects", "Blender", "Illustrator"],
    popular: false,
  },
];
