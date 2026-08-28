"use client";

import { useState } from "react";

interface Speaker {
  id: string;
  name: string;
  role: string;
  photo?: string;
  photoClass?: string;
  bio?: string;
}

const speakers: Speaker[] = [
  {
    id: "radu",
    name: "Radu Savopol",
    role: "Co-fondator\n5 to go",
    photoClass: "p-radu",
    bio: "A co-fondat 5 to go în 2015 — pornit pe un șervețel — acum una dintre cele mai mari francize de cafea din Europa de Est.",
  },
  {
    id: "ioana",
    name: "Ioana Ceaușu",
    role: "COO\nThe Entrepreneurship Academy",
    photoClass: "p-ioana",
    bio: "COO al The Entrepreneurship Academy și fost cadru universitar, cu doctorat în metode de business, axată pe cum ajută acceleratoarele fondatorii la început de drum.",
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
  const [expanded, setExpanded] = useState(false);
  const [pop, setPop] = useState(false);

  const handleToggle = () => {
    if (!speaker.bio) return;
    setExpanded(!expanded);
    setPop(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if ((e.key === "Enter" || e.key === " ") && speaker.bio) {
      e.preventDefault();
      handleToggle();
    }
  };

  const isTBA = !speaker.bio;
  const photoClass = speaker.photoClass ? `speaker-photo ${speaker.photoClass}` : "speaker-photo silhouette";

  return (
    <article
      className={`speaker reveal${expanded ? " expanded" : ""}${pop ? " pop" : ""}`}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      tabIndex={speaker.bio ? 0 : -1}
      role={speaker.bio ? "button" : "article"}
      aria-expanded={expanded}
      onAnimationEnd={() => setPop(false)}
    >
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
      {speaker.bio && (
        <>
          <span className="tap-hint" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </span>
          <p className="speaker-bio">{speaker.bio}</p>
        </>
      )}
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
