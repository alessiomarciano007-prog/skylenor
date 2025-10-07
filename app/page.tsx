"use client";

import React, { useMemo, useState } from "react";

export default function Home() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState<null | "ok" | "err">(null);

  const box: React.CSSProperties = {
    border: "1px solid #e6e7eb",
    borderRadius: 12,
    padding: 16,
    background: "#fff",
  };

  const input: React.CSSProperties = {
    width: "100%",
    border: "1px solid #cfd3d9",
    borderRadius: 10,
    padding: "10px 12px",
    outline: "none",
    fontSize: 14,
    background: "#fff",
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    setSent(null);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      // API placeholder: create /api/lead on Next.js to forward to support@skylenor.com
      // Fallback: if no API yet, we still show success and provide a mailto link below.
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");
      setSent("ok");
      (e.currentTarget as HTMLFormElement).reset();
    } catch (err) {
      setSent("err");
    } finally {
      setSending(false);
    }
  }

  return (
    <main style={{ maxWidth: 1080, margin: "0 auto", padding: "32px 16px" }}>
      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "#fff",
          zIndex: 20,
          borderBottom: "1px solid #eef0f3",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: 64,
            maxWidth: 1080,
            margin: "0 auto",
            padding: "0 16px",
          }}
        >
          <div style={{ fontWeight: 800, fontSize: 22 }}>Skylenor</div>
          <nav style={{ display: "flex", gap: 18, fontSize: 14 }}>
            <a href="#servizi">Servizi</a>
            <a href="#richiesta">Richiesta</a>
            <a href="#diventa-operatore">Diventa operatore</a>
            <a href="#contatti">Contatti</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section style={{ marginTop: 16, marginBottom: 28 }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 18,
        }}>
          <div>
            <h1 style={{ fontSize: 42, lineHeight: 1.1, margin: "0 0 12px", fontWeight: 800 }}>
              Marketplace globale per servizi con drone
            </h1>
            <p style={{ color: "#5b6470", margin: 0, fontSize: 16 }}>
              Trova piloti certificati, richiedi riprese e rilievi dall’alto. Dalla
              richiesta al file consegnato.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
              <a
                href="#richiesta"
                style={{
                  background: "black",
                  color: "white",
                  padding: "10px 16px",
                  borderRadius: 10,
                  textDecoration: "none",
                  display: "inline-block",
                  fontWeight: 600,
                }}
              >
                Trova un operatore
              </a>
              <a
                href="#diventa-operatore"
                style={{
                  padding: "10px 16px",
                  borderRadius: 10,
                  textDecoration: "none",
                  border: "1px solid #cfd3d9",
                  display: "inline-block",
                  fontWeight: 600,
                }}
              >
                Iscriviti come pilota
              </a>
            </div>
            <div style={{ display: "flex", gap: 16, marginTop: 18, color: "#6b7280", fontSize: 13 }}>
              <span>✔️ Piloti verificati</span>
              <span>✔️ Permessi di volo gestiti da noi</span>
              <span>✔️ Pagamenti sicuri</span>
            </div>
          </div>

          {/* Video placeholder (puoi sostituire con il tuo) */}
          <div style={{
            borderRadius: 14,
            overflow: "hidden",
            border: "1px solid #e6e7eb",
            background: "#0b0b0b",
            aspectRatio: "16/9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#d1d5db",
            fontSize: 14,
          }}>
            <span>Video hero / showcase (16:9)</span>
          </div>
        </div>
      </section>

      {/* Categorie */}
      <section id="servizi" style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 24, marginBottom: 12 }}>Categorie principali</h2>

        <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
          {[
            { t: "Immobili", d: "Foto/video per case, ville e cantieri" },
            { t: "Terreni", d: "Confini, lotti non recintati, documentazione" },
            { t: "Infrastrutture", d: "Tetti, antenne, ponti, pannelli solari" },
            { t: "Eventi & Promo", d: "Eventi sportivi, turismo, brand" },
          ].map((c) => (
            <div key={c.t} style={box}>
              <div style={{ fontWeight: 700 }}>{c.t}</div>
              <div style={{ color: "#5b6470" }}>{c.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Form richiesta */}
      <section id="richiesta" style={{ marginTop: 36 }}>
        <h2 style={{ fontSize: 24, marginBottom: 10 }}>Fai una richiesta in 2 minuti</h2>
        <p style={{ color: "#5b6470", marginTop: 0, marginBottom: 12, fontSize: 14 }}>
          Compila il form: ti mettiamo in contatto con un operatore vicino alla zona indicata.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, ...box }}>
          <input name="location" placeholder="Località (es. Genova)" required style={input} />

          <select name="service" defaultValue="" required style={input as React.CSSProperties}>
            <option value="" disabled>
              Seleziona servizio
            </option>
            <option>Riprese foto/video</option>
            <option>Ispezione tetto/antenne</option>
            <option>Rilievo confini/terreni</option>
            <option>Evento/Promo</option>
          </select>

          <textarea name="details" placeholder="Descrivi il lavoro che ti serve..." rows={5} style={input} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <input name="name" type="text" placeholder="Nome" required style={input} />
            <input name="email" type="email" placeholder="Email" required style={input} />
          </div>

          <button
            type="submit"
            disabled={sending}
            style={{
              background: sending ? "#4b5563" : "black",
              color: "white",
              padding: "12px 16px",
              borderRadius: 10,
              border: 0,
              cursor: sending ? "not-allowed" : "pointer",
              fontWeight: 700,
            }}
          >
            {sending ? "Invio in corso..." : "Invia richiesta"}
          </button>

          {sent === "ok" && (
            <div style={{ color: "#065f46", fontSize: 14 }}>
              ✅ Richiesta inviata! Ti risponderemo a breve da <b>support@skylenor.com</b>.
            </div>
          )}
          {sent === "err" && (
            <div style={{ color: "#7f1d1d", fontSize: 14 }}>
              ⚠️ Non sono riuscito a inviare tramite API. Invia direttamente una mail a
              {" "}
              <a href="mailto:support@skylenor.com?subject=Richiesta%20drone" style={{ fontWeight: 600 }}>
                support@skylenor.com
              </a>
              {" "}
              allegando i dettagli.
            </div>
          )}

          <small style={{ color: "#5b6470" }}>
            * Nella versione attuale il form prova a contattare <b>support@skylenor.com</b> tramite un’API
            interna. Se l’API non è ancora configurata, usa il link email sopra.
          </small>
        </form>
      </section>

      {/* Diventa operatore */}
      <section id="diventa-operatore" style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 24, marginBottom: 10 }}>Diventa operatore</h2>
        <div style={box}>
          <p style={{ marginTop: 0 }}>
            Sei un pilota con patentino e assicurazione? Registrati e indica la tua area di
            disponibilità. Pensiamo noi ai permessi di volo e alla burocrazia.
          </p>
          <ul style={{ margin: "0 0 12px 18px" }}>
            <li>Documento d’identità</li>
            <li>Patentino (in base alla categoria di drone)</li>
            <li>Assicurazione RC</li>
            <li>Registrazione ENAC/QR (Italia) o equivalente locale</li>
          </ul>
          <a
            href="mailto:support@skylenor.com?subject=Candidatura%20operatore%20drone"
            style={{ textDecoration: "none", fontWeight: 700 }}
          >
            Candidati ora → support@skylenor.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contatti" style={{ marginTop: 48, padding: "24px 0", borderTop: "1px solid #e6e7eb", color: "#64748b", fontSize: 14 }}>
        <div>© {year} Skylenor — “Osserva il mondo dall’alto”</div>
        <div style={{ marginTop: 6 }}>
          Contatto: <a href="mailto:support@skylenor.com">support@skylenor.com</a>
        </div>
        <div style={{ marginTop: 6, fontSize: 12 }}>
          Note legali semplificate. Inserisci link a Termini, Privacy e Cookie.
        </div>
      </footer>

      {/* Tiny helper styles */}
      <style>{`
        html {
          scroll-behavior: smooth;
          background: #fafafa;
        }
        a:hover { opacity: .85 }
        @media (max-width: 880px) {
          section > div[style*="grid-template-columns"] {
            display: block !important;
          }
        }
      `}</style>
    </main>
  );
}
