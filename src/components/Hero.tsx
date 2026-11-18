"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  ArrowUpRight,
  Maximize2,
  Sparkles,
} from "lucide-react";
import { ApiHero } from "@/lib/api";

const showreelClips = [
  {
    id: "commercial",
    title: "Commercial Film",
    specs: "4K DCI • 24 FPS • ProRes 422 HQ",
    timecode: "00:01:15:00",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sports-car-drifting-on-a-road-42797-large.mp4",
    poster: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80",
    label: "COMMERCIAL",
  },
  {
    id: "creator",
    title: "High-Retention Creator Video",
    specs: "4K 60FPS • Narrative Pacing",
    timecode: "00:08:42:12",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-camera-operator-filming-an-actor-41589-large.mp4",
    poster: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=1200&q=80",
    label: "YOUTUBE",
  },
  {
    id: "short-form",
    title: "Viral Short-Form Reels",
    specs: "9:16 Vertical • 60 FPS Kinetic",
    timecode: "00:00:30:00",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-dancing-under-neon-lights-42907-large.mp4",
    poster: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    label: "SHORTS / TIKTOK",
  },
];

interface HeroProps {
  hero?: ApiHero;
}

export default function Hero({ hero }: HeroProps) {
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showYoutubeEmbed, setShowYoutubeEmbed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeClip = showreelClips[activeClipIndex];

  // Dynamic headline with graceful default
  const headline =
    hero?.headline || "Your Vision. Beautifully Edited.";
  const subheadline =
    hero?.subheadline || "POST-PRODUCTION & CINEMATIC EDITING";
  const description =
    hero?.description ||
    "Crafting engaging videos that capture attention, tell compelling stories, and help ambitious creators and brands stand out with frame-accurate pacing and broadcast color grading.";

  const primaryBtnText = "Start a Project";
  const primaryBtnLink = "#contact";
  const secondaryBtnText = "Explore My Work";
  const secondaryBtnLink = "#work";
  const youtubeVideoId = hero?.showreelVideoId || "ScMzIvxBSi4";

  useEffect(() => {
    if (videoRef.current && !showYoutubeEmbed) {
      videoRef.current.currentTime = 0;
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [activeClipIndex, showYoutubeEmbed]);

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

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 editorial-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Header Block */}
        <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFFFFF] border border-[#E5E5DF] shadow-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
            <span className="text-[11px] font-semibold tracking-wider text-[#171717] uppercase">
              {subheadline}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#171717] leading-[1.08] mb-6"
          >
            {headline}
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-[#666666] leading-relaxed max-w-2xl mx-auto mb-8 font-normal"
          >
            {description}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href={primaryBtnLink}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#171717] text-[#F8F8F5] text-sm font-semibold tracking-tight hover:bg-black transition-all shadow-md group"
            >
              <span>{primaryBtnText}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href={secondaryBtnLink}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FFFFFF] text-[#171717] border border-[#E5E5DF] text-sm font-semibold tracking-tight hover:bg-[#F0F0EC] transition-all shadow-sm"
            >
              <span>{secondaryBtnText}</span>
            </Link>
          </motion.div>
        </div>

        {/* Cinematic Showreel Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Dark Luxury Film Frame */}
          <div className="relative rounded-2xl overflow-hidden bg-[#121212] border border-[#262626] shadow-cinematic">
            {/* Top Monitor Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#1A1A1A] border-b border-[#262626] text-xs text-[#999999]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <span className="font-mono text-[11px] text-[#CCCCCC] hidden sm:inline">
                  SHOWREEL // {activeClip.title.toUpperCase()}
                </span>
              </div>

              {/* Showreel Selector Tabs */}
              <div className="flex items-center gap-1.5">
                {showreelClips.map((clip, idx) => (
                  <button
                    key={clip.id}
                    onClick={() => {
                      setActiveClipIndex(idx);
                      setShowYoutubeEmbed(false);
                    }}
                    className={`px-2.5 py-1 rounded text-[10px] font-semibold tracking-wider transition-colors uppercase ${
                      activeClipIndex === idx && !showYoutubeEmbed
                        ? "bg-[#FFFFFF] text-[#121212]"
                        : "bg-[#262626] text-[#999999] hover:text-[#FFFFFF]"
                    }`}
                  >
                    {clip.label}
                  </button>
                ))}

                <button
                  onClick={() => setShowYoutubeEmbed(true)}
                  className={`px-2.5 py-1 rounded text-[10px] font-semibold tracking-wider transition-colors uppercase ${
                    showYoutubeEmbed
                      ? "bg-[#84CC16] text-[#121212]"
                      : "bg-[#262626] text-[#84CC16] hover:bg-[#333333]"
                  }`}
                >
                  FULL 4K CUT
                </button>
              </div>
            </div>

            {/* Video Stage (16:9) */}
            <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
              {showYoutubeEmbed ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                  title="Fahima Showreel"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <video
                    ref={videoRef}
                    src={activeClip.videoUrl}
                    poster={activeClip.poster}
                    playsInline
                    muted={isMuted}
                    loop
                    className="w-full h-full object-cover"
                  />

                  {/* Play / Pause Overlay Button */}
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors flex items-center justify-center group pointer-events-none">
                    <button
                      onClick={togglePlay}
                      className="pointer-events-auto p-4 sm:p-5 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#171717] shadow-xl transform group-hover:scale-110 transition-all"
                      aria-label={isPlaying ? "Pause preview" : "Play preview"}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                      ) : (
                        <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                      )}
                    </button>
                  </div>

                  {/* Video Stage Bottom Controls */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[11px] text-[#A3E635] font-semibold">
                        {activeClip.specs}
                      </span>
                      <span className="hidden sm:inline text-white/40">•</span>
                      <span className="hidden sm:inline text-white/70 text-[11px]">
                        DaVinci Resolve 19 Color Pipeline
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={toggleMute}
                        className="p-1 text-white/80 hover:text-white transition-colors"
                        aria-label={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => setShowYoutubeEmbed(true)}
                        className="flex items-center gap-1.5 text-[11px] font-semibold text-[#A3E635] hover:underline"
                      >
                        <span>Open 4K Player</span>
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Quick Studio Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
            <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E5E5DF] text-center shadow-sm">
              <p className="text-xl sm:text-2xl font-bold text-[#171717]">4K DCI</p>
              <p className="text-xs text-[#777777] mt-0.5">Master Output</p>
            </div>
            <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E5E5DF] text-center shadow-sm">
              <p className="text-xl sm:text-2xl font-bold text-[#171717]">48h - 72h</p>
              <p className="text-xs text-[#777777] mt-0.5">Turnaround Time</p>
            </div>
            <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E5E5DF] text-center shadow-sm">
              <p className="text-xl sm:text-2xl font-bold text-[#171717]">100%</p>
              <p className="text-xs text-[#777777] mt-0.5">Commercial Rights</p>
            </div>
            <div className="bg-[#FFFFFF] p-4 rounded-xl border border-[#E5E5DF] text-center shadow-sm">
              <p className="text-xl sm:text-2xl font-bold text-[#171717]">Pro Audio</p>
              <p className="text-xs text-[#777777] mt-0.5">-14 LUFS Mastering</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
