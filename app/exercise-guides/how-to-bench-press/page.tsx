import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Bench Press — Form Guide India",
  description: "Complete bench press technique guide with form cues and common mistakes for Indian gym-goers.",
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Exercise Guide</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>How to Bench Press: Complete Form Guide</h1>
      <div className="seo-content">
        <h2>Perfect Bench Press Form</h2>
        <ul>
          <li><strong>Setup:</strong> Retract shoulder blades, arch upper back slightly, feet flat on floor</li>
          <li><strong>Grip:</strong> Slightly wider than shoulder width</li>
          <li><strong>Descent:</strong> Lower bar to mid-chest with control</li>
          <li><strong>Drive:</strong> Push bar up and slightly back toward your face</li>
        </ul>
        <h2>Common Mistakes</h2>
        <ul>
          <li>Flaring elbows to 90 degrees — increases shoulder injury risk. Keep elbows at 45-75 degrees.</li>
          <li>Bouncing bar off chest — reduces muscle tension and increases injury risk</li>
        </ul>
        <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "0.75rem" }}>
          <Link href="/exercise-guides/how-to-squat" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>How to Squat</Link>
          <Link href="/calculators/one-rep-max" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>One Rep Max Calc</Link>
        </div>
      </div>
    </div>
  );
}
