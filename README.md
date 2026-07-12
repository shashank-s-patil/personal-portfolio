<div align="center">

  <h1>Shashank Patil</h1>
  <p><strong>Creative Frontend Developer</strong></p>
  <p>
    <a href="https://github.com/shashank-s-patil" target="_blank">GitHub</a>
    ·
    <a href="https://linkedin.com/in/shashank-s-patil" target="_blank">LinkedIn</a>
    ·
    <a href="mailto:shashankpatil297@gmail.com" target="_blank">Email</a>
  </p>

  <!-- Build status / Deploy badges -->
  <img src="https://img.shields.io/badge/Next.js-16-black?style=flat&logo=next.js" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19-blue?style=flat&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-v4-cyan?style=flat&logo=tailwindcss" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-green?style=flat&logo=mongodb" alt="MongoDB" />
</div>

---

## 📋 About

This is my **personal portfolio website** — a single-page application built to showcase my work, skills, and services.

**Who is this for?**
- **Freelance Clients** — Browse my services, past projects, and contact me directly for collaboration
- **Interviewers** — See my technical ability, code quality, and understanding of modern frontend architecture

> 🔗 **Live Demo:** *Coming soon*

---

## ✨ Features

### 🎨 UI / UX
| Feature | Details |
|---|---|
| **Dark Mode** | Persistent theme via `localStorage` with system preference detection & zero-flash inline script |
| **Scroll Animations** | Custom `IntersectionObserver`-based fade-up component with configurable delays |
| **Reading Progress Bar** | Thin gradient bar at the viewport top indicating scroll progress |
| **Mobile Hamburger Menu** | Full-screen overlay with animated close, dark mode toggle & Hire Me button |
| **"Hire Me" Modal** | Quick-access overlay with contact info and nav links |
| **Active Section Highlight** | Scroll-based detection updates the active nav link |
| **Animated Counters** | Number counting (projects, clients, delivery) triggered on scroll |
| **Smooth Scrolling** | All anchor links scroll smoothly to their section |
| **Floating Label Forms** | Contact form with icon-prefixed floating labels |
| **Skip-to-Content** | Accessibility-first keyboard navigation link |
| **Backdrop Blur** | Glassmorphism-style header and modal overlays |

### 📄 Sections
1. **Hero** — Profile picture with decorative blurs, "Available" badge, gradient headline, CTA buttons, social links, background grid pattern
2. **About** — Bio, info cards (location, email, availability), animated counters, resume download
3. **Skills** — Responsive grid of skill cards with icons, names, and level badges (Advanced / Intermediate / Learning) with hover effects
4. **Services** — 5 service cards (Responsive Dev, UI/UX, React/Next.js, Performance Optimization, Maintenance) with feature lists
5. **Projects** — Project cards with thumbnails, descriptions, tech tags, image hover overlays with GitHub & live links, "Featured" badges
6. **Contact** — Functional contact form + contact info cards (profile, email, WhatsApp, location) with decorative background blurs
7. **Footer** — Brand info, quick links, contact details, dynamic copyright year, scroll-to-top button

### ⚙️ Backend / API
- **Contact Form API** — `POST /api/messages` with server-side validation
- **MongoDB Storage** — Messages saved to a `messages` collection via Mongoose (cached connection singleton)
- **Email Notifications** — Styled HTML email sent via Nodemailer (SMTP) on form submission; degrades gracefully if unconfigured

### 🚀 Performance & SEO
- **Next.js App Router** — Server components, streaming, and automatic code splitting
- **TypeScript** — Strict mode with full type safety across components and data files
- **Tailwind CSS v4** — Utility-first styling with custom `dark:` variant
- **Image Optimization** — `next/image` with `sizes` attribute for responsive loading
- **Comprehensive Metadata** — Open Graph, Twitter Cards, keywords, author, robots directives
- **Inter Font** — Optimized via `next/font` with CSS variable

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript (strict) |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide React + React Icons |
| **Database** | MongoDB via Mongoose |
| **Email** | Nodemailer (SMTP) |
| **Animations** | Framer Motion + Custom IntersectionObserver components |
| **Font** | Inter (next/font) |
| **Linting** | ESLint (eslint-config-next) |

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.17+
- **npm** (or yarn / pnpm / bun)
- A **MongoDB** instance (Atlas or local)
- (Optional) **SMTP credentials** for email notifications

### Installation

```bash
# Clone the repository
git clone https://github.com/shashank-s-patil/personal-portfolio.git

# Navigate to the project directory
cd personal-portfolio

# Install dependencies
npm install
```

### Environment Variables

Copy the example env file and fill in your values:

```bash
cp .env.local.example .env.local
```

| Variable | Description | Required |
|---|---|---|
| `MONGODB_URI` | MongoDB connection string | Yes |
| `SMTP_HOST` | SMTP server hostname | No |
| `SMTP_PORT` | SMTP server port | No |
| `SMTP_USER` | SMTP username / email | No |
| `SMTP_PASS` | SMTP password or app password | No |
| `CONTACT_EMAIL` | Email to receive contact notifications | No |

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The app hot-reloads as you edit files.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Tailwind imports & custom keyframes
│   ├── layout.tsx           # Root layout (metadata, theme script, fonts)
│   ├── page.tsx             # Home page (assembles all sections)
│   └── api/
│       └── messages/
│           └── route.ts     # POST endpoint for contact form
├── components/
│   ├── Header.tsx           # Fixed navbar + mobile menu + "Hire Me" modal
│   ├── HeroSection.tsx      # Hero banner with profile pic, CTAs, socials
│   ├── AboutSection.tsx     # Bio, info cards, animated counters, CV
│   ├── SkillsSection.tsx    # Skill cards with level badges
│   ├── ServicesSection.tsx  # Service cards with features
│   ├── ProjectsSection.tsx  # Project cards with overlays & tags
│   ├── ContactSection.tsx   # Contact form + info cards
│   ├── Footer.tsx           # Footer with links, socials, scroll-to-top
│   ├── ScrollProgressBar.tsx   # Reading progress indicator
│   ├── ScrollAnimation.tsx     # Reusable fade-up animation wrapper
│   └── AnimatedCounter.tsx     # Scroll-triggered number counter
├── data/
│   ├── skills.ts            # Skills array
│   ├── services.ts          # Services array
│   └── projects.ts          # Projects array
├── lib/
│   ├── mongodb.ts           # Mongoose cached connection
│   └── mail.ts              # Nodemailer helper
└── models/
    └── Message.ts           # Mongoose message schema
```

---

## 🤝 Let's Work Together

I'm open to **full-time opportunities** and **freelance projects**. If you have a project in mind or just want to say hello, reach out!

- **GitHub:** [github.com/shashank-s-patil](https://github.com/shashank-s-patil)
- **LinkedIn:** [linkedin.com/in/shashank-s-patil](https://linkedin.com/in/shashank-s-patil)
- **Email:** *your-email@gmail.com*

---

<div align="center">
  <sub>Built with Next.js, React & Tailwind CSS · © 2026 Shashank Patil</sub>
</div>
