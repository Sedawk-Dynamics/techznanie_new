"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import DomainsSection from "@/components/domains-section";
import CareerCTASection from "@/components/career-cta-section";
import Testimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import LoadingScreen from "@/components/loading-screen";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if loading screen has been shown in this session
    const hasLoaded = sessionStorage.getItem("techznanie-loaded");

    if (!hasLoaded) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("techznanie-loaded", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DomainsSection />
      <CareerCTASection />
      <Testimonials />
      <Footer />
    </div>
  );
}
