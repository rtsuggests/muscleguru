"use client";
import { useState } from "react";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Muscle Gain Rate Calculator India — MuscleGuru.in",
  "description": "Calculate your realistic maximum natural muscle gain rate per month based on training age.",
  "url": "https://muscleguru.in/calculators/muscle-gain-rate",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }
};

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
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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

        <h2>Realistic Muscle Gain Rates</h2>
        <p>There is no exact universal rate, but two widely used rules of thumb give a sensible picture for natural lifters. One expresses gain as a share of body weight per month: roughly 1 to 1.5% in the first year of proper training, 0.5 to 1% in the second, and 0.25 to 0.5% afterwards. Another estimates total lean mass gain by year, with a beginner man typically gaining around 9 to 11 kg in year one if everything is in place, falling sharply in later years. Women generally gain about half as much in absolute terms.</p>
        <p>These are estimates, not guarantees. Genetics, age, sleep, stress and training quality all shift the numbers.</p>
        <h2>What Speeds Up Progress</h2>
        <ul>
          <li><strong>Progressive overload:</strong> add reps or weight over time on compound lifts.</li>
          <li><strong>Protein:</strong> about 1.6 to 2.2 g per kg of body weight daily.</li>
          <li><strong>A small surplus:</strong> 200 to 300 kcal above maintenance is enough; larger surpluses mostly add fat.</li>
          <li><strong>Sleep:</strong> 7 to 9 hours supports recovery and hormone balance.</li>
          <li><strong>Consistency:</strong> training each muscle group roughly twice a week for months, not weeks.</li>
        </ul>
        <h2>Reading the Scale Correctly</h2>
        <p>Early weight gain includes water and glycogen, and any surplus brings some fat alongside muscle. Judge progress using several measures: weekly average body weight, strength in key lifts, tape measurements and photos taken under similar conditions.</p>

        <RelatedCalculators items={[
          { name: "FFMI Calculator", href: "/calculators/ffmi", icon: "🏆" },
          { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
          { name: "One Rep Max Calc", href: "/calculators/one-rep-max", icon: "🏋️" },
          { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        ]} />
      </div>
    </div>
    </>
  );
}
