"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Instagram, Linkedin, Youtube, Globe, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#151619] text-[#F5F5F5] pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Info Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-5">
            <span className="font-display text-3xl sm:text-4xl uppercase text-white tracking-tight block">
              FAHIMA<span className="text-lime">.</span>
            </span>
            <p className="font-condensed text-lg sm:text-xl uppercase tracking-wider text-lime mt-1 font-bold">
              VIDEO EDITOR. CREATIVE STORYTELLER.
            </p>
            <p className="mt-4 text-sm text-neutral-400 font-normal max-w-sm leading-relaxed">
              Available worldwide for commercial campaigns, social reels, YouTube productions,
              and cinematic narrative editing.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-lime animate-pulse" />
              <span className="text-xs font-mono text-neutral-300">
                CURRENT STATUS: ACCEPTING SELECT COMMISSIONS
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
              SITE MAP
            </h4>
            <ul className="space-y-2.5 text-sm font-condensed tracking-wider uppercase font-semibold">
              <li>
                <Link href="#home" className="text-neutral-300 hover:text-lime transition-colors">
                  HOME
                </Link>
              </li>
              <li>
                <Link href="#work" className="text-neutral-300 hover:text-lime transition-colors">
                  PREVIOUS WORK
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-neutral-300 hover:text-lime transition-colors">
                  SERVICES & PRICING
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-neutral-300 hover:text-lime transition-colors">
                  ABOUT FAHIMA
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-neutral-300 hover:text-lime transition-colors">
                  WORKFLOW & PROCESS
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-neutral-300 hover:text-lime transition-colors">
                  GET IN TOUCH
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Back to Top */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-4">
                COMMUNICATIONS
              </h4>
              <a
                href="mailto:hello@fahimaedits.com"
                className="text-base sm:text-lg font-mono text-white hover:text-lime transition-colors block"
              >
                hello@fahimaedits.com
              </a>
              <p className="mt-2 text-xs font-mono text-neutral-500">
                London • New York • Remote Worldwide
              </p>
            </div>

            <div className="mt-8 flex items-center justify-between">
              {/* Social icons */}
              <div className="flex items-center gap-2">
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
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-black hover:bg-lime hover:border-lime transition-all"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>

              {/* Back to top */}
              <button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-xs font-condensed tracking-widest uppercase font-bold text-neutral-400 hover:text-lime transition-colors"
                aria-label="Back to top of page"
              >
                <span>BACK TO TOP</span>
                <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-lime group-hover:bg-lime group-hover:text-black">
                  <ArrowUp className="w-4 h-4" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Massive Lime Typographic Wordmark Inspired Directly by the Reference Screenshot */}
        <div className="pt-10 select-none overflow-hidden text-center sm:text-left">
          <h1 className="font-display text-[21vw] leading-[0.78] tracking-tight uppercase text-lime m-0 p-0 transform -translate-x-1 sm:-translate-x-3 pointer-events-none lime-text-glow">
            FAHIMA.
          </h1>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {currentYear} FAHIMA. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-neutral-400 cursor-pointer">PRIVACY POLICY</span>
            <span>•</span>
            <span className="hover:text-neutral-400 cursor-pointer">TERMS OF SERVICE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
