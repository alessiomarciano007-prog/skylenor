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
    rgba(255,255,255,0.95) 0%,
    rgba(255,255,255,0.55) 8%,
    rgba(255,255,255,0.25) 14%,
    rgba(255,255,255,0) 20%,
    rgba(255,255,255,0) 80%,
    rgba(255,255,255,0.25) 86%,
    rgba(255,255,255,0.55) 92%,
    rgba(255,255,255,0.95) 100%
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
