import type { Metadata } from "next";
import DiabetesBMIClient from "./DiabetesBMIClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/diabetes-bmi" },
  title: "Diabetes Risk & BMI Calculator India",
  description: "Assess your type 2 diabetes risk using Indian-adapted BMI thresholds and waist circumference, which flag risk earlier than global cutoffs do.",
};

export default function Page() {
  return <DiabetesBMIClient />;
}
