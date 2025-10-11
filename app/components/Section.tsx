// app/components/Section.tsx
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className = "" }: Props) {
  return (
    <section className={`relative ${className}`}>
      {/* Fade IN ALTO: bianco -> trasparente (copre la sezione precedente) */}
      <div className="pointer-events-none sticky top-0 z-30 h-24 sm:h-28 md:h-32 w-full bg-gradient-to-t from-white to-transparent" />
      {children}
      {/* Fade IN BASSO: trasparente -> bianco (accompagna l’uscita) */}
      <div className="pointer-events-none sticky bottom-0 z-30 h-24 sm:h-28 md:h-32 w-full bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
