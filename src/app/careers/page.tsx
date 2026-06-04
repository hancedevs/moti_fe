'use client';

import React, { useState } from 'react';
import CareerHero from '@/components/careers/CareerHero';
import EmployeeBenefits from '@/components/careers/EmployeeBenefits';
import CurrentOpenings from '@/components/careers/CurrentOpenings';
import CTASection from '@/components/careers/CTASection';
import JobDetailModal from '@/components/careers/JobDetailModal';
import { Career } from '@/store/api/apiSlice';

const CareersPage = () => {
    const [selectedJob, setSelectedJob] = useState<Career | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleViewDetails = (job: Career) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Use a small timeout to clear the job after the modal animation finishes
        setTimeout(() => setSelectedJob(null), 300);
    };

    return (
        <main className="min-h-screen bg-white">
            <CareerHero />
            <EmployeeBenefits />
            <CurrentOpenings onViewDetails={handleViewDetails} />
            <CTASection />

            <JobDetailModal
                job={selectedJob}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </main>
    );
};

export default CareersPage;
