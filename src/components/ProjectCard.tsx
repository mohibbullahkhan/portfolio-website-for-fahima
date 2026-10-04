"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Play, ArrowUpRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
  index: number;
}

export default function ProjectCard({ project, onSelect, index }: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video auto-plays reliably
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Fallback for strict browser autoplay policies
      });
    }
  }, [project.previewVideo]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="col-span-1 group relative bg-[#25262B] rounded-2xl sm:rounded-3xl border border-white/10 hover:border-lime/60 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
    >
      {/* Top Media Preview Area - Auto-running Video */}
      <div
        onClick={() => onSelect(project)}
        className="relative w-full aspect-[16/10] overflow-hidden cursor-pointer bg-black"
      >
        {project.previewVideo ? (
          <video
            ref={videoRef}
            src={project.previewVideo}
            poster={project.thumbnail}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
        )}

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#25262B] via-transparent to-black/50 opacity-75 group-hover:opacity-50 transition-opacity pointer-events-none" />

        {/* Category & Duration Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider bg-black/85 backdrop-blur-md text-lime border border-lime/30 shadow-md">
            {project.category}
          </span>

          {project.duration && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-neutral-200 bg-black/85 backdrop-blur-md flex items-center gap-1.5 border border-white/10 shadow-md">
              <Clock className="w-3 h-3 text-lime" />
              <span>{project.duration}</span>
            </span>
          )}
        </div>

        {/* Central Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-lime text-black flex items-center justify-center shadow-[0_0_30px_rgba(183,255,0,0.6)] transform scale-90 group-hover:scale-110 transition-all duration-300">
            <Play className="w-6 h-6 fill-current ml-0.5" />
          </div>
        </div>

        {/* Bottom Timecode Simulation */}
        <div className="absolute bottom-3 left-4 text-[10px] font-mono text-neutral-400 group-hover:text-white transition-colors pointer-events-none">
          <span>TIMECODE // 00:0{index + 1}:24:12</span>
        </div>
      </div>

      {/* Card Content & Meta */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3
              onClick={() => onSelect(project)}
              className="font-condensed text-2xl sm:text-3xl font-bold uppercase tracking-wide text-white group-hover:text-lime transition-colors cursor-pointer"
            >
              {project.title}
            </h3>

            {project.year && (
              <span className="text-xs font-mono text-neutral-400 pt-1 shrink-0">
                [{project.year}]
              </span>
            )}
          </div>

          <p className="mt-2.5 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Bottom Action Footer */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.softwareUsed?.slice(0, 2).map((software, i) => (
              <span
                key={i}
                className="text-[10px] font-mono text-neutral-300 bg-white/5 px-2.5 py-1 rounded border border-white/5"
              >
                {software}
              </span>
            ))}
          </div>

          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-condensed tracking-widest font-bold uppercase text-lime hover:text-white transition-colors group-hover:translate-x-1 duration-200"
          >
            <span>WATCH FILM</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
