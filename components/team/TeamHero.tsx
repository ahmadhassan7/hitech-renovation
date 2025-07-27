"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TeamHero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero content
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".team-hero-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
      .from(".team-hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.5");

      // Floating shapes animation
      gsap.to(".shape-1", {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".shape-2", {
        rotate: -360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[70vh] flex items-center bg-secondary text-light overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-5">
        <div className="shape-1 w-full h-full rounded-full border-4 border-primary" />
      </div>
      <div className="absolute bottom-10 left-10 w-48 h-48 opacity-5">
        <div className="shape-2 w-full h-full rounded-full bg-primary" />
      </div>

      <div className="container relative z-10 w-full py-20">
        <div className="max-w-4xl mx-auto text-center" style={{ paddingTop: "8rem" }}>
          <h1 className="mb-6">
            <div className="team-hero-title display-2 text-primary">
              MEET THE TEAM
            </div>
            <div className="team-hero-title display-1 text-light">
              PEOPLE
            </div>
            <div className="team-hero-title display-2 text-light opacity-60">
              Behind The Projects
            </div>
          </h1>
          
          <p className="team-hero-subtitle body-lg text-light/80 max-w-3xl mx-auto">
            Our success is built on the expertise, dedication, and passion of our team. 
            Meet the professionals who make HITECH a leader in Vancouver&apos;s construction industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;