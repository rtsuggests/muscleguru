"use client";
import { useState } from "react";
import Link from "next/link";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

const fastTypes = [
  { id: "navratri", label: "Navratri (falahar)", desc: "Fruits, dairy, singhara/kuttu flour, sabudana permitted" },
  { id: "ekadashi", label: "Ekadashi (grain-free)", desc: "No grains or lentils — fruits, dairy, nuts permitted" },
  { id: "karvachauth", label: "Karva Chauth (nirjala)", desc: "No food or water until moonrise — pre-dawn (sargi) meal planning" },
  { id: "general", label: "General Vrat (partial)", desc: "One meal a day, no grains, simple satvik food" },
];

const fastingFoods: Record<string, { name: string; protein: number; cal: number; per: string }[]> = {
  navratri: [
    { name: "Paneer", protein: 18, cal: 265, per: "100g" },
    { name: "Sabudana khichdi", protein: 3, cal: 180, per: "100g" },
    { name: "Kuttu ka atta roti", protein: 6, cal: 335, per: "100g dry" },
    { name: "Singhara atta", protein: 4, cal: 340, per: "100g dry" },
    { name: "Curd", protein: 3.5, cal: 60, per: "100g" },
    { name: "Makhana (roasted)", protein: 9.7, cal: 350, per: "100g" },
    { name: "Milk", protein: 3.2, cal: 61, per: "100ml" },
    { name: "Banana", protein: 1.1, cal: 89, per: "100g" },
  ],
  ekadashi: [
    { name: "Paneer", protein: 18, cal: 265, per: "100g" },
    { name: "Curd", protein: 3.5, cal: 60, per: "100g" },
    { name: "Almonds", protein: 21, cal: 579, per: "100g" },
    { name: "Milk", protein: 3.2, cal: 61, per: "100ml" },
    { name: "Sweet potato", protein: 1.6, cal: 86, per: "100g" },
    { name: "Banana", protein: 1.1, cal: 89, per: "100g" },
  ],
  karvachauth: [
    { name: "Paneer (sargi)", protein: 18, cal: 265, per: "100g" },
    { name: "Dry fruits (mixed)", protein: 15, cal: 570, per: "100g" },
    { name: "Milk (sargi)", protein: 3.2, cal: 61, per: "100ml" },
    { name: "Fenu (feniyan) with milk", protein: 4, cal: 150, per: "100g" },
  ],
  general: [
    { name: "Paneer", protein: 18, cal: 265, per: "100g" },
    { name: "Curd", protein: 3.5, cal: 60, per: "100g" },
    { name: "Sabudana khichdi", protein: 3, cal: 180, per: "100g" },
    { name: "Fruits (mixed)", protein: 1, cal: 60, per: "100g" },
  ],
};

export default function FastingNutritionClient() {
  const [fastType, setFastType] = useState("navratri");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<{ calories: number; protein: number } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const w = parseFloat(weight);
    if (!w || w < 30 || w > 200) { setError("Please enter a valid weight (30-200 kg)."); return; }
    // Conservative same-day maintenance estimate, protein target scaled for fasting day
    const calories = Math.round(w * 26);
    const protein = Math.round(w * 1.2);
    setResult({ calories, protein });
  }

  const selectedFast = fastTypes.find(f => f.id === fastType)!;
  const foods = fastingFoods[fastType];

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> ›{" "}
        <Link href="/calculators" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Calculators</Link> › Fasting Nutrition
      </div>
      <span className="tag" style={{ marginTop: "1rem", display: "inline-block" }}>Festival Fasting</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Fasting-Safe Nutrition Calculator</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>
        Calculate your calorie and protein target for Navratri, Ekadashi, Karva Chauth, and other Hindu fasting days — using only fasting-permitted foods.
      </p>

      <SavedResultBanner slug="fasting-nutrition" />

      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ marginBottom: "1.25rem" }}>
          <label style={{ display: "block", fontWeight: 700, marginBottom: "0.625rem", fontSize: "0.95rem" }}>Type of Fast</label>
          <div style={{ display: "grid", gap: "0.5rem" }}>
            {fastTypes.map(f => (
              <label key={f.id} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "0.75rem 1rem", border: `1.5px solid ${fastType === f.id ? "var(--color-brand-dark)" : "var(--color-border)"}`, borderRadius: "0.625rem", cursor: "pointer", background: fastType === f.id ? "var(--color-brand-light)" : "#fff" }}>
                <input type="radio" checked={fastType === f.id} onChange={() => setFastType(f.id)} style={{ marginTop: "0.2rem" }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem" }}>{f.label}</div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>{f.desc}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "1.25rem" }}>
          <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Body Weight (kg)</label>
          <input className="calc-input" type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="e.g. 65" />
        </div>

        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My Fasting-Day Targets</button>

        {result && (
          <div style={{ marginTop: "1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
              <div className="result-card"><div className="result-number">{result.calories}</div><div className="result-label">Calorie Target</div></div>
              <div className="result-card"><div className="result-number">{result.protein}g</div><div className="result-label">Protein Target</div></div>
            </div>
            <SaveResultButton calculator="Fasting Nutrition" slug="fasting-nutrition" icon="🪔" headline={`${result.calories} kcal`} label={selectedFast.label} />
          </div>
        )}

        <div style={{ marginTop: "1.5rem", background: "var(--color-bg)", borderRadius: "0.875rem", padding: "1.25rem" }}>
          <div style={{ fontWeight: 700, marginBottom: "0.75rem", fontSize: "0.9rem" }}>🍽️ Permitted Foods for {selectedFast.label}</div>
          <table>
            <thead><tr><th>Food</th><th>Protein</th><th>Calories</th></tr></thead>
            <tbody>
              {foods.map(f => (
                <tr key={f.name}><td>{f.name}</td><td style={{ color: "var(--color-brand-dark)", fontWeight: 700 }}>{f.protein}g</td><td>{f.cal} kcal ({f.per})</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="seo-content">
        <h2>Staying Nourished While Observing a Fast</h2>
        <p>Traditional Hindu fasting periods restrict grains and certain foods but do not require calorie deprivation. This calculator estimates a sensible same-day calorie and protein target using only fasting-permitted (falahar/satvik) foods, so you can stay energised without breaking your vrat.</p>
        <h2>Special Note on Karva Chauth</h2>
        <p>Karva Chauth is a nirjala (waterless) fast — no food or water from sunrise to moonrise. Nutrition planning here focuses entirely on the pre-dawn sargi meal: prioritise protein (paneer, milk, dry fruits) and slow-digesting complex carbs to sustain energy through the day. Avoid salty or sugary foods at sargi, as they increase thirst.</p>

        <div className="disclaimer-box">
          <strong>Note:</strong> If you have diabetes, are pregnant, or have any medical condition, consult your doctor before undertaking an extended or waterless fast.
        </div>

        <RelatedCalculators items={[
          { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
          { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
          { name: "Vegetarian Protein", href: "/calculators/vegetarian-protein", icon: "🌱" },
          { name: "Intermittent Fasting", href: "/calculators/intermittent-fasting", icon: "⏰" },
        ]} />
      </div>
    </div>
  );
}
