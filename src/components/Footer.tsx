"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Instagram, Linkedin, Youtube, Globe, Sparkles, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050611] text-[#F8FAFC] pt-18 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/[0.08] overflow-hidden">
      {/* Subtle Starry & Nebula Glow in Footer */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none stars-overlay opacity-25" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-900/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Main Footer Row (Matching Screenshot Footer) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-5">
            <Link href="#home" className="inline-flex items-center gap-2 group mb-3">
              <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-500 flex items-center justify-center text-white shadow-[0_0_12px_rgba(168,85,247,0.5)]">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="font-display text-2xl uppercase tracking-tight text-white group-hover:text-violet-300 transition-colors">
                FAHIMA<span className="text-violet-400">.</span>
              </span>
            </Link>

            <p className="text-xs font-mono uppercase tracking-widest text-violet-400 font-semibold mb-3">
              VIDEO EDITOR &amp; CREATIVE STORYTELLER
            </p>

            <p className="text-xs sm:text-sm text-slate-400 font-normal max-w-sm leading-relaxed">
              Available worldwide for commercial campaigns, high-retention social reels,
              music videos, and cinematic narrative editing.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-slate-300">
                CURRENT STATUS: ACCEPTING SELECT COMMISSIONS
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-4">
              QUICK NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="#home" className="text-slate-300 hover:text-violet-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-slate-300 hover:text-violet-300 transition-colors">
                  Previous Work
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-300 hover:text-violet-300 transition-colors">
                  Services &amp; Pricing
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-slate-300 hover:text-violet-300 transition-colors">
                  Creative Process
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-slate-300 hover:text-violet-300 transition-colors">
                  About Fahima
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-slate-300 hover:text-violet-300 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Communication & Socials (Matching the rounded square icon badges from screenshot) */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-3">
                DIRECT INQUIRY
              </h4>
              <a
                href="https://wa.me/8801793884684?text=Hi%20Fahima!%20I%20am%20interested%20in%20your%20video%20editing%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-mono text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2 mb-2 font-medium"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>+880 1793-884684</span>
              </a>
              <a
                href="mailto:hello@fahimaedits.com"
                className="text-xs sm:text-sm font-mono text-slate-300 hover:text-violet-300 transition-colors block"
              >
                hello@fahimaedits.com
              </a>
              <p className="mt-2 text-xs font-mono text-slate-500">
                Remote Worldwide Collaboration
              </p>
            </div>

            {/* Social Icons in Rounded Square Containers (from Reference Screenshot) */}
            <div className="mt-6">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400 block mb-3">
                FOLLOW &amp; CONNECT
              </span>
              <div className="flex items-center gap-2.5">
                {[
                  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
                  { icon: Globe, href: "https://behance.net", label: "Behance" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500/50 hover:bg-violet-950/40 transition-all duration-200 shadow-sm"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Legal & Back to Top Row */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} FAHIMA. ALL RIGHTS RESERVED.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-violet-300 transition-colors"
            aria-label="Back to top of page"
          >
            <span>BACK TO TOP</span>
            <span className="w-7 h-7 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-violet-400 hover:bg-violet-600 hover:text-white transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

      </div>
    </footer>
  );
}
