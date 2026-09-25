"use client";
import { useState } from "react";
import Link from "next/link";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Macro Calculator India — Protein, Carbs & Fat — MuscleGuru.in",
  "description": "Calculate your daily protein, carbs and fat targets for any fitness goal.",
  "url": "https://muscleguru.in/calculators/macro",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }
};

export default function MacroClient() {
  const [calories, setCalories] = useState("");
  const [goal, setGoal] = useState<"muscle" | "loss" | "maintain">("maintain");
  const [result, setResult] = useState<{ protein: number; carbs: number; fat: number } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const cal = parseFloat(calories);
    if (!cal || cal < 1000 || cal > 6000) { setError("Please enter valid daily calories (1000-6000)."); return; }
    let proteinPct = 0.30, fatPct = 0.25, carbPct = 0.45;
    if (goal === "muscle") { proteinPct = 0.30; fatPct = 0.25; carbPct = 0.45; }
    if (goal === "loss") { proteinPct = 0.35; fatPct = 0.30; carbPct = 0.35; }
    if (goal === "maintain") { proteinPct = 0.25; fatPct = 0.30; carbPct = 0.45; }
    const protein = Math.round((cal * proteinPct) / 4);
    const fat = Math.round((cal * fatPct) / 9);
    const carbs = Math.round((cal * carbPct) / 4);
    setResult({ protein, carbs, fat });
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Nutrition</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Macro Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Calculate your daily protein, carbs and fat targets for any fitness goal.</p>

      <SavedResultBanner slug="macro" />

      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Daily Calories</label>
            <input className="calc-input" type="number" value={calories} onChange={e => setCalories(e.target.value)} placeholder="e.g. 2200" />
            <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.3rem" }}>Use our <Link href="/calculators/tdee" style={{ color: "var(--color-brand-darker)" }}>TDEE Calculator</Link> first</p>
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Goal</label>
            <select className="calc-select" value={goal} onChange={e => setGoal(e.target.value as "muscle" | "loss" | "maintain")}>
              <option value="muscle">Build Muscle</option>
              <option value="loss">Fat Loss</option>
              <option value="maintain">Maintain</option>
            </select>
          </div>
        </div>
        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My Macros</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "1.25rem" }}>
              <div className="result-card"><div className="result-number">{result.protein}g</div><div className="result-label">Protein</div></div>
              <div className="result-card"><div className="result-number">{result.carbs}g</div><div className="result-label">Carbs</div></div>
              <div className="result-card"><div className="result-number">{result.fat}g</div><div className="result-label">Fat</div></div>
            </div>
            <SaveResultButton calculator="Macro" slug="macro" icon="🥗" headline={`${result.protein}P / ${result.carbs}C / ${result.fat}F`} label="Daily macro split" />
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>Understanding Macronutrients</h2>
        <p>Macros are the three nutrients that provide calories: protein (4 kcal/g), carbohydrates (4 kcal/g), and fat (9 kcal/g). Different goals require different macro ratios — higher protein for fat loss to preserve muscle, moderate protein and higher carbs for muscle building performance.</p>

        <RelatedCalculators items={[
          { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
          { name: "Keto Macro Calc", href: "/calculators/keto-macro", icon: "🥑" },
          { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
          { name: "Calorie Deficit Calc", href: "/calculators/calorie-deficit", icon: "📉" },
          { name: "Vegetarian Protein", href: "/calculators/vegetarian-protein", icon: "🌱" },
          { name: "Body Type Quiz", href: "/calculators/body-type", icon: "🧬" },
        ]} />
      </div>
    </div>
    </>
  );
}
