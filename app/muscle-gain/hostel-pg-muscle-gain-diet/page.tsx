import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Hostel and PG Muscle Gain Diet in India (No Cooking Needed)";
const DESC = "A no-cook muscle gain diet for hostel and PG students: kettle-only high-protein meals, mess food hacks, a 100 g protein day and a shopping list.";

export const metadata: Metadata = {
  alternates: { canonical: "/muscle-gain/hostel-pg-muscle-gain-diet" },
  title: "Hostel/PG Muscle Gain Diet (No Cooking)",
  description: DESC,
  keywords: ["hostel muscle gain diet India", "PG diet plan no cooking", "high protein no cook meals", "kettle meals for students"],
};

const faqs = [
  { q: "Can I build muscle on mess food?", a: "Yes. Mess meals usually give you plenty of carbohydrate and some dal, and the gap is protein. Take extra dal and curd, skip fried items, and add no-cook protein foods such as soya chunks, roasted chana, peanut butter and sattu to cover the difference." },
  { q: "How much protein do I need as a student?", a: "Around 1.6 g per kg of body weight a day if you train regularly, for example about 100 g for a 62 kg student. Use our protein calculator for your own target." },
  { q: "Do I need whey protein in a hostel?", a: "No. The sample day below reaches about 100 g from food. Whey is convenient but not necessary, and the ICMR-NIN Dietary Guidelines for Indians advise getting protein from food rather than supplements. If you are under 18, avoid protein powders and other supplements altogether." },
  { q: "What if I have no fridge?", a: "Choose shelf-stable foods: roasted chana, peanuts, peanut butter, sattu, oats, soya chunks, UHT or tetra-pack milk and dry fruits. Avoid keeping cut fruit, curd or paneer out of a fridge for hours." },
  { q: "Is it safe to use my room kettle?", a: "Only if your hostel allows it, and only for heating water. Never cook food directly in a kettle or leave it unattended. Use the hot water to soak oats, rehydrate soya chunks or make sattu, in a separate cup or bowl." },
];

const references = [
  "ICMR-National Institute of Nutrition. Dietary Guidelines for Indians, 2024.",
  "Jäger R, et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr. 2017;14:20.",
  "Longvah T, Ananthan R, Bhaskarachary K, Venkaiah K. Indian Food Composition Tables 2017. National Institute of Nutrition, ICMR; 2017 (protein values are rounded approximations).",
];

export default function HostelMuscleGainPage() {
  return (
    <ArticleLayout
      title="Hostel and PG Muscle Gain Diet in India (No Cooking Needed)"
      category="Muscle Gain"
      categoryHref="/muscle-gain"
      readTime="9 min"
      lastUpdated="October 2026"
      summary="You can build muscle on mess food by adding shelf-stable, no-cook protein: soya chunks soaked in hot water, roasted chana, peanut butter, sattu, oats and UHT milk. Take extra dal and curd at the mess and skip fried items. The sample day below reaches about 100 g of protein with no stove and no whey. If you are under 18, focus on food only, not supplements."
      relatedCalculators={[
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        { name: "Muscle Gain Rate Calculator", href: "/calculators/muscle-gain-rate", icon: "📈" },
      ]}
      relatedArticles={[
        { title: "100g Protein Vegetarian Diet Under ₹150", href: "/indian-diet/100g-protein-vegetarian-diet-under-150", time: "9 min" },
        { title: "3-Day Full Body Workout Plan", href: "/workout-plans/3-day-full-body", time: "8 min" },
        { title: "No-Equipment Home Workout Guide", href: "/beginner-fitness/home-workout-guide", time: "8 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/muscle-gain/hostel-pg-muscle-gain-diet", description: DESC, dateModified: "2026-10-31" })}
      references={references}
      faqs={faqs}
    >
      <h2>The Hostel Problem, Simply</h2>
      <p>Most mess and PG meals are heavy on rice and roti, light on dal and vegetables, and short on protein, which is the nutrient you need most to build muscle. You also usually cannot cook. The fix is not complicated: top up the mess meals with a few shelf-stable protein foods that need nothing more than hot water or no preparation at all.</p>

      <h2>The No-Cook Protein Shelf</h2>
      <table>
        <thead><tr><th>Food</th><th>How to use it</th><th>Protein (approx.)</th></tr></thead>
        <tbody>
          <tr><td>Soya chunks, 40 g dry</td><td>Soak in hot water for 10 to 15 minutes, squeeze out the water, toss with chaat masala, lemon, onion and tomato</td><td>about 21 g</td></tr>
          <tr><td>Roasted chana, 30 g</td><td>Eat as a snack straight from the packet</td><td>about 6 g</td></tr>
          <tr><td>Sattu, 40 g</td><td>Stir into cold water with lemon, salt and roasted cumin as a drink</td><td>about 8 g</td></tr>
          <tr><td>Peanut butter, 1 tbsp (16 g)</td><td>On bread, banana or stirred into oats</td><td>about 4 g</td></tr>
          <tr><td>Rolled oats, 60 g</td><td>Soak overnight in UHT milk or curd, no heating needed</td><td>about 8 g</td></tr>
          <tr><td>UHT or tetra-pack milk, 250 ml</td><td>Drink as is or use for soaking oats</td><td>about 8 g</td></tr>
          <tr><td>Peanuts, 30 g</td><td>Eat plain or as chikki</td><td>about 7.5 g</td></tr>
        </tbody>
      </table>
      <p>These are the cheapest protein foods per gram as well. Our <Link href="/indian-diet/100g-protein-vegetarian-diet-under-150">budget protein guide</Link> shows the cost comparison.</p>

      <h2>A Sample Day for About 100 g of Protein</h2>
      <table>
        <thead><tr><th>Meal</th><th>What</th><th>Protein</th></tr></thead>
        <tbody>
          <tr><td>Breakfast</td><td>Overnight oats (60 g oats, 250 ml UHT milk, 1 tbsp peanut butter)</td><td>about 20 g</td></tr>
          <tr><td>Mid-morning</td><td>Soaked soya chunk chaat (40 g dry)</td><td>about 21 g</td></tr>
          <tr><td>Mess lunch</td><td>2 rotis, 1 katori dal, vegetable, 1 katori curd</td><td>about 18 g</td></tr>
          <tr><td>Evening</td><td>Sattu drink and a handful of roasted chana</td><td>about 14 g</td></tr>
          <tr><td>Mess dinner</td><td>2 rotis, dal or sabzi, plus 2 boiled eggs bought outside (or 250 ml milk and 30 g peanuts if you are vegetarian)</td><td>about 26 g</td></tr>
          <tr><td><strong>Total</strong></td><td></td><td><strong>about 100 g</strong></td></tr>
        </tbody>
      </table>
      <p>This is a pattern, not a rule. Adjust portions for your weight, and use the <Link href="/calculators/tdee">TDEE calculator</Link> to check you are eating enough calories as well. Muscle gain needs a small calorie surplus, roughly 200 to 300 kcal above maintenance.</p>

      <h2>Mess Food Hacks</h2>
      <ul>
        <li><strong>Double the dal, halve the rice.</strong> Ask for a second helping of dal and curd before a second helping of rice.</li>
        <li><strong>Skip fried and sugary items</strong> such as pakoras, puris and sweets on most days. They add calories without much protein.</li>
        <li><strong>Eat the vegetables.</strong> They are often the cheapest nutrition in the mess.</li>
        <li><strong>Carry your own booster.</strong> A jar of peanut butter and a packet of roasted chana can turn an average meal into a high-protein one.</li>
        <li><strong>Eat within a couple of hours after training,</strong> but do not stress about the exact minute.</li>
      </ul>

      <h2>Food Safety in a Hostel Room</h2>
      <ul>
        <li>Use a kettle only if your hostel permits it, only for heating water, and never leave it on unattended. Soak or mix food in a separate bowl or cup.</li>
        <li>Do not eat raw sprouts without blanching them in hot water, because they can carry bacteria.</li>
        <li>Keep food in sealed containers to avoid pests, and do not store curd, paneer or cut fruit without a fridge.</li>
        <li>Wash your hands, and clean any cup or bowl you soak food in.</li>
      </ul>

      <h2>Train With What You Have</h2>
      <p>You do not need a gym to start. A push-up, squat and lunge routine builds a base, and our <Link href="/beginner-fitness/home-workout-guide">no-equipment home workout guide</Link> and <Link href="/workout-plans/3-day-full-body">3-day full body plan</Link> give you a structure. Sleep also matters: aim for seven to nine hours, which is hard in a hostel but makes a real difference to recovery.</p>

      <h2>Supplements: Not Needed</h2>
      <p>You can reach your protein target with food. If you decide to buy a protein powder later, read our guide to <Link href="/supplements/how-to-spot-fake-whey-protein-india">spotting fake whey protein</Link> first. If you are under 18, skip supplements and focus on meals, sleep and training.</p>
    </ArticleLayout>
  );
}
