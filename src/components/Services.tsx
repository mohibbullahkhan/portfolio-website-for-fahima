"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Video, Scissors, Smartphone, Palette, Layers } from "lucide-react";
import { servicesData } from "@/data/services";

const serviceIcons = [Scissors, Smartphone, Palette, Layers];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="relative bg-[#25262B] py-24 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-lime/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-condensed tracking-widest text-lime uppercase mb-4">
              <Video className="w-3.5 h-3.5" />
              <span>WHAT I BRING TO YOUR PRODUCTION</span>
            </div>

            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase text-white leading-none">
              CREATIVE <br />
              <span className="text-lime">SERVICES.</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-neutral-400 font-normal max-w-md leading-relaxed">
            From simple edits to cinematic storytelling, I help transform your raw footage
            into engaging visual experiences that captivate audiences and drive conversions.
          </p>
        </div>

        {/* Services Editorial List / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            const IconComponent = serviceIcons[idx % serviceIcons.length];
            const isHovered = hoveredIndex === idx;

            return (
              <motion.div
                key={service.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative bg-[#1D1E22] rounded-3xl p-8 sm:p-10 border transition-all duration-300 flex flex-col justify-between group overflow-hidden ${
                  service.popular
                    ? "border-lime/40 shadow-[0_0_30px_rgba(183,255,0,0.15)]"
                    : "border-white/10 hover:border-lime/50"
                }`}
              >
                {/* Background Number Watermark */}
                <span className="absolute right-4 bottom-2 font-display text-8xl sm:text-9xl text-white/[0.03] select-none pointer-events-none group-hover:text-lime/[0.08] transition-colors">
                  {service.number}
                </span>

                {/* Popular Pill */}
                {service.popular && (
                  <div className="absolute top-6 right-8">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-lime text-black font-bold">
                      MOST REQUESTED
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Line: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lime group-hover:bg-lime group-hover:text-black transition-all duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <span className="font-display text-4xl text-neutral-500 group-hover:text-lime transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-condensed text-3xl sm:text-4xl font-bold uppercase tracking-wide text-white group-hover:text-lime transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Key Deliverables Bullet List */}
                  <div className="mt-6 pt-6 border-t border-white/10 space-y-2.5">
                    {service.deliverables.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-lime shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & CTA Footer */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.map((tool, toolIdx) => (
                      <span
                        key={toolIdx}
                        className="text-[10px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-condensed tracking-widest font-bold uppercase text-lime group-hover:text-white transition-colors"
                  >
                    <span>INQUIRE</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
