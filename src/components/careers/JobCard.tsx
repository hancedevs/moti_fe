import React from 'react';
import { Career } from '@/store/api/apiSlice';

interface JobCardProps {
    job: Career;
    onViewDetails: (job: Career) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onViewDetails }) => {
    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-xl transition-all group">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {job.title}
                </h3>
                <span className="bg-blue-50 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {job.type.replace('_', ' ')}
                </span>
            </div>

            <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                {job.description}
            </p>

            <div className="grid grid-cols-2 gap-y-3 mb-6">
                <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-xs">{job.department?.name || 'Department'}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs">{job.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 2m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs">{job.salary}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs">{job.requirements.split(',')[0]}</span>
                </div>
            </div>

            <div className="flex gap-3">
                <button
                    onClick={() => onViewDetails(job)}
                    className="flex-1 border border-gray-200 hover:border-blue-600 hover:bg-blue-50 text-gray-700 hover:text-blue-600 px-4 py-2 rounded-lg font-medium transition-all text-sm"
                >
                    View Details
                </button>
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all text-sm">
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default JobCard;
