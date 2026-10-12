"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, Sparkles, HelpCircle } from "lucide-react";

const comparisons = [
  {
    feature: "Direct Communication",
    fahima: "1-on-1 Direct WhatsApp & Slack with Fahima",
    cheap: "Slow ticket system / timezone language barrier",
    agency: "Account manager middleman, slow turnaround",
  },
  {
    feature: "Storytelling & Pacing",
    fahima: "Bespoke 3-second hook structure & beat-synced rhythm",
    cheap: "Generic capcut templates without narrative focus",
    agency: "Often rigid corporate style lacking viral energy",
  },
  {
    feature: "Color Grading Pipeline",
    fahima: "DaVinci Resolve 12-Bit film LUT emulation & skin isolation",
    cheap: "Basic saturation slider / uncorrected flat profiles",
    agency: "Good, but billed as a separate $1,000+ line item",
  },
  {
    feature: "Sound Design & Foley",
    fahima: "Multi-layered sound effects, bass drops & licensed music",
    cheap: "Standard low-quality audio, risks copyright strikes",
    agency: "Included, but usually over-engineered",
  },
  {
    feature: "Delivery Speed",
    fahima: "Reliable 24–48h turnarounds without dropping frames",
    cheap: "Unpredictable delivery, frequently misses deadlines",
    agency: "Slow 10–14 business days review cycles",
  },
  {
    feature: "Who Actually Edits Your Video?",
    fahima: "Fahima personally masters every single frame",
    cheap: "Unknown, often outsourced down the chain",
    agency: "Outsourced to junior interns with minimal supervision",
  },
  {
    feature: "Pricing & Flexibility",
    fahima: "Fair fixed bundles or monthly retainers, no surprise fees",
    cheap: "Hidden upsell charges for basic revisions or 4K",
    agency: "High $4,000–$8,000/mo lock-in contracts",
  },
];

export default function ComparisonTable() {
  return (
    <section className="relative bg-[#060714] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
      {/* Ambience */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[500px] bg-violet-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none stars-overlay opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/50 border border-violet-500/30 text-xs font-medium text-violet-300 uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Why Creators Partner With Me</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Why Choose Fahima <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent purple-text-glow">
              vs Other Editing Options?
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            A side-by-side comparison of what working with a dedicated, results-focused editor looks like compared to budget gigs or bloated agency retainers.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl border border-white/[0.1] bg-[#0c0d24]/90 backdrop-blur-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              
              {/* Table Head */}
              <thead>
                <tr className="border-b border-white/[0.08] bg-[#0f1032]/80">
                  <th className="p-5 sm:p-6 text-xs font-mono uppercase tracking-wider text-slate-400 w-1/4">
                    Key Deliverables
                  </th>
                  {/* Highlight Column: Fahima */}
                  <th className="p-5 sm:p-6 text-sm font-bold uppercase tracking-wider text-white w-1/3 bg-violet-950/40 border-x border-violet-500/30">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
                      <span className="text-violet-300">Working with Fahima</span>
                    </div>
                  </th>
                  <th className="p-5 sm:p-6 text-xs font-mono uppercase tracking-wider text-slate-400 w-1/5">
                    Budget Freelancers
                  </th>
                  <th className="p-5 sm:p-6 text-xs font-mono uppercase tracking-wider text-slate-400 w-1/5">
                    Big Production Agencies
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-white/[0.06] text-xs sm:text-sm">
                {comparisons.map((row, idx) => (
                  <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                    
                    {/* Feature Name */}
                    <td className="p-4 sm:p-6 font-semibold text-white">
                      {row.feature}
                    </td>

                    {/* Fahima (Highlighted) */}
                    <td className="p-4 sm:p-6 font-medium text-slate-200 bg-violet-950/30 border-x border-violet-500/20">
                      <div className="flex items-start gap-2 text-violet-200">
                        <div className="w-4 h-4 rounded-full bg-violet-600/80 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{row.fahima}</span>
                      </div>
                    </td>

                    {/* Cheap Freelancers */}
                    <td className="p-4 sm:p-6 text-slate-400">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-red-950/50 text-red-400 border border-red-500/30 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{row.cheap}</span>
                      </div>
                    </td>

                    {/* Big Agencies */}
                    <td className="p-4 sm:p-6 text-slate-400">
                      <div className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                          ○
                        </div>
                        <span>{row.agency}</span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
