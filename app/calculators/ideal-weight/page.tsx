import type { Metadata } from "next";
import IdealWeightClient from "./IdealWeightClient";

export const metadata: Metadata = {
  title: "Ideal Weight Calculator India — 4 Formulas",
  description: "Find your ideal body weight range for your height using four validated scientific formulas. Free ideal weight calculator for Indian adults with evidence-based interpretation.",
  openGraph: {
    title: "Ideal Weight Calculator — MuscleGuru.in",
    description: "Free ideal weight calculator using Robinson, Miller, Devine and Hamwi formulas. Indian-adapted ranges included.",
  },
};

export default function IdealWeightPage() {
  return <IdealWeightClient />;
}
