import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  ArrowRight,
} from "lucide-react";

import { Section } from "@/components/shared/section";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  path: "/contact",
});

const offices = [
  {
    city: "Delhi",
    address:
      "Green Network Telecom Pvt. Ltd, C-9, 3rd Floor, New Krishna Park, Vikas Puri, New Delhi",
    pincode: "110018",
    phone: "011-42461227",
    email: "sales@green-network.in",
    web: "www.green-network.in",
  },
  {
    city: "Bangalore",
    address:
      "Green Network Telecom Pvt. Ltd, No.76, 1st Floor, 6th Main, Hemanth Nagar, Room, Marathahalli, Bangalore",
    pincode: "560037",
    phone: "9611122559",
    email: "sales@green-network.in",
    web: "www.green-network.in",
  },
  {
    city: "Hyderabad",
    address:
      "Green Network Telecom Pvt. Ltd, No. H/2, Madhura Nagar, Opp Krishnakant Park",
    pincode: "500038",
    phone: "9611122559",
    email: "sales@green-network.in",
    web: "www.green-network.in",
  },
  {
    city: "Chennai",
    address:
      "Green Network Telecom Pvt. Ltd, No.04, Maruthi Nagar, Thoraipakkam, Chennai",
    pincode: "600097",
    phone: "9611122559",
    email: "sales@green-network.in",
    web: "www.green-network.in",
  },
  {
    city: "Mumbai",
    address:
      "Green Network Telecom Pvt. Ltd, Office No. 502, 5th Floor, Abhijeet Society, Dada Patiwadi Road, Naupada, Thane West, Mumbai",
    pincode: "400602",
    phone: "8010801095",
    email: "sales@green-network.in",
    web: "www.green-network.in",
  },
  {
    city: "Pune",
    address:
      "011, 3rd Floor, Shri Hill View, S 77/2, Bhusari Colony, Near Ved Bhavan, Kothrud",
    pincode: "411038",
    phone: "8010801095",
    email: "sales@green-network.in",
    web: "www.green-network.in",
  },
  {
    city: "Kolkata",
    address:
      "AB-293/A, Samarpally, Kestopur, Kolkata, West Bengal",
    pincode: "700102",
    phone: "8010801095",
    email: "sales@green-network.in",
    web: "www.green-network.in",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero Banner ── */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/assets/contact-hero.png"
          alt="Contact Us — Green Network"
          width={1400}
          height={420}
          priority
          className="h-56 w-full object-cover object-center md:h-72"
        />
        {/* subtle dark gradient overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />
      </div>

      {/* ── Intro strip ── */}
      <div className="border-b border-border bg-[#2563eb]/8">
        <Container className="py-8 text-center">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
              We&apos;re here to help
            </p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
              Get in Touch With Us
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Reach out to any of our offices across India. Our team is ready to
              assist you with enterprise communication solutions.
            </p>
          </FadeIn>
        </Container>
      </div>

      {/* ── Office Cards ── */}
      <Section className="py-14 md:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {offices.map((office, i) => (
            <FadeIn key={office.city} delay={i * 0.06}>
              <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#2563eb]/50 hover:shadow-md">
                {/* City header */}
                <div className="mb-4 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2563eb]/15">
                    <MapPin className="h-4 w-4 text-[#2563eb]" />
                  </span>
                  <h2 className="text-lg font-bold tracking-tight">
                    {office.city}
                  </h2>
                </div>

                {/* Address */}
                <p className="flex-1 text-sm leading-6 text-muted-foreground">
                  {office.address}
                  <br />
                  <span className="font-medium text-foreground">
                    Pincode: {office.pincode}
                  </span>
                </p>

                {/* Contact details */}
                <div className="mt-5 space-y-2 border-t border-border pt-4">
                  <a
                    href={`tel:${office.phone}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#2563eb]"
                  >
                    <Phone className="h-3.5 w-3.5 shrink-0" />
                    {office.phone}
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#2563eb]"
                  >
                    <Mail className="h-3.5 w-3.5 shrink-0" />
                    {office.email}
                  </a>
                  <a
                    href={`https://${office.web}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-[#2563eb]"
                  >
                    <Globe className="h-3.5 w-3.5 shrink-0" />
                    {office.web}
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── CTA Banner ── */}
      <div className="pb-16 md:pb-24">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-[#0f1d3a] px-8 py-16 text-center md:px-16">
              {/* Background glow blobs */}
              <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#2563eb]/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                — Ready to Transform?
              </p>
              <h2 className="mt-4 text-balance text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
                Let&apos;s Build Your Communication
                <br className="hidden md:block" /> Infrastructure
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Get in touch with our experts for a customised solution tailored
                to your enterprise needs.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#2563eb] text-white hover:bg-[#5aad3b]"
                >
                  <a href="mailto:sales@green-network.in">
                    <Mail className="mr-2 h-4 w-4" />
                    sales@green-network.in
                  </a>
                </Button>
                <a
                  href="tel:01142461227"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-sm font-medium text-white transition-colors hover:bg-white/20"
                >
                  <Phone className="h-4 w-4" />
                  Call 011-42461227
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
    </>
  );
}
