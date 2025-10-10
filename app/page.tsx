"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="mx-auto max-w-none">
      {/* HERO */}
      <SectionImage
        src="/images/hero.jpg"
        alt="Campo visto dall'alto"
        title={<>Marketplace globale per servizi<br />con il drone</>}
        subtitle="Trova piloti certificati, richiedi riprese e rilievi dall’alto."
      />

      {/* CATEGORIE / SLIDE 1 */}
      <SectionImage
        src="/images/immobili.jpg"
        alt="Quartiere residenziale"
        title="Immobili"
        subtitle="Foto/video per case, ville e cantieri"
      />

      {/* CATEGORIE / SLIDE 2 */}
      <SectionImage
        src="/images/terreni.jpg"
        alt="Lotti e terreni"
        title="Terreni"
        subtitle="Confini, lotti non recintati, documentazione"
      />

      {/* CATEGORIE / SLIDE 3 */}
      <SectionImage
        src="/images/infrastrutture.jpg"
        alt="Pannelli solari su tetto"
        title="Infrastrutture"
        subtitle="Tetti, ponti, pannelli solari, antenne"
      />

      {/* CATEGORIE / SLIDE 4 */}
      <SectionImage
        src="/images/eventi.jpg"
        alt="Uscita sposi chiesa"
        title="Eventi & promo"
        subtitle="Eventi privati, sportivi, turismo, brand"
      />

      {/* CONTATTI */}
      <ContactSection />
    </main>
  );
}

/* ---------- Componenti di sezione ---------- */

type SectionImageProps = {
  src: string;
  alt: string;
  title: React.ReactNode;
  subtitle?: string;
};

function SectionImage({ src, alt, title, subtitle }: SectionImageProps) {
  return (
    <section className="relative reveal">
      {/* Immagine full-bleed */}
      <div className="relative h-[80svh] w-full">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient che ammorbidisce TOP e BOTTOM per evitare il “taglio” tra sezioni */}
        <div className="fade-top" />
        <div className="fade-bottom" />
      </div>

      {/* Testi sovrapposti */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="px-6 text-center drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          <h1 className="text-white font-extrabold leading-tight tracking-tight text-3xl sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-white/95 text-base sm:text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contatti" className="reveal">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Fai una richiesta</h2>
        <p className="text-neutral-600 mb-6">
          Compila il form: ti mettiamo in contatto con un operatore vicino alla tua zona.
        </p>

        {/* Form “finto” per ora (puoi cablarlo dopo) */}
        <form className="space-y-3">
          <input className="w-full rounded-lg border px-4 py-3" placeholder="Località (es. Genova)" />
          <select className="w-full rounded-lg border px-4 py-3">
            <option>Seleziona il servizio</option>
            <option>Immobili</option>
            <option>Terreni</option>
            <option>Infrastrutture</option>
            <option>Eventi & promo</option>
          </select>
          <textarea className="w-full rounded-lg border px-4 py-3" rows={5} placeholder="Descrivi il lavoro da svolgere…" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input className="w-full rounded-lg border px-4 py-3" placeholder="Nome/Azienda" />
            <input className="w-full rounded-lg border px-4 py-3" placeholder="Email" type="email" />
          </div>
          <button className="mt-2 inline-flex items-center justify-center rounded-full px-6 py-3 font-medium bg-black text-white hover:opacity-90">
            Invia richiesta
          </button>
        </form>

        {/* Footer mini */}
        <div className="mt-12 text-sm text-neutral-500">
          © {new Date().getFullYear()} Skylenor — Contatto: <a className="underline" href="mailto:support@skylenor.com">support@skylenor.com</a>
        </div>
      </div>
    </section>
  );
}
