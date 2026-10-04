"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Film, Sliders, Volume2, TrendingUp } from "lucide-react";

export default function Introduction() {
  return (
    <section className="relative bg-[#1D1E22] text-[#F5F5F5] py-24 sm:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden noise-overlay">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Tilted Polaroids / Clips inspired directly by reference */}
      <div className="absolute left-4 sm:left-12 top-24 z-10 w-28 sm:w-44 bg-[#25262B] p-2 rounded-xl shadow-2xl border border-white/10 hidden md:block transform -rotate-6">
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=400&q=80"
            alt="Cinematic Moodboard Frame"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <span className="absolute bottom-2 left-2 text-[9px] font-mono text-lime uppercase">
            #CINEMATIC_MOOD
          </span>
        </div>
      </div>

      <div className="absolute right-4 sm:right-12 bottom-20 z-10 w-28 sm:w-44 bg-[#25262B] p-2 rounded-xl shadow-2xl border border-white/10 hidden md:block transform rotate-6">
        <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=400&q=80"
            alt="Sound Design Audio Sync"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <span className="absolute bottom-2 left-2 text-[9px] font-mono text-lime uppercase">
            #COLOR_SCIENCE
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-20">
        {/* Editorial Sub-label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-condensed tracking-widest text-lime uppercase mb-8 sm:mb-10 shadow-lg">
          <Film className="w-3.5 h-3.5" />
          <span>MEET THE CREATIVE EYE</span>
        </div>

        {/* 1. Oversized Statement with Embedded Feature Chips (Static, Sharp, 100% Bright) */}
        <div className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.12] tracking-tight mb-12 sm:mb-16">
          <span className="text-lime">CREATE, EDIT,&nbsp;</span>

          <span className="inline-flex align-middle mx-1.5 sm:mx-2 p-1 rounded-full bg-[#25262B] border border-white/20 shadow-md">
            <span className="relative w-12 sm:w-20 h-6 sm:h-9 rounded-full overflow-hidden inline-block align-middle">
              <Image
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=200&q=80"
                alt="Mini Filmstrip chip"
                fill
                className="object-cover"
              />
            </span>
          </span>

          <span className="text-white">AND SHARE&nbsp;</span>

          <br className="hidden sm:inline" />

          <span className="inline-flex align-middle mx-1.5 sm:mx-2 px-3 py-1 rounded-full bg-lime text-black text-xs sm:text-lg font-mono font-bold shadow-[0_0_20px_rgba(183,255,0,0.4)]">
            ⌘ + J / CUT
          </span>

          <span className="text-white">STUNNING VIDEOS</span>

          <br />

          <span className="text-white">THROUGH INTUITIVE,&nbsp;</span>
          <span className="text-lime">PROFESSIONAL&nbsp;</span>

          <span className="inline-flex align-middle mx-1.5 sm:mx-2 p-1.5 rounded-lg bg-black border border-lime/50 text-lime text-xs sm:text-sm font-mono shadow-[0_0_15px_rgba(183,255,0,0.3)]">
            00:00:24:00
          </span>

          <br className="hidden sm:inline" />

          <span className="text-white">GRADE STORYTELLING.</span>
        </div>

        {/* 2. Giant Manifesto Heading (Sharp & Always Visible) */}
        <div className="pt-10 sm:pt-14 border-t border-white/10">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6 text-white">
            YOUR STORY. <span className="text-lime">MY CREATIVE VISION.</span>
          </h2>

          {/* 3. Supporting Paragraph */}
          <p className="text-base sm:text-xl md:text-2xl max-w-3xl mx-auto font-medium text-neutral-300 leading-relaxed mt-4">
            Every frame tells a story. I bring ideas to life through thoughtful editing,
            cinematic visuals, and creative storytelling that captures attention and sparks emotion.
          </p>
        </div>

        {/* Quick Highlights Bar */}
        <div className="mt-14 sm:mt-18 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: "PACING & CADENCE", value: "FRAME-PERFECT", icon: Film },
            { label: "COLOR SCIENCE", value: "FILM EMULATION", icon: Sliders },
            { label: "SOUND DESIGN", value: "BASS & SFX MIX", icon: Volume2 },
            { label: "AUDIENCE RETENTION", value: "VIRAL HOOKS", icon: TrendingUp },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#25262B] p-4 rounded-xl border border-white/5 hover:border-lime/40 transition-colors text-left group"
            >
              <item.icon className="w-5 h-5 text-lime mb-2 group-hover:scale-110 transition-transform" />
              <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                {item.label}
              </p>
              <p className="text-sm font-condensed font-bold text-white tracking-wide mt-0.5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
