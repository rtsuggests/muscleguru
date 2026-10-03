import type { Metadata } from "next";
import WaterClient from "./WaterClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/water-intake" },
  title: "Water Intake Calculator — Hydration",
  description: "Calculate your daily water intake needs, adjusted for India's climate, humidity, and activity level, with a free Indian-specific hydration tool.",
};

export default function Page() {
  return <WaterClient />;
}
