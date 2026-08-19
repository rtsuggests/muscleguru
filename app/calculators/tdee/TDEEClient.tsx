import type { Metadata } from "next";
import ProteinClient from "./ProteinClient";
export const metadata: Metadata = {
  title: "Protein Intake Calculator India — How Much Protein Do You Need?",
  description: "Calculate your daily protein requirement based on your weight, goal, and activity level. Science-backed recommendations for muscle gain, fat loss, and general health.",
};
export default function ProteinPage() { return <ProteinClient />; }
