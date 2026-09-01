export default function Challenge() {
  return (
    <section className="section" id="challenge">
      <div className="container">
        <div className="center" style={{ marginBottom: "clamp(34px, 5vw, 54px)" }}>
          <span className="section-tag">De ce VISIO</span>
          <h2 className="section-title">Provocarea și răspunsul nostru.</h2>
        </div>
        <div className="split">
          <article className="pcard problem reveal">
            <span className="badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v5" />
                <circle cx="12" cy="16.5" r=".6" fill="currentColor" />
              </svg>
            </span>
            <span className="pcard-tag">Provocarea</span>
            <h3>Succesul nu arată niciodată tot drumul.</h3>
            <p>
              Într-o lume în care succesul este adesea prezentat ca fiind rapid și simplu, liceenii au puține ocazii
               să vadă ce se află cu adevărat în spatele unui business. Greșelile, deciziile dificile, riscurile și 
               momentele de îndoială rămân, de cele mai multe ori, în afara poveștii.

            </p>
          </article>
          <article className="pcard solution reveal">
            <span className="blob blob-gold" />
            <span className="badge" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18h6M10 21h4" />
                <path d="M12 3a6 6 0 0 0-3.5 10.9c.5.4.8.9.9 1.6h5.2c.1-.7.4-1.2.9-1.6A6 6 0 0 0 12 3Z" />
              </svg>
            </span>
            <span className="pcard-tag">Soluția</span>
            <h3>Aducem realitatea mai aproape.</h3>
            <p>
              VISIO le oferă liceenilor acces direct la experiența celor care au construit deja. Prin conversații autentice
               și workshopuri interactive, transformăm poveștile de succes în lecții reale și oferim o perspectivă realistă
                asupra antreprenoriatului dincolo de rezultate.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
