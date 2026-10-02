# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the Tulas International School homepage focusing on high conversion, fluid animations, and mobile responsiveness.

## 🚀 Live Demo
- **Live URL:** _add your Vercel / Netlify link_
- **Repository:** _add your GitHub link_

## 🛠 Tech Stack
- **Framework:** React 18 + Vite
- **Styling:** Plain CSS with design tokens (CSS variables), glassmorphism and gradient styling
- **Animations:** Framer Motion
- **Deployment:** Vercel

## ✨ Standout Features Implemented
1. **Custom Cursor:** spring-driven ring (`useSpring`) that grows over links/buttons; only mounted on hover-capable fine pointers, so it is hidden on touch devices.
2. **Scroll-Triggered Reveals:** `Reveal` wrapper plus staggered sport chips, using `whileInView` with `once: true` and 0.4-0.5s durations.
3. **Animated Theme Switcher:** spring toggle driven by CSS variables, persisted in `localStorage`, no flash on load.
4. **Scroll Progress Bar:** `useScroll` + `useSpring`, fixed at the top.

Also: magnetic buttons, aurora hero, spotlight stat cards, dual-row marquee, snap-scroll testimonials, floating pill navbar, count-up stats, reduced-motion support, semantic landmarks.

## 📦 Getting Started Locally
```bash
git clone https://github.com/<your-username>/tis-homepage-redesign.git
cd tis-homepage-redesign
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Component Architecture Overview
- `components/ui/` - Button
- `components/layout/` - Navbar (with mobile menu), Footer
- `components/sections/` - Hero, About, Sports, Rankings, Testimonials, Enquire
- `components/animation/` - ScrollProgress, CustomCursor, Reveal, ThemeToggle, Magnetic
- `hooks/` - useTheme, useFinePointer, useCountUp, useScrolled
- `data/` - all copy, stats and contact details

## Brand Identity Retained
Navy and yellow palette, copy, stats, rankings, sports list and contact details from tis.edu.in.

## Deploy
Import the repo in Vercel (framework preset: Vite). No environment variables needed.
