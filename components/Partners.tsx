interface Partner {
  name: string;
  logo: string;
  showName?: boolean;
  wide?: boolean;
  tall?: boolean;
}

const partners: Partner[] = [
  { name: "Mega Image", logo: "/assets/img/Logo_Mega_Image.svg.webp" },
  { name: "Upgrade Education", logo: "/assets/img/upgrade-education-logo.svg", tall: true },
  { name: "The Entrepreneurship Academy", logo: "/assets/img/Logo-EA-Contact-Page.svg" },
  { name: "VSFA — Vreau să fiu antreprenor", logo: "/assets/img/vsfa-logo.png", wide: true },
];

export default function Partners() {
  return (
    <section className="section alt" id="partners">
      <div className="container">
        <div className="center" style={{ marginBottom: "clamp(10px, 2vw, 18px)" }}>
          <span className="section-tag">Alături de noi</span>
          <h2 className="section-title">Parteneri</h2>
          <p className="section-intro">Companiile care susțin VISIO și investesc în generația de antreprenori de mâine.</p>
        </div>

        <div className="partners-grid">
          {partners.map((partner) => (
            <div className={`partner-card${partner.wide ? " wide" : ""}${partner.tall ? " tall" : ""}`} key={partner.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={partner.logo} alt={partner.name} />
              {partner.showName && <span>{partner.name}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
