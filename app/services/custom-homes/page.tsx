"use client";

import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CustomHomesPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  const homeFeatures = [
    {
      title: "Architectural Design",
      description: "Work with top architects to create a home that reflects your unique style and meets your specific needs.",
      icon: "📐",
      highlights: ["Custom Floor Plans", "3D Visualization", "Permit Drawings", "Interior Design"]
    },
    {
      title: "Smart Home Technology",
      description: "Integrate the latest smart home features for convenience, security, and energy efficiency.",
      icon: "🏠",
      highlights: ["Home Automation", "Security Systems", "Energy Management", "Entertainment Systems"]
    },
    {
      title: "Sustainable Building",
      description: "Build an eco-friendly home with sustainable materials and energy-efficient systems.",
      icon: "🌱",
      highlights: ["Solar Integration", "Efficient HVAC", "Green Materials", "Water Conservation"]
    },
    {
      title: "Premium Finishes",
      description: "Select from high-end materials and finishes to create a truly luxurious living space.",
      icon: "✨",
      highlights: ["Hardwood Floors", "Stone Counters", "Custom Millwork", "Designer Fixtures"]
    }
  ];

  const buildProcess = [
    { phase: "Planning", duration: "2-3 months", description: "Design development, permits, and approvals" },
    { phase: "Foundation", duration: "1-2 months", description: "Site preparation and foundation work" },
    { phase: "Framing", duration: "2-3 months", description: "Structure, roofing, and exterior walls" },
    { phase: "Systems", duration: "1-2 months", description: "Electrical, plumbing, and HVAC installation" },
    { phase: "Finishing", duration: "3-4 months", description: "Interior finishes and final details" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Features animation
      gsap.from(".home-feature", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".features-section",
          start: "top 80%",
        },
      });

      // Timeline animation
      gsap.from(".timeline-phase", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".build-timeline",
          start: "top 85%",
        },
      });

      // Benefits animation
      gsap.from(".benefit-card", {
        x: -60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".benefits-section",
          start: "top 80%",
        },
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <ServiceDetailHero
        title="Custom Homes"
        subtitle="Build Your Dream"
        description="From concept to completion, we create custom homes that perfectly match your vision, lifestyle, and budget. Experience the joy of living in a space designed specifically for you."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop"
      />

      <div ref={contentRef}>
        {/* Features Section */}
        <section className="features-section section bg-light">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="display-2 text-secondary mb-4">Building Excellence Into Every Home</h2>
              <p className="body-lg text-secondary/70 max-w-3xl mx-auto">
                Your custom home should be as unique as you are. We combine innovative design, 
                quality materials, and expert craftsmanship to create your perfect living space.
              </p>
            </div>

            <div className="grid-12 gap-8">
              {homeFeatures.map((feature, index) => (
                <div key={index} className="home-feature col-span-12 md:col-span-6">
                  <div className="group relative bg-white rounded-3xl overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative p-8">
                      <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-secondary/70 mb-6 leading-relaxed">{feature.description}</p>
                      
                      {/* Features grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {feature.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-sm text-secondary/80">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Build Timeline */}
        <section className="section bg-secondary text-light">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="display-2 mb-4">Your Home Building Journey</h2>
              <p className="body-lg text-light/80 max-w-3xl mx-auto">
                From breaking ground to handing over the keys, we manage every phase 
                of construction with precision and transparency.
              </p>
            </div>

            <div className="build-timeline max-w-5xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 right-0 top-1/2 h-1 bg-light/20 -translate-y-1/2" />
                
                {/* Timeline phases */}
                <div className="relative grid grid-cols-5 gap-4">
                  {buildProcess.map((phase, index) => (
                    <div key={index} className="timeline-phase text-center">
                      <div className="bg-primary rounded-full w-8 h-8 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <h3 className="font-bold mb-1">{phase.phase}</h3>
                      <p className="text-sm text-primary mb-2">{phase.duration}</p>
                      <p className="text-xs text-light/70">{phase.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16 text-center">
                <p className="text-xl text-light/80 mb-6">
                  Average timeline: 9-14 months from permit to completion
                </p>
                <Link href="/contact" className="btn btn-primary">
                  <span>Start Planning Your Home</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="benefits-section section bg-light">
          <div className="container">
            <div className="grid-12 gap-12 items-center">
              <div className="col-span-12 lg:col-span-6">
                <h2 className="display-2 text-secondary mb-6">The HITECH Advantage</h2>
                <div className="space-y-6">
                  <div className="benefit-card flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Fixed-Price Contracts</h3>
                      <p className="text-secondary/70">No cost overruns or surprises. Your budget is protected from day one.</p>
                    </div>
                  </div>
                  <div className="benefit-card flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">On-Time Delivery</h3>
                      <p className="text-secondary/70">We respect your time with realistic schedules and consistent communication.</p>
                    </div>
                  </div>
                  <div className="benefit-card flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Comprehensive Warranty</h3>
                      <p className="text-secondary/70">Industry-leading warranty protection for your peace of mind.</p>
                    </div>
                  </div>
                  <div className="benefit-card flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Dedicated Team</h3>
                      <p className="text-secondary/70">One project manager from start to finish ensures seamless communication.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop"
                  alt="Custom home interior"
                  className="rounded-3xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section bg-primary text-white">
          <div className="container">
            <div className="grid-12 gap-8 text-center">
              <div className="col-span-6 md:col-span-3">
                <div className="display-1 mb-2">150+</div>
                <p className="text-lg">Custom Homes Built</p>
              </div>
              <div className="col-span-6 md:col-span-3">
                <div className="display-1 mb-2">$2M+</div>
                <p className="text-lg">Average Home Value</p>
              </div>
              <div className="col-span-6 md:col-span-3">
                <div className="display-1 mb-2">100%</div>
                <p className="text-lg">On-Time Completion</p>
              </div>
              <div className="col-span-6 md:col-span-3">
                <div className="display-1 mb-2">100%</div>
                <p className="text-lg">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-secondary text-light text-center">
          <div className="container">
            <h2 className="display-2 mb-4">Ready to Build Your Dream Home?</h2>
            <p className="body-lg text-light/80 max-w-2xl mx-auto mb-8">
              Let's start with a conversation about your vision, lifestyle, and budget.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary btn-lg">
                <span>Schedule Consultation</span>
              </Link>
              <Link href="/our-work" className="btn btn-outline border-light text-light hover:bg-light hover:text-dark btn-lg">
                <span>View Custom Homes</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      {/* Spacer for footer */}
      <div className="h-24 bg-light"></div>
    </>
  );
}