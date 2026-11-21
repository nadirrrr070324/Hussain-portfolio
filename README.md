# Portfolio Website

A modern, responsive portfolio website built with **React.js**, **TypeScript**, **Vite**, and **Tailwind CSS**.

## 🔗 Link Mapping

The portfolio includes links to your **GitHub**, **Gmail**, and **LinkedIn** profiles. Update these in the component files:

| Component | File | What to Update |
|-----------|------|----------------|
| Navbar | `src/components/Navbar.tsx` | `SOCIALS` array |
| Hero | `src/components/Hero.tsx` | `SOCIALS` array |
| Contact | `src/components/Contact.tsx` | `SOCIALS` array + form |
| Footer | `src/components/Footer.tsx` | `SOCIALS` array |

### Example (in each component):

```tsx
const SOCIALS = [
  { label: 'GitHub', url: 'https://github.com/YOUR_GITHUB_USERNAME', icon: Github },
  { label: 'Gmail', url: 'mailto:YOUR_GMAIL@gmail.com', icon: Mail },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/YOUR_LINKEDIN_USERNAME', icon: Linkedin },
];
```

Also update your name in:
- `src/components/Navbar.tsx` — `Your Name`
- `src/components/Hero.tsx` — `Your Name`
- `src/components/Footer.tsx` — `Your Name`
- `index.html` — the `<title>` tag

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── index.html          # Entry HTML
├── package.json        # Dependencies & scripts
├── tsconfig.json       # TypeScript config
├── vite.config.ts      # Vite config
├── tailwind.config.js  # Tailwind config
├── postcss.config.js   # PostCSS config
├── src/
│   ├── main.tsx        # React entry point
│   ├── App.tsx         # Main app component
│   ├── index.css       # Global styles (Tailwind)
│   ├── types/          # TypeScript interfaces
│   ├── data/           # Static data (projects)
│   └── components/
│       ├── Navbar.tsx  # Navigation with social links
│       ├── Hero.tsx    # Hero section with social links
│       ├── About.tsx   # About me section
│       ├── Projects.tsx# Projects grid with GitHub links
│       ├── Contact.tsx # Contact form + social links
│       └── Footer.tsx  # Footer with social links
└── dist/               # Production build output
```

## 🛠️ Technologies

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS (styling)
- Framer Motion (animations)
- Lucide React (icons)

## 📄 License

MIT