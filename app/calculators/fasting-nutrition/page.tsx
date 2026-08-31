import type { Metadata } from "next";
import FastingNutritionClient from "./FastingNutritionClient";

export const metadata: Metadata = {
  title: "Fasting-Safe Nutrition Calculator India — Navratri, Ekadashi",
  description: "Calculate your calorie and protein targets during Navratri, Ekadashi, and other Hindu fasting periods using only fasting-permitted foods.",
  keywords: ["navratri diet calculator", "vrat calorie calculator", "fasting nutrition calculator India", "ekadashi diet calculator"],
};

export default function Page() {
  return <FastingNutritionClient />;
}
