import type { Metadata } from "next";
import PregnancyClient from "./PregnancyClient";
export const metadata: Metadata = {
  title: "Pregnancy Weight Gain Calculator India — How Much Weight to Gain",
  description: "Calculate the recommended pregnancy weight gain based on your pre-pregnancy BMI. Free calculator with Indian dietary guidance, trimester breakdown, and evidence-based advice.",
};
export default function PregnancyPage() { return <PregnancyClient />; }
