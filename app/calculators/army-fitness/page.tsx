import type { Metadata } from "next";
import ArmyFitnessClient from "./ArmyFitnessClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/army-fitness" },
  title: "Army Fitness Calculator — NDA, CDS, Agniveer",
  description: "Check if you meet the physical fitness standards for NDA, CDS, Agniveer, and SSB selection with our free India-specific army fitness calculator.",
};

export default function Page() {
  return <ArmyFitnessClient />;
}
