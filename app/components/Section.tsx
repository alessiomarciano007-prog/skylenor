"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  const topGradient = {
    background:
      "linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.92) 22%, rgba(255,255,255,0.65) 55%, rgba(255,255,255,0.25) 82%, rgba(255,255,255,0) 100%)",
  } as React.CSSProperties;

  const bottomGradient = {
    background:
      "linear-gradient(to top, rgba(255,255,255,1) 0%, rgba(255,255,255,0.92) 22%, rgba(255,255,255,0.65) 55%, rgba(255,255,255,0.25) 82%, rgba(255,255,255,0) 100%)",
  } as React.CSSProperties;

  return (
    <section className={`relative w-full overflow-hidden ${className ?? ""}`}>
      {/* Contenuto */}
      <div className="relative z-0">{children}</div>

      {/* Sfumatura in alto */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-[60px] sm:h-[190px]"
        style={topGradient}
      />

      {/* Sfumatura in basso */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-50 h-[170px] sm:h-[190px]"
        style={bottomGradient}
      />
    </section>
  );
}
