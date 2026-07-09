import { Mail, Phone } from "lucide-react";

import { Container } from "@/components/layout/container";

export function TopBar() {
  return (
    <div className="border-b border-border/60 bg-[#0f1d3a] py-2 text-white">
      <Container className="flex items-center justify-end gap-6 text-sm">
        <a
          href="mailto:sales@green-network.in"
          className="flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
        >
          <Mail className="h-3.5 w-3.5 shrink-0" />
          <span>sales@green-network.in</span>
        </a>
        <span className="h-3.5 w-px bg-white/30" aria-hidden="true" />
        <a
          href="tel:01142461227"
          className="flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
        >
          <Phone className="h-3.5 w-3.5 shrink-0" />
          <span>011-42461227</span>
        </a>
      </Container>
    </div>
  );
}
