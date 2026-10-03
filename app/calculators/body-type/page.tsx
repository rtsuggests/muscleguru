import type { Metadata } from "next";
import BodyTypeClient from "./BodyTypeClient";

export const metadata: Metadata = {
  alternates: { canonical: "/calculators/body-type" },
  title: "Body Type Calculator — Ecto, Meso, Endo",
  description: "A 7-question quiz to find your body type, with practical Indian diet and training advice tailored to ectomorph, mesomorph, and endomorph builds.",
};

export default function Page() {
  return <BodyTypeClient />;
}
