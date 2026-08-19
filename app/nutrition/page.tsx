import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Supplement Guides India — Evidence-Based Reviews",
  description: "Honest, science-backed supplement guides for the Indian fitness community. What works, what doesn't, and what the research actually shows.",
};

const articles = [
  { title: "Creatine Guide for Indian Beginners: Everything You Need to Know", desc: "The most researched supplement in sports science. We cover what creatine is, how it works, dosing, safety, and which Indian brands are worth considering.", href: "/supplements/creatine-guide", time: "10 min" },
  { title: "Whey Protein Explained: Types, Benefits & How to Choose", desc: "Whey concentrate vs isolate vs hydrolysate — what the research says, Indian price points, and whether you actually need it.", href: "/supplements/whey-protein-guide", time: "9 min" },
  { title: "Supplement Tier List: What Actually Works (Evidence-Based)", desc: "A research-backed ranking of the most popular fitness supplements from 'Strong evidence' to 'No evidence' — no marketing bias.", href: "/supplements/supplement-tier-list", time: "12 min" },
];

export default function SupplementsPage() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> › Supplements
      </div>
      <div style={{ background: "#fffbeb", border: "1.5px solid #fcd34d", borderRadius: "0.875rem", padding: "1rem 1.25rem", marginBottom: "2rem", fontSize: "0.875rem", color: "#92400e" }}>
        <strong>📋 Our Approach:</strong> We only discuss supplements with peer-reviewed research. We do not promote banned substances, steroids, or products with no scientific evidence. All supplement information is for educational purposes only.
      </div>
      <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.75rem" }}>Supplement Guides</h1>
      <p style={{ color: "var(--color-muted)", fontSize: "1.05rem", marginBottom: "2.5rem", maxWidth: 580 }}>
        No hype. No affiliate bias. Just what the research actually says about popular fitness supplements.
      </p>
      <div style={{ display: "grid", gap: "1rem" }}>
        {articles.map(a => (
          <Link key={a.href} href={a.href} style={{ textDecoration: "none", background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.875rem", padding: "1.5rem", display: "block" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <span className="tag">Supplements</span>
              <span style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>{a.time} read</span>
            </div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "0.5rem" }}>{a.title}</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-muted)", margin: 0, lineHeight: 1.6 }}>{a.desc}</p>
            <div style={{ marginTop: "0.875rem", fontSize: "0.85rem", color: "var(--color-brand)", fontWeight: 600 }}>Read guide →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
