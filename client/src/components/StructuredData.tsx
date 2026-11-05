interface StructuredDataProps {
  type: 'organization' | 'product' | 'softwareApplication';
  data?: Record<string, any>;
}

export default function StructuredData({ type, data = {} }: StructuredDataProps) {
  const getStructuredData = () => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://smartsync.one';

    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://smartsync.one/#organization",
          "name": "SmartSync.One",
          "url": "https://smartsync.one/",
          "logo": "https://smartsync.one/img/sso_logo.svg",
          "description": "Seamless data sync between dental practice management systems and GoHighLevel, HubSpot, and Salesforce CRM for marketing agencies and dental practices.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "30 N Gould St. Sheridan, WY 82801 USA",
            "addressLocality": "Sheridan",
            "addressRegion": "WY",
            "postalCode": "82801",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1 630 861 8263",
            "contactType": "customer service",
            "email": "support@smartsync.one",
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
          name: "SmartSync.One",
          applicationCategory: "BusinessApplication",
          description:
            "Automatically sync patients, providers, appointments, treatments, and payments between 40+ supported practice management systems—including Open Dental, Dentrix 7/8, Dentrix Ascend, Dentrix Enterprise, Eaglesoft, Curve Dental, Denticon, eClinicalWorks, Dolphin, OrthoTrac, PracticeWorks, ABELDent, DSN Dental, DSN Perio, SOE, SoftDent, Tracker, WinOMS, ClearDent, Dentally, DentalVision, EndoVision, PerioVision, Mogo, Officemate, CareStack, Sensei Cloud, Dental4Windows, D4Web, ChiroTouch, Jane App, CornerStone, IntraVet, AviMark, ClientTrax, DVMAX, ImproMed, DEXIS, OneView Imaging, CliniView, Planmeca Romexis, Carestream CS Imaging, SIDEXIS 4, and XDR Imaging—and GoHighLevel, HubSpot, or Salesforce CRM.",
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
            reviewCount: "50",
            bestRating: "5",
            worstRating: "1",
          },
          featureList: [
            "Near real-time data synchronization",
            "Two-way sync between PMS and CRM",
            "HIPAA Compliant data handling with zero persistent PHI storage",
            "Automated campaign triggers",
            "Patient, provider, and appointment sync",
            "Payment and treatment pipeline integration",
            "Field mapping customization",
            "Webhook-based continuous updates",
          ],
          softwareRequirements:
            "Compatible with Dentrix, Open Dental, EagleSoft, Curve Dental, and GoHighLevel, HubSpot, Salesforce",
          author: {
            "@type": "Organization",
            "@id": "https://smartsync.one/#organization",
            name: "SmartSync.One",
            url: "https://smartsync.one/",
          },
          publisher: {
            "@type": "Organization",
            "@id": "https://smartsync.one/#organization",
            name: "SmartSync.One",
            url: "https://smartsync.one/",
          },
        };

      case 'product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Dentrix to GoHighLevel Connector",
          description:
            "Seamless two-way data synchronization between dental practice management systems and GoHighLevel, HubSpot, or Salesforce CRM for marketing agencies and dental practices.",
          brand: {
            "@type": "Brand",
            name: "SmartSync.One",
          },
          manufacturer: {
            "@type": "Organization",
            "@id": "https://smartsync.one/#organization",
            name: "SmartSync.One",
            url: "https://smartsync.one/",
          },
          category: "Software > Business Software > CRM Integration",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            price: "Contact for pricing",
            priceCurrency: "USD",
            seller: {
              "@type": "Organization",
              "@id": "https://smartsync.one/#organization",
              name: "SmartSync.One",
              url: "https://smartsync.one/",
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "50",
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
