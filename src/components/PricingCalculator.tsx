"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Check, ArrowRight, Zap, Sparkles } from "lucide-react";

interface VideoTypeOption {
  id: string;
  name: string;
  basePrice: number;
  duration: string;
}

const videoTypes: VideoTypeOption[] = [
  { id: "reels", name: "Short-Form & Reels (9:16)", basePrice: 95, duration: "Up to 60s" },
  { id: "youtube", name: "YouTube Long-Form (16:9)", basePrice: 240, duration: "Up to 10 mins" },
  { id: "commercial", name: "Commercial / Brand Ad", basePrice: 390, duration: "Up to 2 mins" },
  { id: "podcast", name: "Podcast / Studio Show", basePrice: 160, duration: "Full Episode Cut" },
];

const quantityTiers = [
  { count: 1, label: "1 Video", discount: 0 },
  { count: 4, label: "4 Videos (Pack)", discount: 0.1 },
  { count: 8, label: "8 Videos (Monthly)", discount: 0.18 },
  { count: 12, label: "12+ Videos (Retainer)", discount: 0.25 },
];

const addonList = [
  { id: "captions", name: "Dynamic Hook Captions & Subtitles", price: 25 },
  { id: "sound", name: "Bespoke Foley Sound Design & Music Sync", price: 35 },
  { id: "thumbnail", name: "High-CTR Custom Thumbnail Design", price: 40 },
  { id: "source", name: "Raw Project Handover (XML / Premiere)", price: 50 },
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

    const basePerVideo = currentType.basePrice;

    let addonTotalPerVideo = 0;
    selectedAddons.forEach((addonId) => {
      const match = addonList.find((a) => a.id === addonId);
      if (match) addonTotalPerVideo += match.price;
    });

    const perVideoCost = basePerVideo + addonTotalPerVideo;
    const subtotal = perVideoCost * currentTier.count;
    const discountAmount = subtotal * currentTier.discount;
    const discountedTotal = subtotal - discountAmount;
    const expressCost = isExpress ? discountedTotal * 0.25 : 0;
    const finalTotal = Math.round(discountedTotal + expressCost);

    return {
      perVideo: Math.round(finalTotal / currentTier.count),
      total: finalTotal,
      savings: Math.round(discountAmount),
      typeName: currentType.name,
      count: currentTier.count,
    };
  }, [selectedType, selectedQuantity, isExpress, selectedAddons]);

  return (
    <section id="calculator" className="relative bg-[#F8F8F5] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5DF]">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E5DF] text-[11px] font-semibold tracking-wider text-[#171717] uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
              <span>TRANSPARENT ESTIMATES</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-[1.05]">
              Project Cost Estimator
            </h2>
          </div>

          <p className="text-base text-[#666666] max-w-md font-normal leading-relaxed">
            Configure your deliverables to receive a transparent project estimate tailored to your volume and format.
          </p>
        </div>

        {/* Interactive Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Options Column */}
          <div className="lg:col-span-7 space-y-8 bg-[#FFFFFF] p-6 sm:p-8 rounded-3xl border border-[#E5E5DF] shadow-editorial">
            {/* Step 1: Video Format */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#84CC16] block mb-3">
                01 // SELECT VIDEO FORMAT
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {videoTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-2xl text-left border transition-all ${
                      selectedType === type.id
                        ? "bg-[#F8F8F5] border-[#171717] ring-1 ring-[#171717] text-[#171717]"
                        : "bg-[#FFFFFF] border-[#E5E5DF] text-[#666666] hover:text-[#171717] hover:border-[#CCCCCC]"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold">{type.name}</span>
                      <span className="text-xs font-mono font-bold text-[#171717]">${type.basePrice}</span>
                    </div>
                    <span className="text-[11px] text-[#777777]">{type.duration}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Quantity Tier */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#84CC16] block mb-3">
                02 // SELECT QUANTITY
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {quantityTiers.map((tier) => (
                  <button
                    key={tier.count}
                    onClick={() => setSelectedQuantity(tier.count)}
                    className={`p-3 rounded-2xl text-center border transition-all ${
                      selectedQuantity === tier.count
                        ? "bg-[#171717] text-[#FFFFFF] border-[#171717]"
                        : "bg-[#F8F8F5] text-[#666666] border-[#E5E5DF] hover:text-[#171717]"
                    }`}
                  >
                    <span className="block text-xs font-bold">{tier.label}</span>
                    {tier.discount > 0 && (
                      <span className="block text-[10px] text-[#84CC16] font-semibold mt-0.5">
                        Save {Math.round(tier.discount * 100)}%
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Add-ons */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#84CC16] block mb-3">
                03 // ENHANCEMENTS &amp; SERVICES
              </span>
              <div className="space-y-2">
                {addonList.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`w-full p-3.5 rounded-xl text-left border flex items-center justify-between transition-all ${
                        isChecked
                          ? "bg-[#F8F8F5] border-[#171717] text-[#171717]"
                          : "bg-[#FFFFFF] border-[#E5E5DF] text-[#666666] hover:text-[#171717]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked
                              ? "bg-[#171717] border-[#171717] text-[#FFFFFF]"
                              : "border-[#D1D1C7]"
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span className="text-xs font-medium">{addon.name}</span>
                      </div>
                      <span className="text-xs font-mono font-semibold text-[#171717]">
                        +${addon.price}/ea
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Express Turnaround Toggle */}
            <div className="pt-2 border-t border-[#E5E5DF] flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-[#171717] block">
                  Priority 24h Express Turnaround
                </span>
                <span className="text-[11px] text-[#777777]">
                  Jump to front of queue (+25% rush rate)
                </span>
              </div>
              <button
                onClick={() => setIsExpress(!isExpress)}
                className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${
                  isExpress ? "bg-[#171717]" : "bg-[#E5E5DF]"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full bg-white transition-transform ${
                    isExpress ? "translate-x-6" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Quote Summary Box */}
          <div className="lg:col-span-5 bg-[#171717] text-[#F8F8F5] p-6 sm:p-8 rounded-3xl border border-[#262626] shadow-xl sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-[#2E2E2E]">
              <span className="text-xs font-bold uppercase tracking-wider text-[#84CC16]">
                ESTIMATE SUMMARY
              </span>
              <span className="text-xs text-[#999999]">No Hidden Fees</span>
            </div>

            <div className="py-6 space-y-3 text-xs text-[#CCCCCC]">
              <div className="flex justify-between">
                <span>Selected Format:</span>
                <span className="font-semibold text-white">{calculatedQuote.typeName}</span>
              </div>
              <div className="flex justify-between">
                <span>Volume:</span>
                <span className="font-semibold text-white">{calculatedQuote.count} Video(s)</span>
              </div>
              {calculatedQuote.savings > 0 && (
                <div className="flex justify-between text-[#84CC16]">
                  <span>Tier Savings:</span>
                  <span className="font-semibold">-${calculatedQuote.savings}</span>
                </div>
              )}
            </div>

            <div className="pt-6 border-t border-[#2E2E2E] mb-6">
              <span className="text-[10px] text-[#888888] uppercase block tracking-wider font-semibold">
                Estimated Total Investment
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
                  ${calculatedQuote.total}
                </span>
                <span className="text-xs text-[#999999]">
                  (~${calculatedQuote.perVideo}/video)
                </span>
              </div>
            </div>

            <Link
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-full bg-[#FFFFFF] hover:bg-[#F0F0EC] text-[#171717] font-bold text-xs tracking-tight transition-all shadow-md group"
            >
              <span>Lock In This Estimate</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>

            <p className="text-[10px] text-[#777777] text-center mt-3 leading-relaxed">
              Final quote confirmed based on raw footage length and multitrack audio complexity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
