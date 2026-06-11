# Webfluence Consultants — React App

Built with **Vite + React**. All sections are componentised with CSS Modules.

## Quick Start

```bash
npm install
npm run dev        # localhost:5173
npm run build      # production build → dist/
npm run preview    # preview the production build
```

## Deploy

### Vercel (recommended — free)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → import the repo
3. Framework preset: **Vite** — click Deploy. Done.

### Netlify (free)
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → Add new site → Import from Git
3. Build command: `npm run build` · Publish dir: `dist` — click Deploy.

### Manual (any static host)
```bash
npm run build
# Upload the contents of /dist to your hosting provider
```

## Project Structure

```
src/
├── components/       # One .jsx + .module.css per section
│   ├── Navbar
│   ├── Hero
│   ├── Marquee
│   ├── Services
│   ├── About
│   ├── Stats
│   ├── Testimonials
│   ├── Process
│   ├── Work
│   ├── FAQ
│   ├── Contact
│   ├── Footer
│   ├── BackToTop
│   ├── ParticleCanvas
│   └── Reveal
├── data/
│   └── siteData.js   # All copy, services, projects, FAQs
├── hooks/
│   ├── useTypewriter.js
│   └── useScrollReveal.js
├── App.jsx
├── App.css
└── index.css
```

## Customisation

- **Content / copy**: edit `src/data/siteData.js`
- **Colours**: change CSS variables in `src/index.css`
- **WhatsApp number**: search for `WA_NUMBER` and replace
- **Images**: swap Unsplash URL in `About.jsx`
