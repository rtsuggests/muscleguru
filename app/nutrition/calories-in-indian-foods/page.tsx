import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Calories and Protein in Indian Foods: A Katori Guide";
const DESC = "Calories, protein, carbs and fat in 1 katori dal, phulka, idli-sambar, poha, upma and rajma chawal, with tips for measuring your own portions.";

export const metadata: Metadata = {
  alternates: { canonical: "https://muscleguru.in/nutrition/calories-in-indian-foods" },
  title: "Calories in Indian Foods: Katori Guide",
  description: DESC,
  keywords: ["calories in 1 katori dal", "calories in phulka", "calories in idli sambar", "calories in poha upma rajma chawal"],
};

const faqs = [
  { q: "How many calories are in one roti?", a: "A plain medium phulka made from about 30 g of atta has roughly 100 kcal and 3 g of protein. A teaspoon of ghee on top adds about 45 kcal. Thicker rotis, parathas and rotis cooked with oil are higher." },
  { q: "How many calories are in one katori of dal?", a: "About 150 kcal and 8 g of protein for a home-style tadka dal in a 150 ml katori. A thin, watery dal has less, while a dal with generous ghee or cream has more." },
  { q: "How big is a katori?", a: "Households use katoris of many sizes, usually between 100 and 200 ml. This guide assumes 150 ml, which holds about 150 g of cooked dal or rice. Measure yours once by filling it with water and pouring it into a measuring jug." },
  { q: "Are restaurant portions higher in calories?", a: "Often yes, sometimes by a wide margin, because restaurants use more oil, butter and cream and serve larger portions. Treat restaurant curries as meaningfully higher than the home-style figures here." },
  { q: "Where can I find exact values?", a: "The Indian Food Composition Tables 2017 from ICMR-NIN list raw ingredients in detail. For your own recipes, add up the raw ingredients you used and divide by the number of servings." },
];

const references = [
  "Longvah T, Ananthan R, Bhaskarachary K, Venkaiah K. Indian Food Composition Tables 2017. National Institute of Nutrition, ICMR; 2017.",
  "ICMR-National Institute of Nutrition. Dietary Guidelines for Indians, 2024.",
];

export default function CaloriesInIndianFoodsPage() {
  return (
    <ArticleLayout
      title="Calories and Protein in Indian Foods: A Katori Guide"
      category="Nutrition"
      categoryHref="/nutrition"
      readTime="8 min"
      lastUpdated="October 2026"
      summary="One katori (150 ml) of home-style dal is about 150 kcal with 8 g of protein, a plain phulka is about 100 kcal, two idlis with a katori of sambar are about 210 kcal, and rajma chawal is about 350 kcal. These are typical estimates for home cooking with moderate oil, and your recipe and katori size will change them. Oil and ghee are the biggest variables."
      relatedCalculators={[
        { name: "Macro Calculator", href: "/calculators/macro", icon: "🥗" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
        { name: "Calorie Deficit Calculator", href: "/calculators/calorie-deficit", icon: "📉" },
      ]}
      relatedArticles={[
        { title: "Best Indian Protein Sources", href: "/nutrition/indian-protein-sources", time: "9 min" },
        { title: "Indian Vegetarian Diet for Blood Sugar", href: "/indian-diet/diabetes-diet-indian-vegetarian", time: "10 min" },
        { title: "100g Protein Vegetarian Diet Under ₹150", href: "/indian-diet/100g-protein-vegetarian-diet-under-150", time: "9 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/nutrition/calories-in-indian-foods", description: DESC, dateModified: "2026-10-31" })}
      references={references}
      faqs={faqs}
    >
      <div style={{ background: "#fffbeb", border: "1.5px solid #fde68a", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
        <strong>How to use these numbers:</strong> the values below are typical estimates for home-style recipes with moderate oil, not laboratory measurements, and real recipes can differ by 25% or more. For exact values on raw ingredients, use the ICMR-NIN Indian Food Composition Tables (IFCT 2017). For tracking, consistency matters more than precision.
      </div>

      <h2>Calories and Macros per Serving</h2>
      <p>Serving sizes are written next to each food. One katori means 150 ml, and one phulka means a medium roti made from about 30 g of atta.</p>
      <table>
        <thead><tr><th>Food</th><th>Serving</th><th>kcal</th><th>Protein (g)</th><th>Carbs (g)</th><th>Fat (g)</th></tr></thead>
        <tbody>
          <tr><td>Dal, home-style tadka</td><td>1 katori (150 ml)</td><td>150</td><td>8</td><td>20</td><td>4</td></tr>
          <tr><td>Phulka (roti)</td><td>1 medium (30 g atta)</td><td>100</td><td>3.3</td><td>20</td><td>0.6</td></tr>
          <tr><td>Phulka with ghee</td><td>1 medium + 1 tsp ghee</td><td>143</td><td>3.3</td><td>20</td><td>5.6</td></tr>
          <tr><td>Plain cooked rice</td><td>1 katori (150 g)</td><td>195</td><td>4</td><td>43</td><td>0.4</td></tr>
          <tr><td>Idli</td><td>1 medium (40 g)</td><td>55</td><td>2</td><td>11</td><td>0.3</td></tr>
          <tr><td>Sambar</td><td>1 katori (150 ml)</td><td>100</td><td>4</td><td>14</td><td>3</td></tr>
          <tr><td>Idli-sambar plate</td><td>2 idli + 1 katori sambar</td><td>210</td><td>8</td><td>36</td><td>3.6</td></tr>
          <tr><td>Plain dosa</td><td>1 medium, light oil</td><td>122</td><td>3</td><td>22</td><td>2.5</td></tr>
          <tr><td>Poha with peanuts</td><td>1 plate (150 g cooked)</td><td>245</td><td>5</td><td>40</td><td>7</td></tr>
          <tr><td>Upma</td><td>1 katori (150 g)</td><td>220</td><td>5</td><td>32</td><td>8</td></tr>
          <tr><td>Rajma curry</td><td>1 katori (150 g)</td><td>155</td><td>8</td><td>22</td><td>4</td></tr>
          <tr><td>Rajma chawal</td><td>1 katori rajma + 1 katori rice</td><td>350</td><td>12</td><td>65</td><td>4.4</td></tr>
          <tr><td>Chole</td><td>1 katori (150 g)</td><td>186</td><td>9</td><td>24</td><td>6</td></tr>
          <tr><td>Mixed vegetable sabzi</td><td>1 katori, 1 tsp oil</td><td>100</td><td>2.5</td><td>10</td><td>5.5</td></tr>
          <tr><td>Aloo paratha</td><td>1 medium, 1 tsp ghee or oil</td><td>250</td><td>5</td><td>35</td><td>10</td></tr>
          <tr><td>Curd</td><td>1 katori (150 g)</td><td>84</td><td>5</td><td>6</td><td>4.5</td></tr>
          <tr><td>Chaas (buttermilk)</td><td>1 glass (200 ml)</td><td>34</td><td>2</td><td>3</td><td>1.5</td></tr>
          <tr><td>Boiled egg</td><td>1 whole</td><td>73</td><td>6.5</td><td>0.5</td><td>5</td></tr>
          <tr><td>Paneer</td><td>50 g</td><td>139</td><td>9</td><td>1</td><td>11</td></tr>
          <tr><td>Soya chunks</td><td>30 g dry</td><td>107</td><td>16</td><td>10</td><td>0.5</td></tr>
        </tbody>
      </table>

      <h2>Common Plates, Added Up</h2>
      <ul>
        <li><strong>Simple lunch:</strong> 2 phulkas, 1 katori dal, 1 katori sabzi, 1 katori curd comes to roughly 535 kcal and 22 g of protein.</li>
        <li><strong>South Indian breakfast:</strong> 2 idlis with a katori of sambar is about 210 kcal and 8 g of protein, while a plain dosa with sambar is about 220 kcal.</li>
        <li><strong>Rajma chawal plate:</strong> about 350 kcal and 12 g of protein, which is a solid carbohydrate meal and gets better with a katori of curd and a salad.</li>
      </ul>

      <h2>What Changes the Numbers Most</h2>
      <ul>
        <li><strong>Oil and ghee.</strong> One teaspoon (5 g) of oil or ghee adds roughly 45 kcal and one tablespoon adds about 135 kcal. This is the biggest and most often underestimated variable in home cooking.</li>
        <li><strong>Portion size.</strong> A heaped katori can hold 30 to 50% more than a level one.</li>
        <li><strong>Add-ons.</strong> Sugar in tea (about 20 kcal per teaspoon), papad, pickles with oil and fried sides all add up.</li>
        <li><strong>Restaurant versus home.</strong> Restaurant gravies are usually much richer than home gravies.</li>
      </ul>

      <h2>How to Measure Your Own Katori</h2>
      <p>Fill your katori to the brim with water and pour it into a measuring jug. If it holds 150 ml, the table above applies as it stands. If it holds 100 ml, multiply by about two thirds, and if it holds 200 ml, multiply by about 1.3. A kitchen scale makes this easier: weigh dry rice, atta and dal before cooking, and record the oil you add with a measuring spoon.</p>

      <h2>Using the Numbers</h2>
      <p>Calculate your daily needs with the <Link href="/calculators/tdee">TDEE calculator</Link> and split them with the <Link href="/calculators/macro">macro calculator</Link>. If your goal is fat loss, the biggest levers are usually oil, rice and roti portions and sugary drinks. If your goal is muscle gain, check that dal, curd, eggs, paneer or soya appear at every meal to hit your protein target. For blood sugar, see our guide to the <Link href="/indian-diet/diabetes-diet-indian-vegetarian">Indian vegetarian diet for blood sugar</Link>.</p>
    </ArticleLayout>
  );
}
