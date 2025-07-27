"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We meet to understand your vision, requirements, and budget. This is where your dream begins to take shape.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "Design & Planning",
      description: "Our team creates detailed plans and 3D visualizations, ensuring every detail aligns with your expectations.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Approvals & Permits",
      description: "We handle all necessary permits and approvals, navigating regulations so you don't have to worry.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: "04",
      title: "Construction Phase",
      description: "Our skilled craftsmen bring the plans to life with precision, quality materials, and attention to detail.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      number: "05",
      title: "Quality Inspection",
      description: "Rigorous quality checks ensure everything meets our high standards and building codes.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      number: "06",
      title: "Project Handover",
      description: "We walk you through your completed project and provide all documentation and warranties.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".process-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Process steps animation
      gsap.from(".process-step", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".process-grid",
          start: "top 80%",
        },
      });

      // Line animation
      const lines = gsap.utils.toArray(".process-line");
      lines.forEach((line: any) => {
        gsap.from(line, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
          scrollTrigger: {
            trigger: line,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-light">
      <div className="container">
        <div className="process-header text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider">How We Work</span>
          <h2 className="display-2 text-secondary mt-2 mb-4">
            Our Proven Process
          </h2>
          <p className="body-lg text-secondary/70 max-w-3xl mx-auto">
            A systematic approach that ensures transparency, quality, and timely delivery 
            on every project we undertake.
          </p>
        </div>

        <div className="process-grid grid-12 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="process-step relative">
                {/* Connecting Line */}
                {index % 3 !== 2 && (
                  <div className="process-line hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-primary/20 transform -translate-y-1/2 z-0" />
                )}

                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  {/* Number */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-secondary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-secondary/70">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;