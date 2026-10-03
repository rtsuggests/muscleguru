import type { Metadata } from "next";
import RunningPaceClient from "./RunningPaceClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/running-pace" },
  title: "Running Pace Calculator — Race Time",
  description: "Calculate your running pace, race finish time for 5K to marathon, and training zones with our free running pace calculator for Indian runners.",
  keywords: ["running pace calculator India", "race time calculator India"],
};

export default function Page() {
  return <RunningPaceClient />;
}
