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
