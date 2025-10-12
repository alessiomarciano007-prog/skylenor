"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /**
   * Percentuale del blocco centrale completamente visibile (0–100).
   * Esempio: 60 -> 20% fade sopra + 20% fade sotto, 60% visibile.
   */
  visibleCenterPct?: number;
};

export default function Section({
  children,
  className,
  visibleCenterPct = 60, // cambia qui: 60 = visibile 60% centrale; fade 20% sopra/sotto
}: Props) {
  // clamp per sicurezza
  const vis = Math.max(0, Math.min(100, visibleCenterPct));
  const halfFade = (100 - vis) / 2; // es. vis=60 -> halfFade=20

  // Costruiamo una mask chiara: TRASPARENTE ai bordi, OPACA al centro
  // In CSS mask, alpha 1 (opaco) = l'elemento SI VEDE, alpha 0 (trasparente) = l'elemento SCOMPARE
  // Quindi: 0%..halfFade% -> alpha 0..1 (fade-in)
  //         halfFade%..(100-halfFade)% -> alpha 1 (tutto visibile)
  //         (100-halfFade)%..100% -> alpha 1..0 (fade-out)
  const mask = `linear-gradient(
    to bottom,
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,0.25) ${Math.max(2, halfFade * 0.4)}%,
    rgba(0,0,0,0.6) ${Math.max(4, halfFade * 0.7)}%,
    rgba(0,0,0,1) ${halfFade}%,
    rgba(0,0,0,1) ${100 - halfFade}%,
    rgba(0,0,0,0.6) ${100 - Math.max(4, halfFade * 0.7)}%,
    rgba(0,0,0,0.25) ${100 - Math.max(2, halfFade * 0.4)}%,
    rgba(0,0,0,0) 100%
  )`;

  return (
    <section className={`relative w-full ${className ?? ""}`}>
      <div
        className="relative z-0"
        style={{
          // Mask applicata al CONTENUTO: il centro resta visibile, i bordi sfumano
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
    </section>
  );
}
