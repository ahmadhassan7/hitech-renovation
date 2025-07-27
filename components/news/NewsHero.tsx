"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NewsHero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero content
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".news-hero-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
      .from(".news-hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.5")
      .from(".featured-badge", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, "-=0.4");

      // Parallax effect on scroll
      gsap.to(".hero-bg-image", {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[70vh] flex items-center bg-secondary text-light overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`,
        }} />
      </div>

      <div className="container relative z-10 w-full py-20">
        <div className="max-w-4xl" style={{ paddingTop: "8rem" }}>
          <div className="featured-badge inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span>Latest Updates</span>
          </div>
          
          <h1 className="mb-6">
            <div className="news-hero-title display-2 text-primary">
              NEWS & INSIGHTS
            </div>
            <div className="news-hero-title display-1 text-light">
              STAY INFORMED
            </div>
          </h1>
          
          <p className="news-hero-subtitle body-lg text-light/80 max-w-3xl">
            Get the latest updates on construction trends, company news, project spotlights, 
            and expert tips from the HITECH team. Your source for everything construction in Vancouver.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;