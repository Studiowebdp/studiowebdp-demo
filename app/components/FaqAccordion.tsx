"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export type FAQItem = {
  question: string;
  answer: React.ReactNode;
};

type Props = {
  items: FAQItem[];
  /** Indice della FAQ aperta di default (null = tutte chiuse) */
  defaultOpen?: number | null;
};

/* -------------------------------------------------------------------------- */
/*                                COMPONENT                                   */
/* -------------------------------------------------------------------------- */

export default function FaqAccordion({ items, defaultOpen = 0 }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div className="space-y-4">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`bg-white rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-blue-500 shadow-lg shadow-blue-100"
                : "border-slate-100 hover:border-blue-200"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-slate-800 text-base md:text-lg">
                {item.question}
              </span>
              <ChevronDown
                className={`w-6 h-6 text-blue-600 shrink-0 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm md:text-base">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}