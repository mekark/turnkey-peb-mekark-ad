"use client";

import { useState } from "react";
import Image from "next/image";

// Shared by the mobile / tablet and desktop accordions.
const REASONS = [
  { title: "40,000 MT Annual Capacity", text: "Procurement to PEB building manufacturer - pre engineered building contractor, pre-fabricated building constructor in erection of engineered steel buildings. Own manufacturing facility. Steel is pre engineered, pre-fabricated - peb building manufacturer, Turnkey PEB contractors & PEB steel structure building constructors." },
  { title: "6-Lakh Sq.Ft. Manufacturing Facility", text: "In-house steel cutting, welding and fabrication keep PEB production within Mekark's own facility." },
  { title: "In-House PEB Engineering", text: "As a PEB building manufacturer, Mekark converts approved structural designs into fabrication-ready drawings and steel details." },
  { title: "CNC Steel Fabrication", text: "CNC processing maintains cutting accuracy across PEB columns, rafters and repeated steel components." },
  { title: "PEB Fabrication Quality Checks", text: "Material specifications, welds, member dimensions and protective finishes are checked before dispatch." },
  { title: "Project-Wise Steel Supply", text: "Fabricated PEB members are identified, bundled and dispatched according to approved building and delivery sequences." },
];

export default function WhyMekark() {
  const [open, setOpen] = useState<number | null>(null);
  const [mOpen, setMOpen] = useState<number | null>(null);

  return (
    <section className="why relative isolate overflow-hidden bg-[#e60f1a]">
      <Image
        src="/hero/why.webp"
        alt="Man standing before a Mekark billboard on a high-rise construction site"
        fill
        quality={70}
        sizes="(min-width: 1024px) 100vw, 150vw"
        className="-z-10 hidden object-cover lg:block"
      />

      {/* Phone: fixed 249px banner (Figma crop), gradient panel below */}
      <div className="relative h-[249px] overflow-hidden bg-[#f9f6f7] sm:hidden">
        <Image
          src="/hero/m-why.webp"
          alt="Man standing before a Mekark billboard on a high-rise construction site"
          width={617}
          height={278}
          quality={70}
          sizes="617px"
          className="absolute left-0 top-[-13px] h-[278px] w-[max(617px,100%)] max-w-none object-cover"
        />
      </div>

      {/* Tablet: crop of the scene on top, red panel below */}
      <div className="relative hidden aspect-[1100/865] max-h-[420px] w-full sm:block lg:hidden">
        <Image
          src="/hero/why.webp"
          alt="Man standing before a Mekark billboard on a high-rise construction site"
          fill
          quality={65}
          sizes="(min-width: 640px) 150vw, 220vw"
          className="object-cover object-left"
        />
      </div>

      <div className="why-panel bg-gradient-to-b from-[#fffdfd] from-[6%] to-[#e60f1a] to-[47%] px-5 pb-[30px] pt-5 sm:bg-none sm:px-10 sm:py-10 lg:absolute lg:right-0 lg:top-0 lg:p-0">
        <div className="why-head">
          <h2 className="why-title text-[28px] font-bold leading-[34px] text-[#030303] sm:text-[44px] sm:leading-[1.1] sm:text-white lg:text-[#030303]">
            Why Top Industries <br />
            Choose Mekark
          </h2>
          <p className="why-sub mt-3 text-xs leading-[19px] text-[#424242] sm:mt-4 sm:text-base sm:leading-7 sm:text-white/90 lg:text-[#424242]">
            A PEB steel manufacturer with in-house engineering, large Scale fabrication and project-wise steel supply.
          </p>
        </div>

        <ul className="mt-[15px] sm:mt-8 lg:hidden">
          {REASONS.map((r, i) => (
            <li key={r.title} className="border-b border-[#e58282] py-2.5 first:pt-0 last:border-b-0 last:pb-0 sm:border-[#e2e2e2]">
              <button
                type="button"
                id={`why-m-btn-${i}`}
                aria-expanded={mOpen === i}
                aria-controls={`why-m-panel-${i}`}
                onClick={() => setMOpen(mOpen === i ? null : i)}
                className="flex min-h-9 w-full items-center justify-between gap-4 text-left text-base font-bold leading-[18px] text-white"
              >
                <span className="flex">
                  <span aria-hidden="true" className="w-6 shrink-0">{i + 1}.</span>
                  <span>{r.title}</span>
                </span>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 30 30"
                  fill="none"
                  aria-hidden="true"
                  className={`shrink-0 transition-transform duration-300 ${mOpen === i ? "rotate-180" : ""}`}
                >
                  <path d="M8 12l7 7 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${mOpen === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="min-h-0 overflow-hidden">
                  <p id={`why-m-panel-${i}`} role="region" aria-labelledby={`why-m-btn-${i}`} className="pl-6 pt-1.5 text-sm font-medium leading-[19px] text-white">
                    {r.text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul className="why-acc hidden lg:block">
          {REASONS.map((r, i) => (
            <li key={r.title} data-open={open === i} className="why-acc-item">
              <button
                type="button"
                id={`why-btn-${i}`}
                aria-expanded={open === i}
                aria-controls={`why-panel-${i}`}
                onClick={() => setOpen(open === i ? null : i)}
                className="why-acc-btn"
              >
                <span className="w-[25px] shrink-0">{i + 1}.</span>
                <span className="flex-1">{r.title}</span>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  aria-hidden="true"
                  className={`shrink-0 transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                >
                  <path d="M8 12l7 7 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <div className="min-h-0 overflow-hidden">
                  <p id={`why-panel-${i}`} role="region" aria-labelledby={`why-btn-${i}`} className="why-acc-desc">
                    {r.text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
