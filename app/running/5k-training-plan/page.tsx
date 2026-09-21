import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "/running/5k-training-plan" },
  title: "5K Training Plan India — 8-Week Beginner Programme",
  description: "Free 8-week 5K training plan for complete beginners with run-walk intervals.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Running</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>5K Training Plan India: 8-Week Beginner Programme</h1>
      <div className="seo-content">
        <h2>Run-Walk Progression</h2>
        <table>
          <thead><tr><th>Week</th><th>Pattern</th></tr></thead>
          <tbody>
            <tr><td>1-2</td><td>1 min run, 2 min walk × 8</td></tr>
            <tr><td>3-4</td><td>2 min run, 1 min walk × 8</td></tr>
            <tr><td>5-6</td><td>5 min run, 1 min walk × 4</td></tr>
            <tr><td>7</td><td>10 min run, 2 min walk × 2</td></tr>
            <tr><td>8</td><td>Run full 5K continuously</td></tr>
          </tbody>
        </table>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/running/10k-training-plan" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>10K Training Plan</Link>
          <Link href="/calculators/running-pace" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Running Pace Calc</Link>
        </div>
      </div>
    </div>
  );
}
