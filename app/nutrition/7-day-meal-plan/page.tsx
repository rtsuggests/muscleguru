import type { Metadata } from "next";
import MealPlanClient from "./MealPlanClient";

export const metadata: Metadata = {
  title: "7-Day High-Protein Indian Meal Plan (Veg & Non-Veg)",
  description: "A complete 7-day high-protein Indian meal plan for muscle gain and fat loss, with vegetarian and non-vegetarian options and daily calorie and protein targets.",
  keywords: ["Indian meal plan high protein", "7 day diet plan India", "vegetarian protein meal plan India"],
  alternates: { canonical: "/nutrition/7-day-meal-plan" },
};

export default function Page() {
  return <MealPlanClient />;
}
