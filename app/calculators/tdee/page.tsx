import type { Metadata } from "next";
import TDEEClient from "./TDEEClient";

export const metadata: Metadata = {
  title: "TDEE Calculator India — Total Daily Energy Expenditure",
  description: "Calculate your Total Daily Energy Expenditure using the Mifflin-St Jeor equation.",
};

export default function Page() {
  return <TDEEClient />;
}
