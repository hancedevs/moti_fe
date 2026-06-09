"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useGetCoffeeTypesQuery } from "@/store/api/apiSlice";
import AnimateInView from "@/components/ui/AnimateInView";
import {
  Coffee01Icon,
  ArrowRight02Icon,
  Location01Icon,
  MountainIcon,
} from "hugeicons-react";
import { getCoffeeDetail } from "@/lib/coffee";

function PlaceholderImage() {
  return (
    <div className="w-full h-[220px] bg-[#EAEAEA] dark:bg-gray-700 flex items-center justify-center rounded-xl">
      <Coffee01Icon className="w-10 h-10 text-gray-300" />
    </div>
  );
}

type SpecBoxProps = {
  label: string;
  value: string;
};

function SpecBox({ label, value }: SpecBoxProps) {
  return (
    <div className="border border-[#E0E6ED] dark:border-gray-700 rounded-md p-2 bg-white dark:bg-gray-800">
      <p className="text-[10px] text-[#8D8D8D] dark:text-gray-400 mb-0.5">{label}</p>
      <p className="text-xs font-semibold text-[#161616] dark:text-white">{value}</p>
    </div>
  );
}

function CoffeeCard({ item }: { item: any }) {
  const detail = getCoffeeDetail(item.name);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      <div className="lg:col-span-5 relative">
        <div className="rounded-xl overflow-hidden h-[220px]">
          {item.imageUrl ? (
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-full object-cover object-center"
            />
          ) : (
            <PlaceholderImage />
          )}
        </div>
        <span className="absolute top-3 left-3 bg-[#5A8CD0] text-white px-3 py-1 text-xs rounded-lg font-semibold">
          {detail.badgeText}
        </span>
      </div>

      <div className="lg:col-span-7">
        <h2 className="text-xl font-bold text-[#161616] dark:text-white mb-2">
          {item.name}
        </h2>

        <div className="flex flex-wrap gap-2 mb-2">
          <span className="inline-flex items-center gap-1 bg-[#E9F0F8] dark:bg-blue-900/20 text-[#5A8CD0] dark:text-blue-400 text-[11px] font-semibold px-2 py-1 rounded-full">
            <Location01Icon className="w-3 h-3" />
            {detail.region}
          </span>
          <span className="inline-flex items-center gap-1 bg-[#E9F0F8] dark:bg-blue-900/20 text-[#5A8CD0] dark:text-blue-400 text-[11px] font-semibold px-2 py-1 rounded-full">
            <MountainIcon className="w-3 h-3" />
            Altitude: {detail.altitude}
          </span>
        </div>

        <div className="text-[#525252] dark:text-gray-300 text-xs leading-relaxed mb-2">
          {item.description.split("\n").slice(0, 2).map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <hr className="border-[#E0E6ED] dark:border-gray-700 mb-2" />

        <div className="grid grid-cols-3 gap-2 mb-2">
          <SpecBox label="Processing" value={detail.processing} />
          <SpecBox label="Acidity" value={detail.acidity} />
          <SpecBox label="Body" value={detail.body} />
        </div>

        <div className="grid grid-cols-12 gap-2 mb-2">
          <div className="col-span-5">
            <SpecBox label="Harvest" value={detail.harvestSeason} />
          </div>
          <div className="col-span-7">
            <SpecBox label="Grades" value={detail.gradesAvailable} />
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-2">
          {detail.tastingNotes.slice(0, 4).map((note) => (
            <span
              key={note}
              className="inline-flex items-center px-2 py-0.5 rounded-full bg-[#E9F0F8] dark:bg-blue-900/20 text-[#5A8CD0] dark:text-blue-400 text-[11px] font-medium"
            >
              {note}
            </span>
          ))}
        </div>

        <button className="inline-flex items-center gap-1.5 bg-[#5A8CD0] text-white px-4 py-1.5 rounded-lg text-xs font-bold shadow-sm hover:bg-[#4A7AB8] transition-colors w-fit">
          {detail.buttonText}
          <ArrowRight02Icon className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-8">
      {[0, 1, 2].map((i) => (
        <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-pulse">
          <div className="lg:col-span-5 bg-gray-200 rounded-xl h-[220px]" />
          <div className="lg:col-span-7 space-y-3">
            <div className="h-7 bg-gray-200 rounded w-1/2" />
            <div className="flex gap-3">
              <div className="h-6 bg-gray-200 rounded-full w-32" />
              <div className="h-6 bg-gray-200 rounded-full w-40" />
            </div>
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <hr className="border-gray-100" />
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((j) => (
                <div key={j} className="h-16 bg-gray-200 rounded-lg" />
              ))}
            </div>
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-5 h-16 bg-gray-200 rounded-lg" />
              <div className="col-span-7 h-16 bg-gray-200 rounded-lg" />
            </div>
            <div className="h-5 bg-gray-200 rounded w-24" />
            <div className="flex gap-2">
              {[1, 2, 3].map((j) => (
                <div key={j} className="h-6 bg-gray-200 rounded-full w-16" />
              ))}
            </div>
            <div className="h-10 bg-gray-200 rounded-lg w-48" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CoffeePortfolio() {
  const { data, isLoading, isError, refetch } = useGetCoffeeTypesQuery();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const items = data || [];
  const itemCount = items.length;

  const checkScroll = useCallback(() => {
    if (scrollRef.current && itemCount) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      setCanScrollPrev(scrollTop > 0);
      setCanScrollNext(scrollTop < scrollHeight - clientHeight - 2);

      const itemHeight = scrollHeight / itemCount;
      const newIndex = Math.round(scrollTop / itemHeight);
      setActiveIndex(Math.min(newIndex, itemCount - 1));
    }
  }, [itemCount]);

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [checkScroll]);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current && itemCount) {
      const itemHeight = scrollRef.current.scrollHeight / itemCount;
      scrollRef.current.scrollTo({ top: itemHeight * index, behavior: "smooth" });
    }
  };

  const next = () => {
    if (activeIndex < itemCount - 1) scrollToIndex(activeIndex + 1);
  };

  const prev = () => {
    if (activeIndex > 0) scrollToIndex(activeIndex - 1);
  };

  return (
    <section id="portfolio" className="py-12 lg:py-16 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#5A8CD0]/10 dark:bg-blue-500/10 text-[#5A8CD0] dark:text-blue-400 font-semibold tracking-wider text-xs uppercase border border-[#5A8CD0]/20 dark:border-blue-500/20 mb-4">
            Our Coffee
          </span>
          <h2 className="text-3xl font-extrabold text-[#001D6C] dark:text-blue-200 sm:text-4xl">
            Ethiopian Coffee Portfolio
          </h2>
          <p className="mt-3 text-sm text-[#525252] dark:text-gray-300 max-w-2xl mx-auto">
            Discover our premium selection of single-origin Ethiopian green coffee
            beans, each with distinct flavor profiles.
          </p>
        </AnimateInView>

        {isLoading ? (
          <LoadingSkeleton />
        ) : isError ? (
          <div className="text-center py-16">
            <p className="text-[#525252] dark:text-gray-300 mb-4">
              Unable to load coffee varieties. Please try again.
            </p>
            <button
              onClick={refetch}
              className="inline-flex items-center gap-2 rounded-full bg-[#5A8CD0] px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#4A7AB8] transition-colors"
            >
              Retry
            </button>
          </div>
        ) : !data || data.length === 0 ? (
          <div className="text-center py-16">
            <Coffee01Icon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-[#525252] dark:text-gray-300">
              No coffee varieties available at this time.
            </p>
          </div>
        ) : (
          <div className="flex gap-4">
            <div className="flex flex-col items-center justify-center gap-2 shrink-0">
              <button
                type="button"
                onClick={prev}
                disabled={!canScrollPrev}
                className={`p-2 rounded-full border transition-colors ${
                  canScrollPrev
                    ? "border-gray-300 bg-white hover:bg-gray-100 text-gray-600"
                    : "border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed"
                }`}
                aria-label="Previous coffee"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>

              <div className="flex flex-col gap-2 items-center">
                {items.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToIndex(i)}
                    className={`rounded-full transition-all duration-300 ${
                      activeIndex === i
                        ? "w-2.5 h-2.5 bg-[#5A8CD0]"
                        : "w-1.5 h-1.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to coffee ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={next}
                disabled={!canScrollNext}
                className={`p-2 rounded-full border transition-colors ${
                  canScrollNext
                    ? "border-gray-300 bg-white hover:bg-gray-100 text-gray-600"
                    : "border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed"
                }`}
                aria-label="Next coffee"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
              .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}} />
            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex-1 overflow-y-scroll snap-y snap-mandatory hide-scrollbar"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none", height: "560px" }}
            >
              {items.map((item) => (
                <div key={item.id} className="snap-start h-full flex items-center py-2">
                  <CoffeeCard item={item} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
