"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PointsOfPresence() {
  const regions = [
    {
      name: "Addis Ababa",
      offices: "15+ offices",
      cities: ["Addis Ababa (HQ)", "East Addis", "+4 more"],
    },
    {
      name: "North Region",
      offices: "25+ offices",
      cities: ["Bahir Dar", "Gondar", "+4 more"],
    },
    {
      name: "South Region",
      offices: "18+ offices",
      cities: ["Hawassa", "Arba Minch", "+4 more"],
    },
    {
      name: "East Region",
      offices: "20+ offices",
      cities: ["Adama", "Dire Dawa", "+4 more"],
    },
    {
      name: "West Region",
      offices: "15+ offices",
      cities: ["Jimma", "Nekemte", "+4 more"],
    }
  ];

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
        <div className="flex flex-col xl:flex-row gap-8 items-start">
          
          {/* Map Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full xl:w-[55%] bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-center"
          >
            <div className="relative w-full rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
              <Image 
                src="/ethiopia-map.webp" 
                alt="MOTI Points of Presence Map" 
                width={800}
                height={600}
                className="w-full h-auto object-contain"
                priority
              />
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
              {regions.map((region, index) => (
                <div key={index} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-sm"></div>
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
              ))}
            </div>

            {/* Maintenance Coverage Card */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm mt-2">
              <h3 className="text-center font-bold text-gray-900 text-sm mb-6 pb-4 border-b border-gray-50">
                Maintenance Services Coverage
              </h3>
              
              <div className="grid grid-cols-2 gap-y-8 gap-x-4">
                <div className="text-center">
                  <p className="text-2xl font-black text-blue-600 mb-1">12,000+</p>
                  <p className="text-[10px] text-gray-500 uppercase font-medium tracking-wide">ATM Installations</p>
                </div>
                <div className="text-center border-l border-gray-100">
                  <p className="text-2xl font-black text-blue-600 mb-1">772+</p>
                  <p className="text-[10px] text-gray-500 uppercase font-medium tracking-wide">Cities Covered</p>
                </div>
                <div className="text-center pt-2">
                  <p className="text-2xl font-black text-blue-600 mb-1">24/7</p>
                  <p className="text-[10px] text-gray-500 uppercase font-medium tracking-wide">Support</p>
                </div>
                <div className="text-center border-l border-gray-100 pt-2">
                  <p className="text-2xl font-black text-blue-600 mb-1">99.5%</p>
                  <p className="text-[10px] text-gray-500 uppercase font-medium tracking-wide">Uptime Rate</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
