import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "How Much Protein Do You Need Per Day? (India Guide)";
const DESC = "How much protein you need per day for muscle gain, fat loss or general health, with gram targets by body weight and how to hit them on an Indian diet.";

export const metadata: Metadata = {
  alternates: { canonical: "/nutrition/how-much-protein" },
  title: "How Much Protein Per Day — India Guide",
  description: DESC,
  keywords: ["how much protein per day", "protein requirement India", "protein intake for muscle gain"],
};

const faqs = [
  { q: "How much protein do I need per day to build muscle?", a: "About 1.6–2.2 grams per kilogram of body weight per day. For a 70 kg person, that is 112–154 g a day, spread across meals. Intakes above roughly 2.2 g/kg have not been shown to add further benefit for most people." },
  { q: "How much protein do I need if I'm trying to lose fat?", a: "Slightly higher than for maintenance: 1.6–2.0 g/kg. Protein helps preserve muscle while you are in a calorie deficit, so it matters more, not less, when cutting calories." },
  { q: "Is 0.8 g/kg enough protein?", a: "0.8 g/kg is the RDA figure for sedentary adults to avoid deficiency — it is a minimum, not an optimal target for anyone training. If you exercise regularly, aim higher: 1.2–1.6 g/kg for general activity, more for muscle building." },
  { q: "Can I get enough protein on an Indian vegetarian diet?", a: "Yes, with planning. Dal, paneer, curd, soya chunks, tofu, sprouts, rajma, chana and milk all contribute meaningfully, and combining plant sources across the day covers your amino acid needs. It usually takes more deliberate meal planning than a diet with meat." },
  { q: "Is too much protein bad for the kidneys?", a: "In people with healthy kidneys, research has not shown that higher protein intake within the ranges discussed here causes kidney damage. People with existing kidney disease should follow their doctor's guidance on protein intake." },
];

const references = [
  "Morton RW et al. A systematic review, meta-analysis and meta-regression of the effect of protein supplementation on resistance training-induced gains in muscle mass and strength. Br J Sports Med. 2018;52(6):376–384.",
  "Helms ER et al. A systematic review of dietary protein during caloric restriction in resistance trained lean athletes. Int J Sport Nutr Exerc Metab. 2014;24(2):127–138.",
  "Jäger R et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr. 2017;14:20.",
  "Indian Council of Medical Research – National Institute of Nutrition. Nutrient Requirements for Indians, RDA 2020.",
];

export default function HowMuchProteinPage() {
  return (
    <ArticleLayout
      title="How Much Protein Do You Need Per Day?"
      category="Nutrition"
      categoryHref="/nutrition"
      readTime="7 min"
      lastUpdated="September 2026"
      summary="Aim for 1.6–2.2 g of protein per kg of body weight per day if you're training for muscle gain, 1.6–2.0 g/kg if you're cutting fat, and at least 1.2 g/kg for general activity. The RDA figure of 0.8 g/kg is a deficiency-prevention minimum, not a target for anyone who exercises."
      relatedCalculators={[
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
        { name: "Macro Calculator", href: "/calculators/macro", icon: "🥗" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
      ]}
      relatedArticles={[
        { title: "Creatine for Indians: Benefits, Dosage & Vegetarian Use", href: "/supplements/creatine-guide", time: "9 min" },
        { title: "Best Indian Protein Sources", href: "/nutrition/indian-protein-sources", time: "8 min" },
        { title: "Vegetarian Protein Sources & Targets", href: "/calculators/vegetarian-protein", time: "6 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/nutrition/how-much-protein", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Protein Targets by Goal</h2>
      <table>
        <thead><tr><th>Goal</th><th>Protein target</th><th>70 kg example</th></tr></thead>
        <tbody>
          <tr><td>Muscle gain (training regularly)</td><td>1.6–2.2 g/kg</td><td>112–154 g/day</td></tr>
          <tr><td>Fat loss (calorie deficit)</td><td>1.6–2.0 g/kg</td><td>112–140 g/day</td></tr>
          <tr><td>General activity, no specific goal</td><td>1.2–1.6 g/kg</td><td>84–112 g/day</td></tr>
          <tr><td>Sedentary, deficiency prevention (RDA)</td><td>0.8 g/kg</td><td>56 g/day</td></tr>
        </tbody>
      </table>
      <p>These ranges come from meta-analyses of resistance-trained individuals. There is no single "correct" number inside a range — more training experience, an older age, or a larger calorie deficit all push you toward the higher end.</p>

      <h2>Why the RDA of 0.8 g/kg Is Too Low for Active People</h2>
      <p>India's official RDA, set by ICMR's National Institute of Nutrition, is built to prevent deficiency in a mostly sedentary population, not to optimise muscle growth or recovery in someone training several times a week. If you lift weights, run, or do any structured exercise, 0.8 g/kg will typically leave you under-fuelled for recovery.</p>

      <h2>Hitting Your Target on an Indian Diet</h2>
      <p>Spread protein across 3–4 meals rather than trying to eat it all at once. Useful reference points, per typical serving:</p>
      <ul>
        <li><strong>Dal (1 cup, cooked):</strong> roughly 7–9 g</li>
        <li><strong>Paneer (100 g):</strong> roughly 18 g</li>
        <li><strong>Egg (1 whole):</strong> roughly 6 g</li>
        <li><strong>Chicken breast (100 g, cooked):</strong> roughly 27–31 g</li>
        <li><strong>Soya chunks (100 g, dry):</strong> roughly 50 g</li>
        <li><strong>Greek-style curd (100 g):</strong> roughly 8–10 g</li>
      </ul>
      <p>A whey or plant protein shake is a convenient way to fill gaps, but it is not required — whole foods can cover the full range above with planning.</p>

      <h2>Does It Matter If I Go Over?</h2>
      <p>Protein above roughly 2.2 g/kg has not been shown to build muscle any faster in most studies — the extra is simply used for energy or excreted. It is not harmful in a healthy person, just not adding benefit beyond that point.</p>
    </ArticleLayout>
  );
}
