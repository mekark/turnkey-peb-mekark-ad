import type { ReactNode } from "react";

const icon = {
  className: "size-[18px] sm:size-10",
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
    title: "Scope & Feasibility",
    text: "Confirm site, soil, building loads, utilities and project requirements.",
    icon: (
      <svg {...icon}>
        <rect x="8" y="2" width="8" height="4" rx="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Integrated Engineering",
    text: "Coordinate structural, civil and MEP requirements before execution begins.",
    icon: (
      <svg {...icon}>
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M12 12V8" />
      </svg>
    ),
  },
  {
    title: "Civil & Foundation Works",
    text: "Execute RCC foundations, pedestals and flooring to structural requirements.",
    icon: (
      <svg {...icon}>
        <path d="M10 12h4" />
        <path d="M10 8h4" />
        <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
        <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2" />
        <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16" />
      </svg>
    ),
  },
  {
    title: "In-House PEB Production",
    text: "Fabricate approved structural steel while civil works progress on-site.",
    icon: (
      <svg {...icon}>
        <path d="M12 16h.01" />
        <path d="M16 16h.01" />
        <path d="M8 16h.01" />
        <path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.421l-4.462 2.842A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.421L9.77 10.92A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z" />
      </svg>
    ),
  },
  {
    title: "PEB Erection & Envelope",
    text: "Erect frames, roofing, cladding and structural building components.",
    icon: (
      <svg {...icon}>
        <rect x="2" y="6" width="20" height="8" rx="1" />
        <path d="M17 14v7" />
        <path d="M7 14v7" />
        <path d="M17 3v3" />
        <path d="M7 3v3" />
        <path d="M10 14 2.3 6.3" />
        <path d="m14 6 7.7 7.7" />
        <path d="m8 6 8 8" />
      </svg>
    ),
  },
  {
    title: "MEP Works & Handover",
    text: "Complete services, testing and project close-out under one EPC scope.",
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
    <section className="pa relative overflow-hidden bg-[#eee] sm:bg-[#e0e0e0]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[579px] overflow-hidden sm:hidden">
        <div className="absolute left-1/2 top-0 h-[579px] w-[390px] -translate-x-1/2 opacity-25">
          <div className="absolute left-0 top-0 h-[453px] w-[390px] bg-[url('/turnkey-peb/hero/m-pa-bg.webp')] bg-[length:1359px_453px] bg-[position:-484px_0] bg-no-repeat" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_300px_380px_at_362px_23px,rgba(0,0,0,0)_0%,rgba(95,95,95,0.42)_29%,rgba(168,168,168,0.75)_60%,#eee_100%)]" />
        </div>
      </div>
      <div className="pa-inner relative mx-auto max-w-[1920px] px-5 py-8 md:px-10 md:py-16 xl:p-20">
        <div className="max-w-[1015px] xl:max-w-none">
          <h2 className="pa-title text-[28px] font-bold leading-[34px] text-[#0f172a] sm:text-[52px] sm:leading-[1.11] xl:text-[66px] xl:leading-[73.333px]">
            Our Turnkey <span className="text-[#ed1d23]">PEB Construction</span> Process
          </h2>
          <p className="pa-sub mt-1.5 text-sm leading-5 text-[#64748b] sm:mt-4 md:text-[20px] md:leading-7 xl:max-w-[1652px] xl:text-[24px] xl:leading-[34px]">
            One EPC Route from Project Planning To Handover.
          </p>
        </div>

        <ol className="pa-list mt-4 grid gap-x-10 gap-y-[14px] sm:mt-[50px] sm:gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-x-[27px]">
          {STEPS.map((s, i) => (
            <li key={s.title} className="pa-item relative flex items-start sm:flex-col sm:gap-[52px]">
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-[-14px] left-4 top-[33px] w-px bg-[#bcbcbc] sm:hidden"
                />
              )}
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="pa-line absolute left-[100px] top-[47.67px] hidden h-px w-[calc(100%-60px)] bg-[#e4dfe0] xl:block"
                />
              )}
              <div className="flex min-w-0 flex-1 items-start gap-[5px] sm:contents">
                <div className="pa-icon relative flex size-[33px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_1px_3px_rgba(30,30,30,0.25)] sm:size-[90px] sm:border sm:border-[#e4dfe0] sm:bg-[#f5f5f5] sm:shadow-[4px_4px_7px_rgba(0,0,0,0.1)]">
                  {s.icon}
                </div>
                <div className="flex min-w-0 flex-1 items-start gap-2.5 py-1.5 pl-2.5 pr-2 sm:contents">
                  <span className="text-base font-bold leading-normal text-[#ed1d23] sm:hidden">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="pa-text flex min-w-0 flex-col gap-px sm:gap-3">
                    <span className="pa-num hidden text-[26px] font-bold leading-[21.333px] text-[#ed1d23] sm:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="pa-h text-base font-semibold leading-normal text-[#0f172a] sm:text-[20px] sm:font-bold sm:leading-6 sm:text-black">{s.title}</h3>
                    <p className="pa-p text-xs leading-5 text-[#64748b] sm:max-w-[257px] sm:text-[18px] sm:leading-[22.667px]">{s.text}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
