"use client";
import { useState } from "react";
import Link from "next/link";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Army Fitness Calculator — Agniveer, NDA, CDS — MuscleGuru.in",
  "description": "Check your height, chest, 1.6km run, push-ups and sit-ups against region-wise Agniveer, NDA and CDS physical standards.",
  "url": "https://muscleguru.in/calculators/army-fitness",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }
};

const REGIONS = [
  { key: "western-plains", label: "Western Plains (Punjab, Haryana, Rajasthan, Delhi, W. UP)", minHeight: 170 },
  { key: "eastern-plains", label: "Eastern Plains (Bihar, Jharkhand, E. UP, Odisha, WB)", minHeight: 169 },
  { key: "central", label: "Central (MP, Maharashtra, Gujarat, Chhattisgarh)", minHeight: 168 },
  { key: "southern", label: "Southern (Tamil Nadu, Karnataka, Kerala, AP, Telangana)", minHeight: 166 },
  { key: "western-himalayan", label: "Western Himalayan (J&K, Himachal, Uttarakhand)", minHeight: 163 },
  { key: "eastern-himalayan", label: "Eastern Himalayan / North East", minHeight: 160 },
  { key: "community", label: "Gorkha / Garhwali / Kumaoni / Dogra / Assamese", minHeight: 165 },
  { key: "st", label: "Scheduled Tribes", minHeight: 162 },
];

export default function ArmyFitnessClient() {
  const [region, setRegion] = useState(REGIONS[0].key);
  const [height, setHeight] = useState("");
  const [chestUnexpanded, setChestUnexpanded] = useState("");
  const [chestExpanded, setChestExpanded] = useState("");
  const [runMin, setRunMin] = useState("");
  const [runSec, setRunSec] = useState("");
  const [pushups, setPushups] = useState("");
  const [situps, setSitups] = useState("");
  const [result, setResult] = useState<{ height: boolean; chest: boolean; expansion: boolean; run: boolean; push: boolean; sit: boolean } | null>(null);

  function calculate() {
    const regionData = REGIONS.find(r => r.key === region)!;
    const h = parseFloat(height || "0");
    const cu = parseFloat(chestUnexpanded || "0");
    const ce = parseFloat(chestExpanded || "0");
    const totalSec = parseFloat(runMin || "0") * 60 + parseFloat(runSec || "0");
    const push = parseFloat(pushups || "0");
    const sit = parseFloat(situps || "0");
    setResult({
      height: h > 0 && h >= regionData.minHeight,
      chest: cu > 0 && cu >= 77,
      expansion: ce > 0 && cu > 0 && (ce - cu) >= 5,
      run: totalSec > 0 && totalSec <= 330,
      push: push >= 20,
      sit: sit >= 25,
    });
  }

  const checks = result ? [result.height, result.chest, result.expansion, result.run, result.push, result.sit] : [];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Defence</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Army Fitness Calculator</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Check your height, chest, run, push-ups and sit-ups against region-wise Agniveer GD standards.</p>

      <SavedResultBanner slug="army-fitness" />

      <div style={{ background: "#fffbeb", border: "1.5px solid #fde68a", borderRadius: "0.75rem", padding: "0.875rem 1.1rem", marginBottom: "1.25rem", fontSize: "0.85rem" }}>
        Standards are confirmed rally-wise on <strong>joinindianarmy.nic.in</strong> and can vary by year and category. Use this as a preparation check, not a final word — always verify against your own recruitment notification.
      </div>

      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ marginBottom: "1.25rem" }}>
          <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Your Region / Category</label>
          <select className="calc-input" value={region} onChange={e => setRegion(e.target.value)} style={{ width: "100%" }}>
            {REGIONS.map(r => <option key={r.key} value={r.key}>{r.label} — min {r.minHeight} cm</option>)}
          </select>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Height (cm)</label>
            <input className="calc-input" type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="170" />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Chest Unexpanded (cm)</label>
            <input className="calc-input" type="number" value={chestUnexpanded} onChange={e => setChestUnexpanded(e.target.value)} placeholder="77" />
          </div>
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Chest Expanded (cm)</label>
            <input className="calc-input" type="number" value={chestExpanded} onChange={e => setChestExpanded(e.target.value)} placeholder="82" />
          </div>
        </div>
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
              <div style={{ padding: "0.875rem 1rem", background: "#fff", borderRadius: "0.625rem", border: `1.5px solid ${result.height ? "#86efac" : "#fecaca"}`, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600 }}>Height (min {REGIONS.find(r => r.key === region)!.minHeight} cm for your region)</span><span>{result.height ? "PASS" : "FAIL"}</span>
              </div>
              <div style={{ padding: "0.875rem 1rem", background: "#fff", borderRadius: "0.625rem", border: `1.5px solid ${result.chest ? "#86efac" : "#fecaca"}`, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600 }}>Chest Unexpanded (min 77cm)</span><span>{result.chest ? "PASS" : "FAIL"}</span>
              </div>
              <div style={{ padding: "0.875rem 1rem", background: "#fff", borderRadius: "0.625rem", border: `1.5px solid ${result.expansion ? "#86efac" : "#fecaca"}`, display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontWeight: 600 }}>Chest Expansion (min 5cm)</span><span>{result.expansion ? "PASS" : "FAIL"}</span>
              </div>
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
            <SaveResultButton calculator="Army Fitness" slug="army-fitness" icon="🪖" headline={`${checks.filter(Boolean).length}/6`} label="Standards passed" />
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>Standards Reference</h2>
        <p>Agniveer GD: height per region table above, chest 77cm + 5cm expansion, 1.6km run under 5:30 for top PET marks, minimum push-ups and sit-ups per your category. NDA/CDS physical tests differ — see our <Link href="/defence/nda-cds-medical-bmi-standards">NDA & CDS medical standards guide</Link>. Always verify current standards at joinindianarmy.nic.in before your test — standards are confirmed rally-wise and can change.</p>
        <p>Want the full picture? Read our <Link href="/defence/agniveer-height-weight-chest-chart">Agniveer height, weight & chest chart with an 8-week run training plan</Link>.</p>

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
