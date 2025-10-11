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
  rgba(0,0,0,0.4) 15%,
  #000 25%,
  #000 75%,
  rgba(0,0,0,0.4) 85%,
  rgba(0,0,0,0) 100%
)`;

  return (
    <section className={`relative w-full ${className ?? ""}`}>
      <div
  className="pointer-events-none absolute inset-0 z-40"
  style={{
    background: `linear-gradient(
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
    )`,
  }}
/>
        {children}
      </div>
    </section>
  );
}
