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
    rgba(0,0,0,0)   0%,
    rgba(0,0,0,0.35) 8%,
    rgba(0,0,0,0.70) 12%,
    rgba(0,0,0,1)   20%,
    rgba(0,0,0,1)   80%,
    rgba(0,0,0,0.70) 88%,
    rgba(0,0,0,0.35) 92%,
    rgba(0,0,0,0)  100%
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
