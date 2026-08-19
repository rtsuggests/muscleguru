import type { Metadata } from "next";
import CalDefClient from "./CalDefClient";
export const metadata: Metadata = {
  title: "Calorie Deficit Calculator — How Much to Eat to Lose Fat",
  description: "Calculate the right calorie deficit for sustainable fat loss. Find your daily calorie target to lose 0.5kg per week without losing muscle.",
};
export default function CalDefPage() { return <CalDefClient />; }
