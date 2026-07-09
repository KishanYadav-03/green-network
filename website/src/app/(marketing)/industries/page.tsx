import { Section } from "@/components/shared/section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Industries",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <Section>
      <h1 className="text-3xl font-semibold tracking-tight">Industries</h1>
      <p className="mt-4 text-muted-foreground">Placeholder page.</p>
    </Section>
  );
}

