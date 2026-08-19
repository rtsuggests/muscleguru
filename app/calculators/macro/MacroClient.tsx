import type { Metadata } from "next";
import WaterClient from "./WaterClient";
export const metadata: Metadata = {
  title: "Water Intake Calculator — Daily Hydration Requirements",
  description: "Calculate your daily water intake requirement based on body weight, activity level, and climate. Science-backed hydration guidance for Indian adults.",
};
export default function WaterPage() { return <WaterClient />; }
