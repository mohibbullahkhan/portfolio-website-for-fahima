"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Clock,
  ShieldCheck,
  Headphones,
  CloudLightning,
  ArrowRight,
  Layers,
  Zap,
} from "lucide-react";

const supportFeatures = [
  {
    icon: Headphones,
    title: "Dedicated Direct Channel",
    desc: "Direct communication via Slack, WhatsApp, or email for real-time creative feedback, timestamped reviews, and questions.",
    linkText: "Get in touch",
    badge: "24/7 Available",
  },
  {
    icon: Clock,
    title: "48-Hour Turnaround",
    desc: "Fast delivery on short-form reels and social cuts without sacrificing frame-accurate pacing, color science, or sound depth.",
    linkText: "View timeline",
    badge: "Rapid Delivery",
  },
  {
    icon: ShieldCheck,
    title: "100% Revision Guarantee",
    desc: "Multiple revision rounds included with timestamped reviews on Frame.io until every frame satisfies your exacting standards.",
    linkText: "Our policy",
    badge: "Satisfaction First",
  },
  {
    icon: CloudLightning,
    title: "High-Speed Cloud Workflows",
    desc: "Seamless ingestion of multi-gigabyte 4K/6K RAW files via MASV, Frame.io, Dropbox, or Google Drive with proxy editing support.",
    linkText: "Asset workflow",
    badge: "Cloud Ingestion",
  },
];

export default function EditingExpertise() {
  return (
    <section className="relative bg-[#060714] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 right-1/3 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none stars-overlay opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header (Matching Screenshot Section 8) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/50 border border-violet-500/30 text-xs font-medium text-violet-300 uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Client Experience &amp; Guarantees</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            All The Support You Need, <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent purple-text-glow">
              Always Within Reach
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Collaborating with a dedicated editor should feel frictionless, transparent, and
            consistently dependable.
          </p>
        </div>

        {/* 2x2 Dark Cards Grid (Matching Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {supportFeatures.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#0c0d24]/85 backdrop-blur-2xl rounded-3xl border border-white/[0.08] hover:border-violet-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-[0_15px_40px_rgba(0,0,0,0.6)] group transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-violet-950/70 border border-violet-500/30 flex items-center justify-center text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-white/[0.04] text-violet-300 border border-white/[0.08]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06]">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-violet-400 hover:text-white transition-colors group-hover:translate-x-1 duration-200"
                  >
                    <span>{item.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
