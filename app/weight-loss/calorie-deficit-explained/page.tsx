import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Calorie Deficit Explained: How Weight Loss Actually Works";
const DESC = "What a calorie deficit is, how big a deficit to aim for, how fast you'll lose weight, and common mistakes with Indian meal examples.";

export const metadata: Metadata = {
  alternates: { canonical: "/weight-loss/calorie-deficit-explained" },
  title: "Calorie Deficit Explained — Lose Weight India",
  description: DESC,
  keywords: ["calorie deficit explained", "how to lose weight India", "calorie deficit for weight loss"],
};

const faqs = [
  { q: "How big should my calorie deficit be?", a: "A moderate deficit of 300–500 kcal a day below TDEE is a sustainable starting point, producing roughly 0.25–0.5 kg of fat loss per week. Larger deficits speed things up short-term but are harder to sustain and risk more muscle loss." },
  { q: "Why am I not losing weight even in a deficit?", a: "The most common reasons are underestimating intake (portion sizes, cooking oil, snacks), overestimating TDEE, or a deficit calculated from inaccurate activity levels. Tracking food intake for a week or two, even roughly, usually reveals the gap." },
  { q: "Does the type of food matter if calories are the same?", a: "For weight loss specifically, total calories are what create the deficit. Food choice still matters for hunger control, protein for muscle preservation, and overall health — but two diets with the same calorie deficit produce similar weight loss." },
  { q: "Will a calorie deficit make me lose muscle?", a: "Some muscle loss risk exists in any deficit, but keeping protein high (1.6–2.0 g/kg) and continuing resistance training substantially protects muscle mass while you lose fat." },
];

const references = [
  "Hall KD, Guo J. Obesity energetics: body weight regulation and the effects of diet composition. Gastroenterology. 2017;152(7):1718–1727.",
  "Helms ER et al. A systematic review of dietary protein during caloric restriction in resistance trained lean athletes. Int J Sport Nutr Exerc Metab. 2014;24(2):127–138.",
];

export default function CalorieDeficitExplainedPage() {
  return (
    <ArticleLayout
      title="Calorie Deficit Explained"
      category="Weight Loss"
      categoryHref="/weight-loss"
      readTime="7 min"
      lastUpdated="September 2026"
      summary="A calorie deficit means eating fewer calories than your body burns (TDEE), so it uses stored fat for energy. A moderate deficit of 300–500 kcal/day produces roughly 0.25–0.5 kg of fat loss per week and is more sustainable than aggressive cuts."
      relatedCalculators={[
        { name: "Calorie Deficit Calculator", href: "/calculators/calorie-deficit", icon: "🔥" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "⚡" },
      ]}
      relatedArticles={[
        { title: "Best Diet for Fat Loss (India)", href: "/weight-loss/best-diet-fat-loss", time: "7 min" },
        { title: "Why Am I Not Losing Weight?", href: "/weight-loss/why-not-losing-weight", time: "9 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/weight-loss/calorie-deficit-explained", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>The Basic Mechanism</h2>
      <p>Your body burns a certain number of calories per day just to function — this is your TDEE (Total Daily Energy Expenditure), covering everything from breathing to digestion to movement. If you eat less than this number, your body pulls the shortfall from stored energy, mostly fat, to make up the difference. That's the entire mechanism behind fat loss.</p>

      <h2>How Big Should the Deficit Be?</h2>
      <table>
        <thead><tr><th>Deficit</th><th>Approx. weekly fat loss</th><th>Trade-off</th></tr></thead>
        <tbody>
          <tr><td>250 kcal/day</td><td>~0.2–0.25 kg</td><td>Very sustainable, slow</td></tr>
          <tr><td>500 kcal/day</td><td>~0.4–0.5 kg</td><td>Good balance for most people</td></tr>
          <tr><td>750–1000 kcal/day</td><td>~0.6–1 kg</td><td>Harder to sustain, higher muscle-loss risk</td></tr>
        </tbody>
      </table>
      <p>1 kg of body fat is roughly 7,700 kcal, so a 500 kcal/day deficit works out to about 0.4–0.5 kg lost per week — though real-world results vary with water retention, hormones and how accurately intake is tracked.</p>

      <h2>Common Mistakes</h2>
      <ul>
        <li><strong>Underestimating portions</strong> — cooking oil, ghee, and sauces add up quickly and are easy to under-count.</li>
        <li><strong>Overestimating activity level</strong> — most people overestimate how much exercise "burns" and end up eating back the deficit.</li>
        <li><strong>Deficit too aggressive</strong> — leads to constant hunger, poor adherence, and often a binge-restrict cycle that undoes progress.</li>
        <li><strong>Not adjusting over time</strong> — as you lose weight, your TDEE drops too, so a deficit that worked initially can flatten out; recalculate periodically.</li>
      </ul>

      <h2>Protecting Muscle in a Deficit</h2>
      <p>A deficit alone doesn't distinguish between fat and muscle. Two things push the loss toward fat and protect muscle: eating 1.6–2.0 g of protein per kg body weight, and continuing resistance training through the deficit rather than stopping it.</p>

      <h2>A Practical Starting Point</h2>
      <p>Calculate your TDEE, subtract 500 kcal, set your protein target from your body weight, and track intake — even loosely — for 2 weeks to see if the scale is actually moving in that range. Adjust from there rather than guessing.</p>
    </ArticleLayout>
  );
}
