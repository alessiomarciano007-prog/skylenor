"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** quanto deve “salire/scendere” la sfumatura dal bordo, in % dell’altezza */
  featherPct?: number; // tipico 6–12
};

export default function Section({
  children,
  className,
  featherPct = 12,
}: Props) {
  // gradiente morbido verso il BASSO (trasparente -> bianco)
  const bottomGrad =
    "linear-gradient(to bottom," +
    "rgba(255,255,255,0) 10%," +
    "rgba(255,255,255,0.18) 40%," +
    "rgba(255,255,255,0.38) 70%," +
    "#ffffff 100%)";

 // gradiente morbido verso l’ALTO (bianco -> trasparente)
  const topGrad =
    "linear-gradient(to top," +
    "rgba(255,255,255,0) 10%," +
    "rgba(255,255,255,0.20) 40%," +
    "rgba(255,255,255,0.42) 70%," +
    "#ffffff 100%)";

  return (
    <section className={`relative w-full ${className ?? ""}`}>
      {/* contenuto della sezione */}
      <div className="relative z-0">{children}</div>

      {/* velo bianco SOLO vicino ai bordi per fondere con la sezione successiva/precedente */}
      {/* sotto */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-[5]"
        style={{ height: `${featherPct}%`, background: bottomGrad }}
      />
      {/* sopra */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 right-0 z-[5]"
        style={{ height: `${featherPct}%`, background: topGrad }}
      />
    </section>
  );
}
