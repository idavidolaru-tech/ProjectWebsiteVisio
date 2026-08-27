# 🚀 Quick Start — VISIO 2026 Next.js

Your project is ready to go. Here's everything you need to know in 60 seconds.

## Start Developing

```bash
npm run dev
```

Open **http://localhost:3000** in your browser. Your site is live. ✅

**Hot-reload enabled**: Edit any `.tsx` file or `app/globals.css` and changes appear instantly.

## Build for Production

```bash
npm run build
npm start
```

## Project Layout

```
app/                    ← App Router (Next.js 15)
├── layout.tsx          ← Fonts, metadata, HTML structure
├── page.tsx            ← Main page (imports all components)
└── globals.css         ← All styles (31 KB)

components/            ← Reusable React components
├── Header.tsx          ← Navigation
├── Hero.tsx            ← Hero section
├── About.tsx           ← About section
├── Challenge.tsx       ← Problem/Solution
├── Speakers.tsx        ← Speaker grid (interactive)
├── Program.tsx         ← Panels + workshops
├── CTA.tsx             ← Contact call-to-action
└── Footer.tsx          ← Footer

public/               ← Static assets
└── assets/
    ├── img/          ← Logos, student photo
    └── speakers/     ← Speaker portraits
```

## Common Tasks

### Change Page Title/Metadata
Edit `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Your new title here",
  description: "Your description...",
};
```

### Update Speakers
Edit `components/Speakers.tsx`. Replace TBA speaker objects with real data:
```tsx
{
  id: "felixp",
  name: "Felix Pătrășcanu",
  role: "Co-fondator\nFAN Courier",
  photoClass: "p-felixp",
  bio: "A co-fondat FAN Courier în 1997...",
}
```

### Update Workshops
Edit `components/Program.tsx`, find the `.chips` section:
```tsx
<div className="chip reveal">
  <span className="ic">/* icon SVG */</span>
  <div>
    <b>Abilități de negociere</b>
    <span>Învață & evoluează</span>
  </div>
</div>
```

### Add New Images
1. Drop image in `public/assets/img/` or `public/assets/speakers/`
2. Reference in JSX as `src="/assets/img/filename.png"`

### Style Changes
Edit `app/globals.css` directly. No build step needed.

## Deploy

### Vercel (1 click, recommended)
```bash
npm install -g vercel
vercel login
vercel
```

### Netlify
```bash
npm run build
# Drag `.next` folder to Netlify
```

## File Sizes

| Item | Size |
|------|------|
| React + Next.js | ~100 KB (gzipped) |
| Your CSS | 31 KB |
| All images | 4.4 MB |
| **Total** | ~4.5 MB |

## Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001  # Use port 3001 instead
```

**Changes not showing?**
- Clear browser cache (Ctrl+Shift+Delete)
- Stop dev server (Ctrl+C) and restart (`npm run dev`)

**Build fails?**
- Check Node version: `node -v` (need 18+)
- Delete `node_modules` and `.next`, then `npm install`

## Next Level

Once you're comfortable, check out:
- **API Routes**: Create backend endpoints at `app/api/contact/route.ts`
- **Image Optimization**: Use `next/image` component for auto-optimization
- **Dark Mode**: Add theme toggle with CSS variables
- **Forms**: Integrate contact form (Formspree, Netlify Forms)
- **Analytics**: Add Google Analytics or Vercel Analytics
- **CMS**: Connect Contentful or Sanity for dynamic content

## Resources

- 📖 [Next.js Docs](https://nextjs.org/docs)
- ⚛️ [React Hooks](https://react.dev/reference/react)
- 📘 [TypeScript](https://www.typescriptlang.org/)
- 🎨 [CSS Guide](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

**That's it!** Your Next.js project is production-ready.

Questions? See `README_NEXTJS.md` or `MIGRATION_SUMMARY.md`.
