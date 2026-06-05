"use client";

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
    <div className="w-full h-full min-h-[320px] bg-[#EAEAEA] flex items-center justify-center rounded-2xl">
      <Coffee01Icon className="w-16 h-16 text-gray-300" />
    </div>
  );
}

type SpecBoxProps = {
  label: string;
  value: string;
};

function SpecBox({ label, value }: SpecBoxProps) {
  return (
    <div className="border border-[#E0E6ED] rounded-xl p-4 bg-white">
      <p className="text-xs text-[#8D8D8D] mb-0.5">{label}</p>
      <p className="text-sm font-semibold text-[#161616]">{value}</p>
    </div>
  );
}

type CoffeeCardProps = {
  item: {
    id: number;
    name: string;
    origin: string;
    description: string;
    imageUrl: string | null;
    grade: string;
  };
  index: number;
};

function CoffeeCard({ item }: CoffeeCardProps) {
  const detail = getCoffeeDetail(item.name);

  return (
    <AnimateInView y={30}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 relative">
          <div className="rounded-2xl overflow-hidden">
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full min-h-[320px] object-cover"
              />
            ) : (
              <PlaceholderImage />
            )}
          </div>
          <span className="absolute top-4 left-4 bg-[#0082B4] text-white px-4 py-1.5 text-sm rounded-lg font-semibold">
            {detail.badgeText}
          </span>
        </div>

        <div className="lg:col-span-7">
          <h2 className="text-2xl font-bold text-[#161616] mb-3">
            {item.name}
          </h2>

          <div className="flex flex-wrap gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-[#EDF5FF] text-[#0082B4] text-xs font-semibold px-3 py-1.5 rounded-full">
              <Location01Icon className="w-3.5 h-3.5" />
              {detail.region}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-[#EDF5FF] text-[#0082B4] text-xs font-semibold px-3 py-1.5 rounded-full">
              <MountainIcon className="w-3.5 h-3.5" />
              Altitude: {detail.altitude}
            </span>
          </div>

          <div className="text-[#525252] text-sm leading-relaxed space-y-3 mb-6">
            {item.description.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <hr className="border-[#E0E6ED] mb-6" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <SpecBox label="Processing" value={detail.processing} />
            <SpecBox label="Acidity" value={detail.acidity} />
            <SpecBox label="Body" value={detail.body} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-6">
            <div className="md:col-span-5">
              <SpecBox label="Harvest Season" value={detail.harvestSeason} />
            </div>
            <div className="md:col-span-7">
              <SpecBox label="Grades Available" value={detail.gradesAvailable} />
            </div>
          </div>

          <p className="text-sm font-semibold text-[#161616] mb-2">
            Tasting Notes
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {detail.tastingNotes.map((note) => (
              <span
                key={note}
                className="inline-flex items-center px-3 py-1 rounded-full bg-[#EDF5FF] text-[#0082B4] text-xs font-medium"
              >
                {note}
              </span>
            ))}
          </div>

          <button className="inline-flex items-center gap-2 bg-[#0F62FE] text-white px-6 py-3 rounded-xl text-sm font-bold shadow-sm hover:bg-[#0B4FCD] transition-colors">
            {detail.buttonText}
            <ArrowRight02Icon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </AnimateInView>
  );
}

function LoadingSkeleton() {
  return (
    <div className="space-y-16">
      {[0, 1, 2].map((i) => (
        <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-pulse">
          <div className="lg:col-span-5 bg-gray-200 rounded-2xl min-h-[320px]" />
          <div className="lg:col-span-7 space-y-4">
            <div className="h-7 bg-gray-200 rounded w-1/2" />
            <div className="flex gap-3">
              <div className="h-6 bg-gray-200 rounded-full w-32" />
              <div className="h-6 bg-gray-200 rounded-full w-40" />
            </div>
            <div className="h-4 bg-gray-200 rounded w-full" />
            <div className="h-4 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-5/6" />
            <hr className="border-gray-100" />
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((j) => (
                <div key={j} className="h-16 bg-gray-200 rounded-xl" />
              ))}
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-5 h-16 bg-gray-200 rounded-xl" />
              <div className="col-span-7 h-16 bg-gray-200 rounded-xl" />
            </div>
            <div className="h-5 bg-gray-200 rounded w-24" />
            <div className="flex gap-2">
              {[1, 2, 3].map((j) => (
                <div key={j} className="h-6 bg-gray-200 rounded-full w-16" />
              ))}
            </div>
            <div className="h-11 bg-gray-200 rounded-xl w-48" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CoffeePortfolio() {
  const { data, isLoading, isError, refetch } = useGetCoffeeTypesQuery();

  return (
    <section id="portfolio" className="py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-14">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#0F62FE]/10 text-[#0F62FE] font-semibold tracking-wider text-xs uppercase border border-[#0F62FE]/20 mb-4">
            Our Coffee
          </span>
          <h2 className="text-3xl font-extrabold text-[#001D6C] sm:text-4xl">
            Ethiopian Coffee Portfolio
          </h2>
          <p className="mt-3 text-sm text-[#525252] max-w-2xl mx-auto">
            Discover our premium selection of single-origin Ethiopian green coffee
            beans, each with distinct flavor profiles.
          </p>
        </AnimateInView>

        {isLoading ? (
          <LoadingSkeleton />
        ) : isError ? (
          <div className="text-center py-16">
            <p className="text-[#525252] mb-4">
              Unable to load coffee varieties. Please try again.
            </p>
            <button
              onClick={refetch}
              className="inline-flex items-center gap-2 rounded-full bg-[#0F62FE] px-6 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0B4FCD] transition-colors"
            >
              Retry
            </button>
          </div>
        ) : !data || data.length === 0 ? (
          <div className="text-center py-16">
            <Coffee01Icon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-[#525252]">
              No coffee varieties available at this time.
            </p>
          </div>
        ) : (
          <div className="space-y-16 lg:space-y-20">
            {data.map((item, index) => (
              <CoffeeCard key={item.id} item={item} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
