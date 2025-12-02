# Khalid Hossain - Portfolio v2.0

<div align="center">

![Portfolio Banner](https://res.cloudinary.com/dw5wizivl/image/upload/v1763698865/1000099526_mxy5wy.jpg)

**A modern, high-performance portfolio website showcasing frontend engineering excellence**

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

[Live Demo](https://khalidhossain.me) • [LinkedIn](https://bd.linkedin.com/in/khalidhossainbadhon) • [GitHub](https://github.com/badhon252)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Technology Stack](#-technology-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Performance Optimizations](#-performance-optimizations)
- [SEO \& Accessibility](#-seo--accessibility)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

This is a **modern, high-performance portfolio website** built with Next.js 14, TypeScript, and cutting-edge web technologies. The project showcases frontend engineering excellence through:

- **Premium UI/UX Design**: Stunning animations, smooth transitions, and interactive elements
- **Performance-First Approach**: Optimized for 60 FPS scrolling and minimal resource usage
- **SEO Excellence**: Comprehensive meta tags, structured data, and semantic HTML
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support
- **Responsive Design**: Seamless experience across all devices and screen sizes

### 👨‍💻 About Me

I'm **Khalid Hossain Badhon**, a frontend-focused full-stack developer specializing in building exceptional web experiences with Next.js, React, and TypeScript. This portfolio demonstrates my expertise in modern web development, performance optimization, and user-centric design.

---

## ✨ Features

### 🎨 Design & User Experience

- **Custom Cursor Animation**: Interactive cursor with smooth animations
- **Smooth Scrolling**: Lenis-powered smooth scroll with performance optimizations
- **Dark Mode**: Theme toggle with system preference detection
- **WebGL Background**: Stunning DarkVeil WebGL animation with device-aware rendering
- **Framer Motion Animations**: Smooth, GPU-accelerated animations throughout
- **Responsive Navigation**: Desktop navbar with mobile bottom navigation and hamburger menu
- **Interactive Components**: Hover effects, micro-animations, and engaging UI elements

### 📱 Sections

1. **Hero Section**: Eye-catching introduction with animated text and call-to-action
2. **About Section**: Personal introduction with journey timeline and interactive map
3. **Tech Stack**: Visual showcase of technologies and skills
4. **Projects**: Filterable project gallery with detailed case studies
5. **Testimonials**: LinkedIn recommendations carousel with auto-play
6. **FAQ**: Accordion-style frequently asked questions
7. **Contact**: Multi-channel contact form with validation
8. **Footer**: Comprehensive footer with social links and navigation

### 🚀 Technical Features

- **Server-Side Rendering (SSR)**: Fast initial page loads with Next.js 14
- **TypeScript**: Type-safe development with comprehensive type definitions
- **Form Validation**: React Hook Form with Zod schema validation
- **Email Integration**: Nodemailer for contact form submissions
- **Image Optimization**: Next.js Image component with remote pattern support
- **Code Splitting**: Automatic code splitting for optimal bundle sizes
- **Progressive Enhancement**: Works without JavaScript, enhanced with it
- **Speed Insights**: Vercel Speed Insights integration for performance monitoring

### 🎯 Performance Optimizations

- **GPU Acceleration**: Hardware-accelerated transforms and animations
- **Visibility Detection**: Pauses animations when tab is hidden or elements are off-screen
- **Intersection Observer**: Lazy loading and viewport-based rendering
- **Optimized Particles**: Reduced particle count with visibility-aware rendering
- **CSS Containment**: Layout isolation for faster paint operations
- **Passive Event Listeners**: Non-blocking scroll event handlers
- **Content Visibility**: Automatic content rendering optimization
- **Device-Aware DPR**: Adaptive pixel ratio for mobile devices

> **Performance Metrics**: Consistent 55-60 FPS scrolling, 50% reduction in paint operations, 50-70% CPU reduction during normal usage

---

## 🛠 Technology Stack

### Core Framework

- **[Next.js 14.2.3](https://nextjs.org/)** - React framework with App Router
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI

- **[Tailwind CSS 3.4.1](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Shadcn/ui](https://ui.shadcn.com/)** - Re-usable component library
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible components
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Animation & Effects

- **[Lenis](https://lenis.studiofreight.com/)** - Smooth scroll library
- **[Motion](https://motion.dev/)** - Advanced animation utilities
- **[OGL](https://github.com/oframe/ogl)** - WebGL library for DarkVeil effect
- **[Embla Carousel](https://www.embla-carousel.com/)** - Carousel with auto-scroll

### Forms & Validation

- **[React Hook Form](https://react-hook-form.com/)** - Form state management
- **[Zod](https://zod.dev/)** - Schema validation
- **[Nodemailer](https://nodemailer.com/)** - Email sending

### State & Utilities

- **[class-variance-authority](https://cva.style/)** - Component variant management
- **[clsx](https://github.com/lukeed/clsx)** - Conditional className utility
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Tailwind class merging
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications

### Developer Tools

- **[ESLint](https://eslint.org/)** - Code linting
- **[Prettier](https://prettier.io/)** - Code formatting
- **[PostCSS](https://postcss.org/)** - CSS processing

### Monitoring

- **[@vercel/speed-insights](https://vercel.com/docs/speed-insights)** - Performance monitoring

---

## 📁 Project Structure

```
portfolio-v2.0/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   ├── api/                      # API routes
│   │   └── send/                 # Email sending endpoint
│   ├── projects/                 # Projects page
│   │   └── [id]/                 # Dynamic project detail pages
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Home page
│   ├── loading.tsx               # Loading state
│   ├── not-found.tsx             # 404 page
│   ├── lenis-smooth-scroll.css   # Lenis scroll styles
│   └── scroll-optimizations.css  # Performance optimization styles
│
├── components/                   # React components
│   ├── layout/                   # Layout components
│   │   ├── sections/             # Page sections
│   │   │   ├── about/            # About section components
│   │   │   ├── hero.tsx          # Hero section
│   │   │   ├── testimonial.tsx   # Testimonials section
│   │   │   ├── contact.tsx       # Contact section
│   │   │   ├── faq.tsx           # FAQ section
│   │   │   ├── footer.tsx        # Footer section
│   │   │   ├── tect-stack.tsx    # Tech stack section
│   │   │   └── SideDock.tsx      # Social media dock
│   │   ├── navbar.tsx            # Desktop navigation
│   │   ├── mobile-nav.tsx        # Mobile navigation
│   │   ├── footer-layout.tsx     # Footer layout
│   │   ├── whatsapp-float.tsx    # WhatsApp floating button
│   │   └── theme-provider.tsx    # Theme context provider
│   │
│   ├── project/                  # Project components
│   │   ├── ProjectContainer.tsx  # Project gallery container
│   │   ├── ProjectCard.tsx       # Project card component
│   │   ├── ProjectFilter.tsx     # Project filter
│   │   └── ProjectDetail.tsx     # Project detail view
│   │
│   ├── ui/                       # Shadcn/ui components
│   │   ├── button.tsx            # Button component
│   │   ├── card.tsx              # Card component
│   │   ├── input.tsx             # Input component
│   │   ├── accordion.tsx         # Accordion component
│   │   ├── custom-cursor.tsx     # Custom cursor
│   │   └── ...                   # Other UI components
│   │
│   ├── magicui/                  # Magic UI components
│   │   ├── scroll-progress.tsx   # Scroll progress indicator
│   │   ├── particles.tsx         # Particle animation
│   │   └── ...                   # Other magic components
│   │
│   ├── icons/                    # Icon components
│   ├── DarkVeil.tsx              # WebGL background animation
│   ├── TextPressure.tsx          # Text pressure effect
│   └── CurvedLoop.jsx            # Curved loop animation
│
├── data/                         # Static data
│   ├── projects.ts               # Project data
│   ├── recommendations.ts        # LinkedIn recommendations
│   ├── timeline.ts               # Career timeline
│   ├── values.ts                 # Core values
│   └── animated-text.tsx         # Animated text data
│
├── hooks/                        # Custom React hooks
│   ├── scroll-performance.ts     # Scroll optimization hooks
│   └── use-mobile.tsx            # Mobile detection hook
│
├── lib/                          # Utility libraries
│   ├── provider/                 # Context providers
│   │   └── LenisProvider.tsx     # Lenis scroll provider
│   └── utils.ts                  # Utility functions
│
├── types/                        # TypeScript type definitions
│   └── project.ts                # Project type definitions
│
├── public/                       # Static assets
│   ├── project/                  # Project images
│   └── ...                       # Other public assets
│
├── .env                          # Environment variables
├── .eslintrc.json                # ESLint configuration
├── .prettierrc                   # Prettier configuration
├── .gitignore                    # Git ignore rules
├── components.json               # Shadcn/ui configuration
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.mjs            # PostCSS configuration
├── package.json                  # Dependencies and scripts
├── PERFORMANCE_OPTIMIZATIONS.md  # Performance documentation
├── SCROLL_FPS_OPTIMIZATIONS.md   # Scroll optimization guide
├── LICENSE                       # MIT License
└── README.md                     # This file
```

---

<!--
## 🚀 Getting Started

### Prerequisites

- **Node.js** 20.x or higher
- **npm** 10.x or higher (or **yarn**/**pnpm**)
- **Git** for version control

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/badhon252/portfolio-v2.0.git
cd portfolio-v2.0
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Email Configuration (for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Optional: Google Analytics, etc.
NEXT_PUBLIC_GA_ID=your-ga-id
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Build for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

--- -->

<!-- ## ⚡ Performance Optimizations

This project implements comprehensive performance optimizations to ensure smooth 60 FPS scrolling and minimal resource usage. See [PERFORMANCE_OPTIMIZATIONS.md](./PERFORMANCE_OPTIMIZATIONS.md) and [SCROLL_FPS_OPTIMIZATIONS.md](./SCROLL_FPS_OPTIMIZATIONS.md) for detailed documentation.

### Key Optimizations

#### 1. **Visibility-Aware Rendering**

- Lenis smooth scroll pauses when tab is hidden
- WebGL animations pause when not visible
- Particle animations reduce when off-screen
- IntersectionObserver for viewport-based rendering

#### 2. **GPU Acceleration**

- `will-change` hints for animated elements
- `transform: translateZ(0)` for layer composition
- `backface-visibility: hidden` for smooth transforms
- Hardware-accelerated scrolling on mobile

#### 3. **CSS Performance**

- CSS containment for layout isolation
- `content-visibility: auto` for images
- Passive scroll event listeners
- Optimized paint operations

#### 4. **Device-Aware Optimizations**

- Reduced DPR (1.5) on mobile devices
- Adaptive particle count based on device
- Fast scroll detection with animation reduction
- Mobile-optimized animations

### Performance Metrics

| Metric         | Before   | After    | Improvement |
| -------------- | -------- | -------- | ----------- |
| **Scroll FPS** | 45-55    | 55-60    | +15-20%     |
| **Paint Time** | ~25ms    | ~12-15ms | **50%**     |
| **CPU Usage**  | Baseline | -50-70%  | **50-70%**  |
| **Mobile FPS** | 40       | 55       | +35%        |

--- -->

<!-- ## 🔍 SEO & Accessibility

### SEO Features

- **Comprehensive Meta Tags**: Title, description, keywords, Open Graph, Twitter Cards
- **Structured Data**: JSON-LD schema for Person and Organization
- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Sitemap**: Auto-generated sitemap for search engines
- **Robots.txt**: Proper crawling instructions
- **Image Alt Text**: Descriptive alt text for all images
- **Performance**: Fast loading times and Core Web Vitals optimization

### Accessibility Features

- **WCAG 2.1 AA Compliant**: Meets accessibility standards
- **Keyboard Navigation**: Full keyboard support
- **Screen Reader Support**: ARIA labels and semantic HTML
- **Focus Indicators**: Clear focus states for interactive elements
- **Color Contrast**: Sufficient contrast ratios
- **Responsive Text**: Scalable text sizes
- **Skip Links**: Skip to main content functionality

---

<!-- ## 💻 Development

### Custom Hooks

#### `useScrollPerformance()`

Monitors scroll performance and detects fast scrolling.

```typescript
import { useScrollPerformance } from "@/hooks/scroll-performance";

const { isScrollingFast, scrollDelta } = useScrollPerformance();
```

#### `usePauseAnimationOnScroll()`

Pauses animations during fast scrolling for better performance.

```typescript
import { usePauseAnimationOnScroll } from "@/hooks/scroll-performance";

const { shouldReduceMotion } = usePauseAnimationOnScroll();
```

#### `useMobile()`

Detects mobile devices for responsive behavior.

```typescript
import { useMobile } from "@/hooks/use-mobile";

const isMobile = useMobile();
```

### Component Guidelines

1. **Use TypeScript**: All components should be typed
2. **Responsive Design**: Test on mobile, tablet, and desktop
3. **Performance**: Use `will-change` sparingly, prefer transforms
4. **Accessibility**: Include ARIA labels and semantic HTML
5. **SEO**: Use proper heading hierarchy and meta tags

### Styling Guidelines

1. **Tailwind First**: Use Tailwind utilities when possible
2. **Custom CSS**: Use CSS modules or global styles for complex styling
3. **Dark Mode**: Support both light and dark themes
4. **Responsive**: Mobile-first approach
5. **Performance**: Avoid expensive CSS properties (blur, backdrop-filter)

### Code Quality

- **ESLint**: Enforces code quality and consistency
- **Prettier**: Automatic code formatting
- **TypeScript**: Type checking for safer code
- **Git Hooks**: Pre-commit hooks for linting (optional)

--- --> -->

<!-- ## 🚢 Deployment

### Vercel (Recommended)

This project is optimized for deployment on [Vercel](https://vercel.com/).

1. **Push to GitHub**

```bash
git push origin main
```

2. **Import to Vercel**

- Go to [vercel.com/new](https://vercel.com/new)
- Import your repository
- Configure environment variables
- Deploy

3. **Configure Domain** (Optional)

- Add custom domain in Vercel dashboard
- Update DNS records

### Other Platforms

You can also deploy to:

- **Netlify**: `npm run build` → Deploy `out` folder
- **AWS Amplify**: Connect GitHub repository
- **DigitalOcean App Platform**: Connect GitHub repository
- **Self-hosted**: `npm run build && npm run start`

### Environment Variables

Ensure these environment variables are set in your deployment platform:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
NEXT_PUBLIC_GA_ID=your-ga-id (optional)
```

---

<!-- ## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**

```bash
git checkout -b feature/amazing-feature
```

3. **Make your changes**
4. **Commit your changes**

```bash
git commit -m 'Add some amazing feature'
```

5. **Push to the branch**

```bash
git push origin feature/amazing-feature
```

6. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation if needed
- Ensure all tests pass
- Keep PRs focused and small

### Reporting Issues

If you find a bug or have a feature request:

1. Check if the issue already exists
2. Create a new issue with detailed description
3. Include steps to reproduce (for bugs)
4. Add screenshots if applicable

--- --> -->

<!-- ## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

--- -->

## 📞 Contact

**Khalid Hossain Badhon**

- **Website**: [khalidhossain.me](https://khalidhossain.me)
- **LinkedIn**: [linkedin.com/in/khalidhossainbadhon](https://bd.linkedin.com/in/khalidhossainbadhon)
- **GitHub**: [github.com/badhon252](https://github.com/badhon252)
- **Twitter**: [@badhon252](https://twitter.com/badhon252)
- **Email**: [khalid@khalidhossain.me](mailto:khalid@khalidhossain.me)

---

## 🙏 Acknowledgments

- **[Shadcn/ui](https://ui.shadcn.com/)** - For the amazing component library
- **[Vercel](https://vercel.com/)** - For hosting and deployment
- **[Next.js Team](https://nextjs.org/)** - For the incredible framework
- **[Tailwind CSS](https://tailwindcss.com/)** - For the utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - For smooth animations
- **[Lenis](https://lenis.studiofreight.com/)** - For smooth scrolling

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/badhon252/portfolio-v2.0?style=social)
![GitHub forks](https://img.shields.io/github/forks/badhon252/portfolio-v2.0?style=social)
![GitHub issues](https://img.shields.io/github/issues/badhon252/portfolio-v2.0)
![GitHub pull requests](https://img.shields.io/github/issues-pr/badhon252/portfolio-v2.0)

---

<div align="center">

**Made with ❤️ by [Khalid Hossain Badhon](https://khalidhossain.me)**

⭐ Star this repository if you found it helpful!

</div>
