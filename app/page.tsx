// app/page.tsx
import Section from "./components/Section";

type SectionItem = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
};

const sections: SectionItem[] = [
  {
    id: "hero",
    title: "Marketplace globale per servizi con il drone",
    subtitle: "Trova piloti certificati, richiedi riprese e rilievi dall’alto.",
    image: "/images/hero.jpg",
  },
  {
    id: "immobili",
    title: "Immobili",
    subtitle: "Foto/video per case, ville e cantieri",
    image: "/images/immobili.jpg",
  },
  {
    id: "terreni",
    title: "Terreni",
    subtitle: "Confini, lotti non recintati, documentazione",
    image: "/images/terreni.jpg",
  },
  {
    id: "infrastrutture",
    title: "Infrastrutture",
    subtitle: "Tetti, ponti, pannelli solari, antenne",
    image: "/images/infrastrutture.jpg",
  },
  {
    id: "eventi",
    title: "Eventi & promo",
    subtitle: "Eventi privati, sportivi, turismo, brand",
    image: "/images/eventi.jpg",
  },
];

export default function HomePage() {
  const hero = sections[0];
  const rest = sections.slice(1);

  return (
    <main>
      {/* HERO (non avvolgiamo in <Section> per non mettere fade in alto) */}
      <div
        id={hero.id}
        className="relative h-screen flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${hero.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            {hero.title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl opacity-95">{hero.subtitle}</p>
        </div>
      </div>

      {/* SEZIONI successive con fade bianco tra una e l’altra */}
      {rest.map((section) => (
        <Section key={section.id}>
          <div
            id={section.id}
            className="relative h-screen flex flex-col items-center justify-center text-white"
            style={{
              backgroundImage: `url(${section.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* leggera sfumatura che aiuta la lettura del testo */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
            <div className="relative z-10 text-center px-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold">{section.title}</h2>
              {section.subtitle && (
                <p className="mt-4 text-lg sm:text-xl opacity-95">{section.subtitle}</p>
              )}
            </div>
          </div>
        </Section>
      ))}

      {/* FORM contatti in fondo */}
      <ContactForm />
    </main>
  );
}

/* --- Form semplice (puoi sostituirlo con quello “vero” quando attiviamo Resend) --- */
function ContactForm() {
  return (
    <section id="contatti" className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h3 className="text-4xl font-black text-center">Fai una richiesta</h3>
      <p className="text-center mt-3 text-neutral-600">
        Compila il form: ti mettiamo in contatto con un operatore vicino alla tua zona.
      </p>
      <form
        action="mailto:support@skylenor.com"
        method="post"
        encType="text/plain"
        className="mt-8 space-y-4"
      >
        <input className="input" placeholder="Località (es. Genova)" name="localita" />
        <select className="input" name="servizio" defaultValue="">
          <option value="" disabled>Seleziona il servizio</option>
          <option>Immobili</option>
          <option>Terreni</option>
          <option>Infrastrutture</option>
          <option>Eventi & promo</option>
        </select>
        <textarea className="input min-h-40" placeholder="Descrivi il lavoro da svolgere…" name="descrizione" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="input" placeholder="Nome/Azienda" name="nome" />
          <input className="input" placeholder="Email" name="email" type="email" />
        </div>
        <button className="btn-primary w-full">Invia richiesta</button>
      </form>
    </section>
  );
}
