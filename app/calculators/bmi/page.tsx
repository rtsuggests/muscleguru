import type { Metadata } from "next";
import BMIClient from "./BMIClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/bmi" },
  title: "BMI Calculator India — ICMR Cutoffs",
  description: "Free BMI calculator for Indian adults using ICMR-adapted cutoffs, where overweight starts at BMI 23, not the global 25 standard used elsewhere.",
  keywords: ["BMI calculator India", "Indian BMI chart", "body mass index India"],
};

export default function Page() {
  return <BMIClient />;
}
