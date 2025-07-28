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
            <span className="text-primary font-medium uppercase tracking-wider text-sm md:text-base">About HITECH</span>
            <h2 className="text-3xl md:display-2 text-secondary mt-2 mb-4 md:mb-6">
              Transforming Spaces,<br />Building Trust
            </h2>
            <p className="text-base md:body-lg text-secondary/80 mb-4 md:mb-6">
              For over 16 years, HITECH Renovations has been the trusted partner for 
              homeowners and businesses across Vancouver and Greater BC. Our commitment 
              to excellence, innovation, and client satisfaction sets us apart.
            </p>
            <p className="text-sm md:body-md text-secondary/70 mb-6 md:mb-8">
              From intimate home renovations to large-scale commercial projects, we bring 
              the same level of dedication, craftsmanship, and attention to detail to every 
              build. Our team of experts ensures your vision becomes reality.
            </p>
            <Link href="/about" className="btn btn-primary">
              <span>Learn Our Story</span>
            </Link>
          </div>

          <div>
            <div className="relative mt-8 lg:mt-0">
              <div className="about-image relative overflow-hidden h-[300px] md:h-[400px] lg:h-[500px]">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop"
                  alt="HITECH team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-primary p-4 md:p-8 z-10 max-w-[200px] md:max-w-none">
                <p className="text-light text-base md:text-lg font-medium">
                  "Quality is not an act,<br />it is a habit"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;