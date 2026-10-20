import Image from "next/image";
import FaqTabs from "./FaqTabs";
import { asset } from "../basePath";

export default function Faq() {
  return (
    <section className="overflow-x-clip bg-[#f9f6f7]">
      <div className="mx-auto max-w-[1920px] px-5 py-8 sm:py-12 md:px-10 md:py-16 xl:px-20 xl:py-[63px]">
        <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:flex lg:items-start lg:justify-between lg:gap-8">
          {/* Desktop: badge, two-line heading and illustration on the left */}
          <div className="hidden w-[39.3%] shrink-0 lg:block">
            <div className="relative w-max max-w-full">
              <div className="flex flex-col items-start gap-[25.467px]">
                <span className="rounded-full border-[1.333px] border-[#fcd5d0] bg-[#feeae7] px-5 py-[9.333px] text-base font-semibold leading-[26px] text-[#cc000a]">
                  FAQ
                </span>
                <h2 className="text-[clamp(40px,3.4375vw,66px)] font-bold leading-[1.2121] text-[#070506]">
                  Frequently asked <br />
                  <span className="text-[#cc000a]">questions.</span>
                </h2>
              </div>
              <div className="relative h-0 w-full">
                {/* Wider than the title; 54.6% lines the building up with the title center */}
                <div className="absolute left-1/2 top-0 aspect-[684/456] w-[148%] -translate-x-[54.6%]">
                  <Image
                    src={asset("/hero/faq-peb.webp")}
                    alt="Illustration of a modern red and white manufacturing facility"
                    fill
                    quality={75}
                    sizes="(min-width: 1280px) 720px, 45vw"
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="w-full pb-[99%]" aria-hidden />
            </div>
          </div>

          <div className="lg:w-[55.5%]">
            <div className="flex flex-col items-start gap-3 py-1.5 lg:hidden">
              <span className="rounded-full border border-[#fcd5d0] bg-[#feeae7] px-[18.67px] py-2 text-sm font-semibold leading-[10px] text-[#cc000a]">
                FAQ
              </span>
              <h2 className="text-[28px] font-bold leading-8 text-[#070506] sm:text-[40px] sm:leading-[1.2]">
                Frequently Asked Questions<span className="hidden sm:inline">.</span>
              </h2>
            </div>
            <FaqTabs
              media={
                <div className="relative mx-auto aspect-[1536/1024] w-full max-w-[560px]">
                  <Image
                    src={asset("/hero/faq-peb.webp")}
                    alt="Illustration of a modern red and white manufacturing facility"
                    fill
                    quality={75}
                    sizes="(min-width: 640px) 560px, 90vw"
                    className="object-contain"
                  />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
