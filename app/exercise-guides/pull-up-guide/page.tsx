import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Pull-Up Guide — From Zero to 10 Reps",
};

"use client";
import { useState } from "react";

interface FAQItem { q: string; a: string; }

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.q}</span>
            <span style={{ fontSize: "1.2rem", color: "var(--color-brand)", flexShrink: 0, marginLeft: "0.75rem" }}>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <div className="faq-answer">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}
