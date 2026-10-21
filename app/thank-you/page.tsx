import type { Metadata } from "next";
import Link from "next/link";
import ThankYouGuard from "../components/ThankYouGuard";

export const metadata: Metadata = {
  title: "Thank You | Mekark",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <ThankYouGuard>
    <main className="min-h-screen bg-[#fafafa] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-3xl items-center justify-center">
        <section className="w-full rounded-[2rem] border border-[#e4e4e7] bg-white p-8 text-center shadow-[0_32px_90px_-56px_rgba(9,9,11,0.22)] sm:p-10 md:p-14">
          <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-[#c4161c]/10 text-[#c4161c]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          </div>
          <p className="mt-6 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#c4161c]">Enquiry Submitted</p>
          <h1 className="mt-4 text-[2rem] font-semibold tracking-[-0.04em] text-[#09090b] sm:text-[40px] 2xl:text-[3rem]">
            Thank you. Our team will contact you shortly.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#52525b] sm:text-[1.05rem]">
            Your project enquiry has been received successfully. We will review the details and get back to you for the next discussion.
          </p>
          <div className="mt-10 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c4161c] px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-200 hover:bg-[#a31217]"
            >
              <span>Back To Home</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </main>
    </ThankYouGuard>
  );
}
