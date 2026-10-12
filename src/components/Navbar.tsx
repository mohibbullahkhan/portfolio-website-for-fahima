"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#work" },
  { name: "Calculator", href: "#calculator" },
  { name: "Pricing", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ["home", "work", "services", "process", "about", "contact"];
      const scrollPosition = window.scrollY + 200;

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
          ? "bg-[#060714]/85 backdrop-blur-xl py-3.5 border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="Fahima Home"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-fuchsia-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-display text-2xl sm:text-3xl tracking-tight text-white group-hover:text-violet-300 transition-colors">
              FAHIMA<span className="text-violet-400">.</span>
            </span>
            <span className="hidden sm:inline-flex text-[10px] uppercase font-condensed tracking-widest px-2.5 py-0.5 rounded-full border border-violet-500/30 text-violet-300 bg-violet-950/40">
              PRO EDITOR
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/[0.06] backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs lg:text-sm font-medium tracking-wide transition-all rounded-full ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-neutral-300 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className="absolute inset-0 rounded-full bg-violet-600/30 border border-violet-500/40 -z-10 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#about"
              className="text-xs lg:text-sm font-medium tracking-wider uppercase text-neutral-300 hover:text-white transition-colors"
            >
              ABOUT
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center text-xs lg:text-sm font-medium tracking-wider px-5 py-2.5 rounded-full text-white bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.4)] hover:shadow-[0_0_28px_rgba(139,92,246,0.65)] hover:scale-[1.02]"
            >
              GET STARTED
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#0a0b1e]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-2 pb-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-2 mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-neutral-200 hover:text-violet-300 hover:bg-violet-950/30 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-violet-400" />
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-medium text-sm shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                >
                  <span>LET&apos;S TALK</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
