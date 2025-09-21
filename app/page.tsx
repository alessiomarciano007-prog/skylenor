"use client";
import React from "react";

export default function Home() {
  const year = new Date().getFullYear();
  const box: React.CSSProperties = { border: "1px solid #e5e7eb", borderRadius: 12, padding: 16 };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Richiesta inviata (demo). Nel prossimo step la manderemo alla tua email.");
  }

  return (
    <main style={{ maxWidth: 960, margin: "0 auto", padding: "40px 16px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.3 }}>Skylenor</div>
        <nav style={{ display: "flex", gap: 16 }}>
          <a href="#services">Servizi</a>
          <a href="#operators">Diventa operatore</a>
          <a href="#contact">Contatti</a>
        </nav>
      </header>

      <section style={{ marginTop: 48, textAlign: "center" }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.1 }}>
          Marketplace globale per servizi con drone
        </h1>
        <p style={{ marginTop: 12, fontSize: 18, color: "#475569" }}>
          Trova piloti certificati, richiedi riprese e rilievi dall’alto. Dalla richiesta al file consegnato.
        </p>
        <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
          <a href="#request" style={{ padding: "12px 18px", borderRadius: 10, background: "#111", color: "#fff" }}>
            Trova un operatore
          </a>
          <a href="#operators" style={{ padding: "12px 18px", borderRadius: 10, border: "1px solid #111" }}>
            Iscriviti come pilota
          </a>
        </div>
      </section>

      <section id="services" style={{ marginTop: 56 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>Categorie principali</h2>
        <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", marginTop: 16 }}>
          {[
            ["Immobili", "Foto/video per case, ville e cantieri"],
            ["Terreni", "Confini, lotti non recintati, documentazione"],
            ["Infrastrutture", "Tetti, antenne, ponti, pannelli solari"],
            ["Eventi & Promo", "Riprese per eventi sportivi e turismo"],
          ].map(([t, d], i) => (
            <div key={i} style={box}>
              <div style={{ fontWeight: 600 }}>{t}</div>
              <div style={{ fontSize: 14, color: "#475569", marginTop: 6 }}>{d}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="request" style={{ marginTop: 56 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>Fai una richiesta in 2 minuti</h2>
        <form onSubmit={handleSubmit} style={{ marginTop: 16, display: "grid", gap: 12, maxWidth: 720 }}>
          <input placeholder="Località (es. Genova)" style={{ ...box, padding: 12 }} />
          <select style={{ ...box, padding: 12 }}>
            <option>Seleziona servizio</option>
            <option>Immobili</option>
            <option>Terreni</option>
            <option>Infrastrutture</option>
            <option>Eventi & Promo</option>
          </select>
          <textarea rows={4} placeholder="Descrivi il lavoro che ti serve..." style={{ ...box, padding: 12 }} />
          <button type="submit" style={{ padding: "12px 18px", borderRadius: 10, background: "#111", color: "#fff" }}>
            Invia richiesta
          </button>
        </form>
        <p style={{ fontSize: 12, color: "#64748b", marginTop: 8 }}>
          MVP: per ora compare un alert. Nel prossimo step invieremo davvero la richiesta alla tua email.
        </p>
      </section>

      <section id="operators" style={{ marginTop: 56 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700 }}>Iscriviti come operatore</h2>
        <ul style={{ marginTop: 8, color: "#334155" }}>
          <li>Documento d’identità</li>
          <li>Patentino &gt;249 g (se richiesto)</li>
          <li>Assicurazione RC drone</li>
          <li>Registrazione ENAC/QR (Italia) o equivalente locale</li>
        </ul>
        <a href="#" style={{ display: "inline-block", marginTop: 16, padding: "12px 18px", borderRadius: 10, border: "1px solid #111" }}>
          Crea account (prossimo step)
        </a>
      </section>

      <footer id="contact" style={{ marginTop: 72, padding: "24px 0", borderTop: "1px solid #e5e7eb", fontSize: 14, color: "#64748b" }}>
        <div>© {year} Skylenor — “Osserva il mondo dall’alto”</div>
        <div style={{ marginTop: 6 }}>Contatto: hello@skylenor.com (provvisorio)</div>
      </footer>
    </main>
  );
}
