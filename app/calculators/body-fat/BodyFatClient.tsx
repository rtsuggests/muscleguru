import type { Metadata } from "next";
import MacroClient from "./MacroClient";
export const metadata: Metadata = {
  title: "Macro Calculator India — Calculate Protein, Carbs & Fat Targets",
  description: "Free macronutrient calculator. Get your personalised daily protein, carbohydrate, and fat targets based on your TDEE and fitness goal.",
};
export default function MacroPage() { return <MacroClient />; }
