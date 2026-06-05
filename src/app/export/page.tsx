export default function ExportPage() {
  return (
    <div className="bg-[#0f1115] min-h-[70vh] flex items-center justify-center text-white font-sans">
      <div className="text-center px-4">
        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-600/10 text-blue-400 text-xs font-semibold mb-6 border border-blue-500/20">
          Export Services
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          Ethiopian <span className="text-blue-500">Coffee Export</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          We provide high-quality Ethiopian coffee export services. Our new export portal is currently under construction. Please check back soon or contact us for inquiries.
        </p>
        <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
          Contact for Export Inquiries
        </button>
      </div>
    </div>
  );
}
