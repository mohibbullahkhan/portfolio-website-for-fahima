import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Introduction from "@/components/Introduction";
import PreviousWork from "@/components/PreviousWork";
import Services from "@/components/Services";
import EditingExpertise from "@/components/EditingExpertise";
import About from "@/components/About";
import CreativeProcess from "@/components/CreativeProcess";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1D1E22] text-[#F5F5F5] overflow-x-hidden selection:bg-lime selection:text-black">
      {/* 01 Navigation */}
      <Navbar />

      {/* 02 Hero Section with Electric Lime Background & Video Editing Suite */}
      <Hero />

      {/* 03 Animated Infinite Marquee */}
      <Marquee />

      {/* 04 Creative Introduction & Editorial Chips */}
      <Introduction />

      {/* 05 Previous Work & Video Lightbox Player */}
      <PreviousWork />

      {/* 06 Creative Services */}
      <Services />

      {/* 07 Precision Editing Expertise & HUD Workbench */}
      <EditingExpertise />

      {/* 08 About Fahima & Creative Philosophy */}
      <About />

      {/* 09 Creative Process: From Idea to Final Frame */}
      <CreativeProcess />

      {/* 10 Client Testimonials (featuring Lime Green Card) */}
      <Testimonials />

      {/* 11 Full-width Cinematic Call to Action */}
      <ContactCTA />

      {/* 12 Frequently Asked Questions Accordion */}
      <FAQAccordion />

      {/* 13 Contact Form & Direct Inquiries */}
      <ContactForm />

      {/* 14 Visually Powerful Footer with Giant Lime Typography */}
      <Footer />
    </main>
  );
}
