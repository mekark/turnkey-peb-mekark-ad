"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";

// Same list as the industry dropdown on peb-new-mekark.
export const industryOptions = [
  "Warehouse, Logistics",
  "Factories, Industries, Plants, Manufacturing Units",
  "Commercial - Malls, Theatres, IT Parks",
  "Schools, Colleges, Hospitals",
  "Auditoriums, Convention Halls",
  "Multistorey Steel Buildings",
  "Cold Storage, Data Centre",
  "Others",
];

export const sqftOptions = [
  { value: "10,000 - 20,000 Sq.ft", label: "10,000 – 20,000" },
  { value: "20,000 - 30,000 Sq.ft", label: "20,000 – 30,000" },
  { value: "30,000 - 50,000 Sq.ft", label: "30,000 – 50,000" },
  { value: "Above 50,000 Sq.ft", label: "Above 50,000 sq.ft" },
];

const MIN_LIST = 200;
const MAX_LIST = 300;

type Option = string | { value: string; label: string };

// Custom listbox so the open list can be styled (hover/selected) like peb-new-mekark.
// A visually hidden required input carries the value for FormData and native validation.
export default function FormSelect({
  id,
  name,
  options,
  placeholder,
  className,
}: {
  id: string;
  name: string;
  options: Option[];
  placeholder: string;
  className: string;
}) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  const [maxHeight, setMaxHeight] = useState<number>();
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const listId = useId();

  const items = options.map((o) => (typeof o === "string" ? { value: o, label: o } : o));
  const selected = items.find((o) => o.value === value);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Always open downward. The hero clips overflow, so cap the list to the room left above that clip edge
  // (scrolling inside, never under MIN_LIST), then scroll the page if the list ends below the screen.
  useLayoutEffect(() => {
    if (!open || !rootRef.current || !listRef.current) return;
    const rect = rootRef.current.getBoundingClientRect();
    let bottom = Infinity;
    for (let el = rootRef.current.parentElement; el; el = el.parentElement) {
      const { overflowX, overflowY } = getComputedStyle(el);
      if (overflowX === "visible" && overflowY === "visible") continue;
      bottom = Math.min(bottom, el.getBoundingClientRect().bottom);
    }
    const room = Math.max(bottom - rect.bottom - 14, MIN_LIST); // 6px offset + breathing room
    setMaxHeight(Math.min(room, MAX_LIST));
  }, [open]);

  useEffect(() => {
    if (open) listRef.current?.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [open, maxHeight]);

  return (
    <div ref={rootRef} className={`relative min-w-0 ${open ? "z-30" : ""}`}>
      <input
        name={name}
        value={value}
        required
        tabIndex={-1}
        aria-hidden="true"
        onChange={() => {}}
        onFocus={() => setOpen(true)}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-0"
      />
      <button
        id={id}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
        className={`${className} flex items-center justify-between gap-3 text-left ${selected ? "text-[#080808]" : "text-[#757575]"}`}
      >
        <span className="truncate">{selected ? selected.label : placeholder}</span>
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#757575"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          style={{ maxHeight }}
          className="absolute left-0 right-0 top-[calc(100%+6px)] z-50 w-full overflow-y-auto overscroll-contain rounded-[10px] border border-[#E5E5E5] bg-white py-1 shadow-[0_12px_40px_rgba(0,0,0,0.16)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((o) => {
            const isSelected = o.value === value;
            return (
              <li key={o.value} role="presentation">
                <button
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    setValue(o.value);
                    setOpen(false);
                  }}
                  className={`block w-full px-4 py-2.5 text-left text-sm font-medium transition-colors duration-150 ${
                    isSelected ? "bg-[#D90916] text-white" : "text-black hover:bg-[#D90916] hover:text-white"
                  }`}
                >
                  {o.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
