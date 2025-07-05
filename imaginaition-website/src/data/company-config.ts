import { Company, Hero, ValueProposition, FooterInfo, NavigationItem } from '../types';

export const company: Company = {
  name: 'ImaginAItion',
  tagline: 'Unlimited Creative Possibilities at 67% Less Cost',
  mission: 'Making impossible creative projects possible through AI while providing authentic Philippine market intelligence and partnership-focused service.',
  advantages: [
    'Partnership vs vendor approach - we\'re your creative partner',
    '67% cost savings vs traditional ₱300K+ per venue approach',
    'Unlimited venues and infinite variations without physical limitations',
    'Philippine market cultural intelligence and expertise',
    'Creative partnership with aligned success incentives',
    'Professional billboard-quality results in 7 days vs 3-4 weeks',
    'Complete creative freedom without scheduling constraints',
    'Scalable solutions that grow with your brand'
  ]
};

export const hero: Hero = {
  headline: 'Unlimited Creative Possibilities',
  subheadline: 'at 67% Less Cost',
  description: 'AI creative services for Philippine brands. Professional AI fashion models, product photography, and talking avatars with unlimited venues and complete creative freedom.',
  primaryCTA: {
    text: 'Book Free Consultation',
    href: '#contact'
  },
  secondaryCTA: {
    text: 'Explore Services',
    href: '#services'
  },
  keyMetrics: [
    {
      value: '67%',
      label: 'Cost Savings'
    },
    {
      value: '7 Days',
      label: 'Delivery'
    },
    {
      value: '∞',
      label: 'Venues'
    }
  ]
};

export const valuePropositions: ValueProposition[] = [
  {
    title: 'Partnership Approach',
    description: 'We\'re your creative partner, not just another vendor. Our success is tied to your creative success.'
  },
  {
    title: 'Philippine Market Intelligence',
    description: 'Authentic Filipino representation with deep cultural intelligence built into every creative output.'
  },
  {
    title: 'Unlimited Creative Freedom',
    description: 'No venue restrictions, no weather delays, no scheduling constraints. Infinite possibilities, instant iteration.'
  },
  {
    title: '67% Cost Savings',
    description: 'Dramatically reduce production costs while expanding creative possibilities. More budget for media and testing.'
  }
];

export const navigationItems: NavigationItem[] = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
];

export const footerInfo: FooterInfo = {
  company: 'ImaginAItion',
  description: 'AI creative services partnership for Philippine brands. Unlimited creative possibilities with authentic market intelligence and 67% cost savings.',
  links: {
    services: [
      { name: 'AI Fashion Models', href: '#services' },
      { name: 'Product Photography', href: '#services' },
      { name: 'Talking Avatars', href: '#services' },
      { name: 'Marketing Content', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Partnership', href: '#about' },
      { name: 'Contact', href: '#contact' }
    ]
  }
};