// app/lavora/page.tsx

export const metadata = {
  title: "Lavora con noi — Skylenor",
  description:
    "Diventa operatore certificato Skylenor: requisiti, documenti e come candidarti.",
};

export default function LavoraPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 text-center">
          Diventa operatore
        </h1>

        <p className="mt-6 text-lg text-neutral-700 text-center">
          Sei un pilota con patentino e assicurazione? Registrati e indica la tua area di
          disponibilità: pensiamo noi ai permessi di volo e alla burocrazia.
        </p>

        <div className="mt-10 rounded-2xl border border-neutral-200 bg-white/70 backdrop-blur p-6 sm:p-8 shadow-sm">
          <ul className="list-disc pl-5 space-y-2 text-neutral-800">
            <li>Documento di identità</li>
            <li>Patentino (in base alla categoria di drone)</li>
            <li>Assicurazione RC</li>
            <li>Registrazione ENAC/QR o equivalente locale</li>
          </ul>

          <div className="mt-8 text-center">
            <a
              href="mailto:support@skylenor.com?subject=Candidatura%20operatore"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold border border-neutral-300 hover:border-neutral-400 transition"
            >
              Candididati ora → support@skylenor.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
