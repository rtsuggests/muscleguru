"use client";
import { useState } from "react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ marginTop: "1.5rem" }}>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button
            className="faq-question"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span>{item.q}</span>
            <span
              style={{
                fontSize: "1.2rem",
                color: "var(--color-brand-darker)",
                flexShrink: 0,
                marginLeft: "0.75rem",
                fontWeight: 700,
              }}
            >
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div className="faq-answer">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
