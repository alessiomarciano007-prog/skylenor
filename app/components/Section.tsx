"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Questa versione usa la CSS mask per far sfumare
 * l'immagine in modo naturale verso lo sfondo bianco,
 * senza quell’effetto “appannato” che si vedeva prima.
 */
export default function Section({ children, className }: Props) {
  const fadeH = "160px"; // altezza della sfumatura

  const topMask: React.CSSProperties = {
    WebkitMaskImage:
      `linear-gradient(to bottom, black 0%, black 25%, rgba(0,0,0,0) 100%)`,
    maskImage:
      `linear-gradient(to bottom, black 0%, black 25%, rgba(0,0,0,0) 100%)`,
  };

  const bottomMask: React.CSSProperties = {
    WebkitMaskImage:
      `linear-gradient(to top, black 0%, black 25%, rgba(0,0,0,0) 100%)`,
    maskImage:
      `linear-gradient(to top, black 0%, black 25%, rgba(0,0,0,0) 100%)`,
  };

  return (
    <section className={`relative w-full overflow-hidden ${className ?? ""}`}>
      {/* Contenuto della sezione */}
      <div className="relative z-0">{children}</div>

      {/* Fade superiore */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-50"
        style={{ ...topMask, height: fadeH }}
      />

      {/* Fade inferiore */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-50"
        style={{ ...bottomMask, height: fadeH }}
      />
    </section>
  );
}
