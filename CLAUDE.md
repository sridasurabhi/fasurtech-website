# Fasurtech Website - Claude Code Context

## Project Overview

**Project Name**: Fasurtech Website
**Type**: Corporate website for AI & Data Intelligence consulting firm
**Framework**: Next.js 16.1.6 (App Router) with TypeScript
**Status**: Production Ready
**Last Updated**: March 2026

### Purpose
A modern, animated corporate website that repositions Fasurtech from a traditional IT services provider to a cutting-edge AI & Data Intelligence leader. The site bridges their 20+ years of enterprise IT expertise (Oracle E-Business, PeopleSoft, QA Testing) with next-generation AI consulting capabilities.

### Business Positioning
- **From**: Traditional IT services (legacy systems, QA testing)
- **To**: AI-First consulting (Multi-Agent Systems, Autonomous Intelligence, Agentic Data Platforms)
- **Target Industries**: Healthcare, Financial Services, Public Sector
- **Notable Clients**: Penn Medicine, Barnes & Noble, University of Pennsylvania, TSA

---

## Current Changes Summary

### Modified Files
1. **app/globals.css** - Custom Tailwind CSS v4 configuration with dark mode theme
2. **app/layout.tsx** - Root layout with SEO metadata and font configuration
3. **app/page.tsx** - Homepage with hero, services, case studies, workflow visualization
4. **package.json** - Dependencies added (framer-motion, lucide-react)
5. **package-lock.json** - Lockfile updates for new dependencies

### New Directories & Files

#### Pages (`/app`)
- `/about/page.tsx` - Company information and values
- `/contact/page.tsx` - Contact form and information
- `/services/ai-strategy/page.tsx` - AI Strategy & Readiness service
- `/services/multi-agent/page.tsx` - Multi-Agent Frameworks service
- `/services/data-platforms/page.tsx` - Agentic Data Platforms service
- `/services/ai-qa/page.tsx` - AI-Powered QA service
- `/industries/healthcare/page.tsx` - Healthcare industry solutions
- `/industries/financial/page.tsx` - Financial Services solutions
- `/industries/public-sector/page.tsx` - Public Sector solutions

#### Components (`/components`)
- `Navigation.tsx` - Sticky header with dropdowns, mobile menu
- `Footer.tsx` - Comprehensive site footer with links
- `ServiceCard.tsx` - Animated service cards with icons
- `IndustryCard.tsx` - Industry overview cards
- `CaseStudyCard.tsx` - Case study display component
- `AgenticWorkflow.tsx` - Interactive animated workflow visualization

#### Documentation
- `README_PROJECT.md` - Comprehensive project documentation
- `DEPLOYMENT.md` - Deployment guide for Vercel/Netlify/Cloud platforms

---

## Tech Stack

### Core Framework
- **Next.js**: 16.1.6 (App Router, React Server Components)
- **React**: 19.2.3
- **TypeScript**: 5.x

### Styling & Animation
- **Tailwind CSS**: v4 (latest) with custom theme
- **Framer Motion**: 12.35.1 (animations, transitions, scroll effects)
- **Lucide React**: 0.577.0 (modern icon system)

### Fonts
- **Inter**: Primary sans-serif font (via next/font)
- **JetBrains Mono**: Monospace font for code/technical elements

### Development Tools
- **ESLint**: 9.x (Next.js config)
- **PostCSS**: v4 (Tailwind processing)

---

## Project Structure

```
fasurtech-website/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles & Tailwind config
│   ├── about/
│   │   └── page.tsx              # About page
│   ├── contact/
│   │   └── page.tsx              # Contact page
│   ├── services/
│   │   ├── ai-strategy/page.tsx
│   │   ├── multi-agent/page.tsx
│   │   ├── data-platforms/page.tsx
│   │   └── ai-qa/page.tsx
│   └── industries/
│       ├── healthcare/page.tsx
│       ├── financial/page.tsx
│       └── public-sector/page.tsx
├── components/                   # Reusable React components
│   ├── Navigation.tsx            # Header navigation
│   ├── Footer.tsx                # Site footer
│   ├── ServiceCard.tsx           # Service display card
│   ├── IndustryCard.tsx          # Industry card
│   ├── CaseStudyCard.tsx         # Case study card
│   └── AgenticWorkflow.tsx       # Workflow visualization
├── public/                       # Static assets
├── node_modules/                 # Dependencies
├── .git/                         # Git repository
├── .next/                        # Next.js build output
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── postcss.config.mjs            # PostCSS configuration
├── eslint.config.mjs             # ESLint configuration
├── README.md                     # Original Next.js README
├── README_PROJECT.md             # Comprehensive project docs
├── DEPLOYMENT.md                 # Deployment guide
└── CLAUDE.md                     # This file
```

---

## Design System

### Color Palette
```css
--background: #0f172a     /* Midnight Blue - Primary background */
--foreground: #ffffff     /* White - Text color */
--primary: #10b981        /* Emerald Green - Primary accent */
--secondary: #34d399      /* Light Emerald - Secondary accent */
--accent: #064e3b         /* Deep Green - Accent color */
--muted: #1e293b          /* Dark Slate - Muted backgrounds */
--border: #334155         /* Slate - Border color */
```

### Typography
- **Headings**: Inter (bold, 600-700 weight)
- **Body**: Inter (regular, 400 weight)
- **Code/Technical**: JetBrains Mono

### Spacing & Borders
- **Border Radius**: sm (0.375rem), md (0.5rem), lg (0.75rem), xl (1rem)
- **Container**: max-width with auto margins, px-6 padding
- **Sections**: py-24 (96px vertical padding)

### Animation Patterns
1. **Page Load**: Staggered fade-in with `containerVariants` and `itemVariants`
2. **Scroll Reveal**: `whileInView` animations on sections
3. **Hover Effects**: Scale (1.05-1.1), shadow, color transitions
4. **Particles**: Floating animated dots on hero background
5. **Workflow**: Continuous particle flow along SVG paths

---

## Key Features & Components

### 1. Homepage (`app/page.tsx`)
**Sections**:
- **Hero**: Full-screen gradient background, animated particles, trust indicators
- **Core Four Services**: 2x2 grid of service cards with hover effects
- **Agentic Workflow Visualization**: Interactive animated diagram
- **Case Studies**: 3 proof points with measurable results
- **Why Fasurtech**: 6-point value proposition

**Key Technologies**:
- Framer Motion for all animations
- CSS gradients and backdrop blur
- Lucide icons for visual elements

### 2. Navigation Component (`components/Navigation.tsx`)
**Features**:
- Sticky header with transparency when at top
- Dropdown menus for Services and Industries
- Mobile hamburger menu with AnimatePresence
- Scroll-based styling changes
- Smooth transitions

### 3. Agentic Workflow (`components/AgenticWorkflow.tsx`)
**Capabilities**:
- 4 agent nodes: Coordinator, Data, Analysis, Communication
- Animated SVG connections with particles
- Pulsing rings and hover tooltips
- Real-time collaboration visualization
- Grid background with gradient overlay

**Technical Implementation**:
- SVG for connection lines
- Framer Motion for node animations
- CSS gradients for visual depth
- State management for hover interactions

### 4. Service Pages
**Pattern** (all 4 service pages follow same structure):
1. Hero section with service overview
2. Key capabilities grid (4 items)
3. Detailed approach/methodology
4. Benefits and business value
5. Technology/tools section
6. Final CTA

### 5. Industry Pages
**Pattern**:
1. Industry overview with statistics
2. Challenges specific to sector
3. AI solutions tailored to industry
4. Real case studies with metrics
5. Use cases grid
6. Security/compliance (where applicable)

---

## Component API Reference

### ServiceCard
```tsx
<ServiceCard
  title: string          // Service name
  description: string    // Service description
  icon: LucideIcon       // Lucide icon component
  href: string           // Link to service page
  gradient: string       // Tailwind gradient (e.g., "from-primary to-secondary")
/>
```

### CaseStudyCard
```tsx
<CaseStudyCard
  client: string         // Client name
  industry: string       // Industry vertical
  challenge: string      // Problem statement
  solution: string       // How Fasurtech solved it
  result: string         // Key metric (e.g., "40% faster")
  impact: string         // Business impact description
/>
```

### IndustryCard
```tsx
<IndustryCard
  title: string          // Industry name
  description: string    // Industry overview
  stats: string          // Key statistic
  icon: LucideIcon       // Industry icon
  href: string           // Link to industry page
/>
```

---

## Development Workflow

### Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev
# Visit http://localhost:3000

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Git Workflow
```bash
# Current branch
main

# Recent commits
ec77b57 Initial commit from Create Next App

# Check status
git status
# Shows modified: globals.css, layout.tsx, page.tsx, package.json, package-lock.json
# Shows untracked: DEPLOYMENT.md, README_PROJECT.md, app/{about,contact,industries,services}, components/
```

### File Modification Guidelines
1. **Read before editing**: Always use Read tool before modifying existing files
2. **Component patterns**: Follow existing component structure for consistency
3. **Animation patterns**: Use Framer Motion variants for consistency
4. **Color usage**: Stick to design system colors defined in globals.css
5. **TypeScript**: Maintain strict typing, use proper interfaces

---

## Deployment

### Recommended Platform: Vercel
**Why Vercel**:
- Native Next.js support (created by Vercel)
- Automatic SSL/HTTPS
- Global CDN
- Zero-config deployments
- Built-in analytics

**Deploy Steps**:
1. Push code to GitHub
2. Import repository in Vercel
3. Auto-detected Next.js config
4. Deploy with one click
5. Add custom domain (optional)

**Expected Performance**:
- Build time: ~2 minutes
- Initial load: <2 seconds
- Time to Interactive: <3 seconds
- Lighthouse score: 90+ (estimated)

### Alternative Platforms
- **Netlify**: Similar to Vercel, excellent DX
- **AWS Amplify**: For AWS ecosystem integration
- **Azure Static Web Apps**: For Azure customers
- **Google Cloud Run**: Containerized deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

---

## Important File Locations

### Configuration
- `next.config.ts` - Next.js configuration (currently minimal)
- `tsconfig.json` - TypeScript compiler options with path aliases (@/*)
- `tailwind.config.ts` - Currently doesn't exist (using inline @theme in globals.css)
- `postcss.config.mjs` - PostCSS configuration for Tailwind
- `eslint.config.mjs` - ESLint rules

### Styling
- `app/globals.css` - Global styles, CSS variables, Tailwind directives

### Content
- All page content is currently hardcoded in TSX files
- No CMS integration (potential future enhancement)
- Images/assets in `/public` directory

### Type Definitions
- `next-env.d.ts` - Next.js type definitions (auto-generated)
- Component types defined inline in .tsx files

---

## SEO & Metadata

### Current Implementation
**Root Layout** (`app/layout.tsx`):
```typescript
metadata = {
  title: "Fasurtech | Architecting Autonomous Intelligence"
  description: "Next-Gen AI & Data Intelligence solutions..."
  keywords: ["AI Consulting", "Multi-Agent Systems", ...]
  authors: [{ name: "Fasurtech" }]
  openGraph: { title, description, type: "website" }
}
```

### Recommendations
- [ ] Add page-specific metadata for each route
- [ ] Implement structured data (JSON-LD) for rich snippets
- [ ] Add Twitter/X card metadata
- [ ] Include canonical URLs
- [ ] Add sitemap.xml generation
- [ ] Implement robots.txt

---

## Performance Optimizations

### Already Implemented
- Next.js automatic code splitting
- Font optimization with next/font
- Image optimization ready (next/image) - pending actual images
- CSS purging via Tailwind
- React Server Components (App Router)

### Recommended Enhancements
- [ ] Add next/image for any images in /public
- [ ] Implement lazy loading for below-fold components
- [ ] Add Suspense boundaries for async components
- [ ] Optimize Framer Motion bundle size (tree-shaking)
- [ ] Enable Next.js Image Optimization API
- [ ] Add loading states and skeletons
- [ ] Implement route prefetching strategies

---

## Content Management

### Current Approach
- All content hardcoded in component files
- No external CMS
- Content updates require code changes and redeployment

### Future CMS Integration Options
1. **Headless CMS** (Sanity, Contentful, Strapi)
2. **Markdown/MDX** files with gray-matter
3. **Database** (PostgreSQL + Prisma)
4. **Git-based CMS** (Decap CMS, Tina CMS)

---

## Browser Support & Compatibility

### Target Browsers
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions (including iOS Safari)
- Mobile browsers: iOS Safari 14+, Chrome Mobile

### Known Considerations
- CSS `backdrop-filter` for blur effects (95% browser support)
- Framer Motion animations (requires JS enabled)
- SVG animations in AgenticWorkflow
- CSS Grid for layouts (fully supported)
- CSS Custom Properties (fully supported)

---

## Testing Strategy

### Current Status
- No tests implemented yet
- Manual testing during development

### Recommended Testing Stack
1. **Unit Tests**: Jest + React Testing Library
2. **E2E Tests**: Playwright or Cypress
3. **Visual Regression**: Percy or Chromatic
4. **Performance**: Lighthouse CI
5. **Accessibility**: axe-core, Pa11y

### Critical Test Cases
- [ ] Navigation dropdown functionality
- [ ] Mobile menu interactions
- [ ] Form validation on contact page
- [ ] Animation performance on low-end devices
- [ ] Responsive layouts across breakpoints
- [ ] Link navigation to all pages
- [ ] Accessibility (WCAG 2.1 AA compliance)

---

## Accessibility (a11y)

### Current Implementation
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Button vs link semantics (correct usage)
- Color contrast (dark mode optimized)

### Improvements Needed
- [ ] Add ARIA labels for icon-only buttons
- [ ] Keyboard navigation testing
- [ ] Focus management in mobile menu
- [ ] Skip to main content link
- [ ] Screen reader testing
- [ ] Form error announcements
- [ ] Loading state announcements
- [ ] Reduced motion support (@media prefers-reduced-motion)

---

## Security Considerations

### Current Status
- No authentication/authorization (public site)
- No user data storage
- No API endpoints yet
- TypeScript for type safety

### When Adding Features
- [ ] Contact form: Implement CSRF protection
- [ ] Contact form: Add rate limiting
- [ ] Contact form: Validate/sanitize inputs
- [ ] Environment variables: Use .env.local for secrets
- [ ] API routes: Implement proper validation
- [ ] Third-party scripts: Use Next.js Script component with strategy

---

## Analytics & Monitoring

### Not Yet Implemented
Currently no analytics or monitoring

### Recommended Setup
1. **Google Analytics 4** - User behavior tracking
2. **Vercel Analytics** - Web Vitals monitoring
3. **Sentry** - Error tracking and monitoring
4. **LogRocket** - Session replay (optional)
5. **Hotjar** - Heatmaps and user feedback (optional)

### Implementation Guide
See DEPLOYMENT.md for Google Analytics integration code

---

## Future Enhancements

### High Priority
1. **Contact Form Backend**
   - Implement form submission handler
   - Email notifications (SendGrid, Resend, Nodemailer)
   - Form validation (Zod, React Hook Form)
   - Success/error states

2. **Image Assets**
   - Add actual client logos
   - Team member photos for About page
   - Service/industry hero images
   - Optimize with next/image

3. **Blog/Insights Section**
   - Thought leadership content
   - MDX-based blog posts
   - Category filtering
   - RSS feed

### Medium Priority
4. **Case Study Filtering**
   - Filter by industry
   - Filter by service type
   - Search functionality

5. **Interactive Demos**
   - Video content
   - Interactive product demos
   - Embedded calculators/ROI tools

6. **Team Profiles**
   - Leadership team bios
   - Consultant profiles
   - Expertise badges

### Low Priority
7. **Multilingual Support**
   - i18n implementation
   - Language switcher
   - Localized content

8. **Dark/Light Mode Toggle**
   - User preference storage
   - System preference detection
   - Smooth theme transitions

9. **Resource Library**
   - Whitepapers/downloads
   - Webinar recordings
   - Gated content with lead capture

10. **Client Portal**
    - Authentication
    - Project dashboards
    - Document sharing

---

## Common Development Tasks

### Adding a New Page
```bash
# 1. Create new route file
# app/new-page/page.tsx

# 2. Follow existing page pattern
'use client';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NewPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Page content */}
      <Footer />
    </div>
  );
}

# 3. Add to Navigation.tsx if needed
# 4. Test routing and mobile menu
```

### Creating a New Component
```bash
# 1. Create file in /components
# components/NewComponent.tsx

# 2. Use TypeScript interface for props
interface NewComponentProps {
  title: string;
  description: string;
}

# 3. Use Framer Motion for animations
import { motion } from 'framer-motion';

# 4. Export default
export default function NewComponent({ title, description }: NewComponentProps) {
  return <motion.div>...</motion.div>;
}

# 5. Import and use in pages
import NewComponent from '@/components/NewComponent';
```

### Modifying Styles
```bash
# Global styles: app/globals.css
# Component styles: Use Tailwind classes in className
# Custom animations: Define motion variants
# Color changes: Update CSS variables in globals.css
```

---

## Troubleshooting

### Common Issues

**Build Errors**
```bash
# Clear Next.js cache
rm -rf .next
npm run dev

# Clear all and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

**Framer Motion Warnings**
- Use `'use client'` directive in components using Framer Motion
- Ensure all motion components have unique keys in lists

**TypeScript Errors**
- Run `npm run build` to see all type errors
- Check tsconfig.json paths are correct (@/* alias)
- Ensure all imports use correct file extensions

**Styling Not Applying**
- Verify Tailwind directives in globals.css (@import "tailwindcss")
- Check CSS variable syntax in @theme block
- Clear browser cache and hard reload

---

## Key Dependencies Explained

### Production Dependencies
- **next**: 16.1.6 - React framework for production
- **react**: 19.2.3 - UI library
- **react-dom**: 19.2.3 - React DOM renderer
- **framer-motion**: 12.35.1 - Animation library (complex animations, scroll effects)
- **lucide-react**: 0.577.0 - Modern icon library (500+ icons, tree-shakeable)

### Development Dependencies
- **@tailwindcss/postcss**: v4 - Tailwind CSS v4 PostCSS plugin
- **tailwindcss**: v4 - Utility-first CSS framework
- **typescript**: v5 - Type-safe JavaScript
- **@types/\***: Type definitions for TypeScript
- **eslint**: v9 - Code linting
- **eslint-config-next**: 16.1.6 - Next.js ESLint configuration

---

## Version History

### March 2026 - Initial Build
- Next.js 16 implementation with App Router
- Complete site structure (11 pages)
- 6 reusable components
- Dark mode emerald theme
- Framer Motion animations
- Full responsive design
- Production-ready codebase

---

## Contact & Support

### Project Information
- **Company**: Fasurtech
- **Website**: (domain TBD)
- **Tech Lead**: (TBD)
- **Framework**: Next.js 16 (App Router)
- **Hosting**: Vercel (recommended)

### Developer Resources
- Next.js Docs: https://nextjs.org/docs
- Framer Motion Docs: https://www.framer.com/motion/
- Tailwind CSS v4 Docs: https://tailwindcss.com/docs
- Lucide Icons: https://lucide.dev

---

## Quick Reference

### Run Commands
```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Create production build
npm start        # Start production server
npm run lint     # Run ESLint
```

### File Naming Conventions
- Pages: `page.tsx` (Next.js App Router convention)
- Components: `PascalCase.tsx` (e.g., ServiceCard.tsx)
- Config: `kebab-case.ts` or `.mjs` (e.g., next.config.ts)

### Import Aliases
- `@/` → Root directory (e.g., `@/components/Navigation`)

### Color Usage
- Primary actions: `bg-primary` (#10b981)
- Hover states: `hover:bg-secondary` (#34d399)
- Backgrounds: `bg-background` (#0f172a)
- Text: `text-foreground` (#ffffff)
- Muted sections: `bg-muted` (#1e293b)

---

*Last updated: June 24, 2026*
*Claude Code Context File for Fasurtech Website*
