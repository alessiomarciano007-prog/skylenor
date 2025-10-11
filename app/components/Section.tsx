"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** per l'hero: niente sfumatura bianca in alto */
  disableTopFade?: boolean;
  /** se mai ti serve: togli la sfumatura bianca in basso */
  disableBottomFade?: boolean;
};

export default function Section({
  children,
  className = "",
  disableTopFade,
  disableBottomFade,
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    let raf = 0;

    const calc = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // distanza del centro della sezione dal centro viewport
      const center = rect.top + rect.height / 2;
      const dist = Math.abs(center - vh / 2);

      // normalizza (0 vicino al centro, 1 ai bordi)
      const norm = Math.min(1, dist / (vh * 0.6));

      // quanto deve “sbiadire” quando esce: 0 = scompare, 0.2 = rimane al 20%
      const minOpacity = 0.15;
      const next = 1 - (1 - minOpacity) * norm;

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
    <section ref={ref} className={`relative ${className}`}>
      {/* fade bianco fisso in alto */}
      {!disableTopFade && (
        <div className="pointer-events-none sticky top-0 z-30 h-24 sm:h-28 md:h-32 w-full bg-gradient-to-t from-white to-transparent" />
      )}

      {/* contenuto che sbiadisce (solo lui) */}
      <div
        className="relative z-20"
        style={{
          opacity,
          transition: "opacity 120ms linear",
          willChange: "opacity",
        }}
      >
        {children}
      </div>

      {/* fade bianco fisso in basso */}
      {!disableBottomFade && (
        <div className="pointer-events-none sticky bottom-0 z-30 h-24 sm:h-28 md:h-32 w-full bg-gradient-to-b from-transparent to-white" />
      )}
    </section>
  );
}
