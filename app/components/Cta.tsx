"use client";

import { emailPattern, locationPattern, namePattern, phonePattern } from "./formValidation";
import { useEnquirySubmit } from "./useEnquirySubmit";
import FormSelect, { industryOptions, sqftOptions } from "./FormSelect";
import Image from "next/image";
import { asset } from "../basePath";

const field =
  "w-full rounded-lg border border-[#e2e2e2] bg-[#f0f0f0] px-4 py-3 text-xs text-[#080808] placeholder:text-[#757575] focus:outline-2 focus:outline-offset-2 focus:outline-[#c4161c]";
const label = "max-md:sr-only mb-1.5 block text-sm font-bold tracking-[0.3px] text-[#5a5a5a]";

function Field({
  id,
  text,
  children,
  className = "",
}: {
  id: string;
  text: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className={label}>
        {text.endsWith("*") ? (
          <>
            {text.slice(0, -1)}
            <span className="text-[#ed1d23]">*</span>
          </>
        ) : (
          text
        )}
      </label>
      {children}
    </div>
  );
}

function ContactCard({
  href,
  icon,
  eyebrow,
  title,
  titleClass,
}: {
  href: string;
  icon: React.ReactNode;
  eyebrow?: string;
  title: string;
  titleClass: string;
}) {
  return (
    <a
      href={href}
      className="cta-card flex items-center gap-4 rounded-[20px] border border-black/5 bg-[#212121] px-4 py-2.5 sm:h-[120px] sm:gap-5 sm:rounded-[29px] sm:px-7 sm:py-0"
    >
      <span className="cta-card-icon flex size-10 shrink-0 items-center justify-center rounded-lg bg-[#cc000a] sm:size-16 sm:rounded-[24px]">
        {icon}
      </span>
      <span className="flex min-w-0 flex-1 flex-col gap-0.5 sm:flex-none sm:gap-0">
        {eyebrow && <span className="cta-eyebrow text-[10px] font-bold uppercase leading-4 text-[#a9a9a9] sm:text-base sm:leading-[21px]">{eyebrow}</span>}
        <span className={`cta-card-title text-white ${titleClass}`}>{title}</span>
      </span>
      <Image src={asset("/hero/cta-arrow.svg")} alt="" width={27} height={26} className="ml-auto h-auto w-6 shrink-0 sm:w-[27px]" />
    </a>
  );
}

export default function Cta() {
  const { onSubmit, submitting, error } = useEnquirySubmit();

  return (
    <section id="contact" className="cta relative overflow-hidden bg-[#090909]">
      {/* Phone: portrait crop fading to black (Figma 8698:8862) */}
      <div className="absolute inset-x-0 top-0 h-[601px] sm:hidden">
        <Image src={asset("/hero/m-cta-bg.webp")} alt="" fill quality={60} sizes="100vw" className="object-cover opacity-30" />
      </div>
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent to-black to-[70%] sm:hidden" />

      <Image
        src={asset("/hero/cta-bg.webp")}
        alt=""
        fill
        quality={60}
        sizes="100vw"
        className="hidden object-cover opacity-30 sm:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-[linear-gradient(-62.6deg,rgba(16,21,25,0)_0.65%,#080b0f_83.2%)] sm:block"
      />
      <div
        aria-hidden="true"
        className="absolute left-[180px] top-[-61px] size-[274px] rounded-full bg-[#e40015]/30 opacity-90 blur-[62px] sm:-right-[213px] sm:left-auto sm:-top-[267px] sm:size-[1035px]"
      />

      <div className="cta-inner relative mx-auto max-w-[1920px] px-5 pb-8 pt-9 sm:py-12 md:px-10 md:py-16">
        <div className="cta-grid grid grid-cols-[minmax(0,1fr)] items-center gap-[19px] sm:gap-10">
          <div>
            <span className="cta-chip inline-flex rounded-full border border-[#fcd5d0] bg-[#feeae7] px-[18px] py-1 text-[10px] font-semibold leading-normal text-[#cc000a] sm:px-5 sm:py-[9px] sm:text-base sm:leading-[26px]">
              Ready to Build?
            </span>
            <h2 className="cta-title mt-3.5 text-[28px] font-extrabold leading-[34px] text-white sm:mt-6 sm:text-[clamp(36px,9vw,64px)] sm:leading-[1.05]">
              Start Your PEB Project <span className="text-[#cc000a] sm:text-[#ed1d23]">Today</span>
            </h2>
            <p className="cta-sub mt-3 max-w-[837px] text-sm font-medium leading-normal text-white/65 sm:mt-6 sm:text-lg sm:leading-[1.55]">
              Share your requirement — our engineering team responds with a layout, BOQ and timeline. Response within 2 hours.
            </p>

            <div className="cta-cards mt-[19px] flex max-w-[693px] flex-col gap-3 sm:mt-10 sm:gap-5">
              <ContactCard
                href="tel:+919790924754"
                eyebrow="Call Now"
                title="+91 97909 24754"
                titleClass="text-sm font-extrabold leading-6 sm:text-[21px] sm:leading-8"
                icon={<Image src={asset("/hero/cta-call.svg")} alt="" width={27} height={27} className="size-6 sm:size-[27px]" />}
              />
              <ContactCard
                href="https://wa.me/919790924754"
                title="WhatsApp Us Now"
                titleClass="cta-wa-title text-sm font-bold leading-6 sm:text-[26px] sm:leading-normal"
                icon={<Image src={asset("/hero/whatsapp.webp")} alt="" width={39} height={39} className="cta-wa size-[30px] sm:size-[39px]" />}
              />
            </div>
          </div>

          <form
            method="post"
            onSubmit={onSubmit}
            className="cta-form mx-auto w-full max-w-[640px] rounded-3xl border border-[#e2e2e2] bg-white p-5 shadow-[0_24px_40px_rgba(0,0,0,0.06)] sm:rounded-[29px] sm:px-[46px] sm:py-[42px]"
          >
            <h3 className="text-center text-lg font-extrabold sm:text-[22px] tracking-[-0.5px] text-[#080808]">
              Request Your Project Blueprint
            </h3>
            <p className="cta-form-sub mt-2 text-center text-xs sm:mt-1.5 sm:text-[13px] font-medium text-[#9a9a9a]">
              Get a custom layout, cost range &amp; 150-day timeline
            </p>

            <div className="cta-fields mt-4 grid gap-x-8 gap-y-4 sm:mt-5 sm:grid-cols-2 sm:gap-y-3">
              <Field id="cta-name" text="Full Name*">
                <input id="cta-name" name="name" required autoComplete="name" {...namePattern} placeholder="Enter Your name" className={field} />
              </Field>
              <Field id="cta-location" text="Project Location*">
                <input id="cta-location" name="location" required autoComplete="address-level2" {...locationPattern} placeholder="Enter project location" className={field} />
              </Field>
              <Field id="cta-phone" text="Mobile Number*">
                <input id="cta-phone" name="phone" type="tel" inputMode="tel" required autoComplete="tel" {...phonePattern} placeholder="Mobile Number*" className={field} />
              </Field>
              <Field id="cta-email" text="Email Address*">
                <input id="cta-email" name="email" type="email" required autoComplete="email" {...emailPattern} placeholder="Enter Email Address" className={field} />
              </Field>
              <Field id="cta-industry" text="Industry Type*">
                <FormSelect id="cta-industry" name="industry" options={industryOptions} placeholder="Select your Industry type" className={field} />
              </Field>
              <Field id="cta-sqft" text="Project Sq. Ft*">
                <FormSelect id="cta-sqft" name="sqft" options={sqftOptions} placeholder="Select Sq.ft Requirement" className={field} />
              </Field>
              <Field id="cta-details" text="Requirement Details" className="sm:col-span-2">
                <textarea id="cta-details" name="details" rows={3} placeholder="Enter requirement details" className={`${field} resize-none max-sm:h-[46px]`} />
              </Field>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="cta-submit mt-4 h-[46px] w-full rounded-lg bg-[#c4161c] text-sm font-semibold sm:mt-5 sm:h-[58px] sm:text-base sm:font-extrabold text-[#f5f5f5] shadow-[0_8px_16px_rgba(196,22,28,0.3)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitting ? "Submitting..." : "Request an Estimate →"}
            </button>
            {error && (
              <p role="alert" className="mt-3 text-center text-xs font-medium text-[#c4161c]">
                {error}
              </p>
            )}
            <p className="cta-note mt-4 text-center text-xs sm:text-[11px] font-medium tracking-[0.3px] text-[#5a5a5a]">
              100% Transparent Consultation with single point project support
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
