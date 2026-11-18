"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Instagram, Linkedin, Youtube, Mail, Twitter, MessageCircle } from "lucide-react";
import { ApiSettings } from "@/lib/api";

interface FooterProps {
  settings?: ApiSettings;
}

export default function Footer({ settings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const brandName = settings?.siteName || "FAHIMA";
  const email = settings?.contactEmail || "hello@fahimaedits.com";
  const footerText =
    settings?.footerText ||
    `© ${currentYear} ${brandName}. All rights reserved. Post-production for ambitious creators & brands.`;

  const socialLinks = [
    {
      icon: Youtube,
      href: settings?.socialLinks?.youtube || "https://youtube.com",
      label: "YouTube",
    },
    {
      icon: Instagram,
      href: settings?.socialLinks?.instagram || "https://instagram.com",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: settings?.socialLinks?.linkedin || "https://linkedin.com",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: settings?.socialLinks?.twitter || "https://x.com",
      label: "Twitter/X",
    },
    {
      icon: Mail,
      href: `mailto:${email}`,
      label: "Email",
    },
  ];

  return (
    <footer className="relative bg-[#171717] text-[#F8F8F5] pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 border-t border-[#262626] select-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 sm:pb-16 border-b border-[#262626]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#84CC16]" />
              <span className="font-bold text-2xl tracking-tight text-[#FFFFFF] uppercase">
                {brandName}
              </span>
            </div>

            <p className="text-sm text-[#999999] max-w-sm leading-relaxed">
              Crafting engaging videos that capture attention, tell compelling stories, and help creators and global brands stand out.
            </p>

            <div className="pt-2">
              <a
                href={`mailto:${email}`}
                className="text-xs font-semibold text-[#84CC16] hover:underline"
              >
                {email}
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-[#FFFFFF] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#999999]">
              <li>
                <Link href="#work" className="hover:text-[#FFFFFF] transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#FFFFFF] transition-colors">
                  Available Services
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-[#FFFFFF] transition-colors">
                  Working Process
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#FFFFFF] transition-colors">
                  About the Editor
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-[#FFFFFF] transition-colors">
                  Client Feedback
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#FFFFFF] transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold tracking-wider text-[#FFFFFF] uppercase">
              Connect &amp; Social
            </h4>
            <p className="text-xs text-[#999999] leading-relaxed">
              Follow along for editing breakdowns, DaVinci Resolve color science tips, and recent cuts.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-9 h-9 rounded-full bg-[#262626] hover:bg-[#84CC16] hover:text-[#171717] text-[#FFFFFF] flex items-center justify-center transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#777777]">
          <p>{footerText}</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-[#FFFFFF] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
