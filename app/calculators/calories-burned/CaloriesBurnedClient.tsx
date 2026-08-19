import type { Metadata } from "next";
import KetoClient from "./KetoClient";
export const metadata: Metadata = {
  title: "Keto Macro Calculator India — Low-Carb & Ketogenic Diet Macros",
  description: "Calculate your personalised keto macros — fat, protein, and net carbs — for a ketogenic or low-carb diet. Free keto calculator with Indian food context and evidence-based guidance.",
};
export default function KetoPage() { return <KetoClient />; }
