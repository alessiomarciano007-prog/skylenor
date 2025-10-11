"use client";

import React from "react";
import ContactForm from "./components/ContactForm"; // Assicurati che esista ./app/components/ContactForm.tsx

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
  return (
    <main>
      {/* Sezioni con sfumatura fissa tra una e l'altra */}
      {sections.map((s, idx) => (
        <React.Fragment key={s.id}>
          <section
            id={s.id}
            className="relative h-screen flex flex-col items-center justify-center text-white"
            style={{
              backgroundImage: `url(${s.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* leggera sfumatura interna per rendere più leggibile il testo */}
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 text-center px-4">
              {idx === 0 ? (
                <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
                  {s.title}
                </h1>
              ) : (
                <h2 className="text-4xl sm:text-5xl font-extrabold">
                  {s.title}
                </h2>
              )}
              {s.subtitle && (
                <p className="mt-4 text-lg sm:text-xl opacity-95">{s.subtitle}</p>
              )}
            </div>
          </section>

          {/* Divisore sfumato che collega visivamente le due sezioni */}
{idx < sections.length - 1 && (
  <div className="h-24 sm:h-32 w-full bg-gradient-to-b from-transparent via-white/80 to-white" />
)}
        </React.Fragment>
      ))}

      {/* FORM contatti in fondo */}
      <ContactForm />
    </main>
  );
}
