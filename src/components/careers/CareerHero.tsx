import React from 'react';
import Image from 'next/image';
import {
    UserGroupIcon,
    OfficeIcon,
    Location01Icon,
    Briefcase01Icon,
    ArrowRight01Icon,
    UserEdit01Icon
} from 'hugeicons-react';

const CareerHero = () => {
    return (
        <section className="relative min-h-[700px] flex items-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/70 z-10" />
                <Image
                    src="/carear_hero.png"
                    alt="Careers at Moti"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="container mx-auto px-4 relative z-20 text-white">
                <div className="max-w-4xl">
                    {/* Join Our Team Tag */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/20 mb-10">
                        <UserEdit01Icon size={18} className="text-white" />
                        <span className="text-xs font-semibold tracking-wide uppercase">Join Our Team</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1]">
                        Build Your <br />
                        <span className="text-[#FFB300]">Career With <br />Us</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-xl leading-relaxed font-medium">
                        Join a team of 850+ professionals working on cutting-edge technology solutions across Ethiopia.
                        We offer competitive salaries, growth opportunities, and a collaborative work environment.
                    </p>

                    <div className="flex flex-wrap gap-4 mb-24">
                        <button className="bg-white text-[#0055D4] hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2">
                            View Open Positions
                            <ArrowRight01Icon size={20} strokeWidth={2.5} />
                        </button>
                        <button className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all backdrop-blur-sm">
                            Submit Your CV
                        </button>
                    </div>

                    {/* Stats Bar - Fixed Placement */}
                    <div className="flex flex-wrap gap-x-12 lg:gap-x-20 gap-y-8 border-t border-white/10 pt-15 pb-30">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/5">
                                <UserGroupIcon size={24} className="text-[#FFB300]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold leading-tight">850+</p>
                                <p className="text-sm text-gray-400 font-medium">Employees</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/5">
                                <OfficeIcon size={24} className="text-[#FFB300]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold leading-tight">6+</p>
                                <p className="text-sm text-gray-400 font-medium">Departments</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/5">
                                <Location01Icon size={24} className="text-[#FFB300]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold leading-tight">36+</p>
                                <p className="text-sm text-gray-400 font-medium">Locations</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/5">
                                <Briefcase01Icon size={24} className="text-[#FFB300]" />
                            </div>
                            <div>
                                <p className="text-2xl font-bold leading-tight">6</p>
                                <p className="text-sm text-gray-400 font-medium">Open Positions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerHero;
