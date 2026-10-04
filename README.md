# FAHIMA — Professional Video Editor & Creative Storyteller Portfolio

A world-class, editorial portfolio website built for **Fahima**, a professional video editor and creative storyteller.

![Fahima Portfolio Screenshot](https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80)

---

## ✨ Features & Architecture

- **High-Impact Visual Identity**: Electric Lime Green (`#B7FF00`) accents on deep dark charcoal (`#1D1E22`, `#25262B`) with oversized condensed typography (**Anton** and **Bebas Neue**).
- **Hero Video Editing Suite**: Realistic NLE editing workspace with live playhead, audio meters, clip tags, and timeline controls.
- **Scroll-Driven Text Fill**: Progressive word-by-word reveal that shifts from subtle muted opacity to vibrant solid colors as you scroll through the manifesto.
- **Auto-Running Project Cards**: Uniform editorial cards with auto-playing silent looping MP4 background video previews.
- **Interactive Lightbox Modal**: Plays full-resolution YouTube, Vimeo, or MP4 master cuts with keyboard ESC support.
- **Work Category Filter**: Instant smooth filtering across *Reels & Shorts*, *Social Media*, *Promotional*, *Cinematic*, and *Commercial* projects.
- **Creative Services**: 4 numbered editorial service offerings with deliverables checklist and software stacks.
- **Precision Workbench & Expertise**: Split-screen editing HUD with interactive technical checklist.
- **Client Testimonials**: Editorial review slider featuring signature electric lime card.
- **Cinematic CTA & Digital Counter**: Full-width studio backdrop with digital frame master counter blocks.
- **Interactive FAQ Accordion**: Expandable answers with custom lime indicators.
- **Validated Contact Form**: Complete client onboarding form with project category selectors and social links.
- **Giant Lime Typography Footer**: Iconic condensed wordmark spanning the full viewport width.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (Anton, Bebas Neue, Inter)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/mohibbullahkhan/portfolio-website-for-fahima.git
cd portfolio-website-for-fahima
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Google Fonts, SEO metadata
│   │   ├── page.tsx           # Assembled portfolio sections
│   │   └── globals.css        # Tailwind tokens, noise overlays, scrollbars
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navigation with mobile menu
│   │   ├── Hero.tsx           # Electric lime hero + video editor suite UI
│   │   ├── Marquee.tsx        # Infinite ticker
│   │   ├── Introduction.tsx   # Scroll-driven progressive text fill
│   │   ├── PreviousWork.tsx   # Portfolio grid with category filter
│   │   ├── ProjectCard.tsx    # Uniform card with auto-running looping video
│   │   ├── VideoModal.tsx     # Lightbox video player
│   │   ├── Services.tsx       # 4 numbered creative services
│   │   ├── EditingExpertise.tsx# Timeline workbench visual & checklist
│   │   ├── About.tsx          # Personal story & philosophy
│   │   ├── CreativeProcess.tsx# 4-step workflow
│   │   ├── Testimonials.tsx   # Testimonials with lime card
│   │   ├── ContactCTA.tsx     # Full-width cinematic CTA with counter
│   │   ├── FAQAccordion.tsx   # Expandable Q&A
│   │   ├── ContactForm.tsx    # Validated contact form + social links
│   │   └── Footer.tsx         # Giant lime typographic footer
│   ├── data/
│   │   ├── projects.ts        # Editable projects list
│   │   ├── services.ts        # Service offerings
│   │   ├── testimonials.ts    # Client reviews
│   │   └── faqs.ts            # FAQs
│   ├── types/
│   │   └── index.ts           # Strict TypeScript interfaces
│   └── lib/
│       └── utils.ts           # Helper functions
```

---

## 📄 License

This project is private and proprietary to Fahima. All rights reserved.
