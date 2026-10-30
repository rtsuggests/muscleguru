"use client";
import { useState } from "react";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Keto Macro Calculator India — MuscleGuru.in",
  "description": "Calculate keto macros for 4 keto variants with Indian keto food guide.",
  "url": "https://muscleguru.in/calculators/keto-macro",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }
};

export default function KetoClient() {
  const [calories, setCalories] = useState("");
  const [variant, setVariant] = useState("standard");
  const [result, setResult] = useState<{ protein: number; carbs: number; fat: number } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const cal = parseFloat(calories);
    if (!cal || cal < 1000 || cal > 6000) { setError("Please enter valid daily calories."); return; }
    const ratios: Record<string, [number, number, number]> = {
      standard: [0.20, 0.05, 0.75],
      highProtein: [0.30, 0.05, 0.65],
      cyclical: [0.25, 0.10, 0.65],
      targeted: [0.20, 0.10, 0.70],
    };
    const [p, c, f] = ratios[variant];
    setResult({
      protein: Math.round((cal * p) / 4),
      carbs: Math.round((cal * c) / 4),
      fat: Math.round((cal * f) / 9),
    });
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Keto</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Keto Macro Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Calculate keto macros for 4 keto variants with Indian keto food guide.</p>

      <SavedResultBanner slug="keto-macro" />

      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Daily Calories</label><input className="calc-input" type="number" value={calories} onChange={e => setCalories(e.target.value)} placeholder="e.g. 2000" /></div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Keto Variant</label>
            <select className="calc-select" value={variant} onChange={e => setVariant(e.target.value)}>
              <option value="standard">Standard Keto</option>
              <option value="highProtein">High Protein Keto</option>
              <option value="cyclical">Cyclical Keto</option>
              <option value="targeted">Targeted Keto</option>
            </select>
          </div>
        </div>
        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My Keto Macros</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", marginBottom: "1.25rem" }}>
              <div className="result-card"><div className="result-number">{result.fat}g</div><div className="result-label">Fat</div></div>
              <div className="result-card"><div className="result-number">{result.protein}g</div><div className="result-label">Protein</div></div>
              <div className="result-card"><div className="result-number">{result.carbs}g</div><div className="result-label">Carbs</div></div>
            </div>
            <SaveResultButton calculator="Keto Macro" slug="keto-macro" icon="🥑" headline={`${result.fat}F / ${result.protein}P / ${result.carbs}C`} label="Daily keto macros" />
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>Indian Keto Foods</h2>
        <table>
          <thead><tr><th>Food</th><th>Carbs per 100g</th></tr></thead>
          <tbody>
            <tr><td>Paneer</td><td>1.2g</td></tr>
            <tr><td>Spinach (palak)</td><td>3.6g</td></tr>
            <tr><td>Cauliflower</td><td>5g</td></tr>
            <tr><td>Eggs</td><td>1.1g</td></tr>
            <tr><td>Coconut oil</td><td>0g</td></tr>
          </tbody>
        </table>

        <h2>How a Ketogenic Diet Works</h2>
        <p>Keto limits carbohydrates so strictly that the body shifts from using glucose as its main fuel to producing ketones from fat. This state, called nutritional ketosis, usually requires keeping carbohydrates to roughly 20 to 50 grams per day, depending on the person and the keto variant.</p>
        <table>
          <thead><tr><th>Variant</th><th>Approximate split (fat / protein / carbs)</th></tr></thead>
          <tbody>
            <tr><td>Standard keto</td><td>70 to 75% / 20 to 25% / 5 to 10%</td></tr>
            <tr><td>High-protein keto</td><td>60% / 30-35% / 5 to 10%</td></tr>
            <tr><td>Targeted keto</td><td>Standard, with small carb intake around workouts</td></tr>
            <tr><td>Cyclical keto</td><td>Keto days with scheduled higher-carb refeed days</td></tr>
          </tbody>
        </table>
        <h2>What the Research Says</h2>
        <p>Studies comparing keto with other diets at matched calories generally find similar fat loss over the medium term. Keto can reduce appetite for some people, which makes eating less easier, but it is hard to sustain on a traditional Indian diet built around roti, rice and dal. The best diet is the one you can follow consistently.</p>
        <h2>Side Effects and Who Should Avoid It</h2>
        <ul>
          <li>The first week often brings the so-called keto flu: headache, fatigue and irritability while the body adapts. Adequate fluids, salt and electrolytes help.</li>
          <li>Constipation is common if fibre from vegetables, seeds and nuts is too low.</li>
          <li>Avoid keto, or only follow it under medical supervision, if you have type 1 diabetes, take diabetes medication (including SGLT2 inhibitors), have liver, pancreatic or kidney disease, are pregnant or breastfeeding, or have a history of disordered eating.</li>
        </ul>
        <p>Always speak to a doctor before starting keto if you have any medical condition or take regular medication.</p>

        <RelatedCalculators items={[
          { name: "Macro Calculator", href: "/calculators/macro", icon: "🥗" },
          { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
          { name: "Calorie Deficit Calc", href: "/calculators/calorie-deficit", icon: "📉" },
        ]} />
      </div>
    </div>
    </>
  );
}
