import type { Metadata } from "next";
import PregnancyClient from "./PregnancyClient";

export const metadata: Metadata = {
  title: "Pregnancy Weight Gain Calculator India",
  description: "Calculate healthy pregnancy weight gain in kg by trimester, based on your pre-pregnancy BMI using ICMR guidelines. Free calculator for Indian women.",
  keywords: ["pregnancy weight gain kg", "healthy pregnancy weight gain calculator", "how much weight gain pregnancy trimester India"],
};

export default function Page() {
  return <PregnancyClient />;
}
