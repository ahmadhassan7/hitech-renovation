"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProjectStats = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      value: "500+",
      label: "Projects Completed",
      description: "Successfully delivered across Vancouver and Greater BC",
    },
    {
      value: "$250M+",
      label: "Total Project Value",
      description: "In residential and commercial construction",
    },
    {
      value: "16+",
      label: "Years of Excellence",
      description: "Building trust and quality since 2009",
    },
    {
      value: "100%",
      label: "Client Satisfaction",
      description: "Based on post-project surveys and reviews",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".stats-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Stats animation
      const statItems = gsap.utils.toArray(".stat-item");
      statItems.forEach((item: any, index) => {
        gsap.from(item, {
          y: 100,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });

        // Number animation
        const valueElement = item.querySelector(".stat-value");
        const originalValue = valueElement.textContent;
        
        ScrollTrigger.create({
          trigger: item,
          start: "top 85%",
          onEnter: () => {
            if (originalValue.includes("%")) {
              // Handle percentage values
              const targetNum = parseInt(originalValue.replace("%", ""));
              gsap.fromTo(valueElement, 
                { textContent: 0 },
                {
                  textContent: targetNum,
                  duration: 2,
                  ease: "power2.out",
                  snap: { textContent: 1 },
                  onUpdate: function() {
                    const current = Math.round(this.targets()[0].textContent);
                    valueElement.textContent = current + "%";
                  }
                }
              );
            } else if (originalValue.includes("$")) {
              // Handle dollar values
              const targetNum = parseInt(originalValue.replace(/\D/g, ""));
              gsap.fromTo(valueElement,
                { textContent: 0 },
                {
                  textContent: targetNum,
                  duration: 2,
                  ease: "power2.out",
                  snap: { textContent: 1 },
                  onUpdate: function() {
                    const current = Math.round(this.targets()[0].textContent);
                    valueElement.textContent = "$" + current + "M+";
                  }
                }
              );
            } else if (originalValue.includes("+")) {
              // Handle other numeric values with +
              const targetNum = parseInt(originalValue.replace("+", ""));
              gsap.fromTo(valueElement,
                { textContent: 0 },
                {
                  textContent: targetNum,
                  duration: 2,
                  ease: "power2.out",
                  snap: { textContent: 1 },
                  onUpdate: function() {
                    const current = Math.round(this.targets()[0].textContent);
                    valueElement.textContent = current + "+";
                  }
                }
              );
            }
          },
          once: true,
        });
      });

      // Background parallax
      gsap.to(".stats-bg", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-secondary text-light overflow-hidden">
      {/* Background Pattern */}
      <div className="stats-bg absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10">
        <div className="stats-header text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider">By The Numbers</span>
          <h2 className="display-2 mt-2 mb-4">
            Our Impact Speaks Volumes
          </h2>
          <p className="body-lg text-light/70 max-w-3xl mx-auto">
            These numbers represent more than statistics – they're a testament to our 
            commitment to excellence and the trust our clients place in us.
          </p>
        </div>

        <div className="grid-12 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="stat-item text-center group">
                <div className="mb-4">
                  <div className="stat-value display-1 text-primary">
                    {stat.value}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-light">
                  {stat.label}
                </h3>
                <p className="text-light/60">
                  {stat.description}
                </p>
                
                {/* Decorative line */}
                <div className="mt-6 mx-auto w-16 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="bg-light/10 backdrop-blur-sm rounded-3xl p-12 text-center">
            <h3 className="display-3 text-light mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="body-lg text-light/80 mb-10 max-w-2xl mx-auto">
              Join our portfolio of successful projects. Let's create a space that exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark transform translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </a>
              <a href="/services" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-light border-2 border-light/30 rounded-full overflow-hidden transition-all duration-300 hover:border-light">
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-light/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectStats;