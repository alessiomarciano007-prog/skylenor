"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  // Sfumatura ai bordi + zona centrale visibile
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
      {/* contenuto della sezione (immagine + testo) */}
      <div className="relative z-0">{children}</div>

      {/* overlay bianco mascherato: bianco solo ai bordi, trasparente al centro */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: "#ffffff",
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
