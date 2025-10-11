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
  rgba(255,255,255,0) 0%,       /* piena visibilità */
  rgba(255,255,255,0.25) 8%,    /* inizia a schiarire */
  rgba(255,255,255,0.6) 13%,    /* più morbido */
  #ffffff 50%,                  /* centro completamente visibile */
  rgba(255,255,255,0.6) 87%,    /* inizia a dissolversi */
  rgba(255,255,255,0.25) 93%,   /* quasi trasparente */
  rgba(255,255,255,0) 100%      /* torna pienamente visibile */
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
