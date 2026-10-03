import type { Metadata } from "next";
import VO2MaxClient from "./VO2MaxClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/vo2-max" },
  title: "VO2 Max Calculator — 3 Field Tests",
  description: "Estimate your VO2 max using the Rockport Walk Test, Cooper Run, or resting heart rate formula — no lab equipment or treadmill test required.",
};

export default function Page() {
  return <VO2MaxClient />;
}
