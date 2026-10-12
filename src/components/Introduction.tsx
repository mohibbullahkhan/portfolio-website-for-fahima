"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Music, AlignLeft, Sparkles, Film } from "lucide-react";

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
  activeColor = "#C084FC", // Radiant violet from theme
  inactiveColor = "#334155", // Slate 700
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.25"],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-[#060714] text-[#F8FAFC] py-28 sm:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden select-none border-t border-white/[0.06]"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none stars-overlay opacity-30" />

      {/* Floating Tilted Photo Cards (Left & Right) */}
      <div className="absolute left-3 sm:left-8 lg:left-14 top-1/3 -translate-y-1/2 z-10 w-28 sm:w-44 lg:w-52 bg-[#0c0d24] p-2.5 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.8)] border border-violet-500/30 hidden md:block transform -rotate-6 hover:rotate-0 transition-transform duration-500">
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=500&q=80"
            alt="Video Editing Studio Setup"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="absolute right-3 sm:right-8 lg:right-14 top-1/2 -translate-y-1/2 z-10 w-28 sm:w-44 lg:w-52 bg-[#0c0d24] p-2.5 rounded-2xl shadow-[0_25px_50px_rgba(0,0,0,0.8)] border border-violet-500/30 hidden md:block transform rotate-6 hover:rotate-0 transition-transform duration-500">
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
        
        {/* Top Label */}
        <div className="mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/50 border border-violet-500/30 text-xs font-mono tracking-widest uppercase text-violet-300">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>WHO IS FAHIMA</span>
          </span>
        </div>

        {/* Main Giant Manifesto Typography with Scroll-Driven Color Fill */}
        <div className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[88px] uppercase leading-[1.08] tracking-tight text-left sm:text-center font-bold">
          
          {/* Line 1 */}
          <div className="mb-2">
            <ScrollSpan progress={scrollYProgress} range={[0.05, 0.22]}>
              CREATE, EDIT,&nbsp;
            </ScrollSpan>

            {/* Filmstrip Pill */}
            <motion.span
              style={{
                opacity: useTransform(scrollYProgress, [0.08, 0.25], [0.4, 1]),
                scale: useTransform(scrollYProgress, [0.08, 0.25], [0.92, 1]),
              }}
              className="inline-flex items-center align-middle mx-2 p-1 rounded-full bg-[#0c0d24] border-2 border-violet-500/60 shadow-[0_0_25px_rgba(139,92,246,0.4)]"
            >
              <span className="text-[10px] text-violet-400 px-1 font-mono hidden sm:inline">&lt;</span>
              <span className="relative w-14 sm:w-20 h-7 sm:h-10 rounded-full overflow-hidden inline-block align-middle mx-0.5">
                <Image
                  src="https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=200&q=80"
                  alt="Cinematic frame 1"
                  fill
                  className="object-cover"
                />
              </span>
              <span className="relative w-14 sm:w-20 h-7 sm:h-10 rounded-full overflow-hidden inline-block align-middle mx-0.5">
                <Image
                  src="https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=200&q=80"
                  alt="Cinematic frame 2"
                  fill
                  className="object-cover"
                />
              </span>
              <span className="text-[10px] text-violet-400 px-1 font-mono hidden sm:inline">&gt;</span>
            </motion.span>

            <ScrollSpan progress={scrollYProgress} range={[0.15, 0.3]}>
              AND
            </ScrollSpan>
          </div>

          {/* Line 2 */}
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
              className="inline-flex flex-col justify-center align-middle mx-2 px-3 py-1.5 rounded-xl bg-[#0e0f2d] border border-violet-500/30 shadow-md text-left"
            >
              <div className="flex items-center gap-0.5 h-3">
                {[4, 8, 12, 6, 14, 10, 8, 14, 6, 12, 16, 10, 6, 12, 8, 4].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: `${h}px` }}
                    className="w-[2px] bg-violet-400 rounded-full inline-block"
                  />
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-violet-300 mt-1">
                <Music className="w-2.5 h-2.5 text-violet-400" />
                <span>Audio_Beat_Sync 00.80</span>
              </div>
            </motion.span>

            <ScrollSpan progress={scrollYProgress} range={[0.35, 0.52]}>
              STUNNING VIDEOS
            </ScrollSpan>
          </div>

          {/* Line 3 */}
          <div className="mb-2">
            <ScrollSpan progress={scrollYProgress} range={[0.45, 0.65]}>
              EASILY USING OUR INTUITIVE,
            </ScrollSpan>
          </div>

          {/* Line 4 */}
          <div className="mb-2">
            <ScrollSpan progress={scrollYProgress} range={[0.55, 0.78]}>
              PROFESSIONAL&nbsp;
            </ScrollSpan>

            {/* Subtitle Track Chip */}
            <motion.span
              style={{
                opacity: useTransform(scrollYProgress, [0.6, 0.82], [0.4, 1]),
                scale: useTransform(scrollYProgress, [0.6, 0.82], [0.92, 1]),
              }}
              className="inline-flex flex-col justify-center align-middle mx-2 px-3 py-1.5 rounded-xl bg-[#0e0f2d] border border-violet-500/30 shadow-md text-left"
            >
              <div className="w-24 sm:w-32 h-2 rounded bg-gradient-to-r from-violet-600 to-fuchsia-500 opacity-80" />
              <div className="flex items-center justify-between text-[9px] font-mono text-violet-300 mt-1 gap-2">
                <span className="flex items-center gap-1">
                  <AlignLeft className="w-2.5 h-2.5 text-violet-400" />
                  <span>Subtitle_Tr 4K</span>
                </span>
                <span className="text-violet-400">00.12</span>
              </div>
            </motion.span>

            <ScrollSpan progress={scrollYProgress} range={[0.68, 0.88]}>
              GRADE
            </ScrollSpan>
          </div>

          {/* Line 5 */}
          <div>
            <ScrollSpan progress={scrollYProgress} range={[0.78, 0.98]}>
              EDITING SUITE.
            </ScrollSpan>
          </div>

        </div>

      </div>
    </section>
  );
}
