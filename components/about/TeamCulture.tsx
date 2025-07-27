"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TeamCulture = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      title: "Expert Craftsmen",
      count: "50+",
      description: "Skilled professionals dedicated to perfection",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop",
    },
    {
      title: "Safety First",
      count: "0",
      description: "Workplace incidents in the last 5 years",
      image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=800&h=600&fit=crop",
    },
    {
      title: "Innovation Hub",
      count: "24/7",
      description: "Continuous learning and improvement",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop",
    },
  ];

  const culturePoints = [
    {
      title: "Award-Winning Team",
      description: "Recognized for excellence in construction and customer service",
      color: "from-yellow-400 to-amber-600",
      bgColor: "bg-amber-500/10",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      title: "Collaborative Approach",
      description: "Working together with clients, architects, and communities",
      color: "from-blue-400 to-indigo-600",
      bgColor: "bg-blue-500/10",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Growth Mindset",
      description: "Investing in our people through training and development",
      color: "from-green-400 to-emerald-600",
      bgColor: "bg-green-500/10",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Problem Solvers",
      description: "Creative solutions for complex construction challenges",
      color: "from-purple-400 to-pink-600",
      bgColor: "bg-purple-500/10",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      headerTl
        .from(".culture-header", {
          y: 60,
          opacity: 0,
          duration: 1,
        })
        .from(".culture-subheader", {
          y: 30,
          opacity: 0,
          duration: 0.8,
        }, "-=0.5");

      // Feature cards animation
      gsap.from(".feature-card", {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 85%",
        },
      });

      // Culture points animation
      gsap.from(".culture-point", {
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".culture-points",
          start: "top 85%",
        },
      });

      // Parallax effect on images
      const images = gsap.utils.toArray(".feature-image");
      images.forEach((image: any) => {
        gsap.to(image, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // Counter animation
      const counters = gsap.utils.toArray(".counter");
      counters.forEach((counter: any) => {
        const value = counter.textContent;
        const isNumeric = /^\d+$/.test(value);
        
        if (isNumeric) {
          gsap.from(counter, {
            textContent: 0,
            duration: 2,
            ease: "power1.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: counter,
              start: "top 90%",
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-secondary text-light relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="culture-header display-2 text-light mb-4">
            People & Culture
          </h2>
          <p className="culture-subheader body-lg text-light/70 max-w-3xl mx-auto">
            Behind every great project is an exceptional team. Meet the passionate professionals 
            who bring expertise, dedication, and innovation to every build.
          </p>
        </div>

        {/* Features Grid */}
        <div className="features-grid grid-12 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="col-span-12 md:col-span-4">
              <div className="feature-card group cursor-pointer">
                <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="feature-image w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="display-1 text-primary counter">{feature.count}</div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-light group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-light/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Culture Points */}
        <div className="culture-points grid-12 gap-6 max-w-4xl mx-auto">
          <div className="col-span-12">
            <h3 className="text-3xl font-bold text-center mb-12 text-primary">
              What Makes Us Different
            </h3>
          </div>
          {culturePoints.map((point, index) => (
            <div key={index} className="culture-point col-span-12 md:col-span-6">
              <div className="group relative overflow-hidden">
                {/* Animated background */}
                <div className={`absolute inset-0 ${point.bgColor} rounded-3xl transform translate-y-full group-hover:translate-y-0 transition-transform duration-500`} />
                
                {/* Card content */}
                <div className="relative bg-light/5 backdrop-blur-sm border border-light/10 rounded-3xl p-8 hover:border-light/20 transition-all duration-500">
                  {/* Icon container */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${point.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <div className="w-full h-full bg-secondary rounded-2xl flex items-center justify-center text-white">
                      {point.icon}
                    </div>
                  </div>
                  
                  {/* Text content */}
                  <h4 className="text-2xl font-bold mb-3 text-light group-hover:text-primary transition-colors duration-300">
                    {point.title}
                  </h4>
                  <p className="text-light/70 leading-relaxed">
                    {point.description}
                  </p>
                  
                  {/* Animated accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${point.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamCulture;