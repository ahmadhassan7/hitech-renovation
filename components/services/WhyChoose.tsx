"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    {
      title: "Expert Craftsmanship",
      description: "Our skilled professionals bring years of experience and dedication to every project.",
      stat: "50+",
      statLabel: "Expert Craftsmen",
    },
    {
      title: "On-Time Delivery",
      description: "We respect your time and consistently deliver projects on or ahead of schedule.",
      stat: "100%",
      statLabel: "On-Time Completion",
    },
    {
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with detailed quotes and no hidden costs or surprises.",
      stat: "100%",
      statLabel: "Price Transparency",
    },
    {
      title: "Sustainable Practices",
      description: "Eco-friendly construction methods and materials for a better tomorrow.",
      stat: "75%",
      statLabel: "Recycled Materials",
    },
    {
      title: "Licensed & Insured",
      description: "Fully licensed, bonded, and insured for your complete peace of mind.",
      stat: "$5M",
      statLabel: "Insurance Coverage",
    },
    {
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority, reflected in our stellar reviews.",
      stat: "5★",
      statLabel: "Average Rating",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".why-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Benefits animation
      const benefits = gsap.utils.toArray<HTMLElement>(".benefit-card");
      benefits.forEach((card, index) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });

        // Hover animation
        const stat = card.querySelector(".benefit-stat");
        card.addEventListener("mouseenter", () => {
          gsap.to(stat, {
            scale: 1.2,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(stat, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-accent">
      <div className="container">
        <div className="why-header text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider">Why HITECH</span>
          <h2 className="display-2 text-secondary mt-2 mb-4">
            The HITECH Advantage
          </h2>
          <p className="body-lg text-secondary/70 max-w-3xl mx-auto">
            When you choose HITECH, you&apos;re choosing a partner committed to excellence, 
            innovation, and your complete satisfaction.
          </p>
        </div>

        <div className="grid-12 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="benefit-card bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full group">
                {/* Stat */}
                <div className="mb-6">
                  <div className="benefit-stat display-1 text-primary">
                    {benefit.stat}
                  </div>
                  <p className="text-sm text-secondary/60 uppercase tracking-wider">
                    {benefit.statLabel}
                  </p>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-secondary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-secondary/70">
                  {benefit.description}
                </p>

                {/* Decorative Element */}
                <div className="mt-6 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="body-lg text-secondary/70 mb-8">
            Ready to experience the HITECH difference?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center btn btn-primary"
          >
            <span>Start Your Project</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;