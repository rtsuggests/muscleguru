import type { Metadata } from "next";
import ORMClient from "./ORMClient";

export const metadata: Metadata = {
  title: "One Rep Max Calculator India — Find Your 1RM",
  description: "Estimate your one rep max and get a full training percentage table.",
};

export default function Page() {
  return <ORMClient />;
}
