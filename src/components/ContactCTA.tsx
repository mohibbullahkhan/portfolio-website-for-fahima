"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Film, Play } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative w-full py-28 sm:py-40 overflow-hidden border-t border-white/10">
      {/* Full-width Cinematic Studio Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1920&q=80"
          alt="Cinematic Studio Audio Mixing Console"
          fill
          className="object-cover object-center"
        />
        {/* Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D1E22] via-black/80 to-[#1D1E22]" />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Editorial Sub-badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-lime/30 text-xs font-condensed tracking-widest text-lime uppercase mb-8 shadow-xl"
        >
          <Film className="w-3.5 h-3.5" />
          <span>DIRECTOR&apos;S CUT</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tight text-white leading-[0.92]"
        >
          HAVE A STORY? <br />
          <span className="text-lime">LET&apos;S MAKE IT</span> <br />
          UNFORGETTABLE.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto font-normal leading-relaxed"
        >
          Have an idea for your next video? Let&apos;s turn your raw vision into something extraordinary
          that commands attention and stands the test of time.
        </motion.p>

        {/* Center Lime Pill CTA Button (Inspired by reference screenshot) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-3 bg-lime text-black hover:bg-lime-hover font-condensed tracking-wider text-lg sm:text-xl px-10 py-5 rounded-full font-bold transition-all duration-300 shadow-[0_0_40px_rgba(183,255,0,0.5)] hover:scale-105"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </motion.div>

        {/* Digital Counter Blocks (Inspired directly by the "1 9 2 8 8 4" blocks in the reference screenshot) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 sm:mt-20 pt-12 border-t border-white/10"
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {["1", "9", "2", "8", "8", "4"].map((digit, i) => (
              <span
                key={i}
                className="w-10 sm:w-14 h-14 sm:h-18 rounded-xl bg-black/80 border border-white/20 backdrop-blur-md flex items-center justify-center font-display text-2xl sm:text-4xl text-lime shadow-xl"
              >
                {digit}
              </span>
            ))}
          </div>

          <p className="mt-3 text-[11px] font-mono uppercase tracking-widest text-neutral-400">
            TOTAL RENDERED FRAMES MASTERED & DELIVERED
          </p>
        </motion.div>
      </div>
    </section>
  );
}
