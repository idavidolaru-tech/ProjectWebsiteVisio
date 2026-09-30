export default function Program() {
  return (
    <section className="section" id="program">
      <div className="container">
        <div className="center" style={{ marginBottom: "clamp(34px, 5vw, 54px)" }}>
          <span className="section-tag">Experiența</span>
          <h2 className="section-title">Trei paneluri. Ateliere practice.</h2>
          <p className="section-intro">
            O zi întreagă construită în jurul conversațiilor sincere și al abilităților practice — inspirată de cursurile unor universități de top din
            străinătate.
          </p>
        </div>

        <div className="panels-grid">
          <article className="panel reveal">
            <span className="num">01</span>
            <span className="badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 15c2-6 6-10 15-11-1 9-5 13-11 15" />
                <path d="M4 15c-.5 3 0 4 0 4s1 .5 4 0" />
                <path d="M9 20c-2 1-5 1-5 1s0-3 1-5" />
              </svg>
            </span>
            <h3>Curajul de a începe</h3>
            <p>Primele idei — și cum le-au transformat fondatorii în afaceri reale, chiar de la primul pas.</p>
          </article>
          <article className="panel reveal">
            <span className="num">02</span>
            <span className="badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12a9 9 0 1 1-2.64-6.36" />
                <path d="M21 3v5h-5" />
              </svg>
            </span>
            <h3>Curajul de a greși</h3>
            <p>Ce lecții au învățat din eșecuri și cum le-au aplicat.</p>
          </article>
          <article className="panel reveal">
            <span className="num">03</span>
            <span className="badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.8.9.9 1.6h5.2c.1-.7.4-1.2.9-1.6A6 6 0 0 0 12 3Z" />
                <path d="M9 18h6M10 21h4" />
              </svg>
            </span>
            <h3>Curajul de a visa</h3>
            <p>Să gândești mai mare — viziunea, ambiția și mentalitatea din spatele afacerilor de top.</p>
          </article>
        </div>

        <div className="workshops">
          <div className="workshops-head reveal">
            <h3>Ateliere practice</h3>
            <span className="head-tba">TBA</span>
          </div>
          <div className="chips">
            <div className="chip chip-featured reveal">
              <div className="chip-photo" role="img" aria-label="Portret Nicoleta Munteanu" />
              <div>
                <b>Atelier 01 — Poți construi un business de 1 milion €?</b>
                <span className="chip-tagline">Think. Build. Pitch.</span>
                <span className="chip-presenter">Nicoleta Munteanu — Avocat &amp; Antreprenor, Vicepreședintă CONAF</span>
              </div>
            </div>
            <div className="chip chip-featured reveal">
              <div className="chip-photo chip-photo-silviu" role="img" aria-label="Portret Silviu Hotaran" />
              <div>
                <b>Atelier 02 — Viziune și Leadership</b>
                <span className="chip-presenter">Silviu Hotaran — Co-Founder &amp; Hansen Beck Certified Business Trainer &amp; Representative for Romania</span>
              </div>
            </div>
            <div className="chip tba reveal">
              <span className="ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7.5V12l3 2" />
                </svg>
              </span>
              <div>
                <b>Atelier 03</b>
                <span>Urmează să fie anunțat</span>
              </div>
            </div>
            <div className="chip tba reveal">
              <span className="ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7.5V12l3 2" />
                </svg>
              </span>
              <div>
                <b>Atelier 04</b>
                <span>Urmează să fie anunțat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
