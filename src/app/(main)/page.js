import CallToAction from "@/components/CallToAction";
import FAQs from "@/components/FAQs";
import Features from "@/components/Features";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Maps from "@/components/Maps";
import Navbar from "@/components/NavBar";
import PerformanceStats from "@/components/PerformanceStats";
import Testimonials from "@/components/Testimonials";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <Maps />
      <Features />
      <PerformanceStats />
      <Testimonials />
      <CallToAction />
      <FAQs />
    </div>
  );
}
