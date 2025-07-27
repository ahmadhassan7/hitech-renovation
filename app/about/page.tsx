"use client";

import AboutHero from "@/components/about/AboutHero";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import TeamCulture from "@/components/about/TeamCulture";
import CTA from "@/components/home/CTA";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <Values />
      <TeamCulture />
      <CTA />
    </>
  );
}