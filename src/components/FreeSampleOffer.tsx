"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Gift, Sparkles, ArrowRight, CheckCircle2, ShieldCheck, MessageCircle } from "lucide-react";

export default function FreeSampleOffer() {
  const whatsappSampleUrl = `https://wa.me/8801793884684?text=${encodeURIComponent(
    "Hi Fahima! I saw your portfolio and would love to claim the Free 15-Second Test Cut for my footage. Here is what I am creating: "
  )}`;

  return (
    <section className="relative bg-[#060714] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Glow Box Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 md:p-14 overflow-hidden border border-violet-500/30 bg-gradient-to-br from-[#12133c] via-[#0b0c26] to-[#070817] shadow-[0_0_70px_rgba(139,92,246,0.25)]"
        >
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/25 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 pointer-events-none stars-overlay opacity-30" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Offer Details */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/60 border border-violet-500/40 text-xs font-medium text-violet-300 uppercase mb-4 backdrop-blur-md">
                <Gift className="w-3.5 h-3.5 text-violet-400" />
                <span>100% Risk-Free Guarantee</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                Not Sure If We&apos;re The Right Fit? <br />
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent purple-text-glow">
                  Get A Free 15-Second Test Cut.
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl">
                Send me 1 raw footage clip or reel. I&apos;ll edit, color grade, and sound design a 15-second teaser for free within 24 hours. If you love it, we collaborate. If not, it&apos;s yours to keep — zero obligation.
              </p>

              {/* 3 Steps Bullet points */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1. Share Raw Clip</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>2. 24h Free Turnaround</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>3. Decide Zero Risk</span>
                </div>
              </div>
            </div>

            {/* Right Column: CTA Buttons */}
            <div className="lg:col-span-4 flex flex-col gap-3">
              <a
                href={whatsappSampleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Claim Free Sample via WhatsApp</span>
              </a>

              <Link
                href="#contact"
                className="w-full py-4 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 text-white font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                <span>Request Sample via Form</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <span className="text-[10px] font-mono text-center text-slate-400 pt-1">
                🔒 Limited to 3 new creator samples per week
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
