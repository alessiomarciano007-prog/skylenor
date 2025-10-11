// app/lavora/page.jsx
import * as React from "react"; // forza il file ad essere modulo

export const metadata = {
  title: "Lavora con noi — Skylenor",
  description: "Diventa operatore certificato Skylenor.",
};

export default function LavoraPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-12">
      <div className="max-w-2xl rounded-2xl border border-neutral-200 p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-4">Lavora con noi</h1>
        <p>Pagina di test: se la vedi, la route /lavora funziona.</p>
      </div>
    </main>
  );
}
