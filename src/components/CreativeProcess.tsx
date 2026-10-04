"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Film, Sliders, CheckCircle2, ArrowRight } from "lucide-react";
import { ProcessStep } from "@/types";

const steps: ProcessStep[] = [
  {
    number: "01",
    phase: "DISCOVER",
    title: "Understanding the project, vision, and requirements.",
    description: "We align on your creative goals, brand voice, target audience, references, key messaging, and timeline constraints.",
    details: ["Script & Asset Ingestion", "Reference Moodboarding", "Pacing & Tone Alignment"],
  },
  {
    number: "02",
    phase: "CREATE",
    title: "Organizing footage and developing the editing direction.",
    description: "Reviewing all raw takes, selecting the best angles, assembling the narrative timeline backbone, and building the initial rough cut.",
    details: ["Footage Culling & Logging", "Assembly Cut & Structure", "Story Arc Construction"],
  },
  {
    number: "03",
    phase: "REFINE",
    title: "Perfecting transitions, colors, sound, and details.",
    description: "Fine-tuning cuts to the beat, performing 12-bit cinematic color grading, mixing audio effects, and polishing visual motion graphics.",
    details: ["Match Cuts & Speed Ramping", "Film LUT Color Grading", "Bass & Foley Sound Mixing"],
  },
  {
    number: "04",
    phase: "DELIVER",
    title: "Exporting polished, platform-ready videos.",
    description: "Delivering mastered 4K master files, optimized vertical 9:16 cuts with burnt-in captions, and archive assets ready for distribution.",
    details: ["Multi-Format Exports", "Platform Optimization", "Project Archive Delivery"],
  },
];

export default function CreativeProcess() {
  return (
    <section id="process" className="relative bg-[#1D1E22] py-24 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lime/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-condensed tracking-widest text-lime uppercase mb-4">
            <span>METHODOLOGY</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase text-white leading-none">
            FROM IDEA <br />
            <span className="text-lime">TO FINAL FRAME.</span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
            A structured, collaborative post-production workflow engineered to deliver
            cinematic excellence on schedule, every single time.
          </p>
        </div>

        {/* Process Timeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="bg-[#25262B] rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-lime/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Step Indicator */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-4xl sm:text-5xl text-neutral-500 group-hover:text-lime transition-colors">
                    {step.number}
                  </span>

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-lime/10 text-lime border border-lime/20">
                    STEP {step.number}
                  </span>
                </div>

                <h3 className="font-condensed text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white group-hover:text-lime transition-colors">
                  {step.phase}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-neutral-300 font-medium leading-snug">
                  {step.title}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Details Tags */}
              <div className="mt-6 pt-4 border-t border-white/10 space-y-1.5">
                {step.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-[11px] font-mono text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
