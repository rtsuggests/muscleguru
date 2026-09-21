import type { Metadata } from "next";
import VO2MaxClient from "./VO2MaxClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/vo2-max" },
  title: "VO2 Max Calculator India — 3 Field Test Methods",
  description: "Estimate your VO2 max using Rockport Walk Test, Cooper Run, and RHR formula.",
};

export default function Page() {
  return <VO2MaxClient />;
}
