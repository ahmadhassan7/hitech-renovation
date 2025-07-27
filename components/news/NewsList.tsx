"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const NewsList = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);

  const posts = [
    {
      id: 1,
      title: "HITECH Wins Best Renovation Company Award 2024",
      excerpt: "We're honored to receive the Best Renovation Company award from the Vancouver Construction Association for our commitment to excellence and innovation.",
      date: "March 15, 2024",
      category: "Awards",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      featured: true,
    },
    {
      id: 2,
      title: "New Sustainable Building Practices Implementation",
      excerpt: "HITECH adopts cutting-edge green building technologies to reduce environmental impact and create more efficient spaces for our clients.",
      date: "March 10, 2024",
      category: "Sustainability",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Spring Home Renovation Trends 2024",
      excerpt: "Discover the latest trends in home renovation that are transforming Vancouver homes this spring, from smart home integration to sustainable materials.",
      date: "March 5, 2024",
      category: "Trends",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Commercial Project Spotlight: Tech Hub Transformation",
      excerpt: "See how we transformed a 20,000 sq ft warehouse into a modern tech office space with collaborative areas and sustainable features.",
      date: "February 28, 2024",
      category: "Projects",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Tips for Planning Your Kitchen Renovation",
      excerpt: "Expert advice on planning your kitchen renovation for maximum impact and value, including budgeting tips and design considerations.",
      date: "February 20, 2024",
      category: "Tips",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "HITECH Expands Services to Whistler",
      excerpt: "We're excited to announce our expansion to serve the Whistler and Sea to Sky corridor, bringing our expertise to mountain communities.",
      date: "February 15, 2024",
      category: "Company News",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?w=800&h=600&fit=crop",
    },
  ];

  const categoryColors: { [key: string]: string } = {
    "Awards": "bg-primary",
    "Sustainability": "bg-green-600",
    "Trends": "bg-blue-600",
    "Projects": "bg-purple-600",
    "Tips": "bg-orange-600",
    "Company News": "bg-secondary",
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Featured post animation
      gsap.from(".featured-post", {
        y: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".featured-post",
          start: "top 85%",
        },
      });

      // Regular posts animation - removed to fix visibility issue
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-light">
      <div className="container">
        {/* Featured Post */}
        <div className="featured-post mb-16">
          <div className="grid-12 gap-12 items-center bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="col-span-12 lg:col-span-6">
              <div className="relative h-full min-h-[400px] lg:min-h-[500px]">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute top-6 left-6 ${categoryColors[posts[0].category]} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                  {posts[0].category}
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 p-8 lg:p-12">
              <div className="flex items-center gap-4 text-sm text-secondary/60 mb-4">
                <span>{posts[0].date}</span>
                <span>•</span>
                <span>{posts[0].readTime}</span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                  Featured
                </span>
              </div>
              
              <h2 className="display-3 text-secondary mb-4">
                {posts[0].title}
              </h2>
              
              <p className="body-lg text-secondary/70 mb-8">
                {posts[0].excerpt}
              </p>
              
              <Link href={`/news/${posts[0].id}`} className="inline-flex items-center text-primary font-medium hover:gap-4 transition-all">
                <span>Read Full Article</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Regular Posts Grid */}
        <div className="news-grid grid-12 gap-8">
          {posts.slice(1).map((post) => (
            <div key={post.id} className="col-span-12 md:col-span-6 lg:col-span-4">
              <article 
                className="bg-white rounded-3xl overflow-hidden h-full group hover:shadow-2xl transition-all duration-300 shadow-lg"
                onMouseEnter={() => setHoveredPost(post.id)}
                onMouseLeave={() => setHoveredPost(null)}
              >
                <Link href={`/news/${post.id}`} className="block h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/40 to-transparent" />
                    <div className={`absolute top-4 left-4 ${categoryColors[post.category]} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-sm text-secondary/50 mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-secondary/70 mb-6 flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all">
                      <span>Read Article</span>
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="btn btn-outline">
            <span>Load More Articles</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsList;