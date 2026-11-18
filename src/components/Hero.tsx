"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ApiHero } from "@/lib/api";

interface HeroProps {
  hero?: ApiHero;
}

export default function Hero({ hero }: HeroProps) {
  // Dynamic headline with graceful default
  const headline =
    hero?.headline || "Your Vision. Beautifully Edited.";
  const subheadline =
    hero?.subheadline || "POST-PRODUCTION & CINEMATIC EDITING";
  const description =
    hero?.description ||
    "Crafting engaging videos that capture attention, tell compelling stories, and help ambitious creators and brands stand out with frame-accurate pacing and broadcast color grading.";

  const primaryBtnText = "Start a Project";
  const primaryBtnLink = "#contact";
  const secondaryBtnText = "Explore My Work";
  const secondaryBtnLink = "#work";

  return (
    <section id="home" className="relative pt-32 pb-16 md:pt-44 md:pb-20 overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 editorial-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Header Block */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E5DF] shadow-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider text-[#171717] uppercase">
              {subheadline}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#171717] leading-[1.06] mb-6"
          >
            {headline}
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#666666] leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
          >
            {description}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href={primaryBtnLink}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#171717] text-[#F8F8F5] text-sm font-semibold tracking-tight hover:bg-black transition-all shadow-md group"
            >
              <span>{primaryBtnText}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href={secondaryBtnLink}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFFFFF] text-[#171717] border border-[#E5E5DF] text-sm font-semibold tracking-tight hover:bg-[#F0F0EC] transition-all shadow-sm"
            >
              <span>{secondaryBtnText}</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
