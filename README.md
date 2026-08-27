# VISIO 2026 — Conference Website

A modern, single-page presentation site for the VISIO conference (a Laude-Reut
initiative), built from the VISIO PowerPoint. Static HTML/CSS/JS — no build step,
no backend, no login.

## Open it

Double-click **`index.html`**, or drag it into any browser.
For the smoothest experience (fonts, etc.) you can serve it locally:

```bash
cd site
python -m http.server 8000
# then open http://localhost:8000
```

## Structure

```
site/
├── index.html          # all page content (Romanian)
├── css/styles.css      # design system + layout (brand colors from the deck)
├── js/main.js          # sticky nav, mobile menu, scroll reveals
└── assets/img/         # logos, photos, and the two speaker boards
```

## Content (slides 1–9; the last two slides were intentionally excluded)

Hero (centered, with a wide conference photo banner) · Who we are ·
The challenge / solution · Speakers (10 TBA) · Program (3 panels + workshops) ·
Contact + footer.

**Hero photo:** the banner loads `assets/img/conference.jpg`. Until that file exists it
falls back to `students.png`. Drop the conference photo at
`site/assets/img/conference.jpg` to make it appear.

## Brand (extracted from the presentation)

- Deep navy `#131753`, royal blue `#18347C`, gold accent `#FFC40E`, light-blue bg `#EEF4FC`
- VISIO logo (rising-arrow "V") and Laude-Reut logo
- Circular photo frames, blue/gold circle motifs

## Notes / assumptions (easy to change)

- **Language:** Romanian.
- **Date:** shown as TBA ("Urmează / Va fi anunțată") in the hero and footer.
- **Speakers:** currently a **teaser** — 8 black-silhouette cards labelled "Urmează
  să fie anunțat" (names, bios and faces hidden). The real photos + bios are still in
  the project, ready to reveal:
  - portraits in `assets/speakers/` (from Zitec, RePatriot, Aspen Institute, The
    Recursive, ilovefailure.world);
  - the reveal styles (`.speaker-photo.p-*`, `.speaker-bio`, expand-on-click JS) are
    still in `styles.css` / `main.js`. The names + bios are recorded in
    `assets/speakers/speakers-data.md`, so the full photo/name/bio cards can be
    restored whenever the line-up is announced.
- **Third panel:** the deck named two panels ("courage to begin", "courage to dream");
  the third is shown as *to be announced*.
- **Instagram:** linked as `@visio.initiative` (inferred from the handle on the deck
  and the `visioinitiative.ro` email). Update the URL in `index.html` if different.
- **Venue:** "Bucharest · Venue to be announced" (no venue was in the deck).
