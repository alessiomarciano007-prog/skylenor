// app/page.tsx
'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

type Section = {
  id: string;
  title: string;
  subtitle: string;
  img: string;
};

const sections: Section[] = [
  {
    id: 'immobili',
    title: 'Immobili',
    subtitle: 'Foto/video per case, ville e cantieri',
    img: '/images/immobili.jpg',
  },
  {
    id: 'terreni',
    title: 'Terreni',
    subtitle: 'Confini, lotti non recintati, documentazione',
    img: '/images/terreni.jpg',
  },
  {
    id: 'infrastrutture',
    title: 'Infrastrutture',
    subtitle: 'Tetti, ponti, pannelli solari, antenne',
    img: '/images/infrastrutture.jpg',
  },
  {
    id: 'eventi',
    title: 'Eventi & promo',
    subtitle: 'Eventi privati, sportivi, turismo, brand',
    img: '/images/eventi.jpg',
  },
];

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver: la sezione in viewport riceve [data-active="true"]
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const items = Array.from(root.querySelectorAll<HTMLElement>('[data-watch]'));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.target.setAttribute('data-active', String(e.isIntersecting));
        });
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: 0.2 }
    );

    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main ref={rootRef}>
      {/* HERO */}
      <section className="relative aspect-[16/10] md:aspect-[16/7] overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Campo ripreso dall'alto"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/20" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="text-white drop-shadow-xl">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Marketplace globale per servizi<br />con il drone
            </h1>
            <p className="mt-4 text-base md:text-lg font-medium opacity-95">
              Trova piloti certificati, richiedi riprese e rilievi dall’alto.
            </p>
          </div>
        </div>
      </section>

      {/* LABEL CATEGORIE */}
      <div className="mx-auto max-w-6xl px-4 py-6 md:py-8">
        <h2 className="text-center text-lg md:text-xl font-semibold">Categorie principali</h2>
      </div>

      {/* SEZIONI CON TITOLO SOPRA L’IMMAGINE */}
      <div className="space-y-6 md:space-y-10">
        {sections.map((s) => (
          <section
            key={s.id}
            id={s.id}
            data-watch
            data-active="false"
            className="fade-section relative aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-none md:rounded-2xl"
          >
            <Image src={s.img} alt={s.title} fill className="object-cover transition-[filter] duration-500" />
            {/* overlay testo */}
            <div className="absolute inset-0 flex items-center justify-center text-center px-4">
              <div className="text-white drop-shadow-xl">
                <h3 className="text-3xl md:text-5xl font-extrabold">{s.title}</h3>
                <p className="mt-3 text-lg md:text-2xl font-semibold opacity-95">{s.subtitle}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* FORM CONTATTI (rimane in fondo) */}
      <section id="contatti" className="mx-auto max-w-3xl px-4 py-14 md:py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">Fai una richiesta</h2>
        <p className="text-center mt-3 text-neutral-600">
          Compila il form: ti mettiamo in contatto con un operatore vicino alla tua zona
        </p>

        <form className="mt-8 space-y-4">
          <input className="input" placeholder="Località (es. Genova)" />
          <select className="input">
            <option value="">Seleziona il servizio</option>
            <option>Immobili</option>
            <option>Terreni</option>
            <option>Infrastrutture</option>
            <option>Eventi & promo</option>
          </select>
          <textarea className="input h-40" placeholder="Descrivi il lavoro da svolgere…" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="input" placeholder="Nome/Azienda" />
            <input className="input" placeholder="Email" type="email" />
          </div>
          <button className="btn-primary w-full">Invia richiesta</button>
        </form>
      </section>
    </main>
  );
}
