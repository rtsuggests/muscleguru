import type { Metadata } from "next";
import BMIClient from "./BMIClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/bmi" },
  title: "BMI Calculator India — Indian-Adapted Cutoffs",
  description: "Free BMI calculator for Indian adults using ICMR-adapted cutoffs. Overweight starts at BMI 23 for Indians.",
  keywords: ["BMI calculator India", "Indian BMI chart", "body mass index India"],
};

export default function Page() {
  return <BMIClient />;
}
