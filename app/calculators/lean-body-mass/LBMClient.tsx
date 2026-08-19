import type { Metadata } from "next";
import FFMIClient from "./FFMIClient";
export const metadata: Metadata = {
  title: "FFMI Calculator — Fat-Free Mass Index for Bodybuilders",
  description: "Calculate your Fat-Free Mass Index (FFMI) to gauge your muscle development relative to your height. Understand what your FFMI score means scientifically.",
};
export default function FFMIPage() { return <FFMIClient />; }
