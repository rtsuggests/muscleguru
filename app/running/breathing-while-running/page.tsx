import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Breathe While Running India — Guide",
  description: "Nose vs mouth breathing, rhythmic patterns, side stitch prevention, and breathing in India's heat and pollution.",
  keywords: ["how to breathe while running India", "running breathing technique", "side stitch running"],
};

export default function Page() {
  return (
    <>
      <div style={{ background: "var(--color-bg)", borderBottom: "1px solid var(--color-border)", padding: "0.6rem 1rem" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", fontSize: "0.82rem", color: "var(--color-muted)", display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
          <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link>
          <span>›</span>
          <Link href="/running" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Running</Link>
          <span>›</span>
          <span style={{ color: "var(--color-dark)", fontWeight: 500 }}>Breathing While Running</span>
        </div>
      </div>

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1rem", flexWrap: "wrap" }}>
          <span className="tag">Running</span>
          <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>10 min read</span>
        </div>

        <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
          How to Breathe While Running: Complete Guide for Indian Runners
        </h1>

        <div style={{ background: "var(--color-brand-light)", border: "1.5px solid #86efac", borderRadius: "0.875rem", padding: "1.125rem 1.375rem", marginBottom: "1.5rem" }}>
          <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--color-brand-dark)", marginBottom: "0.4rem", textTransform: "uppercase" }}>Quick Answer</div>
          <p style={{ margin: 0, fontSize: "0.975rem", color: "var(--color-dark)", lineHeight: 1.65 }}>Breathe through both nose and mouth simultaneously. Use a 3:2 rhythmic pattern for easy runs. Breathe from your belly, not your chest. If you cannot speak in short sentences, slow down.</p>
        </div>

        <div className="seo-content">
          <h2>Why Breathing Feels Hard for Beginners</h2>
          <p>Getting breathless quickly is normal for beginners. Running places significant demands on the cardiovascular and respiratory systems. At easy pace, ventilation increases from 6 litres/min at rest to 40-60 litres/min. Slow down until you can hold a conversation — speed comes with fitness over 6-10 weeks.</p>

          <h2>Diaphragmatic Breathing</h2>
          <p>The single most important improvement most beginners can make is shifting from chest breathing to belly (diaphragmatic) breathing. This delivers greater air volume per breath with less muscular effort. Practise lying down first: place a hand on your belly, breathe so the hand rises on inhale.</p>

          <h2>Nose vs Mouth Breathing</h2>
          <p>Nasal breathing filters and warms air but has limited maximum airflow capacity (~35-40 litres/min) — far below the ventilation demand of moderate running. The practical approach: breathe through your nose during warm-up and easy running; use combined nose-and-mouth breathing at moderate-to-hard efforts.</p>

          <h2>The 3:2 Rhythmic Breathing Pattern</h2>
          <p>Inhale for 3 footstrikes, exhale for 2. This creates an alternating pattern that distributes impact stress across both sides of the body during the vulnerable exhalation phase. At faster paces, a 2:1 pattern is more appropriate.</p>

          <h2>Preventing Side Stitches</h2>
          <p>A side stitch is sharp abdominal pain caused by diaphragm irritation. Prevention: avoid eating a large meal within 90-120 minutes before running, warm up gradually, practise diaphragmatic breathing. If a stitch occurs: slow to a walk, exhale forcefully with pursed lips, press your hand into the area.</p>

          <h2>Breathing in Indian Pollution</h2>
          <p>For urban Indian runners, elevated AQI directly affects breathing during exercise. Research shows exercise increases particulate matter deposition in the respiratory tract 4-8 times compared to rest. Run early morning when PM2.5 is typically lowest, and consider treadmill training on AQI 150+ days.</p>

          <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides and Calculators</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
              <Link href="/running/beginners-guide" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Beginner Running Guide</Link>
              <Link href="/running/how-to-run-faster" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>How to Run Faster</Link>
              <Link href="/calculators/heart-rate-zone" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Heart Rate Zones</Link>
              <Link href="/calculators/vo2-max" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>VO2 Max Calculator</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
