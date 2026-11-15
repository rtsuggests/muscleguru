import type { Metadata } from "next";
import Link from "next/link";
import Hero3DCanvas from "@/components/3d/Hero3DCanvas";
import TiltCard from "@/components/3d/TiltCard";
import MuscleExplorer3D from "@/components/3d/MuscleExplorer3D";
import MacroDial3D from "@/components/3d/MacroDial3D";

export const metadata: Metadata = {
  title: "MuscleGuru.in — India's Evidence-Based Fitness Platform",
  description:
    "Free science-backed fitness calculators, 3D anatomical workout tools, and nutrition guides for Indian adults — BMI with ICMR cutoffs, TDEE, protein and macros.",
  alternates: {
    canonical: "https://muscleguru.in",
  },
};

const featuredCalcs = [
  { name: "BMI Calculator", desc: "Indian-adapted cutoffs (ICMR: 23 kg/m²)", href: "/calculators/bmi", icon: "⚖️", tag: "ICMR Standard", color: "#10b981" },
  { name: "TDEE Calculator", desc: "Find daily maintenance & deficit calories", href: "/calculators/tdee", icon: "🔥", tag: "Most Popular", color: "#f59e0b" },
  { name: "Protein Calculator", desc: "Daily protein target for Indian adults", href: "/calculators/protein", icon: "💪", tag: "Essential", color: "#06b6d4" },
  { name: "Army & Defence", desc: "NDA, CDS, Agniveer & CAPF physical tests", href: "/calculators/army-fitness", icon: "🪖", tag: "Defence", color: "#84cc16" },
  { name: "Running Pace", desc: "Pace, race time, 5K & 10K splits", href: "/calculators/running-pace", icon: "🏃", tag: "Cardio", color: "#3b82f6" },
  { name: "Calorie Deficit", desc: "Safe fat loss rate without metabolic drop", href: "/calculators/calorie-deficit", icon: "📉", tag: "Fat Loss", color: "#ec4899" },
  { name: "Vegetarian Protein", desc: "Protein from Indian veg staple foods", href: "/calculators/vegetarian-protein", icon: "🌱", tag: "Indian Diet", color: "#10b981" },
  { name: "Diabetes & BMI", desc: "Type 2 diabetes risk cutoff for Indians", href: "/calculators/diabetes-bmi", icon: "🩸", tag: "Health", color: "#ef4444" },
  { name: "IF Fasting Windows", desc: "16:8, 18:6, and 20:4 eating schedules", href: "/calculators/intermittent-fasting", icon: "⏰", tag: "Fasting", color: "#8b5cf6" },
  { name: "Muscle Gain Rate", desc: "Realistic monthly hypertrophy projections", href: "/calculators/muscle-gain-rate", icon: "📈", tag: "Hypertrophy", color: "#14b8a6" },
  { name: "One Rep Max (1RM)", desc: "Bench, squat, and deadlift maximums", href: "/calculators/one-rep-max", icon: "🏋️", tag: "Strength", color: "#f97316" },
  { name: "Body Fat %", desc: "Navy formula & anthropometric metrics", href: "/calculators/body-fat", icon: "📊", tag: "Composition", color: "#6366f1" },
];

const sections = [
  { title: "Running Mastery", icon: "🏃", desc: "10K plans, half marathon pacing, breathing techniques, speed training", href: "/running", tag: "Trending", gradient: "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)" },
  { title: "Workout Plans", icon: "🏋️", desc: "3-day full body, Push-Pull-Legs (PPL), HIIT, home bodyweight routines", href: "/workout-plans", tag: "Hypertrophy", gradient: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" },
  { title: "Indian Diet & Macros", icon: "🥗", desc: "High protein breakfast, hostel meals, vegetarian protein sources", href: "/indian-diet", tag: "Diet", gradient: "linear-gradient(135deg, #10b981 0%, #047857 100%)" },
  { title: "Women's Fitness", icon: "💪", desc: "Strength training myths, PCOS exercise guidance, cycle nutrition", href: "/women", tag: "Women", gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)" },
  { title: "Exercise Execution", icon: "📋", desc: "Step-by-step biomechanics for squat, bench press, deadlift, pull-ups", href: "/exercise-guides", tag: "Form", gradient: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)" },
  { title: "Recovery & Sleep", icon: "😴", desc: "Circadian sleep cycles, rest days, foam rolling, overtraining prevention", href: "/recovery", tag: "Recovery", gradient: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)" },
];

export default function HomePage() {
  return (
    <>
      {/* 3D Immersive Hero Section */}
      <section
        style={{
          background: "linear-gradient(180deg, #0b0f19 0%, #0f172a 60%, #111827 100%)",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
          padding: "clamp(3rem, 6vw, 5rem) 1.25rem 4rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Ambient Radial Lights */}
        <div
          style={{
            position: "absolute",
            top: "-15%",
            left: "20%",
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "5%",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Left Hero Column: Headline & Action Buttons */}
          <div>
            {/* Pill Tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(16, 185, 129, 0.12)",
                border: "1px solid rgba(16, 185, 129, 0.35)",
                borderRadius: "9999px",
                padding: "0.4rem 1.1rem",
                fontSize: "0.84rem",
                fontWeight: 700,
                color: "#34d399",
                marginBottom: "1.5rem",
                boxShadow: "0 4px 15px rgba(16, 185, 129, 0.15)",
              }}
            >
              <span>🇮🇳</span> Built specifically for Indian adults & lifestyle
            </div>

            {/* Display Headline */}
            <h1
              style={{
                fontSize: "clamp(2.4rem, 4.8vw, 3.8rem)",
                lineHeight: 1.12,
                marginBottom: "1.25rem",
                fontFamily: "var(--font-display)",
                color: "#ffffff",
                letterSpacing: "-0.03em",
              }}
            >
              Evidence-Based Fitness for India,{" "}
              <span className="gradient-text-emerald">Engineered in 3D</span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: "clamp(1.05rem, 1.8vw, 1.2rem)",
                color: "#94a3b8",
                marginBottom: "2.25rem",
                maxWidth: 580,
                lineHeight: 1.65,
              }}
            >
              Free science-backed calculators, workout plans, and nutrition guides — adapted for Indian genetics,
              vegetarian protein sources, ICMR health cutoffs, and climate.
            </p>

            {/* Action CTA Buttons */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <Link
                href="/calculators"
                style={{
                  padding: "0.95rem 2rem",
                  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                  color: "#fff",
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                  fontWeight: 800,
                  fontSize: "1rem",
                  fontFamily: "var(--font-display)",
                  boxShadow: "0 8px 25px -4px rgba(16,185,129,0.5)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "transform 0.15s, box-shadow 0.15s",
                }}
              >
                <span>Explore 27+ Calculators</span>
                <span>→</span>
              </Link>
              <Link
                href="#muscle-explorer"
                style={{
                  padding: "0.95rem 1.8rem",
                  background: "rgba(255, 255, 255, 0.07)",
                  color: "#f8fafc",
                  border: "1.5px solid rgba(255, 255, 255, 0.18)",
                  borderRadius: "0.75rem",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "1rem",
                  fontFamily: "var(--font-display)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backdropFilter: "blur(10px)",
                  transition: "background 0.2s, border-color 0.2s",
                }}
              >
                <span>🧬 3D Anatomy Map</span>
              </Link>
            </div>

            {/* Quick Stat Counter Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                paddingTop: "1.75rem",
              }}
            >
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: 900, color: "#10b981", lineHeight: 1 }}>27+</div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: "0.25rem", fontWeight: 600 }}>Scientific Calculators</div>
              </div>
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: 900, color: "#06b6d4", lineHeight: 1 }}>23 kg/m²</div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: "0.25rem", fontWeight: 600 }}>Indian BMI Cutoff</div>
              </div>
              <div>
                <div style={{ fontSize: "1.75rem", fontWeight: 900, color: "#f59e0b", lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: "0.78rem", color: "#94a3b8", marginTop: "0.25rem", fontWeight: 600 }}>Free & Ad-Free</div>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Real-Time Interactive 3D Canvas */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Hero3DCanvas />
          </div>
        </div>
      </section>

      {/* Floating Trust Pillars Bar */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid var(--color-border)",
          padding: "1.25rem 1rem",
          boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            gap: "clamp(1rem, 3vw, 2.5rem)",
            flexWrap: "wrap",
            fontSize: "0.88rem",
            color: "var(--color-dark)",
            fontWeight: 600,
          }}
        >
          {[
            { icon: "🔬", text: "Peer-reviewed formulas" },
            { icon: "🇮🇳", text: "Indian-adapted ICMR cutoffs" },
            { icon: "🥗", text: "Staple Indian Diet mapped" },
            { icon: "🪖", text: "Defence & Police exam standards" },
            { icon: "⚡", text: "Instant 100% private results" },
          ].map((item, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1260, margin: "0 auto", padding: "4rem 1.25rem 6rem" }}>
        {/* Featured 3D Interactive Macro Engine Section */}
        <div style={{ marginBottom: "5rem" }}>
          <MacroDial3D />
        </div>

        {/* Popular Scientific Calculators Section */}
        <div style={{ marginBottom: "5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "2rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-brand-dark)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>
                Precision Calculations
              </div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.25rem)", margin: 0, fontWeight: 800 }}>
                Popular Fitness & Body Calculators
              </h2>
            </div>
            <Link
              href="/calculators"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                color: "var(--color-brand-dark)",
                fontWeight: 700,
                textDecoration: "none",
                fontSize: "0.95rem",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                background: "var(--color-brand-light)",
                border: "1px solid #86efac",
              }}
            >
              View all 27 calculators →
            </Link>
          </div>

          {/* 3D Tilt Cards Grid for Calculators */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {featuredCalcs.map((c) => (
              <TiltCard key={c.href} maxTilt={10} scale={1.03}>
                <Link
                  href={c.href}
                  className="card-hover-border"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    background: "#fff",
                    border: "1.5px solid var(--color-border)",
                    borderRadius: "1.25rem",
                    padding: "1.5rem",
                    textDecoration: "none",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: "0.85rem",
                        background: `${c.color}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.8rem",
                      }}
                    >
                      {c.icon}
                    </div>
                    {c.tag && (
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          padding: "0.2rem 0.55rem",
                          borderRadius: "9999px",
                          background: `${c.color}15`,
                          color: c.color,
                        }}
                      >
                        {c.tag}
                      </span>
                    )}
                  </div>
                  <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--color-dark)", marginBottom: "0.35rem" }}>
                    {c.name}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-muted)", lineHeight: 1.5, flex: 1, marginBottom: "1rem" }}>
                    {c.desc}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.84rem", fontWeight: 700, color: c.color }}>
                    <span>Launch Calculator</span>
                    <span>→</span>
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* 3D Interactive Muscle Anatomy Explorer Section */}
        <div id="muscle-explorer" style={{ marginBottom: "5rem", scrollMarginTop: "90px" }}>
          <MuscleExplorer3D />
        </div>

        {/* Why Indian Fitness is Scientifically Different */}
        <div style={{ marginBottom: "5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-brand-dark)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>
              Medical Consensus
            </div>
            <h2 style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.25rem)", fontWeight: 800, margin: "0 0 0.5rem" }}>
              Why Indian Bodies Require Tailored Fitness Metrics
            </h2>
            <p style={{ color: "var(--color-muted)", maxWidth: 650, margin: "0 auto", fontSize: "0.95rem" }}>
              Western formulas and dietary standards fail Indian adults due to genetic, metabolic, and traditional dietary differences.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            <TiltCard maxTilt={8}>
              <div
                style={{
                  background: "#fff",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: "1.25rem",
                  padding: "1.75rem",
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🧬</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                  The &ldquo;Thin-Fat&rdquo; Indian Phenotype
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-muted)", lineHeight: 1.65 }}>
                  Research published by the WHO and ICMR shows South Asians develop visceral fat (around the liver and pancreas) at lower body weights. While Western cutoffs declare overweight at BMI 25, Indian adults face elevated diabetes and heart risks starting at <strong>BMI 23 kg/m²</strong>.
                </p>
                <Link href="/weight-loss/why-indians-need-lower-bmi-cutoff" style={{ color: "var(--color-brand-dark)", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", display: "inline-block", marginTop: "0.5rem" }}>
                  Read ICMR BMI Study →
                </Link>
              </div>
            </TiltCard>

            <TiltCard maxTilt={8}>
              <div
                style={{
                  background: "#fff",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: "1.25rem",
                  padding: "1.75rem",
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🥗</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                  The Vegetarian Protein Gap
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-muted)", lineHeight: 1.65 }}>
                  The average Indian diet is 70% to 80% carbohydrate-heavy. Getting 1.6g to 2.2g of protein per kg of bodyweight requires strategic food pairing — combining dal (high lysine) with rice or roti (high methionine) and utilizing paneer, soya chunks, and whey.
                </p>
                <Link href="/nutrition/indian-protein-sources" style={{ color: "var(--color-brand-dark)", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", display: "inline-block", marginTop: "0.5rem" }}>
                  Explore Indian Protein Charts →
                </Link>
              </div>
            </TiltCard>

            <TiltCard maxTilt={8}>
              <div
                style={{
                  background: "#fff",
                  border: "1.5px solid #e2e8f0",
                  borderRadius: "1.25rem",
                  padding: "1.75rem",
                  height: "100%",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>🪖</div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 800, marginBottom: "0.5rem" }}>
                  Rigorous Indian Defence Physicals
                </h3>
                <p style={{ fontSize: "0.88rem", color: "var(--color-muted)", lineHeight: 1.65 }}>
                  Indian Armed Forces tests (Agniveer Rally, NDA, CDS, CAPF) require extreme 1.6 km speed runs (5 min 30 sec), strict minimum chest expansion (5 cm), and precise height-to-weight ratios that standard gym programs never prepare you for.
                </p>
                <Link href="/defence" style={{ color: "var(--color-brand-dark)", fontWeight: 700, fontSize: "0.85rem", textDecoration: "none", display: "inline-block", marginTop: "0.5rem" }}>
                  Check Defence Standards Hub →
                </Link>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Guides & Training Plans Section */}
        <div style={{ marginBottom: "5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-brand-dark)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.3rem" }}>
                Structured Protocols
              </div>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.2vw, 2.25rem)", fontWeight: 800, margin: 0 }}>
                Comprehensive Guides & Workout Plans
              </h2>
            </div>
            <Link href="/workout-plans" style={{ color: "var(--color-brand-dark)", fontWeight: 700, textDecoration: "none", fontSize: "0.95rem" }}>
              Explore All Plans →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.25rem" }}>
            {sections.map((s) => (
              <TiltCard key={s.href} maxTilt={8} scale={1.02}>
                <Link
                  href={s.href}
                  className="card-hover-border"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1.25rem",
                    background: "#fff",
                    border: "1.5px solid var(--color-border)",
                    borderRadius: "1.25rem",
                    padding: "1.75rem",
                    textDecoration: "none",
                    height: "100%",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                  }}
                >
                  <div
                    style={{
                      width: 54,
                      height: 54,
                      borderRadius: "1rem",
                      background: "#f1f5f9",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                      flexShrink: 0,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.35rem" }}>
                      <span style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--color-dark)" }}>{s.title}</span>
                      {s.tag && (
                        <span
                          style={{
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            padding: "0.15rem 0.5rem",
                            borderRadius: "9999px",
                            background: "rgba(16,185,129,0.12)",
                            color: "var(--color-brand-dark)",
                          }}
                        >
                          {s.tag}
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: "0.86rem", color: "var(--color-muted)", lineHeight: 1.55 }}>{s.desc}</div>
                  </div>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Why MuscleGuru Banner with Sleek Dark Backdrop */}
        <div
          style={{
            background: "linear-gradient(135deg, #0b0f19 0%, #0f172a 100%)",
            borderRadius: "1.75rem",
            padding: "clamp(2rem, 5vw, 3.5rem)",
            color: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 25px 60px -15px rgba(0,0,0,0.4)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle Ambient Light */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: 350,
              height: 350,
              background: "radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)",
              filter: "blur(50px)",
              pointerEvents: "none",
            }}
          />

          <div style={{ maxWidth: 750, margin: "0 auto", textAlign: "center", marginBottom: "3rem", position: "relative", zIndex: 2 }}>
            <h2 style={{ fontSize: "clamp(1.85rem, 3.8vw, 2.5rem)", fontWeight: 900, color: "#fff", marginBottom: "0.85rem" }}>
              Engineered with Integrity for 1.4 Billion Fitness Journeys
            </h2>
            <p style={{ color: "#94a3b8", fontSize: "1rem", lineHeight: 1.65 }}>
              Most fitness media is generic Western copy-paste. MuscleGuru is built from the ground up to solve Indian fitness challenges: high diabetes risk, protein deficiency, vegetarian meal planning, and defence exam physicals.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2rem",
              position: "relative",
              zIndex: 2,
            }}
          >
            {[
              {
                icon: "🇮🇳",
                title: "India-First Calibration",
                desc: "ICMR 2024 cutoff criteria, Indian food macronutrient database, and local climate hydration metrics.",
              },
              {
                icon: "🔬",
                title: "Strict Evidence-Based",
                desc: "Every statement cited with peer-reviewed literature from PubMed, ISSN, WHO, and ICMR.",
              },
              {
                icon: "🆓",
                title: "Always 100% Free",
                desc: "All 27 calculators, workout routines, and guides are completely free with zero subscription paywalls.",
              },
              {
                icon: "📱",
                title: "Lighting-Fast & Mobile First",
                desc: "Engineered in 3D WebGL for 60 FPS performance even on budget smartphones with low network bandwidth.",
              },
            ].map((p, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "1rem",
                  padding: "1.5rem",
                  transition: "background 0.2s",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.6rem" }}>{p.icon}</div>
                <div style={{ fontWeight: 800, fontSize: "1.05rem", color: "#f8fafc", marginBottom: "0.35rem" }}>
                  {p.title}
                </div>
                <div style={{ fontSize: "0.84rem", color: "#94a3b8", lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
