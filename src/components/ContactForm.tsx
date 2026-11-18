"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
} from "lucide-react";
import { submitContactMessage, ApiSettings } from "@/lib/api";

interface ContactFormProps {
  settings?: ApiSettings;
}

const projectTypes = [
  "YouTube Video (Long-Form)",
  "Short-Form Video (Reels / TikTok / Shorts)",
  "Commercial / Brand Promotion",
  "Podcast Multi-Cam Edit",
  "Documentary / Cinematic Story",
  "Motion Graphics & Title Sequences",
  "Ongoing Retainer / Multi-Project",
];

const durationOptions = [
  "Under 60 seconds (Short/Reel)",
  "1 – 3 minutes (Commercial/Promo)",
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
    phone: "",
    company: "",
    projectType: "YouTube Video (Long-Form)",
    description: "",
    referenceUrl: "",
    duration: "5 – 10 minutes (YouTube/Explainer)",
    videoCount: "Single Video (1x)",
    deadline: "Within 1 – 2 weeks",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const email = settings?.contactEmail || "aminakhan.743634@gmail.com";
  const phone = settings?.phone || "+880 1793-884684";
  const location = settings?.location || "Remote & Worldwide (US, UK, AUS)";

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone or WhatsApp number is required";
    } else if (formData.phone.trim().length < 6) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Please describe your project idea or requirements";
    } else if (formData.description.trim().length < 10) {
      newErrors.description = "Please provide at least a few details (min 10 characters)";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    // Construct structured briefing message
    const formattedMessage = `### Client & Contact Details:
- **Client Name:** ${formData.name.trim()}
- **Email Address:** ${formData.email.trim()}
- **Phone / WhatsApp:** ${formData.phone.trim()}
- **Company / Brand:** ${formData.company || "Independent / Creator"}

### Project Specifications:
- **Project Type:** ${formData.projectType}
- **Expected Duration:** ${formData.duration}
- **Number of Videos:** ${formData.videoCount}
- **Preferred Deadline:** ${formData.deadline}
- **Reference URL:** ${formData.referenceUrl || "None provided"}

---

### Project Description / Requirements:
${formData.description.trim()}

${
  formData.additionalInfo.trim()
    ? `---
### Additional Notes:
${formData.additionalInfo.trim()}`
    : ""
}`;

    const subject = `[Project Inquiry] ${formData.projectType} — ${formData.name.trim()} (${formData.phone.trim()})`;

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
            Let&rsquo;s Create Something Extraordinary
          </h2>

          <p className="text-base sm:text-lg text-[#666666] font-normal leading-relaxed mt-4">
            Share your project parameters below. I review every submission personally and reply within 24 hours with timeline availability and next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Studio Contact Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFFFFF] p-8 sm:p-10 rounded-3xl border border-[#E5E5DF] shadow-sm">
              <h3 className="text-2xl font-bold tracking-tight text-[#171717] mb-2">
                Direct Communication
              </h3>
              <p className="text-sm text-[#666666] leading-relaxed mb-8">
                Prefer email or direct messaging? Reach out through any verified channel below for project consultations.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#F0F0EC] text-[#171717] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#888888] uppercase tracking-wider">
                      Primary Inquiries
                    </span>
                    <a
                      href={`mailto:${email}`}
                      className="text-base font-bold text-[#171717] hover:underline transition-colors break-all"
                    >
                      {email}
                    </a>
                    <p className="text-xs text-[#888888] mt-0.5">Average reply time: under 4 hours</p>
                  </div>
                </div>

                {/* WhatsApp / Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#F0F0EC] text-[#171717] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#888888] uppercase tracking-wider">
                      WhatsApp / Direct Phone
                    </span>
                    <a
                      href={`tel:${phone.replace(/\s+/g, "")}`}
                      className="text-base font-bold text-[#171717] hover:underline transition-colors"
                    >
                      {phone}
                    </a>
                    <p className="text-xs text-[#888888] mt-0.5">Available for voice & video consults</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#F0F0EC] text-[#171717] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-[#888888] uppercase tracking-wider">
                      Operating Location
                    </span>
                    <span className="text-base font-bold text-[#171717] block">
                      {location}
                    </span>
                    <p className="text-xs text-[#888888] mt-0.5">Overlapping with US, UK & EU working hours</p>
                  </div>
                </div>
              </div>

              {/* Working Hours Pill */}
              <div className="mt-8 pt-6 border-t border-[#E5E5DF] flex items-center gap-3 text-xs text-[#666666]">
                <Clock className="w-4 h-4 text-[#84CC16] shrink-0" />
                <span>Typical project turnaround: 48h to 72h on initial cuts</span>
              </div>
            </div>

            {/* Quick Guarantee Box */}
            <div className="bg-[#171717] text-[#F8F8F5] p-8 rounded-3xl border border-[#262626] shadow-md">
              <div className="flex items-center gap-2 text-[#84CC16] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>The Direct Commitment</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-2">
                No Account Managers. Zero Guesswork.
              </h4>
              <p className="text-xs text-[#A3A3A3] leading-relaxed">
                When you initiate a project, you communicate directly with me. Frame-accurate reviews happen via Frame.io or private cloud links with rapid turnarounds.
              </p>
            </div>
          </div>

          {/* Right Column: Briefing & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFFFF] p-8 sm:p-12 rounded-3xl border border-[#E5E5DF] shadow-sm">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#84CC16]/15 text-[#84CC16] flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171717]">
                    Project Brief Received!
                  </h3>
                  <p className="text-base text-[#666666] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#171717]">{formData.name}</span>. I have received your project parameters and will respond to <span className="font-semibold text-[#171717]">{formData.email}</span> and <span className="font-semibold text-[#171717]">{formData.phone}</span> within 24 hours.
                  </p>
                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => {
                        setStatus("idle");
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          company: "",
                          projectType: "YouTube Video (Long-Form)",
                          description: "",
                          referenceUrl: "",
                          duration: "5 – 10 minutes (YouTube/Explainer)",
                          videoCount: "Single Video (1x)",
                          deadline: "Within 1 – 2 weeks",
                          additionalInfo: "",
                        });
                      }}
                      className="px-6 py-3 rounded-full bg-[#171717] hover:bg-black text-[#FFFFFF] text-xs font-semibold tracking-tight transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <div className="p-4 rounded-2xl bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B] text-xs flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold">Submission Error</p>
                        <span>{errorMessage}</span>
                      </div>
                    </div>
                  )}

                  {/* Row 1: Full Name & Email */}
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

                  {/* Row 2: Phone / WhatsApp & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-[#171717] mb-2">
                        Phone / WhatsApp Number <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000 / +880..."
                        className={`w-full px-4 py-3 rounded-xl bg-[#F8F8F5] border text-sm text-[#171717] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all ${
                          errors.phone ? "border-[#EF4444] bg-[#FEF2F2]" : "border-[#E5E5DF]"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-[#EF4444] mt-1.5">{errors.phone}</p>
                      )}
                    </div>

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
                  </div>

                  {/* Row 3: Project Type & Video Duration */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                  </div>

                  {/* Row 4: Number of Videos & Preferred Deadline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

                  {/* Row 6: Description */}
                  <div>
                    <label className="block text-xs font-bold text-[#171717] mb-2">
                      Project Description & Requirements <span className="text-[#EF4444]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="Describe the footage you have, your desired pacing, audience retention goals, visual references, or any specific sound design requirements..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#F8F8F5] border text-sm text-[#171717] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all ${
                        errors.description ? "border-[#EF4444] bg-[#FEF2F2]" : "border-[#E5E5DF]"
                      }`}
                    />
                    {errors.description && (
                      <p className="text-[11px] text-[#EF4444] mt-1.5">{errors.description}</p>
                    )}
                  </div>

                  {/* Row 7: Additional Specifications (Optional) */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-[#171717]">
                        Additional Notes or Cloud Footage Link
                      </label>
                      <span className="text-[10px] text-[#888888]">Optional</span>
                    </div>
                    <textarea
                      rows={2}
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      placeholder="Google Drive, Dropbox, or Frame.io links, special export formats, audio stems..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F8F8F5] border border-[#E5E5DF] text-sm text-[#171717] placeholder:text-[#999999] focus:outline-none focus:ring-2 focus:ring-[#171717] transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#171717] hover:bg-black text-[#FFFFFF] text-sm font-semibold tracking-tight transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed group"
                    >
                      {status === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Transmitting Project Brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Project Brief</span>
                          <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#888888] text-center mt-3">
                      🔒 Your data is kept strictly private and used solely for project communication.
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
