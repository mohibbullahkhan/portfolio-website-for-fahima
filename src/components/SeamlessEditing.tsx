"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Share2, ChevronDown, Check } from "lucide-react";

export default function SeamlessEditing() {
  const [selectedFormat, setSelectedFormat] = useState("MP4");
  const [selectedCompression, setSelectedCompression] = useState("High");
  const [selectedSpeed, setSelectedSpeed] = useState("Default");

  return (
    <section className="relative bg-[#1D1E22] text-[#F5F5F5] py-24 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase text-white leading-none">
            SEAMLESS EDITING
          </h2>
          <p className="mt-5 text-sm sm:text-base md:text-lg text-neutral-400 font-normal leading-relaxed">
            Edit videos effortlessly with intuitive tools, smooth transitions, and real-time previews for flawless storytelling.
          </p>
        </div>

        {/* 2-Column Side-by-Side Cards (Exactly from Reference Screenshot) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          
          {/* Card 1: CONFIGURE VIDEO EXPORT */}
          <div className="bg-[#24252A] rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between shadow-2xl group">
            {/* Top Preview Area with Lime Top Rim */}
            <div className="relative w-full aspect-[16/11] bg-black overflow-hidden border-b border-white/10">
              {/* Lime Top Rim Glow */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#B7FF00] to-transparent z-10" />

              {/* Background Motocross Jump Stunt */}
              <Image
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1000&q=80"
                alt="Configure Video Export Motocross Stunt"
                fill
                className="object-cover opacity-80"
              />

              {/* Top NLE Toolbar Bar */}
              <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10 text-[10px] font-mono text-neutral-300">
                <div className="bg-black/70 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                  <span>Last edit 1 min ago ×</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    ▶ PREVIEW
                  </span>
                  <span className="bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    SHARE
                  </span>
                  <span className="bg-[#B7FF00] text-black font-bold px-3 py-1 rounded">
                    EXPORT
                  </span>
                </div>
              </div>

              {/* Floating EXPORT SETTING Popup Panel (Matching Screenshot) */}
              <div className="absolute right-3 sm:right-6 bottom-3 top-12 w-64 sm:w-72 bg-[#1C1D21]/95 backdrop-blur-md rounded-2xl p-4 border border-white/20 shadow-2xl z-20 flex flex-col justify-between text-[11px] font-mono">
                <div>
                  <div className="flex items-center justify-between text-neutral-200 font-bold mb-3 pb-1.5 border-b border-white/10">
                    <span>EXPORT SETTING</span>
                    <span className="text-neutral-400 hover:text-white cursor-pointer">×</span>
                  </div>

                  {/* Format & FPS */}
                  <div className="grid grid-cols-2 gap-2 mb-2.5">
                    <div>
                      <span className="text-[10px] text-neutral-400 block mb-1">Format</span>
                      <div className="flex gap-1">
                        <button
                          onClick={() => setSelectedFormat("MP4")}
                          className={`flex-1 py-1 rounded text-center font-bold ${
                            selectedFormat === "MP4" ? "bg-white text-black" : "bg-neutral-800 text-neutral-300"
                          }`}
                        >
                          MP4
                        </button>
                        <button
                          onClick={() => setSelectedFormat("MOV")}
                          className={`flex-1 py-1 rounded text-center font-bold ${
                            selectedFormat === "MOV" ? "bg-white text-black" : "bg-neutral-800 text-neutral-300"
                          }`}
                        >
                          MOV
                        </button>
                      </div>
                    </div>

                    <div>
                      <span className="text-[10px] text-neutral-400 block mb-1">FPS</span>
                      <div className="bg-neutral-800 py-1 px-2 rounded text-neutral-200 flex justify-between items-center">
                        <span>60 FPS</span>
                        <ChevronDown className="w-3 h-3 text-neutral-400" />
                      </div>
                    </div>
                  </div>

                  {/* Compression */}
                  <div className="mb-2.5">
                    <span className="text-[10px] text-neutral-400 block mb-1">Compression</span>
                    <div className="grid grid-cols-4 gap-1">
                      {["Web", "Medium", "High", "Ultra"].map((comp) => (
                        <button
                          key={comp}
                          onClick={() => setSelectedCompression(comp)}
                          className={`py-1 rounded text-[10px] text-center font-bold ${
                            selectedCompression === comp
                              ? "bg-white text-black"
                              : "bg-neutral-800 text-neutral-300"
                          }`}
                        >
                          {comp}
                        </button>
                      ))}
                    </div>
                    <p className="text-[9px] text-neutral-400 mt-1 leading-tight">
                      Highest quality, best for further editing. Compression is almost impossible to notice.
                    </p>
                  </div>

                  {/* Speed */}
                  <div className="mb-2">
                    <span className="text-[10px] text-neutral-400 block mb-1">Speed</span>
                    <div className="grid grid-cols-4 gap-1">
                      {["Default", "2", "1.25", "1.5"].map((spd) => (
                        <button
                          key={spd}
                          onClick={() => setSelectedSpeed(spd)}
                          className={`py-1 rounded text-[10px] text-center font-bold ${
                            selectedSpeed === spd
                              ? "bg-white text-black"
                              : "bg-neutral-800 text-neutral-300"
                          }`}
                        >
                          {spd}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <button className="w-full py-2 rounded-md bg-[#B7FF00] text-black font-condensed font-bold text-xs uppercase shadow hover:bg-lime-hover transition-colors">
                    EXPORT NOW
                  </button>
                  <p className="text-[9px] text-neutral-400 text-center mt-1">
                    Estimated output size 884.5MB
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Card Title & Description */}
            <div className="p-6 sm:p-8">
              <h3 className="font-condensed text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                CONFIGURE VIDEO EXPORT
              </h3>
              <p className="mt-2 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
                Easily adjust resolution, format, quality, and frame rate to ensure your final video meets every platform&apos;s requirements.
              </p>
            </div>
          </div>

          {/* Card 2: SMART EDIT */}
          <div className="bg-[#24252A] rounded-3xl border border-white/10 overflow-hidden flex flex-col justify-between shadow-2xl group">
            {/* Top Preview Area with Lime Top Rim */}
            <div className="relative w-full aspect-[16/11] bg-black overflow-hidden border-b border-white/10 flex">
              {/* Lime Top Rim Glow */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#B7FF00] to-transparent z-10" />

              {/* Left Side: AI Tools & Cropping Panel */}
              <div className="w-[58%] sm:w-[60%] h-full bg-[#18191D] p-3 sm:p-4 flex flex-col justify-between border-r border-white/10 text-xs font-mono z-10">
                {/* macOS 3 dots + Tool Icons */}
                <div className="flex items-center gap-2 pb-2 border-b border-white/10">
                  <div className="flex gap-1">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-wider font-bold text-white my-1.5 flex items-center justify-between">
                    <span>AI TOOLS</span>
                  </div>

                  {/* Tabs */}
                  <div className="flex gap-2 text-[10px] text-neutral-400 pb-1.5 border-b border-white/10 mb-2">
                    <span className="text-[#B7FF00] font-bold border-b border-[#B7FF00] pb-0.5">Narrate</span>
                    <span>Transcribe</span>
                    <span>Colorgrade</span>
                  </div>

                  <p className="text-[10px] text-neutral-400 mb-2 leading-tight">
                    Color grade this video with a Japanese-style scene aesthetic.
                  </p>

                  <button className="w-full py-1.5 rounded-md bg-[#B7FF00] text-black font-condensed font-bold text-xs uppercase mb-3 shadow">
                    GENERATE NOW
                  </button>

                  {/* Cropping & Borders */}
                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    <div className="flex items-center justify-between text-neutral-300 font-bold text-[10px]">
                      <span className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF00]" />
                        <span>CROPPING & BORDERS</span>
                      </span>
                      <ChevronDown className="w-3 h-3" />
                    </div>

                    <div className="grid grid-cols-2 gap-1 text-[9px] text-neutral-400">
                      <div className="bg-[#1C1D21] p-1 rounded border border-white/5">
                        <span>Cropping: -10 px</span>
                      </div>
                      <div className="bg-[#1C1D21] p-1 rounded border border-white/5">
                        <span>Radius: 10 px</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Motocross Tire Dirt Jump Preview */}
              <div className="flex-1 relative h-full bg-black">
                <Image
                  src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80"
                  alt="Smart Edit Motocross Tire Cut"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bottom Card Title & Description */}
            <div className="p-6 sm:p-8">
              <h3 className="font-condensed text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white">
                SMART EDIT
              </h3>
              <p className="mt-2 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
                Enhance your videos quickly using pro-powered tools for cutting, polishing with minimal effort.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
