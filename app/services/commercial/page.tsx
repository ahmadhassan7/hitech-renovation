"use client";

import ServiceDetailHero from "@/components/services/ServiceDetailHero";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CommercialPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  const commercialServices = [
    {
      title: "Office Build-Outs",
      description: "Create productive workspaces that inspire creativity and collaboration while reflecting your brand identity.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&h=400&fit=crop",
      features: ["Open Concepts", "Meeting Rooms", "Break Areas", "Reception Design"]
    },
    {
      title: "Retail Spaces",
      description: "Design and build retail environments that enhance customer experience and drive sales.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      features: ["Store Layouts", "Display Systems", "Lighting Design", "POS Integration"]
    },
    {
      title: "Restaurants & Hospitality",
      description: "Craft dining experiences with functional kitchens and inviting atmospheres that keep customers coming back.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      features: ["Kitchen Design", "Dining Areas", "Bar Construction", "Patio Spaces"]
    },
    {
      title: "Medical & Healthcare",
      description: "Build compliant healthcare facilities that prioritize patient comfort and operational efficiency.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop",
      features: ["Exam Rooms", "Lab Spaces", "Waiting Areas", "Compliance Standards"]
    }
  ];

  const advantages = [
    {
      title: "Minimal Disruption",
      description: "We work around your schedule to minimize impact on your business operations."
    },
    {
      title: "Code Compliance",
      description: "Expert knowledge of commercial building codes and regulations ensures smooth approvals."
    },
    {
      title: "Budget Management",
      description: "Transparent pricing and careful cost control keep your project on budget."
    },
    {
      title: "Industry Expertise",
      description: "Specialized experience across various commercial sectors for optimal results."
    }
  ];

  const industries = [
    "Technology", "Finance", "Healthcare", "Retail", "Hospitality", 
    "Education", "Manufacturing", "Professional Services"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Services cards animation
      gsap.from(".commercial-service", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".commercial-services",
          start: "top 80%",
        },
      });

      // Advantages animation
      gsap.from(".advantage-item", {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".advantages-grid",
          start: "top 85%",
        },
      });

      // Industries animation
      gsap.from(".industry-tag", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".industries-section",
          start: "top 85%",
        },
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <ServiceDetailHero
        title="Commercial"
        subtitle="Business Spaces That Work"
        description="Transform your commercial space into a powerful business asset. We create environments that enhance productivity, impress clients, and support your company's growth."
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop"
      />

      <div ref={contentRef}>
        {/* Commercial Services */}
        <section className="section bg-light">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="display-2 text-secondary mb-4">Commercial Construction Solutions</h2>
              <p className="body-lg text-secondary/70 max-w-3xl mx-auto">
                From small office renovations to large-scale commercial developments, 
                we deliver projects that meet your business objectives and timeline.
              </p>
            </div>

            <div className="commercial-services grid-12 gap-8">
              {commercialServices.map((service, index) => (
                <div key={index} className="commercial-service col-span-12 lg:col-span-6">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                      <div className="relative h-64 md:h-full">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-secondary mb-3">{service.title}</h3>
                        <p className="text-secondary/70 mb-6">{service.description}</p>
                        <div className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                              </div>
                              <span className="text-sm text-secondary/60">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose HITECH */}
        <section className="section bg-secondary text-light">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="display-2 mb-4">The HITECH Commercial Advantage</h2>
              <p className="body-lg text-light/80 max-w-3xl mx-auto">
                We understand that commercial construction requires a different approach. 
                Our expertise ensures your project is completed efficiently and professionally.
              </p>
            </div>

            <div className="advantages-grid grid-12 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="advantage-item col-span-12 md:col-span-6 lg:col-span-3">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      {index === 0 && (
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      )}
                      {index === 1 && (
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                        </svg>
                      )}
                      {index === 2 && (
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {index === 3 && (
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{advantage.title}</h3>
                    <p className="text-light/70">{advantage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Process */}
        <section className="section bg-light">
          <div className="container">
            <div className="grid-12 gap-12 items-center">
              <div className="col-span-12 lg:col-span-6">
                <h2 className="display-2 text-secondary mb-6">Our Commercial Project Process</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Initial Consultation</h3>
                      <p className="text-secondary/70">Understand your business needs, timeline, and budget requirements.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Space Planning & Design</h3>
                      <p className="text-secondary/70">Create efficient layouts that maximize your space and support workflow.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Permits & Approvals</h3>
                      <p className="text-secondary/70">Navigate complex commercial permitting with our experienced team.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Construction Phase</h3>
                      <p className="text-secondary/70">Execute the build with minimal disruption to your operations.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">5</div>
                    <div>
                      <h3 className="text-xl font-bold text-secondary mb-2">Final Inspection & Handover</h3>
                      <p className="text-secondary/70">Ensure everything meets specifications before you move in.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-6">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                  alt="Commercial construction process"
                  className="rounded-3xl w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="industries-section section bg-primary text-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="display-2 mb-4">Industries We Serve</h2>
              <p className="body-lg text-white/80 max-w-3xl mx-auto">
                Specialized experience across diverse commercial sectors
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <span key={index} className="industry-tag px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-lg">
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section bg-light">
          <div className="container">
            <div className="grid-12 gap-8 text-center">
              <div className="col-span-6 md:col-span-3">
                <div className="display-1 text-primary mb-2">500K+</div>
                <p className="text-lg text-secondary">Square Feet Completed</p>
              </div>
              <div className="col-span-6 md:col-span-3">
                <div className="display-1 text-primary mb-2">80+</div>
                <p className="text-lg text-secondary">Commercial Clients</p>
              </div>
              <div className="col-span-6 md:col-span-3">
                <div className="display-1 text-primary mb-2">95%</div>
                <p className="text-lg text-secondary">Repeat Business</p>
              </div>
              <div className="col-span-6 md:col-span-3">
                <div className="display-1 text-primary mb-2">30+</div>
                <p className="text-lg text-secondary">Years Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section bg-secondary text-light text-center">
          <div className="container">
            <h2 className="display-2 mb-4">Let's Build Your Business Space</h2>
            <p className="body-lg text-light/80 max-w-2xl mx-auto mb-8">
              Ready to create a commercial space that works as hard as you do?
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/contact" className="btn btn-primary btn-lg">
                <span>Request Quote</span>
              </Link>
              <Link href="/our-work" className="btn btn-outline border-light text-light hover:bg-light hover:text-dark btn-lg">
                <span>View Portfolio</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      
      {/* Spacer for footer */}
      <div className="h-24 bg-light"></div>
    </>
  );
}