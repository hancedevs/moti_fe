import React from 'react';
import Image from 'next/image';

const ContactHero = () => {
    return (
        <section className="relative min-h-[380px] flex items-end pb-0 pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[#0A1128]/80 z-10" />
                <Image
                    src="/datacenter.png"
                    alt="Contact Moti Engineering"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 text-white pb-12">
                <div className="max-w-5xl">
                    {/* Breadcrumb */}
                    <p className="text-blue-300 text-sm font-medium mb-4">Home &rsaquo; Contact</p>

                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                        Contact <span className="text-blue-400">Us</span>
                    </h1>
                    <p className="text-gray-300 text-lg max-w-2xl mb-10">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </p>

                    {/* Quick Contact Bar */}
                    <div className="flex flex-wrap gap-6">
                        <a href="tel:+251115545059" className="flex items-center gap-2 transition-all">
                            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Phone</p>
                                <p className="text-sm font-medium">+251 11 5545059</p>
                            </div>
                        </a>

                        <a href="mailto:info@motiengineering.com" className="flex items-center gap-2 transition-all">
                            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Email</p>
                                <p className="text-sm font-medium">info@motiengineering.com</p>
                            </div>
                        </a>

                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Address</p>
                                <p className="text-sm font-medium">Bole Sub City, Addis Ababa</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <div>
                                <p className="text-[10px] text-gray-400 uppercase tracking-wider">What's App No</p>
                                <p className="text-sm font-medium">+251 91 123 4567</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
