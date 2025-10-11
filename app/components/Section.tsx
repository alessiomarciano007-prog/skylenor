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
    rgba(255,255,255,0.10) 7%,
    rgba(255,255,255,0.22) 9%,
    rgba(255,255,255,0.38) 11%,
    rgba(255,255,255,0.55) 13%,
    rgba(255,255,255,0.78) 15%,
    rgba(255,255,255,0.95) 17%,
    #ffffff                 50%,
    rgba(255,255,255,0.95) 97%,
    rgba(255,255,255,0.78) 89%,
    rgba(255,255,255,0.55) 91%,
    rgba(255,255,255,0.38) 93%,
    rgba(255,255,255,0.22) 95%,
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
