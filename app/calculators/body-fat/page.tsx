import type { Metadata } from "next";
import BodyFatClient from "./BodyFatClient";

export const metadata: Metadata = {
  title: "Body Fat Calculator India — US Navy Method",
  description: "Calculate your body fat percentage at home using the US Navy circumference method. Free, accurate within 3-4% — no calipers or scans needed.",
  keywords: ["body fat percentage calculator", "how can i check my body fat percentage", "body fat percentage measurement", "US Navy body fat method"],
};

export default function Page() {
  return <BodyFatClient />;
}
