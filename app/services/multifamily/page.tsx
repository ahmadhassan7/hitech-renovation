"use client";

import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function MultifamilyPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  const projectTypes = [
    {
      title: "Apartment Complexes",
      description: "Design and build modern apartment communities with amenities that attract and retain quality tenants.",
      stats: { units: "50-500", timeline: "12-18 months" },
      features: ["Luxury Amenities", "Energy Efficiency", "Smart Home Ready", "Community Spaces"]
    },
    {
      title: "Condominiums",
      description: "Create upscale condominium developments that offer pride of ownership and strong investment value.",
      stats: { units: "20-200", timeline: "14-20 months" },
      features: ["High-End Finishes", "Private Balconies", "Secure Parking", "Concierge Services"]
    },
    {
      title: "Townhouse Communities",
      description: "Build connected communities that balance privacy with neighborhood living.",
      stats: { units: "10-100", timeline: "10-16 months" },
      features: ["Private Entrances", "Attached Garages", "Yards & Patios", "HOA Amenities"]
    },
    {
      title: "Mixed-Use Developments",
      description: "Integrate residential, retail, and office spaces to create vibrant live-work-play environments.",
      stats: { units: "100-500", timeline: "18-24 months" },
      features: ["Retail Ground Floor", "Office Spaces", "Residential Units", "Public Plazas"]
    }
  ];

  const developmentFeatures = [
    {
      title: "Turnkey Development",
      description: "From land acquisition to final occupancy, we manage every aspect of your multifamily project."
    },
    {
      title: "ROI Focused",
      description: "Design decisions driven by market analysis to maximize rental income and property value."
    },
    {
      title: "Sustainable Design",
      description: "Green building practices that reduce operating costs and attract eco-conscious tenants."
    },
    {
      title: "Community Planning",
      description: "Thoughtful layouts and amenities that foster community and enhance resident satisfaction."
    },
    {
      title: "Quality Construction",
      description: "Durable materials and expert craftsmanship minimize maintenance and maximize longevity."
    },
    {
      title: "Modern Technology",
      description: "Smart building systems for efficient management and enhanced resident experience."
    }
  ];

  const amenities = [
    "Fitness Centers", "Swimming Pools", "Rooftop Terraces", "Co-Working Spaces",
    "Pet Facilities", "Package Rooms", "EV Charging", "Bike Storage",
    "Community Gardens", "BBQ Areas", "Playgrounds", "Security Systems"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Project types animation
      gsap.from(".project-type", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".project-types",
          start: "top 80%",
        },
      });

      // Features grid animation
      gsap.from(".dev-feature", {
        scale: 0.9,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 85%",
        },
      });

      // Amenities animation
      gsap.from(".amenity-tag", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".amenities-section",
          start: "top 85%",
        },
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <ServiceDetailHero
        title="Multifamily"
        subtitle="Building Communities"
        description="Create thriving residential communities that deliver exceptional living experiences and strong investment returns. From apartments to mixed-use developments, we build spaces where people love to live."
        image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop"
      />

      <div ref={contentRef}>
        {/* Project Types */}
        <section className="section bg-light">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="display-2 text-secondary mb-4">Multifamily Development Expertise</h2>
              <p className="body-lg text-secondary/70 max-w-3xl mx-auto">
                We specialize in creating residential communities that balance resident satisfaction 
                with operational efficiency and investment performance.
              </p>
            </div>

            <div className="project-types grid-12 gap-8">
              {projectTypes.map((type, index) => (
                <div key={index} className="project-type col-span-12 md:col-span-6">
                  <div className="bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-bold text-secondary mb-3">{type.title}</h3>
                    <p className="text-secondary/70 mb-4">{type.description}</p>
                    
                    <div className="flex gap-6 mb-6">
                      <div>
                        <p className="text-sm text-secondary/60">Typical Size</p>
                        <p className="text-lg font-bold text-primary">{type.stats.units} units</p>
                      </div>
                      <div>
                        <p className="text-sm text-secondary/60">Timeline</p>
                        <p className="text-lg font-bold text-primary">{type.stats.timeline}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm text-secondary/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Development Features */}
        <section className="section bg-secondary text-light">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="display-2 mb-4">Why Developers Choose HITECH</h2>
              <p className="body-lg text-light/80 max-w-3xl mx-auto">
                Our comprehensive approach to multifamily construction delivers projects 
                that succeed in the market and stand the test of time.
              </p>
            </div>

            <div className="features-grid grid-12 gap-8">
              {developmentFeatures.map((feature, index) => (
                <div key={index} className="dev-feature col-span-12 md:col-span-6 lg:col-span-4">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {index === 0 && (
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )}
                      {index === 4 && (
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      )}
                      {index === 5 && (
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-light/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="section bg-light">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="display-2 text-secondary mb-4">Development Process</h2>
              <p className="body-lg text-secondary/70 max-w-3xl mx-auto">
                A proven 5-phase approach to deliver your multifamily project on time and on budget
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="space-y-8">
                {[
                  { 
                    phase: "Pre-Development", 
                    time: "2-4 months", 
                    description: "We begin with comprehensive site analysis and feasibility studies to ensure your project's success from the start."
                  },
                  { 
                    phase: "Design & Permitting", 
                    time: "3-6 months", 
                    description: "Our architects and engineers create detailed plans while we navigate the permit approval process."
                  },
                  { 
                    phase: "Site Preparation", 
                    time: "1-2 months", 
                    description: "Site clearing, grading, and utility connections lay the groundwork for construction."
                  },
                  { 
                    phase: "Construction", 
                    time: "12-18 months", 
                    description: "The main building phase where your vision takes shape, from foundation to final finishes."
                  },
                  { 
                    phase: "Final Phase", 
                    time: "1-2 months", 
                    description: "Thorough inspections, landscaping, and final touches prepare your property for occupancy."
                  }
                ].map((item, index) => (
                  <div key={index} className="group">
                    <div className="flex gap-8 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center relative overflow-hidden group-hover:shadow-xl transition-shadow">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                          <span className="relative text-2xl font-bold text-primary">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1 bg-white rounded-3xl p-8 shadow-lg group-hover:shadow-xl transition-shadow">
                        <div className="flex items-baseline justify-between mb-4">
                          <h3 className="text-2xl font-bold text-secondary">{item.phase}</h3>
                          <span className="text-primary font-semibold bg-primary/10 px-4 py-2 rounded-full">
                            {item.time}
                          </span>
                        </div>
                        <p className="text-secondary/70 text-lg leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Connector line */}
                    {index < 4 && (
                      <div className="ml-10 h-8 w-0.5 bg-primary/20" />
                    )}
                  </div>
                ))}
              </div>
              
              {/* Summary */}
              <div className="mt-16 bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Complete Development Timeline</h3>
                <div className="flex items-center justify-center gap-12">
                  <div>
                    <p className="text-5xl font-bold">18-32</p>
                    <p className="text-lg opacity-90">months total</p>
                  </div>
                  <div className="w-px h-16 bg-white/30" />
                  <div className="text-left">
                    <p className="font-semibold">From initial concept</p>
                    <p className="font-semibold">to move-in ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="amenities-section section bg-primary text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="display-2 mb-4">Popular Amenities We Build</h2>
              <p className="body-lg text-white/80 max-w-3xl mx-auto">
                Modern amenities that attract residents and justify premium rents
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {amenities.map((amenity, index) => (
                <span key={index} className="amenity-tag px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="section bg-light">
          <div className="container">
            <div className="grid-12 gap-12 items-center">
              <div className="col-span-12 lg:col-span-6">
                <h2 className="display-2 text-secondary mb-6">Building Success, One Community at a Time</h2>
                <p className="body-lg text-secondary/70 mb-8">
                  Our multifamily projects consistently deliver strong returns through 
                  thoughtful design, quality construction, and market-focused amenities.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="display-3 text-primary mb-2">1000+</div>
                    <p className="text-secondary">Units Completed</p>
                  </div>
                  <div>
                    <div className="display-3 text-primary mb-2">25+</div>
                    <p className="text-secondary">Communities Built</p>
                  </div>
                  <div>
                    <div className="display-3 text-primary mb-2">96%</div>
                    <p className="text-secondary">Average Occupancy</p>
                  </div>
                  <div>
                    <div className="display-3 text-primary mb-2">$500M+</div>
                    <p className="text-secondary">Project Value</p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                  alt="Modern apartment complex"
                  className="rounded-3xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-secondary text-light text-center">
          <div className="container">
            <h2 className="display-2 mb-4">Let's Build Your Next Community</h2>
            <p className="body-lg text-light/80 max-w-2xl mx-auto mb-8">
              Partner with HITECH to create multifamily developments that excel in the market
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary btn-lg">
                <span>Discuss Your Project</span>
              </Link>
              <Link href="/our-work" className="btn btn-outline border-light text-light hover:bg-light hover:text-dark btn-lg">
                <span>View Portfolio</span>
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