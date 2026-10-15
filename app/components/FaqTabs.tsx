"use client";

import { useState, type ReactNode } from "react";

const FAQS: { q: string; a: string }[] = [
  {
    q: "How do I choose a PEB manufacturer for a large industrial building?",
    a: "Choose a PEB manufacturer with in-house structural engineering, suitable fabrication capacity, CNC machinery, documented quality checks and the ability to supply steel according to your project schedule. Confirm the manufacturer's actual production capacity and supply scope before placing an order.",
  },
  {
    q: "What steel components does a PEB building manufacturer supply?",
    a: "A PEB building manufacturer can supply built-up steel columns, rafters, secondary members, bracing, connection plates, bolts and specified roofing or cladding components. The exact steel package depends on the approved drawings and purchase order.",
  },
  {
    q: "What information is needed for a PEB manufacturing quotation?",
    a: "A pre engineered building manufacturer typically needs building dimensions, clear height, bay spacing, structural loads, crane requirements, project location, steel specifications and available drawings. Approved fabrication drawings or a defined design scope help establish the steel quantity and price.",
  },
  {
    q: "Can Mekark supply only fabricated PEB steel without site installation?",
    a: "Mekark's PEB manufacturing scope can be discussed separately from site work. For a steel-only order, confirm whether the quotation includes structural detailing, primary and secondary members, coatings, accessories, packing and delivery.",
  },
  {
    q: "How does a PEB steel manufacturer check fabrication quality?",
    a: "PEB steel fabrication checks can cover material specifications, cutting dimensions, weld quality, connection holes, member alignment, surface preparation and protective coating requirements. Inspection documentation should be agreed upon before production.",
  },
  {
    q: "How long does PEB steel manufacturing take after drawing approval?",
    a: "PEB manufacturing lead time depends on approved structural tonnage, material availability, fabrication complexity, production scheduling, coating specifications and dispatch requirements. The production schedule should be confirmed against the final approved drawings.",
  },
  {
    q: "What should I compare in quotations from different PEB manufacturers?",
    a: "Compare structural steel specifications, tonnage, design responsibility, primary and secondary members, coating systems, included accessories, fabrication quality requirements and delivery terms. A lower price per tonne may exclude components or services included in another quotation.",
  },
  {
    q: "Can a PEB manufacturer handle high-tonnage orders with phased steel dispatch?",
    a: "Yes, subject to production availability and an agreed delivery programme. Mekark's stated 40,000 MT annual production capacity supports planning for large PEB steel requirements, while phased dispatch can be scheduled around individual buildings and steel packages.",
  },
];

export default function FaqTabs({ media }: { media?: ReactNode }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      {media && <div className="mt-5 lg:hidden">{media}</div>}

      <div className="mt-6 lg:mt-0 lg:max-w-[949px]">
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
