"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X, ShieldCheck } from "lucide-react";

const comparisons = [
  {
    feature: "Direct Communication",
    fahima: "1-on-1 direct WhatsApp & Slack with Fahima",
    cheap: "Slow ticket system / outsourced language barrier",
    agency: "Account manager middleman, slow turnarounds",
  },
  {
    feature: "Retention-Driven Pacing",
    fahima: "Custom 3-second hook structure & beat-synced rhythm",
    cheap: "Generic templates with zero narrative focus",
    agency: "Often rigid corporate style lacking creator energy",
  },
  {
    feature: "Color Grading Pipeline",
    fahima: "DaVinci Resolve 12-Bit film emulation & skin isolation",
    cheap: "Basic saturation slider / uncorrected flat profiles",
    agency: "Good, but billed as a separate $1,000+ line item",
  },
  {
    feature: "Sound Design & Foley",
    fahima: "Multi-layered sound effects, risers & licensed music",
    cheap: "Low-quality stock audio with copyright strike risks",
    agency: "Included, but usually over-engineered and slow",
  },
  {
    feature: "Delivery Timelines",
    fahima: "Reliable 24–48h turnarounds without dropping frames",
    cheap: "Unpredictable delivery, frequently misses deadlines",
    agency: "Slow 10–14 business days review cycles",
  },
  {
    feature: "Who Actually Edits?",
    fahima: "Fahima personally cuts and masters every single timeline",
    cheap: "Unknown, often outsourced down the chain",
    agency: "Outsourced to junior interns with minimal supervision",
  },
];

export default function ComparisonTable() {
  return (
    <section className="relative bg-[#F8F8F5] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5DF] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E5DF] text-[11px] font-semibold tracking-wider text-[#171717] uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
              <span>THE DIRECT EDITOR ADVANTAGE</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-[1.05]">
              Why Work With Me
            </h2>
          </div>

          <p className="text-base text-[#666666] max-w-md font-normal leading-relaxed">
            No bloated agency overhead. No junior interns. You work directly with a dedicated editor who cares about your retention metrics and visual reputation.
          </p>
        </div>

        {/* Clean Luxury Comparison Grid */}
        <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-[#E5E5DF] overflow-hidden shadow-editorial">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-[#E5E5DF] bg-[#F0F0EC]/60 text-xs font-semibold text-[#171717] uppercase tracking-wider">
                  <th className="py-5 px-6">Deliverable / Standard</th>
                  <th className="py-5 px-6 bg-[#171717] text-[#FFFFFF]">Fahima Studio</th>
                  <th className="py-5 px-6 text-[#777777]">Budget Freelancers</th>
                  <th className="py-5 px-6 text-[#777777]">Traditional Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E5DF] text-xs sm:text-sm">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F8F8F5] transition-colors">
                    <td className="py-4 px-6 font-semibold text-[#171717]">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 bg-[#171717]/[0.02] border-x border-[#E5E5DF] font-medium text-[#171717]">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#84CC16] shrink-0 mt-0.5" />
                        <span>{row.fahima}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[#777777]">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5" />
                        <span>{row.cheap}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-[#777777]">
                      <div className="flex items-start gap-2">
                        <span className="text-[#999999] shrink-0 font-bold">—</span>
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
