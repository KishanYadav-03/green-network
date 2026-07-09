import { Section } from "@/components/shared/section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Clients",
  path: "/our-clients",
});

export default function OurClientsPage() {
  return (
    <Section>
      <h1 className="text-3xl font-semibold tracking-tight">Our Clients</h1>
      <p className="mt-4 text-muted-foreground">Placeholder page.</p>
    </Section>
  );
}

