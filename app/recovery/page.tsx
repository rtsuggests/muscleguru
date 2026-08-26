import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recovery Guides India — Sleep, Rest & Foam Rolling",
  description: "Evidence-based recovery guides for Indian gym-goers.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Guide</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Recovery Guides India</h1>
      <div className="seo-content">
        <h2>Why Recovery Matters</h2>
        <p>Muscle grows during rest, not during training. Adequate sleep (7-9 hours), rest days, and stress management are as important as your training programme itself.</p>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/recovery/rest-days-explained" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Rest Days Explained</Link>
          <Link href="/recovery/overtraining-signs" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Overtraining Signs</Link>
        </div>
      </div>
    </div>
  );
}
