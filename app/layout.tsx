// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: 'Skylenor',
  description: 'Marketplace globale per servizi con drone',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-white text-neutral-900 antialiased">
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-neutral-100">
          <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
            <Link href="/" className="font-semibold text-xl">Skylenor</Link>

            {/* hamburger */}
            <details className="relative">
              <summary className="list-none cursor-pointer p-2 -mr-2" aria-label="Apri menu">
                <div className="w-6 h-[2px] bg-neutral-900 mb-[6px]" />
                <div className="w-6 h-[2px] bg-neutral-900 mb-[6px]" />
                <div className="w-6 h-[2px] bg-neutral-900" />
              </summary>
              <nav className="absolute right-0 mt-3 w-56 rounded-xl border bg-white shadow-lg p-2 space-y-1">
                <Link href="/galleria" className="menu-item">Galleria progetti</Link>
                <Link href="/flotta" className="menu-item">La nostra flotta</Link>
                <Link href="/lavora" className="menu-item">Lavora con noi</Link>
                <a href="#contatti" className="menu-item">Contatti (in fondo)</a>
              </nav>
            </details>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}
