import type { FocusEvent, FormEvent } from "react";

// Shared input rules for every lead form.
export const onlyLetters = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s]/g, "");
};

export const onlyDigits = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.value = e.currentTarget.value.replace(/\D/g, "").slice(0, 10);
};

export const namePattern = { pattern: "[A-Za-z\\s]+", title: "Letters only", onInput: onlyLetters };

// Validate on blur (flag the field, never wipe the form) so errors show before submit.
export const flagInvalid = (e: FocusEvent<HTMLInputElement>) => {
  const el = e.currentTarget;
  if (el.value === "" || el.checkValidity()) el.removeAttribute("aria-invalid");
  else el.setAttribute("aria-invalid", "true");
};

export const phonePattern = {
  pattern: "[6-9][0-9]{9}",
  maxLength: 10,
  inputMode: "numeric" as const,
  title: "Enter a 10-digit Indian mobile number starting with 6-9",
  onInput: onlyDigits,
  onBlur: flagInvalid,
};

const onlyLocationChars = (e: FormEvent<HTMLInputElement>) => {
  e.currentTarget.value = e.currentTarget.value.replace(/[^A-Za-z\s,.\-]/g, "");
};

export const locationPattern = {
  pattern: "[A-Za-z][A-Za-z\\s,.\\-]+",
  minLength: 2,
  title: "Enter a valid project location (letters only)",
  onInput: onlyLocationChars,
};

// type="email" accepts "a@b"; require a real domain with a TLD.
export const emailPattern = {
  pattern: "[A-Za-z0-9._%+\\-]+@[A-Za-z0-9\\-]+(\\.[A-Za-z0-9\\-]+)*\\.[A-Za-z]{2,}",
  title: "Enter a valid email address, e.g. name@example.com",
  onBlur: flagInvalid,
};
