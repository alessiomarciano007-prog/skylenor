"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  fade?: number; // non usato, lo lasciamo compatibile
};

export default function Section({ children, className, fade = 180 }: Props) {
  // 20% fade sopra + 20% fade sotto → 60% centrale visibile (20–80)
  const mask = `linear-gradient(
    to bottom,
    rgba(255,255,255,0)   0%,
    rgba(255,255,255,0.25) 8%,
    rgba(255,255,255,0.60) 14%,
    rgba(255,255,255,1)   20%,
    rgba(255,255,255,1)   80%,
    rgba(255,255,255,0.60) 86%,
    rgba(255,255,255,0.25) 92%,
    rgba(255,255,255,0)  100%
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
