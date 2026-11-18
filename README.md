# FAHIMA — Video Editor & Post-Production Studio Portfolio

An international-quality, clean luxury video editor portfolio website built for **Fahima**, designed with a **Clean Luxury meets Cinematic Storytelling** digital experience.

---

## ✨ Features & Architecture

- **Clean Luxury Design System**: Warm off-white (`#F8F8F5`), deep charcoal (`#171717`), and subtle studio accents (`#84CC16`) with modern editorial typography (**Space Grotesk**).
- **Cinematic Showreel Theater**: 16:9 responsive monitor frame with live clip previews, audio controls, and an on-demand 4K player.
- **Selected Work Portfolio**: Dynamic video project gallery with category filtering, video duration badges, hover states, and responsive YouTube modal player (`youtube-nocookie.com`).
- **Interactive Color Science Slider**: Before & after slider showing raw camera LOG profiles transformed into 12-bit DaVinci Resolve Rec.709 film grades.
- **Direct Editor Advantage**: Clear comparison table illustrating the advantages of direct collaboration vs. budget freelancers and agency middlemen.
- **Master/Detail Services**: Editorial service breakdown for YouTube, Podcast, Commercial, Short-Form, and Motion Graphics.
- **Working Process Pipeline**: 4-stage post-production workflow from raw footage upload to 4K delivery.
- **Project Briefing Form**: 11-field project inquiry experience connected to the backend API.
- **Dynamic CMS Integration**: Fetches projects, categories, services, testimonials, profile, hero, and SEO settings directly from the backend API with zero-crash fallbacks.

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS
- **Typography**: Space Grotesk
- **Animations**: Framer Motion
- **Icons**: Lucide React

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Environment configuration (.env.local)
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Run development server (Port 3000)
npm run dev

# Production build
npm run build
npm start
```
