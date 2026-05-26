# Personal Portfolio Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page personal portfolio website with a lively creative style, featuring Hero, Skills, Projects, Timeline, and Footer sections with smooth animations.

**Architecture:** Vite + React 18 SPA with all sections on one scrollable page. Components consume centralized data from `src/data/content.js`. framer-motion handles all scroll-in and hover animations. CSS Modules provide scoped styling with CSS custom properties for the design system.

**Tech Stack:** Vite, React 18, framer-motion, CSS Modules, react-icons, Google Fonts (Poppins + Inter)

---

## File Structure

```
personal-homepage/
├── index.html                          # Entry HTML with Google Fonts
├── package.json                        # Dependencies
├── vite.config.js                      # Vite configuration
├── public/
│   └── avatar.png                      # Placeholder avatar
├── src/
│   ├── main.jsx                        # React entry point
│   ├── App.jsx                         # Root component, assembles all sections
│   ├── data/
│   │   └── content.js                  # All text, skills, projects, timeline, social links
│   ├── styles/
│   │   └── globals.css                 # CSS variables, reset, global typography
│   └── components/
│       ├── Navbar.jsx                  # Fixed nav with scroll-aware glass effect
│       ├── Navbar.module.css           # Navbar styles
│       ├── Hero.jsx                    # Hero section with avatar + intro
│       ├── Hero.module.css             # Hero styles
│       ├── Skills.jsx                  # Skills grid grouped by category
│       ├── Skills.module.css           # Skills styles
│       ├── Projects.jsx                # Project cards grid
│       ├── Projects.module.css         # Projects styles
│       ├── Timeline.jsx                # Experience timeline
│       ├── Timeline.module.css         # Timeline styles
│       ├── Footer.jsx                  # Social links + copyright
│       └── Footer.module.css           # Footer styles
```

---

## Task 1: Project Scaffolding & Dependencies

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `.gitignore`

- [ ] **Step 1: Create `package.json`**

```json
{
  "name": "personal-homepage",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "framer-motion": "^11.15.0",
    "react-icons": "^5.4.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^6.0.0"
  }
}
```

- [ ] **Step 2: Create `vite.config.js`**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

- [ ] **Step 3: Create `index.html`**

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Personal Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Create `.gitignore`**

```
node_modules
dist
.DS_Store
```

- [ ] **Step 5: Install dependencies**

```bash
npm install
```

Expected: `node_modules/` created, no errors.

- [ ] **Step 6: Commit**

```bash
git add package.json vite.config.js index.html .gitignore
git commit -m "chore: scaffold Vite + React project with dependencies"
```

---

## Task 2: Global Styles & Design System

**Files:**
- Create: `src/styles/globals.css`

- [ ] **Step 1: Create `src/styles/globals.css`**

```css
/* === CSS Custom Properties (Design Tokens) === */
:root {
  --color-primary: #FF6B6B;
  --color-secondary: #FFD93D;
  --color-accent: #6BCB77;
  --color-text: #4D4D4D;
  --color-text-light: #888888;
  --color-bg: #FAFAFA;
  --color-card: #FFFFFF;
  --color-gradient: linear-gradient(135deg, var(--color-primary), var(--color-secondary));

  --font-heading: 'Poppins', sans-serif;
  --font-body: 'Inter', sans-serif;

  --radius-card: 16px;
  --radius-button: 50px;

  --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.08);
  --shadow-card-hover: 0 8px 24px rgba(0, 0, 0, 0.15);

  --section-padding: 80px 0;
  --container-width: 1100px;
}

/* === Reset === */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  color: var(--color-text);
  background-color: var(--color-bg);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  line-height: 1.2;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

ul {
  list-style: none;
}

/* === Utility === */
.container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
}

.section-subtitle {
  text-align: center;
  color: var(--color-text-light);
  margin-bottom: 48px;
  font-size: 1.05rem;
}

/* === Scrollbar === */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-bg);
}

::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 4px;
}
```

- [ ] **Step 2: Commit**

```bash
git add src/styles/globals.css
git commit -m "feat: add global styles and design tokens"
```

---

## Task 3: Content Data File

**Files:**
- Create: `src/data/content.js`

- [ ] **Step 1: Create `src/data/content.js`**

```js
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaFigma } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiVite } from 'react-icons/si'

export const personalInfo = {
  name: 'Your Name',
  tagline: 'Full-Stack Developer & Creative Problem Solver',
  avatarUrl: '/avatar.png',
}

export const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
]

export const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, level: 90 },
      { name: 'JavaScript', icon: SiJavascript, level: 95 },
      { name: 'TypeScript', icon: SiTypescript, level: 80 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 85 },
      { name: 'Python', icon: FaPython, level: 80 },
      { name: 'MongoDB', icon: SiMongodb, level: 75 },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 70 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt, level: 90 },
      { name: 'Docker', icon: FaDocker, level: 70 },
      { name: 'Figma', icon: FaFigma, level: 65 },
      { name: 'Vite', icon: SiVite, level: 85 },
    ],
  },
]

export const projects = [
  {
    title: 'Project Alpha',
    description: 'A full-stack web application with real-time collaboration features and modern UI design.',
    image: 'https://placehold.co/600x400/FF6B6B/FFFFFF?text=Project+Alpha',
    tags: ['React', 'Node.js', 'WebSocket'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Project Beta',
    description: 'An AI-powered dashboard that visualizes data with interactive charts and smart insights.',
    image: 'https://placehold.co/600x400/FFD93D/4D4D4D?text=Project+Beta',
    tags: ['TypeScript', 'Python', 'D3.js'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Project Gamma',
    description: 'A mobile-first e-commerce platform with smooth animations and seamless checkout flow.',
    image: 'https://placehold.co/600x400/6BCB77/FFFFFF?text=Project+Gamma',
    tags: ['React', 'Tailwind', 'Stripe'],
    github: 'https://github.com',
    live: null,
  },
]

export const timeline = [
  {
    date: '2023 - Present',
    title: 'Company A',
    role: 'Senior Frontend Developer',
    description: 'Leading the frontend team, building scalable component libraries and improving performance.',
  },
  {
    date: '2021 - 2023',
    title: 'Company B',
    role: 'Full-Stack Developer',
    description: 'Developed REST APIs and React-based dashboards for enterprise clients.',
  },
  {
    date: '2017 - 2021',
    title: 'University X',
    role: 'B.S. Computer Science',
    description: 'Focused on software engineering and human-computer interaction. Graduated with honors.',
  },
]

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Email', url: 'mailto:your@email.com' },
]
```

- [ ] **Step 2: Create placeholder avatar directory**

```bash
mkdir -p public
```

Note: `public/avatar.png` needs a real image file. The site will still run with a broken image icon until replaced.

- [ ] **Step 3: Commit**

```bash
git add src/data/content.js
git commit -m "feat: add centralized content data file"
```

---

## Task 4: App Shell & Entry Point

**Files:**
- Create: `src/main.jsx`
- Create: `src/App.jsx`

- [ ] **Step 1: Create `src/main.jsx`**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

- [ ] **Step 2: Create `src/App.jsx`**

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
      </main>
      <Footer />
    </>
  )
}

export default App
```

Note: This will not run yet because the component files don't exist. We'll create them in the following tasks.

- [ ] **Step 3: Commit**

```bash
git add src/main.jsx src/App.jsx
git commit -m "feat: add App shell and React entry point"
```

---

## Task 5: Navbar Component

**Files:**
- Create: `src/components/Navbar.jsx`
- Create: `src/components/Navbar.module.css`

- [ ] **Step 1: Create `src/components/Navbar.module.css`**

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 16px 0;
  transition: background-color 0.3s ease, backdrop-filter 0.3s ease, box-shadow 0.3s ease;
}

.navbar.scrolled {
  background-color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.navContent {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-primary);
}

.links {
  display: flex;
  gap: 32px;
}

.links a {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--color-text);
  transition: color 0.2s ease;
  position: relative;
}

.links a:hover {
  color: var(--color-primary);
}

.links a::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-gradient);
  transition: width 0.3s ease;
}

.links a:hover::after {
  width: 100%;
}

/* Mobile */
.menuButton {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--color-text);
  cursor: pointer;
}

@media (max-width: 768px) {
  .links {
    display: none;
  }

  .links.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    padding: 16px 24px;
    gap: 16px;
  }

  .menuButton {
    display: block;
  }
}
```

- [ ] **Step 2: Create `src/components/Navbar.jsx`**

```jsx
import { useState, useEffect } from 'react'
import { navLinks, personalInfo } from '../data/content'
import { FaBars, FaTimes } from 'react-icons/fa'
import styles from './Navbar.module.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContent}>
        <a href="#" className={styles.logo}>
          {personalInfo.name}
        </a>
        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          ))}
        </div>
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.jsx src/components/Navbar.module.css
git commit -m "feat: add Navbar with scroll-aware glass effect and mobile menu"
```

---

## Task 6: Hero Component

**Files:**
- Create: `src/components/Hero.jsx`
- Create: `src/components/Hero.module.css`

- [ ] **Step 1: Create `src/components/Hero.module.css`**

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, rgba(255, 107, 107, 0.08), rgba(255, 217, 61, 0.08));
  padding-top: 80px;
}

.heroContent {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 64px;
  width: 100%;
}

.text {
  flex: 1;
}

.greeting {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 16px;
}

.highlight {
  background: var(--color-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tagline {
  font-size: 1.2rem;
  color: var(--color-text-light);
  margin-bottom: 32px;
  max-width: 480px;
}

.cta {
  display: inline-block;
  padding: 14px 36px;
  background: var(--color-gradient);
  color: white;
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: var(--radius-button);
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
}

.cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 107, 107, 0.35);
}

.avatarWrapper {
  flex-shrink: 0;
  position: relative;
}

.avatar {
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-card);
  box-shadow: var(--shadow-card);
}

.floatingEmoji {
  position: absolute;
  font-size: 2rem;
  animation: float 3s ease-in-out infinite;
}

.emoji1 {
  top: -10px;
  right: -10px;
  animation-delay: 0s;
}

.emoji2 {
  bottom: 20px;
  left: -20px;
  animation-delay: 1s;
}

.emoji3 {
  top: 50%;
  right: -30px;
  animation-delay: 2s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

/* Mobile */
@media (max-width: 768px) {
  .heroContent {
    flex-direction: column-reverse;
    text-align: center;
    gap: 40px;
  }

  .greeting {
    font-size: 2.2rem;
  }

  .tagline {
    margin-left: auto;
    margin-right: auto;
  }

  .avatar {
    width: 200px;
    height: 200px;
  }
}
```

- [ ] **Step 2: Create `src/components/Hero.jsx`**

```jsx
import { motion } from 'framer-motion'
import { personalInfo } from '../data/content'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroContent}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className={styles.greeting}>
            Hi, I'm <span className={styles.highlight}>{personalInfo.name}</span>
          </h1>
          <p className={styles.tagline}>{personalInfo.tagline}</p>
          <a href="#projects" className={styles.cta}>
            View My Work
          </a>
        </motion.div>

        <motion.div
          className={styles.avatarWrapper}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        >
          <img
            src={personalInfo.avatarUrl}
            alt={personalInfo.name}
            className={styles.avatar}
          />
          <span className={`${styles.floatingEmoji} ${styles.emoji1}`}>&#x2728;</span>
          <span className={`${styles.floatingEmoji} ${styles.emoji2}`}>&#x1F680;</span>
          <span className={`${styles.floatingEmoji} ${styles.emoji3}`}>&#x1F3A8;</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.jsx src/components/Hero.module.css
git commit -m "feat: add Hero section with avatar, intro, and entry animations"
```

---

## Task 7: Skills Component

**Files:**
- Create: `src/components/Skills.jsx`
- Create: `src/components/Skills.module.css`

- [ ] **Step 1: Create `src/components/Skills.module.css`**

```css
.skills {
  padding: var(--section-padding);
}

.categoryTitle {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 20px;
  margin-top: 40px;
  color: var(--color-primary);
}

.categoryTitle:first-of-type {
  margin-top: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.card {
  background: var(--color-card);
  border-radius: var(--radius-card);
  padding: 24px;
  box-shadow: var(--shadow-card);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 12px;
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-card-hover);
}

.iconWrapper {
  font-size: 2.5rem;
  color: var(--color-primary);
  transition: transform 0.3s ease;
}

.card:hover .iconWrapper {
  transform: scale(1.2);
}

.skillName {
  font-family: var(--font-heading);
  font-weight: 600;
  font-size: 1rem;
}

.progressTrack {
  width: 100%;
  height: 8px;
  background: #eee;
  border-radius: 4px;
  overflow: hidden;
}

.progressFill {
  height: 100%;
  background: var(--color-gradient);
  border-radius: 4px;
  transition: width 1s ease;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .card {
    padding: 16px;
  }
}
```

- [ ] **Step 2: Create `src/components/Skills.jsx`**

```jsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { skillCategories } from '../data/content'
import styles from './Skills.module.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function SkillCard({ skill }) {
  const Icon = skill.icon
  return (
    <motion.div className={styles.card} variants={cardVariants}>
      <div className={styles.iconWrapper}>
        <Icon />
      </div>
      <span className={styles.skillName}>{skill.name}</span>
      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          style={{ width: `${skill.level}%` }}
        />
      </div>
    </motion.div>
  )
}

function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className={styles.skills} id="skills">
      <div className="container" ref={ref}>
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>

        {skillCategories.map((group) => (
          <div key={group.category}>
            <h3 className={styles.categoryTitle}>{group.category}</h3>
            <motion.div
              className={styles.grid}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              {group.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Skills.jsx src/components/Skills.module.css
git commit -m "feat: add Skills section with grouped cards and scroll animations"
```

---

## Task 8: Projects Component

**Files:**
- Create: `src/components/Projects.jsx`
- Create: `src/components/Projects.module.css`

- [ ] **Step 1: Create `src/components/Projects.module.css`**

```css
.projects {
  padding: var(--section-padding);
  background: linear-gradient(180deg, var(--color-bg) 0%, #fff 100%);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 28px;
}

.card {
  background: var(--color-card);
  border-radius: var(--radius-card);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--shadow-card-hover);
}

.image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.body {
  padding: 24px;
}

.title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 8px;
}

.description {
  font-size: 0.95rem;
  color: var(--color-text-light);
  margin-bottom: 16px;
  line-height: 1.5;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.tag {
  font-size: 0.8rem;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: var(--radius-button);
  background: rgba(255, 107, 107, 0.1);
  color: var(--color-primary);
}

.links {
  display: flex;
  gap: 16px;
}

.link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-primary);
  transition: color 0.2s ease;
}

.link:hover {
  color: var(--color-text);
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 2: Create `src/components/Projects.jsx`**

```jsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects } from '../data/content'
import styles from './Projects.module.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function ProjectCard({ project }) {
  return (
    <motion.div className={styles.card} variants={cardVariants}>
      <img
        src={project.image}
        alt={project.title}
        className={styles.image}
      />
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
        <div className={styles.links}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <FaGithub /> GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className={styles.projects} id="projects">
      <div className="container" ref={ref}>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Some things I've built</p>
        <motion.div
          className={styles.grid}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Projects.jsx src/components/Projects.module.css
git commit -m "feat: add Projects section with card grid and hover effects"
```

---

## Task 9: Timeline Component

**Files:**
- Create: `src/components/Timeline.jsx`
- Create: `src/components/Timeline.module.css`

- [ ] **Step 1: Create `src/components/Timeline.module.css`**

```css
.timeline {
  padding: var(--section-padding);
}

.timelineWrapper {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

/* The vertical line */
.timelineWrapper::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--color-gradient);
  transform: translateX(-50%);
}

.item {
  position: relative;
  width: 50%;
  padding: 0 40px 48px;
}

.item:nth-child(odd) {
  left: 0;
  text-align: right;
}

.item:nth-child(even) {
  left: 50%;
  text-align: left;
}

/* Dot on the timeline */
.dot {
  position: absolute;
  top: 8px;
  width: 16px;
  height: 16px;
  background: var(--color-primary);
  border: 3px solid var(--color-card);
  border-radius: 50%;
  box-shadow: 0 0 0 3px var(--color-primary);
  z-index: 1;
}

.item:nth-child(odd) .dot {
  right: -8px;
}

.item:nth-child(even) .dot {
  left: -8px;
}

.date {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-primary);
  margin-bottom: 4px;
}

.itemTitle {
  font-size: 1.15rem;
  font-weight: 700;
  margin-bottom: 4px;
}

.role {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-accent);
  margin-bottom: 8px;
}

.itemDescription {
  font-size: 0.9rem;
  color: var(--color-text-light);
  line-height: 1.5;
}

/* Mobile */
@media (max-width: 768px) {
  .timelineWrapper::before {
    left: 16px;
  }

  .item,
  .item:nth-child(odd),
  .item:nth-child(even) {
    width: 100%;
    left: 0;
    text-align: left;
    padding-left: 48px;
    padding-right: 0;
  }

  .item:nth-child(odd) .dot,
  .item:nth-child(even) .dot {
    left: 8px;
    right: auto;
  }
}
```

- [ ] **Step 2: Create `src/components/Timeline.jsx`**

```jsx
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { timeline } from '../data/content'
import styles from './Timeline.module.css'

function TimelineItem({ entry }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      className={styles.item}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.dot} />
      <div className={styles.date}>{entry.date}</div>
      <h3 className={styles.itemTitle}>{entry.title}</h3>
      <div className={styles.role}>{entry.role}</div>
      <p className={styles.itemDescription}>{entry.description}</p>
    </motion.div>
  )
}

function Timeline() {
  return (
    <section className={styles.timeline} id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My journey so far</p>
        <div className={styles.timelineWrapper}>
          {timeline.map((entry, index) => (
            <TimelineItem key={index} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Timeline.jsx src/components/Timeline.module.css
git commit -m "feat: add Timeline section with alternating layout and scroll animations"
```

---

## Task 10: Footer Component

**Files:**
- Create: `src/components/Footer.jsx`
- Create: `src/components/Footer.module.css`

- [ ] **Step 1: Create `src/components/Footer.module.css`**

```css
.footer {
  padding: 48px 0 32px;
  text-align: center;
  background: var(--color-card);
}

.socialLinks {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
}

.socialIcon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--color-bg);
  color: var(--color-text);
  font-size: 1.3rem;
  transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.socialIcon:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-4px);
}

.copyright {
  font-size: 0.85rem;
  color: var(--color-text-light);
}
```

- [ ] **Step 2: Create `src/components/Footer.jsx`**

```jsx
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { socialLinks, personalInfo } from '../data/content'
import styles from './Footer.module.css'

const iconMap = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Email: FaEnvelope,
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => {
            const Icon = iconMap[link.name] || FaEnvelope
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label={link.name}
              >
                <Icon />
              </a>
            )
          })}
        </div>
        <p className={styles.copyright}>
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.jsx src/components/Footer.module.css
git commit -m "feat: add Footer with social links and copyright"
```

---

## Task 11: Verify Build & Final Review

**Files:** No new files — verification only.

- [ ] **Step 1: Start the dev server**

```bash
npm run dev
```

Expected: Vite starts the dev server at `http://localhost:3000` and opens the browser. The page renders all sections: Navbar, Hero, Skills, Projects, Timeline, Footer.

- [ ] **Step 2: Visual check in browser**

Verify the following:
- Navbar is fixed at top, transparent initially, becomes glass-blurred on scroll
- Hero shows name, tagline, avatar, CTA button, and floating emojis with entry animation
- Skills section shows 3 category groups with icon cards and progress bars
- Projects section shows card grid with hover effects
- Timeline shows alternating left/right entries with scroll-in animation
- Footer shows social icons and copyright
- Smooth scrolling works when clicking nav links
- Mobile layout works (resize browser to < 768px): stacked Hero, hamburger menu, single-column grids

- [ ] **Step 3: Run the production build**

```bash
npm run build
```

Expected: Build completes without errors. `dist/` folder is created with `index.html`, JS bundle, and CSS files.

- [ ] **Step 4: Preview the production build**

```bash
npm run preview
```

Expected: Site renders correctly at the preview URL, matching dev server behavior.

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "chore: verify build and finalize portfolio site"
```

---

## Deployment Notes

After build, the `dist/` folder can be deployed to:

- **Vercel:** `npx vercel --prod` (auto-detects Vite)
- **Netlify:** Drag and drop `dist/` folder or connect git repo
- **GitHub Pages:** Push `dist/` contents to `gh-pages` branch, or use `vite-plugin-gh-pages`
