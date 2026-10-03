import type { Metadata } from "next";
import MyProgressClient from "./MyProgressClient";

export const metadata: Metadata = {
  alternates: { canonical: "/my-progress" },
  title: "My Progress — Saved Calculator Results",
  description: "View all your saved calculator results in one place and track your BMI, TDEE, protein targets, and other fitness numbers over time, free.",
};

export default function Page() {
  return <MyProgressClient />;
}
