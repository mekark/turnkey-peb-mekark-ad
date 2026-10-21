"use client";

import { useState, type ReactNode } from "react";

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is included in Mekark’s Turnkey PEB EPC package?",
    a: "Our turnkey PEB package covers soil investigation, architectural & structural design, RCC pedestals & civil foundations, industrial flooring, in-house PEB steel fabrication, roof/wall cladding, drainage gutters, and final site erection.",
  },
  {
    q: "How does hiring a Turnkey PEB contractor save time and cost?",
    a: "In traditional setups, delays happen when civil contractors and PEB suppliers blame each other for anchor-bolt mismatches or schedule slips. A single turnkey PEB contractor overlaps foundation work with factory fabrication, cutting total project duration by up to 40%.",
  },
  {
    q: "Can you customize a turnkey PEB project if our civil foundation is already completed?",
    a: "Yes, we offer both full Civil + PEB Turnkey EPC packages as well as Superstructure-Only Turnkey PEB packages (design, fabrication, supply, sheeting, and erection on your existing pedestals).",
  },
  {
    q: "How do you track progress during a turnkey PEB construction project?",
    a: "Every turnkey client is assigned a dedicated Project Manager who provides weekly Gantt-chart progress reports covering engineering approvals, factory dispatch batches, and daily site erection milestones.",
  },
];

export default function FaqTabs({ media }: { media?: ReactNode }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {media && <div className="mt-5 lg:hidden">{media}</div>}

      <div className="mt-6 lg:mt-0 lg:max-w-[912px]">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-b border-[#e2e2e2] pb-3 pt-3 first:pt-0 sm:border-b-[1.333px] sm:pb-[33px] sm:pt-8 lg:pb-[33.333px] lg:pt-8">
              <h3>
                <button
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full items-center justify-between gap-4 text-left text-base font-medium leading-normal sm:items-start sm:gap-6 sm:text-[21.333px] sm:leading-[29.867px] lg:text-[clamp(20px,1.25vw,24px)] lg:leading-8 ${
                    isOpen ? "text-[#c4161c]" : "text-[#101116] sm:text-[#080808]"
                  }`}
                >
                  <span className="flex">
                    <span aria-hidden="true" className="w-6 shrink-0 lg:w-9">{i + 1}.</span>
                    <span>{f.q}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full text-[21.333px] font-normal leading-none transition-transform sm:size-[37.333px] duration-200 lg:ml-6 ${
                      isOpen ? "rotate-45 bg-[#c4161c] text-[#f5f5f5]" : "bg-[#f0f0f0] text-[#9a9a9a]"
                    }`}
                  >
                    +
                  </span>
                </button>
              </h3>
              <div
                id={`faq-a-${i}`}
                role="region"
                className={`grid transition-[grid-template-rows] duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="pl-[23px] pt-2.5 text-sm font-normal leading-normal text-[#4b4d53] sm:pl-0 sm:pt-[18.667px] sm:font-medium sm:text-[#5a5a5a] sm:text-[18.667px] sm:leading-[30.8px] lg:max-w-[846px] lg:pl-9 lg:pt-[18px] lg:text-[clamp(16px,1.04vw,20px)] lg:leading-[1.5]">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
