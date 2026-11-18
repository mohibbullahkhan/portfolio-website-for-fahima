import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import PreviousWork from "@/components/PreviousWork";
import Services from "@/components/Services";
import ComparisonTable from "@/components/ComparisonTable";
import About from "@/components/About";
import CreativeProcess from "@/components/CreativeProcess";
import Testimonials from "@/components/Testimonials";
import FAQAccordion from "@/components/FAQAccordion";
import ContactCTA from "@/components/ContactCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingQuickContact from "@/components/FloatingQuickContact";
import {
  getHero,
  getProfile,
  getProjects,
  getCategories,
  getServices,
  getTestimonials,
  getSettings,
} from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function Home() {
  // Concurrently fetch CMS content with built-in fallback resilience
  const [hero, profile, projects, categories, services, testimonials, settings] =
    await Promise.all([
      getHero(),
      getProfile(),
      getProjects(),
      getCategories(),
      getServices(),
      getTestimonials(),
      getSettings(),
    ]);

  return (
    <main className="min-h-screen bg-[#F8F8F5] text-[#171717] overflow-x-hidden selection:bg-[#171717] selection:text-[#F8F8F5] relative font-sans">
      {/* 01 Minimal Luxury Navbar */}
      <Navbar settings={settings} />

      {/* 02 Editorial Hero (Headline, Copy, CTAs) */}
      <Hero hero={hero} />

      {/* 03 Selected Work Portfolio Showcase (6 initial + Show More) */}
      <PreviousWork projects={projects} categories={categories} />

      {/* 04 Post-Production Standards Marquee */}
      <Marquee />

      {/* 05 Core Services: What I Can Do */}
      <Services services={services} />

      {/* 06 Why Work With Me (The Direct Editor Advantage) */}
      <ComparisonTable />

      {/* 07 About the Editor (Bio, Philosophy, Values) */}
      <About profile={profile} />

      {/* 08 Working Process (4-Stage Pipeline) */}
      <CreativeProcess />

      {/* 09 Client & Collaborator Feedback */}
      <Testimonials testimonials={testimonials} />

      {/* 10 Frequently Asked Questions */}
      <FAQAccordion />

      {/* 11 High-Impact Conversion CTA */}
      <ContactCTA />

      {/* 12 High-Priority Project Briefing & Inquiry Form (Email + Phone) */}
      <ContactForm settings={settings} />

      {/* 13 Minimalist Luxury Studio Footer */}
      <Footer settings={settings} />

      {/* 14 Floating Quick Contact Messenger */}
      <FloatingQuickContact settings={settings} />
    </main>
  );
}
