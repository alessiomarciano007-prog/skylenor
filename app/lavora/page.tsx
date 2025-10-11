// app/lavora/page.tsx
export const metadata = { title: 'Lavora con noi – Skylenor' };

export default function LavoraPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 md:py-20">
      <h1 className="text-4xl font-extrabold text-center">Diventa operatore</h1>
      <p className="text-center mt-3 text-neutral-600">
        Sei un pilota con patentino e assicurazione? Registrati: pensiamo noi a permessi e burocrazia.
      </p>

      <div className="mt-8 rounded-2xl border bg-white shadow-sm p-6 md:p-8 leading-relaxed">
        <ul className="list-disc pl-5 space-y-1">
          <li>Documento di identità</li>
          <li>Patentino (in base alla categoria di drone)</li>
          <li>Assicurazione RC</li>
          <li>Registrazione ENAC/QR o equivalente locale</li>
        </ul>

        <div className="mt-6 text-center">
          <a href="mailto:support@skylenor.com" className="btn-primary inline-block">
            Candidati ora → support@skylenor.com
          </a>
        </div>
      </div>
    </main>
  );
}
