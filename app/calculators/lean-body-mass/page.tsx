import type { Metadata } from "next";
import LBMClient from "./LBMClient";

export const metadata: Metadata = {
  title: "Lean Body Mass Calculator India — 3 Formulas",
  description: "Calculate your lean body mass using Boer, James and Hume formulas.",
};

export default function Page() {
  return <LBMClient />;
}
