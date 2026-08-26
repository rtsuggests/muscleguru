import type { Metadata } from "next";
import ProteinClient from "./ProteinClient";

export const metadata: Metadata = {
  title: "Protein Calculator India — Find Your Daily Target",
  description: "Calculate your daily protein intake target based on weight, goal and activity level.",
};

export default function Page() {
  return <ProteinClient />;
}
