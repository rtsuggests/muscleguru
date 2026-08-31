"use client";
import { useState } from "react";
import SavedResultBanner from "@/components/ui/SavedResultBanner";
import SaveResultButton from "@/components/ui/SaveResultButton";
import RelatedCalculators from "@/components/ui/RelatedCalculators";

const questions = [
  { q: "How would you describe your natural build?", options: [["Slim, narrow shoulders","ecto"],["Athletic, medium build","meso"],["Broader, gains weight easily","endo"]] },
  { q: "How easily do you gain weight?", options: [["Very hard to gain","ecto"],["Moderate, balanced","meso"],["Gain weight easily","endo"]] },
  { q: "How would you describe your metabolism?", options: [["Very fast","ecto"],["Moderate","meso"],["Slow","endo"]] },
  { q: "How do you respond to strength training?", options: [["Muscle builds slowly","ecto"],["Muscle builds easily","meso"],["Gain muscle and fat together","endo"]] },
  { q: "What is your typical body fat storage?", options: [["Very lean naturally","ecto"],["Moderate, evenly distributed","meso"],["Higher, mostly midsection","endo"]] },
];

export default function BodyTypeClient() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  function selectAnswer(qIndex: number, type: string) {
    const newAnswers = [...answers];
    newAnswers[qIndex] = type;
    setAnswers(newAnswers);
  }

  function calculate() {
    if (answers.filter(Boolean).length < questions.length) return;
    const counts: Record<string, number> = { ecto: 0, meso: 0, endo: 0 };
    answers.forEach(a => counts[a]++);
    const winner = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
    setResult(winner);
  }

  const typeInfo: Record<string, { name: string; desc: string; diet: string }> = {
    ecto: { name: "Ectomorph", desc: "Naturally lean with a fast metabolism. Muscle gain requires deliberate calorie surplus and progressive overload.", diet: "Higher carbs (50%+), moderate protein (1.8g/kg), frequent meals to support the fast metabolism." },
    meso: { name: "Mesomorph", desc: "Athletic build that responds well to training. Gains muscle relatively easily and maintains moderate body fat.", diet: "Balanced macros (40% carb, 30% protein, 30% fat) with consistent training for continued progress." },
    endo: { name: "Endomorph", desc: "Higher tendency to store fat, often with a broader frame. Fat loss requires more deliberate calorie control.", diet: "Higher protein (2.0g/kg), moderate carbs, prioritise strength training and consistent cardio." },
  };

  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <span className="tag">Quiz</span>
      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, margin: "1rem 0" }}>Body Type Calculator India</h1>
      <p style={{ color: "var(--color-muted)", marginBottom: "1.5rem" }}>Find your body type — ectomorph, mesomorph or endomorph — with Indian diet advice.</p>
      <SavedResultBanner slug="body-type" />
      <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "1.5rem", marginBottom: "2rem" }}>
        {questions.map((item, qi) => (
          <div key={qi} style={{ marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 600, marginBottom: "0.75rem" }}>{qi + 1}. {item.q}</div>
            <div style={{ display: "grid", gap: "0.5rem" }}>
              {item.options.map(([label, type]) => (
                <button key={type} onClick={() => selectAnswer(qi, type)}
                  style={{ textAlign: "left", padding: "0.75rem 1rem", borderRadius: "0.625rem", border: `1.5px solid ${answers[qi] === type ? "var(--color-brand-dark)" : "var(--color-border)"}`, background: answers[qi] === type ? "var(--color-brand-light)" : "#fff", cursor: "pointer", fontSize: "0.9rem" }}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        ))}
        <button className="btn-primary" onClick={calculate}>See My Body Type</button>
        {result && (
          <div style={{ marginTop: "1.5rem" }}>
            <div className="result-card" style={{ marginBottom: "1rem" }}>
              <div className="result-number">{typeInfo[result].name}</div>
            </div>
            <p style={{ marginBottom: "0.75rem" }}>{typeInfo[result].desc}</p>
            <div style={{ background: "var(--color-bg)", borderRadius: "0.75rem", padding: "1rem" }}>
              <strong>Diet Focus:</strong> {typeInfo[result].diet}
            </div>
            <div style={{ marginTop: "1.25rem" }}>
              <SaveResultButton calculator="Body Type" slug="body-type" icon="🧬" headline={typeInfo[result].name} label="Your body type" />
            </div>
          </div>
        )}
      </div>
      <div className="seo-content">
        <RelatedCalculators items={[
          { name: "Macro Calculator", href: "/calculators/macro", icon: "🥗" },
          { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
          { name: "Muscle Gain Rate", href: "/calculators/muscle-gain-rate", icon: "📈" },
          { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
        ]} />
      </div>
    </div>
  );
}
