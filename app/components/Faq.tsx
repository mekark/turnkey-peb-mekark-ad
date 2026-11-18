import Image from "next/image";
import FaqTabs from "./FaqTabs";
import { asset } from "../basePath";

export default function Faq() {
  return (
    <section className="overflow-x-clip bg-[#f9f6f7]">
      <div className="mx-auto max-w-[1920px] px-5 py-8 sm:py-12 md:px-10 md:py-16 xl:px-20 xl:py-[63px]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          {/* Heading + illustration: stacked above the list on phones/tablets, left column at lg+ (`contents` lets them join the parent flow below lg) */}
          <div className="contents lg:flex lg:w-[531px] lg:max-w-[39.3%] lg:shrink-0 lg:flex-col lg:gap-7">
            <div className="flex flex-col items-start gap-3 py-1.5 lg:gap-6 lg:py-0">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#fcd5d0] bg-[#feeae7] px-[18.67px] py-2 text-sm font-semibold leading-[10px] text-[#cc000a] lg:border-[#ed2024]/20 lg:bg-[#ed2024]/10 lg:px-[13.788px] lg:py-[7.425px] lg:text-[15.333px] lg:font-bold lg:uppercase lg:leading-[23px] lg:tracking-[3.38px] lg:text-[#5a5656]">
                <span aria-hidden="true" className="hidden size-2 rounded-full bg-[#e40015] lg:block" />
                FAQ
              </span>
              <h2 className="text-[28px] font-bold leading-8 text-[#070506] sm:text-[40px] sm:leading-[1.2] lg:text-[clamp(40px,3.333vw,64px)] lg:font-extrabold lg:leading-[0.95] lg:tracking-[-0.04em] lg:text-[#101116]">
                Frequently Asked <br className="hidden lg:block" />
                <span className="lg:text-[#e60f1a]">Questions</span>
                <span className="hidden sm:inline lg:hidden">.</span>
              </h2>
            </div>
            <div className="relative mx-auto mt-5 aspect-[463/464] w-full max-w-[320px] sm:max-w-[380px] lg:mx-0 lg:mt-0 lg:w-[87%] lg:max-w-none lg:self-center">
              <Image
                src={asset("/hero/faq-q.webp")}
                alt="Construction workers climbing a steel-framed question mark"
                fill
                quality={75}
                sizes="(min-width: 1920px) 463px, (min-width: 1024px) 24vw, (min-width: 640px) 380px, 80vw"
                className="object-contain"
              />
            </div>
          </div>

          <div className="lg:w-[47.5%]">
            <FaqTabs />
          </div>
        </div>
      </div>
    </section>
  );
}
