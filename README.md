# Personal Homepage

Personal academic homepage for **Yuqing He**, PhD candidate at the School of Mathematical Sciences, Zhejiang University.

## Live Site

**[https://mihiuggbklk.github.io/homepage/](https://mihiuggbklk.github.io/homepage/)**

## About

This is a single-page academic portfolio built with React and Vite, featuring:

- **Hero** — Introduction and bio
- **Research** — Research interests in optimization theory, machine learning theory, and data science
- **Publications** — Paper list with abstracts and links
- **CV** — Education history and awards
- **Footer** — Contact information and social links

## Tech Stack

- [React 18](https://react.dev/)
- [Vite 6](https://vite.dev/)
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [React Icons](https://react-icons.github.io/react-icons/)
- GitHub Pages + GitHub Actions for deployment

## Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Install & Run

```bash
git clone https://github.com/mihiuggbklk/homepage.git
cd homepage
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
homepage/
├── public/              # Static assets
├── src/
│   ├── components/      # React components (Navbar, Hero, Research, etc.)
│   ├── data/
│   │   └── content.js   # All site content in one place
│   ├── styles/
│   │   └── globals.css  # Global styles and design tokens
│   ├── App.jsx
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml   # GitHub Actions deployment workflow
├── package.json
└── vite.config.js
```

## Customization

All content (bio, research interests, publications, education, awards, links) is stored in `src/data/content.js`. Edit this file to update the site content without touching the components.

## Deployment

The site is automatically deployed to GitHub Pages on every push to the `master` branch via GitHub Actions. No manual deployment steps are needed.

## License

MIT License - feel free to use this as a template for your own academic homepage.
