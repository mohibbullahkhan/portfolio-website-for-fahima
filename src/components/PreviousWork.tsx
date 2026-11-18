"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film } from "lucide-react";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import { ApiCategory } from "@/lib/api";
import ProjectCard from "./ProjectCard";
import VideoModal from "./VideoModal";

interface PreviousWorkProps {
  projects?: Project[];
  categories?: ApiCategory[];
}

export default function PreviousWork({
  projects = projectsData,
  categories = [],
}: PreviousWorkProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All Projects");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayProjects = projects && projects.length > 0 ? projects : projectsData;

  // Build category list dynamically
  const categoryNames = ["All Projects"];
  if (categories && categories.length > 0) {
    categories.forEach((cat) => {
      if (!categoryNames.includes(cat.name)) {
        categoryNames.push(cat.name);
      }
    });
  } else {
    displayProjects.forEach((p) => {
      if (p.category && !categoryNames.includes(p.category)) {
        categoryNames.push(p.category);
      }
    });
  }

  const filteredProjects =
    activeCategory === "All Projects"
      ? displayProjects
      : displayProjects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      className="relative bg-[#F8F8F5] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5DF]"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E5DF] text-[11px] font-semibold tracking-wider text-[#171717] uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-[1.05]">
              A Selection of My Work
            </h2>
          </div>

          <p className="text-base text-[#666666] max-w-md font-normal leading-relaxed">
            Every cut is engineered for retention, storytelling, and cinematic polish. Click any project to inspect the edit, pacing, and 4K color pipeline.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 sm:mb-12 no-scrollbar">
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#F0F0EC] border border-[#E5E5DF]">
            {categoryNames.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-tight transition-all duration-200 whitespace-nowrap focus:outline-none ${
                    isActive
                      ? "text-[#F8F8F5]"
                      : "text-[#666666] hover:text-[#171717] hover:bg-[#E5E5DF]/50"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="workCategoryPill"
                      className="absolute inset-0 bg-[#171717] rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 450, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
                index={index}
              />
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-[#FFFFFF] rounded-2xl border border-[#E5E5DF]">
            <Film className="w-10 h-10 text-[#999999] mx-auto mb-3" />
            <p className="text-base font-semibold text-[#171717]">No projects found in this category</p>
            <p className="text-sm text-[#777777] mt-1">Select &ldquo;All Projects&rdquo; to browse the full archive.</p>
          </div>
        )}
      </div>

      {/* Video Modal Player */}
      <VideoModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
