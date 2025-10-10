export default function Home() {
  return (
    <main className="pt-14 leading-none">
      <section className="relative">
        <img
          src="/images/hero.jpg"
          alt="Campo ripreso dall'alto"
          className="w-full h-[75svh] md:h-[85svh] object-cover select-none"
          draggable={false}
        />
        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div className="max-w-3xl">
            <h1 className="text-white drop-shadow-lg font-extrabold text-3xl sm:text-5xl md:text-6xl">
              Marketplace globale per servizi con il drone
            </h1>
            <p className="mt-4 text-white/90 drop-shadow text-base md:text-lg">
              Trova piloti certificati, richiedi riprese e rilievi dall’alto.
            </p>
          </div>
        </div>
        <div className="section-fade" />
      </section>

      {[
        { src: "/images/immobili.jpg", alt: "Tetti e immobili" },
        { src: "/images/terreni.jpg", alt: "Terreni" },
        { src: "/images/infrastrutture.jpg", alt: "Infrastrutture" },
        { src: "/images/eventi.jpg", alt: "Eventi" },
      ].map((img) => (
        <section key={img.src} className="-mt-px relative">
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-[70svh] md:h-[80svh] object-cover select-none"
            draggable={false}
          />
          <div className="section-fade" />
        </section>
      ))}

      <section id="contatti" className="-mt-px px-6 py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold">Contatti</h2>
          <p className="mt-3 text-neutral-600">
            Scrivici per preventivi, partnership o informazioni.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <a href="mailto:hello@skylenor.com" className="block p-5 rounded-xl border hover:bg-neutral-50">
              <div className="font-medium">Email</div>
              <div className="text-neutral-600">hello@skylenor.com</div>
            </a>
            <a href="tel:+39000000000" className="block p-5 rounded-xl border hover:bg-neutral-50">
              <div className="font-medium">Telefono</div>
              <div className="text-neutral-600">+39 000 000 000</div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
