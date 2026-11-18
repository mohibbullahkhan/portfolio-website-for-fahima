"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Clock, ArrowUpRight } from "lucide-react";
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className="col-span-1 group relative bg-[#FFFFFF] rounded-2xl border border-[#E5E5DF] hover:border-[#171717]/40 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-editorial-hover"
    >
      {/* Thumbnail / Preview Area */}
      <div
        onClick={() => onSelect(project)}
        className="relative w-full aspect-[16/10] overflow-hidden cursor-pointer bg-[#171717]"
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
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-95 group-hover:opacity-100"
          />
        )}

        {/* Ambient Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Category & Duration Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-[#171717]/80 backdrop-blur-md text-[#FFFFFF] border border-white/10">
            {project.category}
          </span>

          {project.duration && (
            <span className="px-2.5 py-1 rounded-full text-[11px] font-medium text-white/90 bg-black/60 backdrop-blur-md flex items-center gap-1.5 border border-white/10">
              <Clock className="w-3 h-3 text-[#84CC16]" />
              <span>{project.duration}</span>
            </span>
          )}
        </div>

        {/* Center Play Button Indicator */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-12 h-12 rounded-full bg-[#FFFFFF] text-[#171717] flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-110 transition-all duration-300">
            <Play className="w-5 h-5 fill-current ml-0.5" />
          </div>
        </div>

        {/* Resolution indicator */}
        <div className="absolute bottom-3 left-4 text-[10px] font-semibold tracking-wider text-white/80 pointer-events-none uppercase">
          4K DCI • 10-BIT PRORES
        </div>
      </div>

      {/* Card Info Area */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3
              onClick={() => onSelect(project)}
              className="text-lg font-bold text-[#171717] group-hover:text-[#84CC16] transition-colors cursor-pointer leading-snug"
            >
              {project.title}
            </h3>

            {project.year && (
              <span className="text-xs text-[#777777] font-medium shrink-0 pt-0.5">
                {project.year}
              </span>
            )}
          </div>

          <p className="text-xs sm:text-sm text-[#666666] line-clamp-2 leading-relaxed mb-4">
            {project.shortDescription || (project as any).description}
          </p>

          {/* Tags / Deliverables */}
          {(project.softwareUsed || (project as any).tags) && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {(project.softwareUsed || (project as any).tags).slice(0, 3).map((tag: string, i: number) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 text-[10px] font-medium text-[#555555] bg-[#F0F0EC] rounded-md border border-[#E5E5DF]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA Row */}
        <div className="pt-3 border-t border-[#E5E5DF] flex items-center justify-between">
          <button
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#171717] group-hover:text-[#84CC16] transition-colors"
          >
            <span>Watch Video</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {project.client && (
            <span className="text-[11px] text-[#777777] font-medium">
              Client: {project.client}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
