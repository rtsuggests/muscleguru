import type { Metadata } from "next";
import CalDefClient from "./CalDefClient";

export const metadata: Metadata = {
  title: "Calorie Deficit Calculator India — Fat Loss",
  description: "Calculate your daily calorie target for fat loss with a personalised weekly timeline.",
};

export default function Page() {
  return <CalDefClient />;
}
