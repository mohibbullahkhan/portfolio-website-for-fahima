"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  Clock,
  Sparkles,
  Phone,
  MapPin,
  Loader2,
  Calendar,
  DollarSign,
  Video,
  Layers,
  HelpCircle,
} from "lucide-react";
import { ApiSettings, submitContactMessage } from "@/lib/api";

interface ContactFormProps {
  settings?: ApiSettings;
}

const projectTypes = [
  "YouTube Video",
  "Podcast Series",
  "Short-Form & Reels",
  "Commercial & Brand Film",
  "Motion Graphics",
  "Other / Custom Post-Production",
];

const durationOptions = [
  "Under 60 seconds (Vertical/Shorts)",
  "1 – 3 minutes (Promo/Trailer)",
  "5 – 10 minutes (YouTube/Explainer)",
  "10 – 30 minutes (Documentary/Vlog)",
  "30+ minutes (Podcast/Keynote)",
];

const videoCountOptions = [
  "Single Video (1x)",
  "Batch (2 – 4 videos)",
  "Series (5 – 10 videos)",
  "Ongoing Monthly Retainer",
];

const budgetRanges = [
  "Under $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+ / Custom Retainer",
];

const deadlineOptions = [
  "Urgent (Within 48–72 hours)",
  "Within 1 – 2 weeks",
  "Within 1 month",
  "Flexible / Planning phase",
];

export default function ContactForm({ settings }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "YouTube Video",
    description: "",
    referenceUrl: "",
    duration: "5 – 10 minutes (YouTube/Explainer)",
    videoCount: "Single Video (1x)",
    budget: "$1,000 – $2,500",
    deadline: "Within 1 – 2 weeks",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const email = settings?.contactEmail || "hello@fahimaedits.com";
  const phone = settings?.phone || "+44 7000 000000";
  const location = settings?.location || "Remote & Worldwide (US, UK, AUS)";

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Please describe your project idea or requirements";
    } else if (formData.description.trim().length < 15) {
      newErrors.description = "Please provide at least a few details (min 15 characters)";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    // Construct structured markdown briefing message
    const formattedMessage = `### Project Briefing Details
- **Project Type:** ${formData.projectType}
- **Company / Brand:** ${formData.company || "Independent / Individual"}
- **Expected Duration:** ${formData.duration}
- **Number of Videos:** ${formData.videoCount}
- **Budget Range:** ${formData.budget}
- **Preferred Deadline:** ${formData.deadline}
- **Reference / Inspiration URL:** ${formData.referenceUrl || "None provided"}

---

### Project Description / Idea:
${formData.description}

${
  formData.additionalInfo
    ? `---
### Additional Specifications:
${formData.additionalInfo}`
    : ""
}`;

    const subject = `[Project Inquiry] ${formData.projectType} — ${
      formData.company ? formData.company : formData.name
    }`;

    try {
      const result = await submitContactMessage({
        name: formData.name.trim(),
        email: formData.email.trim(),
        subject,
        message: formattedMessage,
      });

      if (result.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.message);
      }
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || "Failed to submit project inquiry. Please email directly.");
    }
  };

  return (
    <section id="contact" className="relative bg-[#F8F8F5] py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-[#E5E5DF]">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFFFF] border border-[#E5E5DF] text-[11px] font-semibold tracking-wider text-[#171717] uppercase mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#84CC16]" />
            <span>PROJECT BRIEFING</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-[1.05]">
            Start Your Project
          </h2>

          <p className="text-base text-[#666666] mt-4 font-normal leading-relaxed">
            Fill out the brief below to share your footage, goals, and delivery timeline. I personally review every inquiry and respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Direct Info & Editorial Guarantee Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#FFFFFF] border border-[#E5E5DF] shadow-editorial space-y-6">
              <div>
                <h3 className="text-base font-bold text-[#171717] uppercase tracking-wide mb-2">
                  What Happens Next?
                </h3>
                <p className="text-xs sm:text-sm text-[#666666] leading-relaxed">
                  1. I review your footage specs, reference links, and timeline.
                  <br />
                  2. You receive a personalized scope of work, timeline estimate, and flat-rate quote.
                  <br />
                  3. We upload to Frame.io and start the assembly cut.
                </p>
              </div>

              <div className="pt-6 border-t border-[#E5E5DF] space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#F0F0EC] text-[#171717] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#777777] font-semibold uppercase block">Direct Email</span>
                    <a href={`mailto:${email}`} className="font-semibold text-[#171717] hover:underline">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#F0F0EC] text-[#171717] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#777777] font-semibold uppercase block">Response Time</span>
                    <span className="font-semibold text-[#171717]">Guaranteed under 24 hours</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-[#F0F0EC] text-[#171717] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-[#777777] font-semibold uppercase block">Location</span>
                    <span className="font-semibold text-[#171717]">{location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Commitment Badge */}
            <div className="p-5 rounded-2xl bg-[#F0F0EC] border border-[#E5E5DF] text-xs text-[#555555]">
              <div className="flex items-center gap-2 text-[#171717] font-bold mb-1">
                <Sparkles className="w-4 h-4 text-[#84CC16]" />
                <span>NDA &amp; Footage Security Guaranteed</span>
              </div>
              <p className="text-[11px] text-[#666666] leading-relaxed">
                Your pre-release raw footage, concepts, and branding materials are strictly confidential and protected by NDA.
              </p>
            </div>
          </div>

          {/* Right Column: Comprehensive Project Inquiry Form */}
          <div className="lg:col-span-8">
            <div className="bg-[#FFFFFF] p-6 sm:p-10 rounded-3xl border border-[#E5E5DF] shadow-editorial">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 px-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#ECFCCB] text-[#3F6212] flex items-center justify-center mx-auto mb-6 shadow-sm">
                    <CheckCircle2 className="w-8 h-8 text-[#84CC16]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#171717] mb-2">
                    Inquiry Received Successfully!
                  </h3>
                  <p className="text-sm text-[#666666] max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you, <span className="font-semibold text-[#171717]">{formData.name}</span>. I have received your project briefing and will follow up at <span className="font-semibold text-[#171717]">{formData.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({
                        name: "",
                        email: "",
                        company: "",
                        projectType: "YouTube Video",
                        description: "",
                        referenceUrl: "",
                        duration: "5 – 10 minutes (YouTube/Explainer)",
                        videoCount: "Single Video (1x)",
                        budget: "$1,000 – $2,500",
                        deadline: "Within 1 – 2 weeks",
                        additionalInfo: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#171717] text-[#FFFFFF] text-xs font-semibold tracking-tight hover:bg-black transition-colors"
                  >
                    <span>Submit Another Project</span>
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <div className="p-4 rounded-xl bg-[#FEE2E2] border border-[#FCA5A5] flex items-start gap-3 text-xs text-[#991B1B]">
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold block">Submission Error</span>
                        <span>{errorMessage}</span>
                      </div>
                    </div>
                  )}

                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#171717] mb-2">
                        Full Name <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-[#F8F8F5] border text-sm text-[#171717] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all ${
                          errors.name ? "border-[#EF4444] bg-[#FEF2F2]" : "border-[#E5E5DF]"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-[#EF4444] mt-1.5">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#171717] mb-2">
                        Email Address <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@creatorstudio.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#F8F8F5] border text-sm text-[#171717] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all ${
                          errors.email ? "border-[#EF4444] bg-[#FEF2F2]" : "border-[#E5E5DF]"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-[#EF4444] mt-1.5">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Company & Project Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-bold text-[#171717]">
                          Company / Channel / Brand
                        </label>
                        <span className="text-[10px] text-[#888888]">Optional</span>
                      </div>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Apex Media / YouTube Channel"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F8F5] border border-[#E5E5DF] text-sm text-[#171717] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#171717] mb-2">
                        Project Type <span className="text-[#EF4444]">*</span>
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F8F5] border border-[#E5E5DF] text-sm text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all"
                      >
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Duration & Video Count */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#171717] mb-2">
                        Expected Video Duration
                      </label>
                      <select
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F8F5] border border-[#E5E5DF] text-sm text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all"
                      >
                        {durationOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#171717] mb-2">
                        Estimated Number of Videos
                      </label>
                      <select
                        value={formData.videoCount}
                        onChange={(e) => setFormData({ ...formData, videoCount: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F8F5] border border-[#E5E5DF] text-sm text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all"
                      >
                        {videoCountOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Budget Range & Preferred Deadline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#171717] mb-2">
                        Estimated Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F8F5] border border-[#E5E5DF] text-sm text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all"
                      >
                        {budgetRanges.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#171717] mb-2">
                        Preferred Deadline / Schedule
                      </label>
                      <select
                        value={formData.deadline}
                        onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#F8F8F5] border border-[#E5E5DF] text-sm text-[#171717] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all"
                      >
                        {deadlineOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 5: Reference / Inspiration URL */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-[#171717]">
                        Reference Video or Inspiration URL
                      </label>
                      <span className="text-[10px] text-[#888888]">Optional</span>
                    </div>
                    <input
                      type="url"
                      value={formData.referenceUrl}
                      onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                      placeholder="https://youtube.com/watch?v=... or Vimeo link"
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F8F5] border border-[#E5E5DF] text-sm text-[#171717] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all"
                    />
                  </div>

                  {/* Row 6: Project Description / Idea */}
                  <div>
                    <label className="block text-xs font-bold text-[#171717] mb-2">
                      Project Description &amp; Vision <span className="text-[#EF4444]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Tell me about your footage, who your audience is, the pacing you envision, and any specific graphics or audio sound design requirements..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#F8F8F5] border text-sm text-[#171717] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all ${
                        errors.description ? "border-[#EF4444] bg-[#FEF2F2]" : "border-[#E5E5DF]"
                      }`}
                    />
                    {errors.description && (
                      <p className="text-[11px] text-[#EF4444] mt-1.5">{errors.description}</p>
                    )}
                  </div>

                  {/* Row 7: Additional Information */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-[#171717]">
                        Additional Specifications / Notes
                      </label>
                      <span className="text-[10px] text-[#888888]">Optional</span>
                    </div>
                    <textarea
                      rows={2}
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      placeholder="Any software preferences, raw footage resolution (4K/6K/Log), audio multitrack details, etc."
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F8F5] border border-[#E5E5DF] text-sm text-[#171717] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-[#171717] text-[#FFFFFF] text-sm font-semibold tracking-tight hover:bg-black transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed group"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting Your Brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Inquiry</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#888888] mt-3">
                      Protected by 256-bit encryption. No spam, ever.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
