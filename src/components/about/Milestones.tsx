"use client";

import { motion } from "framer-motion";

export default function Milestones() {
  const milestones = [
    {
      year: "2006",
      title: "Foundation",
      desc: "MOTI Engineering was established in Ethiopia as an ICT solution provider, starting with a vision to transform technology infrastructure.",
      color: "bg-blue-600"
    },
    {
      year: "2008",
      title: "First Banking Contract",
      desc: "Secured first major banking sector contract, laying the foundation for our financial technology expertise.",
      color: "bg-blue-600"
    },
    {
      year: "2010",
      title: "Market Leadership",
      desc: "Became leading ICT solution provider and achieved largest ATM market share in Ethiopia.",
      color: "bg-blue-600"
    },
    {
      year: "2015",
      title: "National Expansion",
      desc: "Expanded to 100+ points of presence nationwide across Ethiopia with advanced technical capabilities.",
      color: "bg-blue-600"
    },
    {
      year: "2018",
      title: "ISO Certification",
      desc: "Achieved ISO 9001:2015 and ISO 27001 certifications, demonstrating commitment to quality and security.",
      color: "bg-blue-600"
    },
    {
      year: "2020",
      title: "BPO Division",
      desc: "Launched Business Process Outsourcing division with 850+ employees, expanding service offerings.",
      color: "bg-blue-600"
    },
    {
      year: "2023",
      title: "National Coverage",
      desc: "117+ Points of Presence, 36+ Branch Offices, serving 772+ cities nationwide.",
      color: "bg-blue-600"
    },
    {
      year: "Present",
      title: "Coffee Export",
      desc: "Entered premium coffee export market, diversifying business portfolio and global reach.",
      color: "bg-blue-600"
    }
  ];

  return (
    <section id="milestones" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50/60 text-gray-900 font-semibold tracking-wider text-[10px] uppercase border border-blue-100/50 shadow-sm mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Company Milestones</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            A track record of continuous growth, innovation, and unwavering commitment to excellence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform sm:-translate-x-1/2"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${index % 2 === 0 ? 'sm:flex-row-reverse' : ''}`}
              >
                
                {/* Center Dot */}
                <div className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full border-4 border-white transform -translate-x-[7px] sm:-translate-x-1/2 mt-1.5 sm:mt-0 z-10" style={{ backgroundColor: 'currentColor' }}>
                  <div className={`w-full h-full rounded-full ${milestone.color}`}></div>
                </div>

                {/* Content */}
                <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8 ${index % 2 === 0 ? 'sm:text-left' : 'sm:text-right'}`}>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
                    {/* Tiny arrow pointing to the line on desktop */}
                    <div className={`hidden sm:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white border-t border-r border-gray-100 ${index % 2 === 0 ? '-left-2 -rotate-135 border-b-0 border-l-0' : '-right-2 rotate-45 border-b-0 border-l-0'}`}></div>
                    
                    <span className={`inline-block px-3 py-1 rounded-md text-sm font-bold text-white mb-4 ${milestone.color}`}>
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600 text-sm">{milestone.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
