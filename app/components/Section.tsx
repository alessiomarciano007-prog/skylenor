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
    rgba(255,255,255,0.10) 2%,
    rgba(255,255,255,0.13) 4%,
    rgba(255,255,255,0.24) 6%,
    rgba(255,255,255,0.42) 8%,
    rgba(255,255,255,0.67) 10%,
    rgba(255,255,255,0.99) 12%,
    #ffffff                 50%,
    rgba(255,255,255,0.95) 83%,
    rgba(255,255,255,0.78) 85%,
    rgba(255,255,255,0.55) 87%,
    rgba(255,255,255,0.38) 89%,
    rgba(255,255,255,0.22) 91%,
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
