interface Partner {
  name: string;
  logo: string;
  showName?: boolean;
}

const partners: Partner[] = [
  { name: "Mega Image", logo: "/assets/img/Logo_Mega_Image.svg.webp" },
  { name: "Upgrade Education", logo: "/assets/img/upgrade-education-logo.svg", showName: true },
  { name: "Kandia", logo: "/assets/img/kandia-logo.png" },
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
            <div className="partner-card" key={partner.name}>
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
