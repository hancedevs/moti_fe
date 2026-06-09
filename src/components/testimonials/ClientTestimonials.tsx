"use client";

import Link from "next/link";
import { useRef, useState, useEffect, useCallback } from "react";
import { useGetTestimonialsQuery } from "@/store/api/apiSlice";
import AnimateInView from "@/components/ui/AnimateInView";

type ClientTestimonialsProps = {
  variant?: "light" | "dark";
  showViewAll?: boolean;
  sectionId?: string;
  badgeLabel?: string;
};

export default function ClientTestimonials({
  variant = "light",
  showViewAll = false,
  sectionId = "testimonials",
  badgeLabel = "Client Feedback",
}: ClientTestimonialsProps) {
  const isDark = variant === "dark";
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const { data: testimonials, isLoading, isError } = useGetTestimonialsQuery();

  const checkScroll = useCallback(() => {
    if (scrollRef.current && testimonials) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 2);

      const cardWidth = scrollWidth / testimonials.length;
      const newIndex = Math.round(scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  }, [testimonials]);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  useEffect(() => {
    if (!scrollRef.current || !testimonials) return;
    const timer = setInterval(() => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current!;
      const isAtEnd = scrollLeft >= scrollWidth - clientWidth - 2;

      if (isAtEnd) {
        scrollRef.current!.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        const scrollAmount = clientWidth > 768 ? clientWidth / 3 : clientWidth;
        scrollRef.current!.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials]);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 768 ? clientWidth / 3 : clientWidth;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth > 768 ? clientWidth / 3 : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollToDot = (index: number) => {
    if (scrollRef.current && testimonials) {
      const { scrollWidth } = scrollRef.current;
      const cardWidth = scrollWidth / testimonials.length;
      scrollRef.current.scrollTo({ left: cardWidth * index, behavior: "smooth" });
    }
  };

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  const getAvatarColor = (name: string) => {
    const colors = [
      "bg-blue-500",
      "bg-green-500",
      "bg-purple-500",
      "bg-orange-500",
      "bg-teal-500",
      "bg-pink-500",
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const dotsCount = testimonials ? Math.min(4, testimonials.length) : 4;

  const cardClass = isDark
    ? "bg-gray-800/80 border-gray-700/80 hover:border-gray-600"
    : "bg-white border-gray-200 hover:shadow-md";

  const skeletonClass = isDark ? "bg-gray-700" : "bg-gray-200";

  return (
    <section
      id={sectionId}
      className={isDark ? "py-12 bg-gray-900" : "py-12 bg-[#f8f9fb]"}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-8">
          <span
            className={`inline-flex items-center px-2 py-0.5 rounded-full font-semibold tracking-wider text-[10px] uppercase border shadow-sm mb-4 ${
              isDark
                ? "bg-blue-500/15 text-blue-300 border-blue-500/25"
                : "bg-blue-50/60 text-gray-900 border-blue-100/50"
            }`}
          >
            {badgeLabel}
          </span>
          <h2
            className={`text-3xl font-extrabold sm:text-4xl mb-3 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            What Our Clients Say
          </h2>
          <p
            className={`text-sm max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            Trusted by leading financial institutions and enterprises across
            Ethiopia
          </p>
        </AnimateInView>

        {isLoading && (
          <div className="flex gap-6 pb-8 pt-4 px-4 -mx-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 p-6 sm:p-8 rounded-xl border animate-pulse ${cardClass}`}
              >
                <div className={`h-4 w-24 ${skeletonClass} rounded mb-6`} />
                <div className={`h-10 w-10 ${skeletonClass} rounded mb-6`} />
                <div className="space-y-2 mb-10">
                  <div className={`h-3 ${skeletonClass} rounded w-full`} />
                  <div className={`h-3 ${skeletonClass} rounded w-5/6`} />
                </div>
              </div>
            ))}
          </div>
        )}

        {isError && (
          <div className="text-center py-12">
            <p className={isDark ? "text-gray-400" : "text-gray-500"}>
              Unable to load testimonials. Please try again later.
            </p>
          </div>
        )}

        {testimonials && testimonials.length === 0 && (
          <div className="text-center py-12">
            <p className={isDark ? "text-gray-400" : "text-gray-500"}>
              No testimonials available yet.
            </p>
          </div>
        )}

        {testimonials && testimonials.length > 0 && (
          <>
            <div className="relative">
              <div
                ref={scrollRef}
                onScroll={checkScroll}
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 pt-4 -mt-4 px-4 -mx-4 hide-scrollbar"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-center p-5 sm:p-6 rounded-xl shadow-sm border flex flex-col transition-all ${cardClass}`}
                  >
                    <div className="flex text-yellow-400 mb-3 gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${i < testimonial.rating ? "fill-current" : isDark ? "text-gray-600" : "text-gray-200"}`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <svg
                      className={`w-8 h-8 mb-3 ${isDark ? "text-blue-500/40" : "text-blue-100"}`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>

                    <p
                      className={`text-sm leading-relaxed mb-4 flex-grow ${
                        isDark ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      &ldquo;{testimonial.message}&rdquo;
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold ${getAvatarColor(testimonial.name)}`}
                      >
                        {getInitials(testimonial.name)}
                      </div>
                      <div>
                        <h4
                          className={`font-bold text-sm ${
                            isDark ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {testimonial.name}
                        </h4>
                        <p
                          className={`text-[11px] ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <style
                dangerouslySetInnerHTML={{
                  __html: `.hide-scrollbar::-webkit-scrollbar { display: none; }`,
                }}
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={scrollLeft}
                  disabled={!canScrollLeft}
                  className={`p-2 rounded-full border transition-colors ${
                    isDark
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-white"
                  } ${canScrollLeft ? "text-gray-300 hover:bg-gray-700 cursor-pointer" : "text-gray-600 opacity-50 cursor-not-allowed"}`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex items-center gap-2">
                  {[...Array(dotsCount)].map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => scrollToDot(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        Math.min(activeIndex, dotsCount - 1) === i
                          ? "w-5 bg-blue-600"
                          : isDark
                            ? "w-1.5 bg-gray-600 hover:bg-gray-500"
                            : "w-1.5 bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={scrollRight}
                  disabled={!canScrollRight}
                  className={`p-2 rounded-full border transition-colors ${
                    isDark
                      ? "border-gray-700 bg-gray-800"
                      : "border-gray-200 bg-white"
                  } ${canScrollRight ? "text-gray-300 hover:bg-gray-700 cursor-pointer" : "text-gray-600 opacity-50 cursor-not-allowed"}`}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {showViewAll && (
                <Link
                  href="/testimonials"
                  className={`inline-flex items-center gap-2 px-5 py-2 border rounded-md text-xs font-medium transition-colors shadow-sm ${
                    isDark
                      ? "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
                      : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  View All Testimonials
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
