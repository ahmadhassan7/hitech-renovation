"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ContactHero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero content
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".contact-hero-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
      .from(".contact-hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.5")
      .from(".contact-hero-info", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      }, "-=0.4");
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
        <div className="max-w-4xl mx-auto text-center" style={{ paddingTop: "8rem" }}>
          <h1 className="mb-6">
            <div className="contact-hero-title display-2 text-primary">
              LET'S BUILD
            </div>
            <div className="contact-hero-title display-1 text-light">
              TOGETHER
            </div>
          </h1>
          
          <p className="contact-hero-subtitle body-lg text-light/80 max-w-3xl mx-auto mb-12">
            Ready to transform your vision into reality? Get in touch for a free consultation 
            and discover how HITECH can bring your project to life.
          </p>

          {/* Quick Contact Info */}
          <div className="flex flex-wrap justify-center gap-8">
            <a href="tel:+16041234567" className="contact-hero-info flex items-center gap-3 text-light hover:text-primary transition-colors">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-light/60">Call Us</p>
                <p className="font-semibold">(604) 123-4567</p>
              </div>
            </a>

            <a href="mailto:info@hitechrenovations.ca" className="contact-hero-info flex items-center gap-3 text-light hover:text-primary transition-colors">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-light/60">Email Us</p>
                <p className="font-semibold">info@hitechrenovations.ca</p>
              </div>
            </a>

            <div className="contact-hero-info flex items-center gap-3 text-light">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-light/60">Business Hours</p>
                <p className="font-semibold">Mon-Fri: 8AM-6PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;