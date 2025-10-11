"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** opzionali: se vuoi togliere la sfumatura in alto o in basso su una sezione */
  hideTop?: boolean;
  hideBottom?: boolean;
};

export default function Section({
  children,
  className,
  hideTop,
  hideBottom,
}: Props) {
  return (
    <section className={`relative w-full overflow-hidden ${className ?? ""}`}>
      {/* contenuto */}
      <div className="relative z-0">{children}</div>

      {/* sfumatura in alto (più morbida, senza picco bianco) */}
      {!hideTop && (
        <div
          className="
            pointer-events-none absolute inset-x-0 top-0 z-20
            h-[120px] sm:h-[140px]
            bg-[linear-gradient(to_bottom,
              rgba(255,255,255,0.85)_0%,
              rgba(255,255,255,0.60)_35%,
              rgba(255,255,255,0.35)_70%,
              rgba(255,255,255,0)_100%
            )]
          "
        />
      )}

      {/* sfumatura in basso (simmetrica) */}
      {!hideBottom && (
        <div
          className="
            pointer-events-none absolute inset-x-0 bottom-0 z-20
            h-[120px] sm:h-[140px]
            bg-[linear-gradient(to_top,
              rgba(255,255,255,0.85)_0%,
              rgba(255,255,255,0.60)_35%,
              rgba(255,255,255,0.35)_70%,
              rgba(255,255,255,0)_100%
            )]
          "
        />
      )}
    </section>
  );
}
