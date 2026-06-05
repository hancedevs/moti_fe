import React from "react";
import AnimateInView from "@/components/ui/AnimateInView";

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.658442345263!2d38.799529!3d8.980603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8504c9a1d9c5%3A0x8b8c8f8e8d8a8b8c!2sBole%2C%20Addis%20Ababa!5e0!3m2!1sen!2set!4v1";

const infoCards = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    label: "Head Office",
    value: "Bole Sub City, Addis Ababa",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    label: "Phone",
    value: "+251 11 5545059",
    href: "tel:+251115545059",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    label: "Email",
    value: "info@motiengineering.com",
    href: "mailto:info@motiengineering.com",
  },
];

export default function MapSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimateInView y={30}>
          <div className="text-center mb-12">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-semibold tracking-wider text-[10px] uppercase border border-blue-100 shadow-sm mb-4">
              Our Location
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Find Us on the Map
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              Visit our head office in Bole, Addis Ababa — we&apos;d love to
              welcome you.
            </p>
          </div>
        </AnimateInView>

        <div className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100">
          <iframe
            src={mapSrc}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="MOTI Engineering Location"
            className="w-full"
          />
          <a
            href="https://maps.google.com/?q=MOTI+Engineering+PLC+Bole+Addis+Ababa"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium px-4 py-2.5 rounded-lg shadow-md border border-gray-200 flex items-center gap-2 transition-all"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
            Open in Google Maps
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {infoCards.map((card) => {
            const content = (
              <div className="bg-gray-50 rounded-xl p-6 flex items-center gap-4 border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                  {card.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                    {card.label}
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    {card.value}
                  </p>
                </div>
              </div>
            );
            return card.href ? (
              <a key={card.label} href={card.href}>
                {content}
              </a>
            ) : (
              <div key={card.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
