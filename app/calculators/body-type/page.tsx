import type { Metadata } from "next";
import BodyTypeClient from "./BodyTypeClient";

export const metadata: Metadata = {
  title: "Body Type Calculator India — Ecto, Meso, Endo",
  description: "7-question quiz to find your body type with Indian diet and training advice.",
};

export default function Page() {
  return <BodyTypeClient />;
}
