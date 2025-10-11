"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** altezza della sfumatura in pixel (solo lato basso) */
  fadeHeight?: number;
};

export default function Section({
  children,
  className,
  fadeHeight = 180,
}: Props) {
  return (
    <section className={`relative w-full ${className ?? ""}`}>
      {/* CONTENUTO (immagine + testo) */}
      <div className="relative z-30">{children}</div>

      {/* SFUMATURA IN BASSO: sopra all’immagine, sotto al testo */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20"
        style={{
          height: `${fadeHeight}px`,
          // Gradiente molto distribuito per evitare la “riga bianca”
          background: `
            linear-gradient(
              to bottom,
              rgba(255,255,255,0)    0%,
              rgba(255,255,255,0.06) 22%,
              rgba(255,255,255,0.12) 36%,
              rgba(255,255,255,0.20) 50%,
              rgba(255,255,255,0.30) 64%,
              rgba(255,255,255,0.45) 78%,
              rgba(255,255,255,0.60) 88%,
              rgba(255,255,255,0.75) 95%,
              #ffffff                100%
            )
          `,
        }}
      />
    </section>
  );
}
