"use client";
import { useState } from "react";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "VO2 Max Calculator India — 3 Field Test Methods — MuscleGuru.in",
  "description": "Estimate your VO2 max using Rockport Walk Test, Cooper Run, and RHR formula.",
  "url": "https://muscleguru.in/calculators/vo2-max",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }
};

export default function VO2MaxClient() {
  const [method, setMethod] = useState<"cooper" | "rhr">("cooper");
  const [distance, setDistance] = useState("");
  const [age, setAge] = useState("");
  const [restingHR, setRestingHR] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    if (method === "cooper") {
      const d = parseFloat(distance);
      if (!d || d < 800 || d > 5000) { setError("Please enter distance covered in 12 minutes (metres)."); return; }
      const vo2 = (d - 504.9) / 44.73;
      setResult(Math.round(vo2 * 10) / 10);
    } else {
      const a = parseFloat(age), rhr = parseFloat(restingHR);
      if (!a || !rhr) { setError("Please enter age and resting heart rate."); return; }
      const maxHR = 220 - a;
      const vo2 = 15.3 * (maxHR / rhr);
      setResult(Math.round(vo2 * 10) / 10);
    }
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Cardio Fitness</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>VO2 Max Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Estimate your VO2 max using the Cooper 12-minute run test or resting heart rate method.</p>
      <SavedResultBanner slug="vo2-max" />
      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", background: "var(--color-bg)", padding: "0.35rem", borderRadius: "0.625rem", width: "fit-content" }}>
          {([["cooper","Cooper Test"],["rhr","Resting HR"]] as const).map(([m, label]) => (
            <button key={m} onClick={() => setMethod(m as "cooper" | "rhr")} style={{ padding: "0.45rem 1.25rem", borderRadius: "0.4rem", border: "none", cursor: "pointer", fontWeight: 600, background: method === m ? "var(--color-brand-dark)" : "transparent", color: method === m ? "#fff" : "var(--color-muted)" }}>{label}</button>
          ))}
        </div>
        {method === "cooper" ? (
          <div style={{ marginBottom: "1.25rem" }}>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Distance covered in 12 minutes (metres)</label>
            <input className="calc-input" type="number" value={distance} onChange={e => setDistance(e.target.value)} placeholder="e.g. 2400" />
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
            <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Age</label><input className="calc-input" type="number" value={age} onChange={e => setAge(e.target.value)} /></div>
            <div><label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Resting Heart Rate (bpm)</label><input className="calc-input" type="number" value={restingHR} onChange={e => setRestingHR(e.target.value)} /></div>
          </div>
        )}
        {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
        <button className="btn-primary" onClick={calculate}>Calculate My VO2 Max</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }}>
            <div className="result-card" style={{ marginBottom: "1.25rem" }}>
              <div className="result-number">{result}</div>
              <div className="result-label">VO2 Max (ml/kg/min)</div>
            </div>
            <SaveResultButton calculator="VO2 Max" slug="vo2-max" icon="🫁" headline={String(result)} label="ml/kg/min" />
          </div>
        )}
      </div>
      <div className="seo-content">
        <h2>Understanding VO2 Max</h2>
        <p>VO2 max measures your body&apos;s maximum oxygen utilisation during intense exercise — the gold standard measure of cardiovascular fitness. Higher VO2 max correlates with better endurance performance and lower cardiovascular disease risk.</p>
        <table>
          <thead><tr><th>Rating</th><th>VO2 Max Range (Men)</th></tr></thead>
          <tbody>
            <tr><td>Excellent</td><td>Above 52</td></tr>
            <tr><td>Good</td><td>43-52</td></tr>
            <tr><td>Average</td><td>35-42</td></tr>
            <tr><td>Below Average</td><td>Below 35</td></tr>
          </tbody>
        </table>
        <h2>What VO2 Max Tells You</h2>
        <p>VO2 max is the maximum amount of oxygen your body can use during intense exercise, measured in millilitres per kilogram of body weight per minute (ml/kg/min). It is one of the strongest single indicators of cardiovascular fitness, and higher values are linked with lower risk of heart disease and earlier death. Typical untrained adults sit somewhere around 30 to 40, trained recreational athletes around 45 to 60, and elite endurance athletes can exceed 70. Women usually score lower than men, and values decline with age, often by about 10% per decade in inactive people.</p>
        <h2>How the Field Tests Work</h2>
        <ul>
          <li><strong>Cooper 12-minute run:</strong> VO2 max = (distance in metres - 504.9) / 44.73. Running 2,400 m gives roughly 42 ml/kg/min.</li>
          <li><strong>Resting heart rate method:</strong> VO2 max is about 15.3 x (maximum heart rate / resting heart rate). A maximum of 190 and resting rate of 60 gives roughly 48.5.</li>
          <li><strong>Rockport walk test:</strong> a timed 1-mile brisk walk with heart rate measured at the finish, useful for beginners and older adults.</li>
        </ul>
        <p>These tests estimate rather than measure VO2 max. A lab test with a gas analyser is the gold standard.</p>
        <h2>How to Improve It</h2>
        <ul>
          <li>Train three to five times a week, mixing easy aerobic sessions with one or two harder interval sessions.</li>
          <li>Try intervals such as four rounds of 4 minutes at a hard effort with 3 minutes of easy recovery.</li>
          <li>Be consistent for 8 to 12 weeks; beginners often see noticeable gains in that window.</li>
        </ul>
        <p>Check with your doctor before hard testing if you have heart conditions, chest pain or have been inactive for a long time.</p>

        <RelatedCalculators items={[
          { name: "Running Pace Calc", href: "/calculators/running-pace", icon: "🏃" },
          { name: "Heart Rate Zones", href: "/calculators/heart-rate-zone", icon: "❤️" },
          { name: "Army Fitness Calc", href: "/calculators/army-fitness", icon: "🪖" },
        ]} />
      </div>
    </div>
    </>
  );
}
