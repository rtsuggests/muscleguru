"use client";
import Link from "next/link";

const calculators = [
  { name: "BMI Calculator", desc: "Calculate your Body Mass Index with Indian-adapted cutoffs. Instant results with full health interpretation.", href: "/calculators/bmi", icon: "⚖️", tag: "Most Popular", time: "30 sec" },
  { name: "TDEE Calculator", desc: "Find your Total Daily Energy Expenditure using the gold-standard Mifflin-St Jeor equation.", href: "/calculators/tdee", icon: "🔥", tag: "Essential", time: "1 min" },
  { name: "Protein Intake Calculator", desc: "Get your personalised daily protein target based on body weight, goal, and activity level.", href: "/calculators/protein", icon: "💪", tag: "Popular", time: "30 sec" },
  { name: "Body Fat % Calculator", desc: "Estimate body fat percentage using the validated US Navy circumference method.", href: "/calculators/body-fat", icon: "📊", tag: "Popular", time: "1 min" },
  { name: "Macro Calculator", desc: "Calculate protein, carbs, and fat targets for fat loss, muscle gain, or maintenance.", href: "/calculators/macro", icon: "🥗", tag: "Comprehensive", time: "2 min" },
  { name: "Water Intake Calculator", desc: "Find your daily hydration needs based on weight, activity level, and India's climate.", href: "/calculators/water-intake", icon: "💧", tag: "Quick", time: "30 sec" },
  { name: "One Rep Max Calculator", desc: "Estimate your 1RM for any lift and get a full training percentage table.", href: "/calculators/one-rep-max", icon: "🏋️", tag: "Gym", time: "30 sec" },
  { name: "Calorie Deficit Calculator", desc: "Calculate your daily calorie target for sustainable fat loss with a personalised timeline.", href: "/calculators/calorie-deficit", icon: "📉", tag: "Weight Loss", time: "2 min" },
  { name: "Lean Body Mass Calculator", desc: "Calculate lean mass using three validated formulas: Boer, James, and Hume.", href: "/calculators/lean-body-mass", icon: "🫀", tag: "Advanced", time: "30 sec" },
  { name: "FFMI Calculator", desc: "Measure your Fat-Free Mass Index — the science-based measure of muscularity.", href: "/calculators/ffmi", icon: "🏆", tag: "Advanced", time: "1 min" },
];

export default function CalculatorsPage() {
  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link>
          {" › "}<span style={{ color: "var(--color-dark)", fontWeight: 500 }}>Fitness Calculators</span>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.75rem" }}>Free Fitness Calculators</h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-muted)", maxWidth: 600, margin: "0 auto 1.5rem" }}>
            10 science-backed tools. All free. All formulas explained. No login required.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", fontSize: "0.875rem", color: "var(--color-brand-dark)", fontWeight: 500 }}>
            <span>✅ Instant results</span>
            <span>📱 Mobile-friendly</span>
            <span>🔬 Peer-reviewed formulas</span>
            <span>🇮🇳 Indian context included</span>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {calculators.map((c, i) => (
            <Link key={c.href} href={c.href} style={{ textDecoration: "none", display: "flex", flexDirection: "column", background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "1rem", padding: "1.5rem", transition: "all 0.2s" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: 44, height: 44, borderRadius: "0.625rem", background: "var(--color-brand-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" }}>{c.icon}</div>
                  <span style={{ background: "#f3f4f6", color: "var(--color-muted)", fontSize: "0.75rem", fontWeight: 600, padding: "0.2rem 0.6rem", borderRadius: "9999px" }}>#{i + 1}</span>
                </div>
                <span className="tag" style={{ fontSize: "0.72rem" }}>{c.tag}</span>
              </div>
              <h2 style={{ fontSize: "1.075rem", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-dark)" }}>{c.name}</h2>
              <p style={{ fontSize: "0.875rem", color: "var(--color-muted)", lineHeight: 1.6, flex: 1 }}>{c.desc}</p>
              <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>⏱ {c.time}</span>
                <span style={{ fontSize: "0.85rem", color: "var(--color-brand)", fontWeight: 600 }}>Calculate →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* How to use section */}
        <div style={{ marginTop: "4rem", background: "var(--color-bg)", borderRadius: "1rem", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1.25rem" }}>How to Get the Most From These Calculators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
            {[
              { step: "1", title: "Start With TDEE", desc: "Your Total Daily Energy Expenditure is the foundation. Know your maintenance calories before setting any fat loss or muscle gain targets." },
              { step: "2", title: "Set Your Protein", desc: "Use the Protein Calculator to find your daily protein target. Protein is the most important macro for any physique goal." },
              { step: "3", title: "Build Your Macros", desc: "Use the Macro Calculator to set carb and fat targets around your protein, aligned with your specific goal." },
              { step: "4", title: "Track Progress", desc: "Re-run the BMI, Body Fat, and LBM calculators every 4–6 weeks to track true body composition changes." },
            ].map(s => (
              <div key={s.step} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--color-brand)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>{s.step}</div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.95rem", marginBottom: "0.3rem" }}>{s.title}</div>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: "2rem" }} className="disclaimer-box">
          <strong>⚠️ Important:</strong> All calculators provide estimates only, based on validated scientific formulas. Results are intended for educational purposes and should not replace advice from a qualified healthcare provider, registered dietitian, or certified fitness professional. If you have any medical condition, are pregnant, or have special health requirements, please consult a professional before making dietary or exercise changes.
        </div>
      </div>
    </>
  );
}
