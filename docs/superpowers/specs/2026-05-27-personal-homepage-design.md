# Personal Portfolio Homepage - Design Spec

## Overview

A single-page personal portfolio/resume website built with React, featuring a lively creative style with bright colors, rounded elements, and playful animations. The site serves as a digital resume and project showcase.

## Tech Stack

| Concern | Choice | Reason |
|---------|--------|--------|
| Build tool | Vite | Fast dev server and builds |
| Framework | React 18 + JSX | Component-based, extensible |
| Animation | framer-motion | Scroll animations, page transitions, hover effects |
| Styling | CSS Modules | Scoped styles, no naming conflicts |
| Icons | react-icons | Social icons + tech stack icons |
| Fonts | Google Fonts (Poppins + Inter) | Modern, readable typography |
| Deployment | Static export | Deployable to GitHub Pages / Vercel / Netlify |

## Project Structure

```
src/
  components/
    Hero.jsx          # Avatar + intro
    Skills.jsx        # Skills showcase
    Projects.jsx      # Project portfolio
    Timeline.jsx      # Experience timeline
    Footer.jsx        # Social links + copyright
    Navbar.jsx        # Top navigation bar
  data/
    content.js        # All copy, project data, skills data centralized here
  styles/
    globals.css       # Global styles + CSS custom properties
  App.jsx
  main.jsx
```

## Visual Design Language

### Color Palette

| Role | Hex | Usage |
|------|-----|-------|
| Primary | `#FF6B6B` (coral orange) | Buttons, accents, highlights |
| Secondary | `#FFD93D` (bright yellow) | Secondary accents, gradients |
| Accent | `#6BCB77` (mint green) | Success states, decorative |
| Text | `#4D4D4D` (dark purple-gray) | Body text |
| Background | `#FAFAFA` | Page background |
| Card | `#FFFFFF` | Card surfaces |

Gradients: Primary-to-secondary linear gradient used on buttons and emphasis elements.

### Typography

- **Headings:** Poppins (rounded, modern, playful)
- **Body:** Inter (clean, readable)
- Both loaded via Google Fonts

### Shape & Spacing

- Card border-radius: `16px`
- Button border-radius: `50px` (pill shape)
- Circular avatar
- Card shadows with hover elevation effect
- Generous whitespace between sections

### Animation (framer-motion)

- Section scroll-in: fade + slide up
- Skill icons: bounce on hover
- Project cards: scale up + shadow deepen on hover
- Navbar: backdrop-blur glass effect appears on scroll
- Hero: text slides in from left, avatar bounces in from right

## Component Specifications

### 1. Navbar

- Fixed position at top of page
- Initially transparent background
- After scrolling past Hero: white background with backdrop-filter blur (glass effect)
- Left side: name/logo text
- Right side: navigation links (About / Skills / Projects / Experience)
- Clicking a link smooth-scrolls to the corresponding section anchor

### 2. Hero (First Screen)

- Two-column layout on desktop, stacked on mobile
- **Left column:**
  - Large greeting: "Hi, I'm [Name]"
  - One-line role/tagline
  - CTA button: "View My Work" (scrolls to Projects section)
- **Right column:**
  - Circular avatar image
  - Floating decorative elements around the avatar (small shapes/emojis)
- **Background:** Light gradient (primary to secondary, very subtle)
- **Entry animation:** Text slides in from left, avatar bounces in from right

### 3. Skills

- Section heading + subtitle
- Skills grouped by category (e.g., Frontend / Backend / Tools)
- Each category: grid of cards
- Each card: tech icon + skill name + proficiency indicator (progress bar or star rating)
- Card hover: slight elevation + icon bounce animation

### 4. Projects

- Grid layout: 2-3 columns on desktop, 1 column on mobile
- Each project card:
  - Screenshot/cover image at top
  - Project title
  - Brief description
  - Tech stack tags (small colored pills)
  - Action buttons: GitHub link + Live demo link
- Card hover: scale up slightly + shadow deepens

### 5. Timeline (Experience)

- Vertical timeline layout
- Alternating left/right placement on desktop, single column on mobile
- Each node:
  - Date/time period
  - Company or school name
  - Role or degree
  - Brief description
- Each node fades in when scrolled into viewport

### 6. Footer

- Row of social link icons (GitHub / LinkedIn / Email, etc.)
- Copyright text below
- Clean and minimal design

## Data Management

All content is centralized in `src/data/content.js`:

- Personal info (name, tagline, avatar path)
- Skills array grouped by category
- Projects array with title, description, image, tags, links
- Timeline entries with date, title, role, description
- Social links with icon name and URL

This separation allows easy content updates without touching component code.

## Responsive Design

- **Desktop:** Full layout with multi-column grids, alternating timeline
- **Tablet:** Adjusted column counts, stacked timeline
- **Mobile:** Single column layout, stacked Hero, simplified navigation (hamburger menu if needed)

## Deployment

The project builds to static files via `vite build`. The output `dist/` folder can be deployed to any static hosting service:

- GitHub Pages
- Vercel
- Netlify
- Any static file server

## Out of Scope

- Blog functionality (can be added later as a separate route)
- Backend / CMS integration
- Contact form (using social links only)
- Dark mode toggle (can be added later)
- i18n / multi-language support
