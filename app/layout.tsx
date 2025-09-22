export const metadata = {
  title: "Skylenor — Marketplace globale per servizi con drone",
  description:
    "Trova piloti certificati per riprese aeree, ispezioni e rilievi dall’alto. Dalla richiesta al file consegnato.",
  openGraph: {
    title: "Skylenor",
    description:
      "Marketplace globale per servizi con drone: immobili, terreni, infrastrutture, eventi.",
    url: "https://skylenor.com",
    siteName: "Skylenor",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica" }}>
        {children}
      </body>
    </html>
  );
}
