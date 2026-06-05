import type { ClientItem } from "@/lib/clients";

type ClientCardProps = {
  client: ClientItem;
  variant?: "default" | "featured";
};

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  );
}

export default function ClientCard({ client, variant = "default" }: ClientCardProps) {
  if (variant === "featured") {
    return (
      <div className="flex flex-col items-center justify-center text-center bg-white border border-gray-100 rounded-2xl px-6 py-10 min-h-[220px] shadow-sm hover:shadow-lg transition-shadow h-full">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6">
          <BuildingIcon className="w-7 h-7" />
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
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-bold">
        {client.initials}
      </div>
      <div className="min-w-0">
        <h3 className="text-sm font-bold text-gray-900 leading-snug truncate">
          {client.name}
        </h3>
        <p className="text-xs text-gray-500 mt-0.5">{client.industry}</p>
      </div>
    </div>
  );
}
