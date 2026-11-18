"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ApiSettings } from "@/lib/api";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
];

interface NavbarProps {
  settings?: ApiSettings;
}

export default function Navbar({ settings }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("work");

  const brandName = settings?.siteName || "FAHIMA";
  const logoUrl = settings?.logoUrl;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "work", "services", "process", "about", "testimonials", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F8F8F5]/90 backdrop-blur-md py-4 border-b border-[#E5E5DF] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <Link
            href="#home"
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Fahima Video Editor Portfolio Home"
          >
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={brandName}
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            ) : (
              <span className="w-2.5 h-2.5 rounded-full bg-[#171717] group-hover:bg-[#84CC16] transition-colors" />
            )}
            <div className="flex items-baseline gap-2">
              <span className="font-sans font-bold text-xl sm:text-2xl tracking-tighter text-[#171717] uppercase">
                {brandName}
              </span>
              <span className="hidden sm:inline-block text-[11px] font-medium tracking-widest text-[#777777] uppercase">
                / Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#F0F0EC]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E5E5DF]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-tight transition-all duration-200 ${
                    isActive
                      ? "bg-[#FFFFFF] text-[#171717] shadow-sm font-semibold"
                      : "text-[#666666] hover:text-[#171717]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#171717] text-[#F8F8F5] text-xs font-semibold tracking-tight hover:bg-black transition-all shadow-sm group"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-[#F0F0EC] text-[#171717] hover:bg-[#E5E5DF] transition-colors"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#F8F8F5] border-b border-[#E5E5DF] px-6 py-6 shadow-lg"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-base font-medium text-[#171717] hover:text-[#84CC16] border-b border-[#E5E5DF]/50 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#777777]" />
                </Link>
              ))}

              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#171717] text-[#F8F8F5] text-sm font-semibold tracking-tight"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
