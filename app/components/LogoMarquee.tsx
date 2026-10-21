import Image from "next/image";
import { asset } from "../basePath";

const CLIENTS = [
  "VWU",
  "Caterpillar",
  "TVS",
  "Tata Electronics",
  "Schwing Stetter",
  "SRF",
  "Saveetha",
  "Sarvam",
  "Reliance",
  "Orbittal",
  "NSI",
  "MRF",
  "L&T",
  "LAF",
  "Komatsu",
];

// Mobile shows four tiles (Figma): L&T, Caterpillar, TVS, Tata.
const MOBILE_LOGOS = [
  { name: "L&T", src: asset("/hero/logo-lt.webp"), w: 64, h: 35 },
  { name: "Caterpillar", src: asset("/hero/logo-cat.webp"), w: 48, h: 48 },
  { name: "TVS", src: asset("/hero/logo-tvs.webp"), w: 52, h: 53 },
  { name: "Tata", src: asset("/hero/logo-tata.webp"), w: 32, h: 32 },
];

export default function LogoMarquee() {
  return (
    <div className="hero-trust w-full max-w-[847px] rounded-[10px] bg-gradient-to-b from-[#08090a] to-[#654528] px-4 py-6 sm:h-[147px] sm:rounded-[18px] sm:from-[#060606] sm:to-[#693f1d]/50 sm:py-4 sm:pl-8 sm:pr-[26px] sm:pt-[21px]">
      <p className="hero-trust-label mb-4 text-[14px] font-semibold uppercase leading-5 text-[#ed1d23] sm:text-[#fa7783] sm:mb-[31px] sm:text-[14px]">
        Trusted Across India
      </p>
      <div className="flex flex-nowrap gap-x-[18px] sm:hidden" aria-label={`Trusted by ${MOBILE_LOGOS.map((l) => l.name).join(", ")}`} role="img">
        {MOBILE_LOGOS.map((logo) => (
          <span key={logo.name} aria-hidden="true" className="flex h-10 w-16 min-w-0 shrink items-center justify-center overflow-hidden rounded-md bg-[#f9f6f7]">
            <Image src={logo.src} alt="" width={logo.w} height={logo.h} className="max-w-none shrink-0" />
          </span>
        ))}
      </div>
      <div
        className="hidden overflow-hidden sm:block"
        role="img"
        aria-label={`Trusted by ${CLIENTS.join(", ")}`}
      >
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].flatMap((copy) =>
            CLIENTS.map((name, i) => (
              <span
                key={`${copy}-${name}`}
                className="logo-tile"
                style={{ "--i": i } as React.CSSProperties}
              />
            )),
          )}
        </div>
      </div>
    </div>
  );
}
