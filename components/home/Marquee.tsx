"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Marquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const items = [
    "RENOVATIONS",
    "•",
    "HOME BUILDING",
    "•",
    "COMMERCIAL",
    "•",
    "MULTIFAMILY",
    "•",
    "VANCOUVER",
    "•",
    "GREATER BC",
    "•",
  ];

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Clone items for seamless loop
    const marqueeContent = marquee.querySelector(".marquee-content");
    if (!marqueeContent) return;
    
    const clone = marqueeContent.cloneNode(true);
    marquee.appendChild(clone);

    // Animate
    gsap.to(".marquee-content", {
      xPercent: -100,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    // Pause on hover
    marquee.addEventListener("mouseenter", () => gsap.globalTimeline.pause());
    marquee.addEventListener("mouseleave", () => gsap.globalTimeline.resume());

    return () => {
      marquee.removeEventListener("mouseenter", () => gsap.globalTimeline.pause());
      marquee.removeEventListener("mouseleave", () => gsap.globalTimeline.resume());
    };
  }, []);

  return (
    <section className="h-[15vh] bg-secondary flex items-center overflow-hidden">
      <div ref={marqueeRef} className="flex whitespace-nowrap">
        <div className="marquee-content flex items-center">
          {items.map((item, index) => (
            <span
              key={index}
              className={`inline-block px-4 md:px-8 ${
                item === "•" 
                  ? "text-primary text-xl md:text-2xl" 
                  : "text-2xl md:display-3 text-light hover:text-primary transition-colors cursor-pointer"
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;