import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0b0f19 0%, #030712 100%)",
        color: "#cbd5e1",
        marginTop: "5rem",
        borderTop: "2px solid #10b981",
        position: "relative",
      }}
    >
      {/* Subtle Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 500,
          height: 120,
          background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 1.25rem 2rem", position: "relative", zIndex: 2 }}>
        {/* Top Trust Badges */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            paddingBottom: "3rem",
            marginBottom: "3rem",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div style={{ display: "flex", gap: "0.85rem", alignItems: "center" }}>
            <div style={{ width: 42, height: 42, borderRadius: "0.625rem", background: "rgba(16,185,129,0.15)", border: "1px solid rgba(16,185,129,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
              🔬
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "#fff" }}>ICMR Validated Cutoffs</div>
              <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>Adapted for Indian body fat & insulin levels</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.85rem", alignItems: "center" }}>
            <div style={{ width: 42, height: 42, borderRadius: "0.625rem", background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
              🇮🇳
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "#fff" }}>Indian Diet Calibration</div>
              <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>Veg & non-veg protein sources mapped</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.85rem", alignItems: "center" }}>
            <div style={{ width: 42, height: 42, borderRadius: "0.625rem", background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
              🪖
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "#fff" }}>Official Defence Tests</div>
              <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>NDA, CDS, Agniveer & CAPF physicals</div>
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.85rem", alignItems: "center" }}>
            <div style={{ width: 42, height: 42, borderRadius: "0.625rem", background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>
              🔒
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.92rem", color: "#fff" }}>100% Free & Private</div>
              <div style={{ fontSize: "0.78rem", color: "#94a3b8" }}>Calculations happen securely in your browser</div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="footer-grid" style={{ gap: "2.5rem", marginBottom: "3rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
              <div style={{ width: 34, height: 34, borderRadius: "0.5rem", background: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 900, fontSize: "1rem" }}>
                MG
              </div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.3rem", color: "#fff" }}>
                MuscleGuru<span style={{ color: "#10b981" }}>.in</span>
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", lineHeight: 1.65, color: "#94a3b8", maxWidth: 280 }}>
              India&apos;s leading evidence-based fitness platform. Science-backed calculators, workout splits, and nutrition models designed specifically for Indian lifestyle and genetics.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", marginBottom: "1rem", fontSize: "0.86rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Core Calculators
            </div>
            {[
              ["BMI Calculator (ICMR)", "/calculators/bmi"],
              ["TDEE & Calorie Needs", "/calculators/tdee"],
              ["Daily Protein Intake", "/calculators/protein"],
              ["Macro Split Engine", "/calculators/macro"],
              ["Body Fat Percentage", "/calculators/body-fat"],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: "block", fontSize: "0.86rem", color: "#94a3b8", textDecoration: "none", marginBottom: "0.45rem", transition: "color 0.15s" }}>
                {l}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", marginBottom: "1rem", fontSize: "0.86rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Performance & Health
            </div>
            {[
              ["One Rep Max (1RM)", "/calculators/one-rep-max"],
              ["Army & Agniveer Fitness", "/calculators/army-fitness"],
              ["Running Pace & Race Time", "/calculators/running-pace"],
              ["Vegetarian Protein Guide", "/calculators/vegetarian-protein"],
              ["Diabetes & BMI Screener", "/calculators/diabetes-bmi"],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: "block", fontSize: "0.86rem", color: "#94a3b8", textDecoration: "none", marginBottom: "0.45rem", transition: "color 0.15s" }}>
                {l}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", marginBottom: "1rem", fontSize: "0.86rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Guides & Plans
            </div>
            {[
              ["Running Training Plans", "/running"],
              ["Workout Routines", "/workout-plans"],
              ["Beginners Gym Guide", "/beginner-fitness"],
              ["Exercise Form Tutorials", "/exercise-guides"],
              ["Recovery & Sleep Cycles", "/recovery"],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: "block", fontSize: "0.86rem", color: "#94a3b8", textDecoration: "none", marginBottom: "0.45rem", transition: "color 0.15s" }}>
                {l}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", marginBottom: "1rem", fontSize: "0.86rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Indian Nutrition
            </div>
            {[
              ["Defence Exams Hub", "/defence"],
              ["Nutrition Science", "/nutrition"],
              ["Supplements Tier List", "/supplements"],
              ["Indian Diet Plans", "/indian-diet"],
              ["Women's Fitness & PCOS", "/women"],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: "block", fontSize: "0.86rem", color: "#94a3b8", textDecoration: "none", marginBottom: "0.45rem", transition: "color 0.15s" }}>
                {l}
              </Link>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", marginBottom: "1rem", fontSize: "0.86rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>
              Editorial & Legal
            </div>
            {[
              ["About MuscleGuru", "/about"],
              ["Editorial Policy", "/editorial-policy"],
              ["Medical Disclaimer", "/medical-disclaimer"],
              ["Privacy Policy", "/privacy-policy"],
              ["Contact Editorial Team", "/contact"],
            ].map(([l, h]) => (
              <Link key={h} href={h} style={{ display: "block", fontSize: "0.86rem", color: "#94a3b8", textDecoration: "none", marginBottom: "0.45rem", transition: "color 0.15s" }}>
                {l}
              </Link>
            ))}
          </div>
        </div>

        {/* Medical Disclaimer & Copyright */}
        <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)", paddingTop: "1.75rem", fontSize: "0.8rem", color: "#64748b", lineHeight: 1.6 }}>
          <p style={{ marginBottom: "0.6rem" }}>
            <strong style={{ color: "#94a3b8" }}>Medical Disclaimer:</strong> The content provided on MuscleGuru.in is for educational and informational purposes only. It is not intended to substitute professional medical advice, diagnosis, or treatment. Always consult a qualified medical professional before embarking on any fitness or dietary protocol.
          </p>
          <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
            <span>© {new Date().getFullYear()} MuscleGuru.in — All rights reserved. Built with 3D precision for India.</span>
            <span>Made with 💚 for Indian Fitness Enthusiasts</span>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid { display: grid; grid-template-columns: 1fr; }
        @media (min-width: 640px) { .footer-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 900px) { .footer-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (min-width: 1180px) { .footer-grid { grid-template-columns: 1.3fr repeat(5, 1fr); } }
      `}</style>
    </footer>
  );
}
