"use client";

import { useState, type ReactNode } from "react";

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is included in turnkey PEB construction?",
    a: "Turnkey PEB construction can include structural engineering, procurement, RCC foundations, PEB manufacturing, steel erection, roofing, cladding, MEP and fire systems, testing and final handover under one EPC scope.",
  },
  {
    q: "How do I choose a turnkey PEB contractor for an industrial project?",
    a: "Choose a turnkey PEB contractor with structural engineering, civil execution, steel manufacturing, erection and MEP coordination capabilities. Confirm who is responsible for each project package, delivery milestones and final handover.",
  },
  {
    q: "Can a PEB turnkey contractor handle civil foundations, steel erection and MEP together?",
    a: "Yes. A PEB turnkey contractor can coordinate RCC foundations, anchor bolts, steel erection and MEP services under one project scope. Structural loads and service requirements are planned before their respective site activities begin.",
  },
  {
    q: "What information is required for a turnkey PEB building construction project quotation?",
    a: "Share the site location, building dimensions, clear height, structural loads, soil information, crane requirements, flooring specifications, MEP requirements and expected project schedule. These details help define the turnkey PEB EPC project scope.",
  },
  {
    q: "What affects turnkey PEB construction cost?",
    a: "Turnkey PEB construction cost depends on building area, structural tonnage, foundation conditions, span, height, crane loads, roofing, cladding, flooring, MEP scope and site location.",
  },
  {
    q: "How long does a turnkey PEB project take from design to handover?",
    a: "Project timelines depend on approvals, foundation complexity, steel tonnage, erection requirements and MEP scope. Coordinating in-house fabrication with ongoing civil works can help reduce delays between construction stages.",
  },
  {
    q: "Can turnkey PEB projects include EOT cranes, mezzanines and insulated roofing?",
    a: "Yes. Depending on the approved project scope, turnkey PEB projects can include EOT crane-support structures, mezzanine floors, insulated roofing, cladding, ventilation and other building services.",
  },
  {
    q: "What should I compare when evaluating turnkey PEB contractor quotations?",
    a: "Compare civil works, structural specifications, steel manufacturing, erection, roofing, cladding, MEP responsibilities, exclusions, testing and handover requirements. A PEB EPC contractor should clearly identify the work covered under the quoted contract.",
  },
];

export default function FaqTabs({ media }: { media?: ReactNode }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {media && <div className="mt-5 lg:hidden">{media}</div>}

      <div className="mt-6 lg:mt-0 lg:max-h-[min(80vh,720px)] lg:max-w-[949px] lg:overflow-y-auto lg:[scrollbar-width:none] lg:[&::-webkit-scrollbar]:hidden">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-b border-[#e2e2e2] pb-3 pt-3 first:pt-0 sm:border-b-[1.333px] sm:pb-[33px] sm:pt-8 lg:pb-[25.333px] lg:pt-6 lg:first:pt-0">
              <h3>
                <button
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex w-full items-center justify-between gap-4 text-left text-base font-medium leading-normal sm:items-start sm:gap-6 sm:text-[21.333px] sm:leading-[29.867px] lg:text-[21px] ${
                    isOpen ? "text-[#c4161c]" : "text-[#101116] sm:text-[#080808]"
                  }`}
                >
                  <span className="flex">
                    <span aria-hidden="true" className="w-6 shrink-0 lg:w-[31.5px]">{i + 1}.</span>
                    <span>{f.q}</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className={`flex size-6 shrink-0 items-center justify-center rounded-full text-[21.333px] font-normal leading-none transition-transform sm:size-[37.333px] duration-200 ${
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
                  <p className="pl-[23px] pt-2.5 text-sm font-normal leading-normal text-[#4b4d53] sm:pl-0 sm:pt-[18.667px] sm:font-medium sm:text-[#5a5a5a] sm:text-[18.667px] sm:leading-[30.8px] lg:max-w-[817px] lg:pl-[34px] lg:pt-1.5 lg:text-[18px] lg:leading-7">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
