"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Sparkles,
  Sliders,
  Film,
  Layers,
  ArrowRight,
  CheckCircle2,
  Eye,
  TrendingUp,
  Scissors,
  Wand2,
  Clock,
  Zap,
} from "lucide-react";

// Real playable showcase clips across different editing disciplines
const showcaseClips = [
  {
    id: "commercial",
    title: "High-Octane Commercial",
    category: "Commercial Ad",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sports-car-drifting-on-a-road-42797-large.mp4",
    poster: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    specs: "4K UHD • 60 FPS • ProRes 422 HQ",
    pacingTag: "Speed Ramps + Bass Hits",
    retention: "82% Avg Watch",
    timecode: "00:00:45:12",
  },
  {
    id: "reel",
    title: "Viral Kinetic Short",
    category: "Reels & Shorts",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-neon-lights-42907-large.mp4",
    poster: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    specs: "1080×1920 (9:16) • 60 FPS",
    pacingTag: "Dynamic 3s Hook + SFX",
    retention: "89% Retention",
    timecode: "00:00:30:00",
  },
  {
    id: "cinematic",
    title: "Cinematic Narrative Film",
    category: "Storytelling",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-camera-operator-filming-an-actor-41589-large.mp4",
    poster: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    specs: "DCI 4K • 24 FPS • 12-Bit LOG",
    pacingTag: "Emotional Cadence",
    retention: "74% Watch Time",
    timecode: "00:03:42:18",
  },
  {
    id: "sound",
    title: "Sound Design & Color Grade",
    category: "Post-Production",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-working-on-a-sound-mixing-board-43093-large.mp4",
    poster: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
    specs: "-14 LUFS • EBU R128 Master",
    pacingTag: "Spatial Foley Layering",
    retention: "Broadcast Ready",
    timecode: "00:01:15:00",
  },
];

export default function Hero() {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isGraded, setIsGraded] = useState(true); // Toggle between Master Film Grade vs Flat Log profile
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeClip = showcaseClips[activeClipIndex];

  // Auto-play when clip changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [activeClipIndex]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 1);
    }
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    const frames = Math.floor((seconds % 1) * 24);
    return `00:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}:${String(frames).padStart(2, "0")}`;
  };

  return (
    <section
      id="home"
      className="relative bg-[#060714] text-white pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden select-none"
    >
      {/* Background Multi-Layered Cosmic Depth */}
      <div className="absolute inset-0 pointer-events-none stars-overlay opacity-50" />

      {/* Ambient Nebula Radial Light Arcs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] sm:w-[1000px] h-[550px] bg-violet-600/20 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-indigo-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Headline & Pitch Section */}
        <div className="text-center max-w-4xl mx-auto relative">
          
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs font-medium backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(139,92,246,0.25)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span>FAHIMA • SENIOR VIDEO EDITOR &amp; STORYTELLER</span>
            <span className="text-violet-400/50">•</span>
            <span className="text-emerald-400 font-mono text-[11px]">OPEN FOR COMMISSIONS</span>
          </motion.div>

          {/* Luxury Main Headline: Authentic, Human Craftsmanship */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.06]"
          >
            Turning Raw Footage into <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent purple-text-glow">
              Cinematic Stories That Convert.
            </span>
          </motion.h1>

          {/* Authentic Positioning Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed"
          >
            I craft high-retention commercial films, viral social shorts, and narrative cuts for creators
            and brands — combining frame-accurate pacing, 12-bit DaVinci color grading, and broadcast sound design.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
          >
            <button
              onClick={() => {
                // Focus on video player
                const el = document.getElementById("hero-player-suite");
                el?.scrollIntoView({ behavior: "smooth" });
                if (!isPlaying) togglePlay();
              }}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-medium text-sm sm:text-base bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_30px_rgba(139,92,246,0.55)] hover:shadow-[0_0_40px_rgba(139,92,246,0.75)] transition-all duration-300 hover:scale-[1.02]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Watch 2026 Showreel</span>
            </button>

            <Link
              href="#calculator"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-medium text-sm sm:text-base bg-white/[0.08] hover:bg-white/[0.14] border border-violet-500/30 hover:border-violet-500/60 backdrop-blur-md transition-all duration-300"
            >
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Calculate Project Cost</span>
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-slate-300 hover:text-white font-medium text-sm sm:text-base bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 backdrop-blur-md transition-all duration-300"
            >
              <span>Book Discovery Call</span>
            </Link>
          </motion.div>

          {/* Trust / Proof Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-300 font-mono"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
                  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=80&q=80",
                ].map((avatar, i) => (
                  <div key={i} className="relative w-5 h-5 rounded-full overflow-hidden border border-violet-500/40">
                    <Image src={avatar} alt="Client" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <span className="text-violet-300">★★★★★ 5.0 (40+ Client Reviews)</span>
            </div>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-slate-300">15M+ Total Organic Views</span>
            <span className="hidden sm:inline text-slate-600">•</span>
            <span className="text-emerald-400">48h Delivery Turnaround</span>
          </motion.div>

        </div>

        {/* The Masterpiece Centerpiece: Professional Cinematic NLE Editing Suite */}
        <motion.div
          id="hero-player-suite"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative max-w-6xl mx-auto mt-12 sm:mt-18"
        >
          {/* Ambient Lighting Frame Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-violet-600/30 via-fuchsia-600/20 to-indigo-600/30 rounded-3xl blur-2xl opacity-70 -z-10" />

          {/* Main Editing Window Container */}
          <div className="bg-[#0b0c24]/90 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-white/[0.12] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)]">
            
            {/* Top NLE Window Titlebar */}
            <div className="bg-[#08091a] px-4 py-3 flex flex-wrap items-center justify-between border-b border-white/[0.08] text-xs font-mono gap-2">
              
              {/* macOS Dots + Project Filename */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 pl-3 border-l border-white/[0.08] text-slate-300">
                  <Film className="w-3.5 h-3.5 text-violet-400" />
                  <span className="font-semibold text-white">FAHIMA_MASTER_SUITE_2026.prproj</span>
                  <span className="text-[10px] text-slate-500 hidden md:inline">| Rec.709 12-Bit Master</span>
                </div>
              </div>

              {/* Clip Category Switcher Tabs */}
              <div className="flex items-center gap-1 bg-[#121332] p-1 rounded-xl border border-white/[0.08] overflow-x-auto no-scrollbar">
                {showcaseClips.map((clip, idx) => {
                  const isActive = activeClipIndex === idx;
                  return (
                    <button
                      key={clip.id}
                      onClick={() => setActiveClipIndex(idx)}
                      className={`px-3 py-1 rounded-lg text-[11px] font-mono whitespace-nowrap transition-all ${
                        isActive
                          ? "bg-violet-600 text-white font-bold shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {clip.category}
                    </button>
                  );
                })}
              </div>

              {/* Right Export / Specs Badge */}
              <div className="hidden sm:flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-300 text-[10px]">
                  ● LIVE PLAYBACK
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/10 text-slate-300 text-[10px]">
                  4K PRORES
                </span>
              </div>
            </div>

            {/* Main Workbench Grid (Left: Inspector / Specs | Right: Real Video Player) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#090a1f]">
              
              {/* Left Column: Post-Production Inspector & Technical Mastery */}
              <div className="lg:col-span-4 p-4 sm:p-5 bg-[#0b0c24] border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between text-xs font-mono">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
                    <span className="text-[11px] font-bold text-violet-300 uppercase tracking-wider flex items-center gap-1.5">
                      <Scissors className="w-3.5 h-3.5 text-violet-400" />
                      TIMELINE METRICS
                    </span>
                    <span className="text-[10px] text-violet-400 bg-violet-950/60 px-2 py-0.5 rounded-full border border-violet-500/30">
                      {activeClip.specs}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                    {activeClip.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-4 leading-relaxed font-normal">
                    Pacing rhythm tailored for maximum retention, bass-driven audio sync, and commercial chromatic separation.
                  </p>

                  {/* Interactive DaVinci Grade Switcher (Before / After live filter) */}
                  <div className="p-3.5 rounded-2xl bg-[#0f1032] border border-violet-500/25 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold text-slate-200 flex items-center gap-1.5">
                        <Sliders className="w-3.5 h-3.5 text-violet-400" />
                        COLOR GRADE STATUS
                      </span>
                      <button
                        onClick={() => setIsGraded(!isGraded)}
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider transition-all ${
                          isGraded
                            ? "bg-violet-600 text-white shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                            : "bg-neutral-800 text-slate-300 border border-white/20"
                        }`}
                      >
                        {isGraded ? "FILM LUT [ON]" : "FLAT LOG [OFF]"}
                      </button>
                    </div>
                    <p className="text-[10px] text-slate-400 leading-tight">
                      {isGraded
                        ? "✓ Showing customized 12-bit DaVinci Rec.709 film print LUT grade."
                        : "○ Showing camera flat S-Log3 profile without contrast or color curve."}
                    </p>
                  </div>

                  {/* Editorial Craft Badges */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-[11px] text-slate-400">Pacing Technique:</span>
                      <span className="text-[11px] font-bold text-violet-300">{activeClip.pacingTag}</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-[11px] text-slate-400">Audience Retention:</span>
                      <span className="text-[11px] font-bold text-emerald-400 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {activeClip.retention}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                      <span className="text-[11px] text-slate-400">Loudness Target:</span>
                      <span className="text-[11px] font-bold text-slate-200">-14.0 LUFS Normalized</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Real-Time Audio Waveform Simulation */}
                <div className="pt-4 mt-4 border-t border-white/[0.08]">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Volume2 className="w-3 h-3 text-violet-400" />
                      MASTER AUDIO OUTPUT
                    </span>
                    <span className="text-violet-400">STEREO -3 dB PEAK</span>
                  </div>
                  {/* Wave bars */}
                  <div className="flex items-end gap-1 h-5 bg-black/40 rounded-lg p-1 overflow-hidden">
                    {[6, 12, 16, 10, 18, 14, 8, 16, 20, 12, 8, 14, 18, 16, 10, 14, 20, 12, 8, 16].map((h, i) => (
                      <span
                        key={i}
                        style={{ height: `${isPlaying ? (h * ((i % 3) + 1)) / 3 : 4}px` }}
                        className="flex-1 bg-gradient-to-t from-violet-600 to-fuchsia-400 rounded-full transition-all duration-150"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: High-Definition Video Player Viewport */}
              <div className="lg:col-span-8 p-3 sm:p-5 flex flex-col justify-between bg-black relative">
                
                {/* Main Video Screen Container */}
                <div
                  className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/[0.08] group cursor-pointer"
                  onClick={togglePlay}
                >
                  <video
                    ref={videoRef}
                    src={activeClip.videoUrl}
                    poster={activeClip.poster}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      isGraded
                        ? "filter contrast-105 saturate-110"
                        : "filter contrast-75 brightness-95 saturate-40"
                    }`}
                  />

                  {/* Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

                  {/* Top Live Badges on Video */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/75 backdrop-blur-md text-violet-300 border border-violet-500/30">
                      {isGraded ? "MASTER COLOR GRADE: ACTIVE" : "LOG PROFILE: UNGRADED"}
                    </span>

                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-slate-300 bg-black/75 backdrop-blur-md border border-white/10">
                      {activeClip.category}
                    </span>
                  </div>

                  {/* Play / Pause Central Icon on Hover or Pause */}
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${
                      isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-violet-600/90 text-white flex items-center justify-center shadow-[0_0_35px_rgba(139,92,246,0.8)] backdrop-blur-md hover:scale-110 transition-transform">
                      {isPlaying ? (
                        <Pause className="w-6 h-6 fill-current" />
                      ) : (
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      )}
                    </div>
                  </div>

                  {/* Floating Micro-Notification Badge (Proof of Performance) */}
                  <div className="absolute bottom-4 left-4 z-10 hidden sm:block pointer-events-none">
                    <div className="px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 text-[10px] font-mono text-slate-200 flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
                      <span>{activeClip.pacingTag}</span>
                    </div>
                  </div>

                  {/* Volume Toggle Icon inside Player */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute();
                    }}
                    className="absolute bottom-4 right-4 z-10 p-2 rounded-full bg-black/75 hover:bg-violet-600 backdrop-blur-md text-white border border-white/15 transition-colors"
                    aria-label="Toggle mute"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Sub-Player Timeline Scrubber Bar */}
                <div className="mt-3 px-1">
                  {/* Interactive Scrub Bar */}
                  <div
                    onClick={handleScrub}
                    className="relative w-full h-2 bg-white/15 hover:h-2.5 rounded-full overflow-hidden cursor-pointer transition-all mb-2"
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                      style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                    />
                  </div>

                  {/* Timecode & Player Controls Info */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={togglePlay}
                        className="text-white hover:text-violet-400 transition-colors"
                      >
                        {isPlaying ? "PAUSE [SPACE]" : "PLAY [SPACE]"}
                      </button>
                      <span className="text-violet-300 font-bold">
                        {formatTime(currentTime)}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-slate-500 hidden sm:inline">
                        CLICK TIMELINE TO JUMP
                      </span>
                      <button
                        onClick={toggleMute}
                        className="text-slate-300 hover:text-white transition-colors"
                      >
                        {isMuted ? "UNMUTE AUDIO" : "MUTED"}
                      </button>
                    </div>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Multi-Track Filmstrip Lanes (Pro NLE Timeline Feel from Screenshot) */}
            <div className="bg-[#070817] border-t border-white/[0.08] p-3 sm:p-4 text-[10px] font-mono">
              <div className="flex items-center justify-between text-slate-400 mb-2 px-1">
                <span className="text-violet-400 font-bold flex items-center gap-1.5">
                  <Film className="w-3 h-3" />
                  TIMELINE SEQUENCER: 01:02:36:12
                </span>
                <span className="hidden sm:inline text-slate-500">4 TRACKS ACTIVE • 0 FRAMES DROPPED</span>
                <span className="text-slate-300">ZOOM: 100%</span>
              </div>

              {/* 3 Filmstrip Tracks */}
              <div className="space-y-1.5">
                {/* Track Video 1 */}
                <div className="flex items-center gap-2">
                  <span className="w-12 text-slate-400 shrink-0">V1 4K</span>
                  <div className="flex-1 h-6 bg-black/60 rounded flex items-center gap-1 p-0.5 overflow-hidden">
                    <div className="w-[32%] h-full bg-violet-950/70 border border-violet-500/50 rounded px-1.5 flex items-center text-violet-200 truncate">
                      Hook_Intro.mov
                    </div>
                    <div className="w-[38%] h-full bg-violet-600/90 text-white font-bold border border-violet-400 rounded px-1.5 flex items-center truncate shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                      {activeClip.title} [CUT]
                    </div>
                    <div className="w-[30%] h-full bg-indigo-950/70 border border-indigo-500/50 rounded px-1.5 flex items-center text-indigo-200 truncate">
                      Outro_CallToAction.mov
                    </div>
                  </div>
                </div>

                {/* Track Video 2 (Captions & Motion VFX) */}
                <div className="flex items-center gap-2">
                  <span className="w-12 text-slate-400 shrink-0">V2 VFX</span>
                  <div className="flex-1 h-5 bg-black/60 rounded flex items-center gap-1 p-0.5 overflow-hidden">
                    <div className="w-[45%] h-full bg-fuchsia-950/60 border border-fuchsia-500/40 rounded px-1.5 flex items-center text-fuchsia-300 truncate">
                      Dynamic_Kinetic_Captions_4K
                    </div>
                    <div className="w-[25%] h-full bg-purple-950/60 border border-purple-500/40 rounded px-1.5 flex items-center text-purple-300 truncate">
                      Lower_Third_Motion
                    </div>
                  </div>
                </div>

                {/* Track Audio 1 */}
                <div className="flex items-center gap-2">
                  <span className="w-12 text-violet-400 shrink-0">A1 SFX</span>
                  <div className="flex-1 h-5 bg-black/60 rounded flex items-center px-2 overflow-hidden">
                    <div className="w-[92%] h-full bg-emerald-950/80 border border-emerald-500/50 rounded px-1.5 flex items-center text-emerald-300 truncate">
                      ||||||/\/\/\/\/\/||||||/|||||| Spatial_Foley_BeatDrop_Master.wav
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
