"use client";

import React from "react";
import Section from "./components/Section";
import ContactForm from "./components/ContactForm";

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
  return (
    <main className="bg-white">
      {sections.map((s) => (
        <Section key={s.id}>
          <div
            id={s.id}
            className="relative min-h-screen flex flex-col items-center justify-center text-white"
            style={{
              backgroundImage: `url(${s.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* velatura leggera per testo leggibile */}
            <div className="absolute inset-0 bg-black/25" />

            {/* testo */}
            <div className="relative z-10 text-center px-4">
              {s.id === "hero" ? (
                <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
                  {s.title}
                </h1>
              ) : (
                <h2 className="text-4xl sm:text-5xl font-extrabold">{s.title}</h2>
              )}
              {s.subtitle && (
                <p className="mt-4 text-lg sm:text-xl opacity-95">{s.subtitle}</p>
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
