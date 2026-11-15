import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: { canonical: "https://muscleguru.in/defence" },
  title: "Defence Exam Physical Standards India",
  description: "Height, weight, chest and running standards for Agniveer, NDA, CDS, SSC GD and CAPF, with training and diet plans to meet them. Free calculators included.",
};

const articles = [
  { title: "Agniveer Height, Weight & Chest Chart + 1.6km Run Training Plan", desc: "Region-wise height and chest standards for Agniveer GD, Technical and Tradesman, plus an 8-week plan to run 1.6km inside the cut-off.", href: "/defence/agniveer-height-weight-chest-chart", icon: "🪖", time: "11 min" },
  { title: "SSC GD, CAPF & State Police Physical Test: Running Standards & 6-Week Plan", desc: "Exact running times for SSC GD, CAPF and state police exams, with a 6-week stamina plan built for Indian summer training conditions.", href: "/defence/ssc-gd-capf-police-physical-test", icon: "🏃", time: "10 min" },
  { title: "NDA & CDS Medical BMI Standards: How They Differ From Civilian BMI", desc: "Why the SSB medical board doesn't use the same BMI cutoffs as a civilian health check, and how to prepare before your medical.", href: "/defence/nda-cds-medical-bmi-standards", icon: "🩺", time: "9 min" },
];

export default function DefenceHubPage() {
  return (
    <div style={{ maxWidth: 1000, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> › Defence Exams
      </div>

      <div style={{ textAlign: "center", marginBottom: "2.5rem", marginTop: "1.5rem" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>🪖</div>
        <h1 style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "0.875rem" }}>Defence Exam Physical Standards</h1>
        <p style={{ color: "var(--color-muted)", fontSize: "1.05rem", maxWidth: 650, margin: "0 auto" }}>
          Height, weight, chest and running standards for Agniveer, NDA, CDS, SSC GD and CAPF — with training and diet plans built to get you inside the cut-off, not just explain it.
        </p>
      </div>

      <div style={{ background: "var(--color-brand-light)", border: "1.5px solid #86efac", borderRadius: "1rem", padding: "1.5rem", marginBottom: "2.5rem", textAlign: "center" }}>
        <div style={{ fontWeight: 700, marginBottom: "0.5rem" }}>🧮 Army Fitness Calculator</div>
        <p style={{ fontSize: "0.9rem", color: "var(--color-body)", marginBottom: "1rem" }}>Check your 1.6km run, push-ups, sit-ups and height/chest against Agniveer standards for your region.</p>
        <Link href="/calculators/army-fitness" style={{ display: "inline-block", background: "var(--color-brand-dark)", color: "#fff", padding: "0.7rem 1.5rem", borderRadius: "0.625rem", textDecoration: "none", fontWeight: 700, fontSize: "0.9rem" }}>
          Try the Calculator →
        </Link>
      </div>

      <div style={{ display: "grid", gap: "1rem", marginBottom: "3rem" }}>
        {articles.map(a => (
          <Link key={a.href} href={a.href} style={{ textDecoration: "none", background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "1rem", padding: "1.5rem", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
            <span style={{ fontSize: "2.25rem", flexShrink: 0 }}>{a.icon}</span>
            <div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.4rem", flexWrap: "wrap" }}>
                <span className="tag">Defence</span>
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
          {[["🪖 Army Fitness Calculator", "/calculators/army-fitness"], ["🏃 Running Pace Calculator", "/calculators/running-pace"], ["⚖️ BMI Calculator", "/calculators/bmi"], ["🔥 TDEE Calculator", "/calculators/tdee"]].map(([name, href]) => (
            <Link key={href} href={href} style={{ background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.875rem", color: "var(--color-dark)" }}>{name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
