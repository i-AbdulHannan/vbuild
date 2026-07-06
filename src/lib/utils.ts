export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

export function formatNumber(num: number): string {
  if (num >= 1000) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return num.toString();
}

export const projects = [
  {
    id: 'clinicflow-pro',
    title: 'ClinicFlow Pro',
    description: 'Healthcare management platform serving multiple clinics with appointment scheduling, EHR, and billing.',
    result: '50+ clinics onboarded, 10K+ patients managed monthly',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
    image: '/images/clinicflow.jpg',
    link: 'https://clinicflowpro.com',
  },
  {
    id: 'harborloop',
    title: 'HarborLoop',
    description: 'Logistics and supply chain optimization platform with real-time tracking and analytics.',
    result: '30% efficiency increase for logistics partners',
    tags: ['Next.js', 'Python', 'MongoDB', 'Docker'],
    image: '/images/harborloop.jpg',
    link: 'https://harborloop.com',
  },
  {
    id: 'workstation',
    title: 'WorkStation',
    description: 'Productivity suite combining project management, team communication, and workflow automation.',
    result: '15K+ active users, 4.8 star rating',
    tags: ['React', 'TypeScript', 'GraphQL', 'GCP'],
    image: '/images/workstation.jpg',
    link: '#',
  },
  {
    id: 'talent-tree-jp',
    title: 'Talent Tree JP',
    description: 'AI-powered recruitment platform for the Japanese job market with intelligent candidate matching.',
    result: '5,000+ organic users, 6 hackathon wins',
    tags: ['Next.js', 'AI/ML', 'PostgreSQL', 'Vercel'],
    image: '/images/talent-tree.jpg',
    link: 'https://talenttree.jp',
  },
];

export const services = [
  {
    id: 'saas',
    title: 'SaaS / PaaS / IaaS Development',
    description: 'We build platforms businesses run on — not just apps. Multi-tenant architectures, subscription billing, RBAC, and infrastructure that scales from day one.',
    items: ['Multi-tenant architecture design', 'Subscription & billing integration', 'Role-based access control', 'API-first development', 'Cloud infrastructure (AWS/GCP/Azure)', 'CI/CD pipeline setup', 'Performance optimization', 'Security & compliance'],
    timeline: '8-16 weeks',
    stack: ['React/Next.js', 'Node.js/Python', 'PostgreSQL', 'Docker/K8s', 'AWS/GCP'],
  },
  {
    id: 'webapps',
    title: 'Web Applications',
    description: 'Custom internal tools, client portals, dashboards, and operational platforms that eliminate manual workflows.',
    items: ['Custom dashboard development', 'Client portal & CRM', 'Real-time data processing', 'File upload & management', 'User authentication & SSO', 'API integration', 'Admin panel development', 'Analytics & reporting'],
    timeline: '4-12 weeks',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
  },
  {
    id: 'websites',
    title: 'Websites',
    description: 'Marketing sites, agency portfolios, landing pages, and conversion-optimized experiences that look as good as they perform.',
    items: ['High-conversion landing pages', 'Agency & portfolio sites', '3D & interactive experiences', 'SEO optimization', 'Animation & micro-interactions', 'CMS integration', 'Performance optimization', 'Analytics setup'],
    timeline: '2-6 weeks',
    stack: ['Next.js', 'Three.js', 'GSAP', 'Framer Motion', 'Tailwind CSS'],
  },
];

export const products = [
  {
    id: 'workstation-starter',
    name: 'WorkStation — Starter',
    price: 'PKR 5,000/mo',
    features: ['Up to 10 team members', 'Basic project management', 'Task tracking', 'Team chat', 'File sharing (5GB)'],
    popular: false,
  },
  {
    id: 'workstation-pro',
    name: 'WorkStation — Pro',
    price: 'PKR 15,000/mo',
    features: ['Unlimited team members', 'Advanced project management', 'Gantt charts & timelines', 'Custom workflows', 'File sharing (50GB)', 'API access', 'Priority support'],
    popular: true,
  },
  {
    id: 'workstation-enterprise',
    name: 'WorkStation — Enterprise',
    price: 'Custom',
    features: ['Everything in Pro', 'Dedicated server', 'SSO & SAML', 'Custom integrations', 'Unlimited storage', '24/7 support', 'SLA guarantee'],
    popular: false,
  },
];

export const stats = [
  { value: 100, suffix: '+', label: 'Shipped Projects' },
  { value: 6, suffix: '', label: 'Hackathon Wins' },
  { value: 5000, suffix: '+', label: 'Organic Users (TTJP)' },
  { value: 4, suffix: '', label: 'Live Products' },
];

export const processSteps = [
  { step: '01', title: 'Discover', description: 'We learn your industry, users, and goals inside out.' },
  { step: '02', title: 'Design', description: 'Architecture, UX, and visual direction — reviewed and locked.' },
  { step: '03', title: 'Build', description: 'Iterative development with weekly demos, no black boxes.' },
  { step: '04', title: 'Ship', description: 'Deploy, test, optimize — then handover with full documentation.' },
  { step: '05', title: 'Support', description: 'Post-launch support, monitoring, and continuous improvement.' },
];

export const marqueeItems = [
  'SaaS', 'PaaS', 'IaaS', 'Web Apps', 'Websites', 'AI Integration',
  'SaaS', 'PaaS', 'IaaS', 'Web Apps', 'Websites', 'AI Integration',
  'SaaS', 'PaaS', 'IaaS', 'Web Apps', 'Websites', 'AI Integration',
];
