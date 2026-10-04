"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="relative bg-[#1D1E22] py-24 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-condensed tracking-widest text-lime uppercase mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>COMMUNITY FEEDBACK</span>
          </div>

          <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase text-white leading-none">
            WHAT CLIENTS <br />
            <span className="text-lime">SAY.</span>
          </h2>

          <p className="mt-4 text-xs font-mono uppercase tracking-wider text-neutral-500">
            * EDITABLE PLACEHOLDER TESTIMONIALS FOR FAHIMA TO PERSONALIZE
          </p>
        </div>

        {/* Testimonials 3-Card Layout directly inspired by reference screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {testimonialsData.map((item, idx) => {
            const isLime = item.themeStyle === "lime";
            const isLight = item.themeStyle === "light";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative shadow-2xl ${
                  isLime
                    ? "bg-lime text-black shadow-[0_0_40px_rgba(183,255,0,0.3)] border border-lime"
                    : isLight
                    ? "bg-[#EAEAEA] text-neutral-900 border border-neutral-300"
                    : "bg-[#25262B] text-white border border-white/10"
                }`}
              >
                <div>
                  {/* Top Author Row */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-black/20">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h4
                        className={`font-condensed text-lg sm:text-xl font-bold uppercase tracking-wide leading-tight ${
                          isLime ? "text-black" : isLight ? "text-black" : "text-white"
                        }`}
                      >
                        {item.name}
                      </h4>
                      <p
                        className={`text-xs font-mono ${
                          isLime ? "text-black/70" : isLight ? "text-neutral-600" : "text-neutral-400"
                        }`}
                      >
                        {item.role} {item.company ? `• ${item.company}` : ""}
                      </p>
                    </div>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 fill-current ${
                          isLime ? "text-black" : isLight ? "text-amber-500" : "text-lime"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Testimonial Quote */}
                  <p
                    className={`text-sm sm:text-base font-medium leading-relaxed italic ${
                      isLime ? "text-neutral-950 font-semibold" : isLight ? "text-neutral-800" : "text-neutral-300"
                    }`}
                  >
                    {item.text}
                  </p>
                </div>

                {/* Bottom Category Tag */}
                <div
                  className={`mt-8 pt-4 border-t flex items-center justify-between text-[11px] font-mono uppercase tracking-wider ${
                    isLime
                      ? "border-black/20 text-black/70"
                      : isLight
                      ? "border-neutral-300 text-neutral-600"
                      : "border-white/10 text-neutral-400"
                  }`}
                >
                  <span>PROJECT:</span>
                  <span className="font-bold">{item.projectCategory}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Slider Navigation Dots */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i ? "w-8 bg-lime" : "w-2 bg-neutral-600 hover:bg-neutral-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
