import type { Metadata } from "next";
import VegProteinClient from "./VegProteinClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/vegetarian-protein" },
  title: "Vegetarian Protein Calculator India",
  description: "Calculate your daily protein target and see exactly how to meet it with vegetarian Indian foods like dal, paneer, soya chunks, and curd.",
};

export default function Page() {
  return <VegProteinClient />;
}
