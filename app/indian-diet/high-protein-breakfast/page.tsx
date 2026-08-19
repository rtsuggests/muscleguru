import type { Metadata } from "next";
import VO2MaxClient from "./VO2MaxClient";

export const metadata: Metadata = {
  title: "High Protein Indian Breakfast — 20 Easy Recipes",
  description: "Calculate your estimated VO2 max using the Rockport Walk Test, resting heart rate method, or Cooper 12-minute run test. Free VO2 max calculator with Indian fitness level benchmarks and evidence-based interpretation.",
  keywords: ["VO2 max calculator India", "cardio fitness test India", "aerobic capacity calculator", "VO2 max test at home", "fitness level calculator India"],
  openGraph: {
    title: "VO2 Max Calculator — Estimate Your Cardiorespiratory Fitness",
    description: "Free VO2 max calculator using 3 validated methods. Find your cardio fitness level with Indian population benchmarks.",
  },
};

export default function VO2MaxPage() {
  return <VO2MaxClient />;
}
