export const metadata = {
  title: "Skylenor",
  description: "Marketplace globale per servizi con drone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-white text-neutral-900 antialiased">
        {/* HEADER */}
        <Header />
        {children}
        {/* Script piccolo per gli effetti di reveal on scroll */}
        <RevealScript />
      </body>
    </html>
  );
}

/* ---------- COMPONENTI ---------- */
"use client";
import { useEffect, useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header-blur sticky top-0 z-40 border-b border-black/5">
        <div className="mx-auto max-w-6xl px-4 h-[56px] flex items-center justify-between">
          <a href="/" className="font-semibold text-lg">Skylenor</a>

          {/* Desktop menu */}
          <nav className="hidden md:flex gap-6 text-sm">
            <a href="/galleria" className="hover:opacity-70">Galleria progetti</a>
            <a href="/flotta" className="hover:opacity-70">La nostra flotta</a>
            <a href="#contatti" className="hover:opacity-70">Contatti</a>
          </nav>

          {/* Hamburger */}
          <button
            aria-label="Apri menu"
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-black/5"
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span className="block h-[2px] w-6 bg-black"></span>
              <span className="block h-[2px] w-6 bg-black"></span>
              <span className="block h-[2px] w-6 bg-black"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <nav
          className={`absolute right-0 top-0 h-full w-[78%] max-w-xs bg-white shadow-xl p-6 transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="font-semibold text-lg">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="w-9 h-9 rounded-lg hover:bg-black/5"
              aria-label="Chiudi menu"
            >
              ✕
            </button>
          </div>
          <ul className="space-y-4 text-base">
            <li><a href="/galleria" onClick={() => setOpen(false)}>Galleria progetti</a></li>
            <li><a href="/flotta" onClick={() => setOpen(false)}>La nostra flotta</a></li>
            <li><a href="#contatti" onClick={() => setOpen(false)}>Contatti</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

function RevealScript() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("show");
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return null;
}
