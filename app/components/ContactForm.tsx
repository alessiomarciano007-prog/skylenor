// app/components/ContactForm.tsx
export default function ContactForm() {
  return (
    <section id="contatti" className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">
          Fai una richiesta
        </h2>
        <p className="mt-3 text-center text-lg">
          Compila il form: ti mettiamo in contatto con un operatore vicino alla tua zona
        </p>

        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Località (es. Genova)"
            className="w-full rounded-lg border px-4 py-3"
          />
          <select className="w-full rounded-lg border px-4 py-3">
            <option value="">Seleziona il servizio</option>
            <option value="immobili">Immobili</option>
            <option value="terreni">Terreni</option>
            <option value="infrastrutture">Infrastrutture</option>
            <option value="eventi">Eventi & promo</option>
          </select>
          <textarea
            rows={5}
            placeholder="Descrivi il lavoro da svolgere …"
            className="w-full rounded-lg border px-4 py-3"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nome/Azienda"
              className="w-full rounded-lg border px-4 py-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border px-4 py-3"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-black text-white py-3 font-semibold"
          >
            Invia richiesta
          </button>
        </form>
      </div>
    </section>
  );
}
