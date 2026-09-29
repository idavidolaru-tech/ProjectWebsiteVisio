export default function Hero() {
  return (
    <section className="hero">
      <span className="blob blob-gold" style={{ width: 280, height: 280, right: -150, top: -170, opacity: 0.8 }} />
      <span className="blob blob-royal" style={{ width: 70, height: 70, left: "3%", top: "24%", opacity: 0.45 }} />
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="dot" /> Antreprenoriat pentru liceeni · Ediția 2026
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero-logo" src="/assets/img/visio-logo.png" alt="VISIO logo" />
            <h1>
              Fii parte din următoarea{" "}
              <span className="brush">
                <svg className="brush-mark" viewBox="0 0 400 120" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M6 28 C 60 10, 150 20, 220 16 C 300 11, 360 24, 396 12 L 394 100 C 330 114, 240 100, 160 107 C 92 112, 34 104, 6 112 Z" />
                </svg>
                <span className="brush-word">generație</span>
              </span>{" "}
              de antreprenori a României.
            </h1>
            <p className="hero-lead">
              VISIO este mai mult decât o conferință. Este locul în care viitorul antreprenoriatului
              românesc întâlnește experiența și viziunea celor care îl definesc astăzi.
            </p>

            <div className="event-info">
              <div className="event-card">
                <span className="event-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="4.5" width="18" height="17" rx="2.5" />
                    <path d="M8 2.5v4M16 2.5v4M3 9.5h18" />
                  </svg>
                </span>
                <div>
                  <span className="event-label">Dată</span>
                  <b className="event-value">22 Octombrie 2026</b>
                </div>
              </div>
              <div className="event-card">
                <span className="event-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.6" />
                  </svg>
                </span>
                <div>
                  <span className="event-label">Locație</span>
                  <b className="event-value">ZBOR Hub ASE</b>
                </div>
              </div>
            </div>

            <div className="hero-actions">
              <a className="btn btn-primary" href="https://docs.google.com/forms/d/e/1FAIpQLSclUoJHQ5YQNZjrFckpzrTn06I0_83FRSjeTsKgrJQddn8GMQ/viewform" target="_blank" rel="noopener noreferrer">
                Înscrie-te
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
              <span className="hf-divider" aria-hidden="true" />
              <span>Powered by</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="bcr-logo"
                src="/assets/img/BCR2.png"
                alt="BCR"
              />
            </div>
          </div>

          <div className="hero-visual">
            <div className="hv-shapes">
              <div className="hv-shape hv-shape-1" aria-hidden="true" />
              <div className="hv-shape hv-shape-2" aria-hidden="true" />
            </div>

            <div className="hv-stack">
              <span className="hv-halftone hv-halftone--a" aria-hidden="true" />
              <span className="hv-halftone hv-halftone--b" aria-hidden="true" />

              <div className="hv-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/img/visio-students.jpg"
                  alt="Liceeni ridicând mâinile, hotărâți să construiască viitorul"
                />
              </div>

              <span className="hv-hand" aria-hidden="true">
                Curaj. Viziune.{" "}
                <span className="hv-hand-impact">
                  Impact.
                  <svg className="hv-hand-ring" viewBox="0 0 160 70" fill="none" aria-hidden="true">
                    <path d="M20 44 C 8 20, 44 8, 82 8 C 128 8, 152 24, 148 40 C 144 58, 96 66, 56 62 C 24 59, 10 46, 26 30" />
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </div>

        <a className="hero-scroll" href="#about" aria-label="Derulează pentru a descoperi mai mult">
          <span>Descoperă</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
