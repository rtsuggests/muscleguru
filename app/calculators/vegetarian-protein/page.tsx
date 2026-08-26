import type { Metadata } from "next";
import VegProteinClient from "./VegProteinClient";

export const metadata: Metadata = {
  title: "Vegetarian Protein Calculator India",
  description: "Calculate your daily protein target and see how to meet it with vegetarian Indian foods.",
};

export default function Page() {
  return <VegProteinClient />;
}
