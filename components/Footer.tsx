"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState<number>(0);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img/visio-logo.png" alt="VISIO" />
            <p>Locul în care viitorul antreprenoriatului românesc întâlnește oamenii care îl definesc astăzi.</p>
            <div className="footer-logos">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/img/laude-reut-logo.png" alt="Laude-Reut — Academia Interdisciplinară a Viitorului" />
            </div>
          </div>
          <div className="footer-col footer-contact">
            <h4>Contact</h4>
            <a href="mailto:hello@visioinitiative.ro">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2.5" />
                <path d="m3.5 6.5 8.5 6 8.5-6" />
              </svg>
              hello@visioinitiative.ro
            </a>
            <a href="tel:+40730752455">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.5 3h3l1.5 5-2 1.2a12 12 0 0 0 5.8 5.8l1.2-2 5 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
              </svg>
              +40 730 752 455
            </a>
            <a href="https://www.instagram.com/visio.initiative/" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
              </svg>
              @visio.initiative
            </a>
          </div>
          <div className="footer-col">
            <h4>Eveniment</h4>
            <a href="#about">Despre VISIO</a>
            <a href="#speakers">Speakeri</a>
            <a href="#program">Agenda</a>
            <p>22 Octombrie 2026 · București</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © <span id="year">{year}</span> VISIO · O inițiativă Laude-Reut. Toate drepturile rezervate.
          </span>
          <span>București, România</span>
        </div>
      </div>
    </footer>
  );
}
