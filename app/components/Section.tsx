"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  return (
    <section className={`relative w-full overflow-hidden ${className ?? ""}`}>
      {/* Contenuto della sezione */}
      <div className="relative z-0">{children}</div>

      {/* SFUMATURA IN ALTO (corta e morbida, sopra al contenuto) */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 z-20
          h-[90px] sm:h-[110px]
          bg-[linear-gradient(to_bottom,
            rgba(255,255,255,1)_0%,
            rgba(255,255,255,0.92)_35%,
            rgba(255,255,255,0.65)_70%,
            rgba(255,255,255,0)_100%
          )]
        "
      />

      {/* SFUMATURA IN BASSO (corta e morbida, sopra al contenuto) */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-20
          h-[110px] sm:h-[130px]
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
