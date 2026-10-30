"use client";

import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TrustCorridor from "@/components/TrustCorridor";
import SectorsScrollShowcase from "@/components/SectorsScrollShowcase";
import WhyChooseUs from "@/components/WhyChooseUs";
import ChefsSection from "@/components/ChefsSection";
import HowItWorks from "@/components/HowItWorks";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import TextAnimation from "@/components/TextAnimation";

export default function Home() {
  return (
    <>
      {/* GSAP ScrollTrigger Text & Counter Animations */}
      <TextAnimation />

      <main>
        {/* 1. Main Header & Navigation Bar (index.html lines 49-105) */}
        <Header />

        {/* 2. Hero Section (index.html lines 107-207) */}
        <HeroSection />

        {/* 3. About Us Section (index.html lines 209-345) */}
        <AboutSection />

        {/* 3.5 Trust Corridor — Regional Growth Roadmap & Energy Major Approvals */}
        <TrustCorridor />

        {/* 4. Sectors We Serve Interactive Showcase */}
        <SectorsScrollShowcase />

        {/* 5. Why Choose Us & Intro Video Showcase (index.html lines 458-567) */}
        {/* <WhyChooseUs /> */}

        {/* 6. Our Chefs Section (index.html lines 569-678) */}
        {/* <ChefsSection /> */}

        {/* 7. How It Works Section (index.html lines 680-786) */}
        {/* <HowItWorks /> */}

        {/* 8. Our Testimonials Section (index.html lines 788-1004) */}
        <TestimonialsSection />

        {/* 9. Photo Gallery Section (index.html lines 1006-1148) */}
        {/* <GallerySection /> */}

        {/* 10. Our Pricing Section (index.html lines 1150-1278) */}
        {/* <PricingSection /> */}

        {/* 11. Our FAQ Section (index.html lines 1280-1418) */}
        <FaqSection />

        {/* 12. Our Blog Section (index.html lines 1420-1503) */}
        <BlogSection />
      </main>

      {/* 13. Main Footer (index.html lines 1506-1609) */}
      <Footer />
    </>
  );
}
