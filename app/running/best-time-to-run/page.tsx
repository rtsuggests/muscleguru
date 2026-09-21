import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/running/best-time-to-run" },
  title: "Best Time to Run in India — Morning vs Evening",
  description: "Morning vs evening running guidance for Indian cities considering AQI, heat, and safety.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Running</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Best Time to Run in India: Morning vs Evening</h1>
      <div className="seo-content">
        <h2>Morning Running (5:30-7 AM)</h2>
        <p>Best air quality of the day in most cities, cooler temperatures, quieter roads. Ideal for most of the year except peak winter pollution season in North India.</p>
        <h2>Evening Running (6-8 PM)</h2>
        <p>More social, easier to fit around work schedules, but higher traffic and pollution in most cities during rush hour transition.</p>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/running/treadmill-vs-outdoor" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Treadmill vs Outdoor</Link>
        </div>
      </div>
    </div>
  );
}
