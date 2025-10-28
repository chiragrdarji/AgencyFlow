interface StructuredDataProps {
  type: 'organization' | 'product' | 'softwareApplication' | 'localBusiness';
  data?: Record<string, any>;
}

export default function StructuredData({ type, data = {} }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dentrixconnector.com';
    
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Smart Sync",
          "url": "https://smartsync.one",
          "logo": `/img/sso_logo.svg`,
          "description": "Seamless data sync between dental practice management systems and GoHighLevel CRM for marketing agencies and dental practices.",
           "address": {
        "@type": "PostalAddress",
        "streetAddress": "30 N Gould St. Sheridan, WY 82801 USA",
        "addressLocality": "Sheridan",
        "addressRegion": "WY",
        "postalCode": "82801",
        "addressCountry": "USA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1 630 861 8263",
        "contactType": "customer service",
        "email": "info@smartsync.one",
        "availableLanguage": "English"
      },
      "sameAs": [
        "https://www.linkedin.com/company/smart-sync-one/"
      ]
        };

      case 'softwareApplication':
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Smart Sync One",
          applicationCategory: "BusinessApplication",
          description:
            "Automated data synchronization between dental practice management systems (Dentrix, Open Dental, EagleSoft, Curve Dental) and GoHighLevel CRM for marketing agencies and dental practices.",
          url: baseUrl,
          operatingSystem: "Web-based",
          offers: {
            "@type": "Offer",
            price: "Contact for pricing",
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
            bestRating: "5",
            worstRating: "1",
          },
          featureList: [
            "Real-time data synchronization",
            "Two-way sync between PMS and CRM",
            "HIPAA-conscious data handling",
            "Automated campaign triggers",
            "Patient, provider, and appointment sync",
            "Payment data integration",
            "Field mapping customization",
            "Webhook-based real-time updates",
          ],
          softwareRequirements:
            "Compatible with Dentrix, Open Dental, EagleSoft, Curve Dental, and GoHighLevel",
          author: {
            "@type": "Organization",
            name: "Variance infotech LLC",
          },
        };

      case 'product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Dentrix to GoHighLevel Connector",
          description:
            "Seamless two-way data synchronization between dental practice management systems and GoHighLevel CRM for marketing agencies and dental practices.",
          brand: {
            "@type": "Brand",
            name: "Smart Sync One",
          },
          manufacturer: {
            "@type": "Organization",
            name: "Variance infotech LLC",
          },
          category: "Software > Business Software > CRM Integration",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            price: "Contact for pricing",
            priceCurrency: "USD",
            seller: {
              "@type": "Organization",
              name: "Variance infotech LLC",
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "127",
          },
          review: [
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Sarah L.",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
              reviewBody:
                "The connector made our campaigns 10x more effective. We finally have accurate patient data without manual updates.",
            },
            {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: "Jason K.",
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: "5",
              },
              reviewBody:
                "Our reactivation campaigns now hit at the perfect time. ROI is clear and client retention is higher.",
            },
          ],
        };

      case 'localBusiness':
        return {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Variance infotech LLC",
          "description": "Dental practice management system integration specialists providing seamless data sync between PMS and CRM systems.",
          "url": baseUrl,
          "telephone": "+1-555-123-4567",
          "email": "support@dentrixconnector.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Main Street, Suite 456",
            "addressLocality": "Austin",
            "addressRegion": "TX",
            "postalCode": "78701",
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "30.2672",
            "longitude": "-97.7431"
          },
          "openingHours": [
            "Mo-Fr 09:00-18:00",
            "Sa 10:00-14:00"
          ],
          "priceRange": "$$",
          "paymentAccepted": "Credit Card, Bank Transfer",
          "currenciesAccepted": "USD"
        };

      default:
        return {};
    }
  };

  const structuredData = { ...getStructuredData(), ...data };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}
