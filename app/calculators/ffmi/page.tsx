import type { Metadata } from "next";
import FFMIClient from "./FFMIClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/ffmi" },
  title: "FFMI Calculator India — Fat-Free Mass Index",
  description: "Calculate your Fat-Free Mass Index — the natural muscle ceiling measure used to estimate how close a lifter is to their drug-free genetic potential.",
};

export default function Page() {
  return <FFMIClient />;
}
