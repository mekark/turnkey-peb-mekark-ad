import type { ReactNode } from "react";

const icon = {
  className: "size-5 sm:size-10",
  width: 40,
  height: 40,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "#ed1d23",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const STEPS: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "PEB Shop Drawings",
    text: "Finalize structural connections, member details and approved fabrication drawings.",
    icon: (
      <svg {...icon}>
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Steel BOM & Nesting",
    text: "Prepare material quantities, cutting lists and optimized steel layouts.",
    icon: (
      <svg {...icon}>
        <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
      </svg>
    ),
  },
  {
    title: "CNC Steel Cutting",
    text: "Cut and fabricate built-up PEB columns and rafters.",
    icon: (
      <svg {...icon}>
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <path d="M7 12h10" />
      </svg>
    ),
  },
  {
    title: "PEB Assembly & Welding",
    text: "Weld plates, stiffeners and structural connection components.",
    icon: (
      <svg {...icon}>
        <path d="M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4" />
        <path d="M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z" />
        <path d="M9 12v5" />
        <path d="M15 12v5" />
        <path d="M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1" />
      </svg>
    ),
  },
  {
    title: "Fabrication QA/QC",
    text: "Inspect dimensions, welds, holes and surface finish.",
    icon: (
      <svg {...icon}>
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "PEB Dispatch Sequencing",
    text: "Mark, bundle and dispatch fabricated members by project sequence.",
    icon: (
      <svg {...icon}>
        <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
        <path d="M15 18H9" />
        <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
        <circle cx="17" cy="18" r="2" />
        <circle cx="7" cy="18" r="2" />
      </svg>
    ),
  },
];

export default function ProjectApproach() {
  return (
    <section className="pa bg-[#f9f6f7]">
      <div className="pa-inner mx-auto max-w-[1920px] px-5 py-8 md:px-10 md:py-16 xl:p-20">
        <div className="max-w-[1015px] xl:max-w-none">
          <h2 className="pa-title text-[26px] font-bold leading-[34px] text-[#0f172a] sm:text-[52px] sm:leading-[1.11] xl:text-[66px] xl:leading-[73.333px]">
            Our <span className="text-[#ed1d23]">PEB Manufacturing</span> Process
          </h2>
          <p className="pa-sub mt-3 text-sm leading-5 text-[#64748b] sm:mt-4 md:text-[20px] md:leading-7 xl:max-w-[1652px] xl:text-[24px] xl:leading-[34px]">
            From Approved Precision Engineering To Dispatch-Ready Steel.
          </p>
        </div>

        <ol className="pa-list mt-6 grid gap-x-10 gap-y-5 sm:mt-[50px] sm:gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-[27px]">
          {STEPS.map((s, i) => (
            <li key={s.title} className="pa-item relative flex items-center gap-[17px] sm:flex-col sm:items-start sm:gap-[52px]">
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-20px] left-4 top-[calc(50%+16.5px)] w-px bg-[#d4d4d4] sm:hidden"
                />
              )}
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-0 h-[calc(50%-16.5px)] w-px bg-[#d4d4d4] sm:hidden"
                />
              )}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="pa-line absolute left-[100px] top-[47.67px] hidden h-px w-[calc(100%-60px)] bg-[#e4dfe0] xl:block"
                />
              )}
              <span
                aria-hidden="true"
                className="relative flex size-[33px] shrink-0 items-center justify-center rounded-full bg-[#f9f6f7] text-[14px] font-bold text-[#080808] sm:hidden"
              >
                {/* 8 dashes: circumference 2π·15.5 ≈ 97.4 → 8 × (9.2 dash + 3 gap) */}
                <svg viewBox="0 0 33 33" className="absolute inset-0 size-full" fill="none" aria-hidden="true">
                  <circle cx="16.5" cy="16.5" r="15.5" stroke="#bcbcbc" strokeWidth="1" strokeDasharray="9.2 2.98" />
                </svg>
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex min-w-0 flex-1 items-center gap-2.5 rounded-md bg-[#fffcfc] py-1.5 pl-2.5 pr-[9px] shadow-[-1px_1px_3px_rgba(30,30,30,0.1)] sm:contents">
                <div className="pa-icon relative flex size-5 shrink-0 items-center justify-center sm:h-[92px] sm:w-[100px] sm:rounded-[18px] sm:border sm:border-[#e4dfe0] sm:bg-white">
                  {s.icon}
                </div>
                <div className="pa-text flex min-w-0 flex-col gap-px sm:gap-3">
                  <span className="pa-num hidden text-[26px] font-bold leading-[21.333px] text-[#ed1d23] sm:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="pa-h text-base font-semibold leading-normal text-[#0f172a] sm:text-[20px] sm:font-bold sm:leading-6 sm:text-black">{s.title}</h3>
                  <p className="pa-p text-xs leading-[18px] text-[#64748b] sm:max-w-[257px] sm:text-[18px] sm:leading-[22.667px]">{s.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
