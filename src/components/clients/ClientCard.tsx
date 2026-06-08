"use client";

import { useId } from "react";
import type { ClientItem } from "@/lib/clients";

type ClientCardProps = {
  client: ClientItem;
  variant?: "default" | "featured";
};

function InitialsLogo({ client, id, size }: { client: ClientItem; id: string; size: "lg" | "sm" }) {
  if (size === "lg") {
    return (
      <svg viewBox="0 0 80 80" className="w-20 h-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={client.color} stopOpacity="1" />
            <stop offset="100%" stopColor={client.color} stopOpacity="0.85" />
          </linearGradient>
        </defs>
        <circle cx="40" cy="40" r="40" fill={`url(#${id})`} />
        <text x="40" y="40" textAnchor="middle" dominantBaseline="central" fill="white" fontSize="24" fontWeight="700" fontFamily="system-ui, sans-serif" letterSpacing="1">
          {client.initials}
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" className="w-12 h-12 shrink-0" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={client.color} stopOpacity="1" />
          <stop offset="100%" stopColor={client.color} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="48" height="48" rx="12" fill={`url(#${id})`} />
      <text x="24" y="24" textAnchor="middle" dominantBaseline="central" fill="white" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">
        {client.initials}
      </text>
    </svg>
  );
}

export default function ClientCard({ client, variant = "default" }: ClientCardProps) {
  const id = useId();

  if (variant === "featured") {
    return (
      <div className="flex flex-col items-center justify-center text-center bg-white border border-gray-100 rounded-2xl px-6 py-10 min-h-[220px] shadow-sm hover:shadow-lg transition-shadow h-full">
        <div className="relative mb-6">
          {client.logo ? (
            <div className="w-20 h-20 flex items-center justify-center">
              <img
                src={client.logo}
                alt={client.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ) : (
            <InitialsLogo client={client} id={id} size="lg" />
          )}
        </div>
        <h3 className="text-base font-bold text-gray-900 leading-snug mb-4 px-2">
          {client.name}
        </h3>
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs text-gray-500">
          {client.industry}
        </span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-blue-100 transition-all h-full">
      {client.logo ? (
        <div className="w-12 h-12 shrink-0 flex items-center justify-center">
          <img
            src={client.logo}
            alt={client.name}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      ) : (
        <InitialsLogo client={client} id={id} size="sm" />
      )}
      <div className="min-w-0">
        <h3 className="text-sm font-bold text-gray-900 leading-snug truncate">
          {client.name}
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">{client.industry}</p>
      </div>
    </div>
  );
}
