"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Previous Work", href: "#work" },
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ["home", "work", "services", "about", "process", "contact"];
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
          ? "bg-[#1D1E22]/95 backdrop-blur-md py-4 border-b border-white/10 shadow-2xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            className="group flex items-center gap-2 focus:outline-none"
            aria-label="Fahima Home"
          >
            <span
              className={`font-display text-2xl sm:text-3xl tracking-tight transition-colors duration-200 ${
                isScrolled ? "text-white" : "text-black"
              }`}
            >
              FAHIMA<span className="text-lime">.</span>
            </span>
            <span
              className={`text-[10px] uppercase font-condensed tracking-widest px-2 py-0.5 rounded border transition-colors ${
                isScrolled
                  ? "border-lime/40 text-lime bg-lime/10"
                  : "border-black/30 text-black bg-black/10"
              }`}
            >
              PRO EDITOR
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-xs lg:text-sm font-semibold tracking-wider uppercase transition-colors rounded-full ${
                    isScrolled
                      ? isActive
                        ? "text-lime bg-white/5"
                        : "text-neutral-300 hover:text-white hover:bg-white/5"
                      : isActive
                      ? "text-black bg-black/10 font-bold"
                      : "text-neutral-900/80 hover:text-black hover:bg-black/5"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeIndicator"
                      className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full ${
                        isScrolled ? "bg-lime" : "bg-black"
                      }`}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right CTA Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="#about"
              className={`text-xs lg:text-sm font-semibold tracking-wider uppercase transition-colors ${
                isScrolled ? "text-neutral-300 hover:text-white" : "text-black hover:opacity-75"
              }`}
            >
              ABOUT
            </Link>

            <Link
              href="#contact"
              className={`inline-flex items-center justify-center text-xs lg:text-sm font-condensed tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-200 font-bold ${
                isScrolled
                  ? "bg-lime text-black hover:bg-lime-hover shadow-[0_0_20px_rgba(183,255,0,0.35)]"
                  : "bg-black text-white hover:bg-neutral-900 shadow-md hover:scale-105"
              }`}
            >
              GET STARTED
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors focus:outline-none ${
                isScrolled
                  ? "text-white hover:bg-white/10"
                  : "text-black hover:bg-black/10"
              }`}
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
            className="md:hidden bg-[#1D1E22] border-b border-white/10 px-4 pt-2 pb-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-2 mt-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm uppercase tracking-wider font-semibold text-neutral-200 hover:text-lime hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </Link>
              ))}

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-lime text-black font-condensed tracking-widest text-base font-bold shadow-lg"
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
