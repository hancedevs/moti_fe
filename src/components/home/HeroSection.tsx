"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
  {
    eyebrow: "20 Years of Excellence in Ethiopia",
    title: "Banking Equipment & E-payment",
    desc: "Complete ATM solutions, POS systems, card printers, and payment solutions. 12,000+ ATM installations across Ethiopia with 24/7 support and maintenance services.",
    buttonText: "Discover More",
    buttonLink: "#services",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  {
    eyebrow: "20 Years of Excellence in Ethiopia",
    title: "Computer & Peripherals",
    desc: "Business desktops, laptops, tablets, printers, meeting room solutions, and networking devices. Complete office technology solutions for modern businesses.",
    buttonText: "View Products",
    buttonLink: "#products",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  {
    eyebrow: "20 Years of Excellence in Ethiopia",
    title: "Enterprise Software Solutions",
    desc: "Digital banking, CRM, ERP, loan management, contact center, and e-commerce solutions. Transforming businesses with cutting-edge technology.",
    buttonText: "Explore Solutions",
    buttonLink: "#software",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  {
    eyebrow: "20 Years of Excellence in Ethiopia",
    title: "Computer & Peripherals",
    desc: "Business desktops, laptops, tablets, printers, meeting room solutions, and networking devices. Complete office technology solutions for modern businesses.",
    buttonText: "Learn More",
    buttonLink: "#products",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  },
  {
    eyebrow: "20 Years of Excellence in Ethiopia",
    title: "Export - Premium Coffee",
    desc: "Premium Ethiopian coffee export including Yirgacheffe, Guji, Sidama, Limmu, and Jimma varieties. From farm to global markets with banking-grade precision.",
    buttonText: "See Export",
    buttonLink: "#export",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[calc(100vh-116px)] min-h-[500px] w-full bg-gray-900 flex items-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear"
            style={{ 
              backgroundImage: `url('${slide.image}')`,
              transform: index === currentSlide ? "scale(1.05)" : "scale(1)"
            }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <div
            key={currentSlide} // Force re-render for animation
            className="animate-fade-in-up"
          >
            <span className="inline-flex items-center mb-6 rounded-full bg-gray-600/80 px-2 py-1 text-[10px] font-semibold text-white backdrop-blur-sm border border-gray-500/30 uppercase tracking-widest shadow-sm">
              <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2l2 4-2 4-2-4 2-4z" />
              </svg>
              {slides[currentSlide].eyebrow}
            </span>
            <h1 className="mb-6 text-2xl font-extrabold tracking-wider text-white sm:text-4xl lg:text-5xl leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="mb-10 text-lg sm:text-xl text-gray-300 max-w-4xl leading-relaxed">
              {slides[currentSlide].desc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href={slides[currentSlide].buttonLink}
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-10 py-3 sm:py-2 text-sm font-bold text-white shadow-lg hover:bg-blue-500 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              >
                {slides[currentSlide].buttonText}
                <svg className="ml-2 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-10 py-3 sm:py-2 text-sm font-bold text-white shadow-lg hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators and Controls */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center items-center space-x-6">
        <button 
          onClick={prevSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white shadow-lg border border-white/10 hover:bg-white/40 transition-all hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div className="flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-blue-500" : "w-4 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white shadow-lg border border-white/10 hover:bg-white/40 transition-all hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}} />
    </section>
  );
}
