"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorInner = cursorInnerRef.current;
    if (!cursor || !cursorInner) return;

    let clientX = -100;
    let clientY = -100;
    let innerX = -100;
    let innerY = -100;

    const handleMouseMove = (e: MouseEvent) => {
      clientX = e.clientX;
      clientY = e.clientY;
    };

    const animate = () => {
      const dx = clientX - innerX;
      const dy = clientY - innerY;
      
      innerX += dx * 0.1;
      innerY += dy * 0.1;

      cursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
      cursorInner.style.transform = `translate(${innerX}px, ${innerY}px)`;

      requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      gsap.to([cursor, cursorInner], { opacity: 1, duration: 0.3 });
    };

    const handleMouseLeave = () => {
      gsap.to([cursor, cursorInner], { opacity: 0, duration: 0.3 });
    };

    const handleLinkHover = () => {
      gsap.to(cursor, { scale: 1.5, duration: 0.3 });
      gsap.to(cursorInner, { scale: 0.5, duration: 0.3 });
    };

    const handleLinkLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(cursorInner, { scale: 1, duration: 0.3 });
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Add hover effects for interactive elements
    const links = document.querySelectorAll("a, button, .cursor-hover");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-4 h-4 -ml-2 -mt-2 rounded-full bg-primary mix-blend-difference pointer-events-none z-[9999] opacity-0 will-change-transform"
      />
      <div
        ref={cursorInnerRef}
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border border-primary mix-blend-difference pointer-events-none z-[9999] opacity-0 will-change-transform"
      />
    </>
  );
}