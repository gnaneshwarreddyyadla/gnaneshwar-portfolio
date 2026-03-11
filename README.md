# Gnaneshwar Yadla — Portfolio

Personal portfolio website built with **Next.js 14**, **React Three Fiber**, **Tailwind CSS**, and **Framer Motion**.

🔗 **Live:** [gnaneshwar-portfolio-theta.vercel.app](https://gnaneshwar-portfolio-theta.vercel.app)

---

## ✨ Features

- **3D Particle Starfield** — 3,000-point animated background with accent-colored highlights
- **Floating Geometric Shapes** — Wireframe octahedrons, torus rings, icospheres, and wobbling spheres in the hero section
- **Interactive Globe** — Rotating wireframe globe with data points on the surface
- **3D Laptop Model** — Code editor-styled laptop with animated syntax lines
- **Scroll Animations** — Smooth reveal animations on every section via Framer Motion
- **Cursor Glow** — Subtle radial glow that follows the mouse
- **Embedded Resume Viewer** — PDF resume with download and full-screen options
- **Fully Responsive** — Mobile-first design with adaptive 3D rendering

## 🛠 Tech Stack

| Category | Tools |
|----------|-------|
| Framework | Next.js 14, React 18, TypeScript |
| 3D Graphics | Three.js, React Three Fiber, Drei |
| Styling | Tailwind CSS, CSS Variables |
| Animation | Framer Motion, CSS Keyframes |
| Fonts | Syne, IBM Plex Sans, JetBrains Mono |
| Deployment | Vercel |

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles, grain overlay, mesh gradient
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page composing all sections
├── components/
│   ├── three/
│   │   ├── StarField.tsx    # 3D particle starfield background
│   │   ├── FloatingShapes.tsx # Wireframe geometric shapes
│   │   ├── GlobeScene.tsx   # Interactive rotating globe
│   │   └── LaptopScene.tsx  # 3D laptop with code editor
│   ├── Navbar.tsx           # Fixed navigation with mobile menu
│   ├── Hero.tsx             # Hero section with 3D shapes
│   ├── About.tsx            # About section with globe
│   ├── Experience.tsx       # Timeline of work experience
│   ├── Projects.tsx         # Project cards with laptop model
│   ├── Skills.tsx           # Skills grid by category
│   ├── Resume.tsx           # Embedded PDF resume viewer
│   ├── Contact.tsx          # Contact section and footer
│   ├── ScrollReveal.tsx     # Scroll-triggered animation wrapper
│   ├── SectionHeading.tsx   # Numbered section headers
│   └── CursorGlow.tsx       # Mouse-following glow effect
├── public/
│   └── Gnaneshwar_Yadla_Resume.pdf
├── tailwind.config.js
├── next.config.js
└── package.json
```

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/gnaneshwarreddyyadla/gnaneshwar-portfolio.git
cd gnaneshwar-portfolio

# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Deployment

This project is configured for **Vercel**. Push to `main` and Vercel auto-deploys.

```bash
# Or deploy manually
npx vercel
```

## 📄 Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | About | Bio, education, location with 3D globe |
| 02 | Experience | Timeline — NeuralSeek, Wipro (DE → DA → Intern), Presidency |
| 03 | Projects | Airbnb ELT Pipeline, Neural IrisGuard with 3D laptop |
| 04 | Skills | 7 categories — Languages, Warehousing, ETL, Cloud, BI, ML, DevOps |
| 05 | Resume | Embedded PDF viewer with download |
| 06 | Contact | Email, LinkedIn, GitHub links |

## 📬 Contact

- **Email:** gnaneshwarreddy056@gmail.com
- **LinkedIn:** [linkedin.com/in/gnaneshwar-reddy-](https://linkedin.com/in/gnaneshwar-reddy-)
- **Portfolio:** [gnaneshwar-portfolio-theta.vercel.app](https://gnaneshwar-portfolio-theta.vercel.app)

---

Built by Gnaneshwar Yadla
