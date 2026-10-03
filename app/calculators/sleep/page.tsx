import type { Metadata } from "next";
import SleepClient from "./SleepClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/sleep" },
  title: "Sleep Calculator — Bedtime & Wake Time",
  description: "Calculate the best bedtime or wake-up time based on 90-minute sleep cycles, so you wake up between cycles instead of mid-cycle feeling groggy.",
  keywords: ["sleep calculator India", "best time to sleep India", "sleep cycle calculator India"],
};

export default function Page() {
  return <SleepClient />;
}
