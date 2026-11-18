"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Calendar, ExternalLink } from "lucide-react";
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
    if (project.videoType === "youtube" || project.videoUrl.includes("youtu")) {
      const videoId = extractVideoId(project.videoUrl, "youtube");
      return (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
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
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&color=84CC16`}
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
          className="absolute inset-0 bg-[#090909]/85 backdrop-blur-md"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ scale: 0.96, opacity: 0, y: 15 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.96, opacity: 0, y: 15 }}
          transition={{ type: "spring", duration: 0.35, bounce: 0.1 }}
          className="relative w-full max-w-5xl bg-[#171717] border border-[#262626] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[92vh]"
        >
          {/* Top Bar with Title & Close Button */}
          <div className="flex items-center justify-between px-5 py-4 bg-[#1F1F1F] border-b border-[#2E2E2E]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16] animate-pulse" />
              <div className="flex flex-col">
                <span className="text-sm sm:text-base font-bold text-[#F8F8F5] leading-tight">
                  {project.title}
                </span>
                <span className="text-[10px] tracking-wider text-[#999999] uppercase">
                  {project.category} • 4K DCI MASTER
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#262626] hover:bg-[#333333] text-[#F8F8F5] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Video Container (16:9) */}
          <div className="relative aspect-video w-full bg-black overflow-hidden flex items-center justify-center">
            {renderPlayer()}
          </div>

          {/* Bottom Details Drawer */}
          <div className="p-5 sm:p-6 bg-[#171717] overflow-y-auto">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="max-w-2xl">
                <h4 className="text-sm font-semibold text-[#84CC16] uppercase tracking-wider mb-1">
                  Project Notes & Creative Direction
                </h4>
                <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                  {project.fullDescription || project.shortDescription || (project as any).description}
                </p>

                {(project.softwareUsed || (project as any).tags) && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {(project.softwareUsed || (project as any).tags).map((tag: string, idx: number) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[11px] font-medium text-[#CCCCCC] bg-[#222222] rounded-md border border-[#333333]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Meta stats */}
              <div className="flex flex-wrap md:flex-col gap-3 text-xs text-[#999999] border-t md:border-t-0 md:border-l border-[#262626] pt-3 md:pt-0 md:pl-6 shrink-0">
                {project.duration && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#84CC16]" />
                    <span>Duration: {project.duration}</span>
                  </div>
                )}
                {project.year && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#84CC16]" />
                    <span>Year: {project.year}</span>
                  </div>
                )}
                {project.client && (
                  <div className="text-white/80">
                    <span className="text-[#777777]">Client:</span> {project.client}
                  </div>
                )}
                {(project.videoUrl || (project as any).youtubeUrl) && (
                  <a
                    href={project.videoUrl || (project as any).youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#84CC16] hover:underline pt-1"
                  >
                    <span>View on Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
