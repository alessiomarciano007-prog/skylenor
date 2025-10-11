// app/components/Section.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

/**
 * La sezione sfuma (opacity) in base alla distanza dal centro viewport.
 * Tiene anche le sfumature bianche top/bottom per eliminare la “riga” netta.
 */
export default function Section({ children, className = "" }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let raf = 0;

    const calc = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // distanza del centro della sezione dal centro dello schermo
      const center = rect.top + rect.height / 2;
      const dist = Math.abs(center - vh / 2);

      // normalizza (0 al centro, ~1 ai bordi) e mappa a opacità
      const norm = Math.min(1, dist / (vh * 0.6));
      const minOpacity = 0;      // 0 = “bianco” quando è lontana dal centro
      const maxOpacity = 1;
      const next = maxOpacity - (maxOpacity - minOpacity) * norm;

      setOpacity(next);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(calc);
    };

    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`relative ${className}`}
      style={{
        opacity,
        transition: "opacity 120ms linear",
        willChange: "opacity",
      }}
    >
      {/* sfumatura BIANCA in ALTO (copre la riga della sezione precedente) */}
      <div className="pointer-events-none sticky top-0 z-30 h-24 sm:h-28 md:h-32 w-full bg-gradient-to-t from-white to-transparent" />
      {children}
      {/* sfumatura BIANCA in BASSO (accompagna l’uscita) */}
      <div className="pointer-events-none sticky bottom-0 z-30 h-24 sm:h-28 md:h-32 w-full bg-gradient-to-b from-transparent to-white" />
    </section>
  );
}
