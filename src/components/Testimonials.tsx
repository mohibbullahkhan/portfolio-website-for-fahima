"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { Testimonial } from "@/types";

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const displayTestimonials =
    testimonials && testimonials.length > 0 ? testimonials : testimonialsData;

  if (!displayTestimonials || displayTestimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="relative bg-[#F8F8F5] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5DF]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E5DF] text-[11px] font-semibold tracking-wider text-[#171717] uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
              <span>CLIENT FEEDBACK</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-[1.05]">
              What Collaborators Say
            </h2>
          </div>

          <p className="text-base text-[#666666] max-w-md font-normal leading-relaxed">
            Real experiences from creators, podcast hosts, and commercial producers who rely on Fahima for their post-production needs.
          </p>
        </div>

        {/* 3 Editorial Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {displayTestimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-[#E5E5DF] hover:border-[#171717]/40 p-6 sm:p-8 flex flex-col justify-between transition-all shadow-editorial"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#84CC16] text-[#84CC16]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#D1D1C7]" />
                </div>

                <p className="text-sm sm:text-base text-[#333333] leading-relaxed mb-6 font-normal italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-6 border-t border-[#E5E5DF] flex items-center gap-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-[#F0F0EC] border border-[#E5E5DF] shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#171717]">
                    {item.name}
                  </h3>
                  <p className="text-xs text-[#777777]">
                    {item.role} {item.company && `• ${item.company}`}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
