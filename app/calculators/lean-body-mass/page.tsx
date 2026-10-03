import type { Metadata } from "next";
import LBMClient from "./LBMClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/lean-body-mass" },
  title: "Lean Body Mass Calculator India — 3 Formulas",
  description: "Calculate your lean body mass using the Boer, James and Hume formulas, and see how it compares to your current body fat percentage estimate.",
};

export default function Page() {
  return <LBMClient />;
}
