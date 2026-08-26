import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sleep and Muscle Growth — Science-Backed Guide",
  description: "How sleep affects muscle growth and recovery.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Guide</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Sleep and Muscle Growth</h1>
      <div className="seo-content">
        <h2>The Science</h2>
        <p>Growth hormone release peaks during deep sleep. Chronic sleep deprivation (under 7 hours) impairs muscle protein synthesis and recovery. Prioritise consistent sleep timing for best results.</p>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/calculators/sleep" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Sleep Calculator</Link>
        </div>
      </div>
    </div>
  );
}
