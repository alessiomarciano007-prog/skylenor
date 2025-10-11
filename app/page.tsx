"use client";

import Section from "./components/Section";
import ContactForm from "./components/ContactForm"; // correggi il path se diverso

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
    subtitle: "Tetti, aponTi, pannelli solari, antenne",
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
      {/* HERO: contenuto che si sfuma, NO sfumatura bianca in alto */}
      <Section disableTopFade>
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
      </Section>

      {/* SEZIONI successive: fade bianchi fissi + sbiadimento dinamico del contenuto */}
      {rest.map((s) => (
        <Section key={s.id}>
          <div
            id={s.id}
            className="relative h-screen flex flex-col items-center justify-center text-white"
            style={{
              backgroundImage: `url(${s.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* leggera sfumatura sopra l'immagine per il testo */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white" />
            <div className="relative z-10 text-center px-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold">{s.title}</h2>
              {s.subtitle && (
                <p className="mt-4 text-lg sm:text-xl opacity-95">{s.subtitle}</p>
              )}
            </div>
          </div>
        </Section>
      ))}

      {/* FORM contatti */}
      <ContactForm />
    </main>
  );
}
