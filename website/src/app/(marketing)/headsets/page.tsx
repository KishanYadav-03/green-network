import { Section } from "@/components/shared/section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Headsets",
  path: "/headsets",
});

export default function HeadsetsPage() {
  return (
    <Section>
      <h1 className="text-3xl font-semibold tracking-tight">Headsets</h1>
      <p className="mt-4 text-muted-foreground">Placeholder page.</p>
    </Section>
  );
}

