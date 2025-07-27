"use client";

import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function RenovationsPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  const renovationTypes = [
    {
      title: "Kitchen Renovations",
      description: "Transform the heart of your home with modern designs, premium appliances, and functional layouts that inspire culinary creativity.",
      icon: "🍳",
      features: ["Custom Cabinetry", "Stone Countertops", "Modern Appliances", "Smart Storage"]
    },
    {
      title: "Bathroom Remodeling",
      description: "Create your personal spa retreat with luxurious fixtures, elegant tilework, and innovative storage solutions.",
      icon: "🚿",
      features: ["Walk-in Showers", "Freestanding Tubs", "Heated Floors", "Custom Vanities"]
    },
    {
      title: "Basement Finishing",
      description: "Unlock your home's potential by transforming unused space into entertainment areas, home offices, or rental suites.",
      icon: "🏠",
      features: ["Home Theaters", "Wine Cellars", "Guest Suites", "Recreational Rooms"]
    },
    {
      title: "Whole Home Renovations",
      description: "Complete transformation of your living space with cohesive design, structural improvements, and modern amenities.",
      icon: "🏡",
      features: ["Open Concepts", "Smart Home Tech", "Energy Upgrades", "Structural Changes"]
    }
  ];

  const process = [
    { step: "01", title: "Consultation", description: "We discuss your vision, needs, and budget to create a tailored renovation plan." },
    { step: "02", title: "Design & Planning", description: "Our team creates detailed designs and obtains necessary permits for your project." },
    { step: "03", title: "Construction", description: "Skilled craftsmen bring your vision to life with precision and attention to detail." },
    { step: "04", title: "Final Walkthrough", description: "We ensure every detail meets your expectations before project completion." }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Types animation
      gsap.from(".renovation-type", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".renovation-types",
          start: "top 80%",
        },
      });

      // Process animation
      gsap.from(".process-step", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".process-section",
          start: "top 80%",
        },
      });

      // Stats animation
      gsap.from(".stat-item", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 85%",
        },
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <ServiceDetailHero
        title="Renovations"
        subtitle="Transform Your Space"
        description="Breathe new life into your property with our comprehensive renovation services. From minor updates to complete transformations, we handle every detail with expertise and care."
        image="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1920&h=1080&fit=crop"
      />

      <div ref={contentRef}>
        {/* Renovation Types */}
        <section className="section bg-light">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="display-2 text-secondary mb-4">Our Renovation Services</h2>
              <p className="body-lg text-secondary/70 max-w-3xl mx-auto">
                Whether you're updating a single room or transforming your entire home, 
                we bring expertise and craftsmanship to every project.
              </p>
            </div>

            <div className="renovation-types grid-12 gap-8">
              {renovationTypes.map((type, index) => (
                <div key={index} className="renovation-type col-span-12 md:col-span-6">
                  <div className="group relative bg-white rounded-3xl overflow-hidden h-full shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative p-8">
                      <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{type.title}</h3>
                      <p className="text-secondary/70 mb-6 leading-relaxed">{type.description}</p>
                      
                      {/* Features grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {type.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-sm text-secondary/80">{feature}</span>
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

        {/* Process */}
        <section className="process-section section bg-secondary text-light">
          <div className="container">
            <div className="grid-12 gap-12 items-center">
              <div className="col-span-12 lg:col-span-5">
                <h2 className="display-2 mb-6">Our Renovation Process</h2>
                <p className="body-lg text-light/80 mb-8">
                  We've refined our process over 16 years to ensure smooth, 
                  stress-free renovations that deliver exceptional results.
                </p>
                <Link href="/contact" className="btn btn-primary">
                  <span>Start Your Renovation</span>
                </Link>
              </div>

              <div className="col-span-12 lg:col-span-7">
                <div className="space-y-8">
                  {process.map((item, index) => (
                    <div key={index} className="process-step flex gap-6 items-start">
                      <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl font-bold text-white">{parseInt(item.step)}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-light/70">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section bg-light">
          <div className="container">
            <div className="grid-12 gap-12 items-center">
              <div className="col-span-12 lg:col-span-6">
                <img
                  src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&h=600&fit=crop"
                  alt="Renovation in progress"
                  className="rounded-3xl w-full"
                />
              </div>
              <div className="col-span-12 lg:col-span-6">
                <h2 className="display-2 text-secondary mb-6">Why Choose HITECH for Your Renovation?</h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">16+ Years of Excellence</h3>
                      <p className="text-secondary/70">Proven track record of successful renovations across Vancouver.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Fixed-Price Guarantee</h3>
                      <p className="text-secondary/70">No surprises - your quoted price is your final price.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Licensed & Insured</h3>
                      <p className="text-secondary/70">Full protection and peace of mind for your investment.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Warranty Protection</h3>
                      <p className="text-secondary/70">Comprehensive warranty on all work and materials.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats-section section bg-primary text-white">
          <div className="container">
            <div className="grid-12 gap-8 text-center">
              <div className="stat-item col-span-6 md:col-span-3">
                <div className="display-1 mb-2">200+</div>
                <p className="text-lg">Renovations Completed</p>
              </div>
              <div className="stat-item col-span-6 md:col-span-3">
                <div className="display-1 mb-2">100%</div>
                <p className="text-lg">Client Satisfaction</p>
              </div>
              <div className="stat-item col-span-6 md:col-span-3">
                <div className="display-1 mb-2">16+</div>
                <p className="text-lg">Years Experience</p>
              </div>
              <div className="stat-item col-span-6 md:col-span-3">
                <div className="display-1 mb-2">30+</div>
                <p className="text-lg">Expert Craftsmen</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-secondary text-light text-center">
          <div className="container">
            <h2 className="display-2 mb-4">Ready to Transform Your Space?</h2>
            <p className="body-lg text-light/80 max-w-2xl mx-auto mb-8">
              Let's discuss your renovation project and bring your vision to life.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary btn-lg">
                <span>Get Free Quote</span>
              </Link>
              <Link href="/our-work" className="btn btn-outline border-light text-light hover:bg-light hover:text-dark btn-lg">
                <span>View Our Work</span>
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