import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "PCOS and Hypothyroid Weight Loss Diet for Indian Women";
const DESC = "How to lose weight with PCOS or hypothyroidism on an Indian diet: plate method, roti and rice portions, millets, levothyroxine timing and exercise.";

export const metadata: Metadata = {
  alternates: { canonical: "https://muscleguru.in/women/pcos-hypothyroid-indian-diet" },
  title: "PCOS & Thyroid Weight Loss Diet (India)",
  description: DESC,
  keywords: ["PCOS diet plan Indian", "hypothyroid weight loss diet India", "PCOS weight loss roti rice", "levothyroxine diet timing"],
};

const faqs = [
  { q: "Is there one best diet for PCOS?", a: "No. The 2023 international guideline for PCOS found no single diet that is better than others. It recommends healthy eating that suits the person and helps with weight management, along with regular physical activity. The best plan is the one you can follow for years." },
  { q: "Should I stop eating roti and rice if I have PCOS?", a: "No. Quality and portion matter more than cutting grains out. Make half your plate vegetables, a quarter protein such as dal, paneer, curd, eggs or soya, and a quarter whole grains or millets, and avoid long gaps between meals." },
  { q: "Can I lose weight if I have hypothyroidism?", a: "Yes. Untreated or under-treated hypothyroidism can contribute to modest weight gain and make weight loss harder, so the first step is getting your thyroid hormone level (TSH) into range with your doctor. After that, weight loss works through the same fundamentals as for everyone else: a sustainable calorie deficit, enough protein, strength training and sleep." },
  { q: "When should I take my thyroid tablet in relation to food?", a: "Levothyroxine is usually taken on an empty stomach with water, about 30 to 60 minutes before breakfast, or at bedtime at least three hours after your last meal. Calcium and iron supplements and antacids should be taken at least four hours apart. Follow your own doctor's instructions and keep the routine consistent." },
  { q: "Is it safe to take extra thyroid medicine to lose weight?", a: "No. Taking more levothyroxine than prescribed does not produce healthy weight loss and can cause palpitations, bone loss and dangerous heart rhythms. Never change your dose without medical advice." },
];

const references = [
  "Teede HJ, et al. Recommendations from the 2023 International Evidence-based Guideline for the Assessment and Management of Polycystic Ovary Syndrome. J Clin Endocrinol Metab. 2023;108(10):2447–2469.",
  "Jonklaas J, et al. Guidelines for the treatment of hypothyroidism: prepared by the American Thyroid Association task force on thyroid hormone replacement. Thyroid. 2014;24(12):1670–1751.",
  "ICMR-National Institute of Nutrition. Dietary Guidelines for Indians, 2024.",
  "Anitha S, Kane-Potaka J, Tsusaka TW, et al. A systematic review and meta-analysis of the potential of millets for managing and reducing the risk of developing diabetes mellitus. Front Nutr. 2021;8:687428.",
];

export default function PcosHypothyroidDietPage() {
  return (
    <ArticleLayout
      title="PCOS and Hypothyroid Weight Loss Diet for Indian Women"
      category="Women's Fitness"
      categoryHref="/women"
      readTime="10 min"
      lastUpdated="October 2026"
      summary="Neither condition needs a special or extreme diet. For PCOS, the 2023 international guideline found no single best diet, so use the plate method with vegetables, protein and portion-controlled whole grains and millets, plus strength training. For hypothyroidism, get your TSH controlled first, take levothyroxine on an empty stomach, and keep calcium and iron supplements four hours apart. This is education, not medical advice."
      relatedCalculators={[
        { name: "Calorie Deficit Calculator", href: "/calculators/calorie-deficit", icon: "🔥" },
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "⚡" },
      ]}
      relatedArticles={[
        { title: "PCOS and Exercise: Evidence-Based Guide", href: "/women/pcos-exercise-guide", time: "9 min" },
        { title: "Strength Training Guide for Women", href: "/women/strength-training-guide", time: "9 min" },
        { title: "Protein Needs for Women in India", href: "/women/protein-needs-women", time: "8 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/women/pcos-hypothyroid-indian-diet", description: DESC, dateModified: "2026-10-31" })}
      references={references}
      faqs={faqs}
    >
      <div style={{ background: "#fffbeb", border: "1.5px solid #fde68a", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
        <strong>A note on terminology:</strong> PCOS is being renamed polyendocrine metabolic ovarian syndrome (PMOS) internationally. This guide uses PCOS because that is still the name most Indian doctors and patients use. It is general education and cannot replace advice from your gynaecologist, endocrinologist or dietitian.
      </div>

      <h2>What Both Conditions Have in Common</h2>
      <p>PCOS often comes with insulin resistance, which makes the body store fat more easily around the waist and can make weight loss feel like an uphill task. Hypothyroidism slows metabolism and can add a few kilograms, partly from fluid. Some studies find thyroid problems are more common in women with PCOS, so many women deal with both. The good news is that the same foundation helps both: steady meals, enough protein, fibre-rich carbohydrates, strength training and good sleep.</p>

      <h2>What the PCOS Guideline Actually Says</h2>
      <p>The 2023 international evidence-based PCOS guideline recommends healthy lifestyle change for everyone with PCOS, and concludes that no particular diet is better than another. Any approach that follows healthy-eating principles and helps you manage weight is acceptable. It also recommends regular exercise, with more activity for people trying to lose weight. This is why extreme plans such as very low-carb or detox regimes are unnecessary, and often hard to sustain.</p>

      <h2>The Indian Plate Method for PCOS</h2>
      <ul>
        <li><strong>Half the plate: vegetables.</strong> Include green leafy vegetables, and aim for at least 400 g a day as the ICMR-NIN guidelines suggest.</li>
        <li><strong>A quarter: protein.</strong> Dal, rajma, chana, paneer, curd, eggs, tofu, soya or sprouts at every meal.</li>
        <li><strong>A quarter: whole grains or millets.</strong> Roti made from whole wheat mixed with ragi, jowar or bajra, or a small portion of brown or parboiled rice.</li>
        <li><strong>Do not skip meals.</strong> Long gaps followed by big meals tend to cause sugar spikes and cravings.</li>
      </ul>
      <h3>Roti and Rice Portions</h3>
      <p>A practical starting point is one or two rotis (or a small katori of cooked rice) at lunch and dinner, with larger servings of dal and vegetables than grains. ICMR-NIN advises that cereals supply no more than about 45% of your energy, and many Indian diets exceed that. Millets such as ragi and jowar are a useful swap: a 2021 meta-analysis found lower blood glucose with millets than with refined cereals in people with diabetes, although this evidence is moderate and not specific to PCOS.</p>

      <h2>Sample Day</h2>
      <table>
        <thead><tr><th>Meal</th><th>Example</th></tr></thead>
        <tbody>
          <tr><td>Breakfast</td><td>Vegetable besan or moong chilla with curd, or vegetable oats upma with a boiled egg or roasted chana</td></tr>
          <tr><td>Mid-morning</td><td>A fruit and a handful of nuts</td></tr>
          <tr><td>Lunch</td><td>Two rotis (part ragi or jowar), dal, a large sabzi, salad and curd</td></tr>
          <tr><td>Evening</td><td>Sprouts chaat, makhana or buttermilk</td></tr>
          <tr><td>Dinner</td><td>Paneer, tofu or soya vegetable with one roti and plenty of vegetables, or millet khichdi with a salad</td></tr>
        </tbody>
      </table>
      <p>For weight loss, aim for a modest, sustainable calorie deficit rather than a crash diet, and about 1.6 g of protein per kg of body weight. Use our <Link href="/calculators/calorie-deficit">calorie deficit calculator</Link> and <Link href="/calculators/protein">protein calculator</Link> to set your numbers.</p>

      <h2>Hypothyroidism: Getting the Medicine and Food Timing Right</h2>
      <ul>
        <li><strong>Empty stomach.</strong> Levothyroxine is usually taken with water about 30 to 60 minutes before breakfast, or at bedtime at least three hours after dinner.</li>
        <li><strong>Separate supplements.</strong> Calcium, iron and antacids can reduce absorption, so keep them at least four hours apart.</li>
        <li><strong>Be consistent.</strong> Coffee, high-fibre meals and soy products can interfere with absorption, so take your tablet at the same time and the same way every day.</li>
        <li><strong>Recheck TSH after changes.</strong> Thyroid levels are typically checked about six to eight weeks after any dose change.</li>
        <li><strong>Use iodised salt</strong> within the 5 g a day limit advised by ICMR-NIN, but do not take iodine, kelp or selenium supplements unless your doctor says so.</li>
        <li><strong>Never take extra tablets to lose weight.</strong> It is dangerous and does not work.</li>
      </ul>
      <h3>What About Goitrogens in Millets and Vegetables?</h3>
      <p>Some foods, including cabbage, cauliflower and certain millets, contain compounds that can affect thyroid function in laboratory studies. In people who are on treatment and get enough iodine, there is little evidence that normal portions cause problems, and cooking reduces these compounds. There is no need to avoid these foods, but if you are worried, ask your endocrinologist.</p>

      <h2>Exercise Matters as Much as Diet</h2>
      <p>Strength training twice or thrice a week improves insulin sensitivity and preserves muscle while you lose fat, and daily walking helps with both conditions. See our <Link href="/women/pcos-exercise-guide">PCOS exercise guide</Link> and <Link href="/women/strength-training-guide">strength training guide for women</Link> for a starter plan.</p>

      <h2>When to See a Doctor</h2>
      <p>Speak to a doctor if your periods are very irregular or have stopped, if you have rapidly worsening hair growth or acne, or if you have symptoms such as extreme tiredness, feeling cold, constipation, dry skin or a swelling in the neck. Both PCOS and thyroid problems are diagnosed with blood tests and examination, not by symptoms alone.</p>
    </ArticleLayout>
  );
}
