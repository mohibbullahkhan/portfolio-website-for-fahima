"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative bg-[#F8F8F5] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5DF] overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-14 md:p-16 text-center bg-[#171717] text-[#F8F8F5] border border-[#262626] overflow-hidden shadow-2xl"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#84CC16]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#262626] border border-white/10 text-[11px] font-semibold tracking-wider text-[#FFFFFF] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
              <span>NOW SCHEDULING COMMISSIONS // GLOBAL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#FFFFFF] leading-[1.08]">
              Have a Project in Mind?
            </h2>

            <p className="mt-6 text-base sm:text-lg text-[#CCCCCC] max-w-xl mx-auto font-normal leading-relaxed">
              Tell me what you&rsquo;re creating. Let&rsquo;s turn your idea into something worth watching.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FFFFFF] hover:bg-[#F0F0EC] text-[#171717] font-bold text-sm tracking-tight transition-all duration-200 shadow-md group"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <a
                href="mailto:aminakhan.743634@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#262626] hover:bg-[#333333] text-[#FFFFFF] font-semibold text-sm tracking-tight border border-white/10 transition-colors"
              >
                <Mail className="w-4 h-4 text-[#84CC16]" />
                <span>aminakhan.743634@gmail.com</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
