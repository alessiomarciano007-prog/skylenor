"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  return (
    <section className={`relative w-full overflow-hidden ${className ?? ""}`}>
      {/* Contenuto principale */}
      <div className="relative z-0">{children}</div>

      {/* Sfumatura in alto */}
      <div
        className="
          pointer-events-none absolute inset-x-0 top-0 z-20
          h-[160px] sm:h-[180px]
          bg-[linear-gradient(to_bottom,
            rgba(255,255,255,1)_0%,
            rgba(255,255,255,0.9)_25%,
            rgba(255,255,255,0.6)_55%,
            rgba(255,255,255,0.2)_85%,
            rgba(255,255,255,0)_100%
          )]
        "
      />

      {/* Sfumatura in basso */}
      <div
        className="
          pointer-events-none absolute inset-x-0 bottom-0 z-20
          h-[160px] sm:h-[180px]
          bg-[linear-gradient(to_top,
            rgba(255,255,255,1)_0%,
            rgba(255,255,255,0.9)_25%,
            rgba(255,255,255,0.6)_55%,
            rgba(255,255,255,0.2)_85%,
            rgba(255,255,255,0)_100%
          )]
        "
      />
    </section>
  );
}
