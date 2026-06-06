"use client";

import PageHero from "@/components/layout/PageHero";
import {
    UserGroupIcon,
    OfficeIcon,
    Location01Icon,
    Briefcase01Icon,
    UserEdit01Icon,
} from "hugeicons-react";

const stats = [
    {
        value: "850+",
        label: "Employees",
        icon: <UserGroupIcon className="w-5 h-5 text-white" />,
    },
    {
        value: "6+",
        label: "Departments",
        icon: <OfficeIcon className="w-5 h-5 text-white" />,
    },
    {
        value: "36+",
        label: "Locations",
        icon: <Location01Icon className="w-5 h-5 text-white" />,
    },
    {
        value: "6",
        label: "Open Positions",
        icon: <Briefcase01Icon className="w-5 h-5 text-white" />,
    },
];

const badgeIcon = (
    <UserEdit01Icon className="w-3.5 h-3.5 text-white/90" />
);

export default function CareerHero() {
    return (
        <PageHero
            backgroundImage="/carear_hero.png"
            badgeIcon={badgeIcon}
            badgeLabel="Join Our Team"
            headingBefore="Build Your"
            headingHighlight="Career With Us"
            description="Join a team of 850+ professionals working on cutting-edge technology solutions across Ethiopia. We offer competitive salaries, growth opportunities, and a collaborative work environment."
            primaryCta={{ href: "#openings", label: "View Open Positions" }}
            secondaryCta={{ href: "#submit-cv", label: "Submit Your CV" }}
            stats={stats}
            headingHighlightClassName="text-[#FFB300]"
            primaryButtonClassName="bg-white text-[#0055D4] hover:bg-gray-100 font-semibold"
            secondaryButtonClassName="bg-white/10 border-white/20 text-white hover:bg-white/20 font-medium"
            statIconContainerClassName="bg-white/10 border border-white/5"
            statLabelClassName="text-gray-400"
            overlayClassName="from-black/70 via-black/50 to-black/30"
        />
    );
}
