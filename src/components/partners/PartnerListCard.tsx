import type { PartnerListItem, PartnerTier } from "@/lib/partners";

type PartnerListCardProps = {
  partner: PartnerListItem;
};

function tierStyles(tier: PartnerTier) {
  switch (tier) {
    case "Platinum":
      return "bg-blue-600 text-white border-blue-500";
    case "Gold":
      return "bg-blue-50 text-blue-600 border-blue-100";
    case "Silver":
      return "bg-gray-50 text-gray-500 border-gray-200";
  }
}

export default function PartnerListCard({ partner }: PartnerListCardProps) {
  return (
    <div className="flex items-start gap-5 bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 min-h-[130px] shadow-sm hover:shadow-lg hover:border-blue-100 transition-all h-full">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white text-xs font-bold leading-none">
        {partner.initials}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-base font-bold text-gray-900 leading-snug">
            {partner.name}
          </h3>
          <span
            className={`shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide border ${tierStyles(partner.tier)}`}
          >
            {partner.tier}
          </span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{partner.description}</p>
      </div>
    </div>
  );
}
