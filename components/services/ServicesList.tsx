"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = {
    renovations: {
      title: "Renovations",
      subtitle: "Transform Your Space",
      description: "Breathe new life into your existing property with our expert renovation services. We handle everything from minor updates to complete transformations.",
      image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=800&h=600&fit=crop",
      features: [
        { title: "Kitchen Remodeling", desc: "Modern designs with functionality" },
        { title: "Bathroom Renovation", desc: "Spa-like retreats in your home" },
        { title: "Basement Finishing", desc: "Maximize your living space" },
        { title: "Home Additions", desc: "Expand your home seamlessly" },
        { title: "Interior Updates", desc: "Fresh looks for every room" },
        { title: "Exterior Upgrades", desc: "Enhance curb appeal" },
      ],
    },
    "home-building": {
      title: "Home Building",
      subtitle: "Custom Homes",
      description: "Your dream home, built from the ground up. We combine innovative design with quality construction to create homes that exceed expectations.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      features: [
        { title: "Custom Design", desc: "Tailored to your lifestyle" },
        { title: "Site Preparation", desc: "Professional land development" },
        { title: "Foundation Work", desc: "Built to last generations" },
        { title: "Complete Construction", desc: "From framing to finishing" },
        { title: "Energy Efficiency", desc: "Sustainable building practices" },
        { title: "Landscaping", desc: "Beautiful outdoor spaces" },
      ],
    },
    commercial: {
      title: "Commercial",
      subtitle: "Business Spaces",
      description: "Professional commercial construction that helps your business thrive. We create spaces that inspire productivity and impress clients.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      features: [
        { title: "Office Build-outs", desc: "Productive work environments" },
        { title: "Retail Spaces", desc: "Attract and engage customers" },
        { title: "Restaurants", desc: "Functional and inviting designs" },
        { title: "Medical Facilities", desc: "Compliant healthcare spaces" },
        { title: "Warehouses", desc: "Efficient storage solutions" },
        { title: "Tenant Improvements", desc: "Upgrade existing spaces" },
      ],
    },
    multifamily: {
      title: "Multifamily",
      subtitle: "Community Living",
      description: "Creating quality living spaces for modern communities. Our multifamily projects balance comfort, efficiency, and sustainable design.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      features: [
        { title: "Apartments", desc: "Modern urban living" },
        { title: "Townhouses", desc: "Connected communities" },
        { title: "Condominiums", desc: "Luxury multi-unit buildings" },
        { title: "Senior Living", desc: "Comfortable retirement homes" },
        { title: "Student Housing", desc: "Safe academic environments" },
        { title: "Mixed-Use", desc: "Live, work, play spaces" },
      ],
    },
  };

const ServicesList = () => {
  const [activeService, setActiveService] = useState<keyof typeof services>("renovations");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Tab animation
      gsap.from(".service-tab", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".service-tabs",
          start: "top 90%",
        },
      });

      // Content animation on change
      gsap.from(".service-content", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: ".service-content",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeService]);

  return (
    <section ref={sectionRef} className="section bg-secondary text-light">
      <div className="container">
        {/* Service Tabs */}
        <div className="service-tabs flex flex-wrap justify-center gap-4 mb-16">
          {Object.entries(services).map(([key, service]) => (
            <button
              key={key}
              onClick={() => setActiveService(key as keyof typeof services)}
              className={`service-tab px-8 py-4 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                activeService === key
                  ? "bg-primary text-white"
                  : "bg-transparent border border-light/30 text-light hover:bg-light/10 hover:border-primary"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Content */}
        <div className="service-content grid-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-6">
            <span className="text-primary font-medium uppercase tracking-wider">
              {services[activeService].subtitle}
            </span>
            <h2 className="display-2 mt-2 mb-6">
              {services[activeService].title}
            </h2>
            <p className="body-lg text-light/80 mb-8">
              {services[activeService].description}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services[activeService].features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-light/10 backdrop-blur-sm border border-light/20 rounded-xl p-6 transition-all duration-300 hover:bg-light/20 hover:border-primary"
                >
                  <h3 className="text-xl font-bold mb-2 text-light group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-light/70">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Image */}
          <div className="col-span-12 lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-600 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 right-8 bg-primary text-white p-8 rounded-xl">
                <div className="display-3">Let's Build</div>
                <p className="text-lg mt-2">
                  Your vision, our expertise. Together, we'll create something extraordinary.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;