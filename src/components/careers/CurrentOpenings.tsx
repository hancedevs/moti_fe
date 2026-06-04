'use client';

import React, { useState } from 'react';
import { useGetCareersQuery, useGetDepartmentsQuery, Career } from '@/store/api/apiSlice';
import JobCard from './JobCard';

interface CurrentOpeningsProps {
    onViewDetails: (job: Career) => void;
}

const CurrentOpenings: React.FC<CurrentOpeningsProps> = ({ onViewDetails }) => {
    const { data: careers, isLoading: careersLoading } = useGetCareersQuery();
    const { data: departments, isLoading: deptsLoading } = useGetDepartmentsQuery();

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDept, setSelectedDept] = useState<number | 'all'>('all');

    const filteredCareers = careers?.filter(career => {
        const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            career.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDept = selectedDept === 'all' || career.departmentId === selectedDept;
        return matchesSearch && matchesDept;
    });

    return (
        <section className="py-20 bg-gray-50" id="openings">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-blue-600 font-semibold mb-2 tracking-wider">AVAILABLE POSITIONS</p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                        Current <span className="text-blue-600">Openings</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our currently open positions and find your perfect role. We're always looking for talented individuals to join our team.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto">
                    <div className="relative flex-1">
                        <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search jobs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>
                    <div className="relative md:w-64">
                        <select
                            value={selectedDept}
                            onChange={(e) => setSelectedDept(e.target.value === 'all' ? 'all' : Number(e.target.value))}
                            className="w-full px-4 py-4 rounded-xl border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white transition-all cursor-pointer"
                        >
                            <option value="all">All Departments</option>
                            {departments?.map(dept => (
                                <option key={dept.id} value={dept.id}>{dept.name}</option>
                            ))}
                        </select>
                        <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {careersLoading || deptsLoading ? (
                    <div className="py-20 flex justify-center items-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
                    </div>
                ) : filteredCareers && filteredCareers.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCareers.map(career => (
                            <JobCard
                                key={career.id}
                                job={career}
                                onViewDetails={onViewDetails}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-300">
                        <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No matching positions found</h3>
                        <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default CurrentOpenings;
