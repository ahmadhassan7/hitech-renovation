"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
      .from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.5")
      .fromTo(".hero-btn", 
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
        }, 
        "-=0.4"
      );

      // Background image parallax
      gsap.to(".hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[85vh] h-[85vh] flex items-center overflow-hidden bg-light">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="hero-bg absolute inset-0 scale-110">
          <img
            src="https://images.unsplash.com/photo-1541976590-713941681591?w=1920&h=1080&fit=crop"
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-dark/50" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container">
          <div className="max-w-4xl pt-24 md:pt-32">
            <h1 className="mb-4 md:mb-6">
              <div className="hero-title display-1 text-light -mt-4 md:-mt-8">
                BUILDING
              </div>
              <div className="hero-title display-1 text-primary">
                EXCELLENCE
              </div>
              <div className="hero-title display-2 text-light">
                Since 2009
              </div>
            </h1>
            
            <p className="hero-subtitle body-lg text-light/90 max-w-2xl mb-6 md:mb-8">
              Premier renovation and construction services across Vancouver and Greater BC. 
              Transform your space with innovation, quality, and unmatched craftsmanship.
            </p>

            <div className="flex gap-3 md:gap-4 flex-wrap">
              <Link href="/contact" className="hero-btn btn btn-primary text-sm md:text-base">
                <span>Start Your Project</span>
              </Link>
              <Link href="/our-work" className="hero-btn btn btn-outline border-light text-light hover:bg-light hover:text-dark text-sm md:text-base">
                <span>View Our Work</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;