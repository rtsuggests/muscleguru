import type { Metadata } from "next";
import MuscleGainClient from "./MuscleGainClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/muscle-gain-rate" },
  title: "Muscle Gain Rate Calculator India",
  description: "Calculate your realistic maximum natural muscle gain rate per month based on training age.",
};

export default function Page() {
  return <MuscleGainClient />;
}
