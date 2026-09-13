import type { Metadata } from "next";
import ProteinClient from "./ProteinClient";

export const metadata: Metadata = {
  title: "Protein Calculator India",
  description: "Calculate your daily protein target based on weight, goal and activity level. Free calculator with Indian protein food sources for muscle gain and fat loss.",
  keywords: ["protein calculator India", "how much protein i need", "daily protein intake calculator", "protein requirement calculator"],
};

export default function Page() {
  return <ProteinClient />;
}
