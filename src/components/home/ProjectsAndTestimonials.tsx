"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

export default function ProjectsAndTestimonials() {
  // Testimonial State & Logic
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "Moti Engineering has been our trusted partner for over 10 years. Their ATM installation and support services are exceptional.",
      author: "Ato Getachew T.",
      role: "CTO, CBE",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      text: "Their network infrastructure solution transformed our operations. The implementation was smooth.",
      author: "W/ro Sara H.",
      role: "IT Director, Zemen Bank",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      text: "We chose Moti Engineering for our digital transformation project. Their expertise in banking technology is unmatched.",
      author: "Ato Daniel B.",
      role: "COO, Awash Bank",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  const projects = [
    {
      title: "CBE ATM Expansion",
      category: "Banking",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "EthSwitch Integration",
      category: "E-payment",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Awash Data Center",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Telebirr POS",
      category: "Software",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    }
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);
      const cardWidth = scrollWidth / testimonials.length;
      setActiveIndex(Math.round(scrollLeft / cardWidth));
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.clientWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.clientWidth, behavior: "smooth" });
    }
  };

  const scrollToDot = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.scrollWidth / testimonials.length;
      scrollRef.current.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    }
  };

  return (
    <section id="projects-testimonials" className="py-12 bg-white">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
          
          {/* Projects Column */}
          <div>
            <div className="mb-8">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50/60 text-gray-900 font-semibold tracking-wider text-[10px] uppercase border border-blue-100/50 shadow-sm mb-3">
                Our Work
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Featured Projects</h2>
              <p className="text-sm text-gray-500">Discover some of our most impactful implementations.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((project, index) => (
                <div key={index} className="group flex flex-col bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative h-32 overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] font-semibold text-blue-600">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-sm font-bold text-gray-900 mb-1">{project.title}</h3>
                    <div className="mt-auto pt-2">
                      <Link href="/projects" className="inline-flex items-center text-blue-600 font-semibold text-xs hover:text-blue-700">
                        View Details
                        <svg className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6">
              <Link href="/projects" className="text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline">
                See All Projects &rarr;
              </Link>
            </div>
          </div>

          {/* Testimonials Column */}
          <div className="bg-[#f8f9fb] p-8 rounded-3xl border border-gray-100">
            <div className="mb-8">
              <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50/60 text-gray-900 font-semibold tracking-wider text-[10px] uppercase border border-blue-100/50 shadow-sm mb-3">
                Client Feedback
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2">What Our Clients Say</h2>
              <p className="text-sm text-gray-500">Trusted by leading institutions across Ethiopia.</p>
            </div>

            <div className="relative">
              <div 
                ref={scrollRef}
                onScroll={checkScroll}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 hide-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full shrink-0 snap-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
                    <div className="flex text-yellow-400 mb-4 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                      ))}
                    </div>
                    <svg className="w-8 h-8 text-blue-100 mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                    <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">"{testimonial.text}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <img src={testimonial.avatar} alt={testimonial.author} className="w-10 h-10 rounded-full object-cover" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{testimonial.author}</h4>
                        <p className="text-[11px] text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <style dangerouslySetInnerHTML={{__html: `
                .hide-scrollbar::-webkit-scrollbar { display: none; }
              `}} />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                {[...Array(testimonials.length)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => scrollToDot(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex ? "w-5 bg-blue-600" : "w-1.5 bg-gray-300"}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={scrollLeft} disabled={!canScrollLeft} className={`p-2 rounded-full border border-gray-200 bg-white ${canScrollLeft ? 'text-gray-600 hover:bg-gray-50' : 'text-gray-300 opacity-50'}`}>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={scrollRight} disabled={!canScrollRight} className={`p-2 rounded-full border border-gray-200 bg-white ${canScrollRight ? 'text-gray-600 hover:bg-gray-50' : 'text-gray-300 opacity-50'}`}>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
