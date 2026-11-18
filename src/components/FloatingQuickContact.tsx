"use client";

import React, { useState } from "react";
import { MessageCircle, Mail, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ApiSettings } from "@/lib/api";

interface FloatingQuickContactProps {
  settings?: ApiSettings;
}

export default function FloatingQuickContact({ settings }: FloatingQuickContactProps) {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = settings?.whatsapp || settings?.phone || "+880 1793-884684";
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    "Hi Fahima! I was viewing your video editor portfolio and would love to discuss a project with you."
  )}`;
  const email = settings?.contactEmail || "aminakhan.743634@gmail.com";

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-3 w-72 sm:w-80 rounded-2xl bg-[#FFFFFF] border border-[#E5E5DF] p-4 shadow-xl text-[#171717]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E5DF] mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#84CC16] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#171717]">
                  Chat with Fahima
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-[#777777] hover:text-[#171717] rounded-lg hover:bg-[#F0F0EC]"
                aria-label="Close widget"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#666666] leading-relaxed mb-4">
              Have raw footage, questions, or need a fast turnaround? Reach out directly:
            </p>

            {/* Quick Action Links */}
            <div className="space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-[#171717] hover:bg-black text-[#FFFFFF] text-xs font-semibold flex items-center justify-between transition-colors shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-[#84CC16]" />
                  <span>Chat on WhatsApp</span>
                </div>
                <span className="text-[10px] text-[#A3E635]">Fast reply</span>
              </a>

              <a
                href={`mailto:${email}`}
                className="w-full py-2.5 px-3 rounded-xl bg-[#F0F0EC] hover:bg-[#E5E5DF] text-[#171717] text-xs font-medium flex items-center gap-2 transition-colors border border-[#E5E5DF]"
              >
                <Mail className="w-4 h-4 text-[#777777]" />
                <span className="truncate">{email}</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-13 h-13 p-3.5 rounded-full bg-[#171717] text-[#FFFFFF] hover:bg-black shadow-lg flex items-center justify-center transition-all duration-300 group"
        aria-label="Quick contact messenger"
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#84CC16] border-2 border-[#171717]" />
          </div>
        )}
      </button>
    </div>
  );
}
