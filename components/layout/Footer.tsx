import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-dark)", color: "#d1d5db", marginTop: "4rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1rem 1.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", marginBottom: "2.5rem" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.2rem", color: "#fff", marginBottom: "0.75rem" }}>
              MuscleGuru<span style={{ color: "var(--color-brand)" }}>.in</span>
            </div>
            <p style={{ fontSize: "0.875rem", lineHeight: 1.6, color: "#9ca3af" }}>
              India&apos;s evidence-based fitness education and calculator platform. Science-backed information for every fitness goal.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", marginBottom: "0.75rem", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Calculators</div>
            {[["BMI Calculator", "/calculators/bmi"], ["TDEE Calculator", "/calculators/tdee"], ["Protein Calculator", "/calculators/protein"], ["Macro Calculator", "/calculators/macro"], ["Body Fat Calculator", "/calculators/body-fat"]].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: "block", fontSize: "0.875rem", color: "#9ca3af", textDecoration: "none", marginBottom: "0.35rem" }}>{l}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", marginBottom: "0.75rem", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>More Calculators</div>
            {[["Water Intake", "/calculators/water-intake"], ["One Rep Max", "/calculators/one-rep-max"], ["Calorie Deficit", "/calculators/calorie-deficit"], ["Lean Body Mass", "/calculators/lean-body-mass"], ["FFMI Calculator", "/calculators/ffmi"]].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: "block", fontSize: "0.875rem", color: "#9ca3af", textDecoration: "none", marginBottom: "0.35rem" }}>{l}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", marginBottom: "0.75rem", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Guides</div>
            {[["Beginner Fitness", "/beginner-fitness"], ["Nutrition", "/nutrition"], ["Supplements", "/supplements"], ["Muscle Gain", "/muscle-gain"], ["Weight Loss", "/weight-loss"]].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: "block", fontSize: "0.875rem", color: "#9ca3af", textDecoration: "none", marginBottom: "0.35rem" }}>{l}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", marginBottom: "0.75rem", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>About</div>
            {[["About Us", "/about"], ["Editorial Policy", "/editorial-policy"], ["Medical Disclaimer", "/medical-disclaimer"], ["Privacy Policy", "/privacy-policy"], ["Contact", "/contact"]].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: "block", fontSize: "0.875rem", color: "#9ca3af", textDecoration: "none", marginBottom: "0.35rem" }}>{l}</Link>
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #374151", paddingTop: "1.5rem", fontSize: "0.8rem", color: "#6b7280" }}>
          <p style={{ marginBottom: "0.5rem" }}>
            <strong style={{ color: "#9ca3af" }}>Medical Disclaimer:</strong> The information on MuscleGuru.in is for educational purposes only and is not intended as medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before making changes to your diet or exercise routine.
          </p>
          <p>© {new Date().getFullYear()} MuscleGuru.in — All rights reserved. All calculator results are estimates only.</p>
        </div>
      </div>
    </footer>
  );
}
