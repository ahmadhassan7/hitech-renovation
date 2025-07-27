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
      gsap.from(".about-image", {
        scale: 1.2,
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
        <div className="grid-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-6 about-content">
            <span className="text-primary font-medium uppercase tracking-wider">About HITECH</span>
            <h2 className="display-2 text-secondary mt-2 mb-6">
              Transforming Spaces,<br />Building Trust
            </h2>
            <p className="body-lg text-secondary/80 mb-6">
              For over 16 years, HITECH Renovations has been the trusted partner for 
              homeowners and businesses across Vancouver and Greater BC. Our commitment 
              to excellence, innovation, and client satisfaction sets us apart.
            </p>
            <p className="body-md text-secondary/70 mb-8">
              From intimate home renovations to large-scale commercial projects, we bring 
              the same level of dedication, craftsmanship, and attention to detail to every 
              build. Our team of experts ensures your vision becomes reality.
            </p>
            <Link href="/about" className="btn btn-primary">
              <span>Learn Our Story</span>
            </Link>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <div className="about-image overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop"
                  alt="HITECH team at work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 z-10">
                <p className="text-light text-lg font-medium">
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