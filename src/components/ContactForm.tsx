"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Instagram,
  Linkedin,
  Youtube,
  Globe,
  Clock,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Reels & Shorts",
    budget: "",
    details: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const projectTypes = [
    "Reels & Shorts",
    "Commercial / Brand",
    "Cinematic Film",
    "Social Media Campaign",
    "Color Grading",
    "Other Creative Project",
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.details.trim()) {
      newErrors.details = "Please share a brief description of your project";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: "Reels & Shorts",
        budget: "",
        details: "",
      });
    }, 1200);
  };

  return (
    <section id="contact" className="relative bg-[#060714] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none stars-overlay opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-violet-950/50 border border-violet-500/30 text-xs font-medium text-violet-300 uppercase mb-4 backdrop-blur-md">
              <Mail className="w-3.5 h-3.5 text-violet-400" />
              <span>Get In Touch</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
              Let&apos;s Create <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent purple-text-glow">
                Something Great.
              </span>
            </h2>

            <p className="mt-6 text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can bring
              your creative vision to life with precision editing and visual magic.
            </p>

            {/* Quick Contact & Working Availability */}
            <div className="mt-8 space-y-3.5">
              <a
                href="https://wa.me/8801793884684?text=Hi%20Fahima!%20I%20would%20like%20to%20discuss%20a%20video%20editing%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-emerald-950/25 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-950/40 transition-all flex items-center justify-between group shadow-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/50 border border-emerald-500/40 flex items-center justify-center text-emerald-300 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                        WHATSAPP DIRECT CHAT
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <span className="text-sm sm:text-base font-mono text-white font-medium group-hover:text-emerald-300 transition-colors">
                      +880 1793-884684
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <div className="p-4 rounded-2xl bg-[#0c0d24]/85 border border-white/[0.08] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-violet-950/80 border border-violet-500/30 flex items-center justify-center text-violet-300">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    DIRECT INQUIRIES
                  </span>
                  <a
                    href="mailto:hello@fahimaedits.com"
                    className="text-sm sm:text-base font-mono text-white hover:text-violet-300 transition-colors"
                  >
                    hello@fahimaedits.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#0c0d24]/85 border border-white/[0.08] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-slate-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                    RESPONSE TIME
                  </span>
                  <span className="text-sm font-mono text-slate-300">
                    WhatsApp: Instant / 1h &bull; Email: 12-24h
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-4">
                CONNECT ACROSS THE WEB
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
                  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
                  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
                  { name: "Behance", icon: Globe, href: "https://behance.net" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0c0d24] border border-white/[0.08] text-xs font-medium text-slate-300 hover:text-white hover:border-violet-500/50 hover:bg-violet-950/40 transition-all duration-200"
                  >
                    <social.icon className="w-3.5 h-3.5 text-violet-400" />
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0c0d24]/90 backdrop-blur-2xl p-6 sm:p-10 rounded-3xl border border-white/[0.1] shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-violet-600 text-white flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(139,92,246,0.6)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold uppercase text-white tracking-wide">
                    MESSAGE DELIVERED!
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out. I have received your project details and will review
                    your requirements shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 px-8 py-3 rounded-full bg-white/10 text-white text-xs font-medium uppercase tracking-wider hover:bg-white/20 transition-colors"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        YOUR NAME <span className="text-violet-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Hunter"
                        className={`w-full px-4 py-3 rounded-xl bg-[#070817] border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/10 focus:border-violet-500/70"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                        EMAIL ADDRESS <span className="text-violet-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@studio.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#070817] border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/10 focus:border-violet-500/70"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Type Select */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      PROJECT CATEGORY
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {projectTypes.map((type) => {
                        const isSelected = formData.projectType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setFormData({ ...formData, projectType: type })}
                            className={`px-3 py-2.5 rounded-xl text-xs uppercase tracking-wider font-medium border transition-all text-center focus:outline-none ${
                              isSelected
                                ? "bg-violet-600 text-white border-violet-500 font-semibold shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                                : "bg-[#070817] text-slate-300 border-white/10 hover:border-white/20"
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Estimated Budget */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      ESTIMATED BUDGET (OPTIONAL)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#070817] border border-white/10 text-white text-sm focus:outline-none focus:border-violet-500/70 transition-colors"
                    >
                      <option value="">Select a ballpark budget...</option>
                      <option value="under-1k">Under $1,000</option>
                      <option value="1k-3k">$1,000 - $3,000</option>
                      <option value="3k-5k">$3,000 - $5,000</option>
                      <option value="5k-plus">$5,000+</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                      PROJECT DETAILS &amp; SCOPE <span className="text-violet-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Tell me about the raw footage, desired length, references, timeline deadline, and storytelling style..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#070817] border text-white text-sm placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                        errors.details
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/10 focus:border-violet-500/70"
                      }`}
                    />
                    {errors.details && (
                      <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.details}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 rounded-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white font-medium text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:from-violet-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(139,92,246,0.5)] flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center gap-2 font-mono text-sm">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        TRANSMITTING INQUIRY...
                      </span>
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
