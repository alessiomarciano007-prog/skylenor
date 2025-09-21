export const metadata = { title: "Skylenor", description: "Osserva il mondo dall’alto" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica" }}>
        {children}
      </body>
    </html>
  );
}