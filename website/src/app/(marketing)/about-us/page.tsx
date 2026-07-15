import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Users,
  Globe,
  ShieldCheck,
  MapPin,
  Trophy,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import { Section } from "@/components/shared/section";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import { Button } from "@/components/ui/button";
import { BrandMarquee } from "@/components/shared/brand-marquee";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  path: "/about-us",
});

const stats = [
  { value: "7+", label: "Years of Excellence" },
  { value: "1000+", label: "Satisfied Customers" },
  { value: "5", label: "Offices Nationwide" },
  { value: "6", label: "World-Class Brands" },
];

const brands = ["AVAYA", "NEC", "POLYCOM", "VOIX", "CISCO", "HONEYWELL"];

const officeList = [
  { name: "New Delhi", type: "Head Office" },
  { name: "Bangalore", type: "Regional Office" },
  { name: "Mumbai", type: "Regional Office" },
  { name: "Pune", type: "Regional Office" },
  { name: "Chennai", type: "Regional Office" },
  { name: "Hyderabad", type: "Regional Office" },
];

const segments = [
  "Small & Medium Enterprises",
  "Large Corporations",
  "Hotels & Hospitality",
  "Residences & SOHO",
  "BPO & Call Centres",
  "Healthcare & Education",
];

export default function AboutUsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="relative h-64 w-full overflow-hidden md:h-80">
        <Image
          src="/assets/about-buildings.png"
          alt="Green Network — Enterprise headquarters"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        {/* Hero text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2563eb]">
              Who We Are
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              Total Solutions in
              <br />
              Enterprise Communications
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* ── Stats cards ── */}
      <div className="bg-muted/30 py-10">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="group rounded-2xl border border-border bg-card px-6 py-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2563eb]/50 hover:shadow-[0_8px_30px_rgba(37,99,235,0.12)]"
              >
                <p className="text-3xl font-extrabold text-[#2563eb] transition-transform duration-300 group-hover:scale-110">{s.value}</p>
                <p className="mt-1.5 text-xs font-medium text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* ── Who We Are ── */}
      <Section className="py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image side */}
          <FadeIn>
            <div className="relative pb-8 pr-8">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="/assets/about-buildings.png"
                  alt="Green Network offices"
                  width={640}
                  height={480}
                  className="h-80 w-full object-cover object-center md:h-[420px]"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2563eb]/15">
                  <Trophy className="h-5 w-5 text-[#2563eb]" />
                </div>
                <div>
                  <p className="text-sm font-bold">Industry Pioneer</p>
                  <p className="text-xs text-muted-foreground">Trusted across India</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Text side */}
          <FadeIn delay={0.12}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563eb]">
              About Green Network
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              Engineering the Future of{" "}
              <span className="text-[#2563eb]">Enterprise Communications</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-7">
              <span className="font-semibold text-foreground">GREEN NETWORK</span> is
              one of India&apos;s Premiere Marketing Organisations providing
              customer-friendly products and solutions in the field of{" "}
              <span className="text-[#2563eb] font-medium">Communication</span>,
              AV Solutions, Office Automation (OA) &amp; Information Technology (IT)
              for the last <strong>07 years</strong>.
            </p>
            <p className="mt-4 text-muted-foreground leading-7">
              The company has a Nationwide Presence with 05 offices and thousands of
              satisfied customers across the country. We offer total solutions under
              one roof catering to Small, Medium &amp; Large size companies;
              Residences; Hotels; SOHO segments — customised and comprehensive so
              our customers can focus on their core business only.
            </p>

            <div className="mt-7 space-y-3">
              {[
                "Virtual Era Ready — innovative, cost-conscious expertise",
                "End-to-End Solutions — from SMEs to enterprises, hotels and SOHO",
                "Pan-India Support — offices and resident engineers across India",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2563eb]" />
                  <p className="text-sm text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/solutions">
                  Our Solutions <ArrowRight />
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── Brand Marquee ── */}
      <div className="border-y border-border bg-muted/20 py-14">
        <Container>
          <FadeIn>
            <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">
              — Our Alliances
            </p>
            <h2 className="mt-2 text-center text-2xl font-extrabold tracking-tight">
              Powered by World-Class Brands
            </h2>
          </FadeIn>
        </Container>
        <BrandMarquee />
      </div>

      {/* ── ISO Certification ── */}
      <Section className="py-16 md:py-24 bg-slate-50/60 dark:bg-slate-900/10 border-b border-border">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Certificate Image */}
          <FadeIn className="flex justify-center">
            <div className="relative group max-w-xs w-full rounded-3xl border border-border bg-card p-5 shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:border-[#2563eb]/30">
              <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-slate-50 flex items-center justify-center p-4 aspect-[3/4]">
                <img
                  src="/assets/image004.jpg"
                  alt="ISO 9001:2015 Quality Management Certification — Green Network Telecom"
                  className="max-h-full max-w-full object-contain group-hover:scale-[1.03] transition-transform duration-500"
                />
              </div>
              {/* Certified badge sticker */}
              <div className="absolute top-7 right-7 rounded-full bg-[#2563eb] text-white text-[9px] font-extrabold px-3 py-1 uppercase tracking-widest shadow-lg">
                ✓ Certified
              </div>
            </div>
          </FadeIn>

          {/* Text side */}
          <FadeIn delay={0.12}>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2563eb]">
              Quality Assurance
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
              ISO 9001:2015{" "}
              <span className="text-[#2563eb]">Certified Operations</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-7">
              Green Network is committed to delivering world-class service standards, operational
              integrity, and customer satisfaction. Our{" "}
              <strong className="text-foreground">ISO 9001:2015</strong> registration certifies
              that our quality management systems conform to internationally recognised benchmark
              criteria.
            </p>
            <p className="mt-4 text-muted-foreground leading-7">
              This certification underscores our ongoing dedication to consistent product delivery,
              professional engineering support, and continuous improvement protocols across all our
              regional offices and service centres pan-India.
            </p>

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Standardised Quality", desc: "Rigorous operational audits & review cycles", icon: ShieldCheck },
                { title: "Global Benchmarks", desc: "Aligned with international quality standards", icon: Globe },
                { title: "Consistent Delivery", desc: "Uniform service excellence across all offices", icon: CheckCircle2 },
                { title: "Continuous Improvement", desc: "Ongoing process refinement & optimisation", icon: Trophy },
              ].map(({ title, desc, icon: Icon }) => (
                <div key={title} className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5 shadow-sm">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2563eb]/10">
                    <Icon className="h-4 w-4 text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">{title}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── Infrastructure ── */}
      <Section className="py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Infrastructure */}
          <FadeIn>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563eb]/15">
              <Building2 className="h-4 w-4 text-[#2563eb]" />
            </div>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight md:text-3xl">
              Our Infrastructure
            </h2>
            <p className="mt-3 text-muted-foreground leading-7">
              To provide the best possible support it is imperative that we create an
              infrastructure which can give end-to-end back-end support. At Green
              Network we have offices &amp; Resident Engineers all across India.
            </p>
            <div className="mt-6 space-y-3">
              {officeList.map((office, i) => (
                <div
                  key={office.name}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2563eb]/10">
                    <MapPin className="h-3.5 w-3.5 text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{office.name}</p>
                    <p className="text-xs text-muted-foreground">{office.type}</p>
                  </div>
                  {i === 0 && (
                    <span className="ml-auto rounded-full bg-[#2563eb]/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#2563eb]">
                      HQ
                    </span>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Customer Satisfaction */}
          <FadeIn delay={0.1}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563eb]/15">
              <Users className="h-4 w-4 text-[#2563eb]" />
            </div>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight md:text-3xl">
              Customer Satisfaction —{" "}
              <span className="text-[#2563eb]">The Driving Force</span>
            </h2>
            <p className="mt-3 text-muted-foreground leading-7">
              With more than <strong>1000 satisfied customers</strong>{" "} availing our
              services throughout the length and breadth of our country and even
              locations outside India, we have our Remote Maintenance Cell &amp;
              In-house Repair Centre — showing the commitment we have towards our
              esteemed customers.
            </p>

            {/* Segments */}
            <p className="mt-6 text-sm font-semibold">Segments We Serve</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {segments.map((seg) => (
                <div
                  key={seg}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5"
                >
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#2563eb]" />
                  <p className="text-xs font-medium">{seg}</p>
                </div>
              ))}
            </div>

            {/* Remote support callout */}
            <div className="mt-6 rounded-2xl bg-[#2563eb]/10 border border-[#2563eb]/25 p-5">
              <div className="flex items-start gap-3">
                <Globe className="mt-0.5 h-5 w-5 shrink-0 text-[#2563eb]" />
                <div>
                  <p className="text-sm font-bold">Remote Maintenance Cell</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    In-house repair centre &amp; remote engineers available
                    across India and internationally.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* ── CTA ── */}
      <div className="pb-20">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl bg-[#0f1d3a] px-8 py-16 text-center md:px-16">
              <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-[#2563eb]/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2563eb]">
                — Let&apos;s Connect
              </p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                Ready to Transform Your
                <br className="hidden md:block" /> Communication Infrastructure?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
                Talk to our experts and get a customised solution for your enterprise.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg" className="rounded-full bg-[#2563eb] text-white hover:bg-[#1d4ed8]">
                  <Link href="/contact">Get in Touch <ArrowRight /></Link>
                </Button>
                <a
                  href="tel:01142461227"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-sm font-medium text-white transition-colors hover:bg-white/20"
                >
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
