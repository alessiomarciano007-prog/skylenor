export default function LavoraPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-5xl font-black text-center">Diventa operatore</h1>

      <div className="max-w-3xl mx-auto mt-10 rounded-2xl border border-neutral-300 p-6 sm:p-8 bg-white shadow-sm">
        <p className="text-center text-lg">
          sei un pilota con patentino e assicurazione? Registrati e indica la tua area di disponibilità
          pensiamo noi ai permessi di volo e alla burocrazia.
        </p>

        <ul className="mt-6 list-disc pl-6 space-y-2 text-lg">
          <li>Documento di identità</li>
          <li>Patentino (in base alla categoria di drone)</li>
          <li>Assicurazione RC</li>
          <li>Registrazione ENAC/QR o equivalente locale</li>
        </ul>

        <p className="mt-6 text-center text-lg font-semibold">
          <a className="text-blue-600 hover:underline" href="mailto:support@skylenor.com">
            candididati ora → support@skylenor.com
          </a>
        </p>
      </div>
    </main>
  );
}
