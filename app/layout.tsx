import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import DeferredGoogleTagManager from "./components/DeferredGoogleTagManager";
import "./globals.css";

// Same GTM container used by the other Mekark landing pages.
const GTM_ID = "GTM-5SBMM86H";

// Single variable font (one latin file) covers every weight used in the design.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Turnkey PEB Contractor | End-to-End PEB EPC Execution - Mekark",
  description:
    "Single-point Turnkey PEB & EPC contractor. We handle structural design, civil foundations, PEB manufacturing, roofing, flooring & final handover.",
};

export const viewport: Viewport = {
  themeColor: "#060606",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} antialiased`}>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Footer />
        <FloatingActions />
        <DeferredGoogleTagManager gtmId={GTM_ID} />
      </body>
    </html>
  );
}
