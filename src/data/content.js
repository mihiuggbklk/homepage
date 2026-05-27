export const personalInfo = {
  name: 'Yuqing He',
  title: 'PhD Candidate',
  institution: 'Zhejiang University',
  department: 'School of Mathematical Sciences',
  tagline: 'Machine Learning Theory · Optimization · Data Science',
  avatarUrl: '/avatar.png',
  advisor: { name: 'Prof. Song Li', url: 'https://person.zju.edu.cn/0096094' },
  bio: 'I am a PhD candidate at the School of Mathematical Sciences, Zhejiang University, advised by Prof. Song Li. My research focuses on the theoretical foundations of machine learning, with a particular interest in optimization algorithms and their convergence properties.',
}

export const navLinks = [
  { label: 'Research', href: '#research' },
  { label: 'Publications', href: '#publications' },
  { label: 'CV', href: '#cv' },
  { label: 'Contact', href: '#contact' },
]

export const researchInterests = [
  {
    title: 'Optimization Theory',
    description: 'Convergence analysis of non-smooth and spectral optimization methods, including Muon-type optimizers for large-scale machine learning.',
  },
  {
    title: 'Machine Learning Theory',
    description: 'Theoretical guarantees for learning algorithms, including generalization bounds, robustness, and low-rank matrix recovery.',
  },
  {
    title: 'Data Science',
    description: 'Mathematical foundations of data-driven methods, with applications in signal processing and high-dimensional statistics.',
  },
]

export const publications = [
  {
    title: 'Convergence of Spectral Descent for Non-smooth Optimization',
    authors: ['Yixuan Yang', 'Yuqing He', 'Song Li'],
    venue: 'arXiv preprint',
    year: 2026,
    abstract: 'We investigate Spectral Descent (SD), a simplified variant of the Muon optimizer, and its truncated counterpart (TSD). Under convexity, Lipschitz continuity, and sharpness conditions, we establish global linear convergence for both SD and TSD in non-smooth convex formulations. We also derive sublinear convergence guarantees through their connection with Frank-Wolfe methods and apply our framework to robust low-rank matrix recovery.',
    links: [
      { label: 'arXiv', url: 'https://arxiv.org/abs/2605.26977' },
    ],
  },
]

export const education = [
  {
    date: '2025 - Present',
    institution: 'Zhejiang University',
    degree: 'PhD in Applied Mathematics',
    description: 'School of Mathematical Sciences. Advised by Prof. Song Li. Research focus on optimization theory and machine learning.',
  },
  {
    date: '2021 - 2025',
    institution: 'Zhejiang University',
    degree: 'B.S. in Mathematics and Applied Mathematics',
    description: 'School of Mathematical Sciences.',
  },
]

export const awards = [
  {
    date: '2025',
    title: 'Outstanding Graduate (University Level)',
    institution: 'Zhejiang University',
  },
  {
    date: '2023 - 2024',
    title: 'Zhejiang University Scholarship - Third Prize',
    institution: 'Zhejiang University',
  },
  {
    date: '2022 - 2023',
    title: 'Zhejiang University Scholarship - Second Prize',
    institution: 'Zhejiang University',
  },
]

export const socialLinks = [
  { name: 'Email', url: 'mailto:yuqinghe25@zju.edu.cn' },
  { name: 'GitHub', url: 'https://github.com' },
]
