export default function About() {
  return (
    <section className="section alt" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy reveal">
            <span className="section-tag">Cine suntem</span>
            <h2 className="section-title">Mai mult decât o conferință — o întâlnire între generații.</h2>
            <p>
              VISIO este o <strong>conferință de antreprenoriat</strong> pentru liceenii curioși și ambițioși, cărora le oferim o
              perspectivă realistă și autentică asupra antreprenoriatului.
            </p>
            <p>
              Prin <strong>paneluri dinamice</strong> cu antreprenori și lideri de business și workshopuri interactive,
               aducem în fața lor nu doar reușitele, ci și alegerile dificile, provocările, eșecurile și lecțiile din spatele lor.
            </p>
            <div className="stat-row">
              <div className="stat">
                <b>3</b>
                <span>Paneluri dinamice</span>
              </div>
              <div className="stat">
                <b>4</b>
                <span>Ateliere practice</span>
              </div>
              <div className="stat">
                <b>15–18</b>
                <span>Vârsta participanților</span>
              </div>
            </div>
          </div>
          <div className="about-visual reveal">
            <span className="blob blob-gold" />
            <span className="blob blob-royal" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="round-photo" src="/assets/img/visio-crowd-cheering.jpeg" alt="Liceeni bucuroși, cu mâinile ridicate, la o sesiune VISIO" />
          </div>
        </div>
      </div>
    </section>
  );
}
