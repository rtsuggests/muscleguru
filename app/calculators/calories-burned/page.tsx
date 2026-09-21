import type { Metadata } from "next";
import CaloriesBurnedClient from "./CaloriesBurnedClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/calories-burned" },
  title: "Calories Burned Calculator India",
  description: "Calculate calories burned during 40+ activities using MET values. Free calorie burn tracker for walking, running, cycling, yoga, and gym workouts.",
  keywords: ["calorie burn tracker", "calories burned calculator India", "jogging calorie burn", "how many calories burned exercise"],
};

export default function Page() {
  return <CaloriesBurnedClient />;
}
