"use client";

import React from "react";

const brandList = [
  "DELL",
  "BOSCH",
  "NETFLIX",
  "DAVINCI RESOLVE",
  "ADOBE PREMIERE",
  "AFTER EFFECTS",
  "FRAME.IO",
  "SPOTIFY",
  "YOUTUBE 4K",
  "APPLE PRORES",
  "FINAL CUT PRO",
];

export default function Marquee() {
  return (
    <div className="relative w-full bg-[#050611] py-8 sm:py-10 overflow-hidden border-y border-white/[0.06] z-20">
      {/* Subtle Purple Ambient Lighting & Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050611] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050611] to-transparent z-10 pointer-events-none" />

      <div className="flex select-none whitespace-nowrap overflow-hidden">
        {/* First Loop */}
        <div className="flex items-center gap-12 sm:gap-20 animate-marquee text-slate-400 font-medium text-sm sm:text-base tracking-[0.2em] uppercase">
          {brandList.map((brand, index) => (
            <div key={`brand1-${index}`} className="flex items-center gap-12 sm:gap-20">
              <span className="hover:text-violet-300 transition-colors cursor-default opacity-60 hover:opacity-100">
                {brand}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500/40" />
            </div>
          ))}
        </div>

        {/* Second Duplicate Loop */}
        <div
          className="flex items-center gap-12 sm:gap-20 animate-marquee text-slate-400 font-medium text-sm sm:text-base tracking-[0.2em] uppercase"
          aria-hidden="true"
        >
          {brandList.map((brand, index) => (
            <div key={`brand2-${index}`} className="flex items-center gap-12 sm:gap-20">
              <span className="hover:text-violet-300 transition-colors cursor-default opacity-60 hover:opacity-100">
                {brand}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500/40" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
