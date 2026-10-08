 "use client";

interface Speaker {
  id: string;
  name: string;
  role: string;
  photo?: string;
  photoClass?: string;
  badge?: string;
}

const moderator: Speaker = {
  id: "cosmin",
  name: "Cosmin Sava",
  role: "Project Manager\nVSFA",
  photoClass: "p-cosmin",
  badge: "MODERATOR",
};

const speakers: Speaker[] = [
  {
    id: "felixp",
    name: "Felix Pătrășcanu",
    role: "Co-fondator\nFAN Courier",
    photoClass: "p-felixp",
  },
  {
    id: "radu",
    name: "Radu Savopol",
    role: "Co-fondator & CEO\n5 to go",
    photoClass: "p-radu",
  },
  {
    id: "ioana",
    name: "Ioana Ceaușu",
    role: "COO\nThe Entrepreneurship Academy",
    photoClass: "p-ioana",
  },
  {
    id: "felixt",
    name: "Felix Tătaru",
    role: "Vicepreședinte IAA Global\nFondator & Președinte, GMP Group",
    photoClass: "p-felixt",
  },
  {
    id: "alex",
    name: "Alexandru Lăpușan",
    role: "Co-fondator & CEO\nZitec",
    photoClass: "p-alex",
  },
  {
    id: "cristina",
    name: "Cristina Bâtlan",
    role: "Co-fondator\nMusette",
    photoClass: "p-cristina",
  },
  {
    id: "marius",
    name: "Marius Bostan",
    role: "Fondator\nRePatriot",
    photoClass: "p-marius",
  },
  {
    id: "dana",
    name: "Dana Dima",
    role: "Vicepreședinte Retail & Private Banking\nBCR",
    photoClass: "p-dana",
  },
  {
    id: "tba9",
    name: "Speaker 09",
    role: "Urmează să fie anunțat",
  },
  {
    id: "tba10",
    name: "Speaker 10",
    role: "Urmează să fie anunțat",
  },
];

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  const isTBA = !speaker.photoClass;
  const photoClass = speaker.photoClass ? `speaker-photo ${speaker.photoClass}` : "speaker-photo silhouette";

  return (
    <article className={`speaker reveal${speaker.badge ? " moderator" : ""}`}>
      {isTBA && <span className="tba-badge">TBA</span>}
      {speaker.badge && <span className="tba-badge">{speaker.badge}</span>}
      <div className={photoClass} role="img" aria-label={isTBA ? "Speaker care urmează să fie anunțat" : `Portret ${speaker.name}`}>
        {isTBA && (
          <svg viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="8.2" r="4.2" />
            <path d="M3.5 20.5c0-4.6 3.8-7.3 8.5-7.3s8.5 2.7 8.5 7.3v.5h-17z" />
          </svg>
        )}
      </div>
      <h3>{speaker.name}</h3>
      <p className="role" dangerouslySetInnerHTML={{ __html: speaker.role.replace("\n", "<br/>") }} />
    </article>
  );
}

export default function Speakers() {
  return (
    <section className="section alt" id="speakers">
      <div className="container">
        <div className="center" style={{ marginBottom: "clamp(34px, 5vw, 54px)" }}>
          <span className="section-tag">Pe scenă</span>
          <h2 className="section-title">Speakeri</h2>
          <p className="section-intro">Primii invitați confirmați — și mulți alții urmează să fie anunțați. Pregătește-te pentru o scenă pe măsură.</p>
        </div>

        <div className="moderator-row">
          <SpeakerCard speaker={moderator} />
        </div>

        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}
