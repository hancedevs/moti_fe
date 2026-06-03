export default function BoardOfDirectors() {
  const directors = [
    { name: "John Doe", title: "Chairman", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80" },
    { name: "Jane Smith", title: "Board Member", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80" },
    { name: "Robert Johnson", title: "Board Member", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80" },
    { name: "Sarah Williams", title: "Board Member", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80" },
    { name: "Michael Brown", title: "Board Member", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80" }
  ];

  return (
    <section id="board" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50/60 text-gray-900 font-semibold tracking-wider text-[10px] uppercase border border-blue-100/50 shadow-sm mb-4">
            Governance
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Board of Directors</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Our distinguished board members bring decades of experience in technology, finance, and business leadership.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {directors.map((person, index) => (
            <div key={index} className="flex flex-col items-center w-48 text-center group">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-all duration-300 ring-4 ring-white border border-gray-100">
                <img src={person.image} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{person.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{person.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
