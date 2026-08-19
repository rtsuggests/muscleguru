import type { Metadata } from "next";
import ArmyFitnessClient from "./ArmyFitnessClient";

export const metadata: Metadata = {
  title: "Indian Army Fitness Calculator — UPSC NDA, CDS, Agniveer Physical Tests",
  description: "Free Indian Army fitness calculator for NDA, CDS, Agniveer, and SSB candidates. Check if you meet physical fitness standards for push-ups, pull-ups, running, and BMI requirements.",
  keywords: ["Indian Army fitness test calculator", "NDA physical test standards", "CDS fitness requirements", "Agniveer physical test India", "army fitness India", "military fitness calculator India"],
  openGraph: {
    title: "Indian Army Fitness Calculator — NDA, CDS, Agniveer Standards",
    description: "Check your fitness against Indian Army physical standards. Free calculator for NDA, CDS, and Agniveer aspirants.",
  },
};

export default function ArmyFitnessPage() {
  return <ArmyFitnessClient />;
}
