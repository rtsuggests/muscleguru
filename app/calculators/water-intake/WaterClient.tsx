import type { Metadata } from "next";
import ORMClient from "./ORMClient";
export const metadata: Metadata = {
  title: "One Rep Max Calculator (1RM) — Estimate Your Maximum Lift",
  description: "Calculate your one rep max (1RM) for any lift using multiple validated formulas. Find your training percentages and design smarter, evidence-based workouts.",
};
export default function ORMPage() { return <ORMClient />; }
