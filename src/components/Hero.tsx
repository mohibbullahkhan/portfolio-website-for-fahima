"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  ArrowUpRight,
  Share2,
  Sliders,
  Volume2,
  Maximize2,
  ChevronDown,
  RotateCcw,
  RotateCw,
  Scissors,
  Layers,
  Sparkles,
} from "lucide-react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);

  // Time ticks ruler numbers 0S to 16S
  const timeTicks = Array.from({ length: 17 }, (_, i) => `${i}S`);

  return (
    <section
      id="home"
      className="relative bg-[#D4FF00] text-black pt-28 sm:pt-36 pb-24 sm:pb-36 overflow-hidden selection:bg-black selection:text-[#D4FF00]"
    >
      {/* Background Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none noise-overlay" />

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Headline Area */}
        <div className="text-center max-w-5xl mx-auto relative">
          {/* Top-Right 8-Point Star Icon (Exactly from Reference) */}
          <div className="absolute -top-4 sm:-top-8 right-2 sm:right-10 pointer-events-none">
            <svg
              className="w-8 h-8 sm:w-14 sm:h-14 text-black fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 0L13.8 8.2L22 10L13.8 11.8L12 20L10.2 11.8L2 10L10.2 8.2L12 0Z" />
            </svg>
          </div>

          {/* Bottom-Left 8-Point Star Icon (Exactly from Reference) */}
          <div className="absolute top-28 sm:top-40 left-2 sm:left-12 pointer-events-none">
            <svg
              className="w-6 h-6 sm:w-10 sm:h-10 text-black fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 0L13.8 8.2L22 10L13.8 11.8L12 20L10.2 11.8L2 10L10.2 8.2L12 0Z" />
            </svg>
          </div>

          {/* Massive Two-Line Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-display text-6xl sm:text-8xl md:text-9xl lg:text-[140px] tracking-tight leading-[0.85] uppercase text-black font-normal"
          >
            EDIT LIKE MAGIC
            <br />
            EVERY TIME
          </motion.h1>

          {/* Supporting Description Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg text-neutral-900 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Edit videos effortlessly with powerful tools, smooth performance, and pro features
            tailored for creators, storytellers, and content professionals.
          </motion.p>

          {/* Black Pill CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 sm:mt-9 flex justify-center"
          >
            <Link
              href="#work"
              className="inline-flex items-center justify-center bg-black text-white hover:bg-neutral-900 font-condensed tracking-wider text-base sm:text-lg px-9 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-all duration-200"
            >
              DOWNLOAD NOW
            </Link>
          </motion.div>
        </div>

        {/* Horizontal Timeline Ticks Ruler Bar (Directly from Reference) */}
        <div className="mt-14 sm:mt-18 mb-10 sm:mb-14 relative max-w-6xl mx-auto overflow-hidden">
          {/* Top Ticks Border */}
          <div className="relative h-6 flex items-end">
            <div className="w-full flex justify-between items-end border-b border-black/30 pb-1 px-1">
              {Array.from({ length: 120 }).map((_, i) => (
                <span
                  key={i}
                  className={`w-[1px] bg-black/40 ${
                    i % 10 === 0 ? "h-3.5 bg-black" : i % 5 === 0 ? "h-2.5" : "h-1.5"
                  }`}
                />
              ))}
            </div>

            {/* Red Needle Cursor Indicator at ~4.5S */}
            <div className="absolute left-[30%] sm:left-[32%] top-0 bottom-0 flex flex-col items-center">
              <div className="w-2.5 h-3 bg-red-600 rounded-sm shadow-sm" />
              <div className="w-[2px] h-full bg-red-600" />
            </div>
          </div>

          {/* Seconds Labels: 0S ····· 1S ····· 2S ····· ... 16S */}
          <div className="flex justify-between items-center text-[10px] sm:text-xs font-mono font-bold text-black/80 px-1 pt-1.5">
            {timeTicks.map((tick, i) => (
              <span key={i} className="flex items-center gap-1 sm:gap-2">
                <span>{tick}</span>
                {i < timeTicks.length - 1 && (
                  <span className="hidden md:inline text-black/40 font-normal">·····</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* Video Editing Workspace Suite with Left & Right Floating Motocross Cards */}
        <div className="relative max-w-6xl mx-auto mt-6">
          
          {/* Floating Motocross Card (Left) */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 lg:-left-24 top-1/2 -translate-y-1/2 z-20 w-36 sm:w-48 lg:w-56 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-2 border-black/40 bg-black hidden md:block"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80"
                alt="Motocross stunt jump airborne"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Floating Motocross Card (Right) */}
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-6 lg:-right-24 top-1/2 -translate-y-1/2 z-20 w-36 sm:w-48 lg:w-56 rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-2 border-black/40 bg-black hidden md:block"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80"
                alt="Motocross high speed turn"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Main NLE Editing Software Window (Matching Reference UI) */}
          <div className="relative bg-[#1A1B1E] rounded-3xl border border-black/30 shadow-[0_30px_70px_rgba(0,0,0,0.7)] overflow-hidden text-white z-10">
            
            {/* Window Top Titlebar */}
            <div className="bg-[#141517] px-4 py-2.5 flex items-center justify-between border-b border-white/10 text-xs">
              {/* macOS Window Controls + Undo/Redo */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-2 text-neutral-400 pl-3 border-l border-white/10">
                  <RotateCcw className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                  <RotateCw className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                  <Scissors className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                </div>
              </div>

              {/* Tab: Vlog Japan 2025 */}
              <div className="flex items-center gap-2 bg-[#202226] px-4 py-1 rounded-md border border-white/10">
                <span className="font-mono text-[11px] text-neutral-200">
                  Vlog Japan 2025
                </span>
                <span className="text-[10px] text-neutral-500 hidden sm:inline">
                  | Last edit 1 min ago
                </span>
                <span className="text-neutral-400 hover:text-white text-xs cursor-pointer ml-1">
                  ×
                </span>
              </div>

              {/* Action Buttons: Preview, Share, Export */}
              <div className="flex items-center gap-2">
                <button className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded text-[11px] font-semibold text-neutral-300 hover:text-white">
                  <span>▶ PREVIEW</span>
                </button>
                <button className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded text-[11px] font-semibold text-neutral-300 hover:text-white">
                  <Share2 className="w-3.5 h-3.5" />
                  <span>SHARE</span>
                </button>
                <button className="inline-flex items-center gap-1 px-3 py-1 rounded-md bg-[#D4FF00] text-black font-condensed font-bold text-xs uppercase shadow">
                  EXPORT
                </button>
                <div className="w-6 h-6 rounded-full bg-neutral-700 overflow-hidden relative ml-1">
                  <Image
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt="User"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 3-Column Workspace Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#17181B]">
              
              {/* Left Column: Tools & Cropping & Borders Inspector */}
              <div className="hidden lg:block lg:col-span-3 border-r border-white/10 p-3.5 bg-[#141517] text-xs font-mono">
                <div className="text-[11px] uppercase tracking-wider font-bold text-white mb-2 flex items-center justify-between">
                  <span>AI TOOLS</span>
                </div>
                
                {/* Tabs */}
                <div className="flex gap-2 text-[10px] text-neutral-400 pb-2 border-b border-white/10 mb-3">
                  <span className="text-[#D4FF00] font-bold border-b border-[#D4FF00] pb-0.5">Narrate</span>
                  <span>Transcribe</span>
                  <span>Colorgrade</span>
                </div>

                <p className="text-[10px] text-neutral-400 mb-3 leading-tight">
                  Color grade this video with a Japanese-style scene aesthetic.
                </p>

                <button className="w-full py-1.5 rounded-md bg-[#D4FF00] text-black font-condensed font-bold text-xs uppercase mb-4 shadow">
                  GENERATE NOW
                </button>

                {/* Cropping & Borders Accordion */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="flex items-center justify-between text-neutral-300 font-bold text-[11px]">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-[#D4FF00]" />
                      <span>CROPPING & BORDERS</span>
                    </span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[10px] text-neutral-400">
                    <div className="bg-[#1C1D21] p-1.5 rounded border border-white/5">
                      <span>Cropping: -10 px</span>
                    </div>
                    <div className="bg-[#1C1D21] p-1.5 rounded border border-white/5">
                      <span>Radius: 10 px</span>
                    </div>
                  </div>

                  {/* Look & Style */}
                  <div className="pt-2 border-t border-white/10">
                    <div className="flex items-center justify-between text-neutral-300 font-bold text-[11px] mb-2">
                      <span className="flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-neutral-500" />
                        <span>LOOK & STYLE</span>
                      </span>
                      <ChevronDown className="w-3.5 h-3.5" />
                    </div>

                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-[10px] text-neutral-400 mb-0.5">
                          <span>Exposure</span>
                          <span className="text-[#D4FF00]">35%</span>
                        </div>
                        <div className="h-1 bg-neutral-800 rounded-full">
                          <div className="h-full bg-[#D4FF00] w-[35%] rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] text-neutral-400 mb-0.5">
                          <span>Contrast</span>
                          <span className="text-[#D4FF00]">90%</span>
                        </div>
                        <div className="h-1 bg-neutral-800 rounded-full">
                          <div className="h-full bg-[#D4FF00] w-[90%] rounded-full" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] text-neutral-400 mb-0.5">
                          <span>Saturation</span>
                          <span className="text-[#D4FF00]">98%</span>
                        </div>
                        <div className="h-1 bg-neutral-800 rounded-full">
                          <div className="h-full bg-[#D4FF00] w-[98%] rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Column: Main Motocross Video Player */}
              <div className="lg:col-span-6 p-3 sm:p-4 flex flex-col justify-between bg-black">
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-2xl border border-white/10 group">
                  <Image
                    src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80"
                    alt="Motocross Stadium Race #771"
                    fill
                    priority
                    className="object-cover"
                  />

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#D4FF00] text-black flex items-center justify-center shadow-[0_0_30px_rgba(212,255,0,0.6)] hover:scale-110 active:scale-95 transition-transform"
                    aria-label="Toggle Playback"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    )}
                  </button>

                  {/* Player Scrubber Bar with Blue/Red In-Out Markers */}
                  <div className="absolute bottom-2 left-3 right-3 flex items-center gap-2">
                    <div className="relative flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="absolute left-[20%] w-[50%] h-full bg-[#D4FF00]" />
                    </div>
                  </div>
                </div>

                {/* Sub-Player Controls */}
                <div className="flex items-center justify-between text-neutral-400 text-xs pt-2">
                  <div className="flex items-center gap-3">
                    <Volume2 className="w-4 h-4 hover:text-white cursor-pointer" />
                    <span className="font-mono text-[10px]">100%</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#D4FF00]">4K UHD 60FPS</span>
                  <Maximize2 className="w-4 h-4 hover:text-white cursor-pointer" />
                </div>
              </div>

              {/* Right Column: Project Media Bin */}
              <div className="hidden lg:block lg:col-span-3 border-l border-white/10 p-3.5 bg-[#141517] text-xs font-mono">
                <div className="text-[11px] uppercase tracking-wider font-bold text-white mb-2 flex items-center justify-between">
                  <span>PROJECT MEDIA</span>
                  <span className="text-[#D4FF00] text-[10px]">23 items</span>
                </div>

                {/* 2-Column Grid of Motocross Action Takes */}
                <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-hidden">
                  {[
                    { title: "MOTO_01", time: "00:29", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=200&q=80" },
                    { title: "JUMP_771", time: "01:07", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=200&q=80" },
                    { title: "TURN_SPEED", time: "00:56", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=200&q=80" },
                    { title: "STADIUM", time: "01:34", img: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=200&q=80" },
                    { title: "FINISH_LINE", time: "00:30", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=200&q=80" },
                    { title: "PODIUM", time: "01:41", img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=200&q=80" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-md overflow-hidden bg-black/50 border border-white/10 hover:border-[#D4FF00] transition-colors cursor-pointer"
                    >
                      <div className="relative aspect-video">
                        <Image src={item.img} alt={item.title} fill className="object-cover" />
                        <span className="absolute bottom-1 right-1 bg-black/80 text-[8px] font-mono text-neutral-300 px-1 rounded">
                          {item.time}
                        </span>
                      </div>
                      <p className="text-[9px] font-mono text-neutral-300 p-1 truncate">
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Timeline Section (Directly from Reference) */}
            <div className="bg-[#121315] border-t border-white/10 p-3 sm:p-4">
              {/* Header with Timecode Ruler */}
              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400 mb-2 px-2">
                <span className="text-[#D4FF00] font-bold">01:02:36:10</span>
                <span>0S</span>
                <span>5S</span>
                <span>10S</span>
                <span>15S</span>
              </div>

              {/* Multi-Track Filmstrip Lanes */}
              <div className="space-y-1.5 font-mono text-[10px]">
                {/* Track Video 1 */}
                <div className="flex items-center gap-2">
                  <span className="w-10 text-neutral-400">Video 1</span>
                  <div className="flex-1 h-7 bg-black/40 rounded flex items-center gap-1.5 p-1 relative overflow-hidden">
                    <div className="w-[30%] h-full bg-blue-900/60 border border-blue-500 rounded px-1.5 flex items-center text-white text-[8px]">
                      Intro_Pan.mov
                    </div>
                    {/* Active Highlighted Cut Clip (Yellow Border as in Reference) */}
                    <div className="w-[28%] h-full bg-[#D4FF00] text-black font-bold border-2 border-yellow-300 rounded px-1.5 flex items-center text-[8px]">
                      Motocross_Jump.mp4 [CUT]
                    </div>
                    <div className="w-[38%] h-full bg-blue-900/60 border border-blue-500 rounded px-1.5 flex items-center text-white text-[8px]">
                      Stadium_Cheer.mov
                    </div>
                  </div>
                </div>

                {/* Track Video 2 */}
                <div className="flex items-center gap-2">
                  <span className="w-10 text-neutral-400">Video 2</span>
                  <div className="flex-1 h-6 bg-black/40 rounded flex items-center gap-1.5 p-1 relative">
                    <div className="w-[22%] h-full bg-purple-900/60 border border-purple-500 rounded px-1.5 flex items-center text-white text-[8px]">
                      Text_Japan_Vlog
                    </div>
                  </div>
                </div>

                {/* Track Audio 1 with Waveform */}
                <div className="flex items-center gap-2">
                  <span className="w-10 text-[#D4FF00]">Audio 1</span>
                  <div className="flex-1 h-6 bg-black/40 rounded flex items-center px-2 relative overflow-hidden">
                    <div className="w-[90%] h-full bg-emerald-950/80 border border-emerald-500 rounded px-1.5 flex items-center text-emerald-300 text-[8px]">
                      ||||||\/|||||/\/\/\/\/||||||/|||||||||||| Beat_Drop_Master.wav
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Transition Gradient into Deep Dark Charcoal */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-[#1D1E22]/60 to-[#1D1E22] pointer-events-none" />
    </section>
  );
}
