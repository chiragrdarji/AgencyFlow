// SEO Meta configuration for all pages
export const seoConfig = {
  baseUrl: 'https://smartsync.one',
  siteName: 'Smart Sync One',
  defaultImage: 'https://smartsync.one/img/sso_logo.png',
  
  pages: {
    home: {
      title: 'Smart Sync One – Patient Data Sync for Dental Agencies',
      description: 'Automatically sync patients, providers, appointments, and payments between Dentrix/Open Dental and GoHighLevel CRM. Stop wasting time on manual data entry and focus on growing your clients\' dental practices.',
      keywords: 'dentrix integration, open dental api, GoHighLevel Integration, GHL Integration, opendental api, open dental integration, dental pms ghl integration, dental pms integration, eaglesoft api, api dental, dentrix api',
      path: '/',
    },
    supportedPlatforms: {
      title: 'Supported PMS Platforms | Smart Sync One',
      description: 'Smart Sync connects Dentrix, Open Dental, EagleSoft, and Curve Dental to GoHighLevel CRM. Real-time bidirectional sync for dental practices.',
      keywords: 'dentrix api, open dental api, eaglesoft integration, curve dental ghl',
      path: '/supported-platforms',
    },
    dentrixIntegration: {
      title: 'Dentrix to GoHighLevel Integration | Smart Sync One',
      description: 'Seamlessly sync Dentrix data to GoHighLevel CRM. Automate patient data, appointments, and payment sync for dental marketing agencies.',
      keywords: 'dentrix gohighlevel integration, dentrix api, dentrix ghl connector',
      path: '/dentrix-gohighlevel-integration',
    },
    openDentalIntegration: {
      title: 'Open Dental to GoHighLevel Integration | Smart Sync One',
      description: 'Connect Open Dental to GoHighLevel CRM with real-time data sync. Automate workflows for dental agencies and practices.',
      keywords: 'open dental gohighlevel integration, opendental api, open dental ghl',
      path: '/open-dental-gohighlevel-integration',
    },
    onboarding: {
      title: 'Onboarding & Setup | Smart Sync One',
      description: 'Get started with Smart Sync in minutes. Our guided onboarding process ensures smooth setup and configuration of your dental practice data sync.',
      keywords: 'smart sync setup, integration onboarding, ghl dental setup',
      path: '/onboarding',
    },
    education: {
      title: 'Education Materials | Smart Sync One',
      description: 'Learn how to maximize your dental marketing automation. Guides, tutorials, and best practices for GHL and dental practice management.',
      keywords: 'dental marketing automation, gohighlevel guides, marketing agency resources',
      path: '/education',
    },
    contact: {
      title: 'Contact Us | Smart Sync One',
      description: 'Get in touch with our support team. We\'re here to help with integration setup, technical support, and questions.',
      keywords: 'contact smart sync, dental integration support, customer service',
      path: '/contact',
    },
  },
};

export interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
}

export const getMetaTags = (pageKey: keyof typeof seoConfig.pages): MetaTags => {
  const page = seoConfig.pages[pageKey];
  
  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    ogTitle: page.title,
    ogDescription: page.description,
    ogImage: seoConfig.defaultImage,
    ogUrl: `${seoConfig.baseUrl}${page.path}`,
    twitterCard: 'summary_large_image',
    twitterTitle: page.title,
    twitterDescription: page.description,
    twitterImage: seoConfig.defaultImage,
    canonical: `${seoConfig.baseUrl}${page.path}`,
  };
};
