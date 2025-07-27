"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

interface ServiceDetailHeroProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const ServiceDetailHero = ({ title, subtitle, description, image }: ServiceDetailHeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".service-detail-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
      .from(".service-detail-desc", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.5")
      .from(".breadcrumb", {
        y: 20,
        opacity: 0,
        duration: 0.6,
      }, "-=0.6");

      // Parallax effect
      gsap.to(".hero-image", {
        yPercent: 30,
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
    <section ref={sectionRef} className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={title}
          className="hero-image w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 w-full py-20">
        <div className="max-w-4xl" style={{ paddingTop: "8rem" }}>
          {/* Breadcrumb */}
          <div className="breadcrumb flex items-center gap-2 text-light/70 mb-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-primary">{title}</span>
          </div>

          <h1 className="mb-6">
            <div className="service-detail-title display-2 text-primary">
              {subtitle}
            </div>
            <div className="service-detail-title display-1 text-light">
              {title}
            </div>
          </h1>
          
          <p className="service-detail-desc body-lg text-light/80 max-w-3xl">
            {description}
          </p>

          <div className="flex gap-4 mt-8">
            <Link href="/contact" className="btn btn-primary">
              <span>Get Started</span>
            </Link>
            <Link href="/our-work" className="btn btn-outline border-light text-light hover:bg-light hover:text-dark">
              <span>View Portfolio</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailHero;