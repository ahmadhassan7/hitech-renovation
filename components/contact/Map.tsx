"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Map = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Map container animation
      gsap.from(".map-container", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Info overlay animation
      gsap.from(".map-info", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (mapRef.current) {
      // Create OpenStreetMap
      const mapHTML = `
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-123.2261,49.2047,-123.0239,49.3058&amp;layer=mapnik&amp;marker=49.2578,-123.1241"
          style="border: 0"
        ></iframe>
      `;
      mapRef.current.innerHTML = mapHTML;
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      <div className="map-container relative h-[600px] bg-gray-200">
        {/* OpenStreetMap Container */}
        <div ref={mapRef} className="w-full h-full" />

        {/* Info Overlay */}
        <div className="map-info absolute top-8 left-8 bg-white rounded-2xl shadow-2xl p-8 max-w-sm">
          <h3 className="text-2xl font-bold text-secondary mb-4">
            Visit Our Showroom
          </h3>
          <p className="text-secondary/70 mb-6">
            See our materials, finishes, and design options in person. 
            Our experts are ready to help you choose the perfect solutions for your project.
          </p>
          
          <div className="space-y-3">
            <div className="flex items-center text-secondary">
              <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm">123 Construction Ave, Vancouver</span>
            </div>
            
            <div className="flex items-center text-secondary">
              <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
            </div>
            
            <div className="flex items-center text-secondary">
              <svg className="w-5 h-5 text-primary mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
              <span className="text-sm">Free parking available</span>
            </div>
          </div>

          <div className="mt-6">
            <a 
              href="https://www.openstreetmap.org/?mlat=49.2578&mlon=-123.1241#map=12/49.2578/-123.1241"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <span>Get Directions</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Spacer for footer */}
      <div className="h-20 bg-white"></div>
    </section>
  );
};

export default Map;