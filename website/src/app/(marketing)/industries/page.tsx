import { buildMetadata } from "@/lib/seo";
import { IndustriesClient } from "./industries-client";

export const metadata = buildMetadata({
  title: "Industries",
  description: "Communication headsets and audio solutions tailored for Contact Centers, Corporate Offices, Healthcare, Manufacturing, Education, Retail, and more.",
  path: "/industries",
});

export default function IndustriesPage() {
  return <IndustriesClient />;
}
