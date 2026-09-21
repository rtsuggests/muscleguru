import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/recovery/overtraining-signs" },
  title: "Overtraining Signs — What to Watch For",
  description: "Warning signs of overtraining and how to recover.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Recovery</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Overtraining Signs: What to Watch For</h1>
      <div className="seo-content">
        <h2>Key Warning Signs</h2>
        <ul>
          <li>Persistent fatigue that does not improve with a normal night&apos;s sleep</li>
          <li>Declining performance despite consistent training</li>
          <li>Elevated resting heart rate compared to your baseline</li>
          <li>Increased irritability or mood disturbance</li>
          <li>Frequent illness or slow recovery from minor injuries</li>
        </ul>
        <h2>What to Do</h2>
        <p>Take a full deload week — reduce training volume by 40-50% while maintaining light activity. Prioritise sleep and protein intake. Symptoms should improve within 1-2 weeks with proper rest.</p>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/recovery/rest-days-explained" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Rest Days Explained</Link>
        </div>
      </div>
    </div>
  );
}
