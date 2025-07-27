"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AboutHero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero content
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".about-hero-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
      .from(".about-hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[70vh] flex items-center bg-secondary text-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
        }} />
      </div>

      <div className="container relative z-10 w-full py-20">
        <div className="max-w-4xl" style={{ paddingTop: "8rem" }}>
          <h1 className="mb-6">
            <div className="about-hero-title display-2 text-primary">
              OUR STORY
            </div>
            <div className="about-hero-title display-1 text-light">
              BUILDING TRUST
            </div>
            <div className="about-hero-title display-2 text-light opacity-60">
              Since 2009
            </div>
          </h1>
          
          <p className="about-hero-subtitle body-lg text-light/80 max-w-3xl">
            From humble beginnings to becoming Vancouver's trusted construction partner. 
            Discover how our commitment to excellence has shaped our journey and continues 
            to drive us forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;