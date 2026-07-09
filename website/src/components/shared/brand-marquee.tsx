"use client";

const brands = ["AVAYA", "NEC", "POLYCOM", "VOIX", "CISCO", "HONEYWELL"];

export function BrandMarquee() {
  const list = [...brands, ...brands];

  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .brand-marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 16s linear infinite;
          will-change: transform;
        }
        .brand-marquee-track:hover {
          animation-play-state: paused;
        }
        .brand-marquee-text {
          color: rgb(15 23 42 / 22%);
        }
        :is(.dark) .brand-marquee-text {
          color: rgb(255 255 255 / 18%);
        }
      `}</style>

      <div style={{ position: "relative", overflow: "hidden", marginTop: "2.5rem" }}>
        {/* Left fade */}
        <div style={{
          position: "absolute", top: 0, bottom: 0, left: 0,
          width: "8rem", zIndex: 10,
          background: "linear-gradient(to right, hsl(var(--background)), transparent)",
          pointerEvents: "none",
        }} />
        {/* Right fade */}
        <div style={{
          position: "absolute", top: 0, bottom: 0, right: 0,
          width: "8rem", zIndex: 10,
          background: "linear-gradient(to left, hsl(var(--background)), transparent)",
          pointerEvents: "none",
        }} />

        <div className="brand-marquee-track">
          {list.map((brand, i) => (
            <span
              key={i}
              className="brand-marquee-text"
              style={{
                flexShrink: 0,
                padding: "0 48px",
                fontFamily: '"Syne", system-ui, sans-serif',
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
