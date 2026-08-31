"use client";
import { useState } from "react";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

export default function MuscleGainClient() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [phase, setPhase] = useState("beginner");
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);

  const rates: Record<string, [number, number]> = {
    beginner: sex === "male" ? [0.9, 1.1] : [0.45, 0.55],
    early: sex === "male" ? [0.45, 0.68] : [0.23, 0.34],
    intermediate: sex === "male" ? [0.23, 0.45] : [0.11, 0.23],
    advanced: sex === "male" ? [0.1, 0.23] : [0.05, 0.11],
  };

  function calculate() {
    const [min, max] = rates[phase];
    setResult({ min, max });
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Muscle Building</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Muscle Gain Rate Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Find your realistic maximum natural muscle gain rate per month.</p>

      <SavedResultBanner slug="muscle-gain-rate" />

      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", background: "var(--color-bg)", padding: "0.35rem", borderRadius: "0.625rem", width: "fit-content" }}>
          {(["male", "female"] as const).map(s => (
            <button key={s} onClick={() => setSex(s)} style={{ padding: "0.45rem 1.25rem", borderRadius: "0.4rem", border: "none", cursor: "pointer", fontWeight: 600, background: sex === s ? "var(--color-brand-dark)" : "transparent", color: sex === s ? "#fff" : "var(--color-muted)" }}>{s === "male" ? "Male" : "Female"}</button>
          ))}
        </div>
        <div style={{ marginBottom: "1.25rem" }}>
          <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Training Experience</label>
          <select className="calc-select" value={phase} onChange={e => setPhase(e.target.value)}>
            <option value="beginner">Beginner (0-1 year)</option>
            <option value="early">Early Intermediate (1-2 years)</option>
            <option value="intermediate">Intermediate (2-4 years)</option>
            <option value="advanced">Advanced (4+ years)</option>
          </select>
        </div>
        <button className="btn-primary" onClick={calculate}>Calculate My Potential</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }}>
            <div className="result-card" style={{ marginBottom: "1.25rem" }}>
              <div className="result-number">{result.min}–{result.max} kg</div>
              <div className="result-label">Max Muscle Gain per Month</div>
            </div>
            <SaveResultButton calculator="Muscle Gain Rate" slug="muscle-gain-rate" icon="📈" headline={`${result.min}–${result.max} kg/mo`} label="Max realistic rate" />
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>Why Rates Slow Over Time</h2>
        <p>Beginners experience the fastest muscle gain due to neurological adaptations and distance from their genetic ceiling. These are maximum rates under optimal conditions — most people achieve 50-70% of these values.</p>

        <RelatedCalculators items={[
          { name: "FFMI Calculator", href: "/calculators/ffmi", icon: "🏆" },
          { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
          { name: "One Rep Max Calc", href: "/calculators/one-rep-max", icon: "🏋️" },
          { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        ]} />
      </div>
    </div>
  );
}
