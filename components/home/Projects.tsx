"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Luxury Waterfront Estate",
      category: "Residential",
      year: "2024",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    },
    {
      id: 2,
      title: "Modern Office Complex",
      category: "Commercial",
      year: "2023",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
    },
    {
      id: 3,
      title: "Urban Living Spaces",
      category: "Multifamily",
      year: "2024",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop",
    },
    {
      id: 4,
      title: "Contemporary Kitchen",
      category: "Renovation",
      year: "2023",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".projects-title", {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Projects stagger animation
      gsap.from(".project-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        },
      });

      // Hover parallax effect
      const cards = document.querySelectorAll(".project-card");
      cards.forEach((card) => {
        const image = card.querySelector(".project-image");
        
        card.addEventListener("mousemove", (e: any) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const moveX = (x - centerX) / centerX * 20;
          const moveY = (y - centerY) / centerY * 20;
          
          gsap.to(image, {
            x: moveX,
            y: moveY,
            duration: 0.5,
            ease: "power2.out",
          });
        });
        
        card.addEventListener("mouseleave", () => {
          gsap.to(image, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-accent">
      <div className="container">
        <div className="mb-16">
          <h2 className="projects-title display-2 text-secondary mb-4">
            Featured Projects
          </h2>
          <div className="flex justify-between items-end">
            <p className="body-lg text-secondary/70 max-w-2xl">
              Showcasing our commitment to excellence through transformative projects across Vancouver
            </p>
            <Link href="/our-work" className="btn btn-outline hidden md:inline-flex">
              <span>View All Projects</span>
            </Link>
          </div>
        </div>

        <div ref={projectsRef} className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="project-card group relative overflow-hidden cursor-none"
            >
              <div className="relative h-[60vh] overflow-hidden">
                <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-primary text-sm font-medium mb-2">
                      {project.category} • {project.year}
                    </p>
                    <h3 className="display-3 text-light">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/our-work" className="btn btn-outline">
            <span>View All Projects</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;