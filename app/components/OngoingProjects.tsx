import Image from "next/image";
import { asset } from "../basePath";

const PROJECTS = [
  {
    src: asset("/hero/ongoing-jk-tyre.webp"),
    alt: "Steel frame of the JK Tyre manufacturing plant under construction",
    name: "Automotive Tyre",
    type: "Manufacturing Unit",
    scope: "Tyre Production",
    area: "75,000",
  },
  {
    src: asset("/hero/ongoing-2.webp"),
    alt: "Rendering of the RMZ Infinity Park commercial building",
    name: "RMZ Infinity Park",
    type: "Commercial Building",
    scope: "IT Park",
    area: "25 lakhs",
  },
  {
    src: asset("/hero/ongoing-3.webp"),
    alt: "Steel frame of the Tata Electronics Systems industrial building under construction",
    name: "Tata Electronics Systems",
    type: "Industrial Building",
    scope: "SWT, ETP, WTP",
    area: "150,000",
  },
];

export default function OngoingProjects() {
  return (
    <section className="bg-[#fef3f3]">
      <div className="mx-auto max-w-[1920px] px-5 py-8 sm:py-12 md:px-10 xl:px-20 xl:py-[52px]">
        <div className="flex flex-col gap-2 sm:gap-[14px]">
          <h2 className="text-[28px] font-bold leading-8 text-[#0f172a] sm:text-[52px] sm:leading-[1.05] xl:text-[66px] xl:leading-[60px]">Ongoing Projects</h2>
          <p className="text-sm font-medium leading-normal text-[#64748b] md:text-[20px] xl:text-[24px] xl:leading-9"></p>
        </div>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-[23px] lg:grid-cols-3 xl:mt-[52px]">
          {PROJECTS.map((p) => (
            <li
              key={p.name}
              className="flex flex-col gap-4 rounded-2xl bg-[#fffdfd] p-4 shadow-[-2px_2px_3px_rgba(30,30,30,0.15)] sm:gap-5 sm:p-5 sm:last:col-span-2 lg:last:col-span-1"
            >
              <div className="relative aspect-[536/317] w-full overflow-hidden rounded-[10px] bg-[#d9d9d9]">
                <Image src={p.src} alt={p.alt} fill sizes="(min-width: 1920px) 536px, (min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw" quality={75} className="object-cover" />
              </div>
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                  <h3 className="text-lg font-semibold leading-normal text-[#3c3938] xl:text-[24px]">{p.name}</h3>
                  <span aria-hidden="true" className="h-5 w-px bg-[#ed1d23] xl:h-6" />
                  <span className="text-sm font-medium leading-normal text-[#9d9d9d] xl:text-lg">{p.type}</span>
                </div>
                <p className="text-sm leading-normal text-[#474747] xl:text-base">{p.scope}</p>
                <hr className="border-t border-[#e2e2e2]" />
                <p className="font-bold leading-normal text-[#ed1d23]">
                  <span className="text-2xl xl:text-[32px]">{p.area}</span>
                  <span className="text-lg font-medium text-[#64748b] xl:text-2xl">{" "}Sq.ft.</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
