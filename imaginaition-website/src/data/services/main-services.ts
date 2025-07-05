import { MainService } from '../../types';

// Main Services (Full Spotlight Treatment)
export const mainServices: MainService[] = [
  {
    id: 'ai-fashion-models',
    title: 'AI Fashion Models',
    pricing: '₱99K base + ₱49K custom options',
    description: 'Complete creative freedom with infinite model variations and unlimited venues',
    highlights: [
      'Pre-made portfolio available',
      'Custom model creation',
      'Exclusive ownership',
      'Unlimited venues',
      '20-25 billboard-quality final images'
    ],
    examples: [
      {
        id: 'fashion-placeholder-1',
        title: 'Professional Fashion Models',
        description: 'AI-generated fashion models for clothing catalogs and marketing campaigns',
        image: '/portfolio/fashion/fashion-1.jpg',
        serviceType: 'fashion',
        isPlaceholder: true
      },
      {
        id: 'fashion-placeholder-2',
        title: 'Traditional Filipino Formal Wear',
        description: 'Elegant models showcasing traditional Filipino formal wear with modern styling',
        image: '/portfolio/fashion/fashion-2.jpg',
        serviceType: 'fashion',
        isPlaceholder: true
      },
      {
        id: 'fashion-placeholder-3',
        title: 'Lifestyle Fashion Campaign',
        description: 'Casual lifestyle modeling for contemporary Filipino fashion brands',
        image: '/portfolio/fashion/fashion-3.jpg',
        serviceType: 'fashion',
        isPlaceholder: true
      },
      {
        id: 'fashion-placeholder-4',
        title: 'Resort Wear Collection',
        description: 'Tropical fashion modeling showcasing resort wear in exotic Philippine locations',
        image: '/portfolio/fashion/fashion-4.jpg',
        serviceType: 'fashion',
        isPlaceholder: true
      }
    ],
    category: 'main',
    detailedPricing: [
      {
        title: 'Ready-to-Use Models',
        price: '₱99K',
        description: 'Access to diverse, professional models',
        features: [
          'Pre-made diverse portfolio',
          '20-25 billboard-quality images',
          'Multiple styling options',
          'Commercial usage rights'
        ]
      },
      {
        title: 'Custom Model Creation',
        price: '+₱49K',
        description: 'Create your own exclusive AI model',
        features: [
          'Custom model training',
          'Exclusive ownership',
          'Brand-specific characteristics',
          'Unlimited future use'
        ]
      }
    ],
    useCases: [
      'Fashion brand campaigns',
      'E-commerce product modeling',
      'Social media content',
      'Billboard advertising',
      'Catalog photography'
    ],
    benefits: [
      'No model scheduling constraints',
      'Unlimited venue possibilities',
      'Consistent brand representation',
      'Cost-effective scaling',
      'Philippine market cultural alignment'
    ]
  },
  {
    id: 'product-photography',
    title: 'AI Product Photography',
    pricing: '₱59K-89K tiered pricing',
    description: 'Professional product photography with unlimited styling and venue options',
    highlights: [
      'Multiple pricing tiers',
      'Unlimited background options',
      'Professional lighting simulation',
      'Fast turnaround time',
      'High-resolution outputs'
    ],
    examples: [
      {
        id: 'product-placeholder-1',
        title: 'Electronics Product Showcase',
        description: 'High-end electronics with professional lighting and multiple angle variations',
        image: '/portfolio/product/product-1.jpg',
        serviceType: 'product',
        isPlaceholder: true
      },
      {
        id: 'product-placeholder-2',
        title: 'Beauty & Cosmetics Collection',
        description: 'Professional cosmetics photography with lifestyle and studio contexts',
        image: '/portfolio/product/product-2.jpg',
        serviceType: 'product',
        isPlaceholder: true
      },
      {
        id: 'product-placeholder-3',
        title: 'Fashion Accessories Campaign',
        description: 'Jewelry and accessories with unlimited background and styling options',
        image: '/portfolio/product/product-3.jpg',
        serviceType: 'product',
        isPlaceholder: true
      },
      {
        id: 'product-placeholder-4',
        title: 'Food & Beverage Styling',
        description: 'Culinary photography with appetizing presentations and lifestyle contexts',
        image: '/portfolio/product/product-4.jpg',
        serviceType: 'product',
        isPlaceholder: true
      }
    ],
    category: 'main',
    detailedPricing: [
      {
        title: 'Essential Package',
        price: '₱59K',
        description: 'Perfect for small businesses',
        features: [
          '10-15 product variations',
          '5 background options',
          'Standard resolution',
          'Commercial license'
        ]
      },
      {
        title: 'Professional Package',
        price: '₱74K',
        description: 'Ideal for growing brands',
        features: [
          '20-25 product variations',
          '10 background options',
          'High resolution',
          'Lifestyle contexts',
          'Multiple angles'
        ]
      },
      {
        title: 'Enterprise Package',
        price: '₱89K',
        description: 'Comprehensive solution',
        features: [
          '30+ product variations',
          'Unlimited backgrounds',
          'Ultra-high resolution',
          'Custom styling',
          'Priority support'
        ]
      }
    ],
    useCases: [
      'E-commerce catalogs',
      'Marketing materials',
      'Social media content',
      'Print advertising',
      'Website imagery'
    ],
    benefits: [
      'No physical product handling',
      'Unlimited styling options',
      'Consistent brand aesthetic',
      'Rapid iteration capability',
      'Cost-effective production'
    ]
  },
  {
    id: 'talking-avatars',
    title: 'Talking Avatars & Human Cloning',
    pricing: '₱2K/min, 15min minimum',
    description: 'Realistic AI avatars and human clones for dynamic content creation',
    highlights: [
      'Realistic human cloning',
      'Multiple language support',
      'Custom voice integration',
      'Scalable content production',
      'Professional video quality'
    ],
    examples: [
      {
        id: 'avatar-placeholder-1',
        title: 'Corporate Spokesperson Avatar',
        description: 'Professional business avatar for corporate communications and presentations',
        image: '/portfolio/avatar/avatar-1.jpg',
        serviceType: 'avatar',
        isPlaceholder: true
      },
      {
        id: 'avatar-placeholder-2',
        title: 'Customer Service Representative',
        description: 'Friendly customer service avatar with multilingual capabilities',
        image: '/portfolio/avatar/avatar-2.jpg',
        serviceType: 'avatar',
        isPlaceholder: true
      },
      {
        id: 'avatar-placeholder-3',
        title: 'Training & Educational Content',
        description: 'Educational avatar for training videos and instructional content',
        image: '/portfolio/avatar/avatar-3.jpg',
        serviceType: 'avatar',
        isPlaceholder: true
      },
      {
        id: 'avatar-placeholder-4',
        title: 'Marketing Campaign Avatar',
        description: 'Brand ambassador avatar for marketing campaigns and promotional content',
        image: '/portfolio/avatar/avatar-4.jpg',
        serviceType: 'avatar',
        isPlaceholder: true
      }
    ],
    category: 'main',
    detailedPricing: [
      {
        title: 'Standard Avatar',
        price: '₱2K/minute',
        description: 'Pre-made avatar with voice',
        features: [
          '15-minute minimum',
          'Standard voice options',
          'HD video quality',
          'Basic customization'
        ]
      },
      {
        title: 'Custom Human Clone',
        price: '₱2K/minute + ₱50K setup',
        description: 'Personalized human clone creation',
        features: [
          'Custom appearance modeling',
          'Voice cloning available',
          'Unlimited future use',
          'Brand personality alignment'
        ]
      }
    ],
    useCases: [
      'Corporate presentations',
      'Training videos',
      'Customer service',
      'Marketing campaigns',
      'Educational content'
    ],
    benefits: [
      'Consistent spokesperson availability',
      'Multilingual capabilities',
      'Cost-effective video production',
      'Scalable content creation',
      'Brand personality consistency'
    ]
  }
];