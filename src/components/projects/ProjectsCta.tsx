import Link from "next/link";

export default function ProjectsCta() {
  const cards = [
    {
      title: "Contact Us",
      desc: "Reach out to discuss your next project with our expert team.",
      buttonText: "Contact Us",
      link: "/contact",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "View All Projects",
      desc: "Browse our complete portfolio of successful implementations.",
      buttonText: "View All",
      link: "#project-grid",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      title: "About Us",
      desc: "Learn more about our company, team, and two decades of excellence.",
      buttonText: "About Us",
      link: "/about",
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 lg:py-20 bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50/60 text-gray-900 font-semibold tracking-wider text-[10px] uppercase border border-blue-100/50 shadow-sm mb-4">
            Let&apos;s Work
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Let us help you transform your business with our proven expertise
            and innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100 text-center flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              <div className="flex h-16 w-16 items-center justify-center text-blue-600 mb-6">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-500 mb-8 flex-grow">{card.desc}</p>
              <Link
                href={card.link}
                className="w-full inline-flex justify-center items-center rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 transition-colors"
              >
                {card.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
