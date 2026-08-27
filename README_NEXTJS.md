# VISIO 2026 — Next.js Conference Website

This is a **Next.js 15** conversion of the original VISIO 2026 conference website, refactored from static HTML/CSS/JS into a modern React app with TypeScript.

## What's Changed

### Structure
- **Framework**: Next.js 15 (App Router) with TypeScript
- **Styling**: Global CSS (no build needed; identical to original)
- **Components**: Split into reusable React components:
  - `Header` — sticky navigation with mobile toggle
  - `Hero` — hero section with animations
  - `About` — "Who we are" section
  - `Challenge` — Problem/Solution split
  - `Speakers` — expandable speaker cards
  - `Program` — Panels and workshops
  - `CTA` — Call-to-action band
  - `Footer` — Site footer with metadata updates

### Features Preserved
✅ Responsive mobile-first layout  
✅ Scroll-reveal animations (via React hooks)  
✅ Interactive speaker cards (expand/collapse)  
✅ Sticky header with scroll shadow  
✅ Mobile navigation toggle  
✅ All original brand colors and typography  
✅ Accessibility: semantic HTML, ARIA labels, focus states  

### New Improvements
✨ TypeScript for type safety  
✨ Next.js Font Optimization (Google Fonts via `next/font`)  
✨ Metadata API (no more manual `<head>` tags)  
✨ React hooks for interactivity (cleaner than vanilla JS)  
✨ Image optimization (ready for `next/image`)  
✨ SEO-friendly with metadata  

## Getting Started

### Prerequisites
- **Node.js** 18+ and **npm** (or yarn/pnpm)

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Open http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout (fonts, metadata)
│   ├── page.tsx            # Main page (composes all components)
│   └── globals.css         # Global styles (migrated from css/styles.css)
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Challenge.tsx
│   ├── Speakers.tsx        # Interactive speaker cards
│   ├── Program.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── public/
│   └── assets/             # Images, logos, speaker photos
├── legacy/                 # Original HTML/CSS/JS (reference)
├── package.json
├── tsconfig.json
├── next.config.mjs
└── .gitignore
```

## Key Migrated Elements

### Sticky Header & Mobile Nav
- `Header.tsx` uses `useState` and `useEffect` for:
  - Scroll detection (toggle shadow)
  - Mobile menu toggle
  - Link click handlers (close menu)

### Scroll Reveals
- Components use `IntersectionObserver` (same as original)
- Adds `.reveal` class and waits for visibility to trigger `.in`
- Respects `prefers-reduced-motion`

### Speaker Expansion
- `Speakers.tsx` manages local state for each card
- Click or keyboard (Enter/Space) to toggle `.expanded`
- Pop animation on toggle
- Only cards with bios are interactive

### Animations & Styling
- All CSS animations (hero arrows, blobs, pulses, etc.) are intact
- Brand palette (`--navy`, `--gold`, etc.) still live in `globals.css`
- Responsive breakpoints unchanged

## Content Updates

### Speaker Photos
Real speaker photos are in `public/assets/speakers/`. To reveal confirmed speakers:

Edit `components/Speakers.tsx` and update the `speakers` array with real data:
```tsx
{
  id: "felixp",
  name: "Felix Pătrășcanu",
  role: "Co-fondator\nFAN Courier",
  photoClass: "p-felixp",
  bio: "A co-fondat FAN Courier în 1997, transformând-o dintr-un birou în cel mai mare curier cu capital românesc.",
}
```

The CSS classes are already defined in `app/globals.css`:
```css
.speaker-photo.p-felixp { background-image: url("/assets/speakers/felix-patrascanu.jpg"); background-position: 50% 20%; }
```

### Workshops
Update the workshops list in `components/Program.tsx`:
```tsx
<div className="chip reveal">
  <span className="ic" aria-hidden="true">/* icon */</span>
  <div>
    <b>Abilități de negociere</b>
    <span>Învață & evoluează</span>
  </div>
</div>
```

### Metadata & Meta Tags
Edit `app/layout.tsx` to update:
- Title, description, OG tags
- Favicon path
- Viewport settings

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel
```

### Other Platforms
- **Netlify**: Supports Next.js out of the box
- **Docker**: Multi-stage build with `npm run build` → `npm start`
- **Traditional Hosting**: Build (`npm run build`) and deploy the `.next` folder

## Environment Variables

Add to `.env.local`:
```
# Example: future analytics, contact form integration
NEXT_PUBLIC_ANALYTICS_ID=your_id_here
```

## Linting & Type Checking

```bash
npm run lint  # ESLint (configured for Next.js best practices)
```

## FAQ

**Q: Can I still edit the CSS without rebuilding?**
Yes! Global styles in `app/globals.css` are hot-reloaded during dev.

**Q: How do I add new components?**
Create a new `.tsx` file in `components/`, export it, and import in `app/page.tsx`.

**Q: Where do I put new images?**
Place them in `public/assets/` and reference as `/assets/...` (Next.js serves them automatically).

**Q: How do I add a form for contact?**
You can use a 3rd-party service (Formspree, Netlify Forms) or build a route handler in `app/api/contact/route.ts`.

## Support & References

- [Next.js Docs](https://nextjs.org/docs)
- [React Hooks](https://react.dev/reference/react)
- [TypeScript](https://www.typescriptlang.org/)

---

**Original Build Date**: August 2026  
**Next.js Migration**: August 2026  
**Status**: Production-ready
