import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Protein Needs for Women in India: A Complete Guide";
const DESC = "How much protein Indian women need for fitness, muscle gain, fat loss and general health, with targets by goal and practical Indian food sources.";

export const metadata: Metadata = {
  alternates: { canonical: "/women/protein-needs-women" },
  title: "Protein Needs for Women India — Complete Guide",
  description: DESC,
  keywords: ["protein needs women India", "how much protein women", "protein for Indian women fitness"],
};

const faqs = [
  { q: "How much protein does a woman need per day?", a: "1.2–1.4 g/kg for general health and maintenance, 1.6–2.0 g/kg for fat loss or muscle building. These ranges are the same as for men — protein needs scale with body weight and activity, not gender specifically." },
  { q: "Is the RDA of 0.8 g/kg enough for active women?", a: "No — 0.8 g/kg is a deficiency-prevention minimum for largely sedentary adults, not an optimal target for anyone exercising regularly. Active women typically need meaningfully more." },
  { q: "Can Indian vegetarian women get enough protein?", a: "Yes, with planning. Paneer, curd, dal, soya chunks, tofu and legumes can all contribute meaningfully across the day — it generally takes more deliberate meal structure than a diet with meat and fish." },
  { q: "How much protein do pregnant or breastfeeding women need?", a: "Requirements increase above baseline during pregnancy and breastfeeding, but the right amount depends on individual factors. Discuss your specific protein and calorie targets with your doctor or a dietitian during these periods rather than following a generic fitness target." },
];

const references = [
  "Jäger R et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr. 2017;14:20.",
  "Indian Council of Medical Research – National Institute of Nutrition. Nutrient Requirements for Indians, RDA 2020.",
  "Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. Br J Sports Med. 2018;52(6):376–384.",
];

export default function ProteinNeedsWomenPage() {
  return (
    <ArticleLayout
      title="Protein Needs for Women in India"
      category="Women's Fitness"
      categoryHref="/women"
      readTime="8 min"
      lastUpdated="September 2026"
      summary="Women need 1.2–2.0 g of protein per kg of body weight per day depending on their goal — the same ranges used for men, since protein needs scale with body weight and training, not gender. A typical Indian vegetarian meal pattern (dal, roti, sabzi) often falls short of the higher end of this range without deliberate planning."
      relatedCalculators={[
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
      ]}
      relatedArticles={[
        { title: "How Much Protein Do You Need?", href: "/nutrition/how-much-protein", time: "7 min" },
        { title: "Strength Training Guide for Women", href: "/women/strength-training-guide", time: "9 min" },
        { title: "Best Indian Protein Sources", href: "/nutrition/indian-protein-sources", time: "8 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/women/protein-needs-women", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Protein Targets by Goal</h2>
      <table>
        <thead><tr><th>Goal</th><th>Protein target</th><th>55 kg example</th></tr></thead>
        <tbody>
          <tr><td>General health / maintenance</td><td>1.2–1.4 g/kg</td><td>66–77 g/day</td></tr>
          <tr><td>Fat loss (preserving muscle)</td><td>1.6–2.0 g/kg</td><td>88–110 g/day</td></tr>
          <tr><td>Muscle building</td><td>1.6–2.0 g/kg</td><td>88–110 g/day</td></tr>
          <tr><td>Sedentary (RDA minimum)</td><td>0.8 g/kg</td><td>44 g/day</td></tr>
        </tbody>
      </table>
      <p>These targets are the same as those used for men — protein requirements scale with body weight, activity and goal, not gender specifically. The RDA figure of 0.8 g/kg, set by ICMR's National Institute of Nutrition, is designed to prevent deficiency in a largely sedentary population and is a floor, not a target for anyone training regularly.</p>

      <h2>Why a Typical Vegetarian Pattern Can Fall Short</h2>
      <p>A traditional Indian vegetarian meal pattern — dal, sabzi, roti, rice — is a healthy foundation but, without deliberate planning, can land in the 0.7–1.0 g/kg range for many women, below the 1.6–2.0 g/kg needed for active fat loss or muscle building goals. This isn't a flaw in the diet itself — it just means protein-dense foods need to be added deliberately rather than assumed.</p>

      <h2>Best Protein Sources</h2>
      <table>
        <thead><tr><th>Food</th><th>Protein (per 100 g)</th></tr></thead>
        <tbody>
          <tr><td>Paneer</td><td>~18 g</td></tr>
          <tr><td>Hung curd (Greek-style)</td><td>~10 g</td></tr>
          <tr><td>Whole eggs</td><td>~13 g</td></tr>
          <tr><td>Soya chunks (dry)</td><td>~50 g</td></tr>
          <tr><td>Chana dal (cooked)</td><td>~9 g</td></tr>
          <tr><td>Rajma (cooked)</td><td>~9 g</td></tr>
        </tbody>
      </table>

      <h2>A Practical Day for a 55 kg Woman Targeting ~90 g Protein</h2>
      <ul>
        <li><strong>Breakfast:</strong> 2 eggs + 200 g hung curd — roughly 30 g</li>
        <li><strong>Lunch:</strong> 80 g paneer + dal — roughly 24 g</li>
        <li><strong>Snack:</strong> 30 g dry soya chunks (rehydrated) — roughly 16 g</li>
        <li><strong>Dinner:</strong> Dal + paneer — roughly 20 g</li>
      </ul>
      <p>That totals roughly 90 g — within the 1.6–2.0 g/kg range for fat loss or muscle building at this body weight. Adjust portions to your own weight and target.</p>

      <h2>Pregnancy and Breastfeeding</h2>
      <p>Protein needs increase during pregnancy and breastfeeding, but the specifics depend on individual health factors. Work with your doctor or a dietitian for personalised targets during these periods rather than applying a general fitness target.</p>
    </ArticleLayout>
  );
}
