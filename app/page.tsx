"use client";

import React from "react";

export default function Home() {
  const year = new Date().getFullYear();

  const box: React.CSSProperties = {
    border: "1px solid #e6e7eb",
    borderRadius: 12,
    padding: 16,
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Richiesta inviata (demo). Nella prossima versione la invieremo alla tua email.");
  }

  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "40px 16px" }}>
      {/* Header */}
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 24,
        }}
      >
        <div style={{ fontWeight: 700, fontSize: 20 }}>Skylenor</div>
        <nav style={{ display: "flex", gap: 18, fontSize: 14 }}>
          <a href="#servizi">Servizi</a>
          <a href="#diventa-operatore">Diventa operatore</a>
          <a href="#contatti">Contatti</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={{ marginTop: 16, marginBottom: 24 }}>
        <h1 style={{ fontSize: 40, lineHeight: 1.1, margin: "0 0 12px", fontWeight: 800 }}>
          Marketplace globale per servizi con drone
        </h1>
        <p style={{ color: "#5b6470", margin: 0 }}>
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
            }}
          >
            Iscriviti come pilota
          </a>
        </div>
      </section>

      {/* Categorie */}
      <section id="servizi" style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 22, marginBottom: 16 }}>Categorie principali</h2>

        <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
          <div style={box}>
            <div style={{ fontWeight: 700 }}>Immobili</div>
            <div style={{ color: "#5b6470" }}>Foto/video per case, ville e cantieri</div>
          </div>
          <div style={box}>
            <div style={{ fontWeight: 700 }}>Terreni</div>
            <div style={{ color: "#5b6470" }}>Confini, lotti non recintati, documentazione</div>
          </div>
          <div style={box}>
            <div style={{ fontWeight: 700 }}>Infrastrutture</div>
            <div style={{ color: "#5b6470" }}>Tetti, antenne, ponti, pannelli solari</div>
          </div>
          <div style={box}>
            <div style={{ fontWeight: 700 }}>Eventi & Promo</div>
            <div style={{ color: "#5b6470" }}>Eventi sportivi, turismo, brand</div>
          </div>
        </div>
      </section>

      {/* Form richiesta */}
      <section id="richiesta" style={{ marginTop: 36 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Fai una richiesta in 2 minuti</h2>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12, ...box }}>
          <input placeholder="Località (es. Genova)" required style={input} />
          <select defaultValue="" required style={input as React.CSSProperties}>
            <option value="" disabled>
              Seleziona servizio
            </option>
            <option>Riprese foto/video</option>
            <option>Ispezione tetto/antenne</option>
            <option>Rilievo confini/terreni</option>
            <option>Evento/Promo</option>
          </select>
          <textarea placeholder="Descrivi il lavoro che ti serve..." rows={5} style={input} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <input type="text" placeholder="Nome" required style={input} />
            <input type="email" placeholder="Email" required style={input} />
          </div>

          <button
            type="submit"
            style={{
              background: "black",
              color: "white",
              padding: "12px 16px",
              borderRadius: 10,
              border: 0,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Invia richiesta
          </button>

          <small style={{ color: "#5b6470" }}>
            * Demo: il form mostra un alert. Nella prossima versione invieremo la richiesta via email.
          </small>
        </form>
      </section>

      {/* Diventa operatore */}
      <section id="diventa-operatore" style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 22, marginBottom: 12 }}>Diventa operatore</h2>
        <div style={box}>
          <p style={{ marginTop: 0 }}>
            Sei un pilota con patentino e assicurazione? Registrati e indica la tua area di
            disponibilità. Pensiamo noi ai permessi di volo e alla burocrazia.
          </p>
          <ul style={{ margin: "0 0 12px 18px" }}>
            <li>Documento d’identità</li>
            <li>Patentino (se richiesto dalla categoria di drone)</li>
            <li>Assicurazione RC</li>
            <li>Registrazione ENAC/QR (Italia) o equivalente locale</li>
          </ul>
          <a
            href="mailto:hello@skylenor.com"
            style={{ textDecoration: "none", fontWeight: 600 }}
          >
            Candidati ora → hello@skylenor.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="contatti" style={{ marginTop: 48, padding: "24px 0", borderTop: "1px solid #e6e7eb", color: "#64748b", fontSize: 14 }}>
        <div>© {year} Skylenor — “Osserva il mondo dall’alto”</div>
        <div style={{ marginTop: 6 }}>
          Contatto: <a href="mailto:hello@skylenor.com">hello@skylenor.com</a>
        </div>
      </footer>
    </main>
  );
}

const input: React.CSSProperties = {
  width: "100%",
  border: "1px solid #cfd3d9",
  borderRadius: 10,
  padding: "10px 12px",
  outline: "none",
};
