"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** larghezza della parte centrale forte (0 = senza “rigone” bianco) */
  bandPct?: number;      // es. 0–3
  /** lunghezza della sfumatura sopra/sotto la giunzione */
  featherPct?: number;   // es. 6–10
  /** spostamento della giunzione (se serve) */
  offsetPct?: number;    // es. -2..+2
};

export default function Section({
  children,
  className,
  bandPct = 0,       // nessun plateau: tutto graduale
  featherPct = 8,    // quanto “larga” è la sfumatura
  offsetPct = 0,     // 0 = centrata esattamente a metà sezione
}: Props) {
  const mid = 50 + offsetPct;              // posizione giunzione (linea rossa)
  const halfBand = bandPct / 2;

  // stop del mask (il bianco dell'overlay è visibile solo vicino alla giunzione)
  const a = (mid - halfBand - featherPct).toFixed(2); // fine trasparenza sopra
  const b = (mid - halfBand).toFixed(2);              // inizio “cuore”
  const c = (mid + halfBand).toFixed(2);              // fine “cuore”
  const d = (mid + halfBand + featherPct).toFixed(2); // inizio trasparenza sotto

  const mask = `linear-gradient(
    to bottom,
    rgba(0,0,0,0) 0%,
    rgba(0,0,0,0) ${a}%,
    rgba(0,0,0,0.35) ${b}%,
    #000 ${mid - 0.1}%,
    #000 ${mid + 0.1}%,
    rgba(0,0,0,0.35) ${c}%,
    rgba(0,0,0,0) ${d}%,
    rgba(0,0,0,0) 100%
  )`;

  return (
    <section className={`relative w-full ${className ?? ""}`}>
      <div className="relative z-0">{children}</div>
      {/* velo bianco visibile solo attorno alla giunzione */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: "#fff",
          WebkitMaskImage: mask,
          maskImage: mask,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
        }}
      />
    </section>
  );
}
