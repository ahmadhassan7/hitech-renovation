"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NewsCategories = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);

  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "company-news", name: "Company News", count: 8 },
    { id: "projects", name: "Projects", count: 6 },
    { id: "trends", name: "Trends", count: 5 },
    { id: "tips", name: "Tips & Guides", count: 4 },
    { id: "awards", name: "Awards", count: 3 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Categories animation - removed to fix visibility issues
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-white border-b">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300 flex items-center ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg scale-105"
                  : "bg-light text-secondary hover:bg-secondary hover:text-white"
              }`}
            >
              <span>{category.name}</span>
              <span className="ml-2 text-sm opacity-80">({category.count})</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCategories;