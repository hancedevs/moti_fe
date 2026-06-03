"use client";

import { useRef, useState, useEffect } from "react";

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "Moti Engineering has been our trusted partner for over 10 years. Their ATM installation and support services are exceptional. The team is professional and always responsive.",
      author: "Ato Getachew Tesfaye",
      role: "CTO, Commercial Bank of Ethiopia",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      text: "Their network infrastructure solution transformed our operations. The implementation was smooth and their ongoing support is outstanding.",
      author: "W/ro Sara Hailu",
      role: "IT Director, Zemen Bank",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      text: "We chose Moti Engineering for our digital transformation project. Their expertise in banking technology is unmatched in Ethiopia.",
      author: "Ato Daniel Bekele",
      role: "COO, Awash Bank",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      text: "The ERP solution implemented by Moti gave us unprecedented visibility into our supply chain and finance. It has been a game-changer for our manufacturing scaling.",
      author: "W/ro Hanna Tadesse",
      role: "CFO, National Manufacturing Co.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      text: "Their Contact Center solution improved our customer satisfaction scores by 40% in just three months. The omnichannel integration was flawless.",
      author: "Ato Dawit Mekonnen",
      role: "Customer Success Lead, EthioTelecom",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      text: "Exceptional POS and card printing solutions. Moti is truly a leader in the Ethiopian IT sector, providing hardware that withstands high daily volume.",
      author: "W/ro Bethlehem Alemu",
      role: "Retail Director, Shoa Supermarket",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);

      // Calculate active index based on scroll position
      const cardWidth = scrollWidth / testimonials.length;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 2;
        
        if (isAtEnd) {
          // Reset to start if we reached the end
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll right by one card length
          const scrollAmount = clientWidth > 768 ? clientWidth / 3 : clientWidth;
          scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
      }
    }, 4000); // Scrolls every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth > 768 ? scrollRef.current.clientWidth / 3 : scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth > 768 ? scrollRef.current.clientWidth / 3 : scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToDot = (index: number) => {
    if (scrollRef.current) {
      const { scrollWidth } = scrollRef.current;
      const cardWidth = scrollWidth / testimonials.length;
      scrollRef.current.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-[#f8f9fb]">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50/60 text-gray-900 font-semibold tracking-wider text-[10px] uppercase border border-blue-100/50 shadow-sm mb-4">
            Client Feedback
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">What Our Clients Say</h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Trusted by leading financial institutions and enterprises across Ethiopia
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 -mt-4 px-4 -mx-4 hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-center bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-gray-200 flex flex-col hover:shadow-md transition-shadow"
              >
                {/* Stars */}
                <div className="flex text-yellow-400 mb-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Fixed Single Quote Icon */}
                <svg className="w-10 h-10 text-blue-100 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-gray-600 text-sm leading-relaxed mb-10 flex-grow">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{testimonial.author}</h4>
                    <p className="text-[11px] text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}} />
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-center gap-4 mt-8 mb-8">
          <button 
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className={`p-2 rounded-full border border-gray-200 bg-white transition-colors ${canScrollLeft ? 'text-gray-600 hover:bg-gray-50 cursor-pointer' : 'text-gray-300 cursor-not-allowed opacity-50'}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2">
            {[...Array(4)].map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToDot(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  Math.min(activeIndex, 3) === i 
                    ? "w-5 bg-blue-600" 
                    : "w-1.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              ></button>
            ))}
          </div>
          
          <button 
            onClick={scrollRight}
            disabled={!canScrollRight}
            className={`p-2 rounded-full border border-gray-200 bg-white transition-colors ${canScrollRight ? 'text-gray-600 hover:bg-gray-50 cursor-pointer' : 'text-gray-300 cursor-not-allowed opacity-50'}`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
            View All Testimonials
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
