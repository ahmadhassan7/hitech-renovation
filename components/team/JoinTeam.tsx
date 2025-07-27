"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const JoinTeam = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salaries and performance bonuses",
      icon: "💰",
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage",
      icon: "🏥",
    },
    {
      title: "Professional Growth",
      description: "Training programs and career advancement opportunities",
      icon: "📈",
    },
    {
      title: "Work-Life Balance",
      description: "Flexible schedules and generous vacation time",
      icon: "⚖️",
    },
    {
      title: "Team Culture",
      description: "Collaborative environment with team building events",
      icon: "🤝",
    },
    {
      title: "Modern Tools",
      description: "Latest technology and equipment for optimal performance",
      icon: "🛠️",
    },
  ];

  const openPositions = [
    { title: "Senior Project Manager", location: "Vancouver, BC", type: "Full-time" },
    { title: "Site Supervisor", location: "Burnaby, BC", type: "Full-time" },
    { title: "Junior Architect", location: "Vancouver, BC", type: "Full-time" },
    { title: "Construction Estimator", location: "Richmond, BC", type: "Full-time" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".join-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Benefits animation
      gsap.from(".benefit-card", {
        y: 60,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".benefits-grid",
          start: "top 85%",
        },
      });

      // Positions animation
      gsap.from(".position-card", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".positions-list",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-accent">
      <div className="container">
        <div className="join-header text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider">Careers</span>
          <h2 className="display-2 text-secondary mt-2 mb-4">
            Join Our Team
          </h2>
          <p className="body-lg text-secondary/70 max-w-3xl mx-auto">
            Be part of a company that values innovation, quality, and professional growth. 
            Build your career while building Vancouver's future.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="benefits-grid grid-12 gap-6 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="benefit-card bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow h-full">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary/70 text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <div className="bg-secondary text-light rounded-3xl p-12">
          <h3 className="text-3xl font-bold mb-8">Current Openings</h3>
          
          <div className="positions-list space-y-4 mb-8">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="position-card bg-light/10 backdrop-blur-sm border border-light/20 rounded-xl p-6 hover:bg-light/20 transition-all cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-light mb-2">
                      {position.title}
                    </h4>
                    <div className="flex flex-wrap gap-4 text-sm text-light/70">
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {position.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {position.type}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-primary group-hover:translate-x-2 transition-transform">
                    <span className="font-medium mr-2">Apply Now</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-light/70 mb-6">
              Don't see a position that fits? We're always looking for talented individuals.
            </p>
            <a href="mailto:careers@hitechrenovations.ca" className="btn btn-primary">
              <span>Send Your Resume</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinTeam;