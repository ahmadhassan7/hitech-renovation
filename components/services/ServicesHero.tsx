"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ServicesHero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero content
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".services-hero-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
      .from(".services-hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.5");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[70vh] flex items-center bg-secondary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&h=800&fit=crop"
          alt="Construction services"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-secondary/80" />
      </div>

      <div className="container relative z-10 w-full py-20">
        <div className="max-w-4xl" style={{ paddingTop: "8rem" }}>
          <h1 className="mb-6">
            <div className="services-hero-title display-2 text-primary">
              OUR EXPERTISE
            </div>
            <div className="services-hero-title display-1 text-light">
              SERVICES
            </div>
            <div className="services-hero-title display-2 text-light opacity-60">
              That Build Dreams
            </div>
          </h1>
          
          <p className="services-hero-subtitle body-lg text-light/80 max-w-3xl">
            From residential renovations to large-scale commercial projects, 
            we deliver comprehensive construction solutions with unmatched quality 
            and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;