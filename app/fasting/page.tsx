import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Festival Fasting & Fitness India — Navratri, Karva Chauth",
  description: "Evidence-based fitness and nutrition guides for Indian festival fasting — Navratri, Karva Chauth, Ekadashi, and more. Stay strong while observing your fast.",
};

const articles = [
  { title: "Navratri Diet Plan: 9-Day Fitness-Focused Fasting Guide", desc: "Complete day-by-day Navratri fasting nutrition plan that supports your fitness goals — not just tradition.", href: "/fasting/navratri-diet-plan", icon: "🪔", time: "10 min" },
  { title: "Karva Chauth: Safe Fasting for Fitness-Focused Women", desc: "How to prepare for and safely complete a waterless fast — sargi nutrition, hydration strategy, and exercise timing.", href: "/fasting/karva-chauth-fasting-guide", icon: "🌙", time: "8 min" },
];

export default function FastingHubPage() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> › Festival Fasting
      </div>

      <div style={{ textAlign: "center", marginBottom: "2.5rem", marginTop: "1.5rem" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🪔</div>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.875rem" }}>Festival Fasting & Fitness</h1>
        <p style={{ color: "var(--color-muted)", fontSize: "1.05rem", maxWidth: 600, margin: "0 auto" }}>
          Evidence-based guidance for staying strong, energised, and safe during Navratri, Karva Chauth, Ekadashi, and other Indian fasting traditions — without abandoning your fitness goals.
        </p>
      </div>

      <div style={{ background: "var(--color-brand-light)", border: "1.5px solid #86efac", borderRadius: "1rem", padding: "1.5rem", marginBottom: "2.5rem", textAlign: "center" }}>
        <div style={{ fontWeight: 700, marginBottom: "0.5rem" }}>🧮 New: Fasting-Safe Nutrition Calculator</div>
        <p style={{ fontSize: "0.9rem", color: "var(--color-body)", marginBottom: "1rem" }}>Get your calorie and protein target for any fasting day, with a full list of permitted foods.</p>
        <Link href="/calculators/fasting-nutrition" style={{ display: "inline-block", background: "var(--color-brand-dark)", color: "#fff", padding: "0.7rem 1.5rem", borderRadius: "0.625rem", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>
          Try the Calculator →
        </Link>
      </div>

      <div style={{ display: "grid", gap: "1rem", marginBottom: "3rem" }}>
        {articles.map(a => (
          <Link key={a.href} href={a.href} style={{ textDecoration: "none", background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "1rem", padding: "1.5rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
            <span style={{ fontSize: "2.25rem", flexShrink: 0 }}>{a.icon}</span>
            <div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                <span className="tag">Festival Fasting</span>
                <span style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>{a.time} read</span>
              </div>
              <h2 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "0.5rem" }}>{a.title}</h2>
              <p style={{ fontSize: "0.9rem", color: "var(--color-muted)", margin: 0, lineHeight: 1.6 }}>{a.desc}</p>
              <div style={{ marginTop: "0.75rem", fontSize: "0.85rem", color: "var(--color-brand-dark)", fontWeight: 600 }}>Read guide →</div>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ background: "var(--color-bg)", borderRadius: "1rem", padding: "1.75rem" }}>
        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.875rem" }}>Related Calculators</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
          {[["🪔 Fasting Nutrition Calc", "/calculators/fasting-nutrition"], ["⏰ Intermittent Fasting", "/calculators/intermittent-fasting"], ["🔥 TDEE Calculator", "/calculators/tdee"], ["💪 Protein Calculator", "/calculators/protein"]].map(([name, href]) => (
            <Link key={href} href={href} style={{ background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem", color: "var(--color-dark)" }}>{name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
