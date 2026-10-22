import Image, { getImageProps } from "next/image";
import LeadForm from "./LeadForm";
import LogoMarquee from "./LogoMarquee";
import { PHONE_NUMBER, WHATSAPP_URL } from "./contact";
import { asset } from "../basePath";

const PHONE = `+91${PHONE_NUMBER}`;
const WHATSAPP = WHATSAPP_URL;

const POINTS = [
  "Factories, Industries, Plants, Manufacturing Units",
  "Malls, Auditorium, Convention Halls, IT & Data Center",
  "Warehouse, Logistics, Cold Storages, Clean Rooms",
  "Multi Storey buildings, Schools, Colleges, Hospitals",
];

function PointsList({ className }: { className: string }) {
  return (
    <ul className={`grid grid-cols-1 lg:grid-cols-[auto_auto] lg:justify-start [&_span]:whitespace-nowrap lg:[&_span]:whitespace-normal 2xl:[&_span]:whitespace-nowrap ${className}`}>
      {POINTS.map((p) => (
        <li key={p} className="flex items-start gap-2">
          <svg className="mt-[0.3em] h-[1em] w-[1em] shrink-0 text-[#e40015]" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>{p}</span>
        </li>
      ))}
    </ul>
  );
}

const STATS = [
  { value: "30-40", accent: "%", label: "Faster Completion" },
  { value: "300", accent: "+", label: "Projects" },
  { value: "175", accent: "+", label: "In-House Engineers" },
  { value: "40,000 ", accent: "MT", label: "Annual Production" },
];

// 1x1 transparent GIF: the <source> for the viewport where an eager hero image is hidden, so it costs nothing there.
const BLANK = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export default function Hero() {
  // Only the hero image visible in each viewport gets eager + fetchPriority="high" (the LCP image).
  const { props: desktopBg } = getImageProps({
    src: asset("/hero/bg-peb-4.webp"),
    alt: "",
    fill: true,
    quality: 60,
    sizes: "95vw",
    loading: "eager",
    fetchPriority: "high",
    className: "object-cover object-center",
  });
  // Phones: Lighthouse picks this tall background as the LCP element. Mobile-only, so sizes ≈ 0.63x its 505px width.
  const { props: mobileBg } = getImageProps({
    src: asset("/hero/m-bg-peb.webp"),
    alt: "",
    fill: true,
    quality: 60,
    sizes: "(min-width: 640px) 100vw, 320px",
    loading: "eager",
    fetchPriority: "high",
    className: "object-cover",
  });
  const { props: mobileHero } = getImageProps({
    src: asset("/hero/m-hero-peb-2.webp"),
    alt: "",
    width: 1000,
    height: 599,
    quality: 70,
    // Rendered at 134vw on phones; sizes ≈ 0.57x of that. Tablets are full width.
    sizes: "(min-width: 640px) 100vw, 77vw",
    loading: "eager",
    className: "absolute left-[-23.4%] top-2 w-[134%] max-w-none sm:left-0 sm:top-1/2 sm:w-full sm:-translate-y-[55%]",
  });

  return (
    <section id="top" className="hero relative isolate z-40 overflow-hidden bg-[#060606] text-white">
      {/* Figma: 1813x1020 image pinned right, overflowing 390px past the edge */}
      {/* Mobile/tablet background */}
      {/* Figma mobile: sunset steel-frame photo below the hero block, under a 40% dark wash */}
      <div className="absolute left-1/2 top-[435px] -z-20 aspect-[505/1556] w-[max(505px,100%)] -translate-x-1/2 lg:hidden">
        <picture>
          <source media="(min-width: 1024px)" srcSet={BLANK} />
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img {...mobileBg} />
        </picture>
      </div>
      <div className="hero-bg absolute -z-20 hidden lg:block">
        <picture>
          <source media="(max-width: 1023px)" srcSet={BLANK} />
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img {...desktopBg} />
        </picture>
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#060606_300px,rgba(6,6,6,0.96)_436px,rgba(6,6,6,0.93)_516px,rgba(6,6,6,0.88)_676px,rgba(6,6,6,0.82)_876px,rgba(6,6,6,0.71)_1076px,rgba(6,6,6,0.59)_1276px,rgba(6,6,6,0.49)_1476px,rgba(6,6,6,0.4)_1676px)] lg:bg-[linear-gradient(to_right,#060606_25%,rgba(6,6,6,0.8)_43%,rgba(6,6,6,0)_88%)]" />

      {/* Mobile nav: fixed bar with logo and quote button */}
      <nav
        aria-label="Primary"
        className="fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between border-b border-white/10 bg-[#060606]/90 px-5 backdrop-blur-md md:hidden"
      >
        <a href="#top" aria-label="Mekark home">
          <Image src={asset("/hero/mekark-logo.webp")} alt="Mekark" width={132} height={46} priority className="h-auto w-[88px]" />
        </a>
        <a href="#quote" className="rounded-lg bg-[#c4161c] px-3.5 py-2 text-xs font-semibold leading-[18px] text-[#f5f5f5] shadow-[0_6px_14px_rgba(196,22,28,0.3)]">
          Get Free Quote
        </a>
      </nav>
      <div aria-hidden="true" className="h-14 md:hidden" />

      <header className="hero-header mx-auto hidden h-20 max-w-[1920px] items-center justify-between px-5 md:flex md:px-10 xl:px-20">
        <Image src={asset("/hero/mekark-logo.webp")} alt="Mekark" width={132} height={46} priority className="hero-logo h-auto w-[104px] md:w-[132px]" />
        <a href="#quote" className="hero-quote rounded-lg bg-[#c4161c] px-5 py-2.5 text-sm leading-[22px] font-semibold text-[#f5f5f5] shadow-[0_9px_18px_rgba(196,22,28,0.3)] md:px-6 md:text-base md:leading-[22px]">
          Get Free Quote
        </a>
      </header>

      <div className="hero-body mx-auto max-w-[1920px] px-5 md:px-10 xl:px-20">
      <div className="hero-grid grid max-w-[1733px] items-center grid-cols-[minmax(0,1fr)] gap-4 pb-12 pt-0 sm:gap-10 sm:pt-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] lg:py-12">
        <div className="hero-left flex flex-col gap-[13px] lg:gap-6">
          <div className="hero-pill relative z-10 flex w-fit items-center gap-1 rounded-full border border-white/20 px-[10px] py-[6px] lg:gap-[10.667px] lg:border-[1.333px] lg:px-[17.333px] lg:py-[9.333px]">
            <span className="hero-dot size-2 rounded-full bg-[#e40015] lg:size-[10.667px]" />
            <span className="hero-pill-text whitespace-nowrap text-[9px] font-medium leading-[normal] lg:text-base lg:leading-[21.333px]">
            End-to-End Turnkey PEB Solutions | Design, Supply & Erection
            </span>
          </div>

          <div className="hero-copy hidden flex-col gap-4 lg:flex">
            <h1 className="hero-h1 flex flex-col items-start gap-[14px] text-[50px] font-bold leading-[58px]">
              <span>Turnkey PEB & Industrial EPC </span>
              <span className="hero-h1-box relative w-fit bg-[#ed1d23] px-[5px] text-[54px] leading-[58px]">
               Contractor — Concept to Handover
              </span>
            </h1>
            <p className="hero-lead max-w-[879px] text-lg leading-[22px] text-[#a9a9a9]">
              Single-Point Accountability for Civil Foundations, Structural Design,
              <br />
              In-House PEB Fabrication, Industrial Flooring &amp; Site Erection.
            </p>
          </div>

          <div className="hero-copy hidden flex-col gap-4 lg:flex">
            <div className="hero-industries flex flex-col gap-2">
              <h2 className="hero-points-title text-[22px] font-semibold leading-7 text-[#f3f3f3]">Industries we serve :</h2>
              <PointsList className="hero-points gap-x-8 gap-y-2 text-[18px] leading-[22px] text-white/70" />
            </div>
          </div>

          <div className="flex flex-col gap-3 lg:hidden">
            <div className="relative -mx-5 h-[277px] overflow-hidden px-5 pt-2.5 md:-mx-10 md:px-10">
              <div aria-hidden="true" className="absolute inset-0">
                <picture>
                  <source media="(min-width: 1024px)" srcSet={BLANK} />
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  <img {...mobileHero} />
                </picture>
                <div className="absolute inset-x-0 top-0 h-[115px] bg-[linear-gradient(180deg,#070707_10.9%,rgba(62,62,62,0.65)_54.2%,rgba(105,105,105,0)_100%)]" />
              </div>
              <h1 className="relative max-w-[879px] font-bold">
                <span className="block text-[22px] leading-[28px] sm:text-[40px] sm:leading-[1.1]">Turnkey PEB &amp; Industrial EPC</span>
              </h1>
              <p className="absolute left-0 top-[48px] flex h-[23px] sm:top-[64px] w-fit items-center bg-[#c4161c] pl-5 pr-4 text-sm font-bold text-white md:left-0 md:pl-10">
                Contractor — Concept to Handover
              </p>
            </div>
            <div className="text-[14px] leading-[19px] text-[#f3f3f3] md:text-[20px] md:leading-7 md:text-[#a9a9a9]">
              <p>
                Single-Point Accountability for Civil Foundations, Structural Design,
                <br className="hidden md:block" />{" "}
                In-House PEB Fabrication, Industrial Flooring &amp; Site Erection.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-1.5 px-3 sm:px-0 lg:hidden">
            <h2 className="text-sm font-medium leading-5 text-white sm:text-lg sm:leading-7">Industries we serve :</h2>
            <PointsList className="gap-x-6 gap-y-1.5 text-[11px] font-medium leading-5 text-white/70 sm:text-base sm:font-normal sm:leading-6" />
          </div>

          <LogoMarquee />

          <dl className="hero-stats grid grid-cols-2 gap-x-3 gap-y-[14px] sm:flex sm:w-fit sm:flex-wrap sm:gap-x-12 sm:gap-y-6 sm:border-t sm:border-[#e2e2e2] sm:py-4">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col-reverse justify-end gap-1 rounded-[10px] border border-white/[0.08] bg-[#1a1a1a] px-4 py-[11px] min-[380px]:px-5 sm:gap-[5.3px] sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0">
                <dt className="text-[10px] font-semibold capitalize text-[#9a9a9a] sm:text-base">{s.label}</dt>
                <dd className="whitespace-nowrap text-xl font-extrabold leading-[normal] min-[380px]:text-2xl sm:text-[42px]">
                  {s.value}
                  <span className={s.accent === "MT" ? "text-[#c4161c] sm:text-[#ed1d23]" : "text-[#c4161c]"}>{s.accent}</span>
                </dd>
              </div>
            ))}
          </dl>

          <div className="hero-ctas hidden flex-wrap gap-4 md:flex md:gap-[30px]">
            <a href={WHATSAPP} className="hero-cta flex h-[55px] items-center gap-2 rounded-full bg-white px-6 text-base font-bold text-[#e5091f]">
              WhatsApp
              <Image src={asset("/hero/hero-wa.svg")} alt="" width={18} height={18} />
            </a>
            <a href={`tel:${PHONE}`} className="hero-cta flex h-[55px] items-center gap-2 rounded-full border border-white px-6 text-base font-bold">
              Call Now
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path d="M9.75 1.5a6.75 6.75 0 0 1 6.75 6.75M9.75 4.5a3.75 3.75 0 0 1 3.75 3.75M10.374 12.426a.75.75 0 0 0 .91-.227l.266-.349a1.5 1.5 0 0 1 1.2-.6H15a1.5 1.5 0 0 1 1.5 1.5V15A1.5 1.5 0 0 1 15 16.5C7.8 16.5 1.5 10.2 1.5 3A1.5 1.5 0 0 1 3 1.5h2.25A1.5 1.5 0 0 1 6.75 3v2.25a1.5 1.5 0 0 1-.6 1.2l-.35.263a.75.75 0 0 0-.22.925 11.3 11.3 0 0 0 4.794 4.789z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        <div id="quote" className="scroll-mt-16 max-sm:px-4 max-sm:pt-[21px]">
          <LeadForm />
        </div>

        {/* Mobile: actions sit below the form */}
        <div className="flex justify-center gap-[14px] px-4 md:hidden">
          <a href={WHATSAPP} className="flex h-[48px] w-[140px] items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-bold text-[#e5091f]">
            WhatsApp
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
              <path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-.8.7a4 4 0 0 1-1.9-1.9l.7-.8-1-2z" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href={`tel:${PHONE}`} className="flex h-[48px] w-[140px] items-center justify-center gap-2 rounded-full border border-white px-5 text-sm font-bold">
            Call Now
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M9.75 1.5a6.75 6.75 0 0 1 6.75 6.75M9.75 4.5a3.75 3.75 0 0 1 3.75 3.75M10.374 12.426a.75.75 0 0 0 .91-.227l.266-.349a1.5 1.5 0 0 1 1.2-.6H15a1.5 1.5 0 0 1 1.5 1.5V15A1.5 1.5 0 0 1 15 16.5C7.8 16.5 1.5 10.2 1.5 3A1.5 1.5 0 0 1 3 1.5h2.25A1.5 1.5 0 0 1 6.75 3v2.25a1.5 1.5 0 0 1-.6 1.2l-.35.263a.75.75 0 0 0-.22.925 11.3 11.3 0 0 0 4.794 4.789z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
