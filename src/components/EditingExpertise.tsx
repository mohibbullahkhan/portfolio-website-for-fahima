"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Check,
  Sliders,
  Layers,
  Film,
  Zap,
  Volume2,
  Share2,
} from "lucide-react";

const expertiseList = [
  {
    title: "Seamless Transitions",
    desc: "Match cuts, whip pans, zoom transitions, and invisible edits that preserve viewer immersion.",
    icon: Film,
    metric: "0.02s accuracy",
  },
  {
    title: "Cinematic Color Grading",
    desc: "Custom film emulation LUTs, tone curves, skin-tone isolation, and HDR Rec.709 mastering.",
    icon: Sliders,
    metric: "12-Bit Pipeline",
  },
  {
    title: "Audio Synchronization & Foley",
    desc: "Layered foley sound effects, spatial risers, sub-bass hits, and beat-locked audio transients.",
    icon: Volume2,
    metric: "-14 LUFS standard",
  },
  {
    title: "Visual Storytelling & Narrative Cadence",
    desc: "Constructing emotional arc, tension build-ups, and story structure from raw documentary clips.",
    icon: Film,
    metric: "Story First",
  },
  {
    title: "Motion Graphics & Kinetic Captions",
    desc: "Dynamic typography animations, lower-third design, and screen callouts that pop off the screen.",
    icon: Layers,
    metric: "60 FPS Render",
  },
  {
    title: "Social Media Algorithm Optimization",
    desc: "Pattern interrupt hooks, retention pacing, and 9:16 vertical re-framing for maximum engagement.",
    icon: Share2,
    metric: "+65% Avg Watch",
  },
];

export default function EditingExpertise() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section className="relative bg-[#1D1E22] py-24 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-lime/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Side: Large Cinematic Visual with Timeline HUD Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            {/* Cinematic Image Frame */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
              <Image
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
                alt="Video Editor Precision Timeline Workspace"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-lime text-black font-bold shadow-lg">
                  LIVE WORKBENCH
                </span>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-neutral-300 bg-black/80 backdrop-blur border border-white/10">
                  RESOLUTION: 4K PRORES
                </span>
              </div>

              {/* Floating Timeline HUD element in the center of the image (Inspired by reference screenshot) */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#16171B]/95 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between text-[11px] font-mono text-neutral-300 mb-2">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
                    <span className="text-white font-bold">FRAME_PERFECT_SYNC</span>
                  </span>
                  <span className="text-lime">00:03:12:24</span>
                </div>

                {/* Animated Timeline Tracks Mini HUD */}
                <div className="space-y-1.5 font-mono">
                  <div className="h-4 bg-black/60 rounded flex items-center px-2 relative overflow-hidden">
                    <div className="h-2 rounded bg-purple-500/80 w-1/3" />
                    <div className="h-2 rounded bg-lime mx-1 w-1/4" />
                    <div className="h-2 rounded bg-blue-500/80 w-1/3" />
                  </div>
                  <div className="h-3 bg-black/60 rounded flex items-center px-1">
                    <div className="h-1.5 rounded bg-emerald-500/80 w-full" />
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>AUDIO PEAK: -3.0 dB</span>
                  <span className="text-lime">ZERO DROPPED FRAMES</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Heading, Description, & Interactive Expertise Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-condensed tracking-widest text-lime uppercase mb-4">
              <Zap className="w-3.5 h-3.5" />
              <span>TECHNICAL MASTERY</span>
            </div>

            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase text-white tracking-tight leading-[0.92]">
              PRECISION. <br />
              CREATIVITY. <br />
              <span className="text-lime">EVERY FRAME.</span>
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
              Great editing is more than cutting clips. It&apos;s about understanding the story,
              finding the rhythm, and creating an experience that connects with people on an emotional level.
            </p>

            {/* Expertise Items Grid */}
            <div className="mt-8 space-y-3">
              {expertiseList.map((item, idx) => {
                const IconComponent = item.icon;
                const isSelected = activeItem === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => setActiveItem(idx)}
                    className={`p-4 rounded-2xl border transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#25262B] border-lime/60 shadow-lg"
                        : "bg-[#16171B] border-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${
                            isSelected
                              ? "bg-lime text-black font-bold"
                              : "bg-white/5 text-neutral-400"
                          }`}
                        >
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h4 className="font-condensed text-lg sm:text-xl font-bold uppercase text-white">
                          {item.title}
                        </h4>
                      </div>

                      <span className="text-[10px] font-mono text-lime px-2 py-0.5 rounded bg-lime/10 border border-lime/20">
                        {item.metric}
                      </span>
                    </div>

                    {isSelected && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="mt-2 text-xs sm:text-sm text-neutral-400 pl-11"
                      >
                        {item.desc}
                      </motion.p>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
