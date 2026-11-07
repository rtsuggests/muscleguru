import type { Metadata } from "next";
import IDRSClient from "./IDRSClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/idrs" },
  title: "IDRS Diabetes Risk Score Calculator India",
  description: "Calculate your Indian Diabetes Risk Score (IDRS) from age, waist size, activity and family history, and see what your score means.",
  keywords: ["IDRS calculator", "Indian Diabetes Risk Score", "diabetes risk calculator India", "normal waist size Indian diabetes"],
};

export default function Page() {
  return <IDRSClient />;
}
