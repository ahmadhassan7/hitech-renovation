"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    address: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Form animation
      gsap.from(".form-section", {
        y: 60,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Form fields animation
      gsap.from(".form-field", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 85%",
        },
      });

      // Info cards animation
      gsap.from(".info-card", {
        x: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".info-section",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-accent">
      <div className="container">
        <div className="grid-12 gap-12">
          {/* Form Section */}
          <div className="col-span-12 lg:col-span-7">
            <div className="form-section">
              <span className="text-primary font-medium uppercase tracking-wider">Get Started</span>
              <h2 className="display-2 text-secondary mt-2 mb-8">
                Request Your Free Quote
              </h2>
              
              <form onSubmit={handleSubmit} className="contact-form space-y-6">
                {/* Personal Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-field">
                    <label className="block text-base font-semibold text-secondary mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 text-base bg-white border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-200 placeholder:text-gray-500 text-gray-900 indent-1"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-field">
                    <label className="block text-base font-semibold text-secondary mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 text-base bg-white border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-200 placeholder:text-gray-500 text-gray-900 indent-1"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-field">
                    <label className="block text-base font-semibold text-secondary mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 text-base bg-white border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-200 placeholder:text-gray-500 text-gray-900 indent-1"
                      placeholder="(604) 123-4567"
                    />
                  </div>
                  
                  <div className="form-field">
                    <label className="block text-base font-semibold text-secondary mb-3">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      required
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-6 py-4 text-base bg-white border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-200 placeholder:text-gray-500 text-gray-900 indent-1"
                    >
                      <option value="">Select Project Type</option>
                      <option value="renovation">Renovation</option>
                      <option value="home-building">Home Building</option>
                      <option value="commercial">Commercial</option>
                      <option value="multifamily">Multifamily</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-field">
                    <label className="block text-base font-semibold text-secondary mb-3">
                      Estimated Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-6 py-4 text-base bg-white border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-200 placeholder:text-gray-500 text-gray-900 indent-1"
                    >
                      <option value="">Select Budget Range</option>
                      <option value="under-50k">Under $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                    </select>
                  </div>
                  
                  <div className="form-field">
                    <label className="block text-base font-semibold text-secondary mb-3">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-6 py-4 text-base bg-white border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-200 placeholder:text-gray-500 text-gray-900 indent-1"
                    >
                      <option value="">When to Start</option>
                      <option value="immediate">Immediately</option>
                      <option value="1-month">Within 1 Month</option>
                      <option value="3-months">Within 3 Months</option>
                      <option value="6-months">Within 6 Months</option>
                      <option value="planning">Just Planning</option>
                    </select>
                  </div>
                </div>

                {/* Address */}
                <div className="form-field">
                  <label className="block text-base font-semibold text-secondary mb-3">
                    Project Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-5 py-4 text-base bg-white border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-200 placeholder:text-gray-400"
                    placeholder="123 Main St, Vancouver, BC"
                  />
                </div>

                {/* Message */}
                <div className="form-field">
                  <label className="block text-base font-semibold text-secondary mb-3">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-5 py-4 text-base bg-white border border-gray-300 rounded-xl focus:border-primary focus:ring-2 focus:ring-primary/10 focus:outline-none transition-all duration-200 placeholder:text-gray-400 resize-none"
                    placeholder="Tell us about your project vision, specific requirements, or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <div className="form-field">
                  <button
                    type="submit"
                    className="btn btn-primary w-full md:w-auto"
                  >
                    <span>Submit Quote Request</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  <p className="text-sm text-gray-600 mt-4">
                    * Required fields. We'll respond within 24 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Info Section */}
          <div className="col-span-12 lg:col-span-5">
            <div className="info-section lg:pl-12">
              {/* Why Choose Us Card */}
              <div className="info-card bg-secondary text-light p-8 rounded-2xl mb-8">
                <h3 className="text-2xl font-bold mb-4">Why Work With HITECH?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-light/80">Free consultation and detailed quotes</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-light/80">Licensed, bonded, and insured</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-light/80">16+ years of proven excellence</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-light/80">Transparent pricing, no hidden costs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-light/80">Warranty on all our work</span>
                  </li>
                </ul>
              </div>

              {/* Quick Contact Card */}
              <div className="info-card bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-secondary mb-6">Need Immediate Help?</h3>
                <div className="space-y-4">
                  <a href="tel:+16041234567" className="flex items-center text-secondary hover:text-primary transition-colors">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-medium">(604) 123-4567</span>
                  </a>
                  <a href="mailto:info@hitechrenovations.ca" className="flex items-center text-secondary hover:text-primary transition-colors">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="font-medium">info@hitechrenovations.ca</span>
                  </a>
                </div>
                
                <div className="mt-6 pt-6 border-t border-secondary/10">
                  <p className="text-sm text-secondary/60 mb-2">Response Time</p>
                  <p className="font-semibold text-secondary">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;