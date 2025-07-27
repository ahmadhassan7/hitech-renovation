"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const TeamMembers = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const teamMembers = [
    {
      name: "Michael Chen",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=600&fit=crop",
      bio: "With over 16 years in construction, Michael leads HITECH with vision and dedication to excellence.",
      linkedin: "#",
      email: "michael@hitechrenovations.ca",
    },
    {
      name: "Sarah Johnson",
      role: "Chief Operating Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop",
      bio: "Sarah ensures smooth operations and maintains our commitment to sustainable building practices.",
      linkedin: "#",
      email: "sarah@hitechrenovations.ca",
    },
    {
      name: "David Kim",
      role: "Head of Design",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop",
      bio: "An award-winning architect, David brings innovative design solutions to every project.",
      linkedin: "#",
      email: "david@hitechrenovations.ca",
    },
    {
      name: "Emily Rodriguez",
      role: "Senior Project Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&h=600&fit=crop",
      bio: "Emily specializes in complex residential and commercial projects, ensuring timely delivery.",
      linkedin: "#",
      email: "emily@hitechrenovations.ca",
    },
    {
      name: "James Wilson",
      role: "Construction Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
      bio: "With 20+ years of field experience, James oversees all construction operations.",
      linkedin: "#",
      email: "james@hitechrenovations.ca",
    },
    {
      name: "Lisa Park",
      role: "Client Relations Director",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop",
      bio: "Lisa ensures every client receives exceptional service throughout their project journey.",
      linkedin: "#",
      email: "lisa@hitechrenovations.ca",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.from(".team-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Team member cards animation
      gsap.from(".team-member", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 80%",
        },
      });

      // Hover animations
      const memberCards = gsap.utils.toArray<HTMLElement>(".team-member");
      memberCards.forEach((card) => {
        const overlay = card.querySelector(".member-overlay");
        const image = card.querySelector(".member-image");
        
        card.addEventListener("mouseenter", () => {
          gsap.to(overlay, {
            opacity: 1,
            duration: 0.3,
          });
          gsap.to(image, {
            scale: 1.1,
            duration: 0.5,
          });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(overlay, {
            opacity: 0,
            duration: 0.3,
          });
          gsap.to(image, {
            scale: 1,
            duration: 0.5,
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-light">
      <div className="container">
        <div className="team-header text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider">Our People</span>
          <h2 className="display-2 text-secondary mt-2 mb-4">
            Leadership Team
          </h2>
          <p className="body-lg text-secondary/70 max-w-3xl mx-auto">
            Experienced professionals dedicated to delivering exceptional results on every project.
          </p>
        </div>

        <div className="team-grid grid-12 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="team-member group cursor-pointer">
                {/* Image Container */}
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={600}
                    height={600}
                    className="member-image w-full h-96 object-cover"
                  />
                  
                  {/* Overlay */}
                  <div className="member-overlay absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent opacity-0 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <p className="mb-6 text-light/90">
                        {member.bio}
                      </p>
                      
                      {/* Contact Links */}
                      <div className="flex gap-4">
                        <a 
                          href={member.linkedin}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                        <a 
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Role Badge */}
                  <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                    {member.role}
                  </div>
                </div>

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-secondary/60">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Department Teams */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-secondary mb-12">
            Our Extended Team
          </h3>
          
          <div className="grid-12 gap-8">
            {[
              { 
                dept: "Design Team", 
                count: "12", 
                icon: (
                  <svg className="w-16 h-16 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              { 
                dept: "Project Management", 
                count: "8", 
                icon: (
                  <svg className="w-16 h-16 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                )
              },
              { 
                dept: "Site Supervisors", 
                count: "15", 
                icon: (
                  <svg className="w-16 h-16 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                )
              },
              { 
                dept: "Skilled Craftsmen", 
                count: "45+", 
                icon: (
                  <svg className="w-16 h-16 text-primary mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                )
              },
            ].map((dept, index) => (
              <div key={index} className="col-span-6 md:col-span-3">
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="mb-4">{dept.icon}</div>
                  <div className="display-3 text-primary mb-2">{dept.count}</div>
                  <p className="text-secondary font-medium">{dept.dept}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;