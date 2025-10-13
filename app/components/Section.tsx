"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** percentuale della parte centrale completamente visibile (senza velo bianco) */
  visibleCenterPct?: number; // es. 60 => 20% fade sopra + 20% fade sotto
  /** morbidezza della sfumatura (più alto = più morbida), espresso in % dell’altezza */
  softnessPct?: number; // es. 6-10 è un buon range
};

export default function Section({
  children,
  className,
  visibleCenterPct = 60,
  softnessPct = 8,
}: Props) {
  // clamp parametri
  const vis = Math.max(0, Math.min(100, visibleCenterPct));
  const soft = Math.max(1, Math.min(20, softnessPct));

  // Calcolo stop della maschera per l'overlay bianco
  // useremo un overlay bianco che è VISIBILE solo ai bordi grazie alla mask
  const edge = (100 - vis) / 2; // porzione per lato (es. vis=60 -> edge=20)
  const s1 = Math.max(0, edge * 0.35); // primo step morbido
  const s2 = Math.max(0, edge * 0.7);  // secondo step morbido
  // gli stop per il lato inferiore sono speculari

  const maskCSS = `linear-gradient(
    to bottom,
    rgba(0,0,0,0)   0%,    /* trasparente (niente bianco) */
    rgba(0,0,0,0.4) 15%,   /* fade IN */
    #000            25%,   /* inizio zona centrale visibile */
    #000            75%,   /* fine zona centrale visibile */
    rgba(0,0,0,0.4) 85%,   /* fade OUT */
    rgba(0,0,0,0)   100%   /* trasparente */
  )`;
  return (
    <section className={`relative w-full ${className ?? ""}`}>
      {/* Contenuto (immagine + overlay scuro per testi) */}
      <div className="relative z-0">{children}</div>

      {/* Overlay bianco con MASCHERA: bianco solo ai bordi, trasparente al centro */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: "#fff",
          WebkitMaskImage: maskCSS,
          maskImage: maskCSS,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      />
    </section>
  );
}
