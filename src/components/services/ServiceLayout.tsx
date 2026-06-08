"use client";

import { ServiceCategory } from "@/lib/servicesData";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

function getIconForLabel(label: string, isActive: boolean): ReactNode {
  const iconClass = isActive ? "text-white" : "text-blue-600";
  const str = label.toLowerCase();
  
  if (str.includes("atm")) {
    return <svg className={`w-5 h-5 ${iconClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>;
  } else if (str.includes("pos") || str.includes("desktop")) {
    return <svg className={`w-5 h-5 ${iconClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
  } else if (str.includes("print") || str.includes("office machines")) {
    return <svg className={`w-5 h-5 ${iconClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" /></svg>;
  } else if (str.includes("laptop") || str.includes("tablet")) {
    return <svg className={`w-5 h-5 ${iconClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
  } else if (str.includes("network") || str.includes("cyber")) {
    return <svg className={`w-5 h-5 ${iconClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>;
  } else if (str.includes("crm") || str.includes("customer")) {
    return <svg className={`w-5 h-5 ${iconClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
  } else if (str.includes("meeting") || str.includes("video")) {
    return <svg className={`w-5 h-5 ${iconClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
  } else if (str.includes("server") || str.includes("data center") || str.includes("digital banking")) {
    return <svg className={`w-5 h-5 ${iconClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>;
  }
  
  return <svg className={`w-5 h-5 ${iconClass}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
}

export default function ServiceLayout({ category }: { category: ServiceCategory }) {
  const pathname = usePathname();
  
  // Find the active item based on the URL, default to the first one
  const activeItem = category.items.find(item => pathname === item.href || pathname.startsWith(item.href + '/')) || category.items[0];

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans pb-20">
      <PageHero
        backgroundImage={category.heroImage ?? "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"}
        badgeIcon={<svg className="w-3.5 h-3.5 text-white/90 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>}
        badgeLabel="Product Portfolio"
        headingBefore={category.title}
        headingHighlight="Solutions"
        description={category.description || `Explore our comprehensive range of ${category.title.toLowerCase()} solutions designed to meet your business needs and drive growth.`}
        primaryCta={{ href: "#solutions", label: "Explore Solutions" }}
        secondaryCta={{ href: "#quote", label: "Get Quote" }}
        stats={
          category.stats
            ? Object.entries(category.stats).map(([key, value]) => ({
                value,
                label: key.replace(/([A-Z])/g, ' $1').trim(),
                icon: (
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }))
            : []
        }
      />

      <section id="solutions" className="py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-600/10 text-blue-600 text-xs font-semibold mb-4 border border-blue-500/20">
            <span className="mr-1">#</span> Our Products
          </div>
          <h2 className="text-3xl font-bold mb-4">Choose Your <span className="text-blue-600">Category</span></h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Select a category below to explore our comprehensive range of {category.title.toLowerCase()} solutions.</p>
        </div>

        <div className="flex justify-center w-full mb-16 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 lg:gap-y-16 w-fit max-w-full">
            {category.items.map((item, idx) => {
              const isActive = activeItem.href === item.href;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  scroll={false}
                  className={`relative flex flex-col items-center justify-center w-full min-w-[260px] h-32 rounded-2xl border transition-all duration-300 overflow-hidden group ${
                    isActive 
                      ? "bg-blue-600 border-blue-400 text-white shadow-xl shadow-blue-500/20" 
                      : "bg-gray-50 border-gray-200 text-gray-900 hover:border-gray-300"
                  }`}
                >
                  {isActive && (
                    <div className="absolute top-[-20px] right-0 translate-x-1/2 w-40 h-40 bg-white/20 rounded-full transition-transform duration-500 group-hover:scale-110"></div>
                  )}
                  
                  {!isActive && (
                    <div className="absolute top-[-20px] right-0 translate-x-1/2 w-40 h-40 bg-gray-200/40 rounded-full transition-transform duration-500 group-hover:scale-110"></div>
                  )}
                  
                  <div className="relative z-10 flex flex-col items-center">
                    <div className={`mb-3 flex items-center justify-center w-12 h-12`}>
                      {getIconForLabel(item.label, isActive)}
                    </div>
                    <h3 className="text-[14px] font-medium text-center px-4 mb-1 leading-tight tracking-wide">{item.label}</h3>
                    {item.productCount !== undefined && (
                      <p className={`text-[12px] ${isActive ? "text-blue-50" : "text-gray-500"}`}>{item.productCount} Products</p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8 flex items-center gap-6">
          <div className="w-16 h-16 flex items-center justify-center shrink-0">
             <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{activeItem.label}</h2>
            <p className="text-gray-500">{activeItem.description || `Complete ${activeItem.label} solutions including installation, maintenance, and monitoring.`}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeItem.products && activeItem.products.length > 0 ? (
            activeItem.products.map((product, idx) => (
              <div key={`${activeItem.href}-${idx}`} className="bg-white border border-gray-200 rounded-xl overflow-hidden group hover:border-gray-300 transition-colors flex flex-col">
                <div className="h-56 bg-gray-100 relative overflow-hidden shrink-0">
                  <Image src={product.image} alt={product.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full shadow-lg">
                      {activeItem.label}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 hover:text-blue-600 cursor-pointer transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-6 flex-grow">
                    {product.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                    {product.features.map((feature, fIdx) => (
                      <span key={fIdx} className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] rounded border border-gray-200">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact" className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 text-sm font-medium rounded-md transition-colors flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white mt-auto">
                    Get Quote
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 bg-white rounded-xl border border-gray-200">
              <p className="text-gray-500 text-lg">Detailed products are coming soon for this solution.</p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-gray-200 mt-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-gray-100 text-gray-600 text-[11px] font-semibold mb-4 border border-gray-200">
            Why Choose Us
          </div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Your Digital Transformation Partner</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-300 transition-colors">
            <div className="w-14 h-14 flex items-center justify-center text-[#a78bfa] mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11L12 15L5 11M19 7L12 11L5 7M19 15L12 19L5 15" /></svg>
            </div>
            <h3 className="text-gray-900 text-[15px] font-bold mb-3">Proven Solutions</h3>
            <p className="text-gray-500 text-[13px] leading-relaxed">Battle-tested solutions implemented across 14+ banks</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-300 transition-colors">
            <div className="w-14 h-14 flex items-center justify-center text-[#60a5fa] mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h3 className="text-gray-900 text-[15px] font-bold mb-3">Local Support</h3>
            <p className="text-gray-500 text-[13px] leading-relaxed">In-country support team with quick response time</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-300 transition-colors">
            <div className="w-14 h-14 flex items-center justify-center text-[#34d399] mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            </div>
            <h3 className="text-gray-900 text-[15px] font-bold mb-3">Expert Team</h3>
            <p className="text-gray-500 text-[13px] leading-relaxed">Certified consultants and developers</p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 flex flex-col items-center text-center hover:border-gray-300 transition-colors">
            <div className="w-14 h-14 flex items-center justify-center text-[#c084fc] mb-6">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <h3 className="text-gray-900 text-[15px] font-bold mb-3">Customization</h3>
            <p className="text-gray-500 text-[13px] leading-relaxed">Tailored solutions to meet your requirements</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="quote" className="py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto border-t border-gray-200 mt-12">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-semibold mb-6">
            Get Started
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-500 mb-10">Contact our team for product information, quotes, and customized solutions.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-300 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-gray-900 font-bold mb-2">Contact Sales</h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow">Get in touch with our sales team for product inquiries.</p>
              <Link href="/contact" className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors">Contact Sales</Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-300 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <h3 className="text-gray-900 font-bold mb-2">Request Quote</h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow">Request pricing and customized solutions.</p>
              <Link href="/contact" className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors">Request Quote</Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col items-center text-center hover:border-gray-300 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center text-blue-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <h3 className="text-gray-900 font-bold mb-2">All Products</h3>
              <p className="text-gray-500 text-sm mb-6 flex-grow">Explore our complete range of solutions.</p>
              <Link href="/services/computer-peripherals" className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors">View Products</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
