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
    rgba(255,255,255,0.10) 4%,
    rgba(255,255,255,0.27) 6%,
    rgba(255,255,255,0.45) 9%,
    rgba(255,255,255,0.63) 11%,
    rgba(255,255,255,0.81) 13%,
    rgba(255,255,255,0.99) 15%,
    #ffffff                 50%,
    rgba(255,255,255,0.99) 83%,
    rgba(255,255,255,0.81) 85%,
    rgba(255,255,255,0.63) 87%,
    rgba(255,255,255,0.45) 89%,
    rgba(255,255,255,0.27) 91%,
    rgba(255,255,255,0.10) 93%,
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
