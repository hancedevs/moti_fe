import React from 'react';
import Link from 'next/link';

const CTASection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="bg-[#0055D4]/5 rounded-3xl p-10 md:p-20 text-center relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/5 rounded-full -ml-32 -mb-32" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                            Don't See a <span className="text-blue-600">Suitable Position?</span>
                        </h2>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                            Send us your CV and we will contact you when a suitable position comes up. We're always on the lookout for exceptional talent.
                        </p>
                        <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/30 flex items-center gap-3 mx-auto">
                            Submit Your CV
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Moti Partner Section */}
                <div className="mt-32 text-center">
                    <p className="text-blue-600 font-semibold mb-2 tracking-wider">GET IN TOUCH</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Ready to Partner <span className="text-blue-600">With Us?</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-16">
                        Explore our services and how we can help your business grow with our industry-leading solutions.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 flex items-center justify-center text-blue-600 mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                            <p className="text-gray-500 text-sm mb-6">Get in touch with our team for any inquiries or support.</p>
                            <Link href="/contact" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                Connect Now →
                            </Link>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 flex items-center justify-center text-blue-600 mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">View Open Positions</h3>
                            <p className="text-gray-500 text-sm mb-6">Browse our open roles and find your perfect fit.</p>
                            <Link href="#openings" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                View Positions →
                            </Link>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <div className="w-12 h-12 flex items-center justify-center text-blue-600 mb-6">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">About Us</h3>
                            <p className="text-gray-500 text-sm mb-6">Learn more about our mission, vision and values.</p>
                            <Link href="/about" className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                Learn More →
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
