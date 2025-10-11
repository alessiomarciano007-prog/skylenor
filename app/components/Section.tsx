"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  return (
    <section className={`relative w-full overflow-hidden ${className ?? ""}`}>
      {/* contenuto della sezione */}
      {children}

      {/* sfumatura in alto (bianco -> trasparente) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-10 sm:h-14 bg-gradient-to-b from-white to-transparent" />

      {/* sfumatura in basso (trasparente -> bianco) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
