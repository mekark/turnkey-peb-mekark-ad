"use client";

import { useState, type FormEvent } from "react";
import { BASE_PATH } from "../basePath";

const FORM_ENDPOINT = `${BASE_PATH}/api/enquiry-form`;
const THANK_YOU_PATH = `${BASE_PATH}/thank-you`;

// Posts a lead form to /api/enquiry-form (proxied to the Mekark mail service) and
// redirects to the thank-you page on success. Works for every form on the page.
export function useEnquirySubmit() {
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const data = new FormData(e.currentTarget);
    const get = (key: string) => String(data.get(key) ?? "").trim();

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: get("name"),
          email: get("email"),
          phone: get("phone"),
          company: "",
          location: get("location"),
          industry: get("industry"),
          sqf: get("sqft"),
          startTimeline: "",
          budget: "",
          message: get("details"),
          sourceUrl: window.location.href,
          pageUrl: window.location.href,
        }),
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok) throw new Error(payload?.message || "Unable to submit form.");

      window.location.href = THANK_YOU_PATH;
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again or call us.");
      setSubmitting(false);
    }
  };

  return { onSubmit, submitting, error };
}
