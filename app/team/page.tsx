"use client";

import TeamHero from "@/components/team/TeamHero";
import TeamMembers from "@/components/team/TeamMembers";
import JoinTeam from "@/components/team/JoinTeam";
import CTA from "@/components/home/CTA";

export default function TeamPage() {
  return (
    <>
      <TeamHero />
      <TeamMembers />
      <CTA />
      {/* Spacer for footer */}
      <div className="h-24 bg-light"></div>
    </>
  );
}