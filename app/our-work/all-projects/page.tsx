"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AllProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const contentRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  // Disable smooth scroll for this page to improve performance
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "auto";
      
      // Disable Lenis smooth scroll if it exists
      const lenisElement = document.querySelector('html');
      if (lenisElement) {
        lenisElement.style.scrollBehavior = "auto";
      }
      
      return () => {
        document.documentElement.style.scrollBehavior = "";
      };
    }
  }, []);

  // Extended projects list
  const allProjects = [
    // Residential Projects
    {
      id: 1,
      title: "Modern Downtown Condo",
      category: "residential",
      location: "Vancouver, BC",
      year: "2024",
      value: "$450K",
      duration: "3 months",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
      description: "Complete renovation of a 2-bedroom downtown condo with modern finishes",
      details: "Full kitchen remodel, bathroom upgrades, custom millwork throughout",
    },
    {
      id: 2,
      title: "Gourmet Kitchen Transformation",
      category: "residential",
      location: "North Vancouver, BC",
      year: "2024",
      value: "$125K",
      duration: "6 weeks",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      description: "High-end kitchen renovation with custom cabinetry and appliances",
      details: "Custom island, professional-grade appliances, quartz countertops",
    },
    {
      id: 3,
      title: "Master Bathroom Oasis",
      category: "residential",
      location: "Kitsilano, Vancouver",
      year: "2024",
      value: "$85K",
      duration: "4 weeks",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
      description: "Spa-inspired bathroom with heated floors and custom tilework",
      details: "Walk-in shower, freestanding tub, double vanity, heated floors",
    },
    {
      id: 4,
      title: "Heritage Home Restoration",
      category: "residential",
      location: "Shaughnessy, Vancouver",
      year: "2023",
      value: "$750K",
      duration: "6 months",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      description: "Complete restoration of 1920s heritage home preserving original character",
      details: "Structural upgrades, modern systems, restored original features",
    },
    {
      id: 5,
      title: "Contemporary Basement Suite",
      category: "residential",
      location: "Burnaby, BC",
      year: "2023",
      value: "$180K",
      duration: "3 months",
      image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
      description: "Full basement conversion to modern rental suite",
      details: "Separate entrance, full kitchen, bedroom, living area",
    },

    // Commercial Projects
    {
      id: 6,
      title: "Tech Startup Office",
      category: "commercial",
      location: "Burnaby, BC",
      year: "2024",
      value: "$1.2M",
      duration: "4 months",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
      description: "10,000 sq ft office space designed for collaboration and innovation",
      details: "Open concept, meeting rooms, break areas, tech infrastructure",
    },
    {
      id: 7,
      title: "Boutique Retail Space",
      category: "commercial",
      location: "Gastown, Vancouver",
      year: "2023",
      value: "$350K",
      duration: "2 months",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      description: "Heritage building conversion to modern retail environment",
      details: "Custom displays, lighting design, POS systems, storage",
    },
    {
      id: 8,
      title: "Medical Clinic Expansion",
      category: "commercial",
      location: "Richmond, BC",
      year: "2023",
      value: "$800K",
      duration: "3 months",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop",
      description: "5,000 sq ft medical facility with specialized treatment rooms",
      details: "Exam rooms, lab space, waiting areas, accessibility compliance",
    },
    {
      id: 9,
      title: "Restaurant Build-Out",
      category: "commercial",
      location: "Yaletown, Vancouver",
      year: "2023",
      value: "$650K",
      duration: "3 months",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop",
      description: "Full restaurant construction including commercial kitchen",
      details: "Commercial kitchen, dining area, bar, patio space",
    },

    // Custom Homes
    {
      id: 10,
      title: "Luxury Family Home",
      category: "home-building",
      location: "West Vancouver, BC",
      year: "2023",
      value: "$3.5M",
      duration: "14 months",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
      description: "Custom 5,500 sq ft home with ocean views and sustainable features",
      details: "5 bedrooms, home theater, wine cellar, infinity pool",
    },
    {
      id: 11,
      title: "Modern Craftsman Home",
      category: "home-building",
      location: "Point Grey, Vancouver",
      year: "2023",
      value: "$2.8M",
      duration: "12 months",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      description: "4,200 sq ft craftsman-style home with modern amenities",
      details: "Open concept, smart home, energy efficient, landscaped gardens",
    },
    {
      id: 12,
      title: "Sustainable Smart Home",
      category: "home-building",
      location: "North Shore, BC",
      year: "2022",
      value: "$2.2M",
      duration: "11 months",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      description: "Net-zero energy home with advanced automation",
      details: "Solar panels, geothermal heating, rainwater collection, full automation",
    },

    // Multifamily Projects
    {
      id: 13,
      title: "The Residences at Park Place",
      category: "multifamily",
      location: "Richmond, BC",
      year: "2023",
      value: "$12M",
      duration: "18 months",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      description: "48-unit luxury apartment complex with amenities",
      details: "Gym, rooftop terrace, underground parking, concierge",
    },
    {
      id: 14,
      title: "Executive Townhomes",
      category: "multifamily",
      location: "Surrey, BC",
      year: "2023",
      value: "$8M",
      duration: "14 months",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      description: "12-unit townhouse development with private gardens",
      details: "3-bedroom units, private garages, community amenities",
    },
    {
      id: 15,
      title: "Urban Living Condos",
      category: "multifamily",
      location: "New Westminster, BC",
      year: "2022",
      value: "$15M",
      duration: "20 months",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop",
      description: "60-unit condominium with retail ground floor",
      details: "Mixed-use development, modern amenities, transit-oriented",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: allProjects.length },
    { id: "residential", name: "Residential", count: allProjects.filter(p => p.category === "residential").length },
    { id: "commercial", name: "Commercial", count: allProjects.filter(p => p.category === "commercial").length },
    { id: "home-building", name: "Custom Homes", count: allProjects.filter(p => p.category === "home-building").length },
    { id: "multifamily", name: "Multifamily", count: allProjects.filter(p => p.category === "multifamily").length },
  ];

  const filteredProjects = filter === "all" ? allProjects : allProjects.filter(p => p.category === filter);

  useEffect(() => {
    // Simple fade animations after mount
    if (typeof window === "undefined") return;
    
    const timer = setTimeout(() => {
      // Fade in hero content
      const heroContent = document.querySelector(".hero-content");
      if (heroContent) {
        (heroContent as HTMLElement).style.opacity = "1";
      }
      
      // Fade in stats
      const statCards = document.querySelectorAll(".stat-card");
      statCards.forEach((card) => {
        (card as HTMLElement).style.opacity = "1";
        (card as HTMLElement).style.transform = "translateY(0)";
      });
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Batch update for better performance
    if (contentRef.current) {
      const items = contentRef.current.querySelectorAll(".project-item");
      items.forEach((item) => {
        (item as HTMLElement).style.opacity = "1";
      });
    }
  }, [filter, viewMode]);

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center bg-secondary text-light overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-primary/20" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
        </div>

        <div className="container relative z-10 w-full py-20">
          <div className="hero-content max-w-4xl" style={{ paddingTop: "6rem", opacity: 0 }}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-light/70 mb-6">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/our-work" className="hover:text-primary transition-colors">Our Work</Link>
              <span>/</span>
              <span className="text-primary">All Projects</span>
            </div>

            <h1 className="display-1 mb-4">Our Complete Portfolio</h1>
            <p className="body-lg text-light/80 max-w-3xl">
              Explore our full collection of residential, commercial, and multifamily projects. 
              Each one represents our commitment to quality, innovation, and client satisfaction.
            </p>
          </div>
        </div>
      </section>

      <div ref={contentRef}>
        {/* Stats Section */}
        <section className="stats-section py-16 bg-light">
          <div className="container">
            <div className="grid-12 gap-6">
              <div className="stat-card col-span-6 md:col-span-3 text-center" style={{ opacity: 0, transform: "translateY(20px)" }}>
                <div className="display-3 text-primary mb-2">{allProjects.length}</div>
                <p className="text-secondary">Total Projects</p>
              </div>
              <div className="stat-card col-span-6 md:col-span-3 text-center" style={{ opacity: 0, transform: "translateY(20px)" }}>
                <div className="display-3 text-primary mb-2">$50M+</div>
                <p className="text-secondary">Combined Value</p>
              </div>
              <div className="stat-card col-span-6 md:col-span-3 text-center" style={{ opacity: 0, transform: "translateY(20px)" }}>
                <div className="display-3 text-primary mb-2">100%</div>
                <p className="text-secondary">Satisfaction Rate</p>
              </div>
              <div className="stat-card col-span-6 md:col-span-3 text-center" style={{ opacity: 0, transform: "translateY(20px)" }}>
                <div className="display-3 text-primary mb-2">16+</div>
                <p className="text-secondary">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter and View Controls */}
        <section className="py-8 bg-white sticky top-0 z-30 shadow-sm">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Filter Pills */}
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilter(cat.id)}
                    className={`filter-pill px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      filter === cat.id
                        ? "bg-primary text-white shadow-lg"
                        : "bg-gray-100 text-secondary hover:bg-gray-200"
                    }`}
                  >
                    {cat.name} ({cat.count})
                  </button>
                ))}
              </div>

              {/* View Mode Toggle */}
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid" ? "bg-primary text-white" : "bg-gray-100 text-secondary"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list" ? "bg-primary text-white" : "bg-gray-100 text-secondary"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Display */}
        <section className="py-20 bg-gray-50">
          <div className="container">
            {viewMode === "grid" ? (
              // Grid View
              <div className="grid-12 gap-8">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="project-item col-span-12 md:col-span-6 lg:col-span-4" style={{ opacity: 0 }}>
                    <div className="group relative h-full bg-white rounded-3xl overflow-hidden shadow-xl">
                      {/* Image Container */}
                      <div className="relative h-80 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        
                        {/* Category Badge */}
                        <div className="absolute top-6 left-6">
                          <span className="inline-block px-4 py-2 bg-primary text-white text-xs font-bold uppercase tracking-wider rounded-full">
                            {categories.find(c => c.id === project.category)?.name}
                          </span>
                        </div>
                      </div>
                      
                      {/* Content Container */}
                      <div className="p-8">
                        {/* Header */}
                        <div className="mb-6">
                          <h3 className="text-2xl font-bold text-secondary mb-3">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-secondary/60">
                            <span className="flex items-center gap-1">
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {project.location}
                            </span>
                            <span>•</span>
                            <span>{project.year}</span>
                          </div>
                        </div>
                        
                        {/* Description */}
                        <p className="text-secondary/70 leading-relaxed mb-8">
                          {project.description}
                        </p>
                        
                        {/* Footer Stats */}
                        <div className="flex items-center justify-between py-6 border-t border-gray-200">
                          <div className="text-center flex-1">
                            <p className="text-3xl font-bold text-primary mb-1">{project.value}</p>
                            <p className="text-xs text-secondary/60 uppercase tracking-wider">Project Value</p>
                          </div>
                          <div className="w-px h-12 bg-gray-200"></div>
                          <div className="text-center flex-1">
                            <p className="text-xl font-semibold text-secondary mb-1">{project.duration}</p>
                            <p className="text-xs text-secondary/60 uppercase tracking-wider">Duration</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // List View
              <div className="space-y-8">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="project-item group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300" style={{ opacity: 0 }}>
                    <div className="grid grid-cols-1 lg:grid-cols-5">
                      <div className="relative h-72 lg:h-auto lg:col-span-2 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                        {/* Overlay with Value */}
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                        <div className="absolute bottom-6 left-6">
                          <p className="text-white/80 text-sm mb-1">Project Value</p>
                          <p className="text-3xl font-bold text-white">{project.value}</p>
                        </div>
                      </div>
                      <div className="lg:col-span-3 p-8 lg:p-10">
                        <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                          <div>
                            <div className="flex items-center gap-3 mb-4">
                              <span className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                                {categories.find(c => c.id === project.category)?.name}
                              </span>
                              <span className="px-4 py-2 bg-secondary/10 text-secondary text-sm font-medium rounded-full">
                                {project.year}
                              </span>
                            </div>
                            <h3 className="text-3xl font-bold text-secondary group-hover:text-primary transition-colors duration-200">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                        
                        <p className="text-lg text-secondary/70 mb-6">{project.description}</p>
                        
                        <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                          <p className="text-sm text-secondary/80">{project.details}</p>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-xs text-secondary/60">Location</p>
                              <p className="text-sm font-medium text-secondary">{project.location}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                              <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <p className="text-xs text-secondary/60">Duration</p>
                              <p className="text-sm font-medium text-secondary">{project.duration}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-secondary text-light text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)`
            }} />
          </div>
          
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto">
              <h2 className="display-2 mb-6">Ready to Start Your Project?</h2>
              <p className="body-lg text-light/80 mb-10">
                Join our portfolio of successful projects. Let&apos;s create something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-secondary bg-primary rounded-full overflow-hidden transition-all duration-300 hover:scale-105">
                  <span className="relative z-10">Get Your Free Quote</span>
                  <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
                <Link href="/services" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-light border-2 border-light/30 rounded-full overflow-hidden transition-all duration-300 hover:border-light">
                  <span className="relative z-10">Explore Our Services</span>
                  <div className="absolute inset-0 bg-light/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Spacer before footer */}
        <div className="h-20 bg-gray-50"></div>
      </div>
    </>
  );
}