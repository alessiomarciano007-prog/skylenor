"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  fade?: number;
};

export default function Section({ children, className, fade = 180 }: Props) {
  // Gradiente centrato e morbido (copre solo una fascia limitata)
const mask = `linear-gradient(
  to bottom,
  rgba(255,255,255,0) 0%,       /* visibile all'inizio */
  rgba(255,255,255,0.4) 5%,     /* leggero fade sopra */
  rgba(255,255,255,1) 15%,      /* bianco pieno breve */
  rgba(255,255,255,1) 85%,      /* rimane visibile */
  rgba(255,255,255,0.4) 95%,    /* leggero fade sotto */
  rgba(255,255,255,0) 100%      /* torna visibile in fondo */
)`;

  return (
    <section className={`relative w-full ${className ?? ""}`}>
      <div
        className="relative z-0"
        style={{
          WebkitMaskImage: mask,
          maskImage: mask,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      >
        {children}
      </div>
    </section>
  );
}
