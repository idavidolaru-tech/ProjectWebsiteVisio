export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">
              <span className="dot" /> Antreprenoriat pentru liceeni · Ediția 2026
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero-logo" src="/assets/img/visio-logo.png" alt="VISIO logo" />
            <h1>
              Fii parte din următoarea generație de antreprenori a României.
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
                  <b className="event-value">București</b>
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
          </div>

          <div className="hero-visual">
            <svg className="hv-arrow" viewBox="0 0 200 200" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="hvArrowGrad" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0" stopColor="var(--royal)" />
                  <stop offset="0.45" stopColor="#17a6c6" />
                  <stop offset="0.72" stopColor="var(--gold)" />
                  <stop offset="1" stopColor="var(--gold)" />
                </linearGradient>
              </defs>
              <path
                className="hv-arrow-line"
                d="M22 178 C 66 150, 92 120, 176 26"
                stroke="url(#hvArrowGrad)"
                strokeWidth="24"
                strokeLinecap="round"
              />
              <path
                className="hv-arrow-head"
                d="M176 26 l-34 4 M176 26 l-4 34"
                stroke="url(#hvArrowGrad)"
                strokeWidth="24"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="hv-shapes">
              <div className="hv-shape hv-shape-1" aria-hidden="true" />
              <div className="hv-shape hv-shape-2" aria-hidden="true" />
            </div>

            <div className="hv-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/visio-students.jpg"
                alt="Liceeni ridicând mâinile, hotărâți să construiască viitorul"
              />
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
