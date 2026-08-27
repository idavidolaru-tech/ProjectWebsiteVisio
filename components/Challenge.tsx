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
            <h3>Succesul e rareori atât de simplu pe cât pare.</h3>
            <p>
              De prea multe ori, elevii cred că succesul și câștigurile financiare vin fără efort. În realitate,
              tinerii au foarte puține ocazii să discute direct cu antreprenori despre dificultățile, eșecurile și
              provocările reale din spatele unei afaceri.
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
            <h3>VISIO face legătura.</h3>
            <p>
              Într-o singură zi, elevii intră în conversații sincere cu fondatori și lideri — prin paneluri dinamice și
              ateliere practice care arată ce înseamnă cu adevărat să construiești o afacere.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
