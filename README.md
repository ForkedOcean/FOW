# ForkedOcean

> Your Ocean. Your Control.

A minimal, liquid, and deeply intelligent web presence for the ForkedOcean system. Not just a project — it's a thinking framework.

## 🌊 Features

- **Minimal Design**: Clean, ocean-inspired dark theme
- **Terminal Interface**: Interactive consciousness-aware terminal
- **Performance Optimized**: Built for production with Next.js
- **Accessibility First**: WCAG AA compliant
- **Mobile Responsive**: Seamless experience across all devices

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/forkedocean/forkedocean.git
cd forkedocean

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
forkedocean/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   ├── sitemap.ts         # Sitemap generation
│   ├── robots.ts          # Robots.txt generation
│   └── terminal/          # Terminal interface
├── components/            # React components
│   ├── sections/          # Page sections
│   └── ui/               # UI components
├── lib/                  # Utilities and configuration
├── public/               # Static assets
├── __tests__/            # Test files
└── deployment/           # Deployment configurations
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run lighthouse` - Run Lighthouse CI

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
NEXT_PUBLIC_SITE_URL=https://forkedocean.com
NEXT_PUBLIC_SITE_NAME=ForkedOcean
NEXT_PUBLIC_ENABLE_TERMINAL=true
```

## 🎨 Design System

### Color Palette

- **Primary Background**: `#06141B` - Very dark navy
- **Secondary Background**: `#11212D` - Deep carbon blue
- **Card/Container BG**: `#253745` - Charcoal blue
- **Accent/Borders**: `#4A5C6A` - Grey-blue
- **Muted Text**: `#9BA8AB` - Soft blue-grey
- **Primary Text**: `#CCD0CF` - Light grey

### Typography

- **Primary Font**: Inter (200, 300, 400, 500, 600)
- **Monospace Font**: JetBrains Mono (300, 400, 500)

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel --prod
```

### Netlify

```bash
npm run build
# Deploy the 'out' directory
```

### Docker

```bash
docker build -t forkedocean .
docker run -p 3000:3000 forkedocean
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent UX
- **Bundle Size**: Minimized with code splitting
- **Caching**: Aggressive static asset caching

## 🔒 Security

- **CSP Headers**: Content Security Policy implemented
- **XSS Protection**: Input sanitization and validation
- **HTTPS Only**: Secure connections enforced
- **Privacy First**: No unnecessary tracking

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🌊 Philosophy

> "The sea forks when thought begins."

ForkedOcean represents more than a website—it's a mental operating system. A space for consciousness to flow, reflect, and evolve.

---

**Created by ForkedMind** • First Wave Released — 2025