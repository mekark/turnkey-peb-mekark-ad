import Image from "next/image";

type Tile = { src: string; alt: string; sizes: string };

// The six Figma photos, shared by mobile, tablet and desktop. `round` is the desktop-only outer-corner rounding.
const DESKTOP = [
  { src: "/hero/gd1.webp", alt: "Modern industrial building with a louvred facade and loading yard", round: "rounded-tl-[32px]" },
  { src: "/hero/gd2.webp", alt: "Large white warehouse with loading docks", round: "rounded-tr-[32px]" },
  { src: "/hero/gd3.webp", alt: "Solo Paints industrial warehouse with a glazed entrance", round: "rounded-bl-[32px]" },
  { src: "/hero/gd4.webp", alt: "Blue steel warehouse on an industrial estate", round: "rounded-br-[32px]" },
  { src: "/hero/gd5.webp", alt: "Aerial view of a white factory building with a long roof", round: "rounded-bl-[32px]" },
  { src: "/hero/gd6.webp", alt: "Industrial shed with loading docks and a parked truck", round: "rounded-br-[32px]" },
];

function Photo({ tile, className, sizes }: { tile: { src: string; alt: string }; className: string; sizes: string }) {
  return (
    <div className={`relative overflow-hidden bg-[#d9d9d9] ${className}`}>
      <Image src={tile.src} alt={tile.alt} fill sizes={sizes} quality={60} className="object-cover" />
    </div>
  );
}

export default function ProjectsGallery() {
  return (
    <section className="bg-[#f9f6f7]">
      <div className="mx-auto max-w-[1920px] px-5 py-8 sm:py-12 md:px-10 xl:px-20 xl:py-[52px]">
        <div className="flex flex-col gap-6 sm:gap-[14px] lg:gap-0">
          <div className="flex flex-col gap-4 sm:gap-[14px]">
            <div className="flex flex-col gap-2.5 font-bold sm:gap-[13px]">
              <p className="text-xs uppercase leading-[18px] tracking-[1.6px] text-[#ed1d23] sm:text-base sm:leading-[21.3px]">our work</p>
              <h2 className="text-[28px] leading-8 text-[#0f172a] sm:text-[52px] sm:leading-[1.05] xl:text-[66px] xl:leading-[60px]">
                Projects <span className="text-[#ed1d23]">Gallery</span>
              </h2>
            </div>
            <p className="max-w-[300px] text-sm font-normal leading-normal text-[#64748b] sm:max-w-none sm:text-base sm:font-medium sm:leading-7 md:text-[20px] xl:text-[24px] xl:leading-9">
              <span className="sm:hidden">Our Completed Projects Across</span>
              <span className="hidden sm:inline">Our Completed Projects Across India.</span>
            </p>
          </div>

          {/* Figma mobile (9791:1469): single column, six full-width 180px tiles, 16px gap */}
          <div className="flex flex-col gap-4 sm:hidden">
            {DESKTOP.map((tile) => (
              <Photo key={tile.src} tile={tile} sizes="55vw" className="h-[180px] w-full" />
            ))}
          </div>

          <div className="hidden grid-cols-2 gap-3 sm:grid lg:hidden">
            {DESKTOP.map((tile) => (
              <Photo key={tile.src} tile={tile} sizes="50vw" className="aspect-[4/3]" />
            ))}
          </div>

          <div className="mt-[52px] hidden grid-cols-2 gap-[25px] lg:grid">
            {DESKTOP.map((t) => (
              <div key={t.src} className={`relative aspect-[867/488] overflow-hidden bg-[#d9d9d9] ${t.round}`}>
                <Image src={t.src} alt={t.alt} fill sizes="(min-width: 1920px) 868px, 48vw" quality={75} className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
