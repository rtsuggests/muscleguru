import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heart Rate Zone Calculator India — 5 Zones",
};

"use client";
import { useState } from "react";

const schema = {
  "@context": "https://schema.org", "@type": "WebApplication",
  "name": "Heart Rate Zone Calculator — MuscleGuru.in",
  "url": "https://muscleguru.in/calculators/heart-rate-zone",
  "applicationCategory": "HealthApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
};

const zones = [
  { zone: "Zone 1", name: "Active Recovery", pctMin: 0.50, pctMax: 0.60, color: "#6b7280", desc: "Very light effort. Active recovery, warm-up, cool-down. Fat burning at rest." },
  { zone: "Zone 2", name: "Aerobic Base", pctMin: 0.60, pctMax: 0.70, color: "#22c55e", desc: "Light to moderate effort. Builds aerobic base. Most effective fat-burning zone for long duration." },
  { zone: "Zone 3", name: "Aerobic Endurance", pctMin: 0.70, pctMax: 0.80, color: "#f59e0b", desc: "Moderate effort. Improves cardiovascular efficiency. Comfortable but purposeful." },
  { zone: "Zone 4", name: "Lactate Threshold", pctMin: 0.80, pctMax: 0.90, color: "#ef4444", desc: "Hard effort. Improves lactate threshold and race pace. Difficult to maintain conversation." },
  { zone: "Zone 5", name: "VO2 Max", pctMin: 0.90, pctMax: 1.00, color: "#7c3aed", desc: "Maximum effort. Short bursts only. Maximises cardiovascular capacity. Unsustainable beyond 2–3 minutes." },
];

const faqs = [
  { q: "What is the Karvonen method for heart rate zones?", a: "The Karvonen method (also called the Heart Rate Reserve method) calculates training zones using both your maximum heart rate and your resting heart rate. This makes it more personalised than the simple percentage-of-max-HR method. The formula is: Target HR = ((Max HR − Resting HR) × Zone %) + Resting HR. Research supports this method as more accurate for predicting exercise intensity compared to max HR percentage alone." },
  { q: "What is a normal resting heart rate?", a: "A normal resting heart rate for adults is 60–100 beats per minute (bpm). Well-trained endurance athletes often have resting heart rates of 40–60 bpm due to increased cardiac efficiency. Measure your resting heart rate first thing in the morning before getting out of bed — count your pulse for 60 seconds for the most accurate reading. High resting heart rate (above 100 bpm) may indicate stress, dehydration, illness, or a medical condition worth discussing with a doctor." },
  { q: "Which heart rate zone burns the most fat?", a: "Zone 2 (60–70% of max HR) is often called the 'fat burning zone' because at this intensity, fat provides the highest proportion of fuel. However, higher intensity zones burn more total calories per minute. For overall fat loss, total calorie expenditure (which is higher at higher intensities) combined with a calorie deficit matters more than the fat-burning proportion. Zone 2 training is most valuable for building aerobic base and improving metabolic efficiency." },
  { q: "How do I measure my heart rate during exercise?", a: "Options include: a fitness tracker or smartwatch (Fitbit, Garmin, Apple Watch, Mi Band) which provides continuous monitoring; a chest strap heart rate monitor (most accurate); or manual pulse checking (press two fingers on your neck or wrist, count for 15 seconds, multiply by 4). For most recreational training purposes, perceived exertion (the talk test) is a practical proxy — Zone 2 is conversational, Zone 4 makes conversation difficult, Zone 5 is unsustainable." },
];

function FAQ({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>{items.map((item, i) => (
      <div key={i} className="faq-item">
        <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
          <span>{item.q}</span>
          <span style={{ fontSize: "1.2rem", color: "var(--color-brand)", flexShrink: 0, marginLeft: "0.75rem" }}>{open === i ? "−" : "+"}</span>
        </button>
        {open === i && <div className="faq-answer">{item.a}</div>}
      </div>
    ))}</div>
  );
}

function HRZoneCalculator() {
  const [age, setAge] = useState(""); const [rhr, setRhr] = useState("");
  const [method, setMethod] = useState<"karvonen" | "simple">("karvonen");
  const [result, setResult] = useState<{ mhr: number; hrr: number; zones: { zone: string; name: string; low: number; high: number; color: string; desc: string }[] } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const a = parseFloat(age); const r = parseFloat(rhr);
    if (!a || a < 10 || a > 100) { setError("Please enter a valid age (10–100)."); return; }
    if (method === "karvonen" && (!r || r < 30 || r > 120)) { setError("Please enter a valid resting heart rate (30–120 bpm)."); return; }
    const mhr = 220 - a;
    const hrr = method === "karvonen" ? mhr - r : 0;
    const calcZones = zones.map(z => ({
      zone: z.zone, name: z.name, color: z.color, desc: z.desc,
      low: method === "karvonen"
        ? Math.round(hrr * z.pctMin + r)
        : Math.round(mhr * z.pctMin),
      high: method === "karvonen"
        ? Math.round(hrr * z.pctMax + r)
        : Math.round(mhr * z.pctMax),
    }));
    setResult({ mhr, hrr, zones: calcZones });
  }

  return (
    <div>
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", background: "var(--color-bg)", padding: "0.35rem", borderRadius: "0.625rem", width: "fit-content" }}>
        {[["karvonen", "Karvonen (recommended)"], ["simple", "Simple % of Max HR"]].map(([m, label]) => (
          <button key={m} onClick={() => { setMethod(m as "karvonen" | "simple"); setResult(null); }}
            style={{ padding: "0.45rem 1rem", borderRadius: "0.4rem", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.85rem", fontFamily: "var(--font-display)", background: method === m ? "var(--color-brand)" : "transparent", color: method === m ? "#fff" : "var(--color-muted)", transition: "all 0.15s" }}>
            {label}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
        <div>
          <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Age (years)</label>
          <input className="calc-input" type="number" placeholder="e.g. 30" value={age} onChange={e => setAge(e.target.value)} />
        </div>
        {method === "karvonen" && (
          <div>
            <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Resting Heart Rate (bpm)</label>
            <input className="calc-input" type="number" placeholder="e.g. 65" value={rhr} onChange={e => setRhr(e.target.value)} />
            <p style={{ fontSize: "0.78rem", color: "var(--color-muted)", marginTop: "0.3rem" }}>Measure first thing in the morning before getting up.</p>
          </div>
        )}
      </div>
      {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>⚠ {error}</p>}
      <button className="btn-primary" onClick={calculate}>Calculate My Heart Rate Zones</button>

      {result && (
        <div style={{ marginTop: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div className="result-card">
              <div className="result-number">{result.mhr}</div>
              <div className="result-label">Max Heart Rate (bpm)</div>
              <div style={{ fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.25rem" }}>220 − age formula</div>
            </div>
            {method === "karvonen" && (
              <div className="result-card" style={{ background: "linear-gradient(135deg,#eff6ff,#bfdbfe)" }}>
                <div className="result-number" style={{ color: "#1d4ed8" }}>{result.hrr}</div>
                <div className="result-label">Heart Rate Reserve</div>
                <div style={{ fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.25rem" }}>Max HR − Resting HR</div>
              </div>
            )}
          </div>
          <div style={{ display: "grid", gap: "0.625rem" }}>
            {result.zones.map(z => (
              <div key={z.zone} style={{ background: "#fff", border: `1.5px solid ${z.color}40`, borderLeft: `4px solid ${z.color}`, borderRadius: "0.625rem", padding: "0.875rem 1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem" }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9rem", color: z.color }}>{z.zone} — {z.name}</div>
                    <div style={{ fontSize: "0.78rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>{z.desc}</div>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: z.color, fontSize: "1rem", flexShrink: 0 }}>{z.low}–{z.high} bpm</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function HRZoneClient() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</a> <span>›</span>
          <a href="/calculators" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Calculators</a> <span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>Heart Rate Zone Calculator</span>
        </div>
      </div>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>❤️</div>
          <h1 style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", marginBottom: "0.75rem" }}>Heart Rate Zone Calculator</h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-muted)", maxWidth: 560, margin: "0 auto" }}>Calculate your 5 personalised heart rate training zones using the Karvonen (Heart Rate Reserve) method — the most accurate free approach.</p>
        </div>
        <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "clamp(1.25rem,4vw,2rem)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", marginBottom: "2.5rem" }}>
          <HRZoneCalculator />
        </div>
        <div className="disclaimer-box">
          <strong>⚠️ Note:</strong> The 220−age formula estimates maximum heart rate and has an error margin of ±10–12 bpm. For a more accurate MHR, perform a medically supervised graded exercise test. Consult a doctor before starting a high-intensity exercise programme.
        </div>
        <div className="seo-content" style={{ marginTop: "2rem" }}>
          <h2>What Are Heart Rate Training Zones?</h2>
          <p>Heart rate training zones are ranges of heart rate — expressed as beats per minute (bpm) or as a percentage of your maximum heart rate — that correspond to different physiological states and training adaptations. Training in different zones produces different fitness outcomes: Zone 1 and 2 training builds aerobic base and improves fat metabolism; Zone 3 and 4 training improves lactate threshold and race pace; Zone 5 training maximises cardiovascular capacity and speed.</p>
          <p>Using heart rate zones allows you to train with purpose rather than feel — ensuring your easy runs are truly easy (most people run their easy days too fast), and your hard sessions are hard enough to produce the intended adaptation.</p>
          <h2>The Karvonen Method vs Simple Percentage</h2>
          <p>The simple method calculates zones as a percentage of maximum heart rate only (e.g. Zone 2 = 60–70% of max HR). The Karvonen method (Heart Rate Reserve method) factors in your resting heart rate, which makes zones more personalised to your individual cardiovascular fitness level. Research supports the Karvonen method as more accurate for predicting actual exercise intensity and training outcomes.</p>
          <h2>How to Accurately Measure Your Resting Heart Rate</h2>
          <p>Accurate resting heart rate (RHR) measurement is essential for the Karvonen method. Measure it first thing in the morning before getting out of bed — ideally after waking naturally without an alarm. Count your pulse at your wrist or neck for a full 60 seconds. Average over 3 consecutive mornings for the most reliable reading. Normal RHR is 60–100 bpm; well-trained athletes are often 40–60 bpm.</p>
          <h2>Frequently Asked Questions</h2>
          <FAQ items={faqs} />
          <h2>References</h2>
          <ol style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
            <li>Karvonen MJ et al. The effects of training on heart rate. <em>Ann Med Exp Biol Fenn.</em> 1957;35(3):307-315.</li>
            <li>Tanaka H et al. Age-predicted maximal heart rate revisited. <em>J Am Coll Cardiol.</em> 2001;37(1):153-156.</li>
            <li>Seiler S, Tønnessen E. Intervals, thresholds, and long slow distance. <em>Sportscience.</em> 2009;13:32-53.</li>
          </ol>
        </div>
        <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "1rem" }}>Related Calculators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
            {[["🏃 Running Pace", "/calculators/running-pace"], ["🔥 TDEE Calculator", "/calculators/tdee"], ["💧 Water Intake", "/calculators/water-intake"], ["🔥 Calories Burned", "/calculators/calories-burned"]].map(([name, href]) => (
              <a key={href} href={href} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.75rem", padding: "0.875rem 1rem", textDecoration: "none", color: "var(--color-dark)", fontWeight: 600, fontSize: "0.875rem" }}>{name}</a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
