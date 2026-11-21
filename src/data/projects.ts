import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce platform with product catalog, cart, Stripe payments, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'TypeScript', 'Node.js', 'Stripe', 'PostgreSQL'],
    github: 'https://github.com/YOUR_GITHUB_USERNAME/ecommerce-platform',
    live: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management SaaS',
    description:
      'Collaborative task management tool with real-time updates, team workspaces, and drag-and-drop boards.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
    github: 'https://github.com/YOUR_GITHUB_USERNAME/task-saas',
    live: 'https://task-saas-demo.vercel.app',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description:
      'Weather forecasting dashboard with 7-day outlook, location search, and interactive maps.',
    image: 'https://images.unsplash.com/photo-1592210465309-811a504a59c9?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com/YOUR_GITHUB_USERNAME/weather-dashboard',
    featured: false,
  },
  {
    id: '4',
    title: 'Crypto Portfolio Tracker',
    description:
      'Real-time cryptocurrency portfolio tracker with price alerts, watchlists, and performance charts.',
    image: 'https://images.unsplash.com/photo-1517570313367-d8c97693321e?auto=format&fit=crop&w=600&q=80',
    tags: ['React', 'TypeScript', 'CoinGecko API', 'Recharts'],
    github: 'https://github.com/YOUR_GITHUB_USERNAME/crypto-tracker',
    live: 'https://crypto-tracker-demo.vercel.app',
    featured: false,
  },
];