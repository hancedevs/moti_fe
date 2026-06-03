import React from "react";

export default function CeoMessage() {
  return (
    <section id="ceo-message" className="py-24 bg-blue-600 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white text-[11px] font-semibold tracking-wider uppercase border border-white/20 shadow-sm mb-4">
            <svg className="w-3.5 h-3.5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Leadership Message
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight">
            CEO <span className="text-yellow-400">Message</span>
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            A message from our founder and CEO on our vision and commitment to excellence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Portrait & Info */}
          <div className="w-full lg:w-[35%] flex flex-col items-center lg:items-start">
            <div className="relative mb-6">
              {/* Yellow glow flare behind top right of image */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-yellow-400/30 rounded-full blur-2xl"></div>
              
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80" 
                  alt="Mr. Abdulhamid Mohammed" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center lg:text-left w-full sm:w-72">
              <h3 className="font-bold text-white text-xl mb-1">Mr. Abdulhamid Mohammed</h3>
              <p className="text-sm text-yellow-400 font-semibold mb-1">CEO & Founder</p>
              <p className="text-xs text-blue-200 mb-5">Moti Engineering PLC</p>
              
              <div className="flex justify-center lg:justify-start gap-3">
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/5">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/5">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Message Card */}
          <div className="w-full lg:w-[65%]">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl relative">
              
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center mb-6 shadow-md">
                <svg className="w-5 h-5 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.039 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>
              
              {/* Message Text */}
              <div className="space-y-5 text-blue-50 text-[15px] sm:text-base leading-relaxed">
                <p>
                  At Moti Engineering PLC, our journey has always been guided by a commitment to <span className="text-yellow-400 font-bold">excellence, innovation, and long-term value creation.</span> Since our establishment, we have continuously evolved to meet the changing demands of technology, infrastructure, and business solutions, while maintaining the highest standards of quality and reliability.
                </p>
                <p>
                  Over the years, Moti Engineering has built a reputation for delivering dependable and forward-thinking solutions across multiple sectors. Our experience, technical expertise, and disciplined operational approach have enabled us to successfully support critical systems and complex environments where performance and precision are essential.
                </p>
                <p>
                  Our strength lies not only in technology and engineering capabilities, but also in our people. We believe sustainable success is driven by <span className="text-yellow-400 font-bold">knowledge, integrity, teamwork, and a relentless focus on customer needs.</span> Every project we undertake reflects our dedication to professionalism, accountability, and continuous improvement.
                </p>
                <p>
                  As we look ahead, Moti Engineering remains committed to expanding our capabilities, embracing innovation, and building strategic partnerships that create lasting impact. We will continue to invest in modern solutions, operational efficiency, and service excellence to ensure we consistently deliver value to our clients and stakeholders.
                </p>
                <p>
                  We sincerely thank our customers, partners, and employees for their trust and support. Together, we will continue to build, innovate, and grow.
                </p>
              </div>

              {/* Bottom Divider & Signature */}
              <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center sm:items-end gap-6">
                <div className="text-center sm:text-left">
                  <p className="text-xs text-yellow-400 font-semibold mb-1 uppercase tracking-wider">CEO & Founder</p>
                  <p className="text-lg font-bold text-white mb-0.5">Mr. Abdulhamid Mohammed</p>
                  <p className="text-xs text-blue-200">Moti Engineering PLC</p>
                </div>
                
                <div className="flex gap-2">
                  <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors border border-white/5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
