"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

/** 🔧 Config sezioni (titoli + immagini). 
 *  NOTA: "infrastrutture .PNG" ha uno spazio nel nome, quindi usiamo %20.
 *  Quando lo rinomini in "infrastrutture.PNG", aggiorna la stringa sotto.
 */
const SECTIONS = [
  {
    key: "hero",
    title: "Marketplace globale per servizi con il drone",
    subtitle: "Trova piloti certificati, richiedi riprese e rilievi dall’alto.",
    image: "/images/hero.PNG",
  },
  {
    key: "immobili",
    title: "Immobili",
    subtitle: "Foto/video per case, ville e cantieri",
    image: "/images/immobili.JPG",
  },
  {
    key: "terreni",
    title: "Terreni",
    subtitle: "Confini, lotti non recintati, documentazione",
    image: "/images/terreni.JPG",
  },
  {
    key: "infrastrutture",
    title: "Infrastrutture",
    subtitle: "Tetti, ponti, pannelli solari, antenne",
    // TODO: dopo il rename del file rimuovi %20
    image: "/images/infrastrutture%20.PNG",
  },
  {
    key: "eventi",
    title: "Eventi & promo",
    subtitle: "Eventi privati, sportivi, turismo, brand",
    image: "/images/eventi.PNG",
  },
];

export default function Home() {
  const year = new Date().getFullYear();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useMemo(
    () => SECTIONS.map(() => React.createRef<HTMLDivElement>()),
    []
  );
  const [active, setActive] = useState(0);

  // Rileva la sezione più vicina al centro viewport
  useEffect(() => {
    function onScroll() {
      const mids: number[] = [];
      sectionRefs.forEach((r) => {
        const el = r.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const mid = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
        mids.push(mid);
      });
      if (mids.length) {
        let idx = 0;
        let min = mids[0];
        for (let i = 1; i < mids.length; i++) {
          if (mids[i] < min) {
            min = mids[i];
            idx = i;
          }
        }
        setActive(idx);
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sectionRefs]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert(
      "Richiesta inviata (demo). Nella prossima versione invieremo una mail di conferma al cliente e a support@skylenor.com."
    );
  }

  return (
    <>
      {/* Stili base della pagina */}
      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI,
            Roboto, Helvetica, Arial, Apple Color Emoji, Segoe UI Emoji;
          color: #0f172a;
          background: #ffffff;
        }
        a {
          color: inherit;
        }
        .snap-wrap {
          scroll-snap-type: y mandatory;
        }
        .snap {
          scroll-snap-align: start;
        }
        .section {
          height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }
        .bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          transform: scale(1.02);
        }
        .overlay {
          position: absolute;
          inset: 0;
          transition: opacity 400ms ease;
          background: rgba(0, 0, 0, 0.6);
          pointer-events: none;
        }
        .content {
          position: relative;
          z-index: 2;
          color: #fff;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
          padding: 0 16px;
          max-width: 900px;
        }
        .title {
          font-weight: 800;
          font-size: clamp(28px, 5.6vw, 54px);
          line-height: 1.1;
          margin: 0 0 8px;
        }
        .subtitle {
          font-size: clamp(14px, 2.4vw, 22px);
          opacity: 0.95;
          margin: 0;
        }
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 56px;
          background: rgba(255, 255, 255, 0.72);
          -webkit-backdrop-filter: saturate(180%) blur(10px);
          backdrop-filter: saturate(180%) blur(10px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          z-index: 20;
          border-bottom: 1px solid rgba(15, 23, 42, 0.06);
        }
        .brand {
          font-weight: 800;
          font-size: 18px;
          letter-spacing: 0.2px;
        }
        .menu {
          font-size: 22px;
          line-height: 1;
        }
        .dots {
          position: absolute;
          bottom: 20px;
          left: 0;
          right: 0;
          display: flex;
          gap: 8px;
          justify-content: center;
          z-index: 3;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.6);
          transition: transform 200ms ease, background 200ms ease;
        }
        .dot.active {
          transform: scale(1.35);
          background: #ffffff;
        }
        /* Form */
        .form-wrap {
          max-width: 820px;
          margin: 56px auto 80px;
          padding: 0 16px;
        }
        .form-title {
          text-align: center;
          font-size: clamp(22px, 4.2vw, 36px);
          font-weight: 800;
          margin: 18px 0 6px;
        }
        .form-sub {
          text-align: center;
          color: #475569;
          margin: 0 0 16px;
        }
        .box {
          border: 1px solid #e6e7eb;
          border-radius: 12px;
          padding: 16px;
        }
        .grid2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 640px) {
          .grid2 {
            grid-template-columns: 1fr 1fr;
          }
        }
        .input,
        .select,
        .textarea,
        .button {
          width: 100%;
          border-radius: 10px;
          border: 1px solid #cfd3d9;
          padding: 12px 12px;
          font-size: 16px;
          outline: none;
        }
        .textarea {
          min-height: 120px;
          resize: vertical;
        }
        .button {
          background: #0b0b0b;
          color: #fff;
          border: 0;
          font-weight: 700;
          cursor: pointer;
        }
        .footer {
          color: #64748b;
          font-size: 14px;
          border-top: 1px solid #e6e7eb;
          padding: 20px 16px 40px;
          text-align: center;
        }
      `}</style>

      {/* Header */}
      <header className="header">
        <div className="brand">Skylenor</div>
        <div className="menu">☰</div>
      </header>

      {/* Sezioni full-screen con scroll-snap */}
      <div ref={containerRef} className="snap-wrap" style={{ marginTop: 56 }}>
        {SECTIONS.map((s, i) => (
          <section
            key={s.key}
            ref={sectionRefs[i]}
            className="section snap"
            aria-label={s.title}
          >
            <div
              className="bg"
              style={{
                backgroundImage: `url(${s.image})`,
              }}
            />
            {/* overlay: opaco per le sezioni già scorse */}
            <div
              className="overlay"
              style={{ opacity: i < active ? 0.6 : 0.0 }}
            />
            <div className="content">
              <h1 className="title">{s.title}</h1>
              <p className="subtitle">{s.subtitle}</p>
            </div>

            {/* dots */}
            <div className="dots">
              {SECTIONS.map((_, j) => (
                <div key={j} className={`dot ${j === i ? "active" : ""}`} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Form richiesta */}
      <div className="form-wrap" id="richiesta">
        <h2 className="form-title">Fai una richiesta</h2>
        <p className="form-sub">
          Compila il form: ti mettiamo in contatto con un operatore vicino alla
          tua zona.
        </p>

        <form onSubmit={handleSubmit} className="box" style={{ display: "grid", gap: 12 }}>
          <input className="input" placeholder="Località (es. Genova)" required />
          <select defaultValue="" required className="select">
            <option value="" disabled>
              Seleziona il servizio
            </option>
            <option>Riprese foto/video</option>
            <option>Ispezione tetto/antenne</option>
            <option>Rilievo confini/terreni</option>
            <option>Evento/Promo</option>
          </select>
          <textarea className="textarea" placeholder="Descrivi il lavoro che ti serve…" />

          <div className="grid2">
            <input className="input" type="text" placeholder="Nome/Azienda" required />
            <input className="input" type="email" placeholder="Email" required />
          </div>

          <button className="button" type="submit">Invia richiesta</button>
          <small style={{ color: "#64748b" }}>
            * Demo: il form mostra un alert. Nella prossima versione invieremo
            la richiesta via email con conferma al cliente.
          </small>
        </form>
      </div>

      {/* Diventa operatore + Footer */}
      <div className="form-wrap">
        <h2 className="form-title">Diventa operatore</h2>
        <div className="box" style={{ lineHeight: 1.6 }}>
          Sei un pilota con patentino e assicurazione? Registrati e indica la tua area di
          disponibilità. Pensiamo noi ai permessi di volo e alla burocrazia.
          <ul>
            <li>Documento d’identità</li>
            <li>Patentino (in base alla categoria di drone)</li>
            <li>Assicurazione RC</li>
            <li>Registrazione ENAC/QR o equivalente locale</li>
          </ul>
          <b>Candidati:</b> <a href="mailto:support@skylenor.com">support@skylenor.com</a>
        </div>
      </div>

      <footer className="footer">
        © {year} Skylenor — “Osserva il mondo dall’alto” · Contatto:{" "}
        <a href="mailto:support@skylenor.com">support@skylenor.com</a>
      </footer>
    </>
  );
}
