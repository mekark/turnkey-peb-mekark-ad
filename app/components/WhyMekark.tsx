import { getImageProps } from "next/image";
import { asset } from "../basePath";

// One list for every breakpoint: numbered list on phones, two columns on tablet and desktop.
const REASONS = [
  { title: "True Single-Point EPC Accountability", text: "One contract covering architectural layout, civil foundation, PEB fabrication, erection, and handover." },
  { title: "Zero Multi-Vendor Coordination Hassles", text: "Eliminate clashes between civil contractors, steel fabricators, and roofing agencies." },
  { title: "Integrated Civil & Anchor Bolt Precision", text: "Because we handle both foundation pedestals and PEB frames, anchor bolt alignment is 100% accurate." },
  { title: "Guaranteed 150-Day Turnkey Timeline*", text: "Synchronized CPM/Primavera project scheduling where civil works and factory steel production run in parallel." },
  { title: "In-House 250+ Engineering & EPC Team", text: "Civil engineers, structural designers, MEP coordinators, and site safety officers under one roof." },
  { title: "6,00,000 Sq. Ft. Captive PEB Plant", text: "No dependency on third-party steel suppliers—40,000 MT/year fabricated in-house." },
  { title: "Industrial VDF / FM2 Flooring & Civil Works", text: "Complete execution of heavy-duty warehouse laser-screed flooring, loading bays, dock levelers, and boundary walls." },
  { title: "Cladding, Insulation & Ventilation Systems", text: "Turnkey installation of standing seam roofs, PUF panels, ridge vents, louvers, and skylights." },
  { title: "Fixed Lumpsum or Item-Rate Turnkey Contracts", text: "Complete budget certainty from day one with milestone-based billing." },
  { title: "Ready-to-Operate Handover", text: "We hand over a fully tested, leak-proof, compliance-ready industrial facility ready for machinery installation." },
];

const ALT = "Mekark turnkey PEB industrial building";

export default function WhyMekark() {
  // One <picture>: only the source matching the viewport is downloaded.
  const { props: phoneImg } = getImageProps({
    src: asset("/hero/m-why-bldg.webp"),
    alt: ALT,
    width: 471,
    height: 252,
    quality: 70,
    sizes: "471px",
  });
  const { props: desktopImg } = getImageProps({
    src: asset("/hero/why-d.webp"),
    alt: ALT,
    fill: true,
    quality: 75,
    sizes: "(min-width: 1920px) 1078px, (min-width: 1024px) 56vw, 100vw",
  });

  return (
    <section className="why relative isolate overflow-hidden bg-white">
      <div className="why-d flex flex-col sm:block">
        <h2 className="why-d-head px-5 pt-8 font-bold text-[#030303] sm:p-0">
          <span className="why-d-title block text-[28px] leading-[34px]">Why Industrial Leaders Choose Mekark</span>
          <span className="why-d-title-accent block text-[26px] leading-[1.366] text-[#ed1d23]">for Turnkey PEB Projects</span>
        </h2>

        {/* Phone: 252px strip under the title. Tablet + desktop: the centred building image. */}
        <div className="why-d-img relative mx-5 h-[252px] sm:mx-0 sm:h-auto">
          <picture>
            <source media="(min-width: 640px)" srcSet={desktopImg.srcSet} sizes={desktopImg.sizes} />
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              {...phoneImg}
              className="absolute left-[-55px] top-0 h-[252px] w-[471px] max-w-none object-cover sm:inset-0 sm:h-full sm:w-full sm:max-w-full sm:object-contain sm:object-center"
            />
          </picture>
        </div>

        <ol className="why-d-grid px-5 pb-8 sm:p-0">
          {REASONS.map((r, i) => (
            <li
              key={r.title}
              className="why-d-item relative flex gap-4 border-b border-[#ededed] py-3 last:border-b-0 sm:gap-0 sm:border-b-0 sm:py-0"
            >
              <span
                aria-hidden="true"
                className="why-d-num w-10 shrink-0 bg-[linear-gradient(147deg,#ebebeb_1.2%,#cfcfcf_85%)] bg-clip-text text-[28px] font-extrabold leading-8 text-transparent sm:w-auto"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span aria-hidden="true" className="absolute bottom-3 left-[45px] top-[17px] w-px bg-gradient-to-b from-[#ed1d23] to-[#ed1d23]/25 sm:hidden" />
              <div className="why-d-body flex min-w-0 flex-1 flex-col gap-1.5">
                <h3 className="why-d-h text-[18px] font-semibold leading-[22px] text-[#030303]">{r.title}</h3>
                <p className="why-d-p text-[14px] leading-5 text-[#6e6e6e]">{r.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
