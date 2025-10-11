"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: Props) {
  return (
    <section className={`relative w-full overflow-hidden ${className ?? ""}`}>
      {children}

      {/* sfumatura in alto (più morbida) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-white via-white/70 to-transparent" />

      {/* sfumatura in basso (più lunga e omogenea) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-56 bg-gradient-to-b from-transparent via-white/80 to-white" />
    </section>
  );
}
