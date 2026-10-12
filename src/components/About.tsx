"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Film, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative bg-[#060714] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none stars-overlay opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Creative Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/[0.1] hover:border-violet-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)] bg-[#0c0d24] group transition-colors">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                alt="Fahima - Creative Video Editor"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#060714] via-transparent to-transparent opacity-80" />

              {/* Floating Name Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0c0d24]/90 backdrop-blur-xl border border-white/[0.1] shadow-xl">
                <span className="text-[10px] font-mono text-violet-400 uppercase tracking-widest block">
                  CREATIVE STORYTELLER
                </span>
                <span className="text-xl sm:text-2xl font-bold uppercase text-white tracking-wide">
                  FAHIMA
                </span>
                <span className="text-xs text-slate-400 block mt-0.5">
                  Available for Remote &amp; Worldwide Projects
                </span>
              </div>
            </div>

            {/* Decorative Corner Tag */}
            <div className="absolute -top-3 -right-3 px-4 py-2 rounded-full bg-violet-600 text-white font-medium text-xs uppercase flex items-center justify-center text-center shadow-[0_0_20px_rgba(139,92,246,0.5)]">
              ✦ PRO CRAFT
            </div>
          </motion.div>

          {/* Right Column: Narrative, Philosophy & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/50 border border-violet-500/30 text-xs font-medium text-violet-300 uppercase mb-4 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>Behind The Timeline</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Crafting Stories That <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent purple-text-glow">
                Resonate Deeply.
              </span>
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              <p className="text-white font-medium text-base sm:text-lg">
                Hi, I&apos;m Fahima — a passionate video editor dedicated to turning raw footage into
                memorable visual journeys.
              </p>

              <p className="text-slate-400">
                I believe that pacing is an emotional language, color grading is an atmospheric signature,
                and sound design is the heartbeat of every great video.
              </p>

              <p className="text-slate-400">
                Whether shaping high-converting 30-second reels or long-form documentary films, my focus
                is always on maximizing engagement, retention, and artistic distinction.
              </p>
            </div>

            {/* Philosophy Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-white/[0.08] py-5">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-violet-400 block mb-1">
                  01 / RHYTHM
                </span>
                <p className="text-xs text-slate-400">
                  Subconscious pacing calibrated to human attention spans.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-violet-400 block mb-1">
                  02 / COLOR
                </span>
                <p className="text-xs text-slate-400">
                  Rich 12-bit chromatic depth and cinematic LUT emulation.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-violet-400 block mb-1">
                  03 / RETENTION
                </span>
                <p className="text-xs text-slate-400">
                  Engineered 3-second hooks and dynamic audio swells.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-sm sm:text-base bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Let&apos;s Create Something</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
