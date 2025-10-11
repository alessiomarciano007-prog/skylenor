"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  fade?: number;
};

export default function Section({ children, className, fade = 180 }: Props) {
  // Gradiente molto più morbido e distribuito
  const mask = `linear-gradient(
    to bottom,
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,0.25) 25%,
    rgba(0,0,0,0.45) 40%,
    rgba(0,0,0,0.55) 55%,
    rgba(0,0,0,0.45) 70%,
    rgba(0,0,0,0.25) 85%,
    rgba(0,0,0,0) 100%
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
