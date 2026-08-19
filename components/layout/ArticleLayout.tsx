import Link from "next/link";

interface ArticleLayoutProps {
  title: string; category: string; categoryHref: string;
  readTime: string; lastUpdated: string; summary: string;
  children: React.ReactNode;
  relatedArticles?: { title: string; href: string; time: string }[];
  relatedCalculators?: { name: string; href: string; icon: string }[];
  schema: object;
}

export default function ArticleLayout({ title, category, categoryHref, readTime, lastUpdated, summary, children, relatedArticles = [], relatedCalculators = [], schema }: ArticleLayoutProps) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link><span>›</span>
          <Link href={categoryHref} style={{ color: "var(--color-muted)", textDecoration: "none" }}>{category}</Link><span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>{title}</span>
        </div>
      </div>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
        <div style={{ marginBottom: "2rem" }}>
          <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap" }}>
            <span className="tag">{category}</span>
            <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>⏱ {readTime}</span>
            <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>📅 {lastUpdated}</span>
          </div>
          <h1 style={{ fontSize: "clamp(1.6rem,4vw,2.4rem)", lineHeight: 1.2, marginBottom: "1rem" }}>{title}</h1>
          <div style={{ background: "var(--color-brand-light)", border: "1.5px solid #86efac", borderRadius: "0.875rem", padding: "1.125rem 1.375rem", marginBottom: "1.5rem" }}>
            <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--color-brand-dark)", marginBottom: "0.4rem", textTransform: "uppercase", letterSpacing: "0.04em" }}>Quick Answer</div>
            <p style={{ margin: 0, fontSize: "0.975rem", color: "var(--color-dark)", lineHeight: 1.65 }}>{summary}</p>
          </div>
          <div style={{ display: "flex", gap: "0.875rem", alignItems: "center", padding: "0.875rem", background: "var(--color-bg)", borderRadius: "0.75rem" }}>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--color-brand)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0 }}>MG</div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "0.875rem" }}>MuscleGuru Editorial Team</div>
              <div style={{ fontSize: "0.78rem", color: "var(--color-muted)" }}>Reviewed against peer-reviewed research</div>
            </div>
          </div>
        </div>
        <div className="seo-content">{children}</div>
        <div className="disclaimer-box" style={{ marginTop: "2.5rem" }}>
          <strong>⚠️ Medical Disclaimer:</strong> This article is for educational purposes only and does not constitute medical advice. Always consult a qualified healthcare professional before making significant changes to your diet or exercise routine.
        </div>
        {relatedCalculators.length > 0 && (
          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Calculators</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
              {relatedCalculators.map(c => (
                <Link key={c.href} href={c.href} style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.75rem", padding: "0.875rem 1rem", textDecoration: "none", color: "var(--color-dark)", fontWeight: 600, fontSize: "0.875rem" }}>
                  <span style={{ fontSize: "1.4rem" }}>{c.icon}</span>{c.name}
                </Link>
              ))}
            </div>
          </div>
        )}
        {relatedArticles.length > 0 && (
          <div style={{ marginTop: "2.5rem" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Articles</h2>
            <div style={{ display: "grid", gap: "0.75rem" }}>
              {relatedArticles.map(a => (
                <Link key={a.href} href={a.href} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", border: "1.5px solid var(--color-border)", borderRadius: "0.75rem", padding: "1rem 1.25rem", textDecoration: "none", gap: "1rem" }}>
                  <span style={{ fontWeight: 600, fontSize: "0.925rem", color: "var(--color-dark)" }}>{a.title}</span>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-muted)", flexShrink: 0 }}>{a.time} →</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
