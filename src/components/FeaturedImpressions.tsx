"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Sparkles, ArrowUpRight, Film } from "lucide-react";
import VideoModal from "./VideoModal";
import { Project } from "@/types";
import { projectsData } from "@/data/projects";

// The 4 spotlight showcase cards exactly matching the reference screenshot:
const impressionCards = [
  {
    id: "cinematic-storytelling",
    title: "Cybernetic Vision & Pulse",
    category: "Cinematic Narrative",
    description: "Anamorphic neon grading with dynamic speed ramping and high-impact bass drops.",
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1000&q=80",
    ratio: "aspect-[4/3]",
    duration: "03:42",
  },
  {
    id: "lifestyle-video",
    title: "Twilight Coastline Odyssey",
    category: "Travel & Commercial",
    description: "Warm film emulation capturing coastal light flares, rhythm, and scenic landscapes.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    ratio: "aspect-[4/3]",
    duration: "02:10",
  },
  {
    id: "visual-storytelling",
    title: "Deep Space Nebula Voyage",
    category: "Visual Effects & 3D",
    description: "Atmospheric visual poem with slow-motion cinematography and spatial soundscapes.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
    ratio: "aspect-[4/3]",
    duration: "04:15",
  },
  {
    id: "creative-brand-promotion",
    title: "Abyssal Coral & Flora",
    category: "Macro & High Dynamic",
    description: "Commercial color grading with macro depth of field and kinetic sound layering.",
    image: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=1000&q=80",
    ratio: "aspect-[4/3]",
    duration: "01:15",
  },
];

export default function FeaturedImpressions() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (cardId: string) => {
    const proj = projectsData.find((p) => p.id === cardId) || projectsData[0];
    setSelectedProject(proj);
  };

  return (
    <section className="relative bg-[#060714] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Subtle Nebula Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-violet-900/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none stars-overlay opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header (Matching Screenshot) */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/50 border border-violet-500/30 text-violet-300 text-xs font-medium backdrop-blur-md mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Curated Showreel Highlights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            Videos That Leave A <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent purple-text-glow">
              Lasting Impression
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed"
          >
            Meticulously edited with emotional rhythm, high dynamic range color grading,
            and immersive audio to stop the scroll and captivate audiences.
          </motion.p>
        </div>

        {/* 4-Card 2x2 Showcase Grid (Matching Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {impressionCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => handleCardClick(card.id)}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c0d24] border border-white/[0.1] hover:border-violet-500/50 shadow-[0_15px_40px_rgba(0,0,0,0.7)] transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060714] via-black/30 to-transparent opacity-85 group-hover:opacity-70 transition-opacity" />

                {/* Top Tags */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md text-violet-300 border border-violet-500/30">
                    {card.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-slate-300 bg-black/70 backdrop-blur-md border border-white/10">
                    {card.duration}
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-violet-600/90 text-white flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.7)] transform scale-90 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Title Bar with Description */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-violet-300 transition-colors">
                      {card.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-violet-400 group-hover:translate-x-1 transition-transform">
                      PLAY CUT
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-snug">
                    {card.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Button Below 4 Cards (Matching Screenshot) */}
        <div className="mt-12 text-center">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/15 backdrop-blur-md transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_25px_rgba(139,92,246,0.3)]"
          >
            <span>Explore All Work</span>
            <ArrowUpRight className="w-4 h-4 text-violet-400" />
          </Link>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
