import type { Metadata } from "next";
import ORMClient from "./ORMClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/one-rep-max" },
  title: "One Rep Max Calculator India — Find Your 1RM",
  description: "Estimate your one rep max from any working set, and get a full training percentage table for planning your strength and hypertrophy programming.",
};

export default function Page() {
  return <ORMClient />;
}
