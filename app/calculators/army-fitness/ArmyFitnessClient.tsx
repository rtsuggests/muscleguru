"use client";
import { useState } from "react";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Army Fitness Calculator — NDA, CDS, Agniveer — MuscleGuru.in",
  "description": "Check if you meet physical fitness standards for NDA, CDS, Agniveer, and SSB selection.",
  "url": "https://muscleguru.in/calculators/army-fitness",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }
};

export default function ArmyFitnessClient() {
  const [runMin, setRunMin] = useState("");
  const [runSec, setRunSec] = useState("");
  const [pushups, setPushups] = useState("");
  const [situps, setSitups] = useState("");
  const [result, setResult] = useState<{ run: boolean; push: boolean; sit: boolean } | null>(null);

  function calculate() {
    const totalSec = parseFloat(runMin || "0") * 60 + parseFloat(runSec || "0");
    const push = parseFloat(pushups || "0");
    const sit = parseFloat(situps || "0");
    setResult({
      run: totalSec > 0 && totalSec <= 330,
      push: push >= 20,
      sit: sit >= 25,
    });
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Defence</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Army Fitness Calculator</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Check if you meet physical fitness standards for NDA, CDS, and Agniveer selection.</p>

      <SavedResultBanner slug="army-fitness" />

      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>1.6km Run — Min</label>
            <input className="calc-input" type="number" value={runMin} onChange={e => setRunMin(e.target.value)} placeholder="5" />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Sec</label>
            <input className="calc-input" type="number" value={runSec} onChange={e => setRunSec(e.target.value)} placeholder="30" />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Push-ups</label>
            <input className="calc-input" type="number" value={pushups} onChange={e => setPushups(e.target.value)} placeholder="20" />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Sit-ups</label>
            <input className="calc-input" type="number" value={situps} onChange={e => setSitups(e.target.value)} placeholder="25" />
          </div>
        </div>
        <button className="btn-primary" onClick={calculate}>Check My Standards</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }}>
            <div style={{ display: "grid", gap: "0.625rem", marginBottom: "1.25rem" }}>
              <div style={{ padding: "0.875rem 1rem", background: "#fff", borderRadius: "0.625rem", border: `1.5px solid ${result.run ? "#86efac" : "#fecaca"}`, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600 }}>1.6km Run (under 5:30)</span><span>{result.run ? "PASS" : "FAIL"}</span>
              </div>
              <div style={{ padding: "0.875rem 1rem", background: "#fff", borderRadius: "0.625rem", border: `1.5px solid ${result.push ? "#86efac" : "#fecaca"}`, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600 }}>Push-ups (min 20)</span><span>{result.push ? "PASS" : "FAIL"}</span>
              </div>
              <div style={{ padding: "0.875rem 1rem", background: "#fff", borderRadius: "0.625rem", border: `1.5px solid ${result.sit ? "#86efac" : "#fecaca"}`, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600 }}>Sit-ups (min 25)</span><span>{result.sit ? "PASS" : "FAIL"}</span>
              </div>
            </div>
            <SaveResultButton calculator="Army Fitness" slug="army-fitness" icon="🪖" headline={`${[result.run, result.push, result.sit].filter(Boolean).length}/3`} label="Standards passed" />
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>Standards Reference</h2>
        <p>Agniveer GD: 1.6km run under 5:30, minimum 10 pull-ups. NDA/CDS: run under 7:30, minimum 6 pull-ups. Always verify current standards at joinindianarmy.nic.in before your test.</p>

        <RelatedCalculators items={[
          { name: "Running Pace Calc", href: "/calculators/running-pace", icon: "🏃" },
          { name: "One Rep Max Calc", href: "/calculators/one-rep-max", icon: "🏋️" },
          { name: "VO2 Max Calculator", href: "/calculators/vo2-max", icon: "🫁" },
          { name: "BMI Calculator", href: "/calculators/bmi", icon: "⚖️" },
        ]} />
      </div>
    </div>
    </>
  );
}
