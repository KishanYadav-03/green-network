import type { ReactNode } from "react";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { TopBar } from "@/components/layout/top-bar";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="fixed top-0 left-0 right-0 z-40 flex flex-col">
        <TopBar />
        <SiteHeader />
      </div>
      <main className="flex-1 pt-[118px]">{children}</main>
      <SiteFooter />
    </div>
  );
}

