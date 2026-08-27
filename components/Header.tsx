"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "Despre" },
  { href: "#challenge", label: "Provocarea" },
  { href: "#speakers", label: "Speakeri" },
  { href: "#program", label: "Agenda" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " scrolled" : ""}`}>
      <nav className={`nav container${open ? " open" : ""}`} aria-label="Navigație principală">
        <a className="brand" href="#top" aria-label="VISIO — acasă">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/img/visio-logo.png" alt="VISIO" />
        </a>
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-cta">
          <a className="btn btn-navy" href="#contact">
            Implică-te
          </a>
          <button
            className="nav-toggle"
            aria-label="Deschide meniul"
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
