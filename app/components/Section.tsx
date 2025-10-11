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
    rgba(255,255,255,0.10) 18%,
    rgba(255,255,255,0.22) 28%,
    rgba(255,255,255,0.38) 36%,
    rgba(255,255,255,0.55) 44%,
    rgba(255,255,255,0.78) 49%,
    rgba(255,255,255,0.95) 51%,
    #ffffff                 52%,
    rgba(255,255,255,0.95) 53%,
    rgba(255,255,255,0.78) 56%,
    rgba(255,255,255,0.55) 60%,
    rgba(255,255,255,0.38) 66%,
    rgba(255,255,255,0.22) 72%,
    rgba(255,255,255,0.10) 78%,
    rgba(255,255,255,0)   86%
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
