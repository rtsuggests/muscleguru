"use client";
import { useState } from "react";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

export default function BodyFatClient() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [height, setHeight] = useState("");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const h = parseFloat(height), w = parseFloat(waist), n = parseFloat(neck);
    if (!h || !w || !n) { setError("Please fill in height, waist, and neck."); return; }
    let bf;
    if (sex === "male") {
      bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
      const hp = parseFloat(hip);
      if (!hp) { setError("Please also enter hip measurement."); return; }
      bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hp - n) + 0.22100 * Math.log10(h)) - 450;
    }
    setResult(Math.round(bf * 10) / 10);
  }

  function category(bf: number, sex: "male" | "female") {
    if (sex === "male") {
      if (bf < 6) return { label: "Essential Fat", color: "#2563eb" };
      if (bf < 14) return { label: "Athletic", color: "#16a34a" };
      if (bf < 18) return { label: "Fit", color: "#16a34a" };
      if (bf < 25) return { label: "Average", color: "#f59e0b" };
      return { label: "Above Average", color: "#ef4444" };
    } else {
      if (bf < 14) return { label: "Essential Fat", color: "#2563eb" };
      if (bf < 21) return { label: "Athletic", color: "#16a34a" };
      if (bf < 25) return { label: "Fit", color: "#16a34a" };
      if (bf < 32) return { label: "Average", color: "#f59e0b" };
      return { label: "Above Average", color: "#ef4444" };
    }
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Body Composition</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Body Fat Calculator India — US Navy Method</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Check your body fat percentage at home using just a tape measure — no calipers, scans, or gym equipment needed.</p>

      <SavedResultBanner slug="body-fat" />

      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", background: "var(--color-bg)", padding: "0.35rem", borderRadius: "0.625rem", width: "fit-content" }}>
          {(["male", "female"] as const).map(s => (
            <button key={s} onClick={() => setSex(s)} style={{ padding: "0.45rem 1.25rem", borderRadius: "0.4rem", border: "none", cursor: "pointer", fontWeight: 600, background: sex === s ? "var(--color-brand-dark)" : "transparent", color: sex === s ? "#fff" : "var(--color-muted)" }}>{s === "male" ? "Male" : "Female"}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Height (cm)</label><input className="calc-input" type="number" value={height} onChange={e => setHeight(e.target.value)} /></div>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Waist (cm)</label><input className="calc-input" type="number" value={waist} onChange={e => setWaist(e.target.value)} /></div>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Neck (cm)</label><input className="calc-input" type="number" value={neck} onChange={e => setNeck(e.target.value)} /></div>
          {sex === "female" && (
            <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Hip (cm)</label><input className="calc-input" type="number" value={hip} onChange={e => setHip(e.target.value)} /></div>
          )}
        </div>
        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My Body Fat</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
              <div className="result-card"><div className="result-number">{result}%</div><div className="result-label">Estimated Body Fat</div></div>
              <div style={{ background: category(result, sex).color + "18", border: `2px solid ${category(result, sex).color}40`, borderRadius: "1rem", padding: "1.25rem", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontWeight: 800, fontSize: "1.3rem", color: category(result, sex).color }}>{category(result, sex).label}</div>
              </div>
            </div>
            <SaveResultButton calculator="Body Fat" slug="body-fat" icon="📊" headline={`${result}%`} label={category(result, sex).label} />
          </div>
        )}
      </div>

      <div className="seo-content">
        <h2>How to Check Your Body Fat Percentage at Home</h2>
        <p>The US Navy circumference method estimates body fat using simple tape measurements at the waist, neck (and hips for women), combined with height. It was developed and validated by the US Naval Health Research Center as a practical field alternative to lab-based methods like underwater weighing. While less precise than a DEXA scan, it is accurate within approximately 3-4% for most body types — accurate enough to track meaningful changes over time.</p>

        <h2>How to Measure Correctly</h2>
        <table>
          <thead><tr><th>Measurement</th><th>How to Measure</th></tr></thead>
          <tbody>
            <tr><td>Neck</td><td>Just below the larynx (Adam&apos;s apple), tape sloping slightly downward to the front</td></tr>
            <tr><td>Waist (men)</td><td>At the navel level, standing relaxed, after a normal exhale</td></tr>
            <tr><td>Waist (women)</td><td>At the narrowest point, usually above the belly button</td></tr>
            <tr><td>Hip (women only)</td><td>At the widest point around the buttocks</td></tr>
          </tbody>
        </table>
        <p>For best accuracy: measure in the morning before eating, keep the tape snug but not compressing the skin, and take each measurement twice to confirm consistency.</p>

        <h2>Body Fat Percentage Categories</h2>
        <table>
          <thead><tr><th>Category</th><th>Men</th><th>Women</th></tr></thead>
          <tbody>
            <tr><td>Essential Fat</td><td>2-5%</td><td>10-13%</td></tr>
            <tr><td>Athletic</td><td>6-13%</td><td>14-20%</td></tr>
            <tr><td>Fit</td><td>14-17%</td><td>21-24%</td></tr>
            <tr><td>Average</td><td>18-24%</td><td>25-31%</td></tr>
            <tr><td>Above Average</td><td>25%+</td><td>32%+</td></tr>
          </tbody>
        </table>

        <h2>Why Body Fat % Matters More Than Scale Weight</h2>
        <p>Two people at the same height and weight can have very different body compositions — one might carry significantly more muscle, the other more fat. Tracking body fat percentage alongside weight gives a much clearer picture of actual physique changes, particularly during body recomposition phases where muscle gain and fat loss happen simultaneously and scale weight alone can be misleading.</p>

        <RelatedCalculators items={[
          { name: "Lean Body Mass", href: "/calculators/lean-body-mass", icon: "🫀" },
          { name: "BMI Calculator", href: "/calculators/bmi", icon: "⚖️" },
          { name: "FFMI Calculator", href: "/calculators/ffmi", icon: "🏆" },
          { name: "Waist-Hip Ratio", href: "/calculators/waist-hip-ratio", icon: "📐" },
          { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
          { name: "Calorie Deficit Calc", href: "/calculators/calorie-deficit", icon: "📉" },
        ]} />
      </div>
    </div>
  );
}
