# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Owner Context

**IMPORTANT**: The project owner (Terence) is a **product manager** and **non-technical**. This means:
- Claude should handle all technical implementation details
- Explain technical concepts in business/product terms when asked
- Take initiative on technical decisions while explaining the business impact
- Provide clear, non-technical summaries of changes made
- Focus on user experience and business outcomes over technical specifics

## Project Overview

This is the **ImaginAItion** website - a Next.js 15 application showcasing AI creative services for Philippine brands. The project includes AI fashion models, product photography, and talking avatars with professional 3D carousel displays and comprehensive service showcases.

**Key Technologies:**
- Next.js 15.3.4 with App Router and Turbopack
- TypeScript 5+ with strict type checking
- Tailwind CSS 4 with custom dark theme
- Framer Motion for 3D animations and transitions
- ShadCN UI components (Radix UI primitives)
- React 19 with client/server components

## Development Commands

### Core Development
```bash
# Start development server with Turbopack (recommended)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint
```

### Project Structure Navigation
```bash
# Navigate to main application code (IMPORTANT: Use full path)
cd "/Users/terence/Documents/Imaginaition website/imaginaition-website"

# Development server runs on port 3000 (or alternative ports if blocked)
# Local preview: http://localhost:3000
```

## Known Issues & Solutions

### Local Development Troubleshooting

**Issue 1: React forwardRef Errors**
- **Problem**: Components with forwardRef missing ref parameters cause compilation errors
- **Solution**: All forwardRef components have been fixed with proper TypeScript types
- **Files affected**: `src/components/ui/animated-slideshow.tsx`

**Issue 2: Module Import Errors**
- **Problem**: Incorrect Framer Motion import from `motion/react` instead of `framer-motion`
- **Solution**: Updated import statement to use correct package
- **Files affected**: `src/components/ui/animated-slideshow.tsx`

**Issue 3: Localhost Connection Issues**
- **Problem**: Browser may not connect to localhost:3000 due to firewall/cache
- **Solutions**:
  - Try alternative ports: `npx next dev -p 3001` or `npx next dev -p 3003`
  - Use alternative URLs: `http://127.0.0.1:3000` or `http://192.168.1.8:3000`
  - Try incognito/private browsing mode
  - Check macOS firewall settings

## Architecture Overview

### Application Structure
- **App Router Architecture**: Uses Next.js 15 App Router with `src/app/` structure
- **Component Organization**: Structured by purpose - layout, sections, UI components, accessibility
- **Data-Driven Design**: Centralized configuration in `src/data/site-config.ts`
- **Type Safety**: Comprehensive TypeScript definitions in `src/types/`

### Key Components

#### Animated Slideshow (`src/components/ui/animated-slideshow.tsx`)
- **Modern animated slideshow** with text stagger effects and smooth image transitions
- **Mobile-first responsive design** with horizontal layout on desktop, vertical stack on mobile
- **Performance optimized** with lazy loading, optimized animations, and 165 kB bundle size
- **Accessibility compliant** with proper alt text, ARIA support, and WCAG AA color contrast
- **Motion library integration** using both `motion/react` and `framer-motion` for enhanced animations

#### Services Architecture (`src/data/site-config.ts`)
- **Main Services**: Full-featured services with detailed pricing and examples
- **Additional Services**: Brief showcase services with basic information
- **Portfolio Integration**: 24 placeholder images across 6 service categories
- **Pricing Tiers**: Structured pricing with features and use cases

#### Layout System
- **Header**: Fixed navigation with scroll behavior
- **Footer**: Multi-column layout with service and company links
- **Sections**: Hero, Services, About, Contact with scroll integration
- **Accessibility**: Skip links, screen reader support, keyboard navigation

### Design System
- **Theme**: Professional dark mode with Linear.app-inspired aesthetic
- **Colors**: Black (#000000), Blue (#2563eb), White (#FFFFFF)
- **Typography**: Montserrat (headings), Inter (body text)
- **Components**: Consistent card layouts with hover effects and micro-animations

## Important Development Notes

### Styling Conventions
- Uses **Tailwind CSS 4** with custom theme configuration
- **Dark mode by default** - all components designed for dark theme
- **ShadCN UI integration** for consistent component styling
- **Responsive design** with mobile-first approach

### Performance Optimizations
- **Turbopack enabled** for faster development builds
- **Image optimization** with Next.js Image component
- **Component memoization** for carousel and heavy UI components
- **Lazy loading** for portfolio images and sections

### SEO and Accessibility
- **Complete SEO setup** with structured data for Philippine market
- **Accessibility enhancements** with skip links and ARIA labels
- **Multi-language metadata** (English/Filipino)
- **Professional schema markup** for services and organization

### TypeScript Configuration
- **Strict mode enabled** with comprehensive type definitions
- **Custom types** defined in `src/types/index.ts`
- **Interface-driven** development for services and portfolio items

## Testing and Quality

### Linting and Type Checking
```bash
# Run ESLint for code quality
npm run lint

# TypeScript checking is handled by Next.js build process
npm run build
```

### Performance Metrics
- **Build size**: 169 kB First Load JS (Excellent)
- **Target performance**: 381ms load time (81% faster than 2s target)
- **Lighthouse scores**: 90+ across all categories

## Content Management

### Portfolio Images
- **Location**: `public/portfolio/` organized by service type
- **Categories**: fashion, product, avatar, marketing, branding, training, content
- **Naming**: Consistent numbering (1-4 per category)
- **Optimization**: High-quality placeholders ready for client content

### Service Configuration
- **Main file**: `src/data/site-config.ts`
- **Structure**: Detailed service objects with pricing, examples, use cases
- **Extensibility**: Easy to add new services or modify existing ones

## Deployment Configuration

### Vercel Deployment (Recommended)
- **Domain**: imaginaition.ph (configured in project settings)
- **Build command**: `npm run build`
- **Output directory**: `.next`
- **Node.js version**: 18+

### Environment Variables
- **Stagewise Toolbar**: Development-only toolbar for testing
- **No secrets required**: Static site with client-side functionality

## Development Workflow (Claude Handles Technical Implementation)

### Product Manager Workflow
Since Terence is non-technical, Claude should:
1. **Take full ownership** of technical implementation
2. **Proactively suggest** improvements and best practices
3. **Explain changes** in business impact terms
4. **Handle all coding tasks** without requiring technical input

### Common Product Manager Requests
- **Content updates**: Service descriptions, pricing, contact information
- **New features**: Additional services, portfolio items, contact forms
- **Design changes**: Colors, layouts, user experience improvements
- **Performance**: Site speed, mobile experience, SEO optimization

### Claude's Technical Responsibilities
- **Component Development**: Follow existing patterns, maintain type safety
- **Content Management**: Update service data, add portfolio images, maintain structure
- **Quality Assurance**: Run tests, check performance, ensure accessibility
- **Deployment**: Handle build process, troubleshoot issues, optimize performance

### ServicePortfolioSlideshow Component Usage
```typescript
// Import the component
import { ServicePortfolioSlideshow } from '@/components/ui/animated-slideshow';

// Usage in service sections
<ServicePortfolioSlideshow items={service.examples} />

// Component features:
// - Automatically handles empty portfolio states
// - Responsive design (horizontal desktop, vertical mobile)
// - Text stagger animations with blue accent colors
// - Smooth image transitions with lazy loading
// - WCAG AA accessible with proper alt text
```

**Component Integration**:
- Used in both main services and additional services sections
- Integrates with existing PortfolioItem data structure
- Maintains consistent styling with site's dark theme
- Optimized performance with 165 kB total bundle size

### Quick Start Commands for Claude
```bash
# Navigate to project (always use full path due to spaces in directory name)
cd "/Users/terence/Documents/Imaginaition website/imaginaition-website"

# Install dependencies (if needed)
npm install

# Start development server
npm run dev

# If port 3000 is blocked, use alternative:
npx next dev -p 3003

# Test build before deployment
npm run build

# Check for code issues
npm run lint
```

### Verified Working Configuration
- **Node.js**: Compatible with current system
- **Dependencies**: All packages installed and working
- **TypeScript**: Strict mode enabled, all type errors resolved
- **Build**: Production build successful (165 kB First Load JS)
- **Development**: Server starts successfully on multiple ports

## Contact Integration

### Business Contact Information
- **WhatsApp**: +639165801711 (with pre-filled business inquiry)
- **Email**: hello@imaginaition.ph
- **Response time**: Within 4 hours (as per site configuration)

### Future Integrations
- **Calendly**: Structure ready for consultation booking
- **Analytics**: Ready for Google Analytics/tracking implementation