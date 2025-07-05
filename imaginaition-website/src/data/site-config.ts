import { SiteConfig } from '../types';
import { mainServices } from './services/main-services';
import { additionalServices } from './services/additional-services';
import { company, hero, valuePropositions, navigationItems as navItems, footerInfo as footer } from './company-config';
import { contact as contactInfo } from './contact-config';

export const siteConfig: SiteConfig = {
  company,
  hero,
  services: {
    main: mainServices,
    additional: additionalServices
  },
  valuePropositions,
  contact: contactInfo,
  navigationItems: navItems,
  footerInfo: footer
};

// Export individual parts for easier access
export const { services, contact, navigationItems, footerInfo } = siteConfig;
export { mainServices, additionalServices }; 