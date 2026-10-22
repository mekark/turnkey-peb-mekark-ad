import Image from "next/image";
import FaqTabs from "./FaqTabs";
import { asset } from "../basePath";

export default function Faq() {
  return (
    <section className="overflow-x-clip bg-[#f9f6f7]">
      <div className="mx-auto max-w-[1920px] px-5 py-8 sm:py-12 md:px-10 md:py-16 xl:px-20 xl:py-[63px]">
        <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
          {/* Desktop: pill badge, two-line heading, subtitle and illustration on the left */}
          <div className="hidden w-[531px] max-w-[39.3%] shrink-0 flex-col gap-7 lg:flex">
            <div className="flex flex-col items-start gap-6">
              <span className="flex items-center gap-2 rounded-full border border-[#ed2024]/20 bg-[#ed2024]/10 px-[13.788px] py-[7.425px]">
                <span aria-hidden="true" className="size-2 rounded-full bg-[#e40015]" />
                <span className="text-[15.333px] font-bold uppercase leading-[23px] tracking-[3.38px] text-[#5a5656]">faq</span>
              </span>
              <h2 className="text-[clamp(40px,3.333vw,64px)] font-extrabold leading-[0.95] tracking-[-0.04em] text-[#101116]">
                Frequently Asked <br />
                <span className="text-[#e60f1a]">Questions</span>
              </h2>
            </div>
            <div className="relative aspect-[463/464] w-[87%] self-center">
              <Image
                src={asset("/hero/faq-q.webp")}
                alt="Construction workers climbing a steel-framed question mark"
                fill
                quality={75}
                sizes="(min-width: 1920px) 463px, 24vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="lg:w-[47.5%]">
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
                <div className="relative mx-auto aspect-[463/464] w-full max-w-[320px] sm:max-w-[380px]">
                  <Image
                    src={asset("/hero/faq-q.webp")}
                    alt="Construction workers climbing a steel-framed question mark"
                    fill
                    quality={75}
                    sizes="(min-width: 640px) 380px, 80vw"
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
