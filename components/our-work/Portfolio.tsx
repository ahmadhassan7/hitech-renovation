"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Modern Downtown Condo",
      category: "residential",
      location: "Vancouver, BC",
      year: "2024",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
      description: "Complete renovation of a 2-bedroom downtown condo with modern finishes",
    },
    {
      id: 2,
      title: "Tech Startup Office",
      category: "commercial",
      location: "Burnaby, BC", 
      year: "2024",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      description: "10,000 sq ft office space designed for collaboration and innovation",
    },
    {
      id: 3,
      title: "Luxury Family Home",
      category: "home-building",
      location: "West Vancouver, BC",
      year: "2023",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      description: "Custom 5,500 sq ft home with ocean views and sustainable features",
    },
    {
      id: 4,
      title: "The Residences at Park Place",
      category: "multifamily",
      location: "Richmond, BC",
      year: "2023",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      description: "48-unit luxury apartment complex with amenities",
    },
    {
      id: 5,
      title: "Gourmet Kitchen Transformation",
      category: "residential",
      location: "North Vancouver, BC",
      year: "2024",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      description: "High-end kitchen renovation with custom cabinetry and appliances",
    },
    {
      id: 6,
      title: "Boutique Retail Space",
      category: "commercial",
      location: "Gastown, Vancouver",
      year: "2023",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      description: "Heritage building conversion to modern retail environment",
    },
    {
      id: 7,
      title: "Executive Townhomes",
      category: "multifamily",
      location: "Surrey, BC",
      year: "2023",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      description: "12-unit townhouse development with private gardens",
    },
    {
      id: 8,
      title: "Master Bathroom Oasis",
      category: "residential",
      location: "Kitsilano, Vancouver",
      year: "2024",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
      description: "Spa-inspired bathroom with heated floors and custom tilework",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "residential", name: "Residential", count: projects.filter(p => p.category === "residential").length },
    { id: "commercial", name: "Commercial", count: projects.filter(p => p.category === "commercial").length },
    { id: "home-building", name: "Home Building", count: projects.filter(p => p.category === "home-building").length },
    { id: "multifamily", name: "Multifamily", count: projects.filter(p => p.category === "multifamily").length },
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Filter buttons animation
      gsap.from(".filter-btn", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".filter-container",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate projects when filter changes
    if (gridRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(".project-card", {
          y: 80,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        });
      }, gridRef);

      return () => ctx.revert();
    }
  }, [filter]);

  return (
    <section ref={sectionRef} className="section bg-light">
      <div className="container">
        {/* Filter Buttons */}
        <div className="filter-container flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`filter-btn px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                filter === cat.id
                  ? "bg-primary text-white"
                  : "bg-white text-secondary border-2 border-secondary/20 hover:border-primary hover:text-primary"
              }`}
            >
              {cat.name}
              <span className="ml-2 text-xs opacity-60">({cat.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid-12 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="project-card group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Project Details Overlay */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary text-white text-xs uppercase tracking-wider rounded-full mb-3">
                        {categories.find(c => c.id === project.category)?.name}
                      </span>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-light/80 mb-2">{project.description}</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-light/60">{project.location}</p>
                        <p className="text-sm text-light/60">{project.year}</p>
                      </div>
                    </div>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                    <span className="text-xs font-bold uppercase">{project.year}</span>
                  </div>
                </div>

                {/* Project Info */}
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary/70">
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <Link href="/our-work/all-projects" className="btn btn-outline inline-flex items-center">
            <span>View All Projects</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;