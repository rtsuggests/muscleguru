"use client";
import { useState } from "react";
import Link from "next/link";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

export default function ProteinClient() {
  const [weight, setWeight] = useState("");
  const [goal, setGoal] = useState<"maintain" | "muscle" | "loss">("muscle");
  const [result, setResult] = useState<{ target: number; perMeal: number } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const w = parseFloat(weight);
    if (!w || w < 30 || w > 200) { setError("Please enter a valid body weight (30-200 kg)."); return; }
    const perKg = goal === "muscle" ? 2.0 : goal === "loss" ? 1.8 : 1.4;
    const target = Math.round(w * perKg);
    setResult({ target, perMeal: Math.round(target / 4) });
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Calculator</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Protein Calculator India — Find Your Daily Target</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Calculate exactly how much protein you need daily based on your body weight and goal.</p>

      <SavedResultBanner slug="protein" />

      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Body Weight (kg)</label>
            <input className="calc-input" type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="e.g. 70" />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Goal</label>
            <select className="calc-select" value={goal} onChange={e => setGoal(e.target.value as "maintain" | "muscle" | "loss")}>
              <option value="muscle">Build Muscle (2.0g/kg)</option>
              <option value="loss">Fat Loss (1.8g/kg)</option>
              <option value="maintain">Maintain (1.4g/kg)</option>
            </select>
          </div>
        </div>
        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My Protein Target</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
              <div className="result-card"><div className="result-number">{result.target}g</div><div className="result-label">Daily Protein Target</div></div>
              <div className="result-card"><div className="result-number">{result.perMeal}g</div><div className="result-label">Per Meal (4 meals)</div></div>
            </div>
            <SaveResultButton calculator="Protein" slug="protein" icon="💪" headline={`${result.target}g`} label="Daily target" />
          </div>
        )}
      </div>

      <div className="seo-content">
        <h2>How Much Protein Do You Actually Need?</h2>
        <p>Protein needs vary significantly by goal, not just body weight. The commonly cited RDA of 0.8g/kg is a minimum to prevent deficiency in sedentary adults — it is not an optimal target for anyone training regularly. Research on resistance-trained individuals consistently shows benefits up to 1.6-2.2g/kg for muscle building, with higher intakes particularly valuable during a calorie deficit to preserve lean mass.</p>
        <table>
          <thead><tr><th>Goal</th><th>Protein Target</th><th>Why</th></tr></thead>
          <tbody>
            <tr><td>Muscle building</td><td>1.8-2.2g/kg</td><td>Maximises muscle protein synthesis response to training</td></tr>
            <tr><td>Fat loss (preserving muscle)</td><td>1.8-2.2g/kg</td><td>Higher protein prevents muscle loss during a calorie deficit</td></tr>
            <tr><td>General health / maintenance</td><td>1.2-1.6g/kg</td><td>Above RDA but below athletic targets</td></tr>
            <tr><td>Sedentary adults</td><td>0.8-1.0g/kg</td><td>RDA minimum, prevents deficiency only</td></tr>
          </tbody>
        </table>

        <h2>Best Indian Protein Sources</h2>
        <table>
          <thead><tr><th>Food</th><th>Protein per 100g</th><th>Type</th></tr></thead>
          <tbody>
            <tr><td>Soya chunks (dry)</td><td>52g</td><td>Vegetarian</td></tr>
            <tr><td>Chicken breast</td><td>31g</td><td>Non-vegetarian</td></tr>
            <tr><td>Paneer</td><td>18g</td><td>Vegetarian</td></tr>
            <tr><td>Whole eggs</td><td>13g</td><td>Lacto-ovo vegetarian</td></tr>
            <tr><td>Hung curd</td><td>10g</td><td>Vegetarian</td></tr>
            <tr><td>Chana dal (cooked)</td><td>9g</td><td>Vegetarian</td></tr>
          </tbody>
        </table>
        <p>Pure vegetarians relying heavily on dal and rice often fall short of optimal targets — see our <Link href="/calculators/vegetarian-protein" style={{ color: "var(--color-brand-darker)" }}>Vegetarian Protein Calculator</Link> for a detailed plant-based food breakdown.</p>

        <h2>Should You Eat Protein at Every Meal?</h2>
        <p>Research suggests spreading protein intake across 3-4 meals (roughly 25-40g per meal) is more effective for muscle protein synthesis than consuming most of your daily protein in one large meal. This calculator&apos;s per-meal figure assumes 4 meals — adjust proportionally if you eat more or fewer meals per day.</p>

        <RelatedCalculators items={[
          { name: "Vegetarian Protein Calc", href: "/calculators/vegetarian-protein", icon: "🌱" },
          { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
          { name: "Macro Calculator", href: "/calculators/macro", icon: "🥗" },
          { name: "Muscle Gain Rate", href: "/calculators/muscle-gain-rate", icon: "📈" },
          { name: "Calorie Deficit Calc", href: "/calculators/calorie-deficit", icon: "📉" },
          { name: "One Rep Max Calc", href: "/calculators/one-rep-max", icon: "🏋️" },
        ]} />
      </div>
    </div>
  );
}
