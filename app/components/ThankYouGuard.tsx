"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { ENQUIRY_SUBMITTED_KEY } from "./useEnquirySubmit";

// Only renders the thank-you page right after a successful enquiry submit.
// The flag is single-use: it is cleared on arrival, so a refresh or a typed URL
// goes back to the home page.
export default function ThankYouGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);
  // Strict Mode runs effects twice in dev; the ref keeps the second run from
  // seeing the already-cleared flag and redirecting.
  const checked = useRef(false);

  useEffect(() => {
    if (checked.current) return;
    checked.current = true;

    let submitted = false;
    try {
      submitted = sessionStorage.getItem(ENQUIRY_SUBMITTED_KEY) === "1";
      sessionStorage.removeItem(ENQUIRY_SUBMITTED_KEY);
    } catch {}

    if (submitted) setAllowed(true);
    else router.replace("/");
  }, [router]);

  return allowed ? <>{children}</> : null;
}
