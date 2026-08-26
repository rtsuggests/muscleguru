import type { Metadata } from "next";
import ArmyFitnessClient from "./ArmyFitnessClient";

export const metadata: Metadata = {
  title: "Army Fitness Calculator — NDA, CDS, Agniveer",
  description: "Check if you meet physical fitness standards for NDA, CDS, Agniveer, and SSB selection.",
};

export default function Page() {
  return <ArmyFitnessClient />;
}
