import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe,
  Headset,
  Mail,
  MapPin,
  Network,
  Phone,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";

import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/shared/section";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { BrandMarquee } from "@/components/shared/brand-marquee";
import { buildMetadata } from "@/lib/seo";
import { HeroCarousel } from "@/components/shared/hero-carousel";

export const metadata = buildMetadata({
  title: "Home",
  path: "/",
});

const stats = [
  { value: "7+", label: "Years of Excellence" },
  { value: "1000+", label: "Satisfied Customers" },
  { value: "5", label: "Offices Nationwide" },
  { value: "6", label: "World-Class Brands" },
];

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
];

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════
          HERO CAROUSEL
      ══════════════════════════════════════ */}
      <section id="home" className="relative">
        <HeroCarousel />
      </section>

      {/* Floating stats bar overlapping the carousel */}
      <div className="relative z-30 -mt-16 sm:-mt-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 rounded-2xl border border-border bg-background/80 dark:bg-background/90 backdrop-blur-xl shadow-2xl">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center flex flex-col items-center justify-center p-2 group transition-all duration-300">
              <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform duration-300">
                {value}
              </span>
              <span className="mt-2 text-xs sm:text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          SOLUTIONS / WHAT WE OFFER
      ══════════════════════════════════════ */}
      <section id="solutions">
        <Section className="py-14 border-t border-border">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">
              — What We Offer
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight">
              Our Core Solutions
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Premium Headsets",
                description:
                  "Noise-canceling hardware for teams that value clarity and comfort.",
                icon: Headset,
              },
              {
                title: "Unified Solutions",
                description:
                  "Integrated voice, video, and support systems tailored to operations.",
                icon: Network,
              },
              {
                title: "Industry Expertise",
                description:
                  "Deployment models for BPO, logistics, healthcare, and enterprises.",
                icon: Building2,
              },
              {
                title: "Reliable Security",
                description:
                  "Business-grade reliability, compliance-aware processes, and governance.",
                icon: ShieldCheck,
              },
            ].map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2563eb]/40 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)]">
                  <item.icon className="text-[#2563eb]" />
                  <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      </section>

      {/* ══════════════════════════════════════
          BRAND MARQUEE
      ══════════════════════════════════════ */}
      <div id="clients" className="scroll-mt-20 border-y border-border bg-muted/20 py-14">
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

      {/* ══════════════════════════════════════
          ABOUT US
      ══════════════════════════════════════ */}
      <section id="about">
        {/* Hero image banner */}
        <div className="relative h-64 w-full overflow-hidden md:h-80">
          <Image
            src="/assets/about-buildings.png"
            alt="Green Network — Enterprise headquarters"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <FadeIn>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2563eb]">
                Who We Are
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
                Total Solutions in
                <br />
                Enterprise Communications
              </h2>
            </FadeIn>
          </div>
        </div>

        {/* Who we are body */}
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
                <div className="absolute -bottom-5 -right-5 flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-lg">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2563eb]/15">
                    <Trophy className="h-5 w-5 text-[#2563eb]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Industry Pioneer</p>
                    <p className="text-xs text-muted-foreground">
                      Trusted across India
                    </p>
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
              <p className="mt-5 leading-7 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  GREEN NETWORK
                </span>{" "}
                is one of India&apos;s Premiere Marketing Organisations providing
                customer-friendly products and solutions in the field of{" "}
                <span className="font-medium text-[#2563eb]">Communication</span>
                , AV Solutions, Office Automation (OA) &amp; Information
                Technology (IT) for the last <strong>07 years</strong>.
              </p>
              <p className="mt-4 leading-7 text-muted-foreground">
                The company has a Nationwide Presence with 05 offices and
                thousands of satisfied customers across the country. We offer
                total solutions under one roof catering to Small, Medium &amp;
                Large size companies; Residences; Hotels; SOHO segments —
                customised and comprehensive so our customers can focus on their
                core business only.
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
            </FadeIn>
          </div>
        </Section>
      </section>

      {/* ══════════════════════════════════════
          INFRASTRUCTURE & CUSTOMERS
      ══════════════════════════════════════ */}
      <Section className="pb-16 pt-0 md:pb-24 md:pt-0">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Infrastructure */}
          <FadeIn>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563eb]/15">
              <Building2 className="h-4 w-4 text-[#2563eb]" />
            </div>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight md:text-3xl">
              Our Infrastructure
            </h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              To provide the best possible support it is imperative that we
              create an infrastructure which can give end-to-end back-end
              support. At Green Network we have offices &amp; Resident Engineers
              all across India.
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
                    <p className="text-xs text-muted-foreground">
                      {office.type}
                    </p>
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
            <p className="mt-3 leading-7 text-muted-foreground">
              With more than <strong>1000 satisfied customers</strong> availing
              our services throughout the length and breadth of our country and
              even locations outside India, we have our Remote Maintenance Cell
              &amp; In-house Repair Centre — showing the commitment we have
              towards our esteemed customers.
            </p>

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

            <div className="mt-6 rounded-2xl border border-[#2563eb]/25 bg-[#2563eb]/10 p-5">
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

      {/* ══════════════════════════════════════
          CONTACT — OFFICES
      ══════════════════════════════════════ */}
      <section id="contact">
        {/* Intro strip */}
        <div className="border-t border-b border-border bg-[#2563eb]/5 py-12">
          <Container className="text-center">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-[#2563eb]">
                We&apos;re here to help
              </p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">
                Get in Touch With Us
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                Reach out to any of our offices across India. Our team is ready
                to assist you with enterprise communication solutions.
              </p>
            </FadeIn>
          </Container>
        </div>

        {/* Office cards */}
        <Section className="py-14 md:py-20">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map((office, i) => (
              <FadeIn key={office.city} delay={i * 0.06}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#2563eb]/50 hover:shadow-md">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2563eb]/15">
                      <MapPin className="h-4 w-4 text-[#2563eb]" />
                    </span>
                    <h3 className="text-lg font-bold tracking-tight">
                      {office.city}
                    </h3>
                  </div>

                  <p className="flex-1 text-sm leading-6 text-muted-foreground">
                    {office.address}
                    <br />
                    <span className="font-medium text-foreground">
                      Pincode: {office.pincode}
                    </span>
                  </p>

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
 {/* CTA */}
         <div className="pb-20">
          <Container>
            <FadeIn>
              <div className="relative overflow-hidden rounded-3xl bg-[#0f1d3a] px-8 py-16 text-center md:px-16">
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
                  Get in touch with our experts for a customised solution
                  tailored to your enterprise needs.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-full bg-[#2563eb] text-white hover:bg-[#1d4ed8]"
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

        {/* Google Map Section */}
        <div className="pb-20">
          <Container>
            <FadeIn>
              <div className="rounded-3xl border border-border bg-card p-2 shadow-lg overflow-hidden h-[450px]">
                <iframe
                  src="https://maps.google.com/maps?q=Green%20Network%20Telecom%20Pvt%20Ltd,%203rd%20Floor,%20DDA%20Local%20Shopping%20Complex,%20301-302,%20Block%20C,%20Vikaspuri,%20New%20Delhi,%20Delhi%20110018&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, borderRadius: "1.5rem" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Green Network Telecom Google Map Location"
                />
              </div>
            </FadeIn>
          </Container>
        </div>

       
       
      </section>
    </>
  );
}
