# ImaginAItion Website PRD
## AI-Optimized Dark Mode Business Website

### Document Version: 1.0
### Target AI Agent: Claude 4 Sonnet + Cursor
### Project Type: Business Website with Integrated Blog

---

## Executive Summary

- **Project Name**: ImaginAItion Business Website
- **Project Type**: Modern Business Website with Blog Integration
- **Primary Objective**: Generate consultation bookings and establish thought leadership through SEO content
- **Target Market**: Philippine brands seeking AI creative services
- **Success Metrics**: <2s page load time, 90+ Lighthouse score, conversion tracking setup

### Technical Architecture Overview
- **Frontend**: Next.js 14 + TypeScript + Tailwind CSS + ShadCN UI
- **Content Approach**: Static content (no CMS for MVP)
- **Component Library**: ShadCN UI with custom JSON/CSS configuration
- **Hosting**: Vercel with custom domain (imaginaition.ph)
- **Performance**: Core Web Vitals optimization, mobile-first design
- **Deployment**: Single page application optimized for fast loading

---

## Problem Statement & Goals

### User Problem
Potential clients cannot easily evaluate ImaginAItion's AI creative services, understand pricing structure, or see quality examples, resulting in missed consultation opportunities and reduced market credibility.

### Business Goals
- **Service Validation**: Confirm potential clients understand ImaginAItion's AI creative offerings
- **Lead Generation**: Generate initial consultation bookings through Calendly integration
- **Market Testing**: Test messaging, positioning, and service presentation effectiveness
- **Quick Market Entry**: Establish online presence rapidly to start capturing opportunities
- **Foundation Building**: Create base for future website expansion in Phase 2

### User Goals
- **Service Understanding**: Quickly grasp what ImaginAItion offers and how it differs from traditional services
- **Quality Assessment**: View portfolio examples to evaluate service quality and style
- **Cost Comparison**: Understand pricing and value proposition vs traditional alternatives
- **Easy Contact**: Book consultations or make quick inquiries through simple contact methods

---

## Target Audience & User Personas

### Primary Audience: Brand Managers & Marketing Directors
- **Demographics**: 28-45 years old, working at brands with Philippine market presence
- **Pain Points**: High creative production costs, long timelines, limited venue options
- **Goals**: Reduce creative costs while maintaining quality, faster campaign execution
- **Behavior**: Research-focused, comparison shopping, ROI-conscious

### Secondary Audience: Business Owners & Entrepreneurs
- **Demographics**: 25-50 years old, growing businesses needing professional creative assets
- **Pain Points**: Limited marketing budgets, lack of professional creative resources
- **Goals**: Professional brand presence without traditional agency costs
- **Behavior**: Cost-conscious, efficiency-focused, partnership-oriented

### User Journey Mapping
1. **Discovery**: Landing via SEO, social media, or referrals
2. **Service Evaluation**: Reviewing service pages and pricing
3. **Quality Assessment**: Browsing portfolio examples and demonstrations
4. **Credibility Check**: Reading about company, process, and client success
5. **Contact Decision**: Booking consultation or WhatsApp inquiry

---

## Technical Requirements

### Recommended Tech Stack

**Frontend Framework**: Next.js 14 with TypeScript + ShadCN UI
- Server-side rendering for optimal SEO performance
- ShadCN UI provides professional, accessible components out of the box
- Copy-paste component approach gives full control for AI agent customization
- Built on Radix UI primitives for robust, production-ready functionality
- Perfect integration with Tailwind CSS and dark mode theming
- Linear.app aesthetic achievable with "New York" style configuration

**Styling & Design**: Tailwind CSS + ShadCN UI Component Library
- ShadCN UI for professional, accessible component foundation
- Dark mode implementation with Linear.app aesthetic ("New York" style)
- Responsive design with mobile-first approach
- Copy-paste component approach for full customization control
- Built on Radix UI primitives for robust functionality

**Content Management**: Sanity.io
- Visual editor for non-technical content updates
- Structured content for blog posts and portfolio items
- Real-time collaboration and preview capabilities
- Excellent Next.js integration

**Hosting & Deployment**: Vercel
- Automatic deployments from GitHub
- Global CDN for fast loading worldwide
- Built-in performance monitoring
- Seamless custom domain setup

### Architecture Overview

**Component-Based Architecture**:
```
src/
├── app/                    # Next.js 14 App Router
│   ├── (pages)/           # Page routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components
│   ├── sections/         # Page sections
│   └── layout/           # Layout components
├── lib/                  # Utility functions
├── sanity/               # Sanity CMS configuration
└── types/                # TypeScript type definitions
```

**Data Flow Pattern**:
- Static generation for marketing pages
- Dynamic rendering for blog content
- Client-side interactions for forms and CTAs
- Real-time content updates via Sanity webhooks

### Performance Requirements

**Core Web Vitals Targets**:
- **Largest Contentful Paint (LCP)**: <1.5 seconds
- **First Input Delay (FID)**: <100 milliseconds
- **Cumulative Layout Shift (CLS)**: <0.1
- **Lighthouse Performance Score**: 90+

**Optimization Strategies**:
- Next.js Image component with lazy loading
- Code splitting and dynamic imports
- Font optimization with Google Fonts
- Asset compression and minification
- CDN delivery via Vercel Edge Network

---

## Design System Specifications

### Color System (Dark Mode Primary)

**Foundation Colors**:
```css
/* Primary Colors */
--color-black: #000000;        /* Headlines, primary text */
--color-white: #FFFFFF;        /* Backgrounds, contrast elements */

/* Strategic Grays */
--color-gray-900: #1a1a1a;     /* Secondary backgrounds */
--color-gray-600: #666666;     /* Supporting text, borders */
--color-gray-100: #f5f5f5;     /* Light mode elements */

/* Accent Color */
--color-blue-600: #2563eb;     /* CTAs, links, strategic emphasis */
```

**Usage Guidelines**:
- Black (#000000) for headlines and primary text
- White (#FFFFFF) for main backgrounds and contrast
- Strategic use of blue (#2563eb) for CTAs and interactive elements
- Grays for hierarchy and supporting elements

### Typography System

**Primary Typeface**: Montserrat
- **Weights**: Regular (400), Medium (500), Semi-Bold (600), Bold (700)
- **Usage**: Headlines, subheadings, navigation, CTAs
- **Implementation**: Google Fonts with display=swap

**Secondary Typeface**: Inter
- **Weights**: Regular (400), Medium (500)
- **Usage**: Body text, captions, form labels
- **Implementation**: Google Fonts with display=swap

**Typography Scale**:
```css
/* Headings */
.text-h1 { font-size: 2.5rem; font-weight: 700; font-family: Montserrat; }
.text-h2 { font-size: 2rem; font-weight: 600; font-family: Montserrat; }
.text-h3 { font-size: 1.5rem; font-weight: 500; font-family: Montserrat; }

/* Body Text */
.text-body { font-size: 1rem; font-weight: 400; font-family: Inter; }
.text-caption { font-size: 0.875rem; font-weight: 400; font-family: Inter; }
```

### Design Principles

**Linear.app-Inspired Aesthetic**:
- Minimal, clean layouts with strategic white space
- Focus on content hierarchy and readability
- Subtle shadows and borders for depth
- Smooth animations and micro-interactions

**Dark Mode Implementation**:
- Dark backgrounds (#000000) with white text (#FFFFFF)
- Strategic use of grays for depth and hierarchy
- High contrast ratios for accessibility (WCAG 2.1 AA)
- Blue accents for interactive elements and emphasis

---

## Functional Requirements

### MVP Landing Page Structure

#### 1. Hero Section
**Purpose**: Immediately communicate value proposition and capture attention

**Components**:
- **Headline**: "Unlimited Creative Possibilities at 67% Less Cost"
- **Subheadline**: Clear explanation of ImaginAItion's services and advantages
- **Primary CTA**: "Book Consultation" button linking to Calendly
- **Visual Element**: Hero image or video showcasing AI creative capabilities
- **Key Metrics**: Cost comparison highlight (₱100K vs ₱300K traditional)

**User Stories**:
- As a brand manager, I want to immediately understand what ImaginAItion offers so that I can decide if it's relevant to my needs
- As a business owner, I want to see the cost advantage so that I can quickly assess potential ROI

#### 2. Services Overview Section
**Purpose**: Showcase all services with spotlight on three main offerings

**Main Services (Spotlight Treatment)**:
- **AI Fashion Models**: ₱99K base + custom options, portfolio examples, key benefits
- **Product Photography**: ₱59K-89K tiered pricing, before/after examples, unlimited venues messaging
- **Talking Avatars & Human Cloning**: ₱2K/min pricing, demonstration examples, use cases

**Additional Services (Brief Mentions)**:
- AI-powered marketing content creation
- Brand visual identity development
- Custom AI model training for specific industries
- Real-time AI content generation tools
- *Note: Specific additional services list to be provided by user*

**Portfolio Examples**:
- 2-3 high-quality examples under each main service
- Static images with brief descriptions
- Before/after comparisons where applicable
- Quality demonstrations showcasing professional results

**User Stories**:
- As a potential client, I want to see examples of work quality so that I can assess if it meets my standards
- As a brand manager, I want to understand all available services so that I can consider the full partnership potential

#### 3. About Section (Brief)
**Purpose**: Build credibility and communicate competitive advantages

**Components**:
- **Company Mission**: Making impossible creative projects possible through AI
- **Philippine Market Expertise**: Cultural intelligence and local market understanding
- **Partnership Approach**: "We're partners, not just a software platform"
- **Competitive Advantages**: vs traditional agencies and international competitors
- **Team Credibility**: Brief background without specific team member details

**User Stories**:
- As a business owner, I want to understand who ImaginAItion is so that I can assess their credibility
- As a brand manager, I want to know their competitive advantages so that I can justify choosing them over alternatives

#### 4. Contact & CTA Section
**Purpose**: Convert visitors to consultation bookings

**Components**:
- **Primary CTA**: Calendly consultation booking widget/button
- **Secondary Contact**: WhatsApp floating button for quick questions
- **Contact Information**: Email and response time commitment
- **Consultation Value**: What clients get from the 30-minute consultation
- **Next Steps**: Clear explanation of the consultation → proposal → partnership process

**User Stories**:
- As a potential client, I want to easily book a consultation so that I can learn more about services
- As a busy executive, I want to quickly ask questions via WhatsApp so that I can get immediate clarification

### Navigation & User Experience

**Single Page Navigation**:
- **Smooth Scrolling**: Anchor links to each section
- **Fixed Header**: Logo + navigation links + primary CTA button
- **Mobile Optimization**: Hamburger menu with section links
- **Progressive Disclosure**: Information hierarchy from high-level to detailed

**Loading & Performance**:
- **Lazy Loading**: Images load as user scrolls
- **Optimized Assets**: All images optimized for web delivery
- **Minimal JavaScript**: Essential functionality only for fast loading

---

## Phase 2 Roadmap & Future Development

### Multi-Page Website Expansion

**Individual Service Pages**:
- Dedicated pages for each service with detailed information
- Comprehensive pricing breakdowns and package options
- Extended portfolio galleries with filtering and categorization
- Service-specific testimonials and case studies
- Detailed process explanations and FAQ sections

**Dynamic Portfolio System**:
- Filterable and searchable portfolio gallery
- Category-based organization by service type
- Modal views for detailed image inspection
- Admin panel for easy portfolio management
- Integration with content management system

**Blog & SEO Content System**:
- SEO-optimized blog architecture with article management
- Category and tag-based content organization
- Search functionality and related article recommendations
- Social sharing integration and comment system
- Philippines market-focused content strategy for organic traffic

### Content Management Integration

**Sanity.io CMS Implementation**:
- Visual editor for non-technical content updates
- Structured content types for blogs, portfolio, and services
- Real-time collaboration and preview capabilities
- Easy media management and optimization
- Workflow approval processes for content publishing

### Advanced Features

**Enhanced User Experience**:
- Advanced navigation with mega menus and breadcrumbs
- User account system for returning visitors
- Personalized content recommendations
- Advanced analytics and user behavior tracking
- A/B testing capabilities for conversion optimization

**Business Intelligence Features**:
- Lead scoring and qualification systems
- CRM integration for lead management
- Advanced consultation booking with availability management
- Automated email marketing sequences
- Performance dashboards and reporting

**AI Chatbot Integration**:
- Context-aware AI assistant for visitor questions
- Service recommendation engine based on user inputs
- Automated lead qualification and routing
- Integration with consultation booking system
- Multi-language support for broader market reach

### Technical Enhancements

**Performance & Scalability**:
- Advanced caching strategies and CDN optimization
- Image optimization pipeline with multiple formats
- Progressive web app (PWA) capabilities
- Enhanced security measures and monitoring
- Multi-region deployment for global performance

**Integration Ecosystem**:
- CRM system integration (HubSpot, Salesforce)
- Email marketing platform connections
- Social media management tools
- Analytics and conversion tracking enhancement
- Payment processing for service deposits

### Timeline Considerations

**Phase 2 Development Approach**:
- Iterative development based on MVP feedback and learnings
- User-driven feature prioritization based on actual needs
- A/B testing of new features against MVP baseline
- Performance monitoring to ensure enhancements don't degrade speed
- Continuous deployment with rollback capabilities

---

## Content Management System Setup

## MVP Content Management

### Static Content Approach

**Content Organization**:
- All content embedded directly in React components
- Portfolio examples stored as static assets in `/public/portfolio/`
- Service information hardcoded in component data structures
- Easy updates through direct code modifications

**Content Structure**:
```typescript
// Static service data
const services = {
  fashionModels: {
    title: "AI Fashion Models",
    pricing: "₱99K base + ₱49K custom options",
    description: "Unlimited model variations in infinite venues",
    examples: ["/portfolio/fashion-1.jpg", "/portfolio/fashion-2.jpg"],
    highlights: ["Pre-made portfolio available", "Custom model creation", "Exclusive ownership"]
  },
  productPhotography: {
    title: "Product Photography", 
    pricing: "₱59K-89K tiered pricing",
    description: "Your products in unlimited environments",
    examples: ["/portfolio/product-1.jpg", "/portfolio/product-2.jpg"],
    highlights: ["Unlimited venues", "Before/after transformations", "70% cost savings"]
  },
  talkingAvatars: {
    title: "Talking Avatars & Human Cloning",
    pricing: "₱2K/min, 15-minute minimum", 
    description: "Interactive brand representatives with unlimited usage",
    examples: ["/portfolio/avatar-1.jpg", "/portfolio/avatar-2.jpg"],
    highlights: ["Complete digital twin creation", "Multi-language support", "Voice cloning technology"]
  }
}
```

**Asset Management**:
- Portfolio images optimized and stored in `/public/portfolio/`
- Organized by service type for easy reference
- Next.js Image component for automatic optimization
- WebP format with fallbacks for maximum compatibility

**Content Updates**:
- Direct code modifications for content changes
- Version control tracking of all content updates
- Simple deployment process through Vercel
- Prepared structure for future CMS migration in Phase 2

---

## Third-Party Integrations

### Consultation Booking: Calendly

**Integration Approach**:
- Embedded Calendly widget on dedicated consultation page
- Inline booking widgets in strategic page locations
- Popup booking modals for high-conversion placements
- Custom styling to match brand design system

**Technical Implementation**:
```typescript
// Calendly widget component
interface CalendlyWidgetProps {
  url: string;
  height?: number;
  appearance?: 'dark' | 'light';
}

const CalendlyWidget: React.FC<CalendlyWidgetProps> = ({ 
  url, 
  height = 600, 
  appearance = 'dark' 
}) => {
  return (
    <div className="calendly-inline-widget" 
         data-url={url}
         style={{ minWidth: '320px', height: `${height}px` }}
         data-appearance={appearance}>
    </div>
  );
};
```

### WhatsApp Contact Integration

**Implementation**:
- Floating WhatsApp button with custom styling
- Pre-filled message template for business inquiries
- Mobile-optimized contact experience
- Strategic placement for quick access

**Technical Specification**:
```typescript
const WhatsAppContact = () => {
  const message = "Hi! I'm interested in ImaginAItion's AI creative services.";
  const phoneNumber = "639XXXXXXXXX"; // Replace with actual number
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <a href={whatsappUrl} 
       target="_blank" 
       rel="noopener noreferrer"
       className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 
                  text-white p-3 rounded-full shadow-lg transition-colors z-50">
      <WhatsAppIcon className="w-6 h-6" />
    </a>
  );
};
```

### Analytics: Google Analytics 4

**Implementation Strategy**:
- Conversion tracking for consultation bookings
- Goal tracking for key user actions
- E-commerce tracking for service inquiries
- Custom events for portfolio engagement

**Technical Setup**:
```typescript
// Google Analytics 4 configuration
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const gtag = (...args: any[]) => {
  (window as any).gtag = (window as any).gtag || function () {
    ((window as any).gtag.q = (window as any).gtag.q || []).push(arguments);
  };
  (window as any).gtag(...args);
};

// Track consultation booking
export const trackConsultationBooking = () => {
  gtag('event', 'consultation_booking', {
    event_category: 'engagement',
    event_label: 'calendly_booking',
    value: 1
  });
};

// Track portfolio engagement
export const trackPortfolioView = (serviceType: string) => {
  gtag('event', 'portfolio_view', {
    event_category: 'engagement',
    event_label: serviceType,
    value: 1
  });
};
```

---

## Component Specifications

### ShadCN UI Component Implementation

**Core Components for ImaginAItion Website**:

**Button Component (ShadCN)**:
```typescript
import { Button } from "@/components/ui/button"

// Primary CTA buttons
<Button size="lg" className="bg-blue-600 hover:bg-blue-700 font-montserrat">
  Book Consultation
</Button>

// Secondary buttons
<Button variant="outline" size="md" className="border-gray-600 hover:bg-white hover:text-black">
  View Portfolio
</Button>

// Ghost buttons for navigation
<Button variant="ghost" size="sm">
  Learn More
</Button>
```

**Card Component for Portfolio Items**:
```typescript
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface PortfolioCardProps {
  title: string;
  description: string;
  imageUrl: string;
  serviceType: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  title, 
  description, 
  imageUrl, 
  serviceType 
}) => {
  return (
    <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-600 transition-colors">
      <CardHeader className="pb-3">
        <div className="aspect-video relative overflow-hidden rounded-md">
          <OptimizedImage 
            src={imageUrl} 
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-white font-montserrat">{title}</CardTitle>
        <CardDescription className="text-gray-400 mt-2">
          {description}
        </CardDescription>
        <Badge variant="secondary" className="mt-3">
          {serviceType}
        </Badge>
      </CardContent>
    </Card>
  );
};
```

**Navigation Menu Component**:
```typescript
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const MainNavigation = () => {
  return (
    <NavigationMenu className="font-montserrat">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/services/ai-fashion-models">
            AI Fashion Models
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/services/product-photography">
            Product Photography
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/services/talking-avatars">
            Talking Avatars
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/portfolio">
            Portfolio
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/blog">
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
```

**Dialog Component for Portfolio Viewing**:
```typescript
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const PortfolioDialog: React.FC<{item: PortfolioItem}> = ({ item }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" className="p-0 h-auto">
          <OptimizedImage 
            src={item.images[0]} 
            alt={item.title}
            width={400}
            height={300}
            className="rounded-lg"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-black border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-white font-montserrat">
            {item.title}
          </DialogTitle>
          <DialogDescription className="text-gray-400">
            {item.description}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {item.images.map((image, index) => (
            <OptimizedImage 
              key={index}
              src={image} 
              alt={`${item.title} ${index + 1}`}
              width={600}
              height={400}
              className="rounded-lg"
            />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
```

**Badge Component for Service Categories**:
```typescript
import { Badge } from "@/components/ui/badge"

// Service type badges
<Badge variant="default" className="bg-blue-600 text-white">
  AI Fashion Models
</Badge>

<Badge variant="secondary" className="bg-gray-800 text-gray-200">
  Product Photography
</Badge>

<Badge variant="outline" className="border-gray-600 text-gray-300">
  Talking Avatars
</Badge>
```

**Input Components for Contact Forms**:
```typescript
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-white font-inter">Name</Label>
        <Input 
          id="name"
          type="text"
          className="bg-black border-gray-600 text-white mt-2"
          placeholder="Your name"
        />
      </div>
      <div>
        <Label htmlFor="email" className="text-white font-inter">Email</Label>
        <Input 
          id="email"
          type="email"
          className="bg-black border-gray-600 text-white mt-2"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <Label htmlFor="message" className="text-white font-inter">Message</Label>
        <Textarea 
          id="message"
          className="bg-black border-gray-600 text-white mt-2 min-h-[120px]"
          placeholder="Tell us about your project..."
        />
      </div>
      <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
        Send Message
      </Button>
    </form>
  );
};
```

**Separator Component for Section Dividers**:
```typescript
import { Separator } from "@/components/ui/separator"

// Section dividers with minimal aesthetic
<Separator className="bg-gray-800 my-12" />
```

**Skeleton Component for Loading States**:
```typescript
import { Skeleton } from "@/components/ui/skeleton"

const PortfolioSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i} className="bg-gray-900/50 border-gray-800">
          <CardContent className="p-6">
            <Skeleton className="h-48 w-full bg-gray-800 mb-4" />
            <Skeleton className="h-6 w-3/4 bg-gray-800 mb-2" />
            <Skeleton className="h-4 w-full bg-gray-800" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
```

### Page Components

**Service Page Template**:
```typescript
interface ServicePageProps {
  title: string;
  subtitle: string;
  pricing: {
    title: string;
    price: string;
    description: string;
    features: string[];
  }[];
  portfolioItems: PortfolioItem[];
  testimonials?: Testimonial[];
}

const ServicePage: React.FC<ServicePageProps> = ({ 
  title, 
  subtitle, 
  pricing, 
  portfolioItems, 
  testimonials 
}) => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection title={title} subtitle={subtitle} />
      <PricingSection pricing={pricing} />
      <PortfolioSection items={portfolioItems} />
      {testimonials && <TestimonialsSection testimonials={testimonials} />}
      <CTASection />
    </div>
  );
};
```

---

## SEO & Performance Optimization

### Philippines Market SEO Strategy

**Target Keywords**:
- Primary: "AI creative services Philippines", "AI product photography Manila"
- Long-tail: "affordable AI fashion models Philippines", "talking avatars for Filipino brands"
- Local: "creative agency Metro Manila", "AI marketing services Philippines"

**Content Strategy**:
- Blog posts targeting Philippine creative industry trends
- Comparison articles: "AI vs Traditional Photography Philippines"
- Educational content: "AI Creative Services Guide for Filipino Brands"
- Case studies: Local brand success stories

**Technical SEO Implementation**:
```typescript
// SEO component for consistent meta data
interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  canonical 
}) => {
  const siteName = "ImaginAItion";
  const fullTitle = `${title} | ${siteName}`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "ImaginAItion",
          "description": "AI creative services for Philippine brands",
          "url": "https://imaginaition.ph",
          "logo": "https://imaginaition.ph/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "areaServed": "PH",
            "availableLanguage": ["en", "tl"]
          }
        })}
      </script>
    </Head>
  );
};
```

### Performance Optimization

**Image Optimization Strategy**:
```typescript
// Optimized image component
interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ 
  src, 
  alt, 
  width, 
  height, 
  priority = false, 
  className 
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className={className}
    />
  );
};
```

---

## Technical Setup & Installation

### ShadCN UI Installation & Configuration

**Step 1: Initialize ShadCN UI**
```bash
# Run in your Next.js project root
npx shadcn@latest init
```

**Configuration Options for ImaginAItion**:
```
✔ Which style would you like to use? › New York
✔ Which color would you like to use as base color? › Slate  
✔ Would you like to use CSS variables for colors? › Yes
```

**Step 2: Install Required Components**
```bash
# Core components for the website
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add navigation-menu
npx shadcn@latest add badge
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add label
npx shadcn@latest add separator
npx shadcn@latest add skeleton
npx shadcn@latest add accordion
```

**Step 3: Custom Theme Configuration**
Update `app/globals.css` with ImaginAItion's dark mode theme:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    /* ... other light mode variables ... */
  }

  .dark {
    --background: 0 0% 0%;           /* Pure black for Linear.app aesthetic */
    --foreground: 0 0% 100%;         /* Pure white text */
    --muted: 0 0% 10%;               /* #1a1a1a for muted backgrounds */
    --muted-foreground: 0 0% 40%;    /* #666666 for muted text */
    --border: 0 0% 15%;              /* Subtle borders */
    --input: 0 0% 15%;               /* Input field borders */
    --primary: 217 91% 60%;          /* #2563eb strategic blue */
    --primary-foreground: 0 0% 100%; /* White text on blue */
    --secondary: 0 0% 10%;           /* Secondary element backgrounds */
    --secondary-foreground: 0 0% 100%; /* Secondary text */
    --accent: 0 0% 15%;              /* Accent backgrounds */
    --accent-foreground: 0 0% 100%;  /* Accent text */
    --destructive: 0 62% 50%;        /* Error/destructive actions */
    --destructive-foreground: 0 0% 100%; /* Error text */
    --ring: 217 91% 60%;             /* Focus ring color */
    --radius: 0.5rem;                /* Border radius */
  }
}

/* Custom font imports for brand consistency */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Inter:wght@400;500&display=swap');

/* Typography classes for brand consistency */
.font-montserrat {
  font-family: 'Montserrat', sans-serif;
}

.font-inter {
  font-family: 'Inter', sans-serif;
}

/* Dark mode by default */
html {
  @apply dark;
}
```

**Step 4: Component File Structure**
ShadCN UI creates this structure automatically:
```
components/
├── ui/
│   ├── button.tsx
│   ├── card.tsx
│   ├── dialog.tsx
│   ├── navigation-menu.tsx
│   ├── badge.tsx
│   ├── input.tsx
│   ├── textarea.tsx
│   ├── label.tsx
│   ├── separator.tsx
│   └── skeleton.tsx
├── layout/
│   ├── header.tsx
│   ├── footer.tsx
│   └── navigation.tsx
└── sections/
    ├── hero.tsx
    ├── services.tsx
    └── portfolio.tsx
```

---

## Deployment & Hosting Configuration

### Vercel Deployment Setup

**Environment Variables**:
```bash
# Sanity.io Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# WhatsApp Contact
NEXT_PUBLIC_WHATSAPP_NUMBER=639XXXXXXXXX

# Calendly Integration
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username
```

**Vercel Configuration (vercel.json)**:
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "functions": {
    "app/api/**": {
      "maxDuration": 10
    }
  },
  "redirects": [
    {
      "source": "/blog",
      "destination": "/blog/page/1",
      "permanent": false
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### Custom Domain Setup

**Step-by-Step Process for Non-Technical User**:

1. **In Vercel Dashboard**:
   - Go to your project settings
   - Click on "Domains" tab
   - Add "imaginaition.ph" as custom domain
   - Follow verification instructions

2. **DNS Configuration**:
   - Access your domain registrar (where you bought imaginaition.ph)
   - Add these DNS records:
     ```
     Type: A, Name: @, Value: 76.76.19.61
     Type: CNAME, Name: www, Value: cname.vercel-dns.com
     ```

3. **SSL Certificate**:
   - Vercel automatically provisions SSL certificate
   - Website will be available at https://imaginaition.ph

---

## Post-Deployment Setup Guide

### For Non-Technical User

**Immediate After Deployment**:

1. **Test Website Functionality**:
   - [ ] All pages load correctly
   - [ ] Calendly booking works
   - [ ] WhatsApp contact link functions
   - [ ] Portfolio images display properly
   - [ ] Mobile responsiveness confirmed

2. **Set Up Sanity.io Content Management**:
   - [ ] Access Sanity Studio at your-site.vercel.app/studio
   - [ ] Add initial portfolio items
   - [ ] Create first blog post
   - [ ] Configure SEO settings

3. **Configure Google Analytics**:
   - [ ] Verify tracking code installation
   - [ ] Set up conversion goals
   - [ ] Configure enhanced measurement
   - [ ] Test event tracking

4. **Content Population**:
   - [ ] Upload portfolio examples for each service
   - [ ] Add team photos and company information
   - [ ] Create initial blog content for SEO
   - [ ] Test all contact methods

### Ongoing Maintenance

**Weekly Tasks**:
- Monitor website performance via Google Analytics
- Check for and respond to consultation booking inquiries
- Review and publish new blog content for SEO

**Monthly Tasks**:
- Update portfolio with new client work
- Review website performance metrics
- Update service pricing if needed
- Backup Sanity.io content

---

## Future Roadmap & AI Chatbot Preparation

### Component Architecture for AI Chatbot Integration

**Prepared Integration Points**:
- Modal overlay system for chatbot interface
- State management setup for chat history
- API route structure for chatbot backend
- Component styling compatible with chat UI

**Technical Preparation**:
```typescript
// Chat interface types (for future implementation)
interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  metadata?: {
    intent?: string;
    confidence?: number;
    suggestedActions?: string[];
  };
}

interface ChatState {
  isOpen: boolean;
  messages: ChatMessage[];
  isTyping: boolean;
  sessionId: string;
}

// Placeholder component structure
const ChatWidget = () => {
  // Future implementation will go here
  return null; // Hidden until implementation
};
```

**Recommended AI Chatbot Solutions**:
- **Option 1**: Custom implementation with OpenAI API
- **Option 2**: Intercom or Crisp integration
- **Option 3**: Custom Claude API integration for brand-specific responses

### Scalability Considerations

**Performance Scaling**:
- Component-based architecture supports easy feature additions
- Sanity.io scales with content growth
- Vercel automatically handles traffic scaling
- Image optimization pipeline supports gallery expansion

**Feature Expansion**:
- Additional service pages can use existing templates
- Blog system supports unlimited content growth
- Portfolio system designed for easy category additions
- Contact system can accommodate new communication channels

---

## Success Metrics & KPIs

### Technical Performance Metrics

**Core Web Vitals Targets**:
- **LCP (Largest Contentful Paint)**: <1.5 seconds
- **FID (First Input Delay)**: <100 milliseconds
- **CLS (Cumulative Layout Shift)**: <0.1

**Additional Performance Metrics**:
- **Page Load Speed**: <2 seconds average
- **Lighthouse Performance Score**: 90+
- **Mobile Usability Score**: 100%
- **SEO Score**: 95+

### Business Metrics

**Lead Generation Targets**:
- **Consultation Bookings**: Track monthly booking volume
- **WhatsApp Inquiries**: Monitor quick contact usage
- **Contact Form Submissions**: Measure detailed inquiry volume
- **Conversion Rate**: Track visitor-to-lead conversion percentage

**Content Engagement Metrics**:
- **Blog Traffic**: Monthly organic traffic growth
- **Portfolio Views**: Track service-specific portfolio engagement
- **Session Duration**: Average time spent on site
- **Bounce Rate**: Target <40% for service pages

**SEO Performance Metrics**:
- **Keyword Rankings**: Track target keyword positions
- **Organic Traffic**: Monthly organic visitor growth
- **Local Search Visibility**: Philippines market search presence
- **Backlink Acquisition**: Natural link building progress

---

## Conclusion

This PRD provides comprehensive specifications for building ImaginAItion's business website using Next.js 14, Sanity.io, and Vercel. The architecture is optimized for Claude 4 Sonnet's advanced coding capabilities while remaining maintainable for future updates and AI chatbot integration.

The design system follows the Linear.app-inspired dark mode aesthetic outlined in the brand guidelines, while the content structure supports both immediate business goals (lead generation) and long-term objectives (SEO traffic and thought leadership).

**Key Implementation Benefits**:
- **For Claude 4 Sonnet**: Clear component specifications and detailed technical requirements
- **For Non-Technical User**: Simple content management and deployment process
- **For Business**: Lead generation optimization and Philippine market positioning
- **For Future Growth**: Scalable architecture ready for feature additions

The website will serve as a professional showcase for ImaginAItion's AI creative services while providing the foundation for ongoing digital marketing and business development efforts in the Philippine market.