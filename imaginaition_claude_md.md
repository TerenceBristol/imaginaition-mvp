# CLAUDE.md
This file provides guidance to Claude Code and Cursor when working with the ImaginAItion website codebase.

## 📋 DOCUMENT MANAGEMENT INSTRUCTIONS

### Update Permissions
- **TECHNICAL PATTERNS**: Auto-update freely based on development learnings and feedback
- **CORE BUSINESS**: Ask permission before making any changes
- **CONFLICTS**: When PRD conflicts with development feedback, ask user to clarify
- **EXPLANATIONS**: Always explain why you're suggesting updates to help user understand

### What Constitutes Each Category

**CORE BUSINESS (Ask Permission First):**
- Services offered and pricing (₱99K, ₱59K-89K, ₱2K/min)
- Target market and positioning (Philippines brands, partnership vs vendor)
- Brand guidelines (colors #000000, #FFFFFF, #2563eb, fonts Montserrat/Inter)
- Company mission, values, competitive advantages
- Contact information and business details
- Marketing messaging and tone

**TECHNICAL PATTERNS (Auto-Update Allowed):**
- Code style and patterns
- Component usage and organization  
- Build commands and workflows
- File structure and architecture
- Performance optimizations
- Development best practices
- Implementation details (as long as brand intent is maintained)

### Change Documentation
When updating TECHNICAL PATTERNS, add entry to CHANGE LOG with:
- Date of change
- Section updated
- Reason for change
- Impact on development

---

## 🎯 CORE BUSINESS REQUIREMENTS
*These require permission to change*

### Project Mission
ImaginAItion landing page MVP to showcase AI creative services and validate service understanding. Single-page website focusing on lead generation and service validation for Philippine brands.

### MVP Scope (Current Phase)
- **Single Landing Page**: Hero + Services + Portfolio + About + Contact sections
- **Static Content**: All content hardcoded in components (no CMS)
- **Service Showcase**: All services with spotlight on three main offerings
- **Portfolio Examples**: Static examples under each service category
- **Lead Generation**: Calendly consultation booking + WhatsApp contact

### Phase 2 (Future Development)
- Multi-page website with individual service pages
- Blog functionality for SEO content
- Dynamic portfolio gallery with CMS integration
- Sanity.io content management system
- Advanced analytics and user tracking features

### Services & Pricing
- **AI Fashion Models**: ₱99K base (pre-made portfolio), +₱49K for custom models
- **Product Photography**: ₱59K single product, ₱89K two products, custom for multi-product
- **Talking Avatars & Human Cloning**: ₱2K per minute, 15-minute minimum (₱30K)

### Target Market
- **Primary**: Brand managers and marketing directors at companies with Philippine market presence
- **Secondary**: Business owners and entrepreneurs needing professional creative assets
- **Geographic Focus**: Philippines market specialization with cultural intelligence

### Brand Positioning
- **Partnership over vendor**: "We're your creative partner" not "software platform"
- **Intelligence over expense**: "67% cost savings vs traditional ₱300K+ per venue"
- **Unlimited possibilities**: "Infinite venues, unlimited variations" vs "single venue limitations"
- **Philippine expertise**: Local market intelligence vs international generic solutions

### Brand Guidelines
- **Primary Colors**: Black (#000000), White (#FFFFFF), Strategic Blue (#2563eb)
- **Typography**: Montserrat (headings), Inter (body text)
- **Aesthetic**: Dark mode Linear.app-inspired minimal design
- **Voice**: Partnership-focused, results-driven, professionally approachable

### Contact Strategy
- **Primary**: Calendly consultation booking integration
- **Secondary**: WhatsApp contact link (floating button)
- **Minimize**: Contact forms - funnel to booking/WhatsApp instead

### Business Messaging
- Emphasize "partnership" language over "vendor" or "platform"
- Highlight cost comparison: "₱100K unlimited venues vs ₱300K single venue"
- Philippines market cultural intelligence as competitive advantage
- Unlimited creative possibilities without physical limitations

---

## ⚙️ TECHNICAL PATTERNS
*Can be auto-updated based on development learnings*

### Current Tech Stack (MVP)
- **Framework**: Next.js 14 with App Router and TypeScript
- **Styling**: Tailwind CSS + ShadCN UI components ("New York" style)
- **Content**: Static content approach (no CMS for MVP)
- **Deployment**: Vercel with custom domain (imaginaition.ph)
- **UI Library**: ShadCN UI with custom JSON/CSS configuration provided by user

### Build Commands
- `npm run dev`: Start development server (localhost:3000)
- `npm run build`: Build for production
- `npm run lint`: Run ESLint checks
- `npm run typecheck`: Run TypeScript type checking
- `npm run start`: Start production build locally

### Code Style Guidelines

#### Component Usage
- Use ShadCN UI components from `@/components/ui/` for all UI elements
- Import ShadCN components before custom components
- Prefer composition over custom styled components
- Example: `import { Button } from "@/components/ui/button"`

#### TypeScript Standards
- Strict mode enabled - all types must be defined
- Use interfaces for component props and data structures
- Prefer `interface` over `type` for object definitions
- Example: `interface PortfolioItemProps { title: string; description: string; }`

#### Import Organization
```typescript
// 1. React and Next.js imports
import React from 'react'
import Image from 'next/image'

// 2. Third-party libraries
import { groq } from 'next-sanity'

// 3. ShadCN UI components
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

// 4. Internal components and utilities
import { OptimizedImage } from '@/components/OptimizedImage'
import { client } from '@/lib/sanity'
```

#### Naming Conventions
- Components: PascalCase (`PortfolioGallery`, `ServiceCard`)
- Files: kebab-case for pages, PascalCase for components
- Variables/functions: camelCase (`portfolioItems`, `handleSubmit`)
- Constants: UPPER_SNAKE_CASE (`CONTACT_EMAIL`, `API_ENDPOINTS`)

### Design Implementation

#### Dark Mode Theme (Primary)
- Background: `bg-black` (#000000) - Pure black for Linear.app aesthetic
- Text: `text-white` (#FFFFFF) - Pure white for maximum contrast
- Muted: `bg-gray-900` (#1a1a1a) for secondary backgrounds
- Borders: `border-gray-800` for subtle divisions
- Primary CTA: `bg-blue-600 hover:bg-blue-700` (#2563eb strategic blue)

#### Typography Implementation
- Headlines: `font-montserrat font-bold` (Montserrat Bold)
- Subheadings: `font-montserrat font-semibold` (Montserrat Semi-Bold)
- Body text: `font-inter` (Inter Regular)
- All text should be `text-white` on dark backgrounds

#### ShadCN Component Patterns
```typescript
// Standard button patterns
<Button size="lg" className="bg-blue-600 hover:bg-blue-700 font-montserrat">
  Book Consultation
</Button>

// Card styling for portfolio items
<Card className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-colors">
```

### File Structure (MVP)
```
src/
├── app/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Root layout with fonts
│   └── globals.css           # Global styles + ShadCN theme
├── components/
│   ├── ui/                   # ShadCN UI components
│   ├── sections/             # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Portfolio.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Footer.tsx
├── lib/
│   └── utils.ts              # Utility functions
├── data/
│   ├── services.ts           # Static service data
│   └── portfolio.ts          # Static portfolio examples
└── public/
    └── portfolio/            # Portfolio images organized by service
```

### Performance Standards
- Page load: <2 seconds target
- Lighthouse scores: 90+ for Performance, SEO, Accessibility
- Image optimization: Use Next.js Image component with lazy loading
- Core Web Vitals: LCP <1.5s, FID <100ms, CLS <0.1

### Static Content Patterns (MVP)
```typescript
// Service data structure
interface Service {
  title: string;
  pricing: string;
  description: string;
  examples: string[];
  highlights: string[];
}

// Static service data (data/services.ts)
export const services = {
  fashionModels: {
    title: "AI Fashion Models",
    pricing: "₱99K base + ₱49K custom options",
    description: "Unlimited model variations in infinite venues",
    examples: ["/portfolio/fashion-1.jpg", "/portfolio/fashion-2.jpg"],
    highlights: ["Pre-made portfolio available", "Custom model creation", "Exclusive ownership"]
  },
  // ... other services
}

// Portfolio examples structure (data/portfolio.ts)
export const portfolioExamples = {
  fashionModels: [
    { image: "/portfolio/fashion-1.jpg", title: "Corporate Fashion Shoot", description: "Professional models in business attire" },
    // ... more examples
  ]
}
```

### Landing Page Component Patterns
```typescript
// Hero Section with CTA
<section className="min-h-screen bg-black text-white flex items-center">
  <div className="container mx-auto px-4">
    <h1 className="font-montserrat font-bold text-5xl mb-6">
      Unlimited Creative Possibilities at 67% Less Cost
    </h1>
    <p className="font-inter text-xl text-gray-300 mb-8">
      ImaginAItion delivers studio-quality AI creative content...
    </p>
    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 font-montserrat">
      Book Consultation
    </Button>
  </div>
</section>

// Service Showcase Card
<Card className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-colors">
  <CardContent className="p-6">
    <h3 className="font-montserrat font-semibold text-white text-2xl mb-4">
      {service.title}
    </h3>
    <p className="text-blue-400 font-montserrat font-medium mb-4">
      {service.pricing}
    </p>
    <p className="text-gray-300 font-inter mb-6">
      {service.description}
    </p>
    <div className="grid grid-cols-2 gap-4 mb-6">
      {service.examples.map((img, idx) => (
        <Image key={idx} src={img} alt="" width={300} height={200} className="rounded-lg" />
      ))}
    </div>
    <ul className="space-y-2">
      {service.highlights.map((highlight, idx) => (
        <li key={idx} className="text-gray-300 font-inter flex items-center">
          <CheckIcon className="w-4 h-4 text-blue-400 mr-2" />
          {highlight}
        </li>
      ))}
    </ul>
  </CardContent>
</Card>

// Smooth scroll navigation
<nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <div className="font-montserrat font-bold text-xl text-white">ImaginAItion</div>
    <div className="hidden md:flex space-x-8">
      <a href="#services" className="text-gray-300 hover:text-white font-inter">Services</a>
      <a href="#portfolio" className="text-gray-300 hover:text-white font-inter">Portfolio</a>
      <a href="#about" className="text-gray-300 hover:text-white font-inter">About</a>
    </div>
    <Button size="md" className="bg-blue-600 hover:bg-blue-700 font-montserrat">
      Book Consultation
    </Button>
  </div>
</nav>
```

### Development Workflow (MVP)
1. Run `npm run dev` for local development
2. Use ShadCN CLI: `npx shadcn@latest add [component]` for new components
3. Apply custom ShadCN configuration from user-provided JSON/CSS files
4. Focus on single page performance and mobile responsiveness
5. Always run `npm run lint && npm run typecheck` before committing
6. Test all sections work smoothly with anchor link navigation
7. Verify portfolio images load quickly with lazy loading

### ShadCN Configuration
- User will provide custom JSON/CSS configuration for ShadCN components
- Apply configuration to maintain brand consistency with Linear.app aesthetic
- Ensure dark mode theme is properly configured across all components
- Test component variants (buttons, cards, etc.) with custom styling

### MVP Content Strategy
- All content is static and embedded in components
- Portfolio examples organized by service type in `/public/portfolio/`
- Service data stored in structured TypeScript objects
- Easy to update through direct code changes
- Prepared for future CMS migration in Phase 2

### Phase 2 Preparation Notes
- Component structure designed for easy CMS integration
- Content separation makes migration to dynamic content straightforward
- Static asset organization matches future dynamic requirements
- Code architecture supports adding individual service pages
- Navigation structure prepared for multi-page expansion

### Important Technical Notes
- **NEVER** use localStorage or sessionStorage (not supported in artifacts)
- **ALWAYS** use `className` instead of inline styles
- **PREFER** ShadCN components over custom implementations
- **MAINTAIN** dark mode aesthetic throughout
- **ENSURE** all text is readable on dark backgrounds
- **TEST** mobile responsiveness for all components
- **VERIFY** Montserrat/Inter font usage for brand consistency

---

## 📚 LESSONS LEARNED
*Add development insights here as project progresses*

*(This section will grow during development based on what works well and what doesn't)*

---

## 📝 CHANGE LOG

### MVP Scope Simplification
**Date**: [Current update]  
**Type**: Major scope change - Full website to MVP landing page  
**Changes**: 
- Simplified from multi-page website to single landing page MVP
- Removed Sanity.io CMS integration (moved to Phase 2)
- Changed to static content approach for faster development
- Updated file structure for single page architecture
- Added Phase 2 roadmap for future feature expansion
**Reason**: Focus on rapid market entry and service validation before building complex features  
**Impact**: Significantly faster development timeline, easier maintenance, clearer MVP success metrics  

*(Future updates will be logged here automatically)*

---

## 🤖 AI AGENT OPTIMIZATION
- This project is optimized for Claude 4 Sonnet + Cursor
- Use "think harder" or "ultrathink" for complex architectural decisions
- Components are designed for copy-paste approach (ShadCN philosophy)
- Architecture supports future AI chatbot integration
- Code structure enables multi-file edits and autonomous development