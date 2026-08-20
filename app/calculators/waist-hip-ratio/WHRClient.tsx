"use client";
import { useState } from "react";
import Link from "next/link";

const schema = {
  "@context": "https://schema.org", "@type": "WebApplication",
  "name": "Waist-to-Hip Ratio Calculator — MuscleGuru.in",
  "url": "https://muscleguru.in/calculators/waist-hip-ratio",
  "applicationCategory": "HealthApplication",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" },
};

const faqs = [
  { q: "What is a healthy waist-to-hip ratio for Indians?", a: "For Indian men, a WHR below 0.90 is considered low risk; 0.90–0.99 is moderate risk; 1.0 and above is high risk. For Indian women, below 0.80 is low risk; 0.80–0.84 is moderate risk; 0.85 and above is high risk. These thresholds are stricter than some international guidelines because research on South Asian populations consistently shows higher metabolic risk at lower WHR values compared to Western populations. The ICMR recommends these cutoffs for Indian adults." },
  { q: "Why is WHR better than BMI for Indians?", a: "BMI measures total body weight relative to height but cannot distinguish between fat and muscle mass, or between visceral (abdominal) fat and subcutaneous fat. Research has shown that Indians tend to carry a higher proportion of visceral fat — fat stored around the abdominal organs — at lower BMIs compared to Western populations. Visceral fat is metabolically active and strongly associated with insulin resistance, type 2 diabetes, and cardiovascular disease. WHR specifically captures abdominal fat distribution, making it a more relevant health risk indicator for Indians than BMI alone." },
  { q: "How do I measure waist circumference correctly?", a: "Stand straight and breathe out gently. Place a tape measure around your bare abdomen at the level of your navel (belly button). The tape should be snug but not compress the skin. Take the measurement after a gentle exhale — not at maximum exhalation. Measure twice and average the readings if they differ. Common mistakes: measuring over clothing (adds 1–2 cm), measuring at the narrowest point rather than the navel level, and measuring while holding your breath in." },
  { q: "How do I measure hip circumference correctly?", a: "Stand with your feet together. Place the tape measure around the widest part of your hips and buttocks — typically at the level of the greater trochanter (the bony prominence you can feel on the outer side of your upper thigh). The tape should be horizontal and parallel to the floor all the way around. Keep your feet together and your weight evenly distributed. Take the measurement without compressing the soft tissue." },
  { q: "Can WHR change with exercise and diet?", a: "Yes — WHR is responsive to lifestyle interventions. Aerobic exercise (particularly at moderate to high intensity) preferentially reduces visceral abdominal fat, which reduces waist circumference and improves WHR. Research by Ismail et al. (2012) confirmed that aerobic exercise reduces visceral fat even without significant total weight loss. A calorie deficit diet combined with resistance training also reduces WHR by decreasing waist circumference while preserving hip and gluteal muscle mass. Reductions in WHR of 0.03–0.08 are achievable within 3–6 months of consistent lifestyle modification." },
  { q: "What is the difference between apple and pear body shapes?", a: "These informal terms describe fat distribution patterns. 'Apple-shaped' individuals (android fat distribution) carry most of their excess fat around the abdomen — resulting in a higher WHR. This pattern is more common in men and post-menopausal women. 'Pear-shaped' individuals (gynoid fat distribution) carry excess fat around the hips, thighs, and buttocks — resulting in a lower WHR. Research consistently shows that android (apple) fat distribution carries significantly higher cardiovascular and metabolic disease risk than gynoid (pear) distribution, even at the same total body fat percentage." },
];

function FAQ({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="faq-item">
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            <span>{item.q}</span>
            <span style={{ fontSize: "1.2rem", color: "var(--color-brand-darker)", flexShrink: 0, marginLeft: "0.75rem" }}>{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <div className="faq-answer">{item.a}</div>}
        </div>
      ))}
    </div>
  );
}

function WHRCalculator() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [waist, setWaist] = useState("");
  const [hip, setHip] = useState("");
  const [result, setResult] = useState<{ whr: number; risk: string; color: string; advice: string } | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    setError(""); setResult(null);
    const w = parseFloat(waist); const h = parseFloat(hip);
    if (!w || !h || w < 40 || h < 40 || w > 200 || h > 200) {
      setError("Please enter valid waist and hip measurements (40–200 cm)."); return;
    }
    const whr = parseFloat((w / h).toFixed(3));
    let risk = "", color = "", advice = "";

    if (sex === "male") {
      if (whr < 0.90) { risk = "Low Risk"; color = "#16a34a"; advice = "Your WHR indicates low abdominal fat risk. Maintain your current lifestyle with regular exercise and a balanced diet."; }
      else if (whr < 1.00) { risk = "Moderate Risk"; color = "#f59e0b"; advice = "Your WHR indicates moderate cardiovascular and metabolic risk. Consider increasing aerobic exercise (150+ min/week) and reducing refined carbohydrates to decrease waist circumference."; }
      else { risk = "High Risk"; color = "#ef4444"; advice = "Your WHR indicates high risk of cardiovascular disease and type 2 diabetes. Consult a doctor for a comprehensive health assessment and structured lifestyle intervention."; }
    } else {
      if (whr < 0.80) { risk = "Low Risk"; color = "#16a34a"; advice = "Your WHR indicates low abdominal fat risk. Maintain your current lifestyle with regular exercise and a balanced diet."; }
      else if (whr < 0.85) { risk = "Moderate Risk"; color = "#f59e0b"; advice = "Your WHR indicates moderate cardiovascular and metabolic risk. Consider increasing aerobic exercise and reducing abdominal fat through diet and exercise."; }
      else { risk = "High Risk"; color = "#ef4444"; advice = "Your WHR indicates high risk. Consult a doctor for a comprehensive health assessment. Structured lifestyle intervention can significantly reduce this risk."; }
    }

    setResult({ whr, risk, color, advice });
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", background: "var(--color-bg)", padding: "0.35rem", borderRadius: "0.625rem", width: "fit-content" }}>
        {(["male", "female"] as const).map(s => (
          <button key={s} onClick={() => { setSex(s); setResult(null); }}
            style={{ padding: "0.45rem 1.25rem", borderRadius: "0.4rem", border: "none", cursor: "pointer", fontWeight: 600, fontSize: "0.9rem", fontFamily: "var(--font-display)", background: sex === s ? "var(--color-brand-dark)" : "transparent", color: sex === s ? "#fff" : "var(--color-muted)", transition: "all 0.15s" }}>
            {s === "male" ? "Male" : "Female"}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
        <div>
          <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Waist Circumference (cm)</label>
          <input className="calc-input" type="number" placeholder="e.g. 85" value={waist} onChange={e => { setWaist(e.target.value); setResult(null); }} />
          <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.3rem" }}>Measure at navel level after gentle exhale</p>
        </div>
        <div>
          <label style={{ display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" }}>Hip Circumference (cm)</label>
          <input className="calc-input" type="number" placeholder="e.g. 95" value={hip} onChange={e => { setHip(e.target.value); setResult(null); }} />
          <p style={{ fontSize: "0.75rem", color: "var(--color-muted)", marginTop: "0.3rem" }}>Measure at widest point of hips/buttocks</p>
        </div>
      </div>

      {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>⚠ {error}</p>}
      <button className="btn-primary" onClick={calculate}>Calculate My WHR</button>

      {result && (
        <div style={{ marginTop: "1.5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
            <div className="result-card">
              <div className="result-number">{result.whr}</div>
              <div className="result-label">Waist-to-Hip Ratio</div>
            </div>
            <div style={{ background: result.color + "18", border: `2px solid ${result.color}40`, borderRadius: "1rem", padding: "1.25rem", textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem", color: result.color }}>{result.risk}</div>
              <div style={{ fontSize: "0.8rem", color: "var(--color-muted)", marginTop: "0.3rem" }}>Indian ICMR Threshold</div>
            </div>
          </div>
          <div style={{ background: "var(--color-bg)", borderRadius: "0.875rem", padding: "1.25rem", marginBottom: "1.25rem" }}>
            <div style={{ fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.9rem" }}>📋 Recommendation</div>
            <p style={{ fontSize: "0.875rem", margin: 0, lineHeight: 1.7 }}>{result.advice}</p>
          </div>

          {/* Indian reference table */}
          <div style={{ background: "var(--color-bg)", borderRadius: "0.875rem", padding: "1.25rem" }}>
            <div style={{ fontWeight: 700, marginBottom: "0.875rem", fontSize: "0.9rem" }}>🇮🇳 WHR Risk Classification (Indian / ICMR)</div>
            <table>
              <thead><tr><th>Risk Level</th><th>Men (WHR)</th><th>Women (WHR)</th></tr></thead>
              <tbody>
                <tr><td style={{ color: "#16a34a", fontWeight: 600 }}>✅ Low Risk</td><td>Below 0.90</td><td>Below 0.80</td></tr>
                <tr><td style={{ color: "#f59e0b", fontWeight: 600 }}>⚠️ Moderate Risk</td><td>0.90 – 0.99</td><td>0.80 – 0.84</td></tr>
                <tr><td style={{ color: "#ef4444", fontWeight: 600 }}>❌ High Risk</td><td>1.00 and above</td><td>0.85 and above</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
        <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Calculators & Guides</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
          {[["⚖️ BMI Calculator", "/calculators/bmi"], ["🩸 Diabetes Risk", "/calculators/diabetes-bmi"], ["📐 Ideal Weight", "/calculators/ideal-weight"], ["📉 Calorie Deficit", "/calculators/calorie-deficit"], ["🔥 TDEE Calculator", "/calculators/tdee"], ["💪 Protein Calculator", "/calculators/protein"]].map(([name, href]) => (
            <Link key={href} href={href} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.75rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem", color: "var(--color-dark)" }}>{name}</Link>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "2.5rem" }}>
        <h2 style={{ fontSize: "1.3rem", marginBottom: "1.25rem" }}>Frequently Asked Questions</h2>
        <FAQ items={faqs} />
      </div>

      <div style={{ marginTop: "2rem", background: "var(--color-bg)", borderRadius: "0.875rem", padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
        <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--color-brand)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, flexShrink: 0 }}>MG</div>
        <div>
          <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>MuscleGuru Editorial Team</div>
          <div style={{ fontSize: "0.82rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>WHR thresholds based on ICMR guidelines and South Asian population research. Always consult a qualified healthcare professional for personalised advice.</div>
        </div>
      </div>
    </div>
  );
}

export default function WHRClient() {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>📐</div>
        <h1 style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", marginBottom: "0.75rem" }}>Waist-to-Hip Ratio Calculator India</h1>
        <p style={{ fontSize: "1.05rem", color: "var(--color-muted)", maxWidth: 580, margin: "0 auto" }}>
          Calculate your WHR with Indian-adapted ICMR risk thresholds. More accurate than BMI for predicting metabolic health risk in Indians.
        </p>
      </div>
      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "clamp(1.25rem,4vw,2rem)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", marginBottom: "2.5rem" }}>
        <WHRCalculator />
      </div>
      <div className="disclaimer-box">
        <strong>⚠️ Medical Disclaimer:</strong> This calculator provides a risk estimate only and does not constitute a medical diagnosis. If your WHR indicates moderate or high risk, please consult a qualified healthcare professional.
      </div>
    </div>
  );
}
