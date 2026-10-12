"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Wand2, Sliders, Volume2 } from "lucide-react";

const processSteps = [
  {
    step: "01",
    label: "Step One",
    title: "Turn Text into Video",
    subtitle: "Concept, Script & Blueprint",
    description:
      "Input your creative vision, script, and raw footage. We define the mood, pacing rhythm, and narrative arc to captivate your audience from the opening frame.",
    glowColor: "from-amber-500/20 via-orange-500/10 to-transparent",
    bottomImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Warm golden glowing lantern visual for concept",
    accentGlow: "shadow-[0_0_30px_rgba(245,158,11,0.2)]",
    tag: "Concept & Script",
  },
  {
    step: "02",
    label: "Step Two",
    title: "Fine-tune the Details",
    subtitle: "Precision Cut & Motion Pacing",
    description:
      "Frame-accurate cuts, dynamic speed ramping, and seamless match transitions locked to the audio beat to hook viewers in the crucial first 3 seconds.",
    glowColor: "from-blue-500/20 via-indigo-500/10 to-transparent",
    bottomImage: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Cool blue holographic figure visual for precision cut",
    accentGlow: "shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    tag: "Cut & Assembly",
  },
  {
    step: "03",
    label: "Step Three",
    title: "Generate the Final Cut",
    subtitle: "Color Grade & Spatial Sound",
    description:
      "12-bit DaVinci Resolve film LUT color grading, skin tone isolation, punchy spatial foley sound design, and master rendering in 4K ProRes.",
    glowColor: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
    bottomImage: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=600&q=80",
    imageAlt: "Radiant crimson glowing ember sphere visual for color grade",
    accentGlow: "shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    tag: "Grade & Sound",
  },
];

export default function CreativeProcess() {
  return (
    <section id="process" className="relative bg-[#060714] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
      {/* Background Starry & Nebula Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-violet-900/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none stars-overlay opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header (Matching Screenshot Section 4) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/50 border border-violet-500/30 text-xs font-medium text-violet-300 uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Post-Production Pipeline</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Transform Imagination into Reality: <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent purple-text-glow">
              Steps to Build
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Turn your concepts into high-quality videos in three simple, transparent steps — engineered
            to take your raw footage from idea to viral delivery.
          </p>
        </div>

        {/* 3 Vertical Cards (Matching Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {processSteps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`group relative bg-[#0c0d24]/90 rounded-3xl border border-white/[0.08] hover:border-violet-500/40 p-6 sm:p-7 flex flex-col justify-between overflow-hidden backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.6)] ${item.accentGlow}`}
            >
              {/* Top Step Card Header */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/[0.04] text-violet-300 border border-white/[0.08]">
                    {item.label}
                  </span>
                  <span className="font-mono text-xl sm:text-2xl font-bold text-slate-500 group-hover:text-violet-400 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors mb-1.5">
                  {item.title}
                </h3>

                <span className="text-xs font-mono uppercase tracking-wider text-violet-400 block mb-3 font-medium">
                  {item.subtitle}
                </span>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {/* Bottom Glowing Artwork Visual */}
              <div className="mt-8 pt-4 relative aspect-[4/3] rounded-2xl overflow-hidden bg-black/60 border border-white/[0.06] group-hover:border-violet-500/30 transition-colors">
                <Image
                  src={item.bottomImage}
                  alt={item.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />

                {/* Bottom Radial Gradient Flare */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.glowColor} pointer-events-none`} />

                {/* Inner Overlay Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d24] via-transparent to-black/30 pointer-events-none" />

                {/* Bottom Tag */}
                <div className="absolute bottom-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md text-slate-200 border border-white/10">
                    {item.tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
