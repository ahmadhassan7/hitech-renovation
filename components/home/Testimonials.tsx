"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      quote: "HITECH transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism exceeded our expectations.",
      author: "Sarah Johnson",
      role: "Homeowner",
      project: "Kitchen Renovation",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&h=150&fit=crop",
    },
    {
      quote: "From concept to completion, the team delivered exceptional quality. Our new office space has completely transformed our business environment.",
      author: "Michael Chen",
      role: "Business Owner",
      project: "Commercial Build",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    },
    {
      quote: "The renovation of our heritage home required expertise and care. HITECH delivered beyond our wildest dreams while respecting the home's character.",
      author: "Emily Rodriguez",
      role: "Heritage Home Owner",
      project: "Heritage Restoration",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.from(".testimonials-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Testimonial cards animation
      gsap.from(".testimonial-card", {
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-light">
      <div className="container">
        <div className="testimonials-header text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="display-2 text-secondary mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="body-lg text-secondary/70 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about their experience working with HITECH.
          </p>
        </div>

        <div className="testimonials-grid grid-12 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-span-12 md:col-span-4">
              <div className="testimonial-card relative overflow-hidden group h-full border-4 border-secondary/10 hover:border-primary/20 transition-colors duration-300 rounded-lg">
                <div className="bg-white p-8 md:p-10 h-full transition-transform duration-500">
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 md:top-8 md:right-8 text-4xl text-primary/10">
                    <svg className="w-10 md:w-16 h-10 md:h-16" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 md:w-6 h-5 md:h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-secondary/80 mb-8 text-lg md:text-xl leading-relaxed relative z-10">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4 relative z-10">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-secondary">{testimonial.author}</p>
                      <p className="text-sm text-secondary/60">{testimonial.role}</p>
                      <p className="text-xs text-primary">{testimonial.project}</p>
                    </div>
                  </div>
                  
                  {/* Decorative line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;