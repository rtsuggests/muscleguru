import Link from "next/link";

interface RelatedCalc { name: string; href: string; icon: string; }

export default function RelatedCalculators({ items, title = "What to Check Next" }: { items: RelatedCalc[]; title?: string }) {
  return (
    <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
      <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>{title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
        {items.map(r => (
          <Link key={r.href} href={r.href} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.75rem", padding: "0.875rem 1rem", textDecoration: "none", color: "var(--color-dark)", fontWeight: 600, fontSize: "0.875rem" }}>
            <span style={{ fontSize: "1.4rem" }}>{r.icon}</span>{r.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
