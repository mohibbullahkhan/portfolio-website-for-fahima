"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Sparkles, Quote, MessageSquare } from "lucide-react";

const testimonials = [
  {
    id: "alex",
    name: "Alex Morgan",
    role: "Content Director, Studio Apex",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    quote:
      "Fahima transformed our raw footage into an absolute masterpiece. Her rhythm, sense of timing, and color grading elevated our campaign beyond what we envisioned. True craftsmanship!",
    highlight: "“Watch time jumped 65% in 30 days.”",
    rating: 5,
    tag: "Commercial Film",
  },
  {
    id: "marcus",
    name: "Marcus Vance",
    role: "Lead Creator, Velocity Media",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    quote:
      "Our average retention skyrocketed after Fahima took over our short-form edits. Her dynamic cuts, sound design, and hook pacing are second to none in the creator industry.",
    highlight: "“Best editor I've partnered with.”",
    rating: 5,
    tag: "Viral Shorts",
  },
  {
    id: "elena",
    name: "Elena Rostova",
    role: "Brand Strategist, Kinetix Global",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    quote:
      "Flawless communication, rapid turnaround, and an incredible eye for storytelling. She intuitively grasped our brand voice on the very first cut. Fahima is our go-to editor.",
    highlight: "“Delivered on schedule every single time.”",
    rating: 5,
    tag: "Brand Campaign",
  },
];

export default function Testimonials() {
  return (
    <section className="relative bg-[#060714] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none stars-overlay opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header (Matching Screenshot Section 7) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/50 border border-violet-500/30 text-xs font-medium text-violet-300 uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Community &amp; Creator Feedback</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Your Gateway to Revolutionary <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent purple-text-glow">
              Video Creation
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Discover why content creators, commercial agencies, and visionary brands trust Fahima
            with their most important visual stories.
          </p>
        </div>

        {/* Bento Review Cards with Floating Speech Bubbles (Matching Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#0c0d24]/85 backdrop-blur-2xl rounded-3xl border border-white/[0.08] hover:border-violet-500/40 p-6 sm:p-7 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.6)] group transition-all duration-300"
            >
              <div>
                {/* Creator Avatar & Info Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-violet-500/40 shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 fill-violet-400 text-violet-400"
                    />
                  ))}
                </div>

                {/* Speech Bubble Container (Inspired by Screenshot) */}
                <div className="relative p-4 rounded-2xl bg-[#121338]/70 border border-violet-500/20 mb-4">
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    {item.quote}
                  </p>
                  <span className="text-[11px] font-semibold text-violet-300 block mt-2 font-mono">
                    {item.highlight}
                  </span>
                </div>
              </div>

              {/* Bottom Tag */}
              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-slate-400">
                <span>PROJECT TYPE:</span>
                <span className="text-violet-400 font-semibold">{item.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
