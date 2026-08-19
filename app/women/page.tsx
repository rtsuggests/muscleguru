import type { Metadata } from "next";
import WomenLiftingClient from "./WomenLiftingClient";

export const metadata: Metadata = {
  title: "Women's Fitness India — Strength & Health Guides",
  description: "Indian women worry that strength training will make them look bulky. Here is what the research actually shows — and why lifting weights is one of the best things women can do for their health and body composition.",
  openGraph: {
    title: "Will Lifting Weights Make Women Bulky? Science Says No — MuscleGuru.in",
    description: "The definitive evidence-based answer to the most common question Indian women ask about strength training.",
  },
};

export default function WomenLiftingPage() {
  return <WomenLiftingClient />;
}
