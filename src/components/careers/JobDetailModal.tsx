import React from 'react';
import Link from 'next/link';
import { Career } from '@/store/api/apiSlice';
import { Cancel01Icon, CheckmarkCircle02Icon, Target02Icon, ArrowRight01Icon } from 'hugeicons-react';

interface JobDetailModalProps {
    job: Career | null;
    isOpen: boolean;
    onClose: () => void;
}

const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, isOpen, onClose }) => {
    if (!isOpen || !job) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
                {/* Header */}
                <div className="bg-[#0D92BA] p-8 text-white relative">
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all border border-white/10"
                        aria-label="Close modal"
                    >
                        <Cancel01Icon size={18} className="text-white" />
                    </button>

                    <span className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-1.5 rounded-lg mb-4 uppercase tracking-wider">
                        {job.type.replace('_', ' ')}
                    </span>
                    <h2 className="text-4xl font-bold mb-4">{job.title}</h2>
                    <p className="text-white/80 leading-relaxed font-medium">
                        {job.description}
                    </p>
                </div>

                {/* Content */}
                <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    <div className="mb-10">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckmarkCircle02Icon size={24} className="text-green-500" />
                            <h3 className="text-xl font-bold text-gray-900">Requirements</h3>
                        </div>
                        <ul className="space-y-4">
                            {job.requirements.split(',').map((req, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="mt-1 w-5 h-5 flex-shrink-0 text-green-500">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-gray-700 font-medium">{req.trim()}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Target02Icon size={24} className="text-blue-500" />
                            <h3 className="text-xl font-bold text-gray-900">Key Responsibilities</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Develop and execute strategic plans",
                                "Lead and mentor the team members",
                                "Build relationships with key stakeholders",
                                "Identify new business opportunities",
                                "Prepare and present regular reports"
                            ].map((res, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{res}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-8 border-t border-gray-100 bg-gray-50/50">
                    <Link href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all group">
                        Apply for This Position
                        <ArrowRight01Icon size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetailModal;
