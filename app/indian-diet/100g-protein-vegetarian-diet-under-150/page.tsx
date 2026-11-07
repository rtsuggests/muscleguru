import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "100g Protein Vegetarian Diet Under ₹150 a Day (Without Whey)";
const DESC = "A 100 g protein vegetarian diet chart under ₹150 a day with no whey, with cost per 10 g of protein for soya, dal, besan, paneer, milk and eggs.";

export const metadata: Metadata = {
  alternates: { canonical: "/indian-diet/100g-protein-vegetarian-diet-under-150" },
  title: "100g Protein Veg Diet Under ₹150 a Day",
  description: DESC,
  keywords: ["100g protein vegetarian diet India", "cheap protein vegetarian India", "protein diet under 150 rupees", "high protein veg diet without whey"],
};

const faqs = [
  { q: "What is the cheapest source of protein in India?", a: "On the prices used here, soya chunks, chana dal, besan, moong dal and peanuts all cost roughly ₹3 to ₹5 per 10 g of protein, making them the cheapest options by a wide margin. Eggs come next at around ₹9, while paneer, milk and curd cost about ₹19 to ₹23 per 10 g." },
  { q: "Is soya chunks safe to eat every day?", a: "For most healthy adults, moderate daily amounts (such as 30 to 50 g of dry chunks) fit comfortably into a balanced diet. Soya is a complete plant protein. If you have a thyroid condition, take levothyroxine, or have been advised to limit soy, check with your doctor and keep intake consistent." },
  { q: "Is plant protein as good as animal protein?", a: "Soya is close to animal protein in quality. Pulses and cereals are somewhat less digestible and each is low in a different amino acid, so eating a mix across the day (dal with roti or rice, for example) works well. If you rely mostly on plant protein, aim for the upper end of your target, around 1.6 to 2 g per kg of body weight." },
  { q: "How much protein do I actually need?", a: "Around 1.6 g per kg of body weight for active people who train, so about 100 g for a 62 kg person. Use our protein calculator for your own number. Most sedentary adults need less." },
  { q: "Do I need whey protein to hit 100 g?", a: "No. The sample day below reaches 100 g from ordinary Indian food. The ICMR-NIN Dietary Guidelines for Indians also advise getting protein from food rather than relying on supplements." },
];

const references = [
  "Longvah T, Ananthan R, Bhaskarachary K, Venkaiah K. Indian Food Composition Tables 2017. National Institute of Nutrition, ICMR; 2017 (protein content values are rounded approximations; check pack labels for exact figures).",
  "ICMR-National Institute of Nutrition. Dietary Guidelines for Indians, 2024.",
  "Jäger R, et al. International Society of Sports Nutrition Position Stand: protein and exercise. J Int Soc Sports Nutr. 2017;14:20.",
  "Retail price data: Department of Consumer Affairs retail price monitoring (moong dal, chana dal) and public market price trackers (milk, paneer, curd, eggs), October 2026. Soya chunks, besan, peanuts, atta and rice prices are assumed typical shelf prices.",
];

export default function ProteinUnder150Page() {
  return (
    <ArticleLayout
      title="100g Protein Vegetarian Diet Under ₹150 a Day (Without Whey)"
      category="Indian Diet"
      categoryHref="/indian-diet"
      readTime="9 min"
      lastUpdated="October 2026"
      summary="You can reach 100 g of protein a day on a vegetarian diet for roughly ₹110 using soya chunks, dal, besan, peanuts, milk and curd, with no whey. Soya chunks, chana dal, besan and moong dal cost about ₹3 to ₹5 per 10 g of protein, while paneer, milk, curd and whey cost four to ten times more. Prices change by city, so use the formula to check your own."
      relatedCalculators={[
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
        { name: "Vegetarian Protein Calculator", href: "/calculators/vegetarian-protein", icon: "🌱" },
        { name: "TDEE Calculator", href: "/calculators/tdee", icon: "🔥" },
      ]}
      relatedArticles={[
        { title: "Hostel and PG Muscle Gain Diet (No Cooking)", href: "/muscle-gain/hostel-pg-muscle-gain-diet", time: "9 min" },
        { title: "Best Indian Protein Sources", href: "/nutrition/indian-protein-sources", time: "9 min" },
        { title: "How to Spot Fake Whey Protein in India", href: "/supplements/how-to-spot-fake-whey-protein-india", time: "9 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/indian-diet/100g-protein-vegetarian-diet-under-150", description: DESC, dateModified: "2026-10-31" })}
      references={references}
      faqs={faqs}
    >
      <div style={{ background: "#fffbeb", border: "1.5px solid #fde68a", borderRadius: "0.75rem", padding: "1rem 1.25rem", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
        <strong>About the prices:</strong> food prices vary by city, brand and week. Moong dal (about ₹113/kg) and chana dal (about ₹91/kg) come from government retail price monitoring in October 2026; milk (about ₹60/L), paneer (about ₹375/kg), curd (about ₹72/kg) and eggs (about ₹6 each) come from public market price trackers the same month. Soya chunks (₹150/kg), besan (₹100/kg), peanuts (₹130/kg), atta and rice are <strong>assumed</strong> typical shelf prices that I could not verify. The ranking is what matters, and the formula below lets you redo it with your own prices.
      </div>

      <h2>Cost per 10 g of Protein</h2>
      <p>To compare foods fairly, divide the price per kg by the grams of protein per 100 g. That gives the cost of 10 g of protein. The table uses dry weights, because that is how dal and chunks are sold.</p>
      <table>
        <thead><tr><th>Food</th><th>Protein per 100 g (approx.)</th><th>Price used</th><th>Cost per 10 g protein</th></tr></thead>
        <tbody>
          <tr><td>Soya chunks (dry)</td><td>52 g</td><td>₹150/kg</td><td>about ₹2.9</td></tr>
          <tr><td>Chana dal (dry)</td><td>21 g</td><td>₹91/kg</td><td>about ₹4.3</td></tr>
          <tr><td>Besan (chickpea flour)</td><td>22 g</td><td>₹100/kg</td><td>about ₹4.5</td></tr>
          <tr><td>Moong dal (dry)</td><td>24 g</td><td>₹113/kg</td><td>about ₹4.7</td></tr>
          <tr><td>Peanuts (raw)</td><td>25 g</td><td>₹130/kg</td><td>about ₹5.2</td></tr>
          <tr><td>Egg (1 whole)</td><td>6.5 g per egg</td><td>₹6 each</td><td>about ₹9.2</td></tr>
          <tr><td>Milk</td><td>3.2 g per 100 ml</td><td>₹60/L</td><td>about ₹18.8</td></tr>
          <tr><td>Paneer</td><td>18 g</td><td>₹375/kg</td><td>about ₹20.8</td></tr>
          <tr><td>Curd</td><td>3.1 g</td><td>₹72/kg</td><td>about ₹23.2</td></tr>
          <tr><td>Whey concentrate (about 75% protein)</td><td>75 g</td><td>₹2,000 to ₹3,500/kg (assumed)</td><td>about ₹27 to ₹47</td></tr>
        </tbody>
      </table>
      <p><strong>Your own check:</strong> cost per 10 g of protein = price of the pack ÷ total grams of protein in the pack × 10. Read the protein per 100 g on the label. This also works for ready-to-drink protein lassi or buttermilk. I could not verify current pack prices and protein content for those products, so they are not in the table, but a quick calculation on the label will show whether they are good value.</p>
      <p>Two things stand out. Dal, besan, peanuts and soya give protein at a fraction of the price of dairy. And whey is not a budget option: per gram of protein it costs more than paneer on these prices. You buy it for convenience, not economy.</p>

      <h2>A 100 g Protein Day for About ₹110</h2>
      <table>
        <thead><tr><th>Food</th><th>Quantity</th><th>Protein</th><th>Approx. cost</th></tr></thead>
        <tbody>
          <tr><td>Soya chunks (dry weight, soaked and cooked)</td><td>40 g</td><td>20.8 g</td><td>₹6.0</td></tr>
          <tr><td>Moong dal (dry weight)</td><td>80 g</td><td>19.2 g</td><td>₹9.0</td></tr>
          <tr><td>Besan chilla</td><td>60 g besan</td><td>13.2 g</td><td>₹6.0</td></tr>
          <tr><td>Peanuts</td><td>30 g</td><td>7.5 g</td><td>₹3.9</td></tr>
          <tr><td>Milk (tea and a glass)</td><td>400 ml</td><td>12.8 g</td><td>₹24.0</td></tr>
          <tr><td>Curd</td><td>150 g</td><td>4.7 g</td><td>₹10.8</td></tr>
          <tr><td>Whole wheat atta (about 4 rotis)</td><td>100 g</td><td>11.0 g</td><td>₹4.5</td></tr>
          <tr><td>Rice (dry weight)</td><td>80 g</td><td>5.4 g</td><td>₹4.4</td></tr>
          <tr><td>Roasted chana</td><td>30 g</td><td>6.0 g</td><td>₹3.9</td></tr>
          <tr><td><strong>Food total</strong></td><td></td><td><strong>about 100 g</strong></td><td><strong>about ₹72</strong></td></tr>
          <tr><td>Vegetables, oil and spices</td><td></td><td>extra protein not counted</td><td>about ₹38</td></tr>
          <tr><td><strong>Day total</strong></td><td></td><td></td><td><strong>about ₹110</strong></td></tr>
        </tbody>
      </table>
      <p>That leaves around ₹40 of headroom, which you can spend on paneer, eggs, fruit or a bigger portion of vegetables. Gas, electricity and your time are not counted.</p>

      <h2>How the Day Works</h2>
      <ul>
        <li><strong>Breakfast:</strong> besan chilla with curd and tea made with milk.</li>
        <li><strong>Lunch:</strong> two rotis, moong dal, vegetables and a glass of milk or chaas.</li>
        <li><strong>Evening:</strong> roasted chana and peanuts.</li>
        <li><strong>Dinner:</strong> soya chunk curry with rice or rotis, plus vegetables.</li>
      </ul>

      <h2>Making Plant Protein Work</h2>
      <ul>
        <li><strong>Eat a mix.</strong> Soya is a high-quality protein by itself, while pulses and cereals complement each other. Dal with roti or rice is a classic pairing for this reason.</li>
        <li><strong>Aim a little higher.</strong> Plant proteins are somewhat less digestible than animal proteins, so target the upper end of your range if you eat mostly vegetarian.</li>
        <li><strong>Cook soya chunks well.</strong> Soak them in hot water, squeeze out the water and cook them in a flavourful gravy so they are easy to eat daily.</li>
        <li><strong>Mind vitamin B12.</strong> Vegetarians should get B12 from dairy or a supplement, since plant foods do not provide it reliably.</li>
        <li><strong>Add eggs or paneer if you can.</strong> They add convenience and variety, but you do not need them to reach 100 g.</li>
      </ul>

      <h2>Who Should Be Careful</h2>
      <p>People with kidney disease, those advised to limit protein, and anyone with a thyroid condition who has been told to watch soy intake should follow their doctor's advice. This plan is for healthy adults. Needs differ if you are younger than 18, pregnant or breastfeeding.</p>
    </ArticleLayout>
  );
}
