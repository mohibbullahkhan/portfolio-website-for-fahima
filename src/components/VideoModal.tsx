"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Clock, Calendar, ExternalLink, Sparkles } from "lucide-react";
import { Project } from "@/types";
import { extractVideoId } from "@/lib/utils";

interface VideoModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function VideoModal({ project, onClose }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const renderPlayer = () => {
    if (project.videoType === "youtube") {
      const videoId = extractVideoId(project.videoUrl, "youtube");
      return (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
          title={project.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      );
    }

    if (project.videoType === "vimeo") {
      const videoId = extractVideoId(project.videoUrl, "vimeo");
      return (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&color=8b5cf6`}
          title={project.title}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        />
      );
    }

    return (
      <video
        src={project.videoUrl}
        controls
        autoPlay
        playsInline
        className="w-full h-full object-contain bg-black"
      >
        Your browser does not support the video tag.
      </video>
    );
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#060714]/90 backdrop-blur-xl"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
          className="relative w-full max-w-5xl bg-[#0b0c24] border border-violet-500/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(139,92,246,0.3)] z-10 flex flex-col max-h-[92vh]"
        >
          {/* Top Bar with Title & Close Button */}
          <div className="flex items-center justify-between px-5 py-4 bg-[#0e0f2d] border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              <div>
                <h3 className="text-base sm:text-lg font-bold tracking-wide text-white uppercase">
                  {project.title}
                </h3>
                <span className="text-[11px] font-mono text-violet-300">
                  {project.category} • {project.duration || "01:30"}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-violet-600 hover:text-white text-slate-300 transition-colors focus:outline-none"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Video Player Container */}
          <div className="relative w-full aspect-video bg-black overflow-hidden flex items-center justify-center">
            {renderPlayer()}
          </div>

          {/* Project Details Footer */}
          <div className="p-5 sm:p-6 bg-[#0b0c24] overflow-y-auto">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex-1">
                <span className="inline-block px-3 py-0.5 rounded-full text-[10px] font-mono bg-violet-950/60 text-violet-300 border border-violet-500/30 uppercase mb-2">
                  {project.category}
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.fullDescription || project.shortDescription}
                </p>
              </div>

              {/* Meta Chips */}
              <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-xs font-mono text-slate-400 min-w-[200px]">
                {project.year && (
                  <span className="flex items-center gap-1.5 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08]">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>YEAR: {project.year}</span>
                  </span>
                )}
                {project.duration && (
                  <span className="flex items-center gap-1.5 bg-white/[0.04] px-3 py-1 rounded-full border border-white/[0.08]">
                    <Clock className="w-3.5 h-3.5 text-violet-400" />
                    <span>RUNTIME: {project.duration}</span>
                  </span>
                )}
                {project.softwareUsed && (
                  <div className="flex flex-wrap gap-1 mt-1 justify-end">
                    {project.softwareUsed.map((tool, i) => (
                      <span
                        key={i}
                        className="text-[9px] bg-white/[0.04] text-slate-300 px-2.5 py-0.5 rounded-full border border-white/[0.08]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
