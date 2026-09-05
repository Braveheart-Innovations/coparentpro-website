"use client";

import { useId, useState } from "react";

export type FAQItem = { q: string; a: string };

type Props = {
  items: readonly FAQItem[];
  /** Index of the item open on load; -1 for none. */
  defaultOpen?: number;
};

export default function FAQAccordion({ items, defaultOpen = 0 }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const baseId = useId();

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <div key={item.q} className="overflow-hidden rounded-[14px] border border-line bg-white">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left sm:px-[26px]"
              >
                <span className="text-base font-bold text-neutral-900">{item.q}</span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-xl leading-none text-primary transition-transform duration-200 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!isOpen}>
              <p className="px-5 pb-[22px] text-[14.5px] leading-[1.7] text-neutral-700 sm:px-[26px]">
                {item.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
