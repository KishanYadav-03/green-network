"use client";

import * as React from "react";

type ThemeTransitionDetail = {
  x: number;
  y: number;
  nextTheme: "light" | "dark";
};

type TransitionState = ThemeTransitionDetail & { id: number };

export function ThemeTransitionOverlay() {
  const [state, setState] = React.useState<TransitionState | null>(null);

  React.useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<ThemeTransitionDetail>).detail;
      if (!detail) return;
      setState({ ...detail, id: Date.now() });
    };
    window.addEventListener("theme-transition", handler);
    return () => window.removeEventListener("theme-transition", handler);
  }, []);

  if (!state) return null;

  return (
    <SunMoonRise
      key={state.id}
      nextTheme={state.nextTheme}
      onDone={() => setState(null)}
    />
  );
}

/* ─── Sun / Moon Rise ────────────────────────────────────────── */
function SunMoonRise({
  nextTheme,
  onDone,
}: {
  nextTheme: "light" | "dark";
  onDone: () => void;
}) {
  const isDark = nextTheme === "dark";
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  // Horizon spread overlay
  const spreadRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const wrapper = wrapperRef.current;
    const spread = spreadRef.current;
    if (!wrapper || !spread) return;

    // 1. Orb rises from bottom-center
    const orbAnim = wrapper.animate(
      [
        { transform: "translateX(-50%) translateY(120px) scale(0.4)", opacity: 0 },
        { transform: "translateX(-50%) translateY(-20px) scale(1.15)", opacity: 1, offset: 0.45 },
        { transform: "translateX(-50%) translateY(-28px) scale(1)", opacity: 1, offset: 0.6 },
        { transform: "translateX(-50%) translateY(-28px) scale(1)", opacity: 0, offset: 0.85 },
        { transform: "translateX(-50%) translateY(-28px) scale(1)", opacity: 0 },
      ],
      { duration: 900, easing: "cubic-bezier(0.34, 1.56, 0.64, 1)", fill: "forwards" }
    );

    // 2. Horizon spreads left + right from center after orb peaks
    const spreadAnim = spread.animate(
      [
        { clipPath: "polygon(40% 100%, 60% 100%, 60% 100%, 40% 100%)", opacity: 1, offset: 0 },
        { clipPath: "polygon(40% 100%, 60% 100%, 60% 100%, 40% 100%)", opacity: 1, offset: 0.35 },
        { clipPath: "polygon(0% 40%, 100% 40%, 100% 100%, 0% 100%)", opacity: 1, offset: 0.65 },
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", opacity: 1, offset: 0.9 },
        { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", opacity: 1 },
      ],
      { duration: 900, easing: "cubic-bezier(0.4, 0, 0.2, 1)", fill: "forwards" }
    );

    spreadAnim.onfinish = onDone;

    return () => {
      orbAnim.cancel();
      spreadAnim.cancel();
    };
  }, [isDark, onDone]);

  // Sky / horizon bg for the spread
  const spreadBg = isDark ? "hsl(222.2 84% 4.9%)" : "hsl(0 0% 100%)";

  // Orb glow colours
  const orbCore  = isDark ? "#c7d2fe"   : "#fef08a"; // indigo-200 / yellow-200
  const orbGlow  = isDark ? "rgba(99,102,241,0.55)" : "rgba(251,191,36,0.55)";
  const orbOuter = isDark ? "rgba(67,56,202,0)"     : "rgba(253,224,71,0)";

  // Rays only for sun (light mode)
  const showRays = !isDark;

  return (
    <>
      {/* Horizon spread — fills screen from center-bottom outward */}
      <div
        ref={spreadRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[117]"
        style={{
          background: spreadBg,
          clipPath: "polygon(40% 100%, 60% 100%, 60% 100%, 40% 100%)",
        }}
      />

      {/* Orb (sun or moon) rising from bottom-center */}
      <div
        ref={wrapperRef}
        aria-hidden
        className="pointer-events-none fixed z-[118]"
        style={{
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%) translateY(120px) scale(0.4)",
          width: 72,
          height: 72,
        }}
      >
        {/* Outer glow */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle, ${orbGlow} 0%, ${orbOuter} 70%)`,
            transform: "scale(2.8)",
          }}
        />

        {/* Core orb */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at 38% 35%, white 0%, ${orbCore} 55%, ${orbGlow} 100%)`,
            boxShadow: `0 0 32px 12px ${orbGlow}, 0 0 80px 24px ${orbOuter}`,
          }}
        />

        {/* Moon craters (dark mode only) */}
        {isDark && (
          <>
            <span className="absolute rounded-full bg-indigo-300/30"
              style={{ width: 14, height: 14, top: 14, left: 20 }} />
            <span className="absolute rounded-full bg-indigo-300/20"
              style={{ width: 9, height: 9, top: 32, left: 38 }} />
            <span className="absolute rounded-full bg-indigo-300/25"
              style={{ width: 7, height: 7, top: 22, left: 44 }} />
          </>
        )}

        {/* Sun rays (light mode only) */}
        {showRays && (
          <span
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, transparent 0%, rgba(253,224,71,0.35) 5%, transparent 10%, transparent 15%, rgba(253,224,71,0.25) 20%, transparent 25%, transparent 30%, rgba(253,224,71,0.3) 35%, transparent 40%, transparent 45%, rgba(253,224,71,0.2) 50%, transparent 55%, transparent 60%, rgba(253,224,71,0.3) 65%, transparent 70%, transparent 75%, rgba(253,224,71,0.25) 80%, transparent 85%, transparent 90%, rgba(253,224,71,0.35) 95%, transparent 100%)`,
              transform: "scale(2.2)",
              opacity: 0.7,
            }}
          />
        )}
      </div>
    </>
  );
}
