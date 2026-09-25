"use client";
import { useState } from "react";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Lean Body Mass Calculator India — 3 Formulas — MuscleGuru.in",
  "description": "Calculate your lean body mass using Boer, James and Hume formulas.",
  "url": "https://muscleguru.in/calculators/lean-body-mass",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }
};

export default function LBMClient() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<{ boer: number; james: number } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const w = parseFloat(weight), h = parseFloat(height);
    if (!w || !h) { setError("Please enter valid weight and height."); return; }
    let boer, james;
    if (sex === "male") {
      boer = 0.407 * w + 0.267 * h - 19.2;
      james = 1.1 * w - 128 * Math.pow(w / h, 2);
    } else {
      boer = 0.252 * w + 0.473 * h - 48.3;
      james = 1.07 * w - 148 * Math.pow(w / h, 2);
    }
    setResult({ boer: Math.round(boer * 10) / 10, james: Math.round(james * 10) / 10 });
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Advanced</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Lean Body Mass Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Calculate your lean body mass using Boer and James formulas.</p>

      <SavedResultBanner slug="lean-body-mass" />

      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", background: "var(--color-bg)", padding: "0.35rem", borderRadius: "0.625rem", width: "fit-content" }}>
          {(["male", "female"] as const).map(s => (
            <button key={s} onClick={() => setSex(s)} style={{ padding: "0.45rem 1.25rem", borderRadius: "0.4rem", border: "none", cursor: "pointer", fontWeight: 600, background: sex === s ? "var(--color-brand-dark)" : "transparent", color: sex === s ? "#fff" : "var(--color-muted)" }}>{s === "male" ? "Male" : "Female"}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Weight (kg)</label><input className="calc-input" type="number" value={weight} onChange={e => setWeight(e.target.value)} /></div>
          <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Height (cm)</label><input className="calc-input" type="number" value={height} onChange={e => setHeight(e.target.value)} /></div>
        </div>
        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My Lean Mass</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
              <div className="result-card"><div className="result-number">{result.boer}kg</div><div className="result-label">Boer Formula</div></div>
              <div className="result-card"><div className="result-number">{result.james}kg</div><div className="result-label">James Formula</div></div>
            </div>
            <SaveResultButton calculator="Lean Body Mass" slug="lean-body-mass" icon="🫀" headline={`${result.boer}kg`} label="Boer formula" />
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>Understanding Lean Body Mass</h2>
        <p>Lean body mass (LBM) is your total body weight minus fat mass — including muscle, bone, organs, and water. The Boer formula is widely considered the most accurate for most body types. Tracking LBM over time is a better progress indicator than scale weight alone.</p>

        <RelatedCalculators items={[
          { name: "FFMI Calculator", href: "/calculators/ffmi", icon: "🏆" },
          { name: "Body Fat Calculator", href: "/calculators/body-fat", icon: "📊" },
          { name: "BMI Calculator", href: "/calculators/bmi", icon: "⚖️" },
          { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
        ]} />
      </div>
    </div>
    </>
  );
}
