"use client";

import { useState } from "react";
import { CaretRightIcon } from "@phosphor-icons/react";
import { CaretDownIcon } from "@phosphor-icons/react";
import { CaretLeftIcon } from "@phosphor-icons/react";

// ─── Placeholder data (swap with API) ──────────────────────────

const PLACEHOLDER_DATA = [
  {
    id: "1",
    title: "Lorem ipsum",
    slides: [
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    id: "2",
    title: "Lorem ipsum",
    slides: [
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    id: "3",
    title: "Lorem ipsum",
    slides: [
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    id: "4",
    title: "Lorem ipsum",
    slides: [
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
  {
    id: "5",
    title: "Lorem ipsum",
    slides: [
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
      {
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
  },
];

// ─── Slider ───────────────────────────────────────────────────────────────────

function AccordionSlider({ slides }) {
  const [page, setPage] = useState(0);
  const total = slides.length;
  const hasPagination = total > 1;

  return (
    <div className="bg-[#FAF8F5] px-6 pt-7 pb-5">
      <p className="mb-5 text-base leading-relaxed text-[#240700]">
        {slides[page].content}
      </p>

      {hasPagination && (
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="Forrige"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#803125] transition-colors duration-150 hover:bg-[#803125]/10 disabled:cursor-default disabled:opacity-30"
          >
            <CaretLeftIcon />
          </button>

          <span className="min-w-10 text-center text-sm font-semibold tracking-wide text-[#240700]">
            {page + 1} / {total}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(total - 1, p + 1))}
            disabled={page === total - 1}
            aria-label="Næste"
            className="flex h-8 w-8 items-center justify-center rounded-full text-[#803125] transition-colors duration-150 hover:bg-[#803125]/10 disabled:cursor-default disabled:opacity-30"
          >
            <CaretRightIcon />
          </button>
        </div>
      )}
    </div>
  );
}

// ─── Row ──────────────────────────────────────────────────────────────────────

function AccordionRow({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-t border-[#f2f2f2] last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={[
          "flex w-full items-center justify-between gap-3 px-5 py-4.5 text-left text-[#FFE5Cf] transition-colors duration-200",
          open
            ? "border-l-8 border-[#FFE5Cf] bg-[#240700] text-[#f2f2f2]"
            : "hover:bg-black/10",
        ].join(" ")}
      >
        <span className="text-base leading-snug font-bold tracking-[0.01em]">
          {item.title}
        </span>
        <span className="shrink-0 opacity-85">
          {open ? (
            <CaretDownIcon className="transition-all" />
          ) : (
            <CaretDownIcon className="-rotate-90 transition-all" />
          )}
        </span>
      </button>

      {open && <AccordionSlider slides={item.slides} />}
    </div>
  );
}

// ─── Checkboxes ─────────────────────────────────────────────────────────────────────

function AccordionCheckbox() {
  return (
    <div>
      <div className="mt-6 flex items-center gap-3 px-5">
        <input
          type="checkbox"
          id="checkbox"
          className="size-5 cursor-pointer border-[#f2f2f2] accent-[#803125]"
        />
        <label htmlFor="checkbox" className="text-[#FFE5Cf]">
          - Jeg har gennemgået de relevante vilkår og politikker.
        </label>
      </div>
      <div className="mt-6 flex items-center gap-3 px-5">
        <input
          type="checkbox"
          id="checkbox"
          className="size-5 cursor-pointer border-[#f2f2f2] accent-[#803125]"
        />
        <label htmlFor="checkbox" className="text-[#FFE5Cf]">
          - Jeg forstår, hvordan mine data behandles og beskyttes.
        </label>
      </div>
      <div className="mt-6 flex items-center gap-3 px-5">
        <input
          type="checkbox"
          id="checkbox"
          className="size-5 cursor-pointer border-[#f2f2f2] accent-[#803125]"
        />
        <label htmlFor="checkbox" className="text-[#FFE5Cf]">
          - Jeg accepterer de rammer og retningslinjer, der gælder for brugen af
          platformen.
        </label>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function Accordion({
  items = PLACEHOLDER_DATA,
  hasCheckboxes = false,
}) {
  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden bg-[#803125] px-8 py-6">
      {items.map((item) => (
        <AccordionRow key={item.id} item={item} />
      ))}
      {hasCheckboxes && <AccordionCheckbox />}
    </div>
  );
}
