// app/layout.tsx
import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skylenor",
  description: "Marketplace globale per servizi con drone",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
