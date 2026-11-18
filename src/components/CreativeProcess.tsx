"use client";

import React from "react";
import { motion } from "framer-motion";
import { UploadCloud, MessageSquare, Scissors, CheckCircle, ArrowRight } from "lucide-react";

const workflowSteps = [
  {
    step: "01",
    phase: "STEP 01",
    title: "Share Your Project",
    description:
      "Upload your raw footage, brief, audio tracks, and reference videos via Google Drive, Dropbox, or Frame.io. We review assets and confirm specs.",
    highlights: ["Raw Footage Upload", "Creative Vision Alignment", "Asset & Audio Verification"],
    icon: UploadCloud,
  },
  {
    step: "02",
    phase: "STEP 02",
    title: "Discuss Requirements",
    description:
      "We align on target duration, narrative arc, audience demographics, hook strategy, and pacing benchmarks before touching the timeline.",
    highlights: ["Hook & Retention Strategy", "Pacing Blueprint", "Style & Music Selection"],
    icon: MessageSquare,
  },
  {
    step: "03",
    phase: "STEP 03",
    title: "Editing & Feedback",
    description:
      "Precision cut assembly, kinetic motion graphics, 12-bit DaVinci color grading, and broadcast audio mastering. Timestamped review via Frame.io.",
    highlights: ["Rough Cut Delivery", "Frame.io Timestamped Notes", "Rapid Revision Turnaround"],
    icon: Scissors,
  },
  {
    step: "04",
    phase: "STEP 04",
    title: "Final 4K Delivery",
    description:
      "Master export in ProRes 422 HQ, 4K DCI, and optimized MP4 web versions with full commercial music licenses and project archiving.",
    highlights: ["4K Master Output", "Full Commercial Rights", "Multi-platform Cutdowns"],
    icon: CheckCircle,
  },
];

export default function CreativeProcess() {
  return (
    <section id="process" className="relative bg-[#F8F8F5] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5DF]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E5DF] text-[11px] font-semibold tracking-wider text-[#171717] uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
              <span>WORKING PROCESS</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-[1.05]">
              How We Work Together
            </h2>
          </div>

          <p className="text-base text-[#666666] max-w-md font-normal leading-relaxed">
            A frictionless, 4-stage post-production pipeline built for creators and busy agency directors. Fast turnarounds, crystal-clear communication.
          </p>
        </div>

        {/* 4-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowSteps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-[#FFFFFF] border border-[#E5E5DF] shadow-editorial flex flex-col justify-between hover:border-[#171717]/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-bold text-[#84CC16]">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#F0F0EC] group-hover:bg-[#171717] group-hover:text-[#FFFFFF] text-[#171717] flex items-center justify-center transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-[#777777] uppercase tracking-wider block mb-1">
                    {item.phase}
                  </span>

                  <h3 className="text-lg font-bold text-[#171717] mb-3 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E5E5DF] space-y-1.5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] font-medium text-[#555555]">
                      <span className="w-1 h-1 rounded-full bg-[#84CC16]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
