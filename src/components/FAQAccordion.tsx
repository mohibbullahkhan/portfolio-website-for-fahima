"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqsData } from "@/data/faqs";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative bg-[#F8F8F5] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5DF]">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E5DF] text-[11px] font-semibold tracking-wider text-[#171717] uppercase mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
            <span>FREQUENT QUESTIONS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#171717] leading-[1.05]">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#666666] mt-3 font-normal leading-relaxed">
            Everything you need to know about footage delivery, timelines, DaVinci Resolve color pipelines, and revisions.
          </p>
        </div>

        {/* Accordion Rows */}
        <div className="space-y-3">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.id}
                className="bg-[#FFFFFF] rounded-2xl border border-[#E5E5DF] overflow-hidden transition-all shadow-sm hover:border-[#CCCCCC]"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 sm:py-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-[#171717] pr-4">
                    {faq.question}
                  </span>

                  <span
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? "bg-[#171717] text-[#FFFFFF]"
                        : "bg-[#F0F0EC] text-[#777777] border border-[#E5E5DF]"
                    }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 text-sm text-[#666666] leading-relaxed border-t border-[#E5E5DF]/50 pt-4 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
