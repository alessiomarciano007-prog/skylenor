"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  fade?: number;
};

/**
 * Variante più morbida della sfumatura.
 * Il gradiente è distribuito su un’area più ampia,
 * evitando la "riga bianca" al centro.
 */
export default function Section({ children, className, fade = 180 }: Props) {
  const mask = `linear-gradient(
    to bottom,
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,0.6) 15%,
    #000 35%,
    #000 65%,
    rgba(0,0,0,0.6) 85%,
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
