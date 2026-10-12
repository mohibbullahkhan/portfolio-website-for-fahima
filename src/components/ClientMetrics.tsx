"use client";

import React from "react";
import { motion } from "framer-motion";
import { Eye, TrendingUp, Film, Clock, HeartHandshake, Sparkles } from "lucide-react";

const metrics = [
  {
    icon: Eye,
    value: "15M+",
    label: "Total Organic Views",
    subtext: "Generated across TikTok, Reels & YouTube for creator partners",
  },
  {
    icon: TrendingUp,
    value: "+68%",
    label: "Average Watch Retention",
    subtext: "Engineered 3-second hook structure & beat-synced pacing",
  },
  {
    icon: Film,
    value: "250+",
    label: "Mastered Videos Shipped",
    subtext: "Commercials, long-form narratives, and high-converting shorts",
  },
  {
    icon: Clock,
    value: "48h",
    label: "Rapid Average Delivery",
    subtext: "Fast turnarounds so your content publishing never misses a beat",
  },
];

export default function ClientMetrics() {
  return (
    <section className="relative bg-[#060714] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-violet-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Metric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0c0d24]/80 backdrop-blur-xl p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-white/[0.08] hover:border-violet-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-950/60 border border-violet-500/30 flex items-center justify-center text-violet-300 mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>

                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-1 bg-gradient-to-r from-white via-slate-100 to-violet-200 bg-clip-text">
                  {item.value}
                </div>

                <h4 className="text-xs sm:text-sm font-semibold text-violet-300 mb-1.5">
                  {item.label}
                </h4>

                <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
                  {item.subtext}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
