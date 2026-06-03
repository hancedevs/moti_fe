"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "850+", label: "Employees" },
    { value: "117+", label: "Locations" },
    { value: "12,000+", label: "ATM Installations" }
  ];

  return (
    <section className="relative w-full bg-gray-900 py-32 lg:py-48 flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />

      {/* Content */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-semibold tracking-wider text-sm uppercase mb-4 border border-blue-500/30">
            About Our Company
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Who <span className="text-blue-500">We Are</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl">
            Ethiopia's leading ICT solution provider with 20+ years of experience in banking equipment, enterprise infrastructure, and technology solutions.
          </p>
          
          <div className="mb-12 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-8 py-3 text-sm font-bold text-white shadow-lg hover:bg-blue-500 transition-colors">
              Contact
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-md bg-white/10 px-8 py-3 text-sm font-bold text-white border border-white/20 hover:bg-white/20 transition-colors">
              Learn More
            </a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-700/50"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-2xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
