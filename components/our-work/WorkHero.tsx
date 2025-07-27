"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const WorkHero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate hero content
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".work-hero-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
      })
      .from(".work-hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.5");

      // Floating images animation
      const floatingImages = gsap.utils.toArray<HTMLElement>(".floating-image");
      floatingImages.forEach((img, index) => {
        gsap.to(img, {
          y: index % 2 === 0 ? -20 : 20,
          x: index % 3 === 0 ? -10 : 10,
          rotation: index % 2 === 0 ? 3 : -3,
          duration: 4 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.2,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-[70vh] flex items-center bg-secondary text-light overflow-hidden">
      {/* Floating Background Images */}
      <div className="absolute top-20 right-10 w-64 h-64 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=400&fit=crop"
          alt="Project"
          className="floating-image w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="absolute bottom-20 left-10 w-48 h-48 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=300&fit=crop"
          alt="Project"
          className="floating-image w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="absolute top-40 left-20 w-56 h-56 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=350&h=350&fit=crop"
          alt="Project"
          className="floating-image w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="absolute bottom-40 right-20 w-52 h-52 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=350&h=350&fit=crop"
          alt="Project"
          className="floating-image w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="absolute top-60 right-1/3 w-44 h-44 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=300&h=300&fit=crop"
          alt="Project"
          className="floating-image w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="absolute bottom-10 right-1/2 w-40 h-40 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&h=300&fit=crop"
          alt="Project"
          className="floating-image w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="absolute top-10 left-1/3 w-48 h-48 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=350&h=350&fit=crop"
          alt="Project"
          className="floating-image w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="absolute bottom-32 left-1/4 w-36 h-36 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=300&h=300&fit=crop"
          alt="Project"
          className="floating-image w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="absolute top-1/3 right-40 w-44 h-44 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=350&h=350&fit=crop"
          alt="Project"
          className="floating-image w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="absolute bottom-20 right-1/3 w-52 h-52 opacity-10">
        <img
          src="https://plus.unsplash.com/premium_photo-1671269941569-7841144ee4e0?q=80&w=993&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Project"
          className="floating-image w-full h-full object-cover rounded-2xl"
        />
      </div>

      <div className="container relative z-10 w-full py-20">
        <div className="max-w-4xl" style={{ paddingTop: "8rem" }}>
          <h1 className="mb-6">
            <div className="work-hero-title display-2 text-primary">
              OUR PORTFOLIO
            </div>
            <div className="work-hero-title display-1 text-light">
              PROJECTS
            </div>
            <div className="work-hero-title display-2 text-light opacity-60">
              That Inspire
            </div>
          </h1>
          
          <p className="work-hero-subtitle body-lg text-light/80 max-w-3xl">
            Every project tells a story of transformation, innovation, and excellence. 
            Explore our diverse portfolio showcasing residential, commercial, and 
            multifamily construction projects across Vancouver and Greater BC.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkHero;