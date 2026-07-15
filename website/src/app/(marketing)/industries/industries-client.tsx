"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Headset,
  Building2,
  Activity,
  Cpu,
  GraduationCap,
  ShoppingBag,
  Truck,
  Hotel,
  ShieldAlert,
  Laptop,
  VolumeX,
  PhoneCall,
  Clock,
  Users2,
  Wifi,
  Smartphone,
  CheckCircle2,
  Volume2,
  Battery,
  Shield,
  Layers,
  Sparkles,
  Search,
  Check,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";
import { FadeIn } from "@/components/motion/fade-in";
import "./industries.css";

// ── DATA DEFINITIONS ──

const industries = [
  {
    id: 1,
    title: "Contact Centers",
    icon: Headset,
    description: "Equip high-density call environments with robust active noise-canceling headsets that block background agent chatter, ensuring crystal-clear customer conversations and all-day ergonomic comfort.",
    image: "/assets/industries/contact-center.png",
    gradient: "ind-gradient-1",
  },
  {
    id: 2,
    title: "Corporate Offices",
    icon: Building2,
    description: "Enhance focus in open-plan offices and streamline virtual collaboration in meeting rooms with lightweight, dual-connectivity headsets that transition seamlessly from desk to mobile.",
    image: "/assets/industries/corporate-office.png",
    gradient: "ind-gradient-2",
  },
  {
    id: 3,
    title: "Healthcare",
    icon: Activity,
    description: "Provide medical receptionists and clinical coordinators with sanitary, lightweight, easy-to-clean audio solutions that ensure patient privacy during sensitive calls.",
    image: "/assets/industries/healthcare.png",
    gradient: "ind-gradient-3",
  },
  {
    id: 4,
    title: "Manufacturing",
    icon: Cpu,
    description: "Deliver high-attenuation hearing protection combined with clear team intercom channels, enabling technicians to collaborate safely in high-decibel factory environments.",
    image: "/assets/industries/manufacturing.png",
    gradient: "ind-gradient-4",
  },
  {
    id: 5,
    title: "Education",
    icon: GraduationCap,
    description: "Empower educators and remote learners with high-definition voice clarity and plug-and-play USB headsets that ensure focus and understanding in digital classrooms.",
    image: "/assets/industries/education.png",
    gradient: "ind-gradient-5",
  },
  {
    id: 6,
    title: "Retail & Customer Service",
    icon: ShoppingBag,
    description: "Enable retail staff to maintain constant communication on the floor with discreet, single-ear wireless headsets, improving inventory checks and service response times.",
    image: "/assets/industries/retail-service.png",
    gradient: "ind-gradient-6",
  },
  {
    id: 7,
    title: "Logistics & Warehousing",
    icon: Truck,
    description: "Equip warehouse operators with heavy-duty, hands-free wireless headsets that integrate with voice-directed picking systems to increase speed and reduce errors.",
    image: "/assets/industries/logistics.png",
    gradient: "ind-gradient-7",
  },
  {
    id: 8,
    title: "Hospitality",
    icon: Hotel,
    description: "Support hotel front desks and security personnel with elegant, low-profile headsets that ensure silent dispatching, fast check-ins, and a polished guest experience.",
    image: "/assets/industries/hospitality.png",
    gradient: "ind-gradient-8",
  },
  {
    id: 9,
    title: "Government & Public Sector",
    icon: ShieldAlert,
    description: "Deploy secure, encrypted communication headsets that comply with federal data security standards for administrative operations and public emergency centers.",
    image: "/assets/industries/government.png",
    gradient: "ind-gradient-9",
  },
  {
    id: 10,
    title: "IT & Technology Companies",
    icon: Laptop,
    description: "Empower software engineers, product teams, and tech support with high-fidelity audio, deep UC integration (Teams, Zoom), and advanced customizable audio profiles.",
    image: "/assets/hero/av_boardroom.png",
    gradient: "ind-gradient-10",
  },
];

const challenges = [
  {
    title: "Overwhelming Background Noise",
    problem: "Open-plan offices and contact centers suffer from continuous ambient noise, which distracting employees and bleeds into customer calls, causing unprofessional communication.",
    solution: "Our headsets utilize dual-microphone Active Noise Cancellation (ANC) alongside proprietary algorithm-driven noise-suppression booms to capture and filter out up to 96% of environmental distractions.",
    icon: VolumeX,
    gradient: "from-blue-600/10 to-indigo-600/5",
  },
  {
    title: "Subpar Call & Voice Quality",
    problem: "Standard consumer audio devices compress voice frequencies, leading to robotic tones, dropped syllables, and frequent miscommunications that stretch call resolution times.",
    solution: "HD Voice and wideband acoustic response profiles deliver natural human frequency replication, letting agents and customers catch every syllable with warm, natural clarity.",
    icon: PhoneCall,
    gradient: "from-indigo-600/10 to-blue-600/5",
  },
  {
    title: "Physical Fatigue Over Long Shifts",
    problem: "Workers wearing poorly designed headsets for 8+ hours experience ear soreness, headband clamping pressure, and headaches, directly lowering workplace productivity.",
    solution: "Engineered with premium memory-foam ear cushions wrapped in breathable leatherette, lightweight composite frames under 150g, and multi-axis adjustable earcups.",
    icon: Clock,
    gradient: "from-blue-600/10 to-emerald-600/5",
  },
  {
    title: "Fragmented Team Collaboration",
    problem: "In dynamic environments, moving from deep focus work to sudden spontaneous team huddles or conference calls creates friction, requiring constant device configuration.",
    solution: "One-touch mute on the microphone boom, smart mute sensors that detect when the headset is taken off, and high-quality speaker arrays tuned for both crystal-clear conversation and rich media.",
    icon: Users2,
    gradient: "from-emerald-600/10 to-blue-600/5",
  },
  {
    title: "Unstable Remote Connections",
    problem: "Hybrid and remote employees suffer from dropouts, range restrictions, and audio lags while moving around home offices during critical conference calls.",
    solution: "Deploying enterprise-grade DECT and Bluetooth wireless protocols that guarantee stable connectivity up to 100 meters, complete with integrated range alarms.",
    icon: Wifi,
    gradient: "from-blue-600/10 to-cyan-600/5",
  },
  {
    title: "Complex Multi-device Workflows",
    problem: "Switching audio inputs manually between desktop IP phones, laptops for video meetings, and smartphones for mobile client calls creates daily operational latency.",
    solution: "Multipoint wireless technology automatically monitors, pairs, and dynamically switches audio between up to three connected devices depending on which one rings.",
    icon: Smartphone,
    gradient: "from-cyan-600/10 to-indigo-600/5",
  },
];

const benefits = [
  { title: "Crystal Clear Voice", desc: "Super-wideband audio filters out frequency noise to replicate direct face-to-face vocal warmth.", icon: Volume2 },
  { title: "Active Noise Cancellation", desc: "Advanced hybrid ANC blocks out low-frequency ambient rumble and nearby workspace chatter.", icon: VolumeX },
  { title: "All-Day Comfort", desc: "Ultra-light frame design featuring soft leatherette ear cushions and distributed headband clamping force.", icon: Clock },
  { title: "Wireless Freedom", desc: "Move freely up to 100 meters away from your station with zero signal loss or latency dropouts.", icon: Wifi },
  { title: "Seamless Collaboration", desc: "Instantly link up with Microsoft Teams, Zoom, Webex, and top BPO software tools.", icon: Users2 },
  { title: "Enhanced Productivity", desc: "Integrated busy-light status indicators notify team members automatically to prevent interruptions.", icon: Sparkles },
  { title: "Broad Compatibility", desc: "Plug-and-play USB-A, USB-C, RJ9, and Bluetooth pairing setups for immediate company deployment.", icon: Laptop },
  { title: "Professional Build Quality", desc: "Made with impact-resistant polymers and reinforced steel joints to withstand heavy daily enterprise use.", icon: Shield },
];

const galleryShowcase = [
  { title: "Contact Center Floor", desc: "High-density agent workstations operating at peak performance.", image: "/assets/industries/contact-center.png", size: "col-span-12 md:col-span-6 lg:col-span-8" },
  { title: "Corporate Boardroom", desc: "Executive teams coordinating with overseas offices via HD audio.", image: "/assets/industries/corporate-office.png", size: "col-span-12 md:col-span-6 lg:col-span-4" },
  { title: "Hospital Central Station", desc: "Coordinating urgent patient diagnostics with direct precision.", image: "/assets/industries/healthcare.png", size: "col-span-12 md:col-span-6 lg:col-span-4", position: "object-[center_12%]" },
  { title: "Manufacturing Floor", desc: "High-attenuation wireless headsets keeping workers safe and connected.", image: "/assets/industries/manufacturing.png", size: "col-span-12 md:col-span-6 lg:col-span-8", position: "object-[center_15%]" },
  { title: "Warehouse Fulfillment", desc: "Voice-directed inventory management keeping operations fluid.", image: "/assets/industries/logistics.png", size: "col-span-12 md:col-span-6 lg:col-span-6" },
  { title: "Academic Lecture Hall", desc: "Virtual classrooms streaming with distraction-free clarity.", image: "/assets/industries/education.png", size: "col-span-12 md:col-span-6 lg:col-span-6" },
  { title: "IT Helpdesk Center", desc: "Engineers solving remote challenges over high-fidelity calls.", image: "/assets/hero/av_boardroom.png", size: "col-span-12 md:col-span-6 lg:col-span-4" },
  { title: "Retail Service Desk", desc: "Discreet mobile headsets keeping floor teams agile and coordinated.", image: "/assets/industries/retail-service.png", size: "col-span-12 md:col-span-6 lg:col-span-8" },
];

const whyChooseUsSteps = [
  {
    step: "01",
    title: "Assess Communication Needs",
    desc: "Our enterprise advisors analyze your ambient noise levels, softphone infrastructure, and mobility needs to map out specific headset requirements.",
  },
  {
    step: "02",
    title: "Deploy Target Headsets",
    desc: "We supply optimal test units for IT managers and user groups, ensuring the chosen headsets excel in live workspaces before deployment.",
  },
  {
    step: "03",
    title: "Deploy and Manage Easily",
    desc: "Deploy fleets rapidly with central configuration files and software integration tools, making multi-platform setup fast and simple.",
  },
  {
    step: "04",
    title: "Maintain Peak Performance",
    desc: "Workers enjoy robust daily battery life, stable wireless connectivity, clear sound, and active noise filtering during intensive client calls.",
  },
  {
    step: "05",
    title: "Pan-India Service Support",
    desc: "Backed by resident engineers and an in-house repair center across our 5 national hubs, we ensure continuous headset runtime.",
  },
];

const featuredSolutions = [
  {
    title: "Contact Center Solutions",
    subtitle: "Built for intensive daily customer service shifts",
    desc: "Keep agents focused in high-density call environments. Engineered with premium acoustic shields, robust noise-canceling booms, and deep compliance monitoring support.",
    features: [
      "Ultra-durable 360° rotating microphone boom",
      "Dynamic acoustic protection from sound spikes",
      "Breathable, lightweight memory foam ear pads",
      "Plug-and-play USB-A, USB-C, and quick disconnect",
    ],
    image: "/assets/industries/contact-center.png",
    gradient: "ind-gradient-1",
  },
  {
    title: "Corporate Collaboration",
    subtitle: "Engineered for executive focus and meeting rooms",
    desc: "Maximize corporate productivity in hybrid offices. Seamlessly jump between deep-focus focus work, virtual team board meetings, and client calls on the move.",
    features: [
      "Hybrid Active Noise Cancellation (ANC)",
      "Smart sensors to auto-mute or answer calls",
      "Multipoint Bluetooth connectivity for two devices",
      "Certified for Microsoft Teams & Zoom platforms",
    ],
    image: "/assets/industries/corporate-office.png",
    gradient: "ind-gradient-2",
  },
  {
    title: "Healthcare Communication",
    subtitle: "Sanitary, reliable solutions for clinics",
    desc: "Improve communication lines for hospital staff and receptionists. Easy-to-clean materials ensure hygienic sanitization, while secure audio protocols protect patient privacy.",
    features: [
      "Medical-grade wipeable materials and chassis",
      "Ultra-light single-ear setup for environment awareness",
      "Optimized vocal range clarity for diagnostics",
      "Secure DECT wireless protocol prevents signal interception",
    ],
    image: "/assets/industries/healthcare.png",
    gradient: "ind-gradient-3",
  },
  {
    title: "Industrial & Warehouse Communication",
    subtitle: "Tough design for high-noise floor environments",
    desc: "Empower factory and logistics teams working on busy floors. Provides advanced hearing protection while maintaining instant, clear intercom links.",
    features: [
      "High passive noise attenuation ear cups",
      "Heavy-duty impact-resistant polymer chassis",
      "Dust and moisture protection (IP54 rated)",
      "Hands-free voice picking compatibility",
    ],
    image: "/assets/industries/logistics.png",
    gradient: "ind-gradient-4",
  },
];

const techHighlights = [
  { title: "Advanced ANC", desc: "Dual microphone technology active noise cancellation.", icon: VolumeX },
  { title: "HD Voice Resolution", desc: "Replicates natural vocal tones for better call flow.", icon: Volume2 },
  { title: "Wideband Acoustic Profile", desc: "Captures natural human frequency ranges.", icon: AudioListenerIcon },
  { title: "Wireless Reach", desc: "Up to 100 meters range with Bluetooth & DECT.", icon: Wifi },
  { title: "Device Multipoint", desc: "Simultaneous pairing with laptop, mobile, and deskphone.", icon: Laptop },
  { title: "Full-Shift Battery", desc: "Up to 30 hours of continuous active talk time.", icon: Battery },
  { title: "Comfort Build", desc: "Super lightweight composite frame under 150 grams.", icon: Layers },
];

function AudioListenerIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  );
}

export function IndustriesClient() {
  const scrollToGrid = () => {
    const el = document.getElementById("industries-list");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      {/* ══════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden py-24 md:py-32 lg:py-40 text-white bg-slate-950">
        {/* Full-width background image */}
        <div className="absolute inset-0 z-0 select-none">
          <img
            src="/assets/industries/corporate-office.png"
            alt="Communication solutions banner"
            className="h-full w-full object-cover object-center"
          />
          {/* Ambient Gradients for Text Contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 lg:from-black/90 lg:via-black/50 lg:to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
        </div>

        {/* Animated geometric SVG wave backdrop overlay */}
        <div className="absolute inset-0 z-10 opacity-15 pointer-events-none flex items-center justify-center">
          <svg className="w-full h-full max-w-5xl" viewBox="0 0 800 400" fill="none">
            <g stroke="#3b82f6" strokeWidth="1.5">
              {Array.from({ length: 24 }).map((_, i) => (
                <rect
                  key={i}
                  x={120 + i * 24}
                  y={100}
                  width="8"
                  height={150 + Math.sin(i * 0.5) * 80}
                  rx="4"
                  className="ind-wave-bar"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </g>
          </svg>
        </div>

        <Container className="relative z-20">
          <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start text-left">
            <FadeIn>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400">
                <Sparkles className="h-3.5 w-3.5" />
                B2B Headset Solutions
              </div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white font-syne leading-none">
                Communication
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                  Solutions Built
                </span>
                for Every Industry
              </h1>
              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                From busy customer service centers to healthcare front desks, manufacturing floors, digital classrooms, and corporate boardrooms, our professional headsets deliver crystal-clear audio, absolute comfort, and long-term daily reliability in every workspace.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg px-8 transition-transform hover:-translate-y-0.5"
                  onClick={scrollToGrid}
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Link
                  href="/contact"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-8 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                >
                  Consult an Expert
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          INDUSTRIES GRID
      ══════════════════════════════════════ */}
      <section id="industries-list" className="py-20 md:py-28 border-b border-border bg-slate-50/30 dark:bg-slate-950/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                — Business Focus
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl font-syne">
                Tailored for Diverse Sectors
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Different industries face distinct communication environments. Explore how our audio solutions adapt to deliver clear, safe, and productive conversations.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <FadeIn key={ind.id} delay={i * 0.05}>
                <article className="ind-card group flex h-full flex-col rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30">
                  {/* Top image or gradient container */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-800 shrink-0">
                    {ind.image ? (
                      <img
                        src={ind.image}
                        alt={ind.title}
                        className="absolute inset-0 h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`absolute inset-0 ${ind.gradient} flex items-center justify-center`}>
                        <ind.icon className="h-16 w-16 text-white/20" />
                      </div>
                    )}
                    {/* Floating Icon Badge overlay */}
                    <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-background/95 shadow-md text-blue-600 dark:text-blue-400 backdrop-blur-sm">
                      <ind.icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col p-6 text-left">
                    <h3 className="text-lg font-bold tracking-tight text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                      {ind.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                      {ind.description}
                    </p>
                    <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-blue-600 dark:text-blue-400">
                      <span>View Solutions</span>
                      <ArrowRight className="h-4 w-4 ind-card-arrow" />
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          CHALLENGES SECTION
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-b border-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                — Practical Solutions
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl font-syne">
                Built to Solve Everyday Communication Challenges
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We design our audio solutions to address direct, everyday workflow challenges—balancing high-performance noise protection with comfortable design.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {challenges.map((ch, i) => (
              <FadeIn key={ch.title} delay={i * 0.05}>
                <div className={`h-full rounded-2xl border border-border bg-gradient-to-br ${ch.gradient} p-6 sm:p-8 text-left transition-all duration-300 hover:shadow-sm`}>
                  <div className="flex gap-4 items-start">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                      <ch.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-foreground">
                        {ch.title}
                      </h3>
                      <div className="mt-4 space-y-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-red-500/80 dark:text-red-400/80">The Obstacle</p>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {ch.problem}
                          </p>
                        </div>
                        <div className="pt-2 border-t border-border/60">
                          <p className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Our Resolution</p>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {ch.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          INDUSTRY BENEFITS SECTION
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-b border-border bg-slate-50/20 dark:bg-slate-950/10">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                — Feature Advantage
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl font-syne">
                Enterprise-Grade Benefits
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Enhance clarity, comfort, and operational speed across all departments with headsets designed for business deployment.
              </p>
            </FadeIn>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((bn, i) => (
              <FadeIn key={bn.title} delay={i * 0.05}>
                <div className="ind-benefit-card h-full rounded-2xl border border-border bg-card p-6 text-left shadow-sm hover:shadow transition-all duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <bn.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-base font-bold tracking-tight text-foreground">
                    {bn.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {bn.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          VISUAL SHOWCASE SECTION
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-b border-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                — Live Workspaces
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl font-syne">
                Solutions in Action
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Explore how communication headsets are deployed across active offices, clinics, logistics hubs, and control rooms.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-12 gap-4 auto-rows-[220px]">
            {galleryShowcase.map((g, i) => (
              <FadeIn key={g.title} delay={i * 0.05} className={`${g.size} h-full`}>
                <div className="ind-gallery-card group relative h-full w-full overflow-hidden rounded-2xl border border-border bg-slate-800 shadow-sm">
                  <img
                    src={g.image}
                    alt={g.title}
                    className={`absolute inset-0 h-full w-full object-cover ${g.position || "object-center"}`}
                  />
                  {/* Hover Glass Panel */}
                  <div className="ind-gallery-overlay absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-6 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Showcase</span>
                    <h3 className="text-base font-extrabold text-white mt-1 leading-tight">{g.title}</h3>
                    <p className="text-xs text-slate-300 mt-1">{g.desc}</p>
                  </div>
                  {/* Stationary Small Label */}
                  <div className="absolute top-4 right-4 rounded-full bg-slate-900/80 px-3 py-1 text-[10px] font-semibold text-white backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-300">
                    {g.title}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          WHY CHOOSE US TIMELINE
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-b border-border bg-slate-50/30 dark:bg-slate-950/20">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                — Our Approach
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl font-syne">
                Strategic Headset Deployment
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We focus on matching headsets to specific user environments and building a reliable system with long-term runtime.
              </p>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto relative pl-4 md:pl-0">
            {/* Desktop timeline middle rule */}
            <div className="absolute left-7 md:left-1/2 top-4 bottom-4 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {whyChooseUsSteps.map((st, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div key={st.step} className="relative flex flex-col md:flex-row md:items-center">
                    {/* Circle badge */}
                    <div className="absolute left-0 md:left-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-600 bg-background text-sm font-bold text-blue-600 z-10">
                      {st.step}
                    </div>

                    {/* Timeline card container */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto md:text-left"}`}>
                      <FadeIn delay={i * 0.05}>
                        <div className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow transition-shadow">
                          <h3 className="text-lg font-bold tracking-tight text-foreground">
                            {st.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {st.desc}
                          </p>
                        </div>
                      </FadeIn>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          FEATURED SOLUTIONS (HORIZONTAL CARDS)
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-b border-border">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                — Featured Packages
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl font-syne">
                Enterprise Audio Systems
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Explore our specialized configuration setups configured for high-demand contact centers and corporate offices.
              </p>
            </FadeIn>
          </div>

          <div className="space-y-8">
            {featuredSolutions.map((sol, i) => (
              <FadeIn key={sol.title} delay={i * 0.06}>
                <div className="flex flex-col lg:flex-row rounded-2xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  {/* Image side */}
                  <div className="relative w-full lg:w-2/5 min-h-[220px] bg-slate-800 shrink-0">
                    {sol.image ? (
                      <img
                        src={sol.image}
                        alt={sol.title}
                        className="absolute inset-0 h-full w-full object-cover object-center"
                      />
                    ) : (
                      <div className={`absolute inset-0 ${sol.gradient} flex items-center justify-center`}>
                        <Headset className="h-20 w-20 text-white/15" />
                      </div>
                    )}
                  </div>

                  {/* Text side */}
                  <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between text-left">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">{sol.subtitle}</span>
                      <h3 className="mt-1 text-xl font-extrabold tracking-tight text-foreground">{sol.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sol.desc}</p>

                      {/* Feature bullets */}
                      <div className="mt-5 grid gap-2 sm:grid-cols-2">
                        {sol.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-muted-foreground">
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-blue-600 dark:text-blue-400" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/60">
                      <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700 text-white border-0 shadow">
                        <Link href="/headsets">
                          View Headsets
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          TECHNOLOGY HIGHLIGHTS
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28 border-b border-border bg-slate-50/20 dark:bg-slate-950/10">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                — Engineering Core
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl font-syne">
                Technology Specifications
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We integrate verified acoustics standards to support voice clarity and active ambient filtering in heavy daily call settings.
              </p>
            </FadeIn>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {techHighlights.map((t, i) => (
              <div
                key={t.title}
                className={`ind-float ind-float-delay-${(i % 6) + 1} flex items-center gap-3.5 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm hover:shadow transition-shadow max-w-[280px] text-left`}
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <t.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-tight text-foreground">{t.title}</h4>
                  <p className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className="py-20 md:py-28">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl ind-cta-bg px-8 py-16 text-center md:px-16 text-white shadow-2xl border border-white/5">
              {/* Dynamic light bursts */}
              <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />

              <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blue-400">
                <Zap className="h-3 w-3" /> Get Connected Today
              </span>

              <h2 className="mt-6 text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl font-syne">
                Looking for the Right Communication Solution for Your Industry?
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-300">
                Our advisors will analyze your ambient noise levels, softphone setups, and workforce deployment to recommend the ideal headset solution.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-blue-600 hover:bg-blue-700 text-white border-0 px-8 shadow-md"
                >
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/20 bg-white/5 text-white hover:bg-white/10 px-8"
                >
                  <Link href="/headsets">
                    Explore Headsets
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* ══════════════════════════════════════
          FOOTER TRANSITION
      ══════════════════════════════════════ */}
      <div className="h-16 w-full bg-gradient-to-b from-background to-background/50 pointer-events-none" />
    </div>
  );
}
