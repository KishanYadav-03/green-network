"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  VolumeX,
  Headphones,
  Mic2,
  ShieldCheck,
  ZoomIn,
} from "lucide-react";
import { Section } from "@/components/shared/section";
import { FadeIn } from "@/components/motion/fade-in";

// ─── Gallery Items ─────────────────────────────────────────────────────────────
// The first 3 items are the new ANC hero images (prepended as required).
// All subsequent items are the existing headset/enterprise assets.

interface GalleryImage {
  src: string;
  alt: string;
  label: string;
  tag: string;
  tagColor: string;
  isNew?: boolean;
}

const galleryImages: GalleryImage[] = [
  // ── NEW: ANC Hero Images ──────────────────────────────────────────────────
  {
    src: "/assets/headsets/anc_open_office.png",
    alt: "Professional wearing noise-cancelling headset in a busy open office — calm and focused despite surrounding distractions",
    label: "Open Office Focus",
    tag: "Noise Cancellation",
    tagColor: "from-blue-600 to-cyan-500",
    isNew: true,
  },
  {
    src: "/assets/headsets/anc_call_center.png",
    alt: "Call center agent using enterprise noise-cancelling headset surrounded by a busy support floor with subtle sound-wave visualisation",
    label: "Call Center Excellence",
    tag: "ANC Technology",
    tagColor: "from-indigo-600 to-blue-500",
    isNew: true,
  },
  {
    src: "/assets/headsets/anc_airport.png",
    alt: "Person wearing noise-cancelling headset working productively in a busy airport terminal — relaxed and distraction-free",
    label: "Work Anywhere",
    tag: "On-the-Go ANC",
    tagColor: "from-blue-500 to-violet-500",
    isNew: true,
  },
  // ── EXISTING: Hero / Enterprise Images ────────────────────────────────────
  {
    src: "/assets/hero/headset_call_center.png",
    alt: "Enterprise headset in a call center environment — crystal-clear voice communications",
    label: "Enterprise Call Center",
    tag: "Enterprise Headsets",
    tagColor: "from-blue-600 to-cyan-500",
  },
  {
    src: "/assets/hero/av_boardroom.png",
    alt: "Next-generation AV boardroom setup with premium headsets and smart displays",
    label: "Boardroom AV Setup",
    tag: "AV Integration",
    tagColor: "from-blue-600 to-indigo-500",
  },
  {
    src: "/assets/hero/ippbx_network.png",
    alt: "IP-PBX network infrastructure powering unified enterprise voice communications",
    label: "IP-PBX Network",
    tag: "IP-PBX & Voice",
    tagColor: "from-indigo-600 to-blue-500",
  },
  {
    src: "/assets/hero/video_conferencing.png",
    alt: "Seamless hybrid video conferencing with premium enterprise headsets and smart cameras",
    label: "Video Conferencing",
    tag: "Smart Collaboration",
    tagColor: "from-purple-600 to-indigo-500",
  },
  {
    src: "/assets/hero/network_banner.png",
    alt: "Total enterprise communication network infrastructure across India",
    label: "Pan-India Networks",
    tag: "Infrastructure",
    tagColor: "from-cyan-600 to-blue-500",
  },
];

// ─── Feature Cards ──────────────────────────────────────────────────────────
const features = [
  {
    icon: VolumeX,
    title: "Active Noise Cancellation",
    description:
      "Advanced ANC technology intelligently filters out ambient noise—conversations, HVAC, keyboards—so you stay locked in on what matters.",
  },
  {
    icon: Mic2,
    title: "HD Voice Clarity",
    description:
      "Wideband & super-wideband audio captures the full spectrum of the human voice, ensuring every call is crisp and fatigue-free.",
  },
  {
    icon: Headphones,
    title: "All-Day Comfort",
    description:
      "Ergonomically designed ear cups with premium padding engineered for 8+ hour shift comfort without pressure build-up.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Grade",
    description:
      "Built to enterprise standards with reinforced cables, quick-disconnect systems, and compatibility with all major UC platforms.",
  },
];

// ─── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  images: GalleryImage[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const img = images[index];

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl p-4"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/20"
          aria-label="Close lightbox"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Prev */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/20 hover:scale-105 active:scale-95"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Image */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-h-[88vh] max-w-5xl w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
            <Image
              src={img.src}
              alt={img.alt}
              width={1024}
              height={1024}
              className="block h-auto max-h-[80vh] w-full object-contain"
              unoptimized
              priority
            />
          </div>
          {/* Caption */}
          <div className="mt-4 flex items-center justify-between px-1">
            <div>
              <span
                className={`inline-flex rounded-full bg-gradient-to-r ${img.tagColor} px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-white`}
              >
                {img.tag}
              </span>
              <p className="mt-1.5 text-sm font-semibold text-white/90">
                {img.label}
              </p>
            </div>
            <span className="text-xs font-semibold tabular-nums text-white/40">
              {index + 1} / {images.length}
            </span>
          </div>
        </motion.div>

        {/* Next */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md transition hover:bg-white/20 hover:scale-105 active:scale-95"
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Main Gallery Page Client Component ──────────────────────────────────────
export function HeadsetsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : 0
    );
  const next = () =>
    setLightboxIndex((i) =>
      i !== null ? (i + 1) % galleryImages.length : 0
    );

  return (
    <>
      {/* ── Hero Banner ─────────────────────────────────────────────────────── */}
      <div className="relative h-72 w-full overflow-hidden md:h-96">
        <Image
          src="/assets/headsets/anc_open_office.png"
          alt="Green Network premium noise-cancelling headsets for enterprise"
          fill
          priority
          unoptimized
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <FadeIn>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#2563eb]">
              — Premium Audio Solutions
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white md:text-6xl">
              Enterprise Headsets
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-slate-300">
              Active noise cancellation, HD voice clarity, and all-day comfort
              — engineered for the demands of the modern workplace.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* ── Feature Highlights ──────────────────────────────────────────────── */}
      <Section className="py-14 border-b border-border">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">
            — Why Green Network Headsets
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
            Built for Focus. Designed for Performance.
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feat, i) => (
            <FadeIn key={feat.title} delay={i * 0.07}>
              <div className="h-full rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2563eb]/40 hover:shadow-[0_8px_30px_rgba(37,99,235,0.1)]">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563eb]/10">
                  <feat.icon className="h-5 w-5 text-[#2563eb]" />
                </div>
                <h3 className="mt-4 text-base font-bold">{feat.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {feat.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── Gallery ─────────────────────────────────────────────────────────── */}
      <Section className="py-16 md:py-24">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#2563eb]">
            — Image Gallery
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
            See Our Headsets in Action
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            From bustling open offices to busy airport terminals — our
            noise-cancelling headsets keep professionals focused, productive,
            and sounding their best in every environment.
          </p>
        </FadeIn>

        {/* ── New ANC Hero Trio — larger featured row ─────────────────────── */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {galleryImages.slice(0, 3).map((img, i) => (
            <FadeIn key={img.src} delay={i * 0.08}>
              <button
                style={{ display: "block" }}
                id={`gallery-new-${i + 1}`}
                onClick={() => openLightbox(i)}
                className="group relative w-full overflow-hidden rounded-2xl shadow-md ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-[#2563eb]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]"
                aria-label={`View: ${img.label}`}
              >
                {/* "NEW" badge */}
                <span className="absolute left-3 top-3 z-10 rounded-full bg-[#2563eb] px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md">
                  New
                </span>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1024}
                  height={1024}
                  unoptimized
                  className="aspect-square w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/75 via-black/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span
                    className={`inline-flex rounded-full bg-gradient-to-r ${img.tagColor} px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-white`}
                  >
                    {img.tag}
                  </span>
                  <p className="mt-1.5 text-sm font-bold text-white">
                    {img.label}
                  </p>
                  <span className="mt-2 flex items-center gap-1.5 text-xs text-white/60">
                    <ZoomIn className="h-3.5 w-3.5" /> Click to expand
                  </span>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>

        {/* ── Existing Enterprise Images ───────────────────────────────────── */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.slice(3).map((img, i) => (
            <FadeIn key={img.src} delay={(i % 3) * 0.07}>
              <button
                style={{ display: "block" }}
                id={`gallery-existing-${i + 1}`}
                onClick={() => openLightbox(i + 3)}
                className="group relative w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-[#2563eb]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]"
                aria-label={`View: ${img.label}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1024}
                  height={1024}
                  unoptimized
                  className="aspect-square w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-start justify-end bg-gradient-to-t from-black/70 via-black/15 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span
                    className={`inline-flex rounded-full bg-gradient-to-r ${img.tagColor} px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white`}
                  >
                    {img.tag}
                  </span>
                  <p className="mt-1 text-xs font-bold text-white">
                    {img.label}
                  </p>
                  <span className="mt-1.5 flex items-center gap-1 text-[11px] text-white/55">
                    <ZoomIn className="h-3 w-3" /> Click to expand
                  </span>
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ── CTA Strip ───────────────────────────────────────────────────────── */}
      <div className="border-t border-border bg-[#2563eb]/5 py-14">
        <Section>
          <FadeIn>
            <div className="flex flex-col items-center text-center gap-5 md:flex-row md:text-left md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#2563eb]">
                  Ready to Upgrade?
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
                  Find the Perfect Headset for Your Team
                </h2>
                <p className="mt-2 text-muted-foreground max-w-lg">
                  Our specialists will help you select the right
                  noise-cancelling solution for your environment and budget.
                </p>
              </div>
              <a
                href="mailto:sales@green-network.in"
                id="headsets-cta-email"
                className="inline-flex shrink-0 h-12 items-center justify-center gap-2 rounded-full bg-[#2563eb] px-8 text-sm font-semibold text-white shadow-lg shadow-[#2563eb]/25 transition-colors hover:bg-[#1d4ed8]"
              >
                <Headphones className="h-4 w-4" />
                Request a Demo
              </a>
            </div>
          </FadeIn>
        </Section>
      </div>

      {/* ── Lightbox ────────────────────────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
