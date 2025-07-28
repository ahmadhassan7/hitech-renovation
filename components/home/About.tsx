"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animations
      gsap.from(".about-content > *", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });


      // Image reveal
      gsap.fromTo(".about-image img", {
        scale: 1.2,
      }, {
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-light">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="about-content">
            <h2 className="mb-4 md:mb-6 space-y-2 md:space-y-0">
              <div className="display-1 text-secondary -mt-2 md:-mt-4 lg:-mt-6">
                TRANSFORMING
              </div>
              <div className="display-1 text-primary">
                SPACES
              </div>
              <div className="display-2 text-secondary mt-2 md:mt-0">
                Building Trust
              </div>
            </h2>
            <p className="text-base md:body-lg text-secondary/80 mb-4 md:mb-6 max-w-2xl">
              For over 16 years, HITECH Renovations has been the trusted partner for 
              homeowners and businesses across Vancouver and Greater BC. Our commitment 
              to excellence, innovation, and client satisfaction sets us apart.
            </p>
            <p className="text-sm md:body-md text-secondary/70 mb-6 md:mb-8 max-w-2xl">
              From intimate home renovations to large-scale commercial projects, we bring 
              the same level of dedication, craftsmanship, and attention to detail to every 
              build. Our team of experts ensures your vision becomes reality.
            </p>
            <Link href="/about" className="btn btn-primary">
              <span>Learn Our Story</span>
            </Link>
          </div>

          <div className="order-first lg:order-last">
            <div className="relative mt-8 lg:mt-0">
              <div className="about-image relative overflow-hidden h-[400px] md:h-[500px] lg:h-[600px] rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop"
                  alt="HITECH team at work"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <div className="bg-primary/90 backdrop-blur-sm p-6 md:p-8 rounded-lg max-w-sm">
                  <p className="text-2xl md:text-3xl font-serif text-white leading-tight">
                    "Quality is not an act, it is a habit"
                  </p>
                  <p className="text-white/80 mt-3 text-sm md:text-base">— Aristotle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;