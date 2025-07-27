"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const milestones = [
    {
      year: "2009",
      title: "The Beginning",
      description: "HITECH Renovations founded in Vancouver with a vision to transform spaces.",
    },
    {
      year: "2012",
      title: "Commercial Expansion",
      description: "Expanded services to include commercial construction projects.",
    },
    {
      year: "2015",
      title: "100+ Projects",
      description: "Celebrated completing over 100 successful renovation projects.",
    },
    {
      year: "2018",
      title: "Multifamily Division",
      description: "Launched specialized division for multifamily residential construction.",
    },
    {
      year: "2020",
      title: "Green Building",
      description: "Adopted sustainable construction practices and green building technologies.",
    },
    {
      year: "2025",
      title: "16 Years Strong",
      description: "Celebrating 16 years of excellence with 500+ completed projects.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".timeline-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Timeline line animation
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top 80%",
        },
      });

      // Milestone animations
      const milestones = gsap.utils.toArray(".milestone-item");
      milestones.forEach((milestone: any, index) => {
        const isLeft = index % 2 === 0;
        
        gsap.from(milestone, {
          x: isLeft ? -100 : 100,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: milestone,
            start: "top 85%",
          },
        });

        // Dot animation
        const dot = milestone.querySelector(".milestone-dot");
        gsap.from(dot, {
          scale: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: milestone,
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
        <div className="timeline-header text-center mb-20">
          <span className="text-primary font-medium uppercase tracking-wider">Our History</span>
          <h2 className="display-2 text-secondary mt-2 mb-4">
            Milestones That Matter
          </h2>
          <p className="body-lg text-secondary/70 max-w-3xl mx-auto">
            Each milestone represents our growth, innovation, and commitment to excellence 
            in the construction industry.
          </p>
        </div>

        <div className="timeline-container relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/20" />

          {/* Milestones */}
          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`milestone-item relative flex items-center mb-16 ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-5/12 ${
                    isLeft ? "text-right pr-12" : "text-left pl-12"
                  }`}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="display-3 text-primary mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-secondary/70">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="milestone-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-light z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;