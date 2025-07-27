"use client";

import WorkHero from "@/components/our-work/WorkHero";
import Portfolio from "@/components/our-work/Portfolio";
import ProjectStats from "@/components/our-work/ProjectStats";
import CTA from "@/components/home/CTA";

export default function OurWorkPage() {
  return (
    <>
      <WorkHero />
      <Portfolio />
      <ProjectStats />
      <CTA />
    </>
  );
}