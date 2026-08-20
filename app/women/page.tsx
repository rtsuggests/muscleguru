import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Women's Fitness India — Strength & Health Guides",
  description: "Evidence-based women's fitness guides for Indian women. Strength training, PCOS and exercise, fitness during periods, protein needs, and more.",
  keywords: ["women fitness India", "strength training women India", "PCOS exercise India", "women workout India"],
};

const articles = [
  { title: "Will Lifting Make Women Bulky?", desc: "The science behind why women cannot accidentally become bulky from weight training.", href: "/women/will-lifting-make-women-bulky", icon: "💪" },
  { title: "Strength Training Guide for Women", desc: "Complete beginner strength training programme for Indian women.", href: "/women/strength-training-guide", icon: "🏋️" },
  { title: "Protein Needs for Women India", desc: "How much protein Indian women need for fitness, muscle gain, and health.", href: "/women/protein-needs-women", icon: "🥗" },
  { title: "Fitness During Periods", desc: "How to train during your menstrual cycle — what to do and what to avoid.", href: "/women/fitness-during-periods", icon: "📅" },
  { title: "PCOS and Exercise Guide", desc: "Evidence-based exercise protocols specifically for women with PCOS.", href: "/women/pcos-exercise-guide", icon: "🏃" },
];

export default function WomenPage() {
  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "3rem 1rem 5rem" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", marginBottom: "0.75rem" }}>Women&apos;s Fitness India</h1>
        <p style={{ fontSize: "1.05rem", color: "var(--color-muted)", maxWidth: 580, margin: "0 auto" }}>
          Evidence-based fitness guides written specifically for Indian women — covering strength training, nutrition, hormonal health, and more.
        </p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1rem", marginBottom: "3rem" }}>
        {articles.map(a => (
          <Link key={a.href} href={a.href} style={{ display: "flex", flexDirection: "column", gap: "0.75rem", background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "1rem", padding: "1.5rem", textDecoration: "none" }}>
            <span style={{ fontSize: "2rem" }}>{a.icon}</span>
            <span style={{ fontWeight: 700, fontSize: "1rem", color: "var(--color-dark)" }}>{a.title}</span>
            <span style={{ fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.6 }}>{a.desc}</span>
            <span style={{ color: "var(--color-brand-dark)", fontWeight: 600, fontSize: "0.875rem", marginTop: "auto" }}>Read guide →</span>
          </Link>
        ))}
      </div>
      <div style={{ background: "var(--color-bg)", borderRadius: "1rem", padding: "2rem" }}>
        <h2 style={{ marginBottom: "1.25rem" }}>Useful Calculators for Women</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
          {[["⚖️ BMI Calculator", "/calculators/bmi"], ["🤰 Pregnancy Weight Gain", "/calculators/pregnancy-weight-gain"], ["💪 Protein Calculator", "/calculators/protein"], ["🔥 TDEE Calculator", "/calculators/tdee"], ["📐 Waist-Hip Ratio", "/calculators/waist-hip-ratio"], ["😴 Sleep Calculator", "/calculators/sleep"]].map(([name, href]) => (
            <Link key={href} href={href} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.75rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem", color: "var(--color-dark)" }}>{name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
