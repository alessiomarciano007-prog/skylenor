"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** altezza sfumatura in px (top e bottom) */
  fade?: number;
};

/**
 * Applica una CSS mask direttamente al contenuto della sezione.
 * Il contenuto sfuma verso trasparente ai bordi top/bottom,
 * lasciando vedere lo sfondo (bianco) della pagina.
 */
export default function Section({ children, className, fade = 160 }: Props) {
  const mask = `linear-gradient(
    to bottom,
    rgba(0,0,0,0) 0%,
    #000 ${fade * 0.35}px,
    #000 calc(100% - ${fade * 0.35}px),
    rgba(0,0,0,0) 100%
  )`;

  return (
    <section className={`relative w-full ${className ?? ""}`}>
      {/* il wrapper con la mask: QUI avviene la sfumatura */}
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

      {/* Fallback super leggero per browser senza mask (quasi invisibile) */}
      <noscript />
    </section>
  );
}
