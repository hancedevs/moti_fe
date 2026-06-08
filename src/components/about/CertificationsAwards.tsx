"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const certificates = [
  { title: "ISO 9001:2015", desc: "Quality Management System Certification", issuer: "International Organization for Standardization" },
  { title: "ISO 27001", desc: "Information Security Management", issuer: "International Organization for Standardization" },
  { title: "NCR Platinum Partner", desc: "Highest level partnership for ATM solutions", issuer: "NCR Corporation" },
  { title: "Fortinet Platinum Partner", desc: "Elite security solutions partner status", issuer: "Fortinet" },
  { title: "Dell Technologies Platinum Partner", desc: "Enterprise infrastructure partnership", issuer: "Dell Technologies" },
  { title: "Cisco Gold Partner", desc: "Certified network solutions provider", issuer: "Cisco Systems" },
  { title: "Microsoft Gold Partner", desc: "Software and cloud solutions expertise", issuer: "Microsoft" },
  { title: "Oracle Gold Partner", desc: "Database and enterprise solutions", issuer: "Oracle Corporation" },
  { title: "Huawei Gold Partner", desc: "Telecommunications solutions partner", issuer: "Huawei Technologies" },
  { title: "HP Enterprise Gold Partner", desc: "Enterprise server and storage solutions", issuer: "Hewlett Packard Enterprise" },
  { title: "VMware Silver Partner", desc: "Virtualization and cloud solutions", issuer: "VMware" },
  { title: "Sophos Silver Partner", desc: "Cybersecurity solutions partner", issuer: "Sophos" },
  { title: "Ministry of Revenue - Platinum Taxpayer", desc: "Continuous Platinum Level Tax Compliance", issuer: "Ministry of Revenue - Ethiopia" },
  { title: "Best ICT Company 2023", desc: "Ethiopian Business Excellence Award", issuer: "Ethiopian Business Excellence Awards" },
  { title: "Top Taxpayer Award", desc: "Ethiopian Revenue Authority Recognition", issuer: "Ethiopian Revenue Authority" },
  { title: "Large Taxpayer Category", desc: "Ministry of Revenue Classification", issuer: "Ministry of Revenue - Ethiopia" }
];

const SLIDE_COUNT = Math.ceil(certificates.length / 2);

export default function CertificationsAwards() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDE_COUNT);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const slides = [];
  for (let i = 0; i < certificates.length; i += 2) {
    slides.push(certificates.slice(i, i + 2));
  }

  return (
    <section id="awards" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[11px] font-bold tracking-wider uppercase border border-blue-100 shadow-sm mb-4">
            Recognition
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">
            Certifications & Awards
          </h2>
          <p className="text-base text-gray-500 max-w-2xl mx-auto">
            Our commitment to excellence is validated by industry-leading certifications and strategic partnerships with global technology giants.
          </p>
        </div>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
              >
                {slides[current].map((cert) => (
                  <div key={cert.title} className="bg-white rounded-2xl p-1 shadow-xl">
                    <div className="border-2 border-yellow-600/30 rounded-xl p-6 sm:p-8 relative">
                      <div className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-yellow-500/60 rounded-tl-lg" />
                      <div className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-yellow-500/60 rounded-tr-lg" />
                      <div className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-yellow-500/60 rounded-bl-lg" />
                      <div className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-yellow-500/60 rounded-br-lg" />

                      <div className="text-center mb-5">
                        <div className="inline-block bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 text-white px-6 py-1 text-[10px] font-bold uppercase tracking-[0.2em] rounded-b-lg shadow-md">
                          Certificate
                        </div>
                      </div>

                      <div className="flex justify-center mb-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center shadow-lg">
                          <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{cert.title}</h3>
                      <p className="text-sm text-gray-500 text-center leading-relaxed mb-5">{cert.desc}</p>

                      <div className="text-center border-t border-gray-100 pt-4">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-0.5">Issued by</p>
                        <p className="text-sm font-semibold text-gray-700">{cert.issuer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-yellow-500 w-6"
                    : "bg-gray-300 hover:bg-gray-400 w-2"
                }`}
              />
            ))}
            <span className="text-xs text-gray-400 ml-2">
              {current + 1}/{SLIDE_COUNT}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
