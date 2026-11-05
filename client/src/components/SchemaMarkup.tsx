import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  schema: Record<string, any>;
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

// Helper functions for common schema types

export const getBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};

export const getFAQSchema = (items: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
};

export const getProductSchema = (data: {
  name: string;
  description: string;
  image?: string;
  price?: string;
  currency?: string;
  ratingValue?: number;
  reviewCount?: number;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    description: data.description,
    brand: {
      '@type': 'Brand',
      name: 'SmartSync.One',
    },
    manufacturer: {
      '@type': 'Organization',
      '@id': 'https://smartsync.one/#organization',
      name: 'SmartSync.One',
      url: 'https://smartsync.one/',
    },
    ...(data.image && { image: data.image }),
    ...(data.price && {
      offers: {
        '@type': 'Offer',
        price: data.price,
        priceCurrency: data.currency || 'USD',
        availability: 'https://schema.org/InStock',
        seller: {
          '@type': 'Organization',
          '@id': 'https://smartsync.one/#organization',
          name: 'SmartSync.One',
        },
      },
    }),
    ...(data.ratingValue && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: data.ratingValue,
        reviewCount: data.reviewCount || 1,
      },
    }),
  };
};

export const getArticleSchema = (data: {
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  authorType?: 'Person' | 'Organization';
}) => {
  const isPerson = data.authorType === 'Person' || (data.author && data.author !== 'SmartSync.One');
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: data.headline,
    description: data.description,
    ...(data.image && { image: data.image }),
    ...(data.datePublished && { datePublished: data.datePublished }),
    ...(data.dateModified && { dateModified: data.dateModified }),
    author: isPerson
      ? {
          '@type': 'Person',
          name: data.author || 'SmartSync Integration Team',
          worksFor: {
            '@type': 'Organization',
            '@id': 'https://smartsync.one/#organization',
            name: 'SmartSync.One',
            url: 'https://smartsync.one/',
          },
        }
      : {
          '@type': 'Organization',
          '@id': 'https://smartsync.one/#organization',
          name: 'SmartSync.One',
          url: 'https://smartsync.one/',
        },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://smartsync.one/#organization',
      name: 'SmartSync.One',
      url: 'https://smartsync.one/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://smartsync.one/img/sso_logo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://smartsync.one/',
    },
  };
};

export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://smartsync.one/#organization',
    name: 'SmartSync.One',
    url: 'https://smartsync.one/',
    logo: 'https://smartsync.one/img/sso_logo.svg',
    description:
      'Automatically sync patients, providers, appointments, treatments, and payments between 40+ supported practice management systems and GoHighLevel, HubSpot, or Salesforce CRM.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '30 N Gould St.',
      addressLocality: 'Sheridan',
      addressRegion: 'WY',
      postalCode: '82801',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1 630 861 8263',
      contactType: 'customer service',
      email: 'support@smartsync.one',
      availableLanguage: 'English',
    },
    sameAs: ['https://www.linkedin.com/company/smart-sync-one/'],
  };
};
