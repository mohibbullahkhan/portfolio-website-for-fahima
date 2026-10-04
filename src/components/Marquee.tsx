"use client";

import React from "react";

const marqueeItems = [
  "VIDEO EDITING",
  "//",
  "STORYTELLING",
  "//",
  "COLOR GRADING",
  "//",
  "MOTION DESIGN",
  "//",
  "SOUND DESIGN",
  "//",
  "PACING & RHYTHM",
  "//",
  "HIGH RETENTION HOOKS",
  "//",
];

export default function Marquee() {
  return (
    <div className="relative w-full bg-black py-4 sm:py-6 overflow-hidden border-y border-white/10 z-20">
      {/* Subtle Lime Gradient Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="flex select-none whitespace-nowrap overflow-hidden">
        {/* First Loop */}
        <div className="flex items-center gap-6 sm:gap-10 animate-marquee text-white text-sm sm:text-lg md:text-xl font-condensed tracking-widest uppercase">
          {marqueeItems.map((item, index) => (
            <span
              key={`item1-${index}`}
              className={
                item === "//"
                  ? "text-lime font-mono font-bold text-base sm:text-xl"
                  : "text-neutral-200 hover:text-lime transition-colors cursor-default"
              }
            >
              {item}
            </span>
          ))}
        </div>

        {/* Second Duplicate Loop for Infinite Seamless Scroll */}
        <div
          className="flex items-center gap-6 sm:gap-10 animate-marquee text-white text-sm sm:text-lg md:text-xl font-condensed tracking-widest uppercase"
          aria-hidden="true"
        >
          {marqueeItems.map((item, index) => (
            <span
              key={`item2-${index}`}
              className={
                item === "//"
                  ? "text-lime font-mono font-bold text-base sm:text-xl"
                  : "text-neutral-200 hover:text-lime transition-colors cursor-default"
              }
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
