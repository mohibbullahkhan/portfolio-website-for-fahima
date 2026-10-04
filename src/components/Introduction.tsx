"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Film, Sliders, Volume2, TrendingUp } from "lucide-react";

interface ScrollWordProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
  isLime?: boolean;
}

function ScrollWord({
  children,
  progress,
  range,
  isLime = false,
}: ScrollWordProps) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const color = useTransform(
    progress,
    range,
    [
      "rgba(255, 255, 255, 0.2)",
      isLime ? "#B7FF00" : "#FFFFFF",
    ]
  );
  const scale = useTransform(progress, range, [0.97, 1]);

  return (
    <motion.span
      style={{ opacity, color, scale }}
      className={`inline-block transition-transform duration-100 ${
        isLime ? "lime-text-glow font-bold" : ""
      }`}
    >
      {children}
    </motion.span>
  );
}

interface ScrollChipProps {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

function ScrollChip({ children, progress, range }: ScrollChipProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const scale = useTransform(progress, range, [0.9, 1]);

  return (
    <motion.span
      style={{ opacity, scale }}
      className="inline-flex align-middle mx-1.5 sm:mx-2 transition-transform duration-150"
    >
      {children}
    </motion.span>
  );
}

export default function Introduction() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.25"],
  });

  const paragraphText =
    "Every frame tells a story. I bring ideas to life through thoughtful editing, cinematic visuals, and creative storytelling that captures attention and sparks emotion.";
  const paragraphWords = paragraphText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative bg-[#1D1E22] text-[#F5F5F5] py-28 sm:py-44 px-4 sm:px-6 lg:px-8 overflow-hidden noise-overlay select-none"
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating Tilted Polaroids / Clips inspired directly by reference */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -15 }}
        whileInView={{ opacity: 1, x: 0, rotate: -8 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute left-4 sm:left-12 top-28 z-10 w-28 sm:w-44 bg-[#25262B] p-2 rounded-xl shadow-2xl border border-white/10 hidden md:block"
      >
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 15 }}
        whileInView={{ opacity: 1, x: 0, rotate: 10 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="absolute right-4 sm:right-12 bottom-28 z-10 w-28 sm:w-44 bg-[#25262B] p-2 rounded-xl shadow-2xl border border-white/10 hidden md:block"
      >
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
      </motion.div>

      <div className="max-w-5xl mx-auto text-center relative z-20">
        {/* Editorial Sub-label without AI sparkle */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-condensed tracking-widest text-lime uppercase mb-10 shadow-lg">
          <Film className="w-3.5 h-3.5" />
          <span>MEET THE CREATIVE EYE</span>
        </div>

        {/* 1. Oversized Statement with Embedded Feature Chips + Scroll Fill */}
        <div className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[1.12] tracking-tight mb-16 sm:mb-20">
          <ScrollWord progress={scrollYProgress} range={[0.02, 0.1]} isLime>
            CREATE,&nbsp;
          </ScrollWord>
          <ScrollWord progress={scrollYProgress} range={[0.08, 0.15]} isLime>
            EDIT,&nbsp;
          </ScrollWord>

          <ScrollChip progress={scrollYProgress} range={[0.12, 0.2]}>
            <span className="p-1 rounded-full bg-[#25262B] border border-white/20 shadow-md inline-block">
              <span className="relative w-12 sm:w-20 h-6 sm:h-9 rounded-full overflow-hidden inline-block align-middle">
                <Image
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=200&q=80"
                  alt="Mini Filmstrip chip"
                  fill
                  className="object-cover"
                />
              </span>
            </span>
          </ScrollChip>

          <ScrollWord progress={scrollYProgress} range={[0.18, 0.25]}>
            AND&nbsp;
          </ScrollWord>
          <ScrollWord progress={scrollYProgress} range={[0.22, 0.28]}>
            SHARE&nbsp;
          </ScrollWord>

          <br className="hidden sm:inline" />

          <ScrollChip progress={scrollYProgress} range={[0.25, 0.32]}>
            <span className="px-3 py-1 rounded-full bg-lime text-black text-xs sm:text-lg font-mono font-bold shadow-[0_0_20px_rgba(183,255,0,0.4)]">
              ⌘ + J / CUT
            </span>
          </ScrollChip>

          <ScrollWord progress={scrollYProgress} range={[0.3, 0.36]}>
            STUNNING&nbsp;
          </ScrollWord>
          <ScrollWord progress={scrollYProgress} range={[0.34, 0.4]}>
            VIDEOS&nbsp;
          </ScrollWord>

          <br />

          <ScrollWord progress={scrollYProgress} range={[0.38, 0.44]}>
            THROUGH&nbsp;
          </ScrollWord>
          <ScrollWord progress={scrollYProgress} range={[0.42, 0.48]}>
            INTUITIVE,&nbsp;
          </ScrollWord>
          <ScrollWord progress={scrollYProgress} range={[0.46, 0.52]} isLime>
            PROFESSIONAL&nbsp;
          </ScrollWord>

          <ScrollChip progress={scrollYProgress} range={[0.5, 0.56]}>
            <span className="p-1.5 rounded-lg bg-black border border-lime/50 text-lime text-xs sm:text-sm font-mono shadow-[0_0_15px_rgba(183,255,0,0.3)]">
              00:00:24:00
            </span>
          </ScrollChip>

          <br className="hidden sm:inline" />

          <ScrollWord progress={scrollYProgress} range={[0.54, 0.6]}>
            GRADE&nbsp;
          </ScrollWord>
          <ScrollWord progress={scrollYProgress} range={[0.58, 0.65]}>
            STORYTELLING.
          </ScrollWord>
        </div>

        {/* 2. Giant Manifesto Heading + Scroll Fill */}
        <div className="pt-12 sm:pt-16 border-t border-white/10">
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight leading-none mb-6">
            <ScrollWord progress={scrollYProgress} range={[0.62, 0.72]}>
              YOUR&nbsp;
            </ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.66, 0.76]}>
              STORY.&nbsp;
            </ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.72, 0.82]} isLime>
              MY&nbsp;
            </ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.76, 0.86]} isLime>
              CREATIVE&nbsp;
            </ScrollWord>
            <ScrollWord progress={scrollYProgress} range={[0.8, 0.9]} isLime>
              VISION.
            </ScrollWord>
          </h2>

          {/* 3. Supporting Paragraph: Word-by-Word Scroll Fill */}
          <p className="text-base sm:text-xl md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed mt-6">
            {paragraphWords.map((word, i) => {
              const startRange = 0.82 + (i / paragraphWords.length) * 0.18;
              const endRange = Math.min(1, startRange + 0.05);

              return (
                <ScrollWord
                  key={i}
                  progress={scrollYProgress}
                  range={[startRange, endRange]}
                >
                  {word}&nbsp;
                </ScrollWord>
              );
            })}
          </p>
        </div>

        {/* Quick Highlights Bar (with authentic filmmaker icons) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
