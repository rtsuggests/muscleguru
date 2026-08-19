import type { Metadata } from "next";
import LBMClient from "./LBMClient";
export const metadata: Metadata = {
  title: "Lean Body Mass Calculator — Free LBM Estimator",
  description: "Calculate your Lean Body Mass (LBM) using the Boer, James, and Hume formulas. Understand what your lean mass means for fitness, nutrition, and health.",
};
export default function LBMPage() { return <LBMClient />; }
