import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import PreviousWork from "@/components/PreviousWork";
import Services from "@/components/Services";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ComparisonTable from "@/components/ComparisonTable";
import About from "@/components/About";
import CreativeProcess from "@/components/CreativeProcess";
import PricingCalculator from "@/components/PricingCalculator";
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

      {/* 02 Editorial Hero & Cinematic Showreel Showcase */}
      <Hero hero={hero} />

      {/* 03 Post-Production Standards Marquee */}
      <Marquee />

      {/* 04 Selected Work Portfolio Showcase */}
      <PreviousWork projects={projects} categories={categories} />

      {/* 05 Core Services: What I Can Do */}
      <Services services={services} />

      {/* 06 Interactive Color Science & Transformation Slider */}
      <BeforeAfterSlider />

      {/* 07 Why Work With Me (The Direct Editor Advantage) */}
      <ComparisonTable />

      {/* 08 About the Editor (Bio, Philosophy, Values) */}
      <About profile={profile} />

      {/* 09 Working Process (4-Stage Pipeline) */}
      <CreativeProcess />

      {/* 10 Transparent Project Cost Estimator */}
      <PricingCalculator />

      {/* 11 Client & Collaborator Feedback */}
      <Testimonials testimonials={testimonials} />

      {/* 12 Frequently Asked Questions */}
      <FAQAccordion />

      {/* 13 High-Impact Conversion CTA */}
      <ContactCTA />

      {/* 14 High-Priority Project Briefing & Inquiry Form */}
      <ContactForm settings={settings} />

      {/* 15 Minimalist Luxury Studio Footer */}
      <Footer settings={settings} />

      {/* 16 Floating Quick Contact Messenger */}
      <FloatingQuickContact settings={settings} />
    </main>
  );
}
