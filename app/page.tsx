"use client";

import Section from "./components/Section";
import React from "react";

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

function SectionBlock({ s }: { s: SectionItem }) {
  return (
    <Section>
      <div
        id={s.id}
        className="relative h-[100svh] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${s.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* niente overlay bianco qui, ci pensa <Section> ai fade */}
        <div className="relative z-10 text-center px-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold drop-shadow">
            {s.title}
          </h2>
          {s.subtitle && (
            <p className="mt-4 text-lg sm:text-xl drop-shadow">{s.subtitle}</p>
          )}
        </div>
      </div>
    </Section>
  );
}

export default function HomePage() {
  const hero = sections[0];
  const rest = sections.slice(1);

  return (
    <main>
      {/* HERO (senza fade sopra) */}
      <div
        id={hero.id}
        className="relative h-[100svh] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: `url(${hero.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* puoi tenere un leggero darken solo per leggibilità del testo */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            {hero.title}
          </h1>
          {hero.subtitle && (
            <p className="mt-4 text-lg sm:text-xl opacity-95">{hero.subtitle}</p>
          )}
        </div>
      </div>

      {/* SEZIONI SUCCESSIVE con fade morbido tra una e l'altra */}
      {rest.map((s) => (
        <SectionBlock key={s.id} s={s} />
      ))}

      {/* Se hai un form di contatto in fondo, rimettilo qui */}
      {/* <ContactForm /> */}
    </main>
  );
}
