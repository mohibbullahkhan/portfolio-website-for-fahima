"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Check,
  Sparkles,
  Sliders,
  Volume2,
  Maximize2,
  Share2,
  Layers,
  ArrowRight,
  Zap,
} from "lucide-react";

export default function SeamlessEditing() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeTab, setActiveTab] = useState("color");

  const features = [
    {
      id: "color",
      title: "Cinema-Grade Color Science",
      desc: "DaVinci Resolve 12-bit pipeline with custom film emulation LUTs, natural skin tone preservation, and Rec.709 mastering.",
      stats: "12-Bit Rec.709",
    },
    {
      id: "sound",
      title: "Immersive Audio & Spatial Foley",
      desc: "Layered sound design, beat-matched transitions, risers, and broadcast loudness normalized to -14 LUFS.",
      stats: "-14 LUFS Master",
    },
    {
      id: "motion",
      title: "Kinetic Captions & Motion VFX",
      desc: "High-retention animated subtitles, dynamic whip-pans, snap-zooms, and custom lower-third graphics.",
      stats: "60 FPS Render",
    },
  ];

  return (
    <section className="relative bg-[#060714] text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[500px] bg-violet-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none stars-overlay opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header (Matching Screenshot Section 5) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/50 border border-violet-500/30 text-xs font-medium text-violet-300 uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Precision NLE Capabilities</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Boundless Creativity: <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent purple-text-glow">
              Ready When You Are
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Equipped with state-of-the-art tools and industry-standard workflows to deliver
            uncompromising visual fidelity.
          </p>
        </div>

        {/* Feature Split Layout (Matching Screenshot) */}
        <div className="bg-[#0c0d24]/85 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/[0.1] p-5 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Capability List & Active Info */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400 block mb-1">
                UNLIMITED CAPABILITIES
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                Unlimited Creative Possibilities
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Deliver any video style with ease — from scroll-stopping viral short reels to hyper-polished commercial narratives. Every frame is crafted with frame-by-frame scrutiny.
              </p>

              {/* Interactive Feature Selectors */}
              <div className="space-y-3 pt-3">
                {features.map((feat) => {
                  const isActive = activeTab === feat.id;
                  return (
                    <div
                      key={feat.id}
                      onClick={() => setActiveTab(feat.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isActive
                          ? "bg-violet-950/40 border-violet-500/50 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                          : "bg-white/[0.02] border-white/[0.06] hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`text-sm font-semibold ${isActive ? "text-violet-300" : "text-white"}`}>
                          {feat.title}
                        </span>
                        <span className="text-[10px] font-mono text-violet-400 px-2 py-0.5 rounded-full bg-violet-950/60 border border-violet-500/30">
                          {feat.stats}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Large Widescreen Cinematic Player Preview (Waterfall Nature Scene from Reference) */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden bg-black border border-white/[0.1] shadow-2xl group">
                {/* Visual Image */}
                <Image
                  src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80"
                  alt="Majestic scenic waterfalls cinematic footage"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />

                {/* Lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/75 backdrop-blur-md text-violet-300 border border-violet-500/30">
                    MASTER RENDER • REC.709
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-slate-300 bg-black/75 backdrop-blur-md border border-white/10">
                    4K 60FPS
                  </span>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-14 h-14 rounded-full bg-violet-600/90 text-white flex items-center justify-center shadow-[0_0_35px_rgba(139,92,246,0.7)] backdrop-blur-md hover:scale-110 active:scale-95 transition-all"
                    aria-label="Toggle playback"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    )}
                  </button>
                </div>

                {/* Bottom Scrubber */}
                <div className="absolute bottom-3 left-4 right-4 z-10">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="text-[10px] font-mono text-violet-300">02:18</span>
                    <div className="relative flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-[64%] bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">03:40</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono">
                    <span>TIMELINE AUDIO SYNC: LOCKED</span>
                    <Maximize2 className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Accordion/Pill Matrix (from Reference) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/[0.08]">
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <Zap className="w-4 h-4 text-violet-400 shrink-0" />
              <span className="text-xs text-slate-300 font-medium">48h Delivery Turnaround</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <Layers className="w-4 h-4 text-violet-400 shrink-0" />
              <span className="text-xs text-slate-300 font-medium">Multi-Platform 16:9 &amp; 9:16</span>
            </div>
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <Volume2 className="w-4 h-4 text-violet-400 shrink-0" />
              <span className="text-xs text-slate-300 font-medium">Broadcast Spatial Sound Mixing</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
