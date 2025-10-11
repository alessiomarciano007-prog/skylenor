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

      {/* Sfumatura più morbida e distribuita */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background: `linear-gradient(
            to bottom,
            rgba(255,255,255,0)   0%,
            rgba(255,255,255,0.05) 20%,
            rgba(255,255,255,0.12) 35%,
            rgba(255,255,255,0.25) 45%,
            rgba(255,255,255,0.4)  55%,
            rgba(255,255,255,0.55) 65%,
            rgba(255,255,255,0.7)  75%,
            rgba(255,255,255,0.85) 85%,
            rgba(255,255,255,0.95) 92%,
            rgba(255,255,255,1)    100%
          )`,
        }}
      />
    </section>
  );
}
