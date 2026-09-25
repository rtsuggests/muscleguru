"use client";
import { useState } from "react";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

const foods = [
  ["Soya chunks (dry)", "52g", "100g"],
  ["Paneer", "18g", "100g"],
  ["Hung curd", "10g", "100g"],
  ["Whole milk", "8g", "250ml"],
  ["Chana dal (cooked)", "9g", "100g"],
  ["Rajma (cooked)", "9g", "100g"],
  ["Peanuts", "26g", "100g"],
  ["Almonds", "21g", "100g"],
];

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Vegetarian Protein Calculator India — MuscleGuru.in",
  "description": "Calculate your daily protein target and see how to meet it with vegetarian Indian foods.",
  "url": "https://muscleguru.in/calculators/vegetarian-protein",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }
};

export default function VegProteinClient() {
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState("muscle");
  const [result, setResult] = useState<number | null>(null);

  function calculate() {
    const w = parseFloat(weight);
    if (!w) return;
    const perKg = goal === "muscle" ? 2.0 : goal === "loss" ? 1.8 : 1.6;
    setResult(Math.round(w * perKg));
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Vegetarian</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Vegetarian Protein Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Calculate your protein target and see how to meet it with vegetarian Indian foods.</p>

      <SavedResultBanner slug="vegetarian-protein" />

      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Body Weight (kg)</label><input className="calc-input" type="number" value={weight} onChange={e => setWeight(e.target.value)} /></div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Goal</label>
            <select className="calc-select" value={goal} onChange={e => setGoal(e.target.value)}>
              <option value="muscle">Build Muscle</option>
              <option value="loss">Fat Loss</option>
              <option value="maintain">Maintain</option>
            </select>
          </div>
        </div>
        <button className="btn-primary" onClick={calculate}>Calculate My Target</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }}>
            <div className="result-card" style={{ marginBottom: "1.25rem" }}>
              <div className="result-number">{result}g</div>
              <div className="result-label">Daily Protein Target</div>
            </div>
            <SaveResultButton calculator="Vegetarian Protein" slug="vegetarian-protein" icon="🌱" headline={`${result}g`} label="Daily target" />
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>Indian Vegetarian Protein Food Table</h2>
        <table>
          <thead><tr><th>Food</th><th>Protein</th><th>Per</th></tr></thead>
          <tbody>
            {foods.map(([f, p, per]) => (
              <tr key={f}><td>{f}</td><td style={{ color: "var(--color-brand-dark)", fontWeight: 700 }}>{p}</td><td>{per}</td></tr>
            ))}
          </tbody>
        </table>

        <RelatedCalculators items={[
          { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
          { name: "Macro Calculator", href: "/calculators/macro", icon: "🥗" },
          { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
          { name: "Muscle Gain Rate", href: "/calculators/muscle-gain-rate", icon: "📈" },
        ]} />
      </div>
    </div>
    </>
  );
}
