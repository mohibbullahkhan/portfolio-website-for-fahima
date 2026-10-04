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

    // Simulated API submission (or Formspree endpoint)
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
    <section id="contact" className="relative bg-[#25262B] py-24 sm:py-36 px-4 sm:px-6 lg:px-8 border-t border-white/10 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-lime/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Heading & Contact Info */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-condensed tracking-widest text-lime uppercase mb-4">
              <Mail className="w-3.5 h-3.5" />
              <span>GET IN TOUCH</span>
            </div>

            <h2 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase text-white leading-none">
              LET&apos;S CREATE <br />
              <span className="text-lime">SOMETHING</span> <br />
              GREAT.
            </h2>

            <p className="mt-6 text-base sm:text-lg text-neutral-300 font-normal leading-relaxed">
              Have a project in mind? I&apos;d love to hear about it. Let&apos;s discuss how we can bring
              your creative vision to life with precision editing and visual impact.
            </p>

            {/* Quick Contact & Working Availability */}
            <div className="mt-8 space-y-4">
              <div className="p-4 rounded-2xl bg-[#1D1E22] border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-lime/10 border border-lime/30 flex items-center justify-center text-lime">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                    DIRECT INQUIRIES
                  </span>
                  <a
                    href="mailto:hello@fahimaedits.com"
                    className="text-sm sm:text-base font-mono text-white hover:text-lime transition-colors"
                  >
                    hello@fahimaedits.com
                  </a>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#1D1E22] border border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider block">
                    RESPONSE TIME
                  </span>
                  <span className="text-sm font-mono text-neutral-300">
                    Typically within 12-24 hours
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-4">
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
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D1E22] border border-white/10 text-xs font-condensed tracking-wider uppercase font-semibold text-neutral-300 hover:text-black hover:bg-lime hover:border-lime transition-all duration-200"
                  >
                    <social.icon className="w-3.5 h-3.5" />
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#1D1E22] p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl relative">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-lime text-black flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(183,255,0,0.5)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-condensed text-3xl font-bold uppercase text-white tracking-wide">
                    MESSAGE DELIVERED!
                  </h3>
                  <p className="mt-3 text-base text-neutral-300 max-w-md mx-auto">
                    Thank you for reaching out. I have received your project details and will review
                    your requirements shortly.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 px-8 py-3 rounded-full bg-white/10 text-white font-condensed tracking-wider uppercase text-sm font-semibold hover:bg-white/20 transition-colors"
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                        YOUR NAME <span className="text-lime">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Hunter"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#25262B] border text-white text-sm placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.name
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/10 focus:border-lime"
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
                      <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                        EMAIL ADDRESS <span className="text-lime">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@studio.com"
                        className={`w-full px-4 py-3.5 rounded-xl bg-[#25262B] border text-white text-sm placeholder-neutral-500 focus:outline-none transition-colors ${
                          errors.email
                            ? "border-red-500 focus:border-red-500"
                            : "border-white/10 focus:border-lime"
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
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
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
                            className={`px-3 py-2.5 rounded-xl text-xs font-condensed uppercase tracking-wider font-semibold border transition-all text-center focus:outline-none ${
                              isSelected
                                ? "bg-lime text-black border-lime font-bold shadow-md"
                                : "bg-[#25262B] text-neutral-300 border-white/10 hover:border-white/20"
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
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      ESTIMATED BUDGET (OPTIONAL)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#25262B] border border-white/10 text-white text-sm focus:outline-none focus:border-lime transition-colors"
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
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                      PROJECT DETAILS & SCOPE <span className="text-lime">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Tell me about the raw footage, desired length, references, timeline deadline, and storytelling style..."
                      className={`w-full px-4 py-3.5 rounded-xl bg-[#25262B] border text-white text-sm placeholder-neutral-500 focus:outline-none transition-colors ${
                        errors.details
                          ? "border-red-500 focus:border-red-500"
                          : "border-white/10 focus:border-lime"
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
                    className="w-full py-4 rounded-full bg-lime text-black font-condensed tracking-wider text-base sm:text-lg font-bold uppercase transition-all duration-200 hover:bg-lime-hover shadow-[0_0_30px_rgba(183,255,0,0.35)] flex items-center justify-center gap-2 group disabled:opacity-50"
                  >
                    {status === "submitting" ? (
                      <span className="flex items-center gap-2 font-mono text-sm">
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        TRANSMITTING INQUIRY...
                      </span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
