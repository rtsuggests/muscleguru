import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Karva Chauth: Safe Fasting Guide for Fitness-Focused Women",
  description: "How to safely observe a Karva Chauth nirjala fast while staying fit. Sargi nutrition planning, hydration strategy, and exercise timing tips.",
  keywords: ["karva chauth fasting tips", "karva chauth diet", "sargi meal plan", "karva chauth exercise safe fasting"],
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> ›{" "}
        <Link href="/fasting" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Festival Fasting</Link> › Karva Chauth Guide
      </div>

      <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span className="tag">Festival Fasting</span>
        <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>8 min read</span>
      </div>

      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
        Karva Chauth: A Safe Fasting Guide for Fitness-Focused Women
      </h1>

      <div style={{ background: "var(--color-brand-light)", border: "1.5px solid #86efac", borderRadius: "0.875rem", padding: "1.125rem 1.375rem", marginBottom: "1.5rem" }}>
        <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--color-brand-dark)", marginBottom: "0.4rem", textTransform: "uppercase" }}>Quick Answer</div>
        <p style={{ margin: 0, fontSize: "0.975rem", color: "var(--color-dark)", lineHeight: 1.65 }}>
          Karva Chauth is a nirjala (waterless) fast — success depends almost entirely on your pre-dawn sargi meal. Prioritise protein and slow-digesting carbs, avoid salty and sugary foods, and skip intense exercise on fasting day. Use our <Link href="/calculators/fasting-nutrition" style={{ color: "var(--color-brand-dark)" }}>Fasting Nutrition Calculator</Link> to plan your sargi.
        </p>
      </div>

      <div className="seo-content">
        <h2>Understanding the Karva Chauth Fast</h2>
        <p>Karva Chauth is observed primarily by married women in North India as a nirjala vrat — meaning no food or water is consumed from before sunrise until moonrise, typically 12-14 hours depending on the season and location. Unlike Navratri, where food type is restricted but eating continues throughout the day, Karva Chauth is a complete abstention fast, making pre-fast preparation (sargi) and post-fast recovery the two critical windows for nutrition.</p>

        <h2>The Sargi Meal: Your Most Important Decision</h2>
        <p>Sargi is the pre-dawn meal eaten before sunrise, traditionally prepared by the mother-in-law. From a nutrition standpoint, sargi is the only opportunity to fuel an entire 12-14 hour waterless fast — what you eat here determines how you feel for the rest of the day.</p>
        <table>
          <thead><tr><th>Sargi Priority</th><th>Why</th><th>Examples</th></tr></thead>
          <tbody>
            <tr><td>Protein</td><td>Sustains satiety longer than carbs alone</td><td>Paneer, milk, dry fruits</td></tr>
            <tr><td>Complex carbs</td><td>Slow glucose release avoids energy crash</td><td>Fenu/feniyan with milk, mathri (in moderation)</td></tr>
            <tr><td>Hydrating foods</td><td>Pre-loads fluid before the water restriction</td><td>Coconut water, watermelon (if eaten as part of sargi)</td></tr>
            <tr><td>Healthy fats</td><td>Slows digestion, extends satiety</td><td>Almonds, ghee in moderation</td></tr>
          </tbody>
        </table>

        <h3>What to Avoid at Sargi</h3>
        <ul>
          <li><strong>Salty foods</strong> — namkeen, pickles, and heavily salted snacks increase thirst significantly during a waterless day</li>
          <li><strong>Sugary foods</strong> — sweets and sugary drinks cause a rapid glucose spike followed by a crash, leaving you fatigued by mid-morning</li>
          <li><strong>Caffeine</strong> — tea and coffee are mild diuretics and can worsen dehydration during the fast</li>
        </ul>

        <h2>Hydration Strategy: Before and After</h2>
        <p>Since no water is permitted during the fasting window, hydration must be front-loaded. Drink water consistently through the evening and night before your fast begins, and consume water-rich foods (coconut water, watermelon, cucumber) at sargi. Post-fast, rehydrate gradually rather than drinking a large volume immediately — sipping steadily over 30-60 minutes is gentler on the body than gulping large amounts after moonrise.</p>

        <h2>Exercise on Karva Chauth: What&apos;s Safe</h2>
        <ul>
          <li><strong>Avoid intense training</strong> — HIIT, heavy lifting, or long runs on a waterless fasting day significantly increase dehydration and fainting risk</li>
          <li><strong>Light movement is fine</strong> — a gentle walk or light yoga is generally well-tolerated by most healthy women</li>
          <li><strong>Skip your gym session entirely if you feel dizzy or unwell</strong> — there is no fitness goal worth risking fainting on a waterless fast</li>
          <li><strong>Plan your training week around the fast</strong> — schedule your hardest workout the day before or after, not on Karva Chauth itself</li>
        </ul>

        <h2>Warning Signs to Stop the Fast</h2>
        <p>While Karva Chauth is safely observed by millions of women, listen to your body. Seek water or break the fast if you experience severe dizziness, fainting, confusion, or extreme weakness — these can be signs of dangerous dehydration and should not be pushed through for tradition&apos;s sake.</p>

        <div className="disclaimer-box">
          <strong>Medical Note:</strong> Pregnant women, those with diabetes, kidney conditions, or any condition requiring regular hydration or medication should consult their doctor before observing a nirjala fast. Modified fasting approaches are widely accepted in these circumstances.
        </div>

        <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides &amp; Calculators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
            <Link href="/calculators/fasting-nutrition" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Fasting Nutrition Calc</Link>
            <Link href="/fasting/navratri-diet-plan" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Navratri Diet Plan</Link>
            <Link href="/calculators/water-intake" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Water Intake Calc</Link>
            <Link href="/women" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Women&apos;s Fitness</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
