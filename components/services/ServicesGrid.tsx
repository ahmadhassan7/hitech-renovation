"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const ServicesGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      id: "renovations",
      href: "/services/renovations",
      title: "Renovations",
      description: "Transform your existing space into something extraordinary. From kitchen remodels to complete home makeovers.",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop",
      features: ["Kitchen & Bath", "Interior Design", "Home Additions", "Structural Updates"],
      color: "from-amber-500 to-orange-600",
      stats: { projects: "200+", satisfaction: "100%" }
    },
    {
      id: "home-building",
      href: "/services/custom-homes",
      title: "Custom Homes",
      description: "Build your dream home from the ground up with personalized design and superior craftsmanship.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      features: ["Architectural Design", "Site Development", "Energy Efficiency", "Smart Homes"],
      color: "from-emerald-500 to-teal-600",
      stats: { homes: "150+", years: "16+" }
    },
    {
      id: "commercial",
      href: "/services/commercial",
      title: "Commercial",
      description: "Create inspiring business spaces that enhance productivity and leave lasting impressions.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      features: ["Office Spaces", "Retail Stores", "Restaurants", "Medical Facilities"],
      color: "from-blue-500 to-indigo-600",
      stats: { sqft: "500K+", clients: "80+" }
    },
    {
      id: "multifamily",
      href: "/services/multifamily",
      title: "Multifamily",
      description: "Develop modern living communities that balance comfort, sustainability, and investment value.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      features: ["Apartments", "Condominiums", "Townhouses", "Mixed-Use"],
      color: "from-purple-500 to-pink-600",
      stats: { units: "1000+", communities: "25+" }
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".services-grid-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Cards stagger animation
      gsap.from(".service-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: {
          amount: 0.8,
          from: "start",
        },
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
      });

      // Parallax effect on images
      const cards = gsap.utils.toArray(".service-card");
      cards.forEach((card: any) => {
        const image = card.querySelector(".service-image");
        
        gsap.to(image, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

        // Hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card.querySelector(".service-overlay"), {
            opacity: 1,
            duration: 0.3,
          });
          gsap.to(card.querySelector(".service-content"), {
            y: -20,
            duration: 0.3,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card.querySelector(".service-overlay"), {
            opacity: 0,
            duration: 0.3,
          });
          gsap.to(card.querySelector(".service-content"), {
            y: 0,
            duration: 0.3,
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="services-grid-header text-center mb-20">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">What We Do</span>
          <h2 className="display-2 mt-2 mb-4 text-secondary">
            Comprehensive Construction Services
          </h2>
          <p className="body-lg text-secondary/70 max-w-3xl mx-auto">
            Four specialized divisions, one commitment to excellence. Choose the service that fits your vision.
          </p>
        </div>

        <div className="services-grid grid-12 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className="col-span-12 md:col-span-6">
              <Link href={service.href} className="service-card group relative h-[500px] overflow-hidden rounded-3xl cursor-pointer block">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image w-full h-full object-cover scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent" />
                </div>

                {/* Hover Overlay */}
                <div className={`service-overlay absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-300`} />

                {/* Content */}
                <div className="service-content absolute inset-0 p-10 flex flex-col justify-end text-white">
                  {/* Service Number */}
                  <div className="absolute top-10 left-10 w-16 h-16 border-2 border-white/20 rounded-2xl flex items-center justify-center">
                    <span className="text-2xl font-bold">0{index + 1}</span>
                  </div>

                  {/* Main Content */}
                  <div className="relative z-10">
                    <h3 className="display-3 mb-4">{service.title}</h3>
                    <p className="text-lg text-white/90 mb-6 max-w-md">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="text-sm px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex gap-8 items-center">
                      {Object.entries(service.stats).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-3xl font-bold">{value}</div>
                          <div className="text-sm text-white/70 capitalize">{key}</div>
                        </div>
                      ))}
                      
                      {/* Arrow */}
                      <div className="ml-auto">
                        <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                          <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-secondary/70 mb-6">
            Not sure which service you need? We'll help you find the perfect solution.
          </p>
          <Link href="/contact" className="btn btn-primary btn-lg">
            <span>Get Free Consultation</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;