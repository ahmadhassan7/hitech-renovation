"use client";

import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import Process from "@/components/services/Process";
import WhyChoose from "@/components/services/WhyChoose";
import CTA from "@/components/home/CTA";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <Process />
      <WhyChoose />
      <CTA />
    </>
  );
}