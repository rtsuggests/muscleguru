import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Navratri Diet Plan — 9-Day Fitness-Focused Fasting Guide",
  description: "Complete 9-day Navratri diet plan for fitness-focused Indians. Day-by-day falahar meal plan with macros, sample recipes, and how to train during Navratri.",
  keywords: ["navratri diet plan", "navratri fasting fitness", "navratri meal plan muscle", "vrat diet plan gym"],
};

export default function Page() {
  return (
    <div style={{ maxWidth: 860, margin: "0 auto", padding: "2.5rem 1rem 5rem" }}>
      <div style={{ marginBottom: "0.5rem", fontSize: "0.82rem", color: "var(--color-muted)" }}>
        <Link href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Home</Link> ›{" "}
        <Link href="/fasting" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Festival Fasting</Link> › Navratri Diet Plan
      </div>

      <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
        <span className="tag">Festival Fasting</span>
        <span style={{ fontSize: "0.82rem", color: "var(--color-muted)" }}>10 min read</span>
      </div>

      <h1 style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", lineHeight: 1.2, marginBottom: "1rem" }}>
        Navratri Diet Plan: A 9-Day Fitness-Focused Fasting Guide
      </h1>

      <div style={{ background: "var(--color-brand-light)", border: "1.5px solid #86efac", borderRadius: "0.875rem", padding: "1.125rem 1.375rem", marginBottom: "1.5rem" }}>
        <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--color-brand-dark)", marginBottom: "0.4rem", textTransform: "uppercase" }}>Quick Answer</div>
        <p style={{ margin: 0, fontSize: "0.975rem", color: "var(--color-dark)", lineHeight: 1.65 }}>
          Navratri fasting doesn&apos;t have to mean losing muscle or feeling drained. Prioritise paneer, milk, curd, sabudana, and singhara/kuttu flour — these falahar-permitted foods can meet your protein and calorie needs across all 9 days. Use our <Link href="/calculators/fasting-nutrition" style={{ color: "var(--color-brand-dark)" }}>Fasting Nutrition Calculator</Link> to find your exact daily target.
        </p>
      </div>

      <div className="seo-content">
        <h2>Why Navratri Fasting Doesn&apos;t Have to Derail Your Fitness</h2>
        <p>Navratri — observed twice yearly by millions of Indians — restricts grains, lentils, onion, and garlic, but permits a wide range of falahar (fasting-appropriate) foods including dairy, fruits, nuts, and specific flours like kuttu (buckwheat) and singhara (water chestnut). The common misconception that Navratri fasting means eating poorly or losing fitness progress is simply not supported by the actual list of permitted foods.</p>
        <p>In fact, several falahar foods are excellent for muscle maintenance: paneer (18g protein/100g), makhana or fox nuts (9.7g protein/100g, high in fibre), and curd (a complete protein source with probiotics) can collectively meet most people&apos;s daily protein needs even without grains or lentils.</p>

        <h2>The Core Falahar Food List</h2>
        <table>
          <thead><tr><th>Category</th><th>Permitted Foods</th></tr></thead>
          <tbody>
            <tr><td>Flours</td><td>Kuttu (buckwheat), singhara (water chestnut), rajgira (amaranth)</td></tr>
            <tr><td>Dairy</td><td>Milk, curd, paneer, ghee</td></tr>
            <tr><td>Grains substitute</td><td>Sabudana (tapioca pearls), samak/barnyard millet (in some traditions)</td></tr>
            <tr><td>Vegetables</td><td>Potato, sweet potato, pumpkin, bottle gourd, arbi (colocasia)</td></tr>
            <tr><td>Fruits</td><td>Banana, apple, pomegranate, all fruits generally permitted</td></tr>
            <tr><td>Nuts &amp; Seeds</td><td>Almonds, cashews, makhana, peanuts (regional variation)</td></tr>
            <tr><td>Spices</td><td>Rock salt (sendha namak), cumin, black pepper, green chilli, ginger</td></tr>
          </tbody>
        </table>
        <p style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}>Permitted foods vary by region and family tradition — this list reflects the most common practice.</p>

        <h2>The 9-Day Navratri Meal Framework</h2>
        <p>Rather than a rigid day-by-day menu, use this repeatable daily framework across all 9 days, rotating the specific dishes to avoid monotony:</p>
        <table>
          <thead><tr><th>Meal</th><th>Example</th><th>Approx. Protein</th></tr></thead>
          <tbody>
            <tr><td>Morning</td><td>Milk with roasted makhana or a banana</td><td>8-10g</td></tr>
            <tr><td>Breakfast</td><td>Sabudana khichdi with peanuts and curd on the side</td><td>10-12g</td></tr>
            <tr><td>Lunch</td><td>Kuttu ki roti with paneer sabzi (paneer + potato)</td><td>22-25g</td></tr>
            <tr><td>Evening</td><td>Roasted makhana or fruit chaat with curd</td><td>8-10g</td></tr>
            <tr><td>Dinner</td><td>Singhara atta paratha with paneer bhurji</td><td>20-22g</td></tr>
          </tbody>
        </table>
        <p>Following this framework across a day typically provides 68-79g of protein — a solid target for most body weights when combined with the calorie estimate from our calculator.</p>

        <h2>Training During Navratri: What to Adjust</h2>
        <ul>
          <li><strong>Reduce training intensity slightly</strong> on days you feel low energy — this is normal with reduced grain intake and is not a sign of failure.</li>
          <li><strong>Prioritise protein at every meal</strong> — paneer and curd should appear in at least 3 of your 5 daily eating occasions.</li>
          <li><strong>Stay well hydrated</strong> — fruits like watermelon and coconut water help offset any reduced food volume.</li>
          <li><strong>Don&apos;t skip strength training entirely</strong> — even reduced-volume sessions (2 sets instead of 3) maintain the muscle-preserving stimulus.</li>
          <li><strong>Time your hardest workout after a protein-rich meal</strong>, not on an empty stomach, for best performance.</li>
        </ul>

        <h2>Common Mistakes During Navratri Fasting</h2>
        <ul>
          <li><strong>Overloading on fried sabudana vada and fried snacks</strong> — technically falahar, but calorie-dense and low in protein. Choose sabudana khichdi (lightly oiled) over fried versions.</li>
          <li><strong>Skipping meals entirely</strong> — Navratri fasting restricts food types, not meal frequency. Eating 4-5 smaller meals maintains energy better than 1-2 large ones.</li>
          <li><strong>Neglecting protein</strong> — many default Navratri thalis are potato and sabudana heavy with little protein. Deliberately add paneer or curd to every meal.</li>
        </ul>

        <div className="disclaimer-box">
          <strong>Note:</strong> If you have diabetes or any medical condition requiring dietary consistency, consult your doctor before modifying your eating pattern for Navratri.
        </div>

        <div style={{ marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1.5px solid var(--color-border)" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Related Guides &amp; Calculators</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "0.75rem" }}>
            <Link href="/calculators/fasting-nutrition" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Fasting Nutrition Calc</Link>
            <Link href="/fasting/karva-chauth-fasting-guide" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Karva Chauth Guide</Link>
            <Link href="/calculators/protein" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Protein Calculator</Link>
            <Link href="/calculators/vegetarian-protein" style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "var(--color-bg)", border: "1.5px solid var(--color-border)", borderRadius: "0.625rem", padding: "0.875rem 1rem", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", color: "var(--color-dark)" }}>Vegetarian Protein</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
