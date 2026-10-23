import Image from "next/image";
import { asset } from "../basePath";

const DESKTOP = [
  {
    src: asset("/hero/completed-1.webp"),
    alt: "Aerial view of a large white warehouse with rooftop solar panels",
    round: "rounded-tl-[32px]",
  },
  {
    src: asset("/hero/completed-2.webp"),
    alt: "Solo Paints industrial warehouse with a red roof",
    round: "rounded-tr-[32px]",
  },
  {
    src: asset("/hero/completed-3.webp"),
    alt: "Param Pulp and Papers warehouse with green trim",
    round: "",
  },
  {
    src: asset("/hero/completed-4.webp"),
    alt: "White industrial warehouse with blue trim and loading docks",
    round: "",
    position: "object-[70%_40%]",
    zoom: "scale-111 origin-right",
  },
  {
    src: asset("/hero/completed-5.webp"),
    alt: "Aerial view of a multi-gabled white PEB factory building",
    round: "rounded-bl-[32px]",
    position: "object-[48%_35%]",
  },
  {
    src: asset("/hero/completed-6.webp"),
    alt: "Modern warehouse at sunset with orange accent columns",
    round: "rounded-br-[32px]",
  },
];

const MOBILE = [
  { src: asset("/hero/completed-2.webp"), alt: "Solo Paints industrial warehouse with a red roof", round: "rounded-t-[10px]" },
  { src: asset("/hero/completed-m2.webp"), alt: "Naram Pulp warehouse under blue skies", round: "" },
  { src: asset("/hero/completed-4.webp"), alt: "White industrial warehouse with blue trim and loading docks", round: "", position: "object-[70%_40%]", zoom: "scale-111 origin-right" },
  { src: asset("/hero/completed-6.webp"), alt: "Modern warehouse at sunset with orange accent columns", round: "" },
  { src: asset("/hero/completed-m6.webp"), alt: "Giant solar-powered industrial complex", round: "rounded-b-[10px]" },
];

function Photo({
  tile,
  className,
  sizes,
}: {
  tile: { src: string; alt: string; position?: string; zoom?: string };
  className: string;
  sizes: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#d9d9d9] ${className}`}>
      <Image
        src={tile.src}
        alt={tile.alt}
        fill
        sizes={sizes}
        quality={75}
        className={`object-cover ${tile.position ?? ""} ${tile.zoom ?? ""}`}
      />
    </div>
  );
}

export default function CompletedProjects() {
  return (
    <section className="bg-[#f9f6f7]">
      <div className="mx-auto max-w-[1920px] px-5 py-8 sm:py-12 md:px-10 xl:px-20 xl:py-[52px]">
        <div className="flex flex-col gap-4 sm:gap-[14px]">
          <h2 className="text-[28px] font-bold leading-8 text-[#0f172a] sm:text-[52px] sm:leading-[1.05] xl:text-[66px] xl:leading-[60px]">
            Completed Projects
          </h2>

        </div>

        {/* Mobile: single column, Figma 10476:11612 */}
        <div className="mt-4 flex flex-col gap-2.5 sm:hidden">
          {MOBILE.map((tile, i) => (
            <Photo key={i} tile={tile} sizes="90vw" className={`h-[197px] w-full ${tile.round}`} />
          ))}
        </div>

        {/* Tablet */}
        <div className="mt-6 hidden grid-cols-2 gap-3 sm:grid lg:hidden">
          {DESKTOP.map((tile) => (
            <Photo key={tile.src} tile={tile} sizes="50vw" className="aspect-[4/3]" />
          ))}
        </div>

        {/* Desktop: 2×3 grid, Figma 10476:11792 */}
        <div className="mt-[52px] hidden grid-cols-2 gap-[25px] lg:grid">
          {DESKTOP.map((t) => (
            <div key={t.src} className={`relative aspect-[867/488] overflow-hidden bg-[#d9d9d9] ${t.round}`}>
              <Image
                src={t.src}
                alt={t.alt}
                fill
                sizes="(min-width: 1920px) 868px, 48vw"
                quality={75}
                className={`object-cover ${t.position ?? ""} ${t.zoom ?? ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
