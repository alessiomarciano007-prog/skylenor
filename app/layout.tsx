// app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = {
  title: "Skylenor",
  description: "Marketplace globale per servizi con drone",
};

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <a href="/" className="font-semibold tracking-tight">Skylenor</a>

        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="/galleria" className="hover:opacity-70">Galleria progetti</a>
          <a href="/flotta" className="hover:opacity-70">La nostra flotta</a>
          <a href="#contatti" className="hover:opacity-70">Contatti</a>
        </nav>

        {/* Hamburger */}
        <button
          aria-label="Apri menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(v => !v)}
        >
          <span className="block w-6 h-[2px] bg-black mb-[5px]" />
          <span className="block w-6 h-[2px] bg-black mb-[5px]" />
          <span className="block w-6 h-[2px] bg-black" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-3 text-base">
            <a href="/galleria" className="py-1" onClick={() => setOpen(false)}>Galleria progetti</a>
            <a href="/flotta" className="py-1" onClick={() => setOpen(false)}>La nostra flotta</a>
            <a href="#contatti" className="py-1" onClick={() => setOpen(false)}>Contatti</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-white text-neutral-900 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
