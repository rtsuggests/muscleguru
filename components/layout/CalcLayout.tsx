import Link from "next/link";

interface RelatedCalc { name: string; href: string; icon: string; }

interface CalcLayoutProps {
  title: string; subtitle: string; icon: string; breadcrumb: string;
  calculatorSlot: React.ReactNode; seoContent: React.ReactNode;
  related: RelatedCalc[]; schema: object;
}

export default function CalcLayout({ title, subtitle, icon, breadcrumb, calculatorSlot, seoContent, related, schema }: CalcLayoutProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 900, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)", display: "flex", gap: "0.4rem" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link><span>›</span>
          <Link href="/calculators" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Calculators</Link><span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>{breadcrumb}</span>
        </div>
      </div>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem 4rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <div style={{ fontSize: "3rem", marginBottom: "0.75rem" }}>{icon}</div>
          <h1 style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", marginBottom: "0.75rem" }}>{title}</h1>
          <p style={{ fontSize: "1.05rem", color: "var(--color-muted)", maxWidth: 580, margin: "0 auto" }}>{subtitle}</p>
        </div>
        <div style={{ background: "#fff", border: "2px solid var(--color-border)", borderRadius: "1.25rem", padding: "clamp(1.25rem,4vw,2rem)", boxShadow: "0 4px 24px rgba(0,0,0,0.06)", marginBottom: "2.5rem" }}>
          {calculatorSlot}
        </div>
        <div className="disclaimer-box">
          <strong>⚠️ Important Disclaimer:</strong> This calculator provides estimates only for educational purposes. Results should not replace advice from a qualified healthcare provider, registered dietitian, or certified fitness professional.
        </div>
        <div className="seo-content">{seoContent}</div>
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
          <h2 style={{ fontSize: "1.3rem", marginBottom: "1.25rem" }}>Related Calculators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.75rem" }}>
            {related.map(r => (
              <Link key={r.href} href={r.href} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.75rem", padding: "0.875rem 1rem", textDecoration: "none", color: "var(--color-dark)", fontWeight: 600, fontSize: "0.9rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{r.icon}</span>{r.name}
              </Link>
            ))}
          </div>
        </div>
        <div style={{ marginTop: "2.5rem", background: "var(--color-bg)", borderRadius: "0.875rem", padding: "1.25rem 1.5rem", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--color-brand)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, flexShrink: 0 }}>MG</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: "0.95rem" }}>MuscleGuru Editorial Team</div>
            <div style={{ fontSize: "0.82rem", color: "var(--color-muted)", marginTop: "0.2rem" }}>All formulas sourced from published scientific literature and evidence-based guidelines.</div>
          </div>
        </div>
      </div>
    </>
  );
}
