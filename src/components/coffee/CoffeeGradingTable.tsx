"use client";

import AnimateInView from "@/components/ui/AnimateInView";
import { GRADING_SYSTEM_DATA } from "@/lib/coffee";

export default function CoffeeGradingTable() {
  return (
    <section className="py-16 lg:py-20 bg-[#F4F7FB]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <AnimateInView className="text-center mb-12">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#0F62FE]/10 text-[#0F62FE] font-semibold tracking-wider text-xs uppercase border border-[#0F62FE]/20 mb-4">
            Grading Standards
          </span>
          <h2 className="text-3xl font-extrabold text-[#001D6C] sm:text-4xl">
            Ethiopian Coffee Grading System
          </h2>
          <p className="mt-3 text-sm text-[#525252] max-w-2xl mx-auto">
            Understanding Ethiopia&apos;s specialty coffee grading classification
            from premium to standard grades.
          </p>
        </AnimateInView>

        <AnimateInView delay={0.1} y={20}>
          <div className="overflow-x-auto rounded-xl border border-[#E0E6ED]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#1152CA] text-white">
                  <th className="text-left px-5 py-3.5 font-bold">Grade</th>
                  <th className="text-left px-5 py-3.5 font-bold">Total Defects</th>
                  <th className="text-left px-5 py-3.5 font-bold">Unwashed File</th>
                  <th className="text-left px-5 py-3.5 font-bold">Flavor</th>
                </tr>
              </thead>
              <tbody>
                {GRADING_SYSTEM_DATA.map((row, index) => (
                  <tr
                    key={row.grade}
                    className={
                      index % 2 === 0
                        ? "bg-white border-b border-[#E0E6ED]"
                        : "bg-[#F8FAFC] border-b border-[#E0E6ED]"
                    }
                  >
                    <td className="px-5 py-3.5 font-semibold text-[#001D6C]">
                      {row.grade}
                    </td>
                    <td className="px-5 py-3.5 text-[#525252]">
                      {row.defects}
                    </td>
                    <td className="px-5 py-3.5">
                      <a
                        href="/contact"
                        className="text-[#0F62FE] font-medium hover:underline"
                      >
                        View File
                      </a>
                    </td>
                    <td className="px-5 py-3.5 text-[#525252]">
                      {row.flavor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimateInView>
      </div>
    </section>
  );
}
