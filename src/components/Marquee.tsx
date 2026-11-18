"use client";

import React from "react";

const studioStandards = [
  "DAVINCI RESOLVE 19",
  "ADOBE PREMIERE PRO",
  "AFTER EFFECTS",
  "FRAME.IO COLLABORATION",
  "APPLE PRORES 422 HQ",
  "12-BIT COLOR GRADING",
  "-14 LUFS BROADCAST AUDIO",
  "4K DCI MASTERING",
  "DYNAMIC MOTION GRAPHICS",
  "SOUND DESIGN & MIXING",
];

export default function Marquee() {
  return (
    <div className="relative w-full bg-[#F0F0EC] py-4 overflow-hidden border-y border-[#E5E5DF] z-20 select-none">
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-[#F0F0EC] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-[#F0F0EC] to-transparent z-10 pointer-events-none" />

      <div className="flex select-none whitespace-nowrap overflow-hidden">
        {/* Loop 1 */}
        <div className="flex items-center gap-8 sm:gap-12 animate-marquee text-[#555555] font-sans font-medium text-xs sm:text-sm tracking-wider uppercase">
          {studioStandards.map((item, index) => (
            <div key={`std1-${index}`} className="flex items-center gap-8 sm:gap-12">
              <span className="hover:text-[#171717] transition-colors cursor-default">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
            </div>
          ))}
        </div>

        {/* Loop 2 */}
        <div
          className="flex items-center gap-8 sm:gap-12 animate-marquee text-[#555555] font-sans font-medium text-xs sm:text-sm tracking-wider uppercase"
          aria-hidden="true"
        >
          {studioStandards.map((item, index) => (
            <div key={`std2-${index}`} className="flex items-center gap-8 sm:gap-12">
              <span className="hover:text-[#171717] transition-colors cursor-default">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
