"use client";

import { useState, type FormEvent } from "react";
import { BASE_PATH } from "../basePath";

const FORM_ENDPOINT = `${BASE_PATH}/api/enquiry-form`;
const THANK_YOU_PATH = `${BASE_PATH}/thank-you`;
const SOURCE_NAME = "Turnkey PEB";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const ENQUIRY_SUBMITTED_KEY = "turnkey-peb:enquiry-submitted";

// Posts a lead form to /api/enquiry-form (proxied to the Mekark enquiry API) and
// redirects to the thank-you page on success. Works for every form on the page.
export function useEnquirySubmit() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    const values = {
      name: get("name"),
      email: get("email"),
      phone: get("phone"),
      location: get("location"),
      industry: get("industry"),
      sqf: get("sqft"),
      message: get("details"),
    };

    // Accept "+91 98765 43210" style input: compare the last 10 digits.
    const digits = values.phone.replace(/\D/g, "");

    if (!values.name || !values.email || !values.phone || !values.location || !values.industry || !values.sqf) {
      setError("Please fill in all the required fields.");
      return;
    }
    if (digits.length < 10 || digits.length > 12 || (digits.length > 10 && !digits.startsWith("91"))) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }
    if (!EMAIL_RE.test(values.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          sourceName: SOURCE_NAME,
          sourceDomain: window.location.hostname,
          sourceUrl: window.location.href,
          pageUrl: window.location.href,
        }),
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        setError(payload?.message || "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }

      form.reset();
      try {
        sessionStorage.setItem(ENQUIRY_SUBMITTED_KEY, "1");
      } catch {}
      window.location.href = THANK_YOU_PATH;
    } catch (err) {
      console.error(err);
      setError(
        err instanceof TypeError
          ? "Network error. Please check your internet connection and try again."
          : "Something went wrong. Please try again.",
      );
      setSubmitting(false);
    }
  };

  return { onSubmit, submitting, error };
}
