"use client";

import { useState } from "react";

export default function CertificationsAwards() {
  const [isExpanded, setIsExpanded] = useState(false);

  const awards = [
    { title: "ISO 9001:2015", desc: "Quality Management System Certification", type: "Quality" },
    { title: "ISO 27001", desc: "Information Security Management", type: "Security" },
    { title: "NCR Platinum Partner", desc: "Highest level partnership for ATM solutions", type: "Partner" },
    { title: "Fortinet Platinum Partner", desc: "Elite security solutions partner status", type: "Partner" },
    { title: "Dell Technologies Platinum Partner", desc: "Enterprise infrastructure partnership", type: "Partner" },
    { title: "Cisco Gold Partner", desc: "Certified network solutions provider", type: "Partner" },
    { title: "Ministry of Revenue - Platinum Taxpayer", desc: "Continuous Platinum Level Tax Compliance", type: "Government" },
    { title: "Microsoft Gold Partner", desc: "Software and cloud solutions expertise", type: "Partner" },
    { title: "Oracle Gold Partner", desc: "Database and enterprise solutions", type: "Partner" },
    { title: "Huawei Gold Partner", desc: "Telecommunications solutions partner", type: "Partner" },
    { title: "HP Enterprise Gold Partner", desc: "Enterprise server and storage solutions", type: "Partner" },
    { title: "Best ICT Company 2023", desc: "Ethiopian Business Excellence Award", type: "Award" },
    { title: "Top Taxpayer Award", desc: "Ethiopian Revenue Authority Recognition", type: "Government" },
    { title: "Large Taxpayer Category", desc: "Ministry of Revenue Classification", type: "Government" },
    { title: "VMware Silver Partner", desc: "Virtualization and cloud solutions", type: "Partner" },
    { title: "Sophos Silver Partner", desc: "Cybersecurity solutions partner", type: "Partner" }
  ];

  const displayedAwards = isExpanded ? awards : awards.slice(0, 8);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Quality': return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Security': return 'bg-red-100 text-red-700 border-red-200';
      case 'Partner': return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Government': return 'bg-green-100 text-green-700 border-green-200';
      case 'Award': return 'bg-yellow-100 text-yellow-700 border-yellow-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="awards" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[11px] font-bold tracking-wider uppercase border border-blue-100 shadow-sm mb-4">
            Recognition
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Certifications & Awards
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Our commitment to excellence is validated by industry-leading certifications and strategic partnerships with global technology giants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedAwards.map((award, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 flex items-center justify-center text-gray-400 group-hover:text-blue-600 transition-colors">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <span className={`text-[10px] font-bold px-2 py-1 rounded-md border uppercase tracking-wide ${getTypeColor(award.type)}`}>
                  {award.type}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">{award.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-3">{award.desc}</p>
            </div>
          ))}
        </div>

        {awards.length > 8 && (
          <div className="mt-12 text-center">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 hover:text-blue-600 transition-all shadow-sm"
            >
              {isExpanded ? "Show Less" : "View All Certifications & Awards"}
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
