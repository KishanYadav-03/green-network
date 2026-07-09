"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Container } from "@/components/layout/container";

const LinkedinIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const XIcon = () => (
  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const footerLinks = [
  {
    title: "SOLUTIONS",
    links: [
      { label: "Wired Headsets", href: "#solutions" },
      { label: "Voice Solutions", href: "#solutions" },
      { label: "AV Integration", href: "#solutions" },
      { label: "Network Infrastructure", href: "#solutions" },
    ],
  },
  {
    title: "PRODUCTS",
    links: [
      { label: "Headsets", href: "#solutions" },
      { label: "Adaptor", href: "#solutions" },
      { label: "Accessories", href: "#solutions" },
      { label: "Dial Pad", href: "#solutions" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Alliances", href: "#clients" },
      { label: "Career", href: "#contact" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background/50 dark:bg-background/90 py-16 text-foreground select-none relative z-10 overflow-hidden">
      {/* Glow Effects */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-emerald-500/5 blur-3xl" />

      <Container>
        {/* Main Footer Links */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 mb-12">
          {/* Brand Info Column */}
          <div className="lg:col-span-4 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/assets/logos/logo.png"
                alt="Green Network logo"
                width={200}
                height={58}
                className="h-10 w-auto object-contain object-left dark:brightness-110"
              />
              <span className="flex flex-col leading-none">
                <span className="text-sm font-extrabold tracking-[0.08em] uppercase text-foreground">
                  Green<span className="text-[#2563eb]">Network</span>
                </span>
                <span className="text-[8px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mt-0.5">
                  Telecom Pvt. Ltd.
                </span>
              </span>
            </Link>
            <p className="text-sm leading-6 text-muted-foreground text-pretty max-w-sm">
              India&apos;s premiere marketing organisation delivering customer-friendly products and solutions in communications, AV, OA & IT.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-blue-500 hover:border-blue-500/30 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-200"
                aria-label="X (Twitter)"
              >
                <XIcon />
              </a>
            </div>
          </div>

          {/* Quick Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-4">
            {footerLinks.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <h3 className="text-xs font-bold tracking-widest text-[#2563eb] uppercase">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Info Column */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-xs font-bold tracking-widest text-[#2563eb] uppercase">
              VISIT US
            </h3>
            <div className="text-sm leading-6 text-muted-foreground space-y-3">
              <p>
                <span className="font-bold text-foreground">Green Network Telecom Pvt. Ltd.</span>
                <br />
                C-479, 3rd Floor, Vikaspuri,
                <br />
                New Delhi – 110018
              </p>
              <div className="space-y-1">
                <a
                  href="mailto:sales@green-network.in"
                  className="block font-medium text-[#2563eb] hover:underline"
                >
                  sales@green-network.in
                </a>
                <a
                  href="tel:01142461227"
                  className="block font-medium text-[#2563eb] hover:underline"
                >
                  011-42461227
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/80 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © 2026 Green Network Telecom Pvt. Ltd. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-foreground transition-colors duration-200 group py-1.5 px-3 rounded-full border border-transparent hover:border-border hover:bg-muted/30"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </Container>
    </footer>
  );
}
