import Link from "next/link";
import TiltCard from "@/components/3d/TiltCard";

interface RelatedCalc {
  name: string;
  href: string;
  icon: string;
}

interface CalcLayoutProps {
  title: string;
  subtitle: string;
  icon: string;
  breadcrumb: string;
  calculatorSlot: React.ReactNode;
  seoContent: React.ReactNode;
  related: RelatedCalc[];
  schema: object;
}

const TOP_CALC_TABS = [
  { name: "BMI", href: "/calculators/bmi", icon: "⚖️" },
  { name: "TDEE", href: "/calculators/tdee", icon: "🔥" },
  { name: "Protein", href: "/calculators/protein", icon: "💪" },
  { name: "Army Fitness", href: "/calculators/army-fitness", icon: "🪖" },
  { name: "Pace", href: "/calculators/running-pace", icon: "🏃" },
  { name: "1-Rep Max", href: "/calculators/one-rep-max", icon: "🏋️" },
  { name: "Deficit", href: "/calculators/calorie-deficit", icon: "📉" },
  { name: "Body Fat", href: "/calculators/body-fat", icon: "📊" },
];

export default function CalcLayout({
  title,
  subtitle,
  icon,
  breadcrumb,
  calculatorSlot,
  seoContent,
  related,
  schema,
}: CalcLayoutProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Breadcrumbs Bar */}
      <div style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0", padding: "0.65rem 1rem" }}>
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            fontSize: "0.84rem",
            color: "var(--color-muted)",
            display: "flex",
            alignItems: "center",
            gap: "0.45rem",
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none", fontWeight: 500 }}>
            Home
          </Link>
          <span>›</span>
          <Link href="/calculators" style={{ color: "var(--color-muted)", textDecoration: "none", fontWeight: 500 }}>
            Calculators
          </Link>
          <span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 700 }}>{breadcrumb}</span>
        </div>
      </div>

      {/* Quick Calculator Switcher Tabs */}
      <div
        style={{
          background: "#fff",
          borderBottom: "1px solid #f1f5f9",
          padding: "0.6rem 1rem",
          overflowX: "auto",
        }}
      >
        <div
          style={{
            maxWidth: 960,
            margin: "0 auto",
            display: "flex",
            gap: "0.45rem",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "0.74rem", color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginRight: "0.25rem", whiteSpace: "nowrap" }}>
            Quick Tools:
          </span>
          {TOP_CALC_TABS.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.3rem",
                padding: "0.3rem 0.65rem",
                borderRadius: "9999px",
                background: "#f1f5f9",
                border: "1px solid #e2e8f0",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#334155",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "all 0.15s",
              }}
            >
              <span>{tab.icon}</span>
              <span>{tab.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Container */}
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "2.5rem 1.25rem 5rem" }}>
        {/* Title Header with 3D Icon Badge */}
        <div style={{ textAlign: "center", marginBottom: "2.75rem" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "1.25rem",
              background: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
              border: "1.5px solid #86efac",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.75rem",
              marginBottom: "1rem",
              boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.2)",
            }}
          >
            {icon}
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 4.2vw, 2.75rem)",
              fontWeight: 800,
              color: "var(--color-dark)",
              marginBottom: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--color-muted)",
              maxWidth: 620,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Interactive Calculator Workspace Card */}
        <div
          style={{
            background: "#fff",
            border: "1.5px solid #e2e8f0",
            borderRadius: "1.5rem",
            padding: "clamp(1.5rem, 4.5vw, 2.5rem)",
            boxShadow: "0 20px 45px -10px rgba(0, 0, 0, 0.07), 0 0 0 1px rgba(0, 0, 0, 0.02)",
            marginBottom: "2.5rem",
            position: "relative",
          }}
        >
          {calculatorSlot}
        </div>

        {/* Medical & Scientific Disclaimer */}
        <div className="disclaimer-box">
          <strong>⚠️ Evidence-Based Health Disclaimer:</strong> This calculator provides evidence-based estimates based on ICMR and peer-reviewed scientific literature. Results are for educational and self-quantification purposes only and should not replace consultation with a qualified medical professional, registered sports dietitian, or certified strength coach.
        </div>

        {/* Scientific In-depth Explanations */}
        <div className="seo-content">{seoContent}</div>

        {/* Related Calculators */}
        <div style={{ marginTop: "4rem", paddingTop: "2.5rem", borderTop: "1.5px solid var(--color-border)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.4rem", margin: 0, fontWeight: 800 }}>Related Scientific Calculators</h2>
            <Link href="/calculators" style={{ color: "var(--color-brand-dark)", fontWeight: 700, fontSize: "0.88rem", textDecoration: "none" }}>
              View all 27 →
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1rem" }}>
            {related.map((r) => (
              <TiltCard key={r.href} maxTilt={8} scale={1.02}>
                <Link
                  href={r.href}
                  className="card-hover-border"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    background: "#fff",
                    border: "1.5px solid #e2e8f0",
                    borderRadius: "1rem",
                    padding: "1rem 1.15rem",
                    textDecoration: "none",
                    color: "var(--color-dark)",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.03)",
                  }}
                >
                  <span style={{ fontSize: "1.6rem" }}>{r.icon}</span>
                  <span>{r.name}</span>
                </Link>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Editorial Team Credentials Card */}
        <div
          style={{
            marginTop: "3rem",
            background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
            border: "1px solid #e2e8f0",
            borderRadius: "1rem",
            padding: "1.25rem 1.75rem",
            display: "flex",
            gap: "1.25rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 50,
              height: 50,
              borderRadius: "0.75rem",
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 900,
              fontSize: "1.1rem",
              flexShrink: 0,
              boxShadow: "0 4px 12px rgba(16,185,129,0.3)",
            }}
          >
            MG
          </div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "1rem", color: "var(--color-dark)" }}>
              MuscleGuru Scientific & Medical Editorial Team
            </div>
            <div style={{ fontSize: "0.85rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>
              Formulas directly implemented from Indian Council of Medical Research (ICMR-NIN), WHO South-Asia Guidelines, and International Society of Sports Nutrition (ISSN).
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
