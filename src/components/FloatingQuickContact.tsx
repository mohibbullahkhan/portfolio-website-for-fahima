"use client";

import React, { useState } from "react";
import { MessageCircle, Mail, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingQuickContact() {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "+880 1793-884684";
  const whatsappUrl = `https://wa.me/8801793884684?text=${encodeURIComponent(
    "Hi Fahima! I was viewing your video editor portfolio and would love to discuss a project with you."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="mb-3 w-72 sm:w-80 rounded-2xl bg-[#0c0d24]/95 backdrop-blur-2xl border border-violet-500/30 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-white">Chat with Fahima</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-white rounded-lg hover:bg-white/10"
                aria-label="Close widget"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Have a raw clip, question, or need a fast turnaround? Reach out directly on WhatsApp:
            </p>

            {/* Quick Action Links */}
            <div className="space-y-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white text-xs font-medium flex items-center justify-between transition-colors shadow-sm"
              >
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {phoneNumber}</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-200">Online</span>
              </a>

              <a
                href="mailto:hello@fahimaedits.com"
                className="w-full py-2.5 px-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white text-xs font-medium flex items-center justify-between transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-violet-400" />
                  <span>Email hello@fahimaedits.com</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400">&lt;12h</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Pill Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-medium text-xs sm:text-sm shadow-[0_0_30px_rgba(139,92,246,0.6)] hover:shadow-[0_0_40px_rgba(139,92,246,0.8)] transition-all hover:scale-105"
        aria-label="Open fast inquiry chat"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
        </span>
        <span className="tracking-wide">WhatsApp Fahima</span>
        <MessageCircle className="w-4 h-4 text-white ml-0.5" />
      </button>
    </div>
  );
}
