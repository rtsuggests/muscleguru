import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Karva Chauth Fasting Guide: Sargi, Hydration & Safe Exercise";
const DESC = "How to approach the Karva Chauth fast safely — the sargi meal, hydration strategy, whether to exercise, and warning signs to break the fast.";

export const metadata: Metadata = {
  alternates: { canonical: "/fasting/karva-chauth-fasting-guide" },
  title: "Karva Chauth Fasting Guide — Health & Fitness",
  description: DESC,
  keywords: ["karva chauth fasting tips", "sargi meal ideas", "karva chauth diet plan"],
};

const faqs = [
  { q: "What should be in the sargi meal?", a: "A mix of complex carbohydrates (roti, paratha), protein (paneer, curd, nuts), and fluids. This combination digests slowly and helps sustain energy through the day better than a meal heavy in refined sugar or fried food." },
  { q: "Can I exercise on Karva Chauth?", a: "Light activity like walking or gentle yoga is generally fine for most healthy people. Intense training without food or water for many hours raises the risk of dizziness, low blood sugar and dehydration, so it's best to skip hard workouts that day." },
  { q: "Should I drink extra water before the fast begins?", a: "Yes — hydrating well in the hours before the fast starts, alongside your sargi, helps you start the day well-hydrated rather than trying to compensate after a long dry fast." },
  { q: "When should I break the fast for health reasons?", a: "If you experience severe dizziness, fainting, confusion, a rapid heartbeat, or any concerning symptom, break the fast and seek help — health always comes before tradition, and this is a widely accepted view even within observant communities." },
];

const references = [
  "Trepanowski JF, Bloomer RJ. The impact of religious fasting on human health. Nutr J. 2010;9:57.",
];

export default function KarvaChauthFastingGuidePage() {
  return (
    <ArticleLayout
      title="Karva Chauth Fasting Guide"
      category="Fasting"
      categoryHref="/fasting"
      readTime="7 min"
      lastUpdated="September 2026"
      summary="A well-planned sargi meal — complex carbs, protein and fluids — makes the waterless Karva Chauth fast more manageable. Keep activity light, stay alert to warning signs like dizziness or a rapid heartbeat, and remember that health always takes priority over completing the fast."
      relatedArticles={[
        { title: "Navratri Diet Plan", href: "/fasting/navratri-diet-plan", time: "8 min" },
        { title: "Intermittent Fasting for Indians", href: "/indian-diet/intermittent-fasting-india", time: "8 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/fasting/karva-chauth-fasting-guide", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>Understanding the Karva Chauth Fast</h2>
      <p>Karva Chauth is a nirjala (waterless) fast lasting from before sunrise to moonrise, making it more demanding than food-only fasts. Without water for most of the day, hydration planning matters even more than usual, and preparation the night before and morning of makes a meaningful difference to how the day feels.</p>

      <h2>The Sargi Meal: Your Most Important Decision</h2>
      <p>Sargi, eaten before sunrise, is the meal your body runs on for the rest of the day. A good sargi combines:</p>
      <ul>
        <li><strong>Complex carbohydrates</strong> — paratha, roti, or a small portion of rice for sustained energy</li>
        <li><strong>Protein</strong> — paneer, curd, or a handful of nuts to help with satiety</li>
        <li><strong>Fluids</strong> — water, milk, or coconut water in generous quantity, since this is your only opportunity to hydrate before evening</li>
      </ul>
      <p>Avoid very salty or heavily fried foods in sargi — they increase thirst through the day, which is harder to manage on a waterless fast.</p>

      <h2>Hydration Strategy: Before and After</h2>
      <p>Drink well in the hours before the fast begins rather than a large amount right at sargi time, which gives your body more time to actually absorb it. After moonrise, rehydrate gradually rather than drinking a large volume very quickly, which can cause discomfort.</p>

      <h2>Exercise on Karva Chauth: What's Safe</h2>
      <p>Light activity — a walk, gentle stretching, or restorative yoga — is generally fine for most healthy people. Skip intense training: without food or water for many hours, the combination raises the risk of dizziness, low blood sugar and dehydration during or after a hard session.</p>

      <h2>Warning Signs to Stop the Fast</h2>
      <p>Break the fast and seek help if you experience severe dizziness, fainting, confusion, a noticeably rapid or irregular heartbeat, or any symptom that concerns you. This applies especially to anyone pregnant, managing diabetes, or with an existing health condition — health takes priority over completing the fast, a view widely shared even within observant communities.</p>
    </ArticleLayout>
  );
}
