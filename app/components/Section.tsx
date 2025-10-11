"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  return (
    <section className={`relative w-full ${className ?? ""}`}>
      {/* Contenuto della sezione */}
      <div className="relative z-10">{children}</div>

      {/* Sfumatura morbida che unisce le sezioni */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
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
    </section>
  );
}
