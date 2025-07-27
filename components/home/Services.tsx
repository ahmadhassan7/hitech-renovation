"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      number: "01",
      title: "Renovations",
      description: "Transform your existing space with our expert renovation services. From kitchens to complete home makeovers, we bring new life to your property.",
      image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&h=800&fit=crop",
    },
    {
      number: "02",
      title: "Home Building",
      description: "Custom homes built with precision and care. Your dream home, brought to life by expert craftsmen who understand your vision.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    },
    {
      number: "03",
      title: "Commercial",
      description: "Professional commercial construction for businesses that demand excellence and efficiency. Building spaces that work for your business.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    },
    {
      number: "04",
      title: "Multifamily",
      description: "Creating modern living spaces for communities. Expertise in multifamily residential development that enhances neighborhoods.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
    },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const container = document.querySelector(".services-container");
      const slides = gsap.utils.toArray<HTMLElement>(".service-slide");
      
      // Create horizontal scroll
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => "+=" + (slides.length - 1) * window.innerHeight,
          anticipatePin: 1,
        }
      });

      // Animate each slide
      slides.forEach((slide, i) => {
        if (i === 0) return; // First slide is already visible
        
        tl.fromTo(slide, 
          {
            yPercent: 100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
          },
          i - 0.5
        );
        
        // Fade out previous slide completely
        if (i > 0) {
          tl.to(slides[i - 1], {
            opacity: 0,
            scale: 0.9,
            yPercent: -20,
            duration: 1,
            ease: "power2.inOut",
          }, i - 0.5);
        }
      });

      // Header animation
      gsap.from(".services-header", {
        y: 40,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-secondary text-light overflow-hidden">
      {/* Section Header */}
      <div className="container mb-16">
        <div className="services-header text-center">
          <span className="text-primary font-medium uppercase tracking-wider">Our Services</span>
          <h2 className="display-2 mt-2">
            What We Do Best
          </h2>
        </div>
      </div>

      {/* Services Container */}
      <div className="services-container relative h-screen">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-slide absolute inset-0 ${index === 0 ? '' : 'opacity-0'}`}
          >
            <div className="container h-full">
              <div className="grid-12 gap-12 items-center h-full">
                {/* Service Content */}
                <div className="col-span-12 lg:col-span-5">
                  <div className="display-1 text-primary mb-4">
                    {service.number}
                  </div>
                  <h3 className="display-3 mb-6">{service.title}</h3>
                  <p className="body-lg text-light/80 mb-8">
                    {service.description}
                  </p>
                  <a
                    href={service.title === "Home Building" ? "/services/custom-homes" : `/services/${service.title.toLowerCase().replace(" ", "-")}`}
                    className="inline-flex items-center text-primary font-medium uppercase tracking-wider hover:gap-2 transition-all"
                  >
                    Learn More
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Service Image */}
                <div className="col-span-12 lg:col-span-7">
                  <div className="relative h-600 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary-80 via-secondary-40 to-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;