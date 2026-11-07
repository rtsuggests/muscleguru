"use client";
import { useState } from "react";
import Link from "next/link";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";
import FAQ from "@/components/ui/FAQ";

const schema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "IDRS Diabetes Risk Score Calculator India — MuscleGuru.in",
  "description": "Calculate your Indian Diabetes Risk Score (IDRS) from age, waist circumference, physical activity and family history.",
  "url": "https://muscleguru.in/calculators/idrs",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "INR" }
};

const faqs = [
  { q: "What is the Indian Diabetes Risk Score (IDRS)?", a: "A simple four-question screening tool developed by the Madras Diabetes Research Foundation (Mohan et al., 2005) to flag people who may have undiagnosed type 2 diabetes. It uses age, waist circumference, physical activity and family history, and needs no blood test." },
  { q: "Does a high IDRS mean I have diabetes?", a: "No. A score of 60 or more means your chance of having undiagnosed diabetes is higher and that a blood test is worthwhile. Only a blood test (fasting glucose, HbA1c or an oral glucose tolerance test) can diagnose diabetes." },
  { q: "Does a low IDRS mean I am safe?", a: "Not entirely. A low score lowers the probability but does not rule diabetes out, and the score does not capture everything (for example, a very high BMI with a normal waist, or gestational diabetes). Get tested if you have symptoms such as constant thirst, frequent urination, unexplained weight loss or slow-healing wounds." },
  { q: "What waist size is normal for an Indian man or woman?", a: "In the IDRS, a waist under 90 cm in men and under 80 cm in women scores zero. Waist measurements at or above those values add points because abdominal fat is closely linked to insulin resistance in Indians." },
  { q: "How often should I repeat the score?", a: "Once a year is reasonable, or whenever your weight, waist, activity level or family history changes. Because age is part of the score, it will naturally rise as you move past 35 and 50." },
];

export default function IDRSClient() {
  const [sex, setSex] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [waist, setWaist] = useState("");
  const [activity, setActivity] = useState("");
  const [family, setFamily] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<null | {
    total: number; ageP: number; waistP: number; actP: number; famP: number;
    band: string; color: string; advice: string; young: boolean;
  }>(null);

  function calculate() {
    setError(""); setResult(null);
    const a = parseFloat(age), w = parseFloat(waist);
    if (!a || a < 18 || a > 110) { setError("Please enter an age between 18 and 110."); return; }
    if (!w || w < 40 || w > 200) { setError("Please enter your waist circumference in cm (40 to 200)."); return; }
    if (activity === "" || family === "") { setError("Please answer the physical activity and family history questions."); return; }

    const ageP = a < 35 ? 0 : a < 50 ? 20 : 30;
    const waistP = sex === "male" ? (w < 90 ? 0 : w < 100 ? 10 : 20) : (w < 80 ? 0 : w < 90 ? 10 : 20);
    const actP = parseInt(activity, 10);
    const famP = parseInt(family, 10);
    const total = ageP + waistP + actP + famP;

    let band = "Low risk", color = "#16a34a";
    let advice = "A score below 30 suggests a low chance of having undiagnosed diabetes. Keep your waist in the healthy range, stay active, and repeat this check every year or two. Get a blood test sooner if you develop symptoms.";
    if (total >= 60) {
      band = "High risk"; color = "#ef4444";
      advice = "A score of 60 or more means you are at higher risk of having undiagnosed diabetes. This is not a diagnosis, but a blood test (fasting glucose, HbA1c or an oral glucose tolerance test) is worth arranging soon.";
    } else if (total >= 30) {
      band = "Moderate risk"; color = "#f59e0b";
      advice = "A score between 30 and 50 indicates moderate risk. It is sensible to have a fasting glucose or HbA1c test, and to work on waist size and activity, which are the two factors you can change.";
    }
    setResult({ total, ageP, waistP, actP, famP, band, color, advice, young: a < 20 });
  }

  const labelStyle = { display: "block", fontWeight: 600, marginBottom: "0.4rem", fontSize: "0.9rem" } as const;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org", "@type": "FAQPage",
        mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }) }} />
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
        <span className="tag">Medical</span>
        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>IDRS Diabetes Risk Score Calculator</h1>
        <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>The Indian Diabetes Risk Score is a validated four-question screen for undiagnosed type 2 diabetes. It takes under a minute and needs no blood test.</p>

        <SavedResultBanner slug="idrs" />

        <div style={{ background: "#fffbeb", border: "1.5px solid #fde68a", borderRadius: "0.75rem", padding: "0.875rem 1.1rem", marginBottom: "1.25rem", fontSize: "0.85rem" }}>
          This is a screening tool, not a diagnosis. Only a blood test can diagnose diabetes, and nothing here replaces advice from your doctor.
        </div>

        <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.25rem", background: "var(--color-bg)", padding: "0.35rem", borderRadius: "0.625rem", width: "fit-content" }}>
            {(["male", "female"] as const).map(s => (
              <button key={s} onClick={() => setSex(s)} style={{ padding: "0.45rem 1.25rem", borderRadius: "0.4rem", border: "none", cursor: "pointer", fontWeight: 600, background: sex === s ? "var(--color-brand-dark)" : "transparent", color: sex === s ? "#fff" : "var(--color-body)" }}>{s === "male" ? "Male" : "Female"}</button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem", marginBottom: "1.25rem" }}>
            <div>
              <label style={labelStyle}>Age (years)</label>
              <input className="calc-input" type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="38" />
            </div>
            <div>
              <label style={labelStyle}>Waist circumference (cm)</label>
              <input className="calc-input" type="number" value={waist} onChange={e => setWaist(e.target.value)} placeholder={sex === "male" ? "92" : "84"} />
            </div>
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--color-muted)", margin: "-0.5rem 0 1.25rem" }}>Measure at the level of the navel (belly button), after breathing out, with the tape snug but not pressing into the skin.</p>

          <div style={{ marginBottom: "1.25rem" }}>
            <label style={labelStyle}>Physical activity</label>
            <select className="calc-input" value={activity} onChange={e => setActivity(e.target.value)} style={{ width: "100%" }}>
              <option value="">Select one</option>
              <option value="0">Regular exercise and strenuous work or daily activity</option>
              <option value="20">Regular exercise or strenuous work (one of the two)</option>
              <option value="30">No exercise and sedentary work</option>
            </select>
          </div>

          <div style={{ marginBottom: "1.25rem" }}>
            <label style={labelStyle}>Family history of diabetes</label>
            <select className="calc-input" value={family} onChange={e => setFamily(e.target.value)} style={{ width: "100%" }}>
              <option value="">Select one</option>
              <option value="0">No family history</option>
              <option value="10">One parent has diabetes</option>
              <option value="20">Both parents have diabetes</option>
            </select>
          </div>

          {error && <p style={{ color: "#ef4444", fontSize: "0.875rem", marginBottom: "1rem" }}>{error}</p>}
          <button className="btn-primary" onClick={calculate}>Calculate My IDRS</button>

          {result && (
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ textAlign: "center", padding: "1.25rem", borderRadius: "0.875rem", border: `2px solid ${result.color}`, marginBottom: "1rem" }}>
                <div style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>Your IDRS</div>
                <div style={{ fontSize: "2.75rem", fontWeight: 800, color: result.color, lineHeight: 1.1 }}>{result.total}<span style={{ fontSize: "1.1rem", color: "var(--color-muted)" }}> / 100</span></div>
                <div style={{ fontWeight: 700, color: result.color, marginTop: "0.25rem" }}>{result.band}</div>
              </div>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.7, marginBottom: "1rem" }}>{result.advice}</p>
              {result.young && <p style={{ fontSize: "0.85rem", color: "#92400e", marginBottom: "1rem" }}>Note: the IDRS was developed in adults aged 20 and over, so treat this result with extra caution.</p>}
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem", marginBottom: "1.25rem" }}>
                <thead><tr><th style={{ textAlign: "left", padding: "0.5rem", borderBottom: "1.5px solid var(--color-border)" }}>Factor</th><th style={{ textAlign: "right", padding: "0.5rem", borderBottom: "1.5px solid var(--color-border)" }}>Points</th></tr></thead>
                <tbody>
                  <tr><td style={{ padding: "0.5rem" }}>Age</td><td style={{ padding: "0.5rem", textAlign: "right" }}>{result.ageP}</td></tr>
                  <tr><td style={{ padding: "0.5rem" }}>Waist circumference</td><td style={{ padding: "0.5rem", textAlign: "right" }}>{result.waistP}</td></tr>
                  <tr><td style={{ padding: "0.5rem" }}>Physical activity</td><td style={{ padding: "0.5rem", textAlign: "right" }}>{result.actP}</td></tr>
                  <tr><td style={{ padding: "0.5rem" }}>Family history</td><td style={{ padding: "0.5rem", textAlign: "right" }}>{result.famP}</td></tr>
                </tbody>
              </table>
              <SaveResultButton calculator="IDRS Diabetes Risk" slug="idrs" icon="🩸" headline={`${result.total}/100`} label={result.band} />
            </div>
          )}
        </div>

        <div className="seo-content">
          <h2>What Is the Indian Diabetes Risk Score?</h2>
          <p>The Indian Diabetes Risk Score (IDRS) was developed by researchers at the Madras Diabetes Research Foundation using data from the Chennai Urban Rural Epidemiology Study (CURES), and published in 2005 (Mohan et al.). It was designed for community screening in India, where many people with type 2 diabetes are undiagnosed. Unlike BMI-based tools, it uses waist size, which better captures the abdominal fat that drives risk in Indians.</p>

          <h2>How the Score Is Calculated</h2>
          <table>
            <thead><tr><th>Factor</th><th>Category</th><th>Points</th></tr></thead>
            <tbody>
              <tr><td>Age</td><td>Under 35 / 35 to 49 / 50 and above</td><td>0 / 20 / 30</td></tr>
              <tr><td>Waist (men)</td><td>Under 90 cm / 90 to 99 cm / 100 cm and above</td><td>0 / 10 / 20</td></tr>
              <tr><td>Waist (women)</td><td>Under 80 cm / 80 to 89 cm / 90 cm and above</td><td>0 / 10 / 20</td></tr>
              <tr><td>Physical activity</td><td>Regular exercise and strenuous work / one of the two / neither (sedentary)</td><td>0 / 20 / 30</td></tr>
              <tr><td>Family history</td><td>None / one parent / both parents</td><td>0 / 10 / 20</td></tr>
            </tbody>
          </table>
          <p>The maximum score is 100.</p>

          <h2>What Your Score Means</h2>
          <table>
            <thead><tr><th>IDRS</th><th>Risk</th><th>Suggested next step</th></tr></thead>
            <tbody>
              <tr><td>Below 30</td><td>Low</td><td>Repeat every year or two; maintain waist and activity</td></tr>
              <tr><td>30 to 50</td><td>Moderate</td><td>Get a fasting glucose or HbA1c test; work on waist and activity</td></tr>
              <tr><td>60 or above</td><td>High</td><td>Arrange a blood test soon</td></tr>
            </tbody>
          </table>
          <p>In validation work, a cut-off of 60 identified roughly seven in ten people with undiagnosed diabetes, while also flagging some people who turned out not to have it. That trade-off is normal for a screening tool: it is meant to decide who should get a blood test, not to replace one.</p>

          <h2>What You Can Change</h2>
          <p>Age and family history cannot be changed, but waist size and physical activity can, and together they account for up to 50 of the 100 points. Reducing abdominal fat, building regular activity (aim for around 150 minutes of moderate exercise a week plus two strength sessions) and following a diet built on dal, vegetables, whole grains and millets all lower risk. See our <Link href="/indian-diet/diabetes-diet-indian-vegetarian">Indian vegetarian diet for blood sugar control</Link> and our guide to <Link href="/weight-loss/why-indians-need-lower-bmi-cutoff">why Indians need a lower BMI cut-off</Link>.</p>

          <h2>Tests That Diagnose Diabetes</h2>
          <table>
            <thead><tr><th>Test</th><th>Prediabetes</th><th>Diabetes</th></tr></thead>
            <tbody>
              <tr><td>Fasting blood glucose</td><td>100 to 125 mg/dL</td><td>126 mg/dL or higher</td></tr>
              <tr><td>HbA1c</td><td>5.7 to 6.4%</td><td>6.5% or higher</td></tr>
            </tbody>
          </table>

          <h2>Frequently Asked Questions</h2>
          <FAQ items={faqs} />

          <h2>References</h2>
          <ol style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.8 }}>
            <li>Mohan V, Deepa R, Deepa M, Somannavar S, Datta M. A simplified Indian Diabetes Risk Score for screening for undiagnosed diabetic subjects. J Assoc Physicians India. 2005;53:759–763.</li>
            <li>American Diabetes Association. Standards of Care in Diabetes: classification and diagnosis of diabetes (diagnostic thresholds for fasting glucose and HbA1c).</li>
          </ol>

          <RelatedCalculators items={[
            { name: "Diabetes Risk & BMI", href: "/calculators/diabetes-bmi", icon: "🩸" },
            { name: "Waist-Hip Ratio", href: "/calculators/waist-hip-ratio", icon: "📐" },
            { name: "BMI Calculator", href: "/calculators/bmi", icon: "⚖️" },
            { name: "Body Fat Calculator", href: "/calculators/body-fat", icon: "📏" },
          ]} />
        </div>
      </div>
    </>
  );
}
