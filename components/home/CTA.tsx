"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 md:py-16 mb-16 md:mb-20 bg-secondary text-light">
      <div className="container">
        <div className="cta-content flex flex-col lg-flex-row items-center justify-between gap-6 md:gap-8">
          {/* Left side - Title */}
          <div className="text-center lg-text-left">
            <h2 className="text-3xl md:display-3 mb-0">
              Ready to Start Your Project?
            </h2>
          </div>
          
          {/* Right side - Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link href="/contact" className="btn btn-primary text-sm md:text-base">
              <span>Let's Talk</span>
              <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-light-60 mb-1">or call us</p>
              <a href="tel:+16041234567" className="text-base sm:text-lg font-semibold hover:text-primary transition-colors">
                (604) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;