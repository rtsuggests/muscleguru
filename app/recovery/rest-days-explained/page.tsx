import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rest Days Explained — Why They Matter",
  description: "Why rest days are essential for muscle growth and how many you need per week.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Recovery</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Rest Days Explained: Why They Matter for Muscle Growth</h1>
      <div className="seo-content">
        <h2>Why Muscle Grows on Rest Days</h2>
        <p>Training creates the stimulus for muscle growth, but actual growth happens during recovery. Muscle protein synthesis remains elevated for 24-48 hours after resistance training. Without adequate rest, this repair process is interrupted.</p>
        <h2>How Many Rest Days Do You Need</h2>
        <p>Most lifters need 1-2 full rest days per week, plus at least 48 hours between training the same muscle group. Beginners recover faster from lower training stress but still need consistent sleep and nutrition to support recovery.</p>
        <div style={{ marginTop: "2rem" }}>
          <Link href="/recovery/overtraining-signs" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Overtraining Signs</Link>
        </div>
      </div>
    </div>
  );
}
