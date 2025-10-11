"use client";
import Section from "./components/Section";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

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
  const [active, setActive] = useState<string>("hero");
  const refs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        // scegli la sezione più visibile
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -20% 0px", threshold: [0.25, 0.5, 0.75, 1] }
    );

    Object.values(refs.current).forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      {/* HERO + CATEGORIE */}
      <div className="sr-only">Categorie principali</div>

      {sections.map((section, index) => (
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
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl font-bold mb-4">{section.title}</h2>
        <p className="text-lg">{section.subtitle}</p>
      </div>
    </div>
  </Section>
))}

      {/* FORM contatti in fondo */}
      <ContactForm />
    </main>
  );
}

function Section({
  data,
  active,
  refCb,
  isFirst,
  isLast,
}: {
  data: SectionItem;
  active: boolean;
  refCb: (el: HTMLElement | null) => void;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  return (
    <section
      id={data.id}
      ref={refCb}
      className={`relative overflow-hidden`}
    >
      {/* immagine full-bleed con maschera morbida top/bottom */}
      <div
        className={`section-image ${active ? "is-active" : ""} ${
          isFirst ? "rounded-none" : ""
        }`}
      >
        <Image
          src={data.image}
          alt={data.title}
          width={1920}
          height={1080}
          className="w-full h-[88vh] object-cover"
          priority={data.id === "hero"}
        />
        {/* overlay che si OSCURA se la sezione NON è attiva */}
        <div className="section-dim pointer-events-none"></div>
        {/* gradienti MORBIDI top/bottom per togliere la “riga” */}
        <div className="fade-top pointer-events-none" />
        <div className="fade-bottom pointer-events-none" />
      </div>

      {/* testo sopra l'immagine */}
      <div className="absolute inset-0 grid place-items-center px-6">
        <div className="text-white text-center drop-shadow-lg [text-wrap:balance]">
          <h2 className={`font-black leading-tight ${isFirst ? "text-4xl sm:text-6xl" : "text-4xl sm:text-5xl"}`}>
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="mt-4 text-lg sm:text-xl font-semibold opacity-95">
              {data.subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

/** FORM in fondo alla pagina (semplice mailto per ora) */
function ContactForm() {
  return (
    <section id="contatti" className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h3 className="text-4xl font-black text-center">Fai una richiesta</h3>
      <p className="text-center mt-3 text-neutral-600">
        Compila il form: ti mettiamo in contatto con un operatore vicino alla tua zona
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
        <textarea className="input min-h-40" placeholder="Descrivi il lavoro da svolgere …" name="descrizione" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input className="input" placeholder="Nome/Azienda" name="nome" />
          <input className="input" placeholder="Email" name="email" type="email" />
        </div>
        <button className="btn-primary w-full">Invia richiesta</button>
      </form>
    </section>
  );
}
