import Image from "next/image";
import type { PartnerItem } from "@/lib/partners";

type PartnerCardProps = {
  partner: PartnerItem;
};

const logoMap: Record<string, string> = {
  "Fortinet": "/fortinet.png",
  "Dell Technologies": "/dell.png",
  "Microsoft": "/microsoft.png",
  "Oracle": "/oracle.png",
  "Cisco Systems": "/cisco.png",
  "VMware": "/vmware.png",
};

export default function PartnerCard({ partner }: PartnerCardProps) {
  const logoSrc = logoMap[partner.name];

  return (
    <div className="flex flex-col items-center justify-center text-center bg-white border border-gray-100 rounded-2xl px-6 py-10 min-h-[220px] shadow-sm hover:shadow-lg transition-shadow h-full">
      <div className="flex h-16 w-16 items-center justify-center mb-6">
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={`${partner.name} logo`}
            width={64}
            height={64}
            className="object-contain w-full h-full"
          />
        ) : (
          <span className="text-xs text-gray-400">Logo</span>
        )}
      </div>
      <h3 className="text-base font-bold text-gray-900 leading-snug mb-4 px-2">
        {partner.name}
      </h3>
      <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs text-gray-500">
        {partner.category}
      </span>
    </div>
  );
}
