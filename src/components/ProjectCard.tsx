"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Play, ArrowUpRight, Clock, Sparkles } from "lucide-react";
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
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [project.previewVideo]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="col-span-1 group relative bg-[#0c0d24]/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-white/[0.08] hover:border-violet-500/50 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_0_35px_rgba(139,92,246,0.2)]"
    >
      {/* Top Media Preview Area */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d24] via-transparent to-black/50 opacity-80 group-hover:opacity-60 transition-opacity pointer-events-none" />

        {/* Category & Duration Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[10px] font-mono font-medium uppercase tracking-wider bg-black/75 backdrop-blur-md text-violet-300 border border-violet-500/30 shadow-md">
            {project.category}
          </span>

          {project.duration && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-slate-300 bg-black/75 backdrop-blur-md flex items-center gap-1.5 border border-white/10 shadow-md">
              <Clock className="w-3 h-3 text-violet-400" />
              <span>{project.duration}</span>
            </span>
          )}
        </div>

        {/* Central Play Button Overlay with Purple Glow */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-violet-600 text-white flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.7)] transform scale-90 group-hover:scale-110 transition-all duration-300">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
        </div>

        {/* Bottom Timecode Simulation */}
        <div className="absolute bottom-3 left-4 text-[10px] font-mono text-slate-400 group-hover:text-violet-300 transition-colors pointer-events-none">
          <span>PROJECT // 0{index + 1} 4K UHD</span>
        </div>
      </div>

      {/* Card Content & Meta */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3">
            <h3
              onClick={() => onSelect(project)}
              className="text-lg sm:text-xl font-bold uppercase tracking-wide text-white group-hover:text-violet-300 transition-colors cursor-pointer"
            >
              {project.title}
            </h3>

            {project.year && (
              <span className="text-xs font-mono text-slate-500 pt-1 shrink-0">
                [{project.year}]
              </span>
            )}
          </div>

          <p className="mt-2 text-xs sm:text-sm text-slate-400 font-normal leading-relaxed line-clamp-2">
            {project.shortDescription}
          </p>
        </div>

        {/* Bottom Action Footer */}
        <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {project.softwareUsed?.slice(0, 2).map((software, i) => (
              <span
                key={i}
                className="text-[10px] font-mono text-slate-300 bg-white/[0.04] px-2.5 py-0.5 rounded-full border border-white/[0.06]"
              >
                {software}
              </span>
            ))}
          </div>

          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-wider text-violet-400 hover:text-white transition-colors group-hover:translate-x-1 duration-200"
          >
            <span>WATCH</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
