import type { Metadata } from "next";
import WaterClient from "./WaterClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/water-intake" },
  title: "Water Intake Calculator India — Daily Hydration",
  description: "Calculate your daily water intake needs adjusted for India's climate and activity level.",
};

export default function Page() {
  return <WaterClient />;
}
