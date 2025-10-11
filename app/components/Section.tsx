"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** disattiva la sfumatura in alto */
  disableTopFade?: boolean;
  /** disattiva la sfumatura in basso */
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
      const center = rect.top + rect.height / 2;
      const dist = Math.abs(center - vh / 2);
      const norm = Math.min(1, dist / (vh * 0.6));
      const minOpacity = 0; // aumenta (es. 0.2) se vuoi un effetto meno forte
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
    <section
      ref={ref}
      className={`relative ${className}`}
      style={{ opacity, transition: "opacity 120ms linear", willChange: "opacity" }}
    >
      {!disableTopFade && (
        <div className="pointer-events-none sticky top-0 z-30 h-24 sm:h-28 md:h-32 w-full bg-gradient-to-t from-white to-transparent" />
      )}
      {children}
      {!disableBottomFade && (
        <div className="pointer-events-none sticky bottom-0 z-30 h-24 sm:h-28 md:h-32 w-full bg-gradient-to-b from-transparent to-white" />
      )}
    </section>
  );
}
