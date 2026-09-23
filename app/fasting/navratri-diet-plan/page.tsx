import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Navratri Diet Plan: Stay Fit During 9 Days of Fasting";
const DESC = "A practical Navratri (falahar) diet and fitness plan — food list, a 9-day meal framework, and how to adjust training during the festival.";

export const metadata: Metadata = {
  alternates: { canonical: "/fasting/navratri-diet-plan" },
  title: "Navratri Diet Plan — Fitness & Falahar Food Guide",
  description: DESC,
  keywords: ["navratri diet plan", "falahar food list", "navratri fasting fitness"],
};

const faqs = [
  { q: "Can I maintain muscle during Navratri fasting?", a: "Largely yes, with planning. Falahar foods like paneer, curd, makhana, nuts and singhara atta provide reasonable protein, and 9 days is short enough that strength loss is minimal if you keep training and protein intake reasonable." },
  { q: "Should I reduce workout intensity during Navratri?", a: "Many people find lighter meals leave them with less fuel for very intense sessions. Moderate-intensity training, or intensity matched to how you're actually feeling, tends to work better than pushing maximal efforts throughout the 9 days." },
  { q: "Is Navratri fasting a calorie deficit?", a: "It can be, depending on what and how much you eat — fried falahar snacks like sabudana vada can add up in calories. Focus on the less processed falahar options (curd, fruit, nuts, roasted makhana) if a calorie deficit is a goal." },
  { q: "What are good protein sources during falahar fasting?", a: "Paneer, curd, milk, makhana (fox nuts), and various nuts are all accepted falahar-friendly protein sources in most traditions, though specific rules vary by region and family." },
];

export default function NavratriDietPlanPage() {
  return (
    <ArticleLayout
      title="Navratri Diet Plan for Fitness"
      category="Fasting"
      categoryHref="/fasting"
      readTime="8 min"
      lastUpdated="September 2026"
      summary="Falahar (fasting-appropriate) foods like paneer, curd, makhana and nuts provide enough protein to maintain muscle through the 9 days of Navratri with reasonable planning. Favor less processed falahar options over fried snacks if you're also managing calories, and match training intensity to how you're actually feeling on lighter meals."
      relatedArticles={[
        { title: "Karva Chauth Fasting Guide", href: "/fasting/karva-chauth-fasting-guide", time: "7 min" },
        { title: "Intermittent Fasting for Indians", href: "/indian-diet/intermittent-fasting-india", time: "8 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/fasting/navratri-diet-plan", description: DESC, dateModified: "2026-09-21" })}
      references={["Trepanowski JF, Bloomer RJ. The impact of religious fasting on human health. Nutr J. 2010;9:57."]}
      faqs={faqs}
    >
      <h2>Why Navratri Fasting Doesn't Have to Derail Your Fitness</h2>
      <p>Nine days is a short enough window that, with reasonable planning, it doesn't meaningfully set back fitness progress. The main levers are the same as any other period: get enough protein from the foods that are available, stay hydrated, and adjust training intensity to match your energy levels rather than forcing a normal routine on different fuel.</p>

      <h2>The Core Falahar Food List</h2>
      <table>
        <thead><tr><th>Category</th><th>Foods</th></tr></thead>
        <tbody>
          <tr><td>Protein</td><td>Paneer, curd, milk, makhana (fox nuts), assorted nuts</td></tr>
          <tr><td>Carbohydrate</td><td>Singhara (water chestnut) atta, sabudana, rajgira (amaranth) atta, sweet potato, potato</td></tr>
          <tr><td>Fruits and vegetables</td><td>Bananas, apples, pomegranate, cucumber, bottle gourd</td></tr>
          <tr><td>Fats</td><td>Ghee, peanuts, coconut</td></tr>
        </tbody>
      </table>
      <p>Specific accepted foods vary by region and family tradition, so adjust this list to your own practice.</p>

      <h2>A 9-Day Meal Framework</h2>
      <ul>
        <li><strong>Breakfast:</strong> Makhana roasted in ghee, or a bowl of curd with fruit</li>
        <li><strong>Lunch:</strong> Sabudana khichdi or singhara atta roti with paneer sabzi</li>
        <li><strong>Snack:</strong> A handful of nuts, or roasted makhana</li>
        <li><strong>Dinner:</strong> Rajgira roti with curd, or a lighter version of lunch</li>
      </ul>
      <p>Rotate through these to avoid the same 1–2 meals every day, which tends to be where adherence breaks down over 9 days.</p>

      <h2>Training During Navratri: What to Adjust</h2>
      <p>Lighter, more frequent meals with less overall carbohydrate than usual may leave less fuel for very high-intensity training. Shifting toward moderate-intensity resistance training, and reducing volume or intensity on days you feel low on energy, tends to work better than forcing your normal programme regardless of how you feel.</p>

      <h2>Common Mistakes During Navratri Fasting</h2>
      <ul>
        <li><strong>Over-relying on fried falahar snacks</strong> (sabudana vada, aloo chips) — tasty, but calorie-dense and can work against a fat-loss goal if eaten in large quantities</li>
        <li><strong>Under-eating protein</strong> — paneer, curd and makhana should show up in most meals, not as an afterthought</li>
        <li><strong>Skipping hydration</strong> — festival schedules can be busy; keep water intake consistent through the day regardless</li>
      </ul>
    </ArticleLayout>
  );
}
