import type { Metadata } from "next";
import BodyFatClient from "./BodyFatClient";

export const metadata: Metadata = {
  title: "Body Fat Calculator India — US Navy Method",
  description: "Calculate your body fat percentage using the US Navy circumference method. Free calculator for Indian adults.",
};

export default function Page() {
  return <BodyFatClient />;
}
