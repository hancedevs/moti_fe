import React from 'react';

const benefits = [
    {
        title: 'Competitive Salary',
        description: 'We offer industry-leading compensation packages and performance-based bonuses.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: 'bg-green-500',
    },
    {
        title: 'Training & Development',
        description: 'Continuous learning with access to top-tier courses and certifications.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        color: 'bg-blue-500',
    },
    {
        title: 'Health Insurance',
        description: 'Comprehensive health coverage for you and your family.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        color: 'bg-red-500',
    },
    {
        title: 'Work-Life Balance',
        description: 'Flexible working hours and remote work options for various roles.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        color: 'bg-yellow-500',
    },
    {
        title: 'Career Growth',
        description: 'Clear advancement paths and mentorship programs for all levels.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
        color: 'bg-purple-500',
    },
    {
        title: 'Team Culture',
        description: 'Collaborative, inclusive and innovative work environment.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        color: 'bg-cyan-500',
    },
];

const EmployeeBenefits = () => {
    return (
        <section className="bg-blue-600 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-blue-200 font-semibold mb-2 tracking-wider">WHY JOIN US</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Employee <span className="text-[#FFD700]">Benefits</span>
                    </h2>
                    <p className="text-blue-100 max-w-3xl mx-auto text-lg">
                        We believe in taking care of our people. Enjoy industry-leading benefits designed to support your professional growth and personal well-being.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all hover:transform hover:-translate-y-1">
                            <div className={`w-12 h-12 ${benefit.color} rounded-lg flex items-center justify-center text-white mb-6`}>
                                {benefit.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                            <p className="text-blue-100 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap justify-center gap-8 lg:gap-16 mb-20">
                    <div className="text-center">
                        <p className="text-5xl font-bold text-[#FFD700] mb-2">98%</p>
                        <p className="text-blue-100 text-sm">Employee Retention Rate</p>
                    </div>
                    <div className="text-center">
                        <p className="text-5xl font-bold text-[#FFD700] mb-2">4.8 ★</p>
                        <p className="text-blue-100 text-sm">Glassdoor Rating</p>
                    </div>
                    <div className="text-center">
                        <p className="text-5xl font-bold text-[#FFD700] mb-2">85%</p>
                        <p className="text-blue-100 text-sm">Internal Promotion Rate</p>
                    </div>
                </div>

                <div className="text-center">
                    <button className="bg-[#FF9800] hover:bg-[#F57C00] text-white px-10 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30">
                        Current Openings →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EmployeeBenefits;
