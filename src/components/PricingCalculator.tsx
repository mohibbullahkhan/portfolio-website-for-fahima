"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calculator,
  Sparkles,
  Check,
  ArrowRight,
  MessageCircle,
  HelpCircle,
  Zap,
} from "lucide-react";

interface VideoTypeOption {
  id: string;
  name: string;
  basePrice: number;
  duration: string;
}

const videoTypes: VideoTypeOption[] = [
  { id: "reels", name: "Shorts / Reels (9:16)", basePrice: 90, duration: "Up to 60s" },
  { id: "youtube", name: "YouTube Long-Form (16:9)", basePrice: 220, duration: "Up to 10 mins" },
  { id: "commercial", name: "Commercial / Brand Ad", basePrice: 380, duration: "Up to 2 mins" },
  { id: "podcast", name: "Podcast / Talk Show Repurpose", basePrice: 150, duration: "Cut & Highlights" },
];

const quantityTiers = [
  { count: 1, label: "1 Video", discount: 0 },
  { count: 4, label: "4 Videos (Pack)", discount: 0.1 }, // 10% discount
  { count: 8, label: "8 Videos (Monthly)", discount: 0.18 }, // 18% discount
  { count: 12, label: "12+ Videos (Retainer)", discount: 0.25 }, // 25% discount
];

const addonList = [
  { id: "captions", name: "Viral Animated Subtitles & Dynamic Hooks", price: 25 },
  { id: "sound", name: "Bespoke Foley Sound Design & Music License", price: 35 },
  { id: "thumbnail", name: "High-CTR YouTube Thumbnail Design", price: 40 },
  { id: "source", name: "Full Raw Project File Handover (XML / PR)", price: 50 },
];

export default function PricingCalculator() {
  const [selectedType, setSelectedType] = useState<string>("reels");
  const [selectedQuantity, setSelectedQuantity] = useState<number>(4);
  const [isExpress, setIsExpress] = useState<boolean>(false);
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["captions", "sound"]);

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculatedQuote = useMemo(() => {
    const currentType = videoTypes.find((t) => t.id === selectedType) || videoTypes[0];
    const currentTier = quantityTiers.find((q) => q.count === selectedQuantity) || quantityTiers[1];

    let basePerVideo = currentType.basePrice;

    // Addons per video
    const addonsCostPerVideo = selectedAddons.reduce((sum, addonId) => {
      const found = addonList.find((a) => a.id === addonId);
      return sum + (found ? found.price : 0);
    }, 0);

    let perVideoSubtotal = basePerVideo + addonsCostPerVideo;

    // Express delivery multiplier (+25%)
    if (isExpress) {
      perVideoSubtotal = Math.round(perVideoSubtotal * 1.25);
    }

    // Multiply by quantity
    let totalGross = perVideoSubtotal * selectedQuantity;

    // Apply bundle discount
    let totalNet = Math.round(totalGross * (1 - currentTier.discount));
    let savings = totalGross - totalNet;

    return {
      totalNet,
      savings,
      perVideo: Math.round(totalNet / selectedQuantity),
      typeName: currentType.name,
      quantityLabel: currentTier.label,
      discountPct: Math.round(currentTier.discount * 100),
    };
  }, [selectedType, selectedQuantity, isExpress, selectedAddons]);

  // WhatsApp prefilled message
  const whatsappUrl = useMemo(() => {
    const msg = `Hi Fahima! I customized a project quote on your website:
• Type: ${calculatedQuote.typeName}
• Quantity: ${calculatedQuote.quantityLabel}
• Speed: ${isExpress ? "Express 24h Delivery" : "Standard 48-72h"}
• Addons: ${selectedAddons.join(", ") || "None"}
• Estimated Total: $${calculatedQuote.totalNet}

Are you available to take on this project?`;
    return `https://wa.me/8801793884684?text=${encodeURIComponent(msg)}`;
  }, [calculatedQuote, isExpress, selectedAddons]);

  return (
    <section id="calculator" className="relative bg-[#060714] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[500px] bg-violet-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none stars-overlay opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/50 border border-violet-500/30 text-xs font-medium text-violet-300 uppercase mb-4 backdrop-blur-md">
            <Calculator className="w-3.5 h-3.5 text-violet-400" />
            <span>Interactive Project Estimator</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Calculate Your Video <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent purple-text-glow">
              Investment in Real-Time
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Select your project format, volume, and optional extras to get an immediate, transparent estimate with bundle discounts applied.
          </p>
        </div>

        {/* Calculator Suite Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Controls Column */}
          <div className="lg:col-span-7 space-y-7 bg-[#0c0d24]/90 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-white/[0.08] shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
            
            {/* Step 1: Select Format */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-violet-300 block mb-3">
                01 / Select Video Format
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {videoTypes.map((t) => {
                  const isSelected = selectedType === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setSelectedType(t.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all ${
                        isSelected
                          ? "bg-violet-950/60 border-violet-500/70 text-white shadow-[0_0_20px_rgba(139,92,246,0.25)]"
                          : "bg-white/[0.02] border-white/[0.06] text-slate-300 hover:border-white/20"
                      }`}
                    >
                      <span className="text-xs sm:text-sm font-semibold block mb-0.5">
                        {t.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 block">
                        Base: ${t.basePrice} • {t.duration}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Quantity Tier */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider text-violet-300">
                  02 / Video Volume &amp; Frequency
                </label>
                {calculatedQuote.discountPct > 0 && (
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                    🎉 {calculatedQuote.discountPct}% Bundle Discount Applied
                  </span>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {quantityTiers.map((q) => {
                  const isSelected = selectedQuantity === q.count;
                  return (
                    <button
                      key={q.count}
                      onClick={() => setSelectedQuantity(q.count)}
                      className={`py-3 px-2 rounded-xl text-center border transition-all ${
                        isSelected
                          ? "bg-violet-600 text-white border-violet-500 shadow-[0_0_15px_rgba(139,92,246,0.5)] font-semibold"
                          : "bg-white/[0.02] border-white/[0.06] text-slate-300 hover:border-white/20 text-xs"
                      }`}
                    >
                      <span className="text-xs font-medium block">{q.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Turnaround Speed */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-violet-300 block mb-3">
                03 / Production Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <button
                  onClick={() => setIsExpress(false)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    !isExpress
                      ? "bg-violet-950/50 border-violet-500/60 text-white"
                      : "bg-white/[0.02] border-white/[0.06] text-slate-400"
                  }`}
                >
                  <span className="text-xs font-semibold block text-white">Standard Delivery (48–72h)</span>
                  <span className="text-[10px] font-mono text-slate-400">Standard review cycles included</span>
                </button>
                <button
                  onClick={() => setIsExpress(true)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    isExpress
                      ? "bg-violet-950/50 border-violet-500/60 text-white"
                      : "bg-white/[0.02] border-white/[0.06] text-slate-400"
                  }`}
                >
                  <span className="text-xs font-semibold block text-white flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    Express Rush (24h Delivery)
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">Priority queue jump (+25%)</span>
                </button>
              </div>
            </div>

            {/* Step 4: Add-Ons */}
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-violet-300 block mb-3">
                04 / Custom Post-Production Add-Ons
              </label>
              <div className="space-y-2">
                {addonList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        isChecked
                          ? "bg-violet-950/30 border-violet-500/40 text-white"
                          : "bg-white/[0.01] border-white/[0.05] text-slate-400 hover:border-white/15"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-4 h-4 rounded-md flex items-center justify-center border transition-colors ${
                            isChecked
                              ? "bg-violet-600 border-violet-500 text-white"
                              : "border-white/20 bg-black/40"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium text-slate-200">{addon.name}</span>
                      </div>
                      <span className="text-[10px] font-mono text-violet-300">
                        +${addon.price}/cut
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Live Estimate Summary Card */}
          <div className="lg:col-span-5 sticky top-28 bg-gradient-to-b from-[#13143c] to-[#0a0b22] p-6 sm:p-8 rounded-3xl border border-violet-500/40 shadow-[0_0_60px_rgba(139,92,246,0.25)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-violet-300">
                  ESTIMATE SUMMARY
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                  ● Guaranteed Fixed Pricing
                </span>
              </div>

              {/* Price Callout */}
              <div className="mb-6">
                <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                  Estimated Total Investment:
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl sm:text-6xl font-bold text-white tracking-tight">
                    ${calculatedQuote.totalNet}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    (${calculatedQuote.perVideo} / video)
                  </span>
                </div>
                {calculatedQuote.savings > 0 && (
                  <p className="text-xs font-mono text-emerald-400 mt-2">
                    ✓ You save ${calculatedQuote.savings} with volume pricing
                  </p>
                )}
              </div>

              {/* Breakdown list */}
              <div className="space-y-2.5 py-4 border-t border-b border-white/[0.08] text-xs text-slate-300 font-mono mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-400">Format:</span>
                  <span className="text-white text-right">{calculatedQuote.typeName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Volume:</span>
                  <span className="text-white">{calculatedQuote.quantityLabel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Turnaround:</span>
                  <span className="text-white">{isExpress ? "Express (24h)" : "Standard (48-72h)"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Active Add-Ons:</span>
                  <span className="text-violet-300">{selectedAddons.length} included</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Revisions:</span>
                  <span className="text-emerald-400">2 Rounds Included</span>
                </div>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Lock Quote on WhatsApp</span>
              </a>

              <Link
                href="#contact"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(139,92,246,0.4)] transition-all"
              >
                <span>Submit Inquiry With This Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <p className="text-[10px] font-mono text-center text-slate-400 pt-1">
                * Zero upfront commitment required until we align on footage &amp; timeline.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
