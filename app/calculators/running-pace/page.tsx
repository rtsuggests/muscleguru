import type { Metadata } from "next";
import RunningPaceClient from "./RunningPaceClient";

export const metadata: Metadata = {
  title: "Running Pace Calculator India — Pace & Race Time",
  description: "Calculate your running pace, race finish time for 5K to marathon, and training zones. Free running pace calculator.",
  keywords: ["running pace calculator India", "race time calculator India"],
};

export default function Page() {
  return <RunningPaceClient />;
}
