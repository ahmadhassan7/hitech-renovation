"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "16+", label: "Years of Excellence" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Team Members" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.from(".story-image", {
        scale: 1.2,
        opacity: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".story-image",
          start: "top 80%",
        },
      });

      // Content animation
      gsap.from(".story-content > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".story-content",
          start: "top 80%",
        },
      });

      // Stats animation
      gsap.from(".stat-item", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 80%",
        },
      });

      // Counter animation
      const counters = document.querySelectorAll(".stat-number");
      counters.forEach((counter) => {
        const target = counter.getAttribute("data-target");
        const isPercentage = target?.includes("%");
        const numericValue = parseInt(target?.replace(/[^0-9]/g, "") || "0");
        
        ScrollTrigger.create({
          trigger: counter,
          start: "top 90%",
          onEnter: () => {
            gsap.to(counter, {
              innerHTML: numericValue,
              duration: 2,
              ease: "power2.out",
              snap: { innerHTML: 1 },
              onUpdate: function() {
                const value = Math.round(this.targets()[0].innerHTML);
                counter.innerHTML = isPercentage ? `${value}%` : `${value}+`;
              }
            });
          },
          once: true,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-light">
      <div className="container">
        <div className="grid-12 gap-12 items-center mb-24">
          {/* Content */}
          <div className="col-span-12 lg:col-span-6">
            <div className="story-content">
              <span className="text-primary font-medium uppercase tracking-wider">Our Journey</span>
              <h2 className="display-2 text-secondary mt-2 mb-6">
                Building Dreams Into Reality
              </h2>
              <div className="space-y-4 text-secondary/70 body-lg">
                <p>
                  Founded in 2009, HITECH Renovations began with a simple mission: to transform 
                  spaces and exceed expectations. What started as a small team with big dreams 
                  has evolved into one of Vancouver's most trusted construction companies.
                </p>
                <p>
                  Our journey has been marked by continuous growth, innovation, and an unwavering 
                  commitment to quality. From residential renovations to large-scale commercial 
                  projects, we've built our reputation one satisfied client at a time.
                </p>
                <p>
                  Today, we're proud to be a leader in sustainable construction practices, 
                  employing cutting-edge technology and time-tested craftsmanship to deliver 
                  exceptional results that stand the test of time.
                </p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="col-span-12 lg:col-span-6">
            <div className="story-image relative">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=600&fit=crop"
                alt="HITECH construction site"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-2xl">
                <div className="display-3">16+</div>
                <div className="text-lg font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats-grid grid-12 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="col-span-6 md:col-span-3">
              <div className="stat-item text-center">
                <div 
                  className="stat-number display-1 text-primary mb-2" 
                  data-target={stat.number}
                >
                  0
                </div>
                <p className="text-secondary/70 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;