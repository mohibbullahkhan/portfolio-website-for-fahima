"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  ArrowUpRight,
  Scissors,
  Layers,
  Sliders,
  Volume2,
  Maximize2,
  Film,
  Zap,
  Clock,
} from "lucide-react";

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section
      id="home"
      className="relative bg-lime text-black pt-28 sm:pt-36 pb-20 sm:pb-32 overflow-hidden transition-colors selection:bg-black selection:text-lime"
    >
      {/* Background Accent Grid / Grain */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Availability Badge */}
        <div className="flex justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black text-white text-xs font-semibold tracking-wider uppercase shadow-xl"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime"></span>
            </span>
            <span>AVAILABLE FOR PROJECTS</span>
            <span className="text-white/40">|</span>
            <span className="text-lime flex items-center gap-1.5">
              <Film className="w-3 h-3" /> Q4 BOOKINGS OPEN
            </span>
          </motion.div>
        </div>

        {/* Massive Headline */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.88] uppercase text-black"
          >
            EDIT LIKE MAGIC.
            <br />
            <span className="relative inline-block">
              EVERY FRAME MATTERS.
              <span className="absolute -bottom-2 left-0 right-0 h-2 bg-black/10 rounded-full hidden sm:block -z-10" />
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-neutral-900 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            Transforming raw footage into cinematic experiences through creative editing,
            dynamic storytelling, and visual excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="#work"
              className="group inline-flex items-center gap-3 bg-black text-white hover:bg-neutral-900 font-condensed tracking-wider text-base sm:text-lg px-8 py-4 rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-[1.02]"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowUpRight className="w-5 h-5 text-lime transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>

            <Link
              href="#contact"
              className="group inline-flex items-center gap-3 bg-white/40 hover:bg-white text-black font-condensed tracking-wider text-base sm:text-lg px-8 py-4 rounded-full transition-all duration-200 border border-black/20 hover:border-black shadow-md"
            >
              <span>LET&apos;S WORK TOGETHER</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>

        {/* Video Editing Workspace Composition */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-14 sm:mt-20 relative max-w-6xl mx-auto"
        >
          {/* Floating Thumbnail Left */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [-4, -2, -4] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 sm:-left-12 top-12 z-20 w-32 sm:w-48 bg-[#1D1E22] p-2 rounded-xl shadow-2xl border border-white/20 hidden md:block"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=400&q=80"
                alt="B-Roll Action Clip"
                fill
                className="object-cover"
              />
              <span className="absolute top-1.5 left-1.5 bg-lime text-black text-[9px] font-bold px-1.5 py-0.5 rounded">
                REEL 01
              </span>
            </div>
            <div className="mt-1.5 flex justify-between items-center text-[10px] text-neutral-300 font-mono">
              <span>00:14:08</span>
              <span className="text-lime">4K 60FPS</span>
            </div>
          </motion.div>

          {/* Floating Thumbnail Right */}
          <motion.div
            animate={{ y: [0, 12, 0], rotate: [5, 3, 5] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-4 sm:-right-12 top-20 z-20 w-36 sm:w-52 bg-[#1D1E22] p-2 rounded-xl shadow-2xl border border-white/20 hidden md:block"
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=400&q=80"
                alt="Color Grading Node"
                fill
                className="object-cover"
              />
              <span className="absolute top-1.5 right-1.5 bg-black/80 backdrop-blur text-lime text-[9px] font-mono px-1.5 py-0.5 rounded border border-lime/30">
                LUT: REC709
              </span>
            </div>
            <div className="mt-1.5 flex justify-between items-center text-[10px] text-neutral-300 font-mono">
              <span>CINEMATIC_GRADE.cube</span>
              <span className="text-lime">10-BIT</span>
            </div>
          </motion.div>

          {/* Main Editing Suite Mockup Window */}
          <div className="bg-[#18191D] rounded-2xl sm:rounded-3xl border border-black/30 shadow-[0_25px_60px_rgba(0,0,0,0.5)] overflow-hidden">
            {/* Top Toolbar */}
            <div className="bg-[#121316] px-4 py-3 flex items-center justify-between border-b border-white/10 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                <span className="ml-4 text-neutral-400 font-mono hidden sm:inline-block">
                  FAHIMA_MASTER_PROJECT_V4.prproj
                </span>
              </div>

              <div className="flex items-center gap-4 text-neutral-400">
                <span className="px-2 py-0.5 rounded bg-lime/10 text-lime font-mono text-[11px] font-semibold border border-lime/20">
                  SEQUENCE 01
                </span>
                <span className="font-mono text-white text-[11px] hidden sm:inline">
                  00:02:44:18 / 00:03:42:00
                </span>
              </div>

              <div className="flex items-center gap-3 text-neutral-400">
                <Scissors className="w-3.5 h-3.5 hover:text-lime cursor-pointer transition-colors" />
                <Layers className="w-3.5 h-3.5 hover:text-lime cursor-pointer transition-colors" />
                <Sliders className="w-3.5 h-3.5 hover:text-lime cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Editor Workspace Center Area */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-[#16171B]">
              {/* Media Browser / Inspector Sidebar (Left) */}
              <div className="hidden lg:block lg:col-span-3 border-r border-white/10 p-3 bg-[#131417]">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 mb-3 flex items-center justify-between">
                  <span>BIN: RAW_FOOTAGE</span>
                  <span className="text-lime text-[10px]">8 CLIPS</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { title: "DRONE_01", time: "00:12", img: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=200&q=80" },
                    { title: "MOTOCROSS", time: "00:08", img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=200&q=80" },
                    { title: "ACTION_CAM", time: "00:24", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=200&q=80" },
                    { title: "CLOSEUP", time: "00:19", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=200&q=80" },
                  ].map((clip, i) => (
                    <div
                      key={i}
                      className="group relative rounded-md overflow-hidden bg-black/40 border border-white/10 hover:border-lime transition-all cursor-pointer"
                    >
                      <div className="relative aspect-video">
                        <Image src={clip.img} alt={clip.title} fill className="object-cover" />
                        <span className="absolute bottom-1 right-1 bg-black/80 text-[8px] font-mono text-neutral-300 px-1 rounded">
                          {clip.time}
                        </span>
                      </div>
                      <p className="text-[10px] font-mono text-neutral-300 p-1 truncate">
                        {clip.title}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Audio Master Levels */}
                <div className="mt-4 pt-3 border-t border-white/10">
                  <div className="flex items-center justify-between text-[10px] text-neutral-400 font-mono mb-1.5">
                    <span>AUDIO METERS</span>
                    <span className="text-lime">-6.2 dB</span>
                  </div>
                  <div className="flex gap-1 h-3 bg-black/60 rounded p-0.5">
                    <div className="h-full bg-gradient-to-r from-lime to-yellow-400 rounded-sm w-[78%]" />
                  </div>
                </div>
              </div>

              {/* Main Video Preview Player (Center) */}
              <div className="lg:col-span-6 relative bg-black flex flex-col items-center justify-center p-2 sm:p-4">
                <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden group shadow-2xl border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80"
                    alt="Main Motocross Cinematic Preview"
                    fill
                    priority
                    className="object-cover"
                  />

                  {/* Cinematic Letterbox effect */}
                  <div className="absolute inset-x-0 top-0 h-6 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />

                  {/* 4K UHD Tag */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-mono text-white flex items-center gap-1.5 border border-white/10">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                    <span>REC: 3840x2160 UHD</span>
                  </div>

                  {/* Play / Pause Interactive Overlay */}
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="absolute inset-0 m-auto w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-lime text-black flex items-center justify-center shadow-[0_0_30px_rgba(183,255,0,0.6)] hover:scale-110 active:scale-95 transition-transform"
                    aria-label={isPlaying ? "Pause video preview" : "Play video preview"}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 fill-current" />
                    ) : (
                      <Play className="w-6 h-6 fill-current ml-1" />
                    )}
                  </button>

                  {/* Timecode Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur px-2.5 py-1 rounded text-xs font-mono text-lime border border-lime/30">
                    00:01:28:12
                  </div>
                </div>

                {/* Player Bottom Control Bar */}
                <div className="w-full mt-2 px-2 flex items-center justify-between text-neutral-400 text-xs">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="hover:text-lime transition-colors"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <Volume2 className="w-4 h-4 hover:text-white cursor-pointer" />
                    <span className="font-mono text-[11px] text-neutral-300">100%</span>
                  </div>

                  <span className="font-mono text-[11px] text-lime font-semibold">
                    PLAYBACK SPEED: 1.0x
                  </span>

                  <Maximize2 className="w-4 h-4 hover:text-white cursor-pointer" />
                </div>
              </div>

              {/* Lumetri Color / Inspector Panel (Right) */}
              <div className="hidden lg:block lg:col-span-3 border-l border-white/10 p-3 bg-[#131417]">
                <div className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 mb-2 flex items-center justify-between">
                  <span>COLOR WHEELS</span>
                  <span className="text-lime text-[10px]">ACTIVE</span>
                </div>

                {/* Color Wheels Mockup */}
                <div className="space-y-3 pt-1">
                  <div>
                    <div className="flex justify-between text-[10px] text-neutral-400 font-mono mb-1">
                      <span>TEMPERATURE</span>
                      <span className="text-lime">+12</span>
                    </div>
                    <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 via-white to-amber-500 w-[65%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] text-neutral-400 font-mono mb-1">
                      <span>TINT</span>
                      <span className="text-lime">-4</span>
                    </div>
                    <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 via-white to-magenta-500 w-[45%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] text-neutral-400 font-mono mb-1">
                      <span>SATURATION</span>
                      <span className="text-lime">125%</span>
                    </div>
                    <div className="h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                      <div className="h-full bg-lime w-[75%]" />
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/10">
                    <span className="text-[10px] text-neutral-400 uppercase font-mono block mb-1.5">
                      ACTIVE FILTERS
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="text-[9px] bg-lime/20 text-lime px-2 py-0.5 rounded font-mono">
                        Sharpen +20
                      </span>
                      <span className="text-[9px] bg-white/10 text-neutral-300 px-2 py-0.5 rounded font-mono">
                        Halation
                      </span>
                      <span className="text-[9px] bg-white/10 text-neutral-300 px-2 py-0.5 rounded font-mono">
                        Grain 35mm
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Editing Multi-Track Timeline (Bottom) */}
            <div className="bg-[#121316] border-t border-white/10 p-3">
              {/* Timeline Header with Timecode Ruler */}
              <div className="relative h-6 border-b border-white/10 mb-2 flex items-center justify-between text-[10px] font-mono text-neutral-400 px-2">
                <span>00:00:00</span>
                <span>00:01:00</span>
                <span className="text-lime font-bold">00:02:00</span>
                <span>00:03:00</span>
                <span>00:04:00</span>

                {/* Moving Animated Playhead */}
                <motion.div
                  animate={{ left: ["10%", "85%", "10%"] }}
                  transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                  className="absolute top-0 bottom-0 w-[2px] bg-lime pointer-events-none z-30"
                >
                  <div className="w-2.5 h-2.5 bg-lime transform -translate-x-[4px] rotate-45" />
                </motion.div>
              </div>

              {/* Multi Tracks */}
              <div className="space-y-1.5 font-mono text-[10px]">
                {/* Video Track 2 (Overlays / Titles) */}
                <div className="flex items-center gap-2">
                  <span className="w-8 text-neutral-400 font-bold">V2</span>
                  <div className="flex-1 h-7 bg-black/40 rounded flex items-center p-1 gap-2 relative overflow-hidden">
                    <div className="w-[18%] h-full bg-purple-600/80 border border-purple-400 rounded px-2 flex items-center text-white truncate text-[9px]">
                      Lower_Third_01
                    </div>
                    <div className="w-[28%] h-full bg-purple-600/80 border border-purple-400 rounded px-2 flex items-center text-white truncate text-[9px]">
                      Kinetic_Title_Intro
                    </div>
                    <div className="w-[22%] h-full bg-purple-600/80 border border-purple-400 rounded px-2 flex items-center text-white truncate text-[9px]">
                      SFX_Transition
                    </div>
                  </div>
                </div>

                {/* Video Track 1 (Main Footage) */}
                <div className="flex items-center gap-2">
                  <span className="w-8 text-lime font-bold">V1</span>
                  <div className="flex-1 h-8 bg-black/40 rounded flex items-center p-1 gap-1.5 relative overflow-hidden">
                    <div className="w-[30%] h-full bg-blue-600/90 border border-blue-400 rounded px-2 flex items-center text-white truncate text-[9px] font-semibold">
                      Drone_Intro_4K.mov
                    </div>
                    <div className="w-[25%] h-full bg-lime text-black font-bold border border-lime-light rounded px-2 flex items-center truncate text-[9px]">
                      Motocross_Jump.mp4 [CUT]
                    </div>
                    <div className="w-[20%] h-full bg-blue-600/90 border border-blue-400 rounded px-2 flex items-center text-white truncate text-[9px]">
                      CloseUp_Helmet.braw
                    </div>
                    <div className="w-[22%] h-full bg-blue-700/90 border border-blue-400 rounded px-2 flex items-center text-white truncate text-[9px]">
                      Outro_Sunset.mov
                    </div>
                  </div>
                </div>

                {/* Audio Track 1 (Dialog / FX) */}
                <div className="flex items-center gap-2">
                  <span className="w-8 text-neutral-400 font-bold">A1</span>
                  <div className="flex-1 h-6 bg-black/40 rounded flex items-center p-1 gap-2 relative overflow-hidden">
                    <div className="w-[45%] h-full bg-emerald-700/80 border border-emerald-500 rounded px-2 flex items-center text-emerald-100 text-[8px] truncate">
                      Voiceover_Master_Normalized.wav
                    </div>
                    <div className="w-[35%] h-full bg-emerald-700/80 border border-emerald-500 rounded px-2 flex items-center text-emerald-100 text-[8px] truncate">
                      Ambient_Engine_Roar.wav
                    </div>
                  </div>
                </div>

                {/* Audio Track 2 (Soundtrack / Music) */}
                <div className="flex items-center gap-2">
                  <span className="w-8 text-lime font-bold">A2</span>
                  <div className="flex-1 h-6 bg-black/40 rounded flex items-center p-1 relative overflow-hidden">
                    <div className="w-[90%] h-full bg-teal-800/80 border border-teal-400 rounded px-2 flex items-center text-teal-100 text-[8px] truncate">
                      Cinematic_Bass_Drop_Licensed.mp3 [BEAT SYNCED]
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="mt-12 flex flex-col items-center justify-center text-black/70">
        <span className="text-[11px] font-mono uppercase tracking-widest font-semibold mb-1">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-4 h-7 rounded-full border-2 border-black/60 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-black" />
        </motion.div>
      </div>
    </section>
  );
}
