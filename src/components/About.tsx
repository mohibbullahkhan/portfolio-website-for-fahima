"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { ApiProfile } from "@/lib/api";

const professionalValues = [
  {
    number: "01",
    title: "Precision Pacing",
    desc: "Every cut is calibrated to the exact frame. Zero filler, high retention, and intentional flow engineered for modern audience attention spans.",
  },
  {
    number: "02",
    title: "Narrative Rhythm",
    desc: "Editing is visual music. Cuts harmonize with natural speech cadences, emotional micro-beats, and audio transients.",
  },
  {
    number: "03",
    title: "12-Bit Color Science",
    desc: "DaVinci Resolve Studio color pipeline. Skin tone isolation, cinematic film emulation, and accurate Rec.709 mastering.",
  },
  {
    number: "04",
    title: "Obsessive Sound Design",
    desc: "Layered foley, tactile risers, sub-bass hits, and dialogue speech clarity normalized to strict -14 LUFS broadcast standards.",
  },
];

interface AboutProps {
  profile?: ApiProfile;
}

export default function About({ profile }: AboutProps) {
  const name = profile?.name || "FAHIMA";
  const headline = profile?.headline || "Senior Video Editor & Post-Production Specialist";
  const bio =
    profile?.bio ||
    "I craft high-retention commercial films, viral creator shorts, and narrative cuts for creators and global brands across the US, UK, and Australia — combining frame-accurate pacing, 12-bit DaVinci Resolve color grading, and broadcast spatial audio design.";
  const profileImage =
    profile?.profileImage ||
    "https://i.ibb.co.com/pvM01V2h/A9-CC37-F4-A211-4-C07-958-B-86281-CB3030-B.jpg";
  const location = profile?.location || "Remote Commissions • US, UK, & Australia";
  const availability = profile?.availabilityStatus || "Available for Select Commissions";

  return (
    <section id="about" className="relative bg-[#F8F8F5] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5DF]">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Studio Spec Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#E5E5DF] bg-[#171717] shadow-editorial group">
              <Image
                src={profileImage}
                alt={`${name} - Video Editor`}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-95 group-hover:opacity-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Floating Bottom Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#FFFFFF]/95 backdrop-blur-xl border border-[#E5E5DF] shadow-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-semibold text-[#84CC16] uppercase tracking-wider truncate max-w-[200px]">
                    {headline}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-[#171717]">
                  {name}
                </h3>
                <p className="text-xs text-[#777777] mt-1">
                  {location}
                </p>
                <div className="mt-2 pt-2 border-t border-[#E5E5DF] flex items-center gap-1.5 text-[11px] font-semibold text-[#171717]">
                  <span className="w-2 h-2 rounded-full bg-[#84CC16]" />
                  <span>{availability}</span>
                </div>
              </div>
            </div>

            {/* Quick NLE & Toolset Badge */}
            <div className="mt-4 p-4 rounded-2xl bg-[#FFFFFF] border border-[#E5E5DF] flex items-center justify-between text-xs font-semibold text-[#555555] shadow-sm">
              <span>PRIMARY NLE // PREMIERE PRO</span>
              <span className="text-[#CCCCCC]">•</span>
              <span>COLOR // DAVINCI RESOLVE</span>
            </div>
          </motion.div>

          {/* Right Column: Bio, Philosophy & Professional Values */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E5DF] text-[11px] font-semibold tracking-wider text-[#171717] uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
              <span>ABOUT THE EDITOR</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#171717] leading-[1.1] mb-6">
              Story First. Pacing Always. Polish Guaranteed.
            </h2>

            <p className="text-base sm:text-lg text-[#555555] leading-relaxed mb-6 font-normal">
              {bio}
            </p>

            <p className="text-sm sm:text-base text-[#777777] leading-relaxed mb-10">
              Great editing is invisible: the audience should feel the momentum, the humor, and the emotional crescendo without ever noticing a cut. Every project I accept receives complete dedication, direct personal communication, and rapid turnaround.
            </p>

            {/* Values 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10">
              {professionalValues.map((val) => (
                <div
                  key={val.number}
                  className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E5DF] shadow-sm hover:border-[#171717]/30 transition-colors"
                >
                  <span className="font-mono text-xs font-bold text-[#84CC16] block mb-1">
                    {val.number}
                  </span>
                  <h3 className="text-base font-bold text-[#171717] mb-2">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#171717] text-[#FFFFFF] text-xs font-semibold tracking-tight hover:bg-black transition-all shadow-sm group"
              >
                <span>Let&rsquo;s Build Your Next Video</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
