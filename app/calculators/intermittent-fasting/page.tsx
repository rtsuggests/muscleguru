import type { Metadata } from "next";
import IFClient from "./IFClient";

export const metadata: Metadata = {
  title: "Intermittent Fasting Calculator India — 16:8, 5:2",
  description: "Calculate your eating window and fasting window for 16:8, 18:6, and 5:2 protocols.",
};

export default function Page() {
  return <IFClient />;
}
