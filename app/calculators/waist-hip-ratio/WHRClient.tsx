import type { Metadata } from "next";
import CaloriesBurnedClient from "./CaloriesBurnedClient";
export const metadata: Metadata = {
  title: "Calories Burned Calculator India — Walking, Running, Cycling & More",
  description: "Calculate calories burned during exercise — walking, running, cycling, yoga, swimming, gym workouts and more. Free calculator using MET values with Indian activity context.",
};
export default function CaloriesBurnedPage() { return <CaloriesBurnedClient />; }
