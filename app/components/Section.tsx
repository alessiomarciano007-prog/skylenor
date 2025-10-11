"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

// piccolo SVG di noise come data URI (serve per eliminare il banding)
const NOISE =
  "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'>\
  <filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter>\
  <rect width='100%' height='100%' filter='url(%23n)' opacity='0.035'/>\
</svg>";

export default function Section({ children, className }: Props) {
  // gradiente più morbido, tanti stop ravvicinati
  const topGradient: React.CSSProperties = {
    background:
      "linear-gradient(to bottom, \
        rgba(255,255,255,1) 0%, \
        rgba(255,255,255,0.98) 12%, \
        rgba(255,255,255,0.93) 25%, \
        rgba(255,255,255,0.82) 37%, \
        rgba(255,255,255,0.68) 50%, \
        rgba(255,255,255,0.48) 63%, \
        rgba(255,255,255,0.28) 76%, \
        rgba(255,255,255,0.12) 88%, \
        rgba(255,255,255,0) 100%)",
    backdropFilter: "blur(1.5px)", // aiuta a fondere i bordi
  };

  const bottomGradient: React.CSSProperties = {
    background:
      "linear-gradient(to top, \
        rgba(255,255,255,1) 0%, \
        rgba(255,255,255,0.98) 12%, \
        rgba(255,255,255,0.93) 25%, \
        rgba(255,255,255,0.82) 37%, \
        rgba(255,255,255,0.68) 50%, \
        rgba(255,255,255,0.48) 63%, \
        rgba(255,255,255,0.28) 76%, \
        rgba(255,255,255,0.12) 88%, \
        rgba(255,255,255,0) 100%)",
    backdropFilter: "blur(1.5px)",
  };

  const noiseStyle: React.CSSProperties = {
    backgroundImage: `url("${NOISE}")`,
    backgroundRepeat: "repeat",
    opacity: 0.25, // rumore molto leggero
    mixBlendMode: "normal",
  };

  return (
    <section className={`relative w-full overflow-hidden ${className ?? ""}`}>
      {/* Contenuto */}
      <div className="relative z-0">{children}</div>

      {/* Sfumatura in alto + noise */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-50 h-[170px] sm:h-[190px]"
        style={topGradient}
      >
        <div className="absolute inset-0" style={noiseStyle} />
      </div>

      {/* Sfumatura in basso + noise */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-50 h-[170px] sm:h-[190px]"
        style={bottomGradient}
      >
        <div className="absolute inset-0" style={noiseStyle} />
      </div>
    </section>
  );
}
