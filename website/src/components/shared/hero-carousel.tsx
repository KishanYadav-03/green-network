"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Slide {
  image: string;
  tag: string;
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
  accentColor: string;
}

const slides: Slide[] = [
  // ── NEW: Noise-Cancelling Headset Slides (prepended) ──────────────────────
  {
    image: "/assets/hero/anc_open_office.png",
    tag: "Noise Cancellation",
    title: "Stay Focused in Any Environment",
    description: "Our professional noise-cancelling headsets block out the busiest open offices so you can work without distraction — crystal-clear audio, all day long.",
    ctaText: "Explore Headsets",
    ctaHref: "#solutions",
    accentColor: "from-blue-600 to-cyan-500",
  },
  {
    image: "/assets/hero/anc_call_center.png",
    tag: "Call Centre Solutions",
    title: "Every Call, Perfectly Clear",
    description: "Purpose-built for high-density call centre floors — our headsets deliver HD voice clarity and active noise cancellation so every conversation counts.",
    ctaText: "View Call Centre Headsets",
    ctaHref: "#solutions",
    accentColor: "from-indigo-600 to-blue-500",
  },
  {
    image: "/assets/hero/anc_airport.png",
    tag: "Work Anywhere",
    title: "Productive Wherever Business Takes You",
    description: "From airport lounges to busy co-working spaces — our enterprise headsets create a quiet, professional experience no matter how loud the world gets.",
    ctaText: "Discover the Range",
    ctaHref: "#solutions",
    accentColor: "from-blue-500 to-violet-500",
  },
  // ── EXISTING Slides ───────────────────────────────────────────────────────
  {
    image: "/assets/hero/headset_call_center.png",
    tag: "Enterprise Headsets",
    title: "Crystal-Clear Voice Communications",
    description: "Your voice will be crystal clear because of our premium noise-canceling headsets. Engineered for ultimate comfort and voice clarity in high-density call center environments.",
    ctaText: "Explore Headsets",
    ctaHref: "#solutions",
    accentColor: "from-blue-600 to-cyan-500",
  },
  {
    image: "/assets/hero/av_boardroom.png",
    tag: "AV Integration",
    title: "Next-Gen Boardrooms & Conference Rooms",
    description: "State-of-the-art audio-visual setups, smart displays, automated room systems, and high-end integration for the modern hybrid workspace.",
    ctaText: "Explore AV Solutions",
    ctaHref: "#solutions",
    accentColor: "from-blue-600 to-indigo-500",
  },
  {
    image: "/assets/hero/ippbx_network.png",
    tag: "IP-PBX & Voice",
    title: "Secure Unified Telephony Systems",
    description: "Highly scalable IP PBX infrastructure, SIP servers, and digital endpoints built to power seamless enterprise voice communications.",
    ctaText: "Discover Voice Tech",
    ctaHref: "#solutions",
    accentColor: "from-indigo-600 to-blue-500",
  },
  {
    image: "/assets/hero/video_conferencing.png",
    tag: "Smart Collaboration",
    title: "Seamless Hybrid Video Collaboration",
    description: "Connect teams globally with smart cameras, high-definition displays, and integrated software platforms designed for effortless virtual meetings.",
    ctaText: "View Collaboration Tools",
    ctaHref: "#solutions",
    accentColor: "from-purple-600 to-indigo-500",
  },
  {
    image: "/assets/hero/network_banner.png",
    tag: "Pan-India Infrastructure",
    title: "Total Enterprise Communication Networks",
    description: "From structured cabling to remote maintenance cells, we engineer reliable IT & telecom infrastructure with 99.9% uptime guarantees.",
    ctaText: "Consult Our Experts",
    ctaHref: "#contact",
    accentColor: "from-cyan-600 to-blue-500",
  },
];

const AUTOPLAY_INTERVAL = 6000; // 6 seconds

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setProgress(0);
  };

  // Handle Autoplay Timer
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  // Handle Progress Bar Animation
  useEffect(() => {
    if (isPlaying) {
      const step = 100 / (AUTOPLAY_INTERVAL / 50); // 50ms updates
      progressIntervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + step;
        });
      }, 50);
    } else {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    }

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [isPlaying, current]);

  return (
    <div className="relative w-full h-[650px] md:h-[750px] lg:h-[800px] overflow-hidden bg-black text-white">
      {/* ── Background Slides ── */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              priority
              unoptimized
              sizes="100vw"
              className="object-cover object-center select-none"
            />
            {/* Ambient Gradients for Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30 lg:from-black/90 lg:via-black/50 lg:to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Slide Content ── */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start select-none">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
                },
                exit: { opacity: 0, transition: { duration: 0.3 } },
              }}
            >
              {/* Category Tag */}
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
                }}
                className={`inline-flex rounded-full bg-gradient-to-r ${slides[current].accentColor} px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-black/10`}
              >
                {slides[current].tag}
              </motion.span>

              {/* Title */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="mt-6 text-balance text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
              >
                {slides[current].title}
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl sm:max-w-2xl text-pretty"
              >
                {slides[current].description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 shadow-lg shadow-blue-600/25">
                  <a href={slides[current].ctaHref} className="flex items-center gap-2">
                    {slides[current].ctaText}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 bg-white/5 hover:bg-white/10 hover:text-white px-8 h-12 backdrop-blur-sm"
                >
                  <a href="#contact">Book Consultation</a>
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ── Arrow Controls ── */}
      <div className="absolute inset-y-0 left-4 lg:left-8 z-30 flex items-center pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/60 border border-white/10 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 group"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="h-6 w-6 transition-transform group-hover:-translate-x-0.5" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 lg:right-8 z-30 flex items-center pointer-events-none">
        <button
          onClick={nextSlide}
          className="pointer-events-auto h-12 w-12 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/60 border border-white/10 text-white backdrop-blur-md transition-all duration-200 hover:scale-105 active:scale-95 group"
          aria-label="Next Slide"
        >
          <ChevronRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* ── Bottom controls & indicator bar ── */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex flex-wrap items-center justify-between max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pointer-events-none select-none">
        {/* Slide Indicators */}
        <div className="pointer-events-auto flex items-center gap-3">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className="group relative flex flex-col items-start gap-1 py-2 text-left transition-all"
              aria-label={`Go to slide ${idx + 1}`}
            >
              {/* Indicator Dot/Bar */}
              <div className="relative w-12 sm:w-20 h-[3px] rounded-full overflow-hidden bg-white/20">
                {current === idx && (
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-blue-500 rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
              <span className={`hidden sm:inline text-[10px] font-bold uppercase tracking-wider transition-colors ${current === idx ? "text-white" : "text-white/40 group-hover:text-white/70"}`}>
                0{idx + 1}
              </span>
            </button>
          ))}
        </div>

        {/* Play/Pause & Counter */}
        <div className="pointer-events-auto flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full mt-4 sm:mt-0 text-white">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <div className="h-3 w-[1px] bg-white/25" />
          <span className="text-xs font-semibold tabular-nums text-white/80">
            {String(current + 1).padStart(2, "0")} <span className="text-white/40">/</span> {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}
