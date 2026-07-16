"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/navigation";

const navItems: NavItem[] = [
  { href: "/#home",      label: "Home" },
  { href: "/#headsets",  label: "Headsets" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#industries",label: "Industries" },
  { href: "/#clients",   label: "Our Clients" },
  { href: "/#about",     label: "About us" },
  { href: "/#contact",   label: "Contact" },
];

export function SiteHeader() {
  const [activeHash, setActiveHash] = useState("#home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || "#home");
    };

    const handleScroll = () => {
      // Only track scroll hashes on the homepage
      if (pathname !== "/") return;

      const scrollPosition = window.scrollY + 160; // offset for sticky header

      // If at the very top of the page, always active #home
      if (window.scrollY < 50) {
        setActiveHash("#home");
        return;
      }

      // If scrolled to the bottom of the page, active #contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveHash("#contact");
        return;
      }

      // Find the currently visible section
      for (const item of navItems) {
        let id = "";
        if (item.href.startsWith("/#")) {
          id = item.href.substring(2);
        } else if (item.href.startsWith("#")) {
          id = item.href.substring(1);
        }
        if (!id) continue;

        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveHash("#" + id);
            break;
          }
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleHashChange();
    handleScroll();

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const isActive = (itemHref: string) => {
    if (pathname === "/industries") {
      return itemHref === "/#industries" || itemHref === "/industries";
    }
    if (pathname === "/headsets") {
      return itemHref === "/#headsets" || itemHref === "/headsets";
    }
    // We are on home page "/"
    if (itemHref === "/#home") {
      return activeHash === "#home";
    }
    if (itemHref.startsWith("/#")) {
      return activeHash === "#" + itemHref.substring(2);
    }
    return pathname === itemHref;
  };

  return (
    <header className="border-b border-border/60 bg-background/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/assets/logos/logo.png"
            alt="Green Network logo"
            width={220}
            height={64}
            priority
            unoptimized
            className="h-12 w-auto object-contain object-left dark:brightness-125"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="text-[15px] font-extrabold tracking-[0.08em] uppercase text-foreground">
              Green<span className="text-[#2563eb]">Network</span>
            </span>
            <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-muted-foreground mt-0.5">
              Telecom Pvt. Ltd.
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                isActive(item.href)
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-border/60 lg:hidden"
          >
            <Container className="grid gap-1 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

