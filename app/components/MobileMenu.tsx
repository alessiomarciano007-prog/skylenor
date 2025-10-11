"use client";

import Link from "next/link";
import React from "react";

export default function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);

  return (
    <>
      <button
        aria-label="Apri menu"
        onClick={() => setOpen((v) => !v)}
        className="relative w-10 h-10 grid place-items-center"
      >
        <div className="space-y-1.5">
          <span className="block h-0.5 w-6 bg-neutral-900"></span>
          <span className="block h-0.5 w-6 bg-neutral-900"></span>
          <span className="block h-0.5 w-6 bg-neutral-900"></span>
        </div>
      </button>

      {open && (
        <div
          className="absolute left-0 right-0 top-14 bg-white border-b border-neutral-200 shadow-sm"
          onClick={() => setOpen(false)}
        >
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-2 divide-y divide-neutral-200">
            <Link className="block py-3 text-lg" href="/galleria">Galleria progetti</Link>
            <Link className="block py-3 text-lg" href="/flotta">La nostra flotta</Link>
            <Link className="block py-3 text-lg" href="/lavora">Lavora con noi</Link>
          </nav>
        </div>
      )}
    </>
  );
}
