"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Heart, Film, Video, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative bg-[#25262B] py-24 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-lime/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Creative Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#1D1E22] group">
              {/* Replaceable High-Quality Portrait Placeholder */}
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                alt="Fahima - Creative Video Editor"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Floating Name Stamp */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#1D1E22]/90 backdrop-blur-md border border-white/10">
                <span className="text-[10px] font-mono text-lime uppercase tracking-widest block">
                  CREATIVE STORYTELLER
                </span>
                <span className="font-display text-2xl uppercase text-white tracking-wide">
                  FAHIMA
                </span>
                <span className="text-xs text-neutral-400 block mt-0.5">
                  Available for Remote & On-Site Projects
                </span>
              </div>
            </div>

            {/* Decorative Corner Tag */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-lime text-black font-condensed font-bold text-xs uppercase flex items-center justify-center text-center p-2 shadow-xl transform rotate-12">
              FRAME BY FRAME
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-condensed tracking-widest text-lime uppercase mb-4">
              <Film className="w-3.5 h-3.5" />
              <span>THE MIND BEHIND THE TIMELINE</span>
            </div>

            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase text-white leading-none">
              BEHIND <br />
              <span className="text-lime">THE EDITS.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              <p className="text-white font-medium text-lg sm:text-xl">
                Hi, I&apos;m Fahima — a creative video editor passionate about transforming ordinary footage
                into extraordinary visual stories.
              </p>

              <p className="text-neutral-400">
                I believe every frame has a purpose, every transition has a rhythm, and every video
                has the power to create an impact that resonates deeply with its audience.
              </p>

              <p className="text-neutral-400">
                My goal is to deliver creative, engaging, and visually memorable content that brings
                every idea to life — whether it&apos;s a high-impact 30-second viral reel or a full cinematic narrative.
              </p>
            </div>

            {/* Philosophy Pillars */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-white/10 py-6">
              <div>
                <span className="font-display text-2xl text-lime block">01 / RHYTHM</span>
                <p className="text-xs text-neutral-400 mt-1">
                  Editing with natural musicality and subconscious pacing.
                </p>
              </div>
              <div>
                <span className="font-display text-2xl text-lime block">02 / COLOR</span>
                <p className="text-xs text-neutral-400 mt-1">
                  Rich chromatic depth and emotional film palettes.
                </p>
              </div>
              <div>
                <span className="font-display text-2xl text-lime block">03 / STORY</span>
                <p className="text-xs text-neutral-400 mt-1">
                  Guiding viewer emotions through intentional visual arcs.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-3 bg-lime text-black hover:bg-lime-hover font-condensed tracking-wider text-base sm:text-lg px-8 py-4 rounded-full font-bold transition-all duration-200 shadow-[0_0_30px_rgba(183,255,0,0.35)]"
              >
                <span>LET&apos;S CREATE SOMETHING</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
