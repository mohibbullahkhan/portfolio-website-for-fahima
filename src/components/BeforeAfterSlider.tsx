"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, SlidersHorizontal, ArrowLeftRight } from "lucide-react";

const samples = [
  {
    id: "cinematic-color",
    title: "Cinematic Night Portrait",
    subtitle: "Flat S-Log3 → High Dynamic Film Emulation",
    beforeImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=40", // flat looking
    afterImage: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80", // rich vibrant
    beforeLabel: "RAW UNEDITED (LOG)",
    afterLabel: "COLOR GRADED & POLISHED",
    stats: "DaVinci Resolve Studio • 12-Bit Rec.709",
  },
  {
    id: "commercial-lighting",
    title: "Commercial Travel Landscape",
    subtitle: "Overexposed Raw → Golden Hour Film Look",
    beforeImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=40",
    afterImage: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    beforeLabel: "FLAT CAMERA PROFILE",
    afterLabel: "CINEMATIC MASTER GRADE",
    stats: "Highlights Recovered • Atmospheric Haze",
  },
];

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeSampleIndex, setActiveSampleIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const activeSample = samples[activeSampleIndex];

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX, rect);
    }
  };

  return (
    <section className="relative bg-[#060714] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[500px] bg-violet-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none stars-overlay opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/50 border border-violet-500/30 text-xs font-medium text-violet-300 uppercase mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Direct Visual Transformation</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Raw Footage vs <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent purple-text-glow">
              Cinematic Master Cut
            </span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-normal leading-relaxed">
            Drag the slider to see how flat camera profiles are transformed into punchy, high-retention visual art with custom color science.
          </p>

          {/* Sample Switcher Tabs */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {samples.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setActiveSampleIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all ${
                  activeSampleIndex === idx
                    ? "bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                    : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/10"
                }`}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Comparison Container */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/[0.12] shadow-[0_20px_70px_rgba(0,0,0,0.8)] bg-black select-none">
          
          <div
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full cursor-ew-resize overflow-hidden"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* "After" Layer (Base / Underneath) */}
            <div className="absolute inset-0">
              <Image
                src={activeSample.afterImage}
                alt={activeSample.afterLabel}
                fill
                priority
                className="object-cover"
              />
              {/* After Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/75 backdrop-blur-md text-emerald-300 border border-emerald-500/30 shadow-md">
                  ● {activeSample.afterLabel}
                </span>
              </div>
            </div>

            {/* "Before" Layer (Clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <div className="relative w-full h-full min-w-[700px] sm:min-w-[900px] lg:min-w-[1100px] filter contrast-75 brightness-95 saturate-50">
                <Image
                  src={activeSample.beforeImage}
                  alt={activeSample.beforeLabel}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Before Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/75 backdrop-blur-md text-slate-300 border border-white/15 shadow-md">
                  ○ {activeSample.beforeLabel}
                </span>
              </div>
            </div>

            {/* Center Slider Divider Line */}
            <div
              className="absolute top-0 bottom-0 z-20 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-[2px] h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

              {/* Circular Slider Thumb Handle */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-violet-600 border-2 border-white text-white flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.9)] cursor-ew-resize">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

            {/* Bottom Info Bar */}
            <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
              <span className="text-[10px] sm:text-xs font-mono text-slate-300 bg-black/80 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
                {activeSample.subtitle}
              </span>
              <span className="text-[10px] sm:text-xs font-mono text-violet-300 bg-black/80 px-3 py-1 rounded-full backdrop-blur-md border border-violet-500/30 hidden sm:inline-block">
                {activeSample.stats}
              </span>
            </div>

          </div>

        </div>

        {/* Caption Instructions */}
        <p className="mt-4 text-center text-xs font-mono text-slate-400">
          ↔ Click and drag across the screen to inspect the grade difference
        </p>

      </div>
    </section>
  );
}
