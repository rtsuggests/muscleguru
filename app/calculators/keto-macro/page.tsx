import type { Metadata } from "next";
import KetoClient from "./KetoClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/keto-macro" },
  title: "Keto Macro Calculator India — 4 Keto Variants",
  description: "Calculate keto macros for 4 keto variants with Indian keto food guide.",
};

export default function Page() {
  return <KetoClient />;
}
