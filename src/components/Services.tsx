"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Film, Smartphone, Mic, Sparkles, Tv, Scissors, Layers } from "lucide-react";
import { servicesData } from "@/data/services";
import { Service } from "@/types";

const serviceIcons = [Film, Smartphone, Mic, Tv, Sparkles, Scissors, Layers];

interface ServicesProps {
  services?: Service[];
}

export default function Services({ services }: ServicesProps) {
  const displayServices = services && services.length > 0 ? services : servicesData;
  const [activeServiceId, setActiveServiceId] = useState(displayServices[0]?.id || servicesData[0].id);

  const activeService = displayServices.find((s) => s.id === activeServiceId) || displayServices[0];

  return (
    <section id="services" className="relative bg-[#F8F8F5] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5DF]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E5DF] text-[11px] font-semibold tracking-wider text-[#171717] uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
              <span>SERVICES & EXPERTISE</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-[1.05]">
              What I Can Do For You
            </h2>
          </div>

          <p className="text-base text-[#666666] max-w-md font-normal leading-relaxed">
            Full-spectrum video post-production tailored for ambitious brands, top YouTubers, and podcast studios looking for premium retention and visual polish.
          </p>
        </div>

        {/* Master / Detail Editorial Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Service Selectors */}
          <div className="lg:col-span-5 space-y-3">
            {displayServices.map((service, index) => {
              const Icon = serviceIcons[index % serviceIcons.length];
              const isActive = activeServiceId === service.id;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full p-5 sm:p-6 rounded-2xl text-left transition-all duration-300 border flex items-center justify-between group ${
                    isActive
                      ? "bg-[#FFFFFF] border-[#171717] shadow-md ring-1 ring-[#171717]/10"
                      : "bg-[#F0F0EC] border-[#E5E5DF] hover:bg-[#FFFFFF] hover:border-[#CCCCCC]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-sm font-bold ${
                        isActive ? "text-[#84CC16]" : "text-[#777777]"
                      }`}
                    >
                      {service.number || `0${index + 1}`}
                    </span>

                    <div>
                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors ${
                          isActive ? "text-[#171717]" : "text-[#555555] group-hover:text-[#171717]"
                        }`}
                      >
                        {service.title}
                      </h3>
                      {service.tagline && (
                        <p className="text-xs text-[#777777] mt-0.5">{service.tagline}</p>
                      )}
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                      isActive
                        ? "bg-[#171717] text-[#FFFFFF]"
                        : "bg-[#FFFFFF] text-[#777777] border border-[#E5E5DF]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Service Detailed Showcase Panel */}
          <div className="lg:col-span-7">
            {activeService && (
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-[#E5E5DF] p-6 sm:p-10 shadow-editorial"
              >
                <div className="flex items-center justify-between pb-6 border-b border-[#E5E5DF] mb-6">
                  <div>
                    <span className="text-[11px] font-semibold text-[#84CC16] uppercase tracking-wider">
                      SPECIFICATION OVERVIEW
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#171717] mt-1">
                      {activeService.title}
                    </h3>
                  </div>

                  <span className="font-mono text-2xl font-bold text-[#D1D1C7]">
                    {activeService.number || "01"}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-[#555555] leading-relaxed mb-8">
                  {activeService.shortDescription || (activeService as any).description}
                </p>

                {/* Key Deliverables & Standards */}
                {activeService.deliverables && activeService.deliverables.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xs font-bold tracking-wider text-[#171717] uppercase mb-4">
                      Deliverables & Production Inclusions:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeService.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8F8F5] border border-[#E5E5DF] text-xs font-medium text-[#333333]"
                        >
                          <Check className="w-4 h-4 text-[#84CC16] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Production Meta Box */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-[#F0F0EC] border border-[#E5E5DF] mb-8 text-xs">
                  <div>
                    <span className="text-[#777777] block text-[10px] uppercase font-semibold">Typical Turnaround</span>
                    <span className="text-[#171717] font-bold mt-0.5 block">48 – 72 Hours</span>
                  </div>
                  <div>
                    <span className="text-[#777777] block text-[10px] uppercase font-semibold">Master Quality</span>
                    <span className="text-[#171717] font-bold mt-0.5 block">4K DCI / ProRes 422</span>
                  </div>
                  <div>
                    <span className="text-[#777777] block text-[10px] uppercase font-semibold">Revisions</span>
                    <span className="text-[#171717] font-bold mt-0.5 block">Unlimited Minor Tweaks</span>
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E5E5DF]">
                  <div className="text-xs text-[#777777]">
                    Ready to edit your next video? Let&rsquo;s discuss your pacing and assets.
                  </div>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171717] text-[#FFFFFF] text-xs font-semibold tracking-tight hover:bg-black transition-all shrink-0 group"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
