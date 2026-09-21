import type { Metadata } from "next";
import IFClient from "./IFClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/intermittent-fasting" },
  title: "Intermittent Fasting Calculator India",
  description: "Calculate your eating and fasting window for 16:8, 18:6, and 14:10 intermittent fasting protocols. Free calculator with Indian meal timing guidance.",
  keywords: ["fasting calculator", "intermittent fasting calculator India", "16:8 fasting window calculator", "IF eating window calculator"],
};

export default function Page() {
  return <IFClient />;
}
