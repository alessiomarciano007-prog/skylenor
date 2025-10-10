// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";

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
      </body>
    </html>
  );
}
