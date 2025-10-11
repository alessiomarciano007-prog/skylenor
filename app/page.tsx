import Section from "./components/Section";
// ...tuo array sections[...]

export default function HomePage() {
  const hero = sections[0];
  const rest = sections.slice(1);

  return (
    <main>
      {/* HERO: niente fade in alto, il contenuto sbiadisce quando esce */}
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

      {/* Sezioni successive: fade bianchi fissi + sbiadimento dinamico del contenuto */}
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

      {/* form contatti */}
      <ContactForm />
    </main>
  );
}
