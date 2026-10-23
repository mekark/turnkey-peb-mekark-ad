import Image from "next/image";
import { asset } from "../basePath";

const PHOTOS = [
  { src: asset("/hero/manufacturing-1.webp"), alt: "Steel beams being fabricated on the PEB plant floor" },
  { src: asset("/hero/manufacturing-2.webp"), alt: "Automated welding and rolling line inside the PEB plant" },
  { src: asset("/hero/manufacturing-3.webp"), alt: "Overhead crane and welders in the PEB fabrication shed" },
];

export default function ManufacturingCapabilities() {
  return (
    <section className="bg-[#f9f6f7]">
      <div className="mx-auto max-w-[1920px] px-5 py-8 sm:py-12 md:px-10 xl:px-20 xl:py-[52px]">
        <h2 className="text-[28px] font-bold leading-8 text-[#0f172a] sm:text-[52px] sm:leading-[1.05] xl:text-[66px] xl:leading-[60px]">
          Our Manufacturing Capabilities
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4 sm:overflow-hidden sm:rounded-[24px] xl:mt-[50px] xl:gap-6">
          {PHOTOS.map((p, i) => (
            <div
              key={p.src}
              className={`relative h-[197px] overflow-hidden bg-[#d9d9d9] sm:aspect-[571/489] sm:h-auto ${
                i === 0 ? "max-sm:rounded-t-[10px]" : i === PHOTOS.length - 1 ? "max-sm:rounded-b-[10px]" : ""
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1920px) 571px, (min-width: 640px) 32vw, 90vw"
                quality={75}
                className="object-cover"
                loading={i === 0 ? undefined : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
