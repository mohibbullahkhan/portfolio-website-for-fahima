"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight, Zap } from "lucide-react";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter Reels",
    price: "$499",
    period: "/ bundle",
    tagline: "Ideal for creators scaling Instagram Reels, TikTok, and YouTube Shorts.",
    popular: false,
    features: [
      "4 High-Retention Short-Form Cuts",
      "Dynamic Kinetic Subtitles & Hook Pacing",
      "Punchy SFX & Beat-Locked Audio",
      "Optimized 9:16 Vertical Format",
      "48-Hour Turnaround per Cut",
      "1 Revision Round Included",
    ],
    buttonText: "Get Started",
    buttonClass: "bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white",
  },
  {
    id: "pro",
    name: "Pro Cinematic",
    price: "$1,249",
    period: "/ month",
    tagline: "Complete visual production for high-growth brands and established creators.",
    popular: true,
    badge: "MOST POPULAR",
    features: [
      "Up to 10 Shorts OR 2 Long-Form Commercials",
      "12-Bit DaVinci Resolve Color Grading",
      "Bespoke Spatial Audio & Licensed Music",
      "Custom Motion Graphics & Lower Thirds",
      "Multi-Cam Footage Synchronization",
      "24-48h Expedited Delivery",
      "2 Revision Rounds per Project",
    ],
    buttonText: "Choose Pro Plan",
    buttonClass:
      "bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-[0_0_25px_rgba(139,92,246,0.6)]",
  },
  {
    id: "enterprise",
    name: "Agency Retainer",
    price: "$2,899",
    period: "/ month",
    tagline: "Dedicated turnkey editing partner for production agencies & top companies.",
    popular: false,
    features: [
      "Unlimited Monthly Queue (1 active at a time)",
      "Dedicated Slack / WhatsApp VIP Channel",
      "Full Raw Project Handover (Premiere/DaVinci)",
      "Same-Day Rush Delivery Option",
      "Custom Brand Motion Template Library",
      "Unlimited Revisions Until Flawless",
    ],
    buttonText: "Start Enterprise",
    buttonClass: "bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#060714] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
      {/* Background Starry & Nebula Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-violet-900/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none stars-overlay opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header (Matching Screenshot Section 6) */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/50 border border-violet-500/30 text-xs font-medium text-violet-300 uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Investment &amp; Packages</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Choose the Perfect <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent purple-text-glow">
              Plan For Your Needs
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Transparent pricing crafted to help you ship consistent, high-performing videos
            without headache or compromise.
          </p>
        </div>

        {/* 3 Pricing Cards (Matching Screenshot) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 backdrop-blur-2xl ${
                plan.popular
                  ? "bg-[#0f1033]/90 border-2 border-violet-500/70 shadow-[0_0_50px_rgba(139,92,246,0.3)] md:-translate-y-3 z-10"
                  : "bg-[#0c0d24]/85 border border-white/[0.08] hover:border-violet-500/30 shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
              }`}
            >
              {/* Optional Popular Pill Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold shadow-[0_0_15px_rgba(168,85,247,0.6)]">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed min-h-[36px]">
                    {plan.tagline}
                  </p>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mb-6 pb-6 border-b border-white/[0.08]">
                  <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {plan.period}
                  </span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-violet-300 block mb-2">
                    INCLUDED SERVICES:
                  </span>
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-violet-950/80 border border-violet-500/40 flex items-center justify-center shrink-0 mt-0.5 text-violet-300">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-2">
                <Link
                  href="#contact"
                  className={`w-full py-3.5 rounded-full font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 ${plan.buttonClass}`}
                >
                  <span>{plan.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
