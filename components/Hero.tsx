export default function Hero() {
  return (
    <section className="hero">
      <span className="blob blob-gold" style={{ width: 340, height: 340, right: -90, top: -120, opacity: 0.9 }} />
      <span className="blob blob-navy" style={{ width: 120, height: 120, right: "24%", bottom: "6%", opacity: 0.1 }} />
      <span className="blob blob-royal" style={{ width: 70, height: 70, left: "4%", top: "20%", opacity: 0.5 }} />
      <svg className="hero-arrow hero-arrow--r" viewBox="0 0 130 130" fill="none" aria-hidden="true">
        <path className="ha-line" d="M14 116 C 34 78, 62 66, 104 26" stroke="var(--gold)" strokeWidth="5" strokeLinecap="round" />
        <path className="ha-head" d="M104 26 l-21 3 M104 26 l-3 21" stroke="var(--gold)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <svg className="hero-arrow hero-arrow--l" viewBox="0 0 130 130" fill="none" aria-hidden="true">
        <path className="ha-line" d="M14 116 C 34 78, 62 66, 104 26" stroke="var(--gold)" strokeWidth="5" strokeLinecap="round" />
        <path className="ha-head" d="M104 26 l-21 3 M104 26 l-3 21" stroke="var(--gold)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="container">
        <div className="hero-center">
          <span className="eyebrow">
            <span className="dot" /> Conferință de antreprenoriat pentru liceeni · Ediția 2026
          </span>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hero-logo" src="/assets/img/visio-logo.png" alt="VISIO logo" />
          <h1>
            Locul în care următoarea generație de antreprenori îi întâlnește pe cei care{" "}
            <span className="accent">au reușit.</span>
          </h1>
          <p className="hero-lead">
            VISIO este mai mult decât o conferință. Este locul în care viitorul antreprenoriatului românesc
            întâlnește experiența și viziunea celor care îl definesc astăzi.
          </p>

          <div className="event-strip" role="group" aria-label="Detalii eveniment">
            <div className="event-item">
              <span className="ei-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <rect x="3" y="4.5" width="18" height="17" rx="2.5" />
                  <path d="M8 2.5v4M16 2.5v4M3 9.5h18" />
                </svg>
              </span>
              <div>
                <span className="ei-label">Dată</span>
                <b className="ei-value is-date">22 Octombrie 2026</b>
                <span className="ei-sub">Notează în calendar</span>
              </div>
            </div>
            <div className="event-sep" aria-hidden="true" />
            <div className="event-item">
              <span className="ei-ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.6" />
                </svg>
              </span>
              <div>
                <span className="ei-label">Locație</span>
                <b className="ei-value">București</b>
                <span className="ei-sub">Locația exactă urmează</span>
              </div>
            </div>
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#contact">
              Implică-te
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a className="btn btn-ghost" href="#program">
              Vezi agenda
            </a>
          </div>

          <div className="hero-foundation">
            <span>O inițiativă</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="lr-logo"
              src="/assets/img/laude-reut-logo.png"
              alt="Laude-Reut — Academia Interdisciplinară a Viitorului"
            />
          </div>
          <a className="hero-scroll" href="#about" aria-label="Derulează pentru a descoperi mai mult">
            <span>Descoperă</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
