"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Values = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const values = [
    {
      title: "Quality Excellence",
      description: "Every detail matters. Premium materials, master craftsmanship, and rigorous standards ensure lasting perfection.",
      metric: "100%",
      metricLabel: "Quality Guarantee",
      gradient: "from-amber-500 to-orange-600",
      bgPattern: "radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)",
    },
    {
      title: "Innovation First",
      description: "Leading with cutting-edge technology and sustainable solutions that shape the future of construction.",
      metric: "50+",
      metricLabel: "Green Projects",
      gradient: "from-emerald-500 to-teal-600",
      bgPattern: "radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
    },
    {
      title: "Trust & Integrity",
      description: "Transparent pricing, honest timelines, and open communication build relationships that last generations.",
      metric: "16+",
      metricLabel: "Years of Trust",
      gradient: "from-blue-500 to-indigo-600",
      bgPattern: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
    },
    {
      title: "Client Success",
      description: "Your vision is our mission. We go beyond expectations to deliver spaces that inspire and endure.",
      metric: "500+",
      metricLabel: "Happy Clients",
      gradient: "from-purple-500 to-pink-600",
      bgPattern: "radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".values-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Cards stagger animation
      gsap.from(".value-card", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: {
          amount: 0.6,
          from: "start",
        },
        scrollTrigger: {
          trigger: ".values-grid",
          start: "top 85%",
        },
      });

      // Metrics counter animation
      const metrics = gsap.utils.toArray(".metric-number");
      metrics.forEach((metric: any) => {
        const originalValue = metric.getAttribute('data-value');
        const isPercentage = originalValue.includes("%");
        const numericValue = parseInt(originalValue.replace(/\D/g, ""));
        
        if (!isNaN(numericValue)) {
          gsap.fromTo(metric, 
            {
              textContent: 0,
            },
            {
              textContent: numericValue,
              duration: 2,
              ease: "power1.out",
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: metric,
                start: "top 90%",
              },
              onUpdate: function() {
                const current = Math.round(this.targets()[0].textContent);
                metric.textContent = isPercentage ? `${current}%` : `${current}+`;
              },
            }
          );
        }
      });

      // Floating animation for cards
      gsap.to(".value-card", {
        y: -10,
        duration: 2,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          repeat: -1,
          yoyo: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="values-header text-center mb-20">
          <span className="text-primary font-medium uppercase tracking-wider text-sm">Our Foundation</span>
          <h2 className="display-2 mt-2 mb-4 text-secondary">
            Values That Build Excellence
          </h2>
          <p className="body-lg text-secondary/70 max-w-3xl mx-auto">
            Four pillars that support every project, every decision, and every relationship we build.
          </p>
        </div>

        <div className="values-grid grid-12 gap-8">
          {values.map((value, index) => (
            <div key={index} className="col-span-12 md:col-span-6 lg:col-span-6">
              <div 
                className="value-card relative h-full group cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card background with gradient border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-100 to-white p-[1px]">
                  <div 
                    className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </div>

                {/* Card content */}
                <div 
                  className="relative h-full bg-white rounded-3xl p-10 overflow-hidden"
                  style={{ backgroundImage: value.bgPattern }}
                >
                  {/* Metric display */}
                  <div className="absolute top-10 right-10">
                    <div className={`text-5xl font-bold bg-gradient-to-br ${value.gradient} bg-clip-text text-transparent`}>
                      <span className="metric-number" data-value={value.metric}>{value.metric}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{value.metricLabel}</p>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      <div className="w-8 h-8 bg-white/20 rounded-lg" />
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-secondary">
                      {value.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed pr-20">
                      {value.description}
                    </p>

                  </div>

                  {/* Animated background element */}
                  <div 
                    className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${value.gradient} opacity-10 group-hover:scale-150 transition-transform duration-700`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;