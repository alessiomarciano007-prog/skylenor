// app/components/Section.tsx
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Avvolgi OGNI sezione (tranne la hero iniziale) con <Section>.
 * Il blocco sticky in cima crea un gradiente bianco → trasparente
 * che copre dolcemente la sezione precedente mentre si scrolla.
 */
export default function Section({ children, className = "" }: Props) {
  return (
    <section className={`relative ${className}`}>
      {/* Overlay che sfuma a bianco la sezione precedente */}
      <div className="pointer-events-none sticky top-0 z-30 h-24 sm:h-28 md:h-32 w-full bg-gradient-to-t from-white to-transparent" />
      {children}
    </section>
  );
}
