export default function ProjectsSection() {
  const projects = [
    {
      title: "CBE ATM Network Expansion",
      category: "Banking Equipment",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "Deployed over 1000+ ATMs across Ethiopia for Commercial Bank of Ethiopia."
    },
    {
      title: "EthSwitch National Integration",
      category: "E-payment Systems",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "National payment switch integration connecting multiple financial institutions."
    },
    {
      title: "Awash Bank Data Center",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "State-of-the-art tier 3 data center setup and management for Awash Bank."
    },
    {
      title: "Telebirr POS Integration",
      category: "Software Solutions",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      desc: "Comprehensive integration of mobile money platform across 5,000+ merchant terminals."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50/60 text-gray-900 font-semibold tracking-wider text-[10px] uppercase border border-blue-100/50 shadow-sm mb-4">
            Our Work
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover some of our most impactful implementations across various sectors in Ethiopia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-blue-600">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">{project.desc}</p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700">
                    View Details
                    <svg className="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 transition-colors">
            See All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
