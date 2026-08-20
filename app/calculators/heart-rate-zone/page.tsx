import type { Metadata } from "next";
import HRZoneClient from "./HRZoneClient";

export const metadata: Metadata = {
  title: "Heart Rate Zone Calculator India — 5 Zones",
  description: "Calculate your 5 personalised heart rate training zones using the Karvonen method. Free heart rate zone calculator.",
  keywords: ["heart rate zone calculator India", "training zones calculator India"],
};

export default function Page() {
  return <HRZoneClient />;
}
