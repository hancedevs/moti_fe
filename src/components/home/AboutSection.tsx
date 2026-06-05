import AnimateInView from "@/components/ui/AnimateInView";

export default function AboutSection() {
  return (
    <section id="about" className="py-12 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Content */}
          <AnimateInView className="lg:w-[45%]">
            <h4 className="text-blue-600 font-semibold tracking-wide text-sm uppercase mb-3">
              Who We Are
            </h4>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-[40px] mb-6 leading-tight">
              Ethiopia's Leading ICT Solution Provider
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Founded in 2006, MOTI Engineering has become the leading ICT solution provider for financial, governmental, and private institutions. As Ethiopia's largest system integrator and ATM supplier, we hold a significant market share, bolstered by over twenty years of experience.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-bold text-white shadow-lg hover:bg-blue-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                Learn More About Us
                <svg className="ml-2 -mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-blue-600/20 bg-white px-6 py-2 text-sm font-bold text-blue-600 shadow-sm hover:bg-blue-50 hover:-translate-y-0.5 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </AnimateInView>

          {/* Image */}
          <AnimateInView className="lg:w-[55%] relative w-full" delay={0.15}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Business Meeting" 
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-blue-600 text-white p-6 lg:p-8 rounded-xl shadow-2xl z-10 hidden sm:block">
              <div className="text-4xl font-black mb-1">20+</div>
              <div className="text-sm font-medium uppercase tracking-wider text-blue-100 whitespace-nowrap">
                Years of Experience
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
