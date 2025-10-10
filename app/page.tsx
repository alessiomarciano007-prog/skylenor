"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

const SECTIONS = [
  {
    key: "hero",
    title: "Marketplace globale per servizi con il drone",
    subtitle: "Trova piloti certificati, richiedi riprese e rilievi dall’alto.",
    image: "/images/hero.jpg",
  },
  {
    key: "immobili",
    title: "Immobili",
    subtitle: "Foto/video per case, ville e cantieri",
    image: "/images/immobili.jpg",
  },
  {
    key: "terreni",
    title: "Terreni",
    subtitle: "Confini, lotti non recintati, documentazione",
    image: "/images/terreni.jpg",
  },
  {
    key: "infrastrutture",
    title: "Infrastrutture",
    subtitle: "Tetti, ponti, pannelli solari, antenne",
    image: "/images/infrastrutture.jpg",
  },
  {
    key: "eventi",
    title: "Eventi & promo",
    subtitle: "Eventi privati, sportivi, turismo, brand",
    image: "/images/eventi.jpg",
  },
];

export default function Home() {
  const year = new Date().getFullYear();
  const sectionRefs = useMemo(
    () => SECTIONS.map(() => React.createRef<HTMLDivElement>()),
    []
  );
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const mids: number[] = [];
      sectionRefs.forEach((r) => {
        const el = r.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const mid = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
        mids.push(mid);
      });
      if (mids.length) {
        let idx = 0, min = mids[0];
        for (let i = 1; i < mids.length; i++) if (mids[i] < min) { min = mids[i]; idx = i; }
        setActive(idx);
      }
    };
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
    alert("Richiesta inviata (demo). Prossimo step: email al cliente + notifica a support@skylenor.com.");
  }

  return (
    <>
      <style jsx global>{`
        html, body { margin:0; padding:0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; color:#0f172a; background:#fff; }
        .header { position:fixed; inset:0 auto auto 0; right:0; height:56px; z-index:20; display:flex; align-items:center; justify-content:space-between; padding:0 16px; background:rgba(255,255,255,.72); backdrop-filter:saturate(180%) blur(10px); border-bottom:1px solid rgba(15,23,42,.06);}
        .brand { font-weight:800; font-size:18px; }
        .menu { font-size:22px; }
        .wrap { margin-top:56px; scroll-snap-type:y mandatory; }
        .section { height:100vh; position:relative; display:flex; align-items:center; justify-content:center; text-align:center; overflow:hidden; scroll-snap-align:start; }
        .bg { position:absolute; inset:0; background-size:cover; background-position:center; transform:scale(1.02); }
        .overlay { position:absolute; inset:0; background:rgba(0,0,0,.6); opacity:0; transition:opacity .4s ease; pointer-events:none; }
        .content { position:relative; z-index:2; color:#fff; text-shadow:0 1px 2px rgba(0,0,0,.5); padding:0 16px; max-width:900px; }
        .title { font-weight:800; font-size:clamp(28px,5.6vw,54px); line-height:1.1; margin:0 0 8px; }
        .subtitle { font-size:clamp(14px,2.4vw,22px); margin:0; opacity:.95; }
        .dots { position:absolute; bottom:20px; left:0; right:0; display:flex; gap:8px; justify-content:center; z-index:3; }
        .dot { width:8px; height:8px; border-radius:999px; background:rgba(255,255,255,.6); transition:transform .2s, background .2s; }
        .dot.active { transform:scale(1.35); background:#fff; }
        .form-wrap { max-width:820px; margin:56px auto 80px; padding:0 16px; }
        .form-title { text-align:center; font-size:clamp(22px,4.2vw,36px); font-weight:800; margin:18px 0 6px; }
        .form-sub { text-align:center; color:#475569; margin:0 0 16px; }
        .box { border:1px solid #e6e7eb; border-radius:12px; padding:16px; display:grid; gap:12px; }
        .grid2 { display:grid; grid-template-columns:1fr; gap:12px; }
        @media (min-width:640px){ .grid2 { grid-template-columns:1fr 1fr; } }
        .input,.select,.textarea,.button { width:100%; border-radius:10px; border:1px solid #cfd3d9; padding:12px; font-size:16px; outline:none; }
        .textarea { min-height:120px; resize:vertical; }
        .button { background:#0b0b0b; color:#fff; border:0; font-weight:700; cursor:pointer; }
        .footer { color:#64748b; font-size:14px; border-top:1px solid #e6e7eb; padding:20px 16px 40px; text-align:center; }
      `}</style>

      <header className="header">
        <div className="brand">Skylenor</div>
        <div className="menu">☰</div>
      </header>

      <div className="wrap">
        {SECTIONS.map((s, i) => (
          <section key={s.key} ref={sectionRefs[i]} className="section" aria-label={s.title}>
            <div className="bg" style={{ backgroundImage: `url(${s.image})` }} />
            <div className="overlay" style={{ opacity: i < active ? 0.6 : 0 }} />
            <div className="content">
              <h1 className="title">{s.title}</h1>
              <p className="subtitle">{s.subtitle}</p>
            </div>
            <div className="dots">
              {SECTIONS.map((_, j) => <div key={j} className={`dot ${j === i ? "active" : ""}`} />)}
            </div>
          </section>
        ))}
      </div>

      <div className="form-wrap" id="richiesta">
        <h2 className="form-title">Fai una richiesta</h2>
        <p className="form-sub">Compila il form: ti mettiamo in contatto con un operatore vicino alla tua zona.</p>
        <form onSubmit={handleSubmit} className="box">
          <input className="input" placeholder="Località (es. Genova)" required />
          <select className="select" defaultValue="" required>
            <option value="" disabled>Seleziona il servizio</option>
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
          <small style={{ color:"#64748b" }}>* Demo: invieremo email nella prossima versione.</small>
        </form>
      </div>

      <div className="form-wrap">
        <h2 className="form-title">Diventa operatore</h2>
        <div className="box" style={{ lineHeight: 1.6 }}>
          Sei un pilota con patentino e assicurazione? Registrati e indica la tua area di disponibilità. Pensiamo noi ai permessi di volo e alla burocrazia.
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
        © {year} Skylenor — “Osserva il mondo dall’alto” · Contatto: <a href="mailto:support@skylenor.com">support@skylenor.com</a>
      </footer>
    </>
  );
}
