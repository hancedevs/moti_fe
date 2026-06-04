"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsHero() {
  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "12,000+", label: "ATMs Installed" },
    { value: "50+", label: "Enterprise Clients" },
    { value: "20+", label: "Years Experience" },
  ];

  return (
    <section className="relative w-full bg-gray-900 py-32 lg:py-48 flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent" />

      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-semibold tracking-wider text-sm uppercase mb-4 border border-blue-500/30">
            Our Work
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Project <span className="text-blue-500">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-2xl">
            Explore our successful implementations across banking, infrastructure,
            and enterprise solutions. Delivering excellence since 2006.
          </p>

          <div className="mb-12 flex flex-wrap gap-4">
            <Link
              href="#project-grid"
              className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-bold text-blue-600 shadow-lg hover:bg-gray-100 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md bg-white/10 px-8 py-3 text-sm font-bold text-white border border-white/20 hover:bg-white/20 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-700/50"
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-2xl font-bold text-white mb-1">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-blue-400 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
