"use client";

import { useState } from "react";
import Image from "next/image";
import { asset } from "../basePath";

// Shared by the mobile / tablet accordion and the desktop two-column list.
const REASONS = [
  { title: "True Single-Point EPC Accountability", text: "One contract covering architectural layout, civil foundation, PEB fabrication, erection, and handover." },
  { title: "Zero Multi-Vendor Coordination Hassles", text: "Eliminate clashes between civil contractors, steel fabricators, and roofing agencies." },
  { title: "Integrated Civil & Anchor Bolt Precision", text: "Because we handle both foundation pedestals and PEB frames, anchor bolt alignment is 100% accurate." },
  { title: "Guaranteed 150-Day Turnkey Timeline*", text: "Synchronized CPM/Primavera project scheduling where civil works and factory steel production run in parallel." },
  { title: "In-House 175+ Engineering & EPC Team", text: "Civil engineers, structural designers, MEP coordinators, and site safety officers under one roof." },
  { title: "6,00,000 Sq. Ft. Captive PEB Plant", text: "No dependency on third-party steel suppliers—40,000 MT/year fabricated in-house." },
  { title: "Industrial VDF / FM2 Flooring & Civil Works", text: "Complete execution of heavy-duty warehouse laser-screed flooring, loading bays, dock levelers, and boundary walls." },
  { title: "Cladding, Insulation & Ventilation Systems", text: "Turnkey installation of standing seam roofs, PUF panels, ridge vents, louvers, and skylights." },
  { title: "Fixed Lumpsum or Item-Rate Turnkey Contracts", text: "Complete budget certainty from day one with milestone-based billing." },
  { title: "Ready-to-Operate Handover", text: "We hand over a fully tested, leak-proof, compliance-ready industrial facility ready for machinery installation." },
];

export default function WhyMekark() {
  const [mOpen, setMOpen] = useState<number | null>(null);

  return (
    <section className="why relative isolate overflow-hidden bg-white sm:bg-[#e60f1a] lg:bg-white">
      {/* Phone: white page, title, building image, then the numbered list with a red rule per point */}
      <div className="bg-white px-5 py-8 sm:hidden">
        <h2 className="font-bold text-[#030303]">
          <span className="block text-[28px] leading-[34px]">Why Industrial Leaders Choose Mekark</span>
          <span className="block text-[26px] leading-[1.366] text-[#ed1d23]">for Turnkey PEB Projects</span>
        </h2>

        <div className="relative h-[252px]">
          <Image
            src={asset("/hero/m-why-bldg.webp")}
            alt="Mekark turnkey PEB industrial building"
            width={471}
            height={252}
            quality={70}
            sizes="471px"
            className="absolute left-[-55px] top-0 h-[252px] w-[471px] max-w-none object-cover"
          />
        </div>

        <ol>
          {REASONS.map((r, i) => (
            <li key={r.title} className="relative flex gap-4 border-b border-[#ededed] py-3 last:border-b-0">
              <span
                aria-hidden="true"
                className="w-10 shrink-0 bg-[linear-gradient(147deg,#ebebeb_1.2%,#cfcfcf_85%)] bg-clip-text text-[28px] font-extrabold leading-8 text-transparent"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span aria-hidden="true" className="absolute bottom-3 left-[45px] top-[17px] w-px bg-gradient-to-b from-[#ed1d23] to-[#ed1d23]/25" />
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <h3 className="text-[18px] font-semibold leading-[22px] text-[#030303]">{r.title}</h3>
                <p className="text-[14px] leading-5 text-[#6e6e6e]">{r.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Tablet: crop of the scene on top, red panel below */}
      <div className="relative hidden aspect-[1100/865] max-h-[420px] w-full sm:block lg:hidden">
        <Image
          src={asset("/hero/why.webp")}
          alt="Man standing before a Mekark billboard on a high-rise construction site"
          fill
          quality={65}
          sizes="(min-width: 640px) 150vw, 220vw"
          className="object-cover object-left"
        />
      </div>

      <div className="hidden px-5 pb-[30px] pt-5 sm:block sm:bg-none sm:px-10 sm:py-10 lg:hidden">
        <h2 className="text-[28px] font-bold leading-[34px] text-[#030303] sm:text-[44px] sm:leading-[1.1] sm:text-white">
          Why Industrial Leaders Choose Mekark <br />
          for Turnkey PEB Projects
        </h2>

        <ul className="mt-[15px] sm:mt-8">
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
      </div>

      {/* Desktop: Figma two-column list around the centre image */}
      <div className="why-d hidden lg:block">
        <h2 className="why-d-head">
          <span className="why-d-title">Why Industrial Leaders Choose Mekark</span>
          <span className="why-d-title-accent">for Turnkey PEB Projects</span>
        </h2>
        <div className="why-d-img">
          <Image
            src={asset("/hero/why-d.webp")}
            alt="Mekark turnkey PEB industrial building"
            fill
            quality={75}
            sizes="(min-width: 1920px) 1078px, 56vw"
            className="object-contain"
          />
        </div>
        {/* One 5-row grid, interleaved left/right, so each row of points lines up across the two columns. */}
        <ol className="why-d-grid">
          {REASONS.slice(0, 5).flatMap((left, i) => [left, REASONS[i + 5]].map((r, side) => (
            <li key={r.title} className="why-d-item">
              <span aria-hidden="true" className="why-d-num">{String(i + 1 + side * 5).padStart(2, "0")}</span>
              <div className="why-d-body">
                <h3 className="why-d-h">{r.title}</h3>
                <p className="why-d-p">{r.text}</p>
              </div>
            </li>
          )))}
        </ol>
      </div>
    </section>
  );
}
