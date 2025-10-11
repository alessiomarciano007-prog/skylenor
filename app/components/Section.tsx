"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  return (
    <section className={`relative w-full overflow-hidden ${className ?? ""}`}>
      {children}

      {/* SFUMATURA IN ALTO (corta e morbida) */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0
          h-[90px] sm:h-[110px]       /* <— altezza della fascia sopra */
          bg-[linear-gradient(to_bottom,
            rgba(255,255,255,1)_0%,
            rgba(255,255,255,0.92)_35%,
            rgba(255,255,255,0.65)_70%,
            rgba(255,255,255,0)_100%
          )]
        "
      />

      {/* SFUMATURA IN BASSO (corta e morbida) */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0
          h-[110px] sm:h-[130px]      /* <— altezza della fascia sotto (la “blu”) */
          bg-[linear-gradient(to_top,
            rgba(255,255,255,1)_0%,
            rgba(255,255,255,0.92)_35%,
            rgba(255,255,255,0.65)_70%,
            rgba(255,255,255,0)_100%
          )]
        "
      />
    </section>
  );
}
