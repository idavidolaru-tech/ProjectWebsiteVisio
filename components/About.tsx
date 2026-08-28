export default function About() {
  return (
    <section className="section alt" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy reveal">
            <span className="section-tag">Cine suntem</span>
            <h2 className="section-title">Mai mult decât o conferință — o întâlnire între generații.</h2>
            <p>
              Reunim <strong>liceeni ambițioși</strong> și unii dintre cei mai apreciați antreprenori și lideri de
              business din România, într-o experiență unică de inspirație, dialog autentic și învățare.
            </p>
            <p>
              Prin <strong>trei paneluri dinamice</strong> și ateliere practice — inspirate de cursurile celor mai
              prestigioase universități din străinătate — tinerii descoperă secretele din spatele afacerilor de succes
              și lecții valoroase pentru viitorul lor.
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
            <img className="round-photo" src="/assets/img/students.png" alt="Liceeni implicați la o sesiune VISIO" />
          </div>
        </div>
      </div>
    </section>
  );
}
