"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Music, AlignLeft } from "lucide-react";

interface ScrollSpanProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  activeColor?: string;
  inactiveColor?: string;
}

function ScrollSpan({
  children,
  progress,
  range,
  activeColor = "#B7FF00",
  inactiveColor = "#38471D", // Dark olive green from screenshot
}: ScrollSpanProps) {
  const color = useTransform(progress, range, [inactiveColor, activeColor]);
  const opacity = useTransform(progress, range, [0.35, 1]);

  return (
    <motion.span
      style={{ color, opacity }}
      className="inline-block transition-colors duration-150"
    >
      {children}
    </motion.span>
  );
}

export default function Introduction() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll progression as user scrolls through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.25"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#1D1E22] text-[#F5F5F5] py-28 sm:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden select-none"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lime/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Floating Tilted Photo Cards (Left & Right - Matching Reference Screenshot) */}
      
      {/* Left Card: Editor in studio tilted -8 deg */}
      <div className="absolute left-3 sm:left-8 lg:left-14 top-1/3 -translate-y-1/2 z-10 w-28 sm:w-44 lg:w-52 bg-[#121316] p-2.5 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.8)] border border-white/20 hidden md:block transform -rotate-8 hover:rotate-0 transition-transform duration-500">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=500&q=80"
            alt="Video Editor Studio Setup"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Card: Editor in warm desk studio tilted 8 deg */}
      <div className="absolute right-3 sm:right-8 lg:right-14 top-1/2 -translate-y-1/2 z-10 w-28 sm:w-44 lg:w-52 bg-[#121316] p-2.5 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.8)] border border-white/20 hidden md:block transform rotate-8 hover:rotate-0 transition-transform duration-500">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=500&q=80"
            alt="Creative Video Editor working"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-20">
        
        {/* Top Label: WHAT'S MAXS (or WHAT'S FAHIMA) */}
        <div className="mb-8 sm:mb-12">
          <span className="font-condensed text-xs sm:text-sm font-bold tracking-widest uppercase text-white/90">
            WHAT&apos;S FAHIMA
          </span>
        </div>

        {/* 8-Point Star Icon on Left (Exactly as in Reference Screenshot) */}
        <div className="relative">
          <div className="absolute -left-6 sm:-left-12 top-10 pointer-events-none hidden sm:block">
            <svg
              className="w-8 h-8 sm:w-12 sm:h-12 text-[#B7FF00] fill-current animate-pulse"
              viewBox="0 0 24 24"
            >
              <path d="M12 0L13.8 8.2L22 10L13.8 11.8L12 20L10.2 11.8L2 10L10.2 8.2L12 0Z" />
            </svg>
          </div>

          {/* Main Giant Manifesto Typography with Scroll-Driven Color Fill */}
          <div className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[88px] uppercase leading-[1.08] tracking-tight text-left sm:text-center">
            
            {/* Line 1: CREATE, EDIT, [filmstrip pill] AND */}
            <div className="mb-2">
              <ScrollSpan progress={scrollYProgress} range={[0.05, 0.22]}>
                CREATE, EDIT,&nbsp;
              </ScrollSpan>

              {/* Filmstrip Pill with 2 Motocross Frames */}
              <motion.span
                style={{
                  opacity: useTransform(scrollYProgress, [0.08, 0.25], [0.4, 1]),
                  scale: useTransform(scrollYProgress, [0.08, 0.25], [0.92, 1]),
                }}
                className="inline-flex items-center align-middle mx-2 p-1 rounded-full bg-[#18191D] border-2 border-[#B7FF00] shadow-[0_0_25px_rgba(183,255,0,0.35)]"
              >
                <span className="text-[10px] text-neutral-400 px-1 font-mono hidden sm:inline">&lt;</span>
                <span className="relative w-14 sm:w-20 h-7 sm:h-10 rounded-full overflow-hidden inline-block align-middle mx-0.5">
                  <Image
                    src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=200&q=80"
                    alt="Motocross Frame 1"
                    fill
                    className="object-cover"
                  />
                </span>
                <span className="relative w-14 sm:w-20 h-7 sm:h-10 rounded-full overflow-hidden inline-block align-middle mx-0.5">
                  <Image
                    src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=200&q=80"
                    alt="Motocross Frame 2"
                    fill
                    className="object-cover"
                  />
                </span>
                <span className="text-[10px] text-neutral-400 px-1 font-mono hidden sm:inline">&gt;</span>
              </motion.span>

              <ScrollSpan progress={scrollYProgress} range={[0.15, 0.3]}>
                AND
              </ScrollSpan>
            </div>

            {/* Line 2: SHARE [audio waveform card] STUNNING VIDEOS */}
            <div className="mb-2">
              <ScrollSpan progress={scrollYProgress} range={[0.25, 0.42]}>
                SHARE&nbsp;
              </ScrollSpan>

              {/* Audio Waveform Chip Card */}
              <motion.span
                style={{
                  opacity: useTransform(scrollYProgress, [0.28, 0.45], [0.4, 1]),
                  scale: useTransform(scrollYProgress, [0.28, 0.45], [0.92, 1]),
                }}
                className="inline-flex flex-col justify-center align-middle mx-2 px-3 py-1.5 rounded-xl bg-[#23252A] border border-white/20 shadow-md text-left"
              >
                {/* Waveform Bar Graphic */}
                <div className="flex items-center gap-0.5 h-3">
                  {[4, 8, 12, 6, 14, 10, 8, 14, 6, 12, 16, 10, 6, 12, 8, 4].map((h, i) => (
                    <span
                      key={i}
                      style={{ height: `${h}px` }}
                      className="w-[2px] bg-[#B7FF00] rounded-full inline-block"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-mono text-neutral-300 mt-1">
                  <Music className="w-2.5 h-2.5 text-[#B7FF00]" />
                  <span>Fazerdaze-C... 00.80</span>
                </div>
              </motion.span>

              <ScrollSpan progress={scrollYProgress} range={[0.35, 0.52]}>
                STUNNING VIDEOS
              </ScrollSpan>
            </div>

            {/* Line 3: EASILY USING OUR INTUITIVE, */}
            <div className="mb-2">
              <ScrollSpan progress={scrollYProgress} range={[0.45, 0.65]}>
                EASILY USING OUR INTUITIVE,
              </ScrollSpan>
            </div>

            {/* Line 4: PROFESSIONA [subtitle track card] GRADE */}
            <div className="mb-2">
              <ScrollSpan progress={scrollYProgress} range={[0.55, 0.78]}>
                PROFESSIONA&nbsp;
              </ScrollSpan>

              {/* Subtitle Track Chip with Diagonal Hatching */}
              <motion.span
                style={{
                  opacity: useTransform(scrollYProgress, [0.6, 0.82], [0.4, 1]),
                  scale: useTransform(scrollYProgress, [0.6, 0.82], [0.92, 1]),
                }}
                className="inline-flex flex-col justify-center align-middle mx-2 px-3 py-1.5 rounded-xl bg-[#202227] border border-white/20 shadow-md text-left"
              >
                {/* Diagonal Stripes Strip */}
                <div className="w-24 sm:w-32 h-2.5 rounded bg-[repeating-linear-gradient(45deg,#38471D,#38471D_4px,#B7FF00_4px,#B7FF00_8px)] opacity-80" />
                <div className="flex items-center justify-between text-[9px] font-mono text-neutral-300 mt-1 gap-2">
                  <span className="flex items-center gap-1">
                    <AlignLeft className="w-2.5 h-2.5 text-[#B7FF00]" />
                    <span>Tr Subtitle 2</span>
                  </span>
                  <span className="text-[#B7FF00]">00.12</span>
                </div>
              </motion.span>

              <ScrollSpan progress={scrollYProgress} range={[0.68, 0.88]}>
                GRADE
              </ScrollSpan>
            </div>

            {/* Line 5: EDITING PLATFORM. */}
            <div>
              <ScrollSpan progress={scrollYProgress} range={[0.78, 0.98]}>
                EDITING PLATFORM.
              </ScrollSpan>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
