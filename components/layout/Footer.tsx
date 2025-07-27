"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "Renovations", href: "/services/renovations" },
      { name: "Home Building", href: "/services/custom-homes" },
      { name: "Commercial", href: "/services/commercial" },
      { name: "Multifamily", href: "/services/multifamily" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "/team" },
      { name: "Our Work", href: "/our-work" },
      { name: "News", href: "/news" },
    ],
    Support: [
      { name: "Contact", href: "/contact" },
      { name: "Get Quote", href: "/contact" },
      { name: "FAQs", href: "/about#faqs" },
      { name: "Reviews", href: "/about#testimonials" },
    ],
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate footer content on scroll
      gsap.from(".footer-content > *", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="px-4 sm-px-8 pb-8 bg-light">
      <div className="min-h-500 relative bg-secondary rounded-2xl flex flex-col justify-between overflow-hidden">
        {/* Background HITECH text */}
        <h3 className="footer-bg-text absolute inset-0 flex items-center justify-center uppercase font-bold text-white-003 select-none pointer-events-none text-25vw leading-none">
          HITECH
        </h3>
        
        {/* Content wrapper */}
        <div className="relative z-10 p-8 md-p-12 flex flex-col justify-between h-full">
          <div className="footer-content">
            <div className="flex flex-col lg:flex-row justify-between gap-12">
              {/* Left side - Company info */}
              <div className="w-full lg-w-5-12">
                <h1 className="display-3 text-primary mb-4">HITECH</h1>
                <p className="text-light/70 text-lg max-w-md mb-8">
                  Premier construction and renovation services in Vancouver and Greater BC. 
                  Building dreams into reality since 2009.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3 mb-8">
                  <a href="tel:+16041234567" className="flex items-center gap-3 text-light/80 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium">(604) 123-4567</span>
                  </a>
                  <a href="mailto:info@hitechrenovations.ca" className="flex items-center gap-3 text-light/80 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">info@hitechrenovations.ca</span>
                  </a>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3 flex-wrap">
                  <Link href="/contact" className="btn btn-primary">
                    <span>Start Your Project</span>
                  </Link>
                  <Link href="/our-work" className="btn btn-outline border-light text-light hover:bg-light hover:text-secondary">
                    <span>View Portfolio</span>
                  </Link>
                </div>
              </div>

              {/* Right side - Links */}
              <div className="w-full lg-w-7-12">
                <div className="grid grid-cols-1 sm-grid-cols-3 gap-8">
                  {Object.entries(footerLinks).map(([category, links]) => (
                    <div key={category}>
                      <h4 className="text-primary font-bold uppercase tracking-wider text-xl mb-6">
                        {category}
                      </h4>
                      <ul className="space-y-4">
                        {links.map((link) => (
                          <li key={link.name}>
                            <Link
                              href={link.href}
                              className="text-light/70 hover:text-primary transition-colors text-lg"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-light-10 pt-8 mt-12 flex flex-col sm-flex-row justify-between gap-4">
            <p className="text-light/50">
              © {currentYear} HITECH Renovations. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-light/50 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-light/50 hover:text-primary transition-colors">
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;