"use client";

import { useState } from "react";
import Link from "next/link";
import AnimateInView from "@/components/ui/AnimateInView";

type CardContent = {
  title: string;
  icon?: React.ReactNode;
  items: string[];
};

export default function ProductsSection() {
  const tabData: Record<string, CardContent[]> = {
    "Banking & E-payment": [
      {
        title: "ATM Solution",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        items: [
          "ATM",
          "Interactive Teller Machine (ITM)",
          "Scalable Recycler (SR)",
          "Forex ATMs",
          "Real-time monitoring"
        ]
      },
      {
        title: "POS & Card Technology",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
          </svg>
        ),
        items: [
          "POS",
          "Card Printer Machine",
          "Card Personalized Solution",
          "Payment Card"
        ]
      },
      {
        title: "Bank Note & Printing",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
        ),
        items: [
          "Pin Mailer",
          "Note Counter",
          "Cheque Scanner"
        ]
      },
      {
        title: "Branch Effectiveness",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        items: [
          "Bulk Depositor",
          "Self-Service Kiosk",
          "Mobile Branch"
        ]
      }
    ],
    "Terminal Support": [
      {
        title: "ATM Installation & Support",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        items: [
          "ATM Installation",
          "Preventive Maintenance",
          "Corrective Maintenance",
          "Software Updates & Patches"
        ]
      },
      {
        title: "Remote Monitoring & Management",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        ),
        items: [
          "Real-time Monitoring",
          "Remote Diagnostics",
          "Predictive Analytics"
        ]
      },
      {
        title: "Field Services",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        items: [
          "On-site Support",
          "Parts & Logistics",
          "Decommissioning & Relocation"
        ]
      },
      {
        title: "Help Desk & Support",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ),
        items: [
          "Technical Support",
          "End-user Support",
          "Training & Documentation"
        ]
      }
    ],
    "Computer & Peripherals": [
      {
        title: "Desktop Computers",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        items: ["Business Desktops", "Workstations", "All-in-One", "Mini PCs"]
      },
      {
        title: "Laptops & Tablets",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
        items: ["Business Laptops", "Executive Laptops", "Tablets", "2-in-1 Devices"]
      },
      {
        title: "Office Machines",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
        ),
        items: ["Laser Printers", "Multifunction Printers", "Scanners", "Photocopiers", "UPS Systems"]
      },
      {
        title: "Meeting Room Solutions",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        ),
        items: ["Projectors", "Interactive Displays", "Video Conferencing", "Conference Phones"]
      },
      {
        title: "Networking Devices",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
        ),
        items: ["Routers", "Network Switches", "Wireless Access Points", "Cables & Accessories"]
      },
      {
        title: "Accessories & Peripherals",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        ),
        items: ["Monitors", "Keyboards & Mice", "Webcams", "Headsets", "External Storage", "Docking Stations"]
      }
    ],
    "Enterprise Software Solutions": [
      {
        title: "Digital Banking Solutions",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        ),
        items: ["Internet Banking", "Mobile Banking", "Agency Banking", "Open Banking API"]
      },
      {
        title: "CRM Solutions",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        items: ["Enterprise CRM", "Sales Force Automation", "Marketing Automation"]
      },
      {
        title: "Digital Insurance Solutions",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        ),
        items: ["Core Insurance Platform", "Claims Management", "Insurance Portal"]
      },
      {
        title: "ERP Solutions",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        ),
        items: ["Finance & Accounting", "Human Resources", "Supply Chain", "Manufacturing"]
      },
      {
        title: "Enterprise Risk Management",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        ),
        items: ["Enterprise Risk Management", "Credit Risk Management", "Regulatory Compliance"]
      },
      {
        title: "Credit/Loan Management",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        items: ["Loan Origination", "Loan Management", "Collection & Recovery"]
      },
      {
        title: "Contact Center Solution",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        ),
        items: ["Call Center Platform", "Omnichannel Platform", "Help Desk System"]
      },
      {
        title: "Customer Experience Solution",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        items: ["Customer Feedback", "Journey Analytics", "Voice of Customer"]
      },
      {
        title: "E-Commerce Solutions",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
        items: ["E-Commerce Platform", "Marketplace Solution", "B2B Commerce", "Payment Integration"]
      }
    ],
    "BPO Service": [
      {
        title: "Customer Support Service",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ),
        items: ["Inbound Call Center", "Email Support", "Live Chat Support", "Social Media Support"]
      },
      {
        title: "IT Help Desk Support",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        ),
        items: ["Level 1 Support", "Level 2 Support", "Level 3 Support", "IT Service Management"]
      },
      {
        title: "Back Office Support",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
          </svg>
        ),
        items: ["Document Processing", "Account & Finance Support", "HR Administration", "Claims Processing"]
      },
      {
        title: "Telemarketing Service",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        ),
        items: ["Lead Generation", "Sales Campaigns", "Customer Retention", "Market Research"]
      },
      {
        title: "Data Entry & Management",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        ),
        items: ["Data Entry Services", "Data Cleansing", "Data Conversion", "Database Management"]
      }
    ],
    "Export": []
  };

  const categories = Object.keys(tabData);
  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <section id="products" className="py-12 lg:py-20 bg-[#f8f9fb]">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-8 lg:mb-16">
          <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50/60 text-gray-900 font-semibold tracking-wider text-[10px] uppercase border border-blue-100/50 shadow-sm mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">Products & Services</h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Comprehensive technology solutions tailored to meet your business needs across multiple sectors.
          </p>
        </AnimateInView>

        {/* Segmented Control Tabs */}
        <AnimateInView className="flex justify-start sm:justify-center mb-8 lg:mb-16 relative" delay={0.1}>
          <div className="flex overflow-x-auto hide-scrollbar snap-x whitespace-nowrap gap-2 p-1.5 bg-gray-100/80 backdrop-blur-sm rounded-xl md:rounded-full w-full sm:w-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style dangerouslySetInnerHTML={{__html: `
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}} />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                onMouseEnter={() => setActiveTab(category)}
                className={`snap-center shrink-0 relative px-6 py-2.5 text-sm font-medium transition-all duration-300 rounded-lg md:rounded-full ${
                  activeTab === category 
                    ? "bg-blue-600 text-white shadow-sm font-medium" 
                    : "text-gray-600 hover:text-gray-900 font-normal hover:bg-white/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimateInView>

        {/* Tab Content Area */}
        <AnimateInView className="max-w-[80rem] mx-auto" delay={0.15}>
          {/* Category Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-3">
              <div className={`flex h-8 w-8 items-center justify-center ${activeTab === "Export" ? "text-orange-500" : "text-blue-600"}`}>
                {activeTab === "Export" ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3v2M10 3v2M14 3v2M4 7h12v7c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V7zM16 9h2a2 2 0 012 2v2a2 2 0 01-2 2h-2" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {activeTab === "Banking & E-payment" 
                  ? "Banking Equipment & E-payment" 
                  : activeTab === "BPO Service"
                  ? "BPO Service - Business Process Outsourcing"
                  : activeTab === "Export"
                  ? "Export - Premium Ethiopian Coffee"
                  : activeTab}
              </h3>
            </div>
            
            <Link
              href={activeTab === "Export" ? "/export/coffee-export" : "/services/banking-equipment"}
              className="flex items-center gap-2 px-4 py-1.5 border border-gray-200 rounded-md text-sm text-gray-700 hover:bg-gray-50 bg-white transition-colors w-fit"
            >
              {activeTab === "Export" ? "Visit Coffee Export Page" : "View All"} 
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Conditional Rendering for Export Tab */}
          {activeTab === "Export" ? (
            <div className="flex flex-col gap-10">
              {/* Export Hero Banner */}
              <div className="bg-[#fffdf0] rounded-xl border border-orange-200 p-8 shadow-sm flex flex-col md:flex-row items-center md:items-start gap-8">
                <div className="flex shrink-0 h-24 w-24 items-center justify-center text-orange-500">
                  <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 3v2M10 3v2M14 3v2M4 7h12v7c0 2.2-1.8 4-4 4H8c-2.2 0-4-1.8-4-4V7zM16 9h2a2 2 0 012 2v2a2 2 0 01-2 2h-2" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Premium Ethiopian Coffee Export</h4>
                  <p className="text-gray-600 mb-6 max-w-3xl leading-relaxed">
                    Leveraging 20 years of leadership to deliver premium Green Coffee Beans with banking-grade precision. We export the finest Ethiopian coffee varieties to global markets.
                  </p>
                  <Link
                    href="/export/coffee-export"
                    className="px-6 py-2 bg-orange-500 text-white font-medium text-sm rounded shadow hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
                  >
                    Visit Coffee Export Page
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Coffee Varieties */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Our Coffee Varieties
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    { title: "Yirgacheffe", zone: "Gedeo Zone, Sidama", grade: "Grade 1, Grade 2", notes: "Bright acidity, floral notes, citrus", img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                    { title: "Guji", zone: "Guji Zone, Oromia", grade: "Grade 1, Grade 2", notes: "Fruity, wine-like, complex", img: "https://images.unsplash.com/photo-1524350876685-274059332603?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                    { title: "Sidama", zone: "Sidama Region", grade: "Grade 1, Grade 2", notes: "Balanced, spicy, citrus", img: "https://images.unsplash.com/photo-1501250987900-2118b7ebce2e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                    { title: "Limmu", zone: "Limmu, Oromia", grade: "Grade 1, Grade 2", notes: "Wine-like, spicy, floral", img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                    { title: "Jimma", zone: "Jimma, Oromia", grade: "Grade 1, Grade 2", notes: "Mild, fruity, herbal", img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
                  ].map((coffee, i) => (
                    <div key={i} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <img src={coffee.img} alt={coffee.title} className="w-full h-36 object-cover" />
                      <div className="p-4">
                        <h5 className="font-bold text-gray-900 mb-1">{coffee.title}</h5>
                        <p className="text-[11px] text-gray-500 mb-0.5">{coffee.zone}</p>
                        <p className="text-[11px] text-gray-500 mb-3">{coffee.grade}</p>
                        <p className="text-[11px] text-orange-500 font-medium">{coffee.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Standard Cards Grid for other tabs */
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${["Computer & Peripherals", "Enterprise Software Solutions", "BPO Service"].includes(activeTab) ? "lg:grid-cols-3" : ""}`}>
              {tabData[activeTab]?.length > 0 ? (
                tabData[activeTab].map((card, index) => (
                  <AnimateInView
                    key={index}
                    delay={index * 0.05}
                    y={30}
                    className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center text-blue-600">
                        {card.icon || (
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        )}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900">
                        {card.title}
                      </h4>
                    </div>
                    
                    <ul className="space-y-3.5 text-sm text-gray-600 flex-1">
                      {card.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <svg className="w-5 h-5 shrink-0 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AnimateInView>
                ))
              ) : (
                <div className="col-span-full py-12 text-center text-gray-500 bg-white rounded-xl border border-gray-200">
                  Content for {activeTab} is coming soon.
                </div>
              )}
            </div>
          )}
        </AnimateInView>
      </div>
    </section>
  );
}
