import type { Metadata } from "next";
import KetoClient from "./KetoClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/keto-macro" },
  title: "Keto Macro Calculator — 4 Variants",
  description: "Calculate your keto macros for 4 keto variants, with a practical Indian keto food guide covering what to eat and what to avoid on each one.",
};

export default function Page() {
  return <KetoClient />;
}
