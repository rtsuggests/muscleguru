import type { Metadata } from "next";
import ArticleLayout from "@/components/layout/ArticleLayout";
import { articleSchema } from "@/lib/articleSchema";

const TITLE = "Egg Protein Guide: Whole Eggs vs Egg Whites & How Many to Eat";
const DESC = "How much protein is in an egg, whole egg vs egg white, whether cooking method matters, and how many eggs are safe to eat per day.";

export const metadata: Metadata = {
  alternates: { canonical: "/nutrition/egg-protein-guide" },
  title: "Egg Protein Guide — Whole vs White",
  description: DESC,
  keywords: ["egg protein content", "whole egg vs egg white protein", "how many eggs per day safe"],
};

const faqs = [
  { q: "How much protein is in one egg?", a: "A large whole egg has roughly 6 g of protein. About 3.5–4 g comes from the white, and the rest from the yolk." },
  { q: "Is egg white or whole egg better for muscle gain?", a: "The yolk contains roughly half the egg's protein plus most of its vitamins, healthy fats and choline. Whole eggs are generally the better default; egg whites are useful for boosting protein without extra calories on top of whole eggs already in the diet." },
  { q: "How many eggs is it safe to eat per day?", a: "Current dietary guidance in most countries, including updated US guidelines, no longer sets a strict daily cholesterol limit for healthy people, and eggs are considered a reasonable part of a balanced diet for most. People with specific cardiovascular risk factors should follow their doctor's individual guidance rather than a generic number." },
  { q: "Does cooking method affect egg protein content?", a: "The total protein content stays essentially the same across boiling, frying or scrambling. Cooking with excess oil or butter adds calories from fat, not more protein." },
];

const references = [
  "US Department of Agriculture, FoodData Central: Egg, whole, cooked.",
  "US Dietary Guidelines Advisory Committee. Dietary Guidelines for Americans, 2020–2025.",
];

export default function EggProteinGuidePage() {
  return (
    <ArticleLayout
      title="Egg Protein Guide: Whole Eggs vs Egg Whites"
      category="Nutrition"
      categoryHref="/nutrition"
      readTime="7 min"
      lastUpdated="September 2026"
      summary="A large egg has roughly 6 g of protein, split between the white (~3.5-4 g) and the yolk (~2-2.5 g), plus most of its vitamins and healthy fats. Whole eggs are generally the better default over egg whites alone, and current dietary guidance no longer sets a strict daily limit for most healthy people."
      relatedCalculators={[
        { name: "Protein Calculator", href: "/calculators/protein", icon: "💪" },
      ]}
      relatedArticles={[
        { title: "High-Protein Indian Breakfast Ideas", href: "/indian-diet/high-protein-breakfast", time: "7 min" },
        { title: "How Much Protein Do You Need?", href: "/nutrition/how-much-protein", time: "7 min" },
      ]}
      schema={articleSchema({ headline: TITLE, path: "/nutrition/egg-protein-guide", description: DESC, dateModified: "2026-09-21" })}
      references={references}
      faqs={faqs}
    >
      <h2>How Much Protein Is in One Egg?</h2>
      <p>A large whole egg (about 50 g) contains roughly 6 g of protein — about 3.5–4 g from the white and 2–2.5 g from the yolk. The protein in egg is considered a high-quality complete protein, containing all essential amino acids in proportions the body uses efficiently.</p>

      <h2>Whole Egg vs Egg White: Which Is Better?</h2>
      <table>
        <thead><tr><th></th><th>Whole egg</th><th>Egg white only</th></tr></thead>
        <tbody>
          <tr><td>Protein</td><td>~6 g</td><td>~3.5–4 g</td></tr>
          <tr><td>Calories</td><td>~70–75</td><td>~17</td></tr>
          <tr><td>Fat</td><td>~5 g (mostly in yolk)</td><td>~0 g</td></tr>
          <tr><td>Vitamins/minerals</td><td>Most are in the yolk (vitamin D, B12, choline)</td><td>Minimal</td></tr>
        </tbody>
      </table>
      <p>Whole eggs are generally the better default — the yolk holds most of the micronutrients and a large share of the protein. Egg whites are useful when you want to add protein without extra calories on top of whole eggs you're already eating, for example if you're eating 2 whole eggs plus 2–3 extra whites to hit a specific protein target.</p>

      <h2>Does Cooking Method Affect Protein Content?</h2>
      <p>No — boiling, frying, scrambling or poaching all preserve essentially the same protein content. What changes is the calorie count if you cook with added oil, butter or ghee, which adds fat calories, not additional protein.</p>

      <h2>How Many Eggs Should You Eat Per Day?</h2>
      <p>Older guidance set strict daily cholesterol limits, but current dietary guidelines in most countries, including the US Dietary Guidelines, no longer impose a specific daily cholesterol cap for healthy people, treating eggs as a reasonable part of a balanced diet. For most healthy adults, 1–3 eggs a day fits comfortably within a normal diet. People with existing cardiovascular risk factors or conditions like diabetes should follow their doctor's specific guidance rather than a generic number, since individual response can vary.</p>

      <h2>Egg Protein for Vegetarians</h2>
      <p>Eggs are accepted in many, though not all, Indian vegetarian diets (ovo-vegetarian). For strict vegetarians who don't eat eggs, paneer, dal, soya chunks and curd are comparable protein sources — see the guide on Indian protein sources for a full comparison.</p>

      <h2>Quick Reference: Protein by Egg Count</h2>
      <table>
        <thead><tr><th>Eggs</th><th>Approx. protein</th></tr></thead>
        <tbody>
          <tr><td>2 whole eggs</td><td>~12 g</td></tr>
          <tr><td>3 whole eggs</td><td>~18 g</td></tr>
          <tr><td>2 whole + 2 whites</td><td>~19–20 g</td></tr>
          <tr><td>4 egg whites only</td><td>~14–16 g</td></tr>
        </tbody>
      </table>
    </ArticleLayout>
  );
}
