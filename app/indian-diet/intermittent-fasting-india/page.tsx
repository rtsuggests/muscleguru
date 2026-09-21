import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/indian-diet/intermittent-fasting-india" },
  title: "Intermittent Fasting India — Complete Guide",
  description: "How intermittent fasting works in the Indian context, cultural challenges, and meal timing.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Nutrition</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Intermittent Fasting India: The Complete Guide</h1>
      <div className="seo-content">
        <h2>Fasting in the Indian Context</h2>
        <p>The biggest challenge for Indian IF practitioners is morning chai culture. Replace milk-and-sugar chai with black coffee or plain green tea during the fasting window. A 16:8 window from 12 PM to 8 PM works well for most Indian family meal patterns — you simply skip breakfast.</p>
        <h2>What Breaks a Fast</h2>
        <ul>
          <li><strong>Breaks the fast:</strong> Milk, sugar, fruit juice, any calorie-containing drink</li>
          <li><strong>Does not break the fast:</strong> Water, black coffee, plain tea</li>
        </ul>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/calculators/intermittent-fasting" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>IF Calculator</Link>
        </div>
      </div>
    </div>
  );
}
