import "./globals.css";
import Link from "next/link";
import React from "react";
import MobileMenu from "./components/MobileMenu"; // <— nuovo import

export const metadata = {
  title: "Skylenor",
  description: "Marketplace globale per servizi con drone",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-white text-neutral-900 antialiased">
        <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-neutral-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 h-14 flex items-center justify-between">
            <Link href="/" className="font-black text-2xl tracking-tight">Skylenor</Link>
            <MobileMenu />  {/* usa il client component */}
          </div>
        </header>

        {children}

        <footer className="border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 text-center text-sm text-neutral-500">
            © 2025 Skylenor — “Osserva il mondo dall’alto” • Contatto:{" "}
            <a className="underline" href="mailto:support@skylenor.com">support@skylenor.com</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
