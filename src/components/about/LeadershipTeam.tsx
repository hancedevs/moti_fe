export default function LeadershipTeam() {
  const leaders = [
    { name: "Mr. Abdulhamid Mohammed", title: "CEO & Founder", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80" },
    { name: "Mr. Abdulhafiz Ahmed", title: "COO", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
    { name: "Ms. Soud Mohammed", title: "Finance & Investment V/P", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
    { name: "Ms. Hanan Mohammedkiyar", title: "Sales & Marketing V/P", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
    { name: "Mr. Aytenfisu Worku", title: "Human Resource V/P", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
    { name: "Mr. Tasew Ayele", title: "Customer Service V/P", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" }
  ];

  return (
    <section id="leadership" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100/50 text-blue-700 text-[11px] font-bold tracking-wider uppercase shadow-sm mb-4">
            Leadership
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
            Our Leadership Team
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Meet the experts driving our success with decades of combined experience in technology and business.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {leaders.map((person, index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl aspect-[3/4] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/50">
              {/* Base Image */}
              <img 
                src={person.image} 
                alt={person.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-700/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                
                <h3 className="text-white font-bold text-sm sm:text-base mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  {person.name}
                </h3>
                
                <p className="text-blue-200 text-xs sm:text-sm font-medium mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out delay-75">
                  {person.title}
                </p>
                
                <div className="flex gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out delay-150">
                  <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-white hover:text-white/80 transition-colors">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-white hover:text-white/80 transition-colors">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </a>
                  <a href="#" className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-white hover:text-white/80 transition-colors">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
