import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Introduction from "@/components/Introduction";
import ClientMetrics from "@/components/ClientMetrics";
import FeaturedImpressions from "@/components/FeaturedImpressions";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import PreviousWork from "@/components/PreviousWork";
import CreativeProcess from "@/components/CreativeProcess";
import SeamlessEditing from "@/components/SeamlessEditing";
import PricingCalculator from "@/components/PricingCalculator";
import Services from "@/components/Services";
import ComparisonTable from "@/components/ComparisonTable";
import Testimonials from "@/components/Testimonials";
import FreeSampleOffer from "@/components/FreeSampleOffer";
import EditingExpertise from "@/components/EditingExpertise";
import About from "@/components/About";
import FAQAccordion from "@/components/FAQAccordion";
import ContactCTA from "@/components/ContactCTA";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingQuickContact from "@/components/FloatingQuickContact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#060714] text-[#F8FAFC] overflow-x-hidden selection:bg-violet-600 selection:text-white relative">
      {/* 01 Floating Frosted Navigation */}
      <Navbar />

      {/* 02 Hero Section: Bring Your Ideas to Life with AI Video Magic */}
      <Hero />

      {/* 03 Monochromatic Brand & Industry Tools Marquee */}
      <Marquee />

      {/* 04 Giant Animated Editorial Typography: CREATE, EDIT, AND SHARE */}
      <Introduction />

      {/* 05 Proof of Performance & Organic Views Metrics Bar */}
      <ClientMetrics />

      {/* 06 Featured Impressions: Videos That Leave A Lasting Impression (4-card showcase) */}
      <FeaturedImpressions />

      {/* 07 Interactive Before / After Color Grading & Cut Transformation Slider */}
      <BeforeAfterSlider />

      {/* 08 Interactive Portfolio Gallery: Where Human Imagination Meets Creative Storytelling */}
      <PreviousWork />

      {/* 09 Creative Process: Transform Imagination into Reality - Steps to Build (3 vertical cards) */}
      <CreativeProcess />

      {/* 10 Capabilities Suite: Boundless Creativity - Ready When You Are */}
      <SeamlessEditing />

      {/* 11 Interactive Project Cost & Quotation Calculator (with WhatsApp 1-Click Lock) */}
      <PricingCalculator />

      {/* 12 Pricing & Investment: Choose the Perfect Plan For Your Needs */}
      <Services />

      {/* 13 Why Choose Fahima: Direct Comparison Table vs Cheap Freelancers vs Agencies */}
      <ComparisonTable />

      {/* 14 Client & Creator Testimonials: Your Gateway to Revolutionary Video Creation */}
      <Testimonials />

      {/* 15 High-Converting Risk-Reversal: Free 15-Second Test Cut Offer */}
      <FreeSampleOffer />

      {/* 16 Guarantees & Support: All The Support You Need, Always Within Reach (2x2 grid) */}
      <EditingExpertise />

      {/* 17 Behind The Timeline: About Fahima & Storytelling Philosophy */}
      <About />

      {/* 18 Frequently Asked Questions Accordion */}
      <FAQAccordion />

      {/* 19 Cosmic Pre-Footer Banner: Leading The Way In Video Creation */}
      <ContactCTA />

      {/* 20 Direct Project Inquiry & Contact Form */}
      <ContactForm />

      {/* 21 Cosmic Starry Footer with Socials */}
      <Footer />

      {/* 22 Sticky Floating WhatsApp & Fast Inquiry Conversion Widget */}
      <FloatingQuickContact />
    </main>
  );
}
