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
    rgba(255,255,255,0)   0%,
    rgba(255,255,255,0.10) 3%,
    rgba(255,255,255,0.22) 6%,
    rgba(255,255,255,0.38) 9%,
    rgba(255,255,255,0.55) 12%,
    rgba(255,255,255,0.78) 15%,
    rgba(255,255,255,0.95) 16%,
    #ffffff                 52%,
    rgba(255,255,255,0.95) 82%,
    rgba(255,255,255,0.78) 85%,
    rgba(255,255,255,0.55) 88%,
    rgba(255,255,255,0.38) 91%,
    rgba(255,255,255,0.22) 94%,
    rgba(255,255,255,0.10) 97%,
    rgba(255,255,255,0)   100%
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
