export const site = {
  name: 'John Doe',
  initials: 'JD',
  role: 'Developer & Creative Engineer',
  location: 'Berlin / Remote',
  email: 'hello@johndoe.dev',
  available: true,
  social: [
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'Read.cv', href: 'https://read.cv' },
  ],
  nav: [
    { label: 'Index', to: '/' },
    { label: 'Work', to: '/work' },
    { label: 'About', to: '/about' },
    { label: 'Playground', to: '/playground' },
    { label: 'Contact', to: '/contact' },
  ],
};

export const projects = [
  {
    slug: 'lumen-os',
    number: '01',
    title: 'Lumen OS',
    description:
      'Operating system for design teams — async reviews, version control, and a collaborative canvas.',
    year: '2025',
    role: 'Lead Engineer',
    tags: ['React', 'WebGL', 'Node', 'Postgres'],
    color: '#0E0E10',
    accent: '#FF4D1F',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'arc-financial',
    number: '02',
    title: 'Arc Financial',
    description:
      'A modern banking interface for independent founders — clarity, speed, and a calm aesthetic.',
    year: '2024',
    role: 'Design Engineer',
    tags: ['Next.js', 'Framer Motion', 'GraphQL'],
    color: '#101418',
    accent: '#7BB7FF',
    image:
      'https://images.unsplash.com/photo-1620336655055-088d06e36bf0?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'meridian-studio',
    number: '03',
    title: 'Meridian Studio',
    description:
      'A multidisciplinary studio site with a custom typographic system and motion language.',
    year: '2024',
    role: 'Frontend Architect',
    tags: ['Vite', 'GSAP', 'Lenis', 'WebGL'],
    color: '#161210',
    accent: '#E5DCC9',
    image:
      'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'north-cartography',
    number: '04',
    title: 'North Cartography',
    description:
      'Interactive map platform for outdoor brands — vector tiles, custom shaders, and editorial routes.',
    year: '2023',
    role: 'Full-stack',
    tags: ['Mapbox', 'Three.js', 'Rust'],
    color: '#0B1410',
    accent: '#9DE0AC',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'parallel-records',
    number: '05',
    title: 'Parallel Records',
    description:
      'A label site with reactive type, audio-driven motion, and a release archive built for scale.',
    year: '2023',
    role: 'Creative Developer',
    tags: ['Web Audio', 'Canvas', 'Astro'],
    color: '#150E18',
    accent: '#C9A6FF',
    image:
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=80',
  },
  {
    slug: 'foundry-press',
    number: '06',
    title: 'Foundry Press',
    description:
      'Editorial publication system with a flexible layout engine and offline-first reading mode.',
    year: '2022',
    role: 'Engineer',
    tags: ['Remix', 'Service Workers', 'CMS'],
    color: '#1A1814',
    accent: '#F0B65E',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1600&q=80',
  },
];

export const skills = [
  { label: 'Frontend Architecture', items: ['React', 'Next.js', 'Vite', 'TypeScript', 'Remix'] },
  {
    label: 'Design Engineering',
    items: ['Tailwind', 'Framer Motion', 'GSAP', 'Lenis', 'Storybook'],
  },
  { label: 'Creative & 3D', items: ['Three.js', 'WebGL', 'GLSL', 'Canvas API'] },
  { label: 'Backend & Infra', items: ['Node', 'Postgres', 'tRPC', 'Vercel', 'AWS'] },
];

export const experience = [
  {
    year: '2023 — Now',
    role: 'Independent',
    company: 'Selected clients & studios',
    note: 'Design engineering for early-stage products and creative studios.',
  },
  {
    year: '2021 — 2023',
    role: 'Senior Engineer',
    company: 'Locomotive',
    note: 'Shipped award-winning websites across culture, finance, and tech.',
  },
  {
    year: '2018 — 2021',
    role: 'Design Engineer',
    company: 'Bureau Cool',
    note: 'Building interactive editorial systems and product surfaces.',
  },
  {
    year: '2016 — 2018',
    role: 'Frontend Developer',
    company: 'Foundry Co.',
    note: 'Started here. Learned the craft of shipping work that lasts.',
  },
];

export const experiments = [
  {
    title: 'Velocity Type',
    note: 'Scroll-velocity reactive headlines',
    tag: 'Motion',
  },
  {
    title: 'Aurora Field',
    note: 'GLSL noise gradient field',
    tag: 'WebGL',
  },
  {
    title: 'Magnetic Grid',
    note: 'Cursor magnetic interactions',
    tag: 'Interaction',
  },
  {
    title: 'Audio Waveform',
    note: 'Web Audio analyser viz',
    tag: 'Audio',
  },
  {
    title: 'Particle Portrait',
    note: 'Image-driven particle systems',
    tag: 'Canvas',
  },
  {
    title: 'Curtain Transition',
    note: 'Page transition primitives',
    tag: 'Motion',
  },
];
