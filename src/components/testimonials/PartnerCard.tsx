import type { PartnerItem } from "@/lib/partners";
import PartnerIcon from "./PartnerIcon";

type PartnerCardProps = {
  partner: PartnerItem;
};

export default function PartnerCard({ partner }: PartnerCardProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-white border border-gray-100 rounded-2xl px-6 py-10 min-h-[220px] shadow-sm hover:shadow-lg transition-shadow h-full">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 border border-blue-100 text-blue-600 mb-6">
        <PartnerIcon type={partner.icon} />
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
