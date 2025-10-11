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
        rgba(255,255,255,0)   0%,
        rgba(255,255,255,0.10) 6%,
        rgba(255,255,255,0.22) 10%,
        rgba(255,255,255,0.38) 13%,
        rgba(255,255,255,0.55) 16%,
        rgba(255,255,255,0.78) 18%,
        rgba(255,255,255,0.95) 19%,
        #ffffff                20%,
        rgba(255,255,255,0.95) 21%,
        rgba(255,255,255,0.78) 22%,
        rgba(255,255,255,0.55) 24%,
        rgba(255,255,255,0.38) 26%,
        rgba(255,255,255,0.22) 28%,
        rgba(255,255,255,0.10) 30%,
        rgba(255,255,255,0)   35%
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
