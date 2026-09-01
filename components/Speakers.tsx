 "use client";

interface Speaker {
  id: string;
  name: string;
  role: string;
  photo?: string;
  photoClass?: string;
}

const speakers: Speaker[] = [
  {
    id: "radu",
    name: "Radu Savopol",
    role: "Co-fondator\n5 to go",
    photoClass: "p-radu",
  },
  {
    id: "ioana",
    name: "Ioana Ceaușu",
    role: "COO\nThe Entrepreneurship Academy",
    photoClass: "p-ioana",
  },
  {
    id: "tba3",
    name: "Speaker 03",
    role: "Urmează să fie anunțat",
  },
  {
    id: "tba4",
    name: "Speaker 04",
    role: "Urmează să fie anunțat",
  },
  {
    id: "tba5",
    name: "Speaker 05",
    role: "Urmează să fie anunțat",
  },
  {
    id: "tba6",
    name: "Speaker 06",
    role: "Urmează să fie anunțat",
  },
  {
    id: "tba7",
    name: "Speaker 07",
    role: "Urmează să fie anunțat",
  },
  {
    id: "tba8",
    name: "Speaker 08",
    role: "Urmează să fie anunțat",
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
    <article className="speaker reveal">
      {isTBA && <span className="tba-badge">TBA</span>}
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

        <div className="speakers-grid">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </div>
    </section>
  );
}
