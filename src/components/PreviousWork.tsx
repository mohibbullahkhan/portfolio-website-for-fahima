"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, Filter } from "lucide-react";
import { projectsData } from "@/data/projects";
import { Project, ProjectCategory } from "@/types";
import ProjectCard from "./ProjectCard";
import VideoModal from "./VideoModal";

const categories: ProjectCategory[] = [
  "All Projects",
  "Reels & Shorts",
  "Social Media Videos",
  "Promotional Videos",
  "Cinematic Editing",
  "Commercial Videos",
];

export default function PreviousWork() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="relative bg-[#1D1E22] py-24 sm:py-36 px-4 sm:px-6 lg:px-8">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-lime/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-white/10 pb-8 sm:pb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-condensed tracking-widest text-lime uppercase mb-4">
              <Film className="w-3.5 h-3.5" />
              <span>SELECTED CREATIVE PROJECTS</span>
            </div>

            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase text-white leading-none">
              PREVIOUS <br />
              <span className="text-lime">WORK.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
              A collection of videos I&apos;ve edited, stories I&apos;ve shaped, and creative ideas
              I&apos;ve brought to life for creators, brands, and agencies worldwide.
            </p>
            <div className="mt-4 flex items-center gap-3 text-xs font-mono text-neutral-400">
              <span className="w-2 h-2 rounded-full bg-lime" />
              <span>SHOWING {filteredProjects.length} CURATED PROJECTS</span>
            </div>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#25262B] border border-white/10">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-condensed tracking-wider uppercase font-semibold transition-all duration-200 whitespace-nowrap focus:outline-none ${
                    isActive
                      ? "text-black shadow-md"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="categoryHighlight"
                      className="absolute inset-0 bg-lime rounded-full"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Video Lightbox Modal */}
        <VideoModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
