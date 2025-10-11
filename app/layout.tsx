import "./globals.css";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Skylenor",
  description: "Marketplace globale per servizi con drone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-white text-neutral-900 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

/** HEADER con menu a tendina mobile */
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-black text-2xl tracking-tight">Skylenor</Link>
        <MobileMenu />
      </div>
    </header>
  );
}

/** Menu a tendina */
function MobileMenu() {
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
        onClick={() => setOpen(!open)}
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

function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-center text-sm text-neutral-500">
        © 2025 Skylenor — “Osserva il mondo dall’alto” • Contatto:{" "}
        <a className="underline" href="mailto:support@skylenor.com">support@skylenor.com</a>
      </div>
    </footer>
  );
}
