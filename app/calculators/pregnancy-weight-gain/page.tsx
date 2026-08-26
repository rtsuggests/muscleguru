import type { Metadata } from "next";
import PregnancyClient from "./PregnancyClient";

export const metadata: Metadata = {
  title: "Pregnancy Weight Gain Calculator India",
  description: "Calculate healthy pregnancy weight gain with trimester breakdown and Indian dietary guidance.",
};

export default function Page() {
  return <PregnancyClient />;
}
