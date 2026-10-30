interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  items: FAQItem[];
}

// Deliberately a plain server component using native <details>/<summary>.
// This keeps every question AND answer present in the server-rendered HTML
// at all times (collapsed or not) so search engines index the full text —
// a client-side-only accordion (open state in useState) would omit every
// answer from the initial HTML until a user clicks it.
export default function FAQ({ items }: FAQProps) {
  return (
    <div style={{ marginTop: "1.5rem" }}>
      {items.map((item, i) => (
        <details key={i} className="faq-item">
          <summary className="faq-question">
            <span>{item.q}</span>
            <span className="faq-icon" aria-hidden="true">+</span>
          </summary>
          <div className="faq-answer">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
