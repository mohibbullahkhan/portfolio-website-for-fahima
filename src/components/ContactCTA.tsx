"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative bg-[#060714] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Glowing Purple Nebula Container Banner (Matching Screenshot Section 9) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-14 md:p-16 text-center overflow-hidden border border-violet-500/30 shadow-[0_0_80px_rgba(139,92,246,0.3)] bg-gradient-to-b from-[#131442] via-[#0d0e2e] to-[#07081a]"
        >
          {/* Ambient Lighting Layers */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-500/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-24 right-1/4 w-80 h-80 bg-fuchsia-500/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none stars-overlay opacity-40" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/40 text-xs font-medium text-violet-300 uppercase mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-violet-400" />
              <span>Let&apos;s Build Together</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Leading The Way In <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent purple-text-glow">
                Video Creation
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-lg mx-auto font-normal leading-relaxed">
              Ready to elevate your raw vision into unforgettable video experiences that command attention
              and drive real results?
            </p>

            {/* Dual Pill Buttons (Matching Screenshot) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white font-medium text-sm sm:text-base bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:shadow-[0_0_40px_rgba(139,92,246,0.8)] transition-all duration-300 hover:scale-[1.02]"
              >
                Start A Project
              </Link>

              <Link
                href="#work"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-slate-200 hover:text-white font-medium text-sm sm:text-base bg-white/[0.08] hover:bg-white/[0.14] border border-white/20 backdrop-blur-md transition-all duration-300"
              >
                View Showreel
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
