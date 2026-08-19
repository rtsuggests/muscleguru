import type { Metadata } from "next";
import WHRClient from "./WHRClient";
export const metadata: Metadata = {
  title: "Waist-to-Hip Ratio Calculator India",
  description: "Calculate your waist-to-hip ratio (WHR) — a more accurate health risk indicator than BMI for Indian adults. Free WHR calculator with Indian-specific interpretation and guidelines.",
};
export default function WHRPage() { return <WHRClient />; }
