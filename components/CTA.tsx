export default function CTA() {
  return (
    <section className="section cta-band" id="contact">
      <span className="blob blob-gold" />
      <span className="blob blob-royal" />
      <div className="container">
        <span className="section-tag" style={{ color: "var(--gold)" }}>
          Implică-te
        </span>
        <h2>Vrei să faci parte din VISIO 2026?</h2>
        <p>Fie că ești elev, școală, partener sau viitor speaker — scrie-ne și urmărește parcursul pe măsură ce programul prinde contur.</p>
        <div className="cta-actions">
          <a className="btn btn-primary" href="mailto:hello@visioinitiative.ro">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="5" width="18" height="14" rx="2.5" />
              <path d="m3.5 6.5 8.5 6 8.5-6" />
            </svg>
            Scrie-ne
          </a>
          <a className="btn btn-ghost" style={{ color: "#fff", borderColor: "rgba(255,255,255,.4)" }} href="https://www.instagram.com/visio.initiative/" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
            </svg>
            Urmărește-ne pe Instagram
          </a>
        </div>
        <p className="cta-phone">
          Sau sună-ne la <a href="tel:+40730752455">+40 730 752 455</a>
        </p>
      </div>
    </section>
  );
}
