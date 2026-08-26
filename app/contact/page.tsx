import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact MuscleGuru.in",
  description: "Get in touch with the MuscleGuru.in team — questions, corrections, feedback, or collaboration enquiries.",
};

export default function Page() {
  return <ContactClient />;
}
