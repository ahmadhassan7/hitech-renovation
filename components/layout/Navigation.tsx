"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Logo animation on load
    gsap.from(logoRef.current, {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: "power3.out",
    });

    // Nav items animation
    gsap.fromTo(".nav-item", 
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.3,
      }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      // Prevent scroll
      document.body.style.overflow = "hidden";

      // Animate menu
      const tl = gsap.timeline();
      
      tl.to(".menu-overlay", {
        scaleY: 1,
        duration: 0.6,
        ease: "power4.inOut",
      })
      .from(".menu-item", {
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      }, "-=0.2")
      .from(".menu-footer", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: "power3.out",
      }, "-=0.4");
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const navItems = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/our-work" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled ? "bg-light/95 backdrop-blur-md py-4" : "bg-transparent py-8"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <div ref={logoRef} className="flex items-center gap-2">
                <div className="relative">
                  <span className={`display-3 ${scrolled ? "text-secondary" : "text-light"}`}>
                    HITECH
                  </span>
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-12">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`nav-item relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                    scrolled ? "text-secondary hover:text-primary" : "text-light hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 hover:w-full" />
                </Link>
              ))}
              <Link href="/contact" className="nav-item btn btn-primary">
                <span>Get Quote</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-10 h-10 flex items-center justify-center"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute left-0 w-full h-0.5 transition-all duration-300 ${
                    isOpen ? "bg-light rotate-45 top-2" : scrolled ? "bg-secondary top-0" : "bg-light top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 w-full h-0.5 transition-all duration-300 ${
                    isOpen ? "opacity-0" : scrolled ? "bg-secondary top-2" : "bg-light top-2"
                  }`}
                />
                <span
                  className={`absolute left-0 w-full h-0.5 transition-all duration-300 ${
                    isOpen ? "bg-light -rotate-45 top-2" : scrolled ? "bg-secondary top-4" : "bg-light top-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-30 lg:hidden ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div 
          className="menu-overlay absolute inset-0 bg-secondary origin-top"
          style={{ transform: "scaleY(0)" }}
        />
        <div className="relative h-full flex flex-col justify-center px-8">
          <nav className="space-y-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="menu-item block"
              >
                <span className="display-3 text-light hover:text-primary transition-colors">
                  {item.name}
                </span>
              </Link>
            ))}
          </nav>
          
          <div className="menu-footer absolute bottom-8 left-8 right-8">
            <div className="flex flex-col gap-4 text-light/60">
              <a href="tel:+16041234567" className="hover:text-primary transition-colors">
                (604) 123-4567
              </a>
              <a href="mailto:info@hitechrenovations.ca" className="hover:text-primary transition-colors">
                info@hitechrenovations.ca
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;