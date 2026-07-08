"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PointsOfPresence() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const regions = [
    {
      name: "Addis Ababa",
      offices: "15+ offices",
      cities: ["Addis Ababa (HQ)", "East Addis", "+4 more"],
      cx: 39.4, cy: 52.7, color: "#3b82f6",
    },
    {
      name: "North Region",
      offices: "25+ offices",
      cities: ["Bahir Dar", "Gondar", "+4 more"],
      cx: 40.0, cy: 5.2, color: "#ef4444",
    },
    {
      name: "South Region",
      offices: "18+ offices",
      cities: ["Hawassa", "Arba Minch", "+4 more"],
      cx: 51.2, cy: 66.4, color: "#22c55e",
    },
    {
      name: "East Region",
      offices: "20+ offices",
      cities: ["Adama", "Dire Dawa", "+4 more"],
      cx: 59.6, cy: 47.5, color: "#f59e0b",
    },
    {
      name: "West Region",
      offices: "15+ offices",
      cities: ["Jimma", "Nekemte", "+4 more"],
      cx: 20.1, cy: 48.7, color: "#a855f7",
    }
  ];

  const isHovered = (name: string) => hoveredRegion === name;

  return (
    <section id="points-of-presence" className="py-20 bg-[#f4f7fb]">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-[11px] font-bold tracking-wider uppercase shadow-sm mb-4">
            Nationwide Network
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Points of Presence Across <span className="text-blue-600">Ethiopia</span>
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto mb-8">
            With 117+ service points across Ethiopia, we deliver technology solutions nationwide.
          </p>

          {/* Stat Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { val: "117+", label: "Points of Presence" },
              { val: "36+", label: "District Offices" },
              { val: "36+", label: "Branch Offices" },
              { val: "772+", label: "Cities & Towns" }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-full shadow-md hover:bg-blue-400 transition-colors cursor-default">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-300"></div>
                <span className="font-bold text-sm">{stat.val}</span>
                <span className="text-xs text-blue-100">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex flex-col xl:flex-row gap-8 items-stretch">
          
          {/* Map Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full xl:w-[55%] bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col"
          >
            <div className="relative w-full h-full min-h-[300px] rounded-xl overflow-hidden bg-gray-50 group/map">
              <Image 
                src="/ethiopia-map.webp" 
                alt="MOTI Points of Presence Map" 
                fill
                className="object-cover"
                priority
              />

              {/* Interactive Dot Overlay */}
              <svg
                className="absolute inset-0 w-full h-full z-10"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                {regions.map((region) => {
                  const active = isHovered(region.name);
                  return (
                    <g key={region.name}>
                      {/* Large invisible hit area */}
                      <circle
                        cx={region.cx}
                        cy={region.cy}
                        r="5"
                        className="fill-transparent cursor-pointer"
                        onMouseEnter={() => setHoveredRegion(region.name)}
                        onMouseLeave={() => setHoveredRegion(null)}
                      />
                      {/* Visible dot */}
                      <circle
                        cx={region.cx}
                        cy={region.cy}
                        r={active ? "2.5" : "1.5"}
                        fill={region.color}
                        stroke="white"
                        strokeWidth={active ? "0.8" : "0.4"}
                        className="transition-all duration-200"
                        style={{ filter: active ? 'drop-shadow(0 0 6px currentColor)' : 'none' }}
                        onMouseEnter={() => setHoveredRegion(region.name)}
                        onMouseLeave={() => setHoveredRegion(null)}
                      />
                      {/* Tooltip label on hover */}
                      {active && (() => {
                        const isTop = region.cy < 12;
                        const tooltipY = isTop ? region.cy + 4 : region.cy - 10;
                        const textY = isTop ? region.cy + 9 : region.cy - 5;
                        return (
                          <g>
                            <rect
                              x={region.cx - 10}
                              y={tooltipY}
                              width="20"
                              height="7"
                              rx="1.5"
                              fill="rgba(0,0,0,0.75)"
                            />
                            <text
                              x={region.cx}
                              y={textY}
                              textAnchor="middle"
                              fill="white"
                              fontSize="3"
                              fontWeight="600"
                            >
                              {region.name}
                            </text>
                          </g>
                        );
                      })()}
                    </g>
                  );
                })}
              </svg>
            </div>
          </motion.div>

          {/* Stats Right Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full xl:w-[45%] flex flex-col gap-6"
          >
            
            {/* Regions Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {regions.map((region, index) => {
                const active = isHovered(region.name);
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredRegion(region.name)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    className={`bg-white rounded-2xl p-5 border shadow-sm transition-all duration-200 cursor-pointer ${
                      active
                        ? "border-blue-400 shadow-lg shadow-blue-200/50 scale-[1.03] ring-1 ring-blue-400/30"
                        : "border-gray-100 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-2.5 h-2.5 rounded-full shadow-sm transition-all duration-200"
                        style={{ background: region.color, boxShadow: active ? `0 0 10px ${region.color}80` : 'none' }}
                      />
                      <h3 className="font-bold text-gray-900 text-sm">{region.name}</h3>
                    </div>
                    <p className="text-xs text-gray-500 font-medium mb-3">{region.offices}</p>
                    <div className="flex flex-wrap gap-2">
                      {region.cities.map((city, cIdx) => (
                        <span key={cIdx} className={`text-[10px] px-2 py-1 rounded-md ${cIdx === region.cities.length - 1 ? 'text-blue-600 font-medium' : 'bg-gray-50 text-gray-600 border border-gray-100'}`}>
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Maintenance Coverage Card - Full Width Horizontal */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-sm"></div>
                <h3 className="font-bold text-gray-900 text-sm">Maintenance Services Coverage</h3>
              </div>
              <div className="flex flex-wrap gap-4 justify-between">
                <div className="text-center flex-1 min-w-[100px] bg-gray-50 rounded-lg p-3">
                  <p className="text-lg font-black text-blue-600">12,000+</p>
                  <p className="text-[10px] text-gray-500 uppercase font-medium">ATM Installations</p>
                </div>
                <div className="text-center flex-1 min-w-[100px] bg-gray-50 rounded-lg p-3">
                  <p className="text-lg font-black text-blue-600">772+</p>
                  <p className="text-[10px] text-gray-500 uppercase font-medium">Cities Covered</p>
                </div>
                <div className="text-center flex-1 min-w-[100px] bg-gray-50 rounded-lg p-3">
                  <p className="text-lg font-black text-blue-600">24/7</p>
                  <p className="text-[10px] text-gray-500 uppercase font-medium">Support</p>
                </div>
                <div className="text-center flex-1 min-w-[100px] bg-gray-50 rounded-lg p-3">
                  <p className="text-lg font-black text-blue-600">99.5%</p>
                  <p className="text-[10px] text-gray-500 uppercase font-medium">Uptime Rate</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
