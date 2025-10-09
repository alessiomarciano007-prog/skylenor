"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * Skylenor – Home con effetti di scroll
 * - Sezioni a schermo intero (scroll-snap)
 * - La sezione precedente si oscura progressivamente mentre scorri
 * - Overlay testo (titolo + sottotitolo)
 * - Form collegato a /api/lead (single opt-in)
 *
 * Sostituisci gli URL delle immagini in `SECTIONS` con i tuoi file.
 */

// Utilità semplice per clamp
const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));

// Dati delle sezioni con immagini
const SECTIONS = [
  {
    key: "hero",
    title: "Marketplace globale per servizi con il drone",
    subtitle: "Trova piloti certificati, richiedi riprese e rilievi dall’alto.",
    image: "/images/hero.jpg", // TODO: sostituisci con la tua immagine hero
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
  const year = useMemo(() => new Date().getFullYear(), []);

  // Refs per ogni sezione a tutta altezza
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Effetto: individua la sezione più vicina al centro viewport
  useEffect(() => {
    function onScroll() {
      const mid = window.innerHeight / 2;
      let bestIdx = 0;
      let bestDist = Infinity;

      sectionRefs.current.forEach((el, idx) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const center = r.top + r.height / 2;
        const dist = Math.abs(center - mid);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = idx;
        }
      });
      setActiveIndex(bestIdx);

      // Oscura progressivamente le sezioni precedenti
      overlayRefs.current.forEach((ov, idx) => {
        if (!ov) return;
        const gap = bestIdx - idx; // quante sezioni prima
        const opacity = gap <= 0 ? 0 : clamp(0.25 + 0.25 * gap, 0, 0.75); // 0.25, 0.5, 0.75...
        ov.style.opacity = String(opacity);
      });
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Stato form
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "err">(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setSent(null);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Send failed");
      setSent("ok");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (e) {
      setSent("err");
    } finally {
      setSending(false);
    }
  }

  return (
    <div style={{ background: "#fff", color: "#111" }}>
      {/* Header sticky minimale */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          height: 60,
          borderBottom: "1px solid #eceef1",
          backdropFilter: "saturate(140%) blur(6px)",
          background: "rgba(255,255,255,.7)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px" }}>
          <div style={{ fontWeight: 800, fontSize: 20 }}>Skylenor</div>
          <nav style={{ display: "flex", gap: 16, fontSize: 14 }}>
            <a href="#form">Richiesta</a>
            <a href="#operatori">Operatore</a>
            <a href="#contatti">Contatti</a>
          </nav>
        </div>
      </header>

      {/* Wrapper scroll-snap */}
      <main
        style={{
          scrollSnapType: "y mandatory",
          overflowX: "hidden",
        }}
      >
        {SECTIONS.map((s, idx) => (
          <section
            id={s.key}
            key={s.key}
            ref={(el) => (sectionRefs.current[idx] = el)}
            style={{
              position: "relative",
              minHeight: "100svh",
              width: "100%",
              scrollSnapAlign: "start",
              display: "grid",
              placeItems: "center",
              textAlign: "center",
              color: "#fff",
              isolation: "isolate",
            }}
          >
            {/* Background immagine */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${s.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -2,
              }}
            />

            {/* Overlay scuro animato per le sezioni precedenti */}
            <div
              ref={(el) => (overlayRefs.current[idx] = el)}
              style={{
                position: "absolute",
                inset: 0,
                background: "#000",
                opacity: 0,
                transition: "opacity .35s ease",
                zIndex: -1,
              }}
            />

            {/* Testo */}
            <div style={{ maxWidth: 920, padding: "0 16px" }}>
              <h1 style={{ fontSize: idx === 0 ? 48 : 40, lineHeight: 1.08, margin: "0 0 10px", fontWeight: 800 }}>
                {s.title}
              </h1>
              <p style={{ fontSize: 18, margin: 0, opacity: 0.95 }}>{s.subtitle}</p>
            </div>

            {/* Dots di sezione (mobile friendly) */}
            <div style={{ position: "absolute", bottom: 16, left: 0, right: 0, display: "flex", gap: 8, justifyContent: "center" }}>
              {SECTIONS.map((_, i) => (
                <span
                  key={`dot-${i}`}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 99,
                    background: i === activeIndex ? "rgba(255,255,255,.95)" : "rgba(255,255,255,.45)",
                    transition: "background .25s",
                  }}
                />
              ))}
            </div>
          </section>
        ))}

        {/* Sezione FORM */}
        <section id="form" style={{ minHeight: "100svh", scrollSnapAlign: "start", display: "grid", placeItems: "center", padding: "56px 16px" }}>
          <div style={{ maxWidth: 680, width: "100%", textAlign: "center" }}>
            <h2 style={{ fontSize: 36, margin: "0 0 6px", fontWeight: 800 }}>Fai una richiesta</h2>
            <p style={{ color: "#5b6470", marginTop: 0, marginBottom: 16 }}>
              Compila il form: ti mettiamo in contatto con un operatore vicino alla tua zona.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, border: "1px solid #e6e7eb", borderRadius: 14, padding: 16 }}>
              <input name="location" placeholder="Località (es. Genova)" required style={inputStyle} />
              <select name="service" defaultValue="" required style={inputStyle as React.CSSProperties}>
                <option value="" disabled>
                  Seleziona il servizio
                </option>
                <option>Riprese foto/video</option>
                <option>Ispezione tetto/antenne</option>
                <option>Rilievo confini/terreni</option>
                <option>Evento/Promo</option>
              </select>
              <textarea name="details" placeholder="Descrivi il lavoro da svolgere…" rows={5} style={inputStyle} />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <input name="name" type="text" placeholder="Nome/Azienda" required style={inputStyle} />
                <input name="email" type="email" placeholder="Email" required style={inputStyle} />
              </div>
              <button
                type="submit"
                disabled={sending}
                style={{
                  background: sending ? "#444" : "#111",
                  color: "#fff",
                  padding: "12px 16px",
                  borderRadius: 12,
                  border: 0,
                  cursor: sending ? "not-allowed" : "pointer",
                  fontWeight: 700,
                }}
              >
                {sending ? "Invio in corso…" : "Invia richiesta"}
              </button>

              {sent === "ok" && (
                <div style={{ color: "#065f46", fontSize: 14 }}>✅ Richiesta inviata! Ti abbiamo mandato anche una copia di cortesia.</div>
              )}
              {sent === "err" && (
                <div style={{ color: "#7f1d1d", fontSize: 14 }}>
                  ⚠️ Invio non riuscito. Scrivici direttamente a
                  {" "}
                  <a href="mailto:support@skylenor.com" style={{ fontWeight: 700 }}>
                    support@skylenor.com
                  </a>
                  .
                </div>
              )}
            </form>
          </div>
        </section>

        {/* Sezione Operatore */}
        <section id="operatori" style={{ minHeight: "85svh", scrollSnapAlign: "start", display: "grid", placeItems: "center", padding: "56px 16px" }}>
          <div style={{ maxWidth: 800 }}>
            <h2 style={{ fontSize: 36, fontWeight: 800, margin: "0 0 12px" }}>Diventa operatore</h2>
            <div style={{ border: "1px solid #e6e7eb", borderRadius: 14, padding: 16 }}>
              <p style={{ marginTop: 0 }}>
                Sei un pilota con patentino e assicurazione? Registrati e indica la tua area di disponibilità. Pensiamo noi ai permessi di volo e alla burocrazia.
              </p>
              <ul style={{ margin: "0 0 12px 18px" }}>
                <li>Documento d’identità</li>
                <li>Patentino (in base alla categoria di drone)</li>
                <li>Assicurazione RC</li>
                <li>Registrazione ENAC/QR (Italia) o equivalente locale</li>
              </ul>
              <a href="mailto:support@skylenor.com?subject=Candidatura%20operatore%20drone" style={{ fontWeight: 700 }}>
                Candidati ora → support@skylenor.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contatti" style={{ borderTop: "1px solid #eceef1", padding: "20px 16px", color: "#6b7280", fontSize: 14 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div>© {year} Skylenor — “Osserva il mondo dall’alto”</div>
          <div style={{ marginTop: 6 }}>Contatto: <a href="mailto:support@skylenor.com">support@skylenor.com</a></div>
          <div style={{ marginTop: 6, fontSize: 12 }}>Note legali semplificate. Inserisci link a Termini, Privacy e Cookie.</div>
        </div>
      </footer>

      {/* Stili globali piccoli */}
      <style>{`
        html { scroll-behavior: smooth; }
        a { color: inherit; text-decoration: none; }
        a:hover { opacity: .85; }
        @media (max-width: 900px) {
          h1 { font-size: 34px !important; }
          h2 { font-size: 28px !important; }
        }
      `}</style>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid #cfd3d9",
  borderRadius: 12,
  padding: "10px 12px",
  outline: "none",
  fontSize: 14,
  background: "#fff",
};
