"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeftRight } from "lucide-react";

const samples = [
  {
    id: "cinematic-color",
    title: "Cinematic Low-Light Grade",
    subtitle: "Flat S-Log3 → 12-Bit Film Emulation",
    beforeImage: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=40",
    afterImage: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80",
    beforeLabel: "RAW LOG PROFILE",
    afterLabel: "12-BIT REC.709 GRADE",
    stats: "DaVinci Resolve Studio • Node-based Color Pipeline",
  },
  {
    id: "commercial-lighting",
    title: "Commercial Golden Hour",
    subtitle: "Overexposed Raw → Golden Hour Film Emulation",
    beforeImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=40",
    afterImage: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80",
    beforeLabel: "UNPROCESSED CAPTURE",
    afterLabel: "ATMOSPHERIC COMMERCIAL GRADE",
    stats: "Highlights Recovered • Film Grain & Halation",
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
    <section className="relative bg-[#F8F8F5] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5DF] overflow-hidden select-none">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E5DF] text-[11px] font-semibold tracking-wider text-[#171717] uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
              <span>COLOR SCIENCE &amp; POST-POLISH</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-[1.05]">
              Before &amp; After Transformation
            </h2>
          </div>

          <p className="text-base text-[#666666] max-w-md font-normal leading-relaxed">
            Drag the slider to inspect how flat camera LOG footage is transformed into rich, broadcast-ready cinematic frames.
          </p>
        </div>

        {/* Sample Switcher Tabs */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {samples.map((sample, idx) => (
            <button
              key={sample.id}
              onClick={() => {
                setActiveSampleIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-tight transition-all border ${
                activeSampleIndex === idx
                  ? "bg-[#171717] text-[#FFFFFF] border-[#171717] shadow-sm"
                  : "bg-[#FFFFFF] text-[#666666] border-[#E5E5DF] hover:text-[#171717]"
              }`}
            >
              {sample.title}
            </button>
          ))}
        </div>

        {/* Interactive Split View Slider Container */}
        <div className="relative rounded-3xl overflow-hidden border border-[#E5E5DF] bg-[#171717] shadow-editorial">
          <div
            className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden cursor-ew-resize"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full width background) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={activeSample.afterImage}
                alt={activeSample.afterLabel}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />
              <div className="absolute top-4 right-4 z-10">
                <span className="px-3 py-1.5 rounded-full bg-[#171717]/85 backdrop-blur-md border border-white/10 text-[10px] font-semibold tracking-wider text-[#FFFFFF]">
                  {activeSample.afterLabel}
                </span>
              </div>
            </div>

            {/* Before Image (Clipped by slider percentage via CSS clip-path) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{
                clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
              }}
            >
              <Image
                src={activeSample.beforeImage}
                alt={activeSample.beforeLabel}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />
              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1.5 rounded-full bg-[#171717]/85 backdrop-blur-md border border-white/10 text-[10px] font-semibold tracking-wider text-[#CCCCCC]">
                  {activeSample.beforeLabel}
                </span>
              </div>
            </div>

            {/* Slider Divider Bar */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-[#FFFFFF] cursor-ew-resize z-20 pointer-events-none shadow-md"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle Knob */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#171717] text-[#FFFFFF] border-2 border-[#FFFFFF] flex items-center justify-center shadow-lg pointer-events-auto">
                <ArrowLeftRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* Bottom Spec Footer */}
          <div className="p-4 sm:p-5 bg-[#171717] border-t border-[#262626] flex items-center justify-between text-xs text-[#999999]">
            <span>{activeSample.stats}</span>
            <span className="text-[#84CC16] font-semibold">DRAG SLIDER TO COMPARE</span>
          </div>
        </div>
      </div>
    </section>
  );
}
