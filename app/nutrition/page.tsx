import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nutrition Guides India — Protein & Meal Plans",
  description: "Evidence-based nutrition guides for Indian adults. Protein sources, meal plans, and dietary advice based on ICMR guidelines.",
};

const articles = [
  { title: "Best Indian Protein Sources", desc: "A complete, ranked list of the highest-protein Indian foods — vegetarian and non-vegetarian.", href: "/nutrition/indian-protein-sources", time: "9 min" },
  { title: "How Much Protein Do You Actually Need?", desc: "Evidence-based protein targets for different goals — muscle gain, fat loss, and general health.", href: "/nutrition/how-much-protein", time: "8 min" },
  { title: "Paneer Protein Guide", desc: "Full nutritional breakdown of paneer and how to use it to hit your daily protein target.", href: "/nutrition/paneer-protein-guide", time: "6 min" },
  { title: "Egg Protein Guide", desc: "Whole egg vs egg white — protein content, nutrition, and how many eggs you should eat.", href: "/nutrition/egg-protein-guide", time: "6 min" },
  { title: "7-Day Indian Meal Plan", desc: "A complete week of high-protein Indian meals for muscle gain or fat loss.", href: "/nutrition/7-day-meal-plan", time: "10 min" },
];

export default function NutritionPage() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> › Nutrition
      </div>
      <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginTop: "1.5rem", marginBottom: "0.75rem" }}>Nutrition Guides for India</h1>
      <p style={{ color: "var(--color-muted)", fontSize: "1.05rem", marginBottom: "2.5rem", maxWidth: 600 }}>
        Practical, evidence-based nutrition using foods actually available in Indian kitchens — no imported superfoods required.
      </p>
      <div style={{ display: "grid", gap: "1rem" }}>
        {articles.map(a => (
          <Link key={a.href} href={a.href} style={{ textDecoration: "none", background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.875rem", padding: "1.5rem", display: "block" }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <span className="tag">Nutrition</span>
              <span style={{ fontSize: "0.8rem", color: "var(--color-muted)" }}>{a.time} read</span>
            </div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-dark)", marginBottom: "0.5rem" }}>{a.title}</h2>
            <p style={{ fontSize: "0.9rem", color: "var(--color-muted)", margin: 0, lineHeight: 1.6 }}>{a.desc}</p>
            <div style={{ marginTop: "0.875rem", fontSize: "0.85rem", color: "var(--color-brand-dark)", fontWeight: 600 }}>Read guide →</div>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: "3rem", background: "var(--color-bg)", borderRadius: "1rem", padding: "1.75rem" }}>
        <h2 style={{ fontSize: "1.2rem", marginBottom: "0.875rem" }}>Nutrition Calculators</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
          {[["💪 Protein Calculator", "/calculators/protein"], ["🌱 Vegetarian Protein", "/calculators/vegetarian-protein"], ["🥗 Macro Calculator", "/calculators/macro"], ["🔥 TDEE Calculator", "/calculators/tdee"]].map(([name, href]) => (
            <Link key={href} href={href} style={{ background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem", color: "var(--color-dark)" }}>{name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
