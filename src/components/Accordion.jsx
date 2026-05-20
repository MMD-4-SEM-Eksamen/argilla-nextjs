"use client";

/* Use case: 
// (hasCheckboxes) - Used to determine whether or not to show the checkboxes at the end of the accordion.
*/

import { useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";
import Pagination from "./ui/pagination/Pagination";

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
    <div className="bg-light px-6 pt-7 pb-5">
      <p className="text-dark mb-5 font-sans text-base leading-relaxed">
        {slides[page].content}
      </p>

      {hasPagination && (
        <Pagination page={page} total={total} setPage={setPage} />
      )}
    </div>
  );
}

// ─── Row ──────────────────────────────────────────────────────────────────────

function AccordionRow({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-light border-t last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={[
          "text-secondary flex w-full items-center justify-between gap-3 px-5 py-4.5 text-left transition-colors duration-200",
          open
            ? "border-secondary bg-dark text-light border-l-8"
            : "hover:bg-black/10",
        ].join(" ")}
      >
        <span className="font-sans text-base leading-snug font-bold tracking-[0.01em]">
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
          className="border-light accent-dark size-5 cursor-pointer"
        />
        <label htmlFor="checkbox" className="text-secondary font-sans">
          - Jeg har gennemgået de relevante vilkår og politikker.
        </label>
      </div>
      <div className="mt-6 flex items-center gap-3 px-5">
        <input
          type="checkbox"
          id="checkbox"
          className="border-light accent-dark size-5 cursor-pointer"
        />
        <label htmlFor="checkbox" className="text-secondary font-sans">
          - Jeg forstår, hvordan mine data behandles og beskyttes.
        </label>
      </div>
      <div className="mt-6 flex items-center gap-3 px-5">
        <input
          type="checkbox"
          id="checkbox"
          className="border-light accent-dark size-5 cursor-pointer"
        />
        <label htmlFor="checkbox" className="text-secondary font-sans">
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
    <div className="bg-primary mx-auto w-full max-w-4xl overflow-hidden px-8 py-6">
      {items.map((item) => (
        <AccordionRow key={item.id} item={item} />
      ))}
      {hasCheckboxes && <AccordionCheckbox />}
    </div>
  );
}
