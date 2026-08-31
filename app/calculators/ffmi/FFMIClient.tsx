"use client";
import { useState } from "react";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

export default function FFMIClient() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bodyFat, setBodyFat] = useState("");
  const [result, setResult] = useState<{ ffmi: number; normalized: number; rating: string } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const w = parseFloat(weight), h = parseFloat(height) / 100, bf = parseFloat(bodyFat);
    if (!w || !h || !bf) { setError("Please enter valid weight, height, and body fat %."); return; }
    const leanMass = w * (1 - bf / 100);
    const ffmi = leanMass / (h * h);
    const normalized = ffmi + 6.1 * (1.8 - h);

    let rating = "Average";
    const threshold = sex === "male" ? [18, 20, 22, 23, 25] : [15, 17, 18.5, 19.5, 21];
    if (normalized < threshold[0]) rating = "Below Average";
    else if (normalized < threshold[1]) rating = "Average";
    else if (normalized < threshold[2]) rating = "Above Average";
    else if (normalized < threshold[3]) rating = "Excellent";
    else if (normalized < threshold[4]) rating = "Superior (near natural limit)";
    else rating = "Exceeds typical natural limit";

    setResult({ ffmi: Math.round(ffmi * 10) / 10, normalized: Math.round(normalized * 10) / 10, rating });
  }

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Advanced</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>FFMI Calculator India — Fat-Free Mass Index</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Measure your Fat-Free Mass Index — the science-based measure of muscularity relative to height.</p>

      <SavedResultBanner slug="ffmi" />

      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", background: "var(--color-bg)", padding: "0.35rem", borderRadius: "0.625rem", width: "fit-content" }}>
          {(["male", "female"] as const).map(s => (
            <button key={s} onClick={() => setSex(s)} style={{ padding: "0.45rem 1.25rem", borderRadius: "0.4rem", border: "none", cursor: "pointer", fontWeight: 600, background: sex === s ? "var(--color-brand-dark)" : "transparent", color: sex === s ? "#fff" : "var(--color-muted)" }}>{s === "male" ? "Male" : "Female"}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Weight (kg)</label><input className="calc-input" type="number" value={weight} onChange={e => setWeight(e.target.value)} /></div>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Height (cm)</label><input className="calc-input" type="number" value={height} onChange={e => setHeight(e.target.value)} /></div>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Body Fat %</label><input className="calc-input" type="number" value={bodyFat} onChange={e => setBodyFat(e.target.value)} placeholder="e.g. 15" /></div>
        </div>
        <p style={{ fontSize: "0.78rem", color: "var(--color-muted)", marginBottom: "1rem" }}>Don&apos;t know your body fat %? Use the <a href="/calculators/body-fat" style={{ color: "var(--color-brand-darker)" }}>Body Fat Calculator</a> first.</p>
        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My FFMI</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
              <div className="result-card"><div className="result-number">{result.normalized}</div><div className="result-label">Normalized FFMI</div></div>
              <div className="result-card"><div className="result-number">{result.ffmi}</div><div className="result-label">Raw FFMI</div></div>
            </div>
            <div style={{ background: "var(--color-bg)", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "1.25rem", textAlign: "center", fontWeight: 700, color: "var(--color-brand-dark)" }}>{result.rating}</div>
            <SaveResultButton calculator="FFMI" slug="ffmi" icon="🏆" headline={String(result.normalized)} label={result.rating} />
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>What Is FFMI?</h2>
        <p>Fat-Free Mass Index (FFMI) measures muscularity relative to height, normalizing for body size the way BMI does — but using lean mass instead of total weight. Research by Kouri et al. (1995) found that natural male bodybuilders rarely exceed a normalized FFMI of 25, making it a useful reference point for identifying the natural muscular ceiling.</p>

        <RelatedCalculators items={[
          { name: "Lean Body Mass", href: "/calculators/lean-body-mass", icon: "🫀" },
          { name: "Body Fat Calculator", href: "/calculators/body-fat", icon: "📊" },
          { name: "Muscle Gain Rate", href: "/calculators/muscle-gain-rate", icon: "📈" },
          { name: "BMI Calculator", href: "/calculators/bmi", icon: "⚖️" },
        ]} />
      </div>
    </div>
  );
}
