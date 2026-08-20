import type { Metadata } from "next";
import SleepClient from "./SleepClient";

export const metadata: Metadata = {
  title: "Sleep Calculator India — Best Bedtime & Wake Time",
  description: "Calculate the best bedtime or wake-up time based on 90-minute sleep cycles. Free sleep calculator for Indian adults.",
  keywords: ["sleep calculator India", "best time to sleep India", "sleep cycle calculator India"],
};

export default function Page() {
  return <SleepClient />;
}
