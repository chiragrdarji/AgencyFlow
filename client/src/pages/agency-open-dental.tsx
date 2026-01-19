import IntegrationLayout from "@/components/integration-layout";
import FAQ from "@/components/FAQ";
import SEO from "@/components/SEO";
import SchemaMarkup, { getBreadcrumbSchema, getFAQSchema } from "@/components/SchemaMarkup";
import { getMetaTags } from "@/lib/seoMeta";

export default function OpenDentalIntegration() {
  const metaTags = getMetaTags('openDentalIntegration');

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://smartsync.one/' },
    { name: 'Open Dental Integration', url: 'https://smartsync.one/open-dental-gohighlevel-integration' },
  ]);

  const faqItems = [
    {
      question: "What does this integration do?",
      answer: "Smart Sync application syncs patients, providers, appointments, and payments between Open Dental and GoHighLevel so you can focus on growing your clients' practices.",
    },
    {
      question: "Is the data sync real-time?",
      answer: "Yes, the integration supports real-time or near real-time syncing to keep your data continuously updated.",
    },
    {
      question: "Do I need any technical skills to set it up?",
      answer: "No coding needed! The setup is simple, user-friendly, and fully guided.",
    },
    {
      question: "Can I choose what data gets synced?",
      answer: "Yes, you can customize which fields and types of data get synced between platforms.",
    },
    {
      question: "Does it support multi-location practices?",
      answer: "Yes, the integration handles multiple providers and locations seamlessly.",
    },
    {
      question: "What Open Dental versions are supported?",
      answer: "Most recent versions of Open Dental are supported. Contact us for version-specific compatibility.",
    },
    {
      question: "How can I get started?",
      answer: 'Click the "Connect Open Dental to GHL" button or visit our Marketplace listing to begin.',
    },
    {
      question: "How much does the Open Dental to GoHighLevel integration cost?",
      answer: "Pricing is available through our marketplace or contact us for custom quotes.",
    },
  ];

  const faqSchema = getFAQSchema(faqItems);

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Open Dental to GoHighLevel Integration | Dental PMS-CRM Sync",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    softwareVersion: "1.0",
    url: "https://smartsync.one/open-dental-gohighlevel-integration",
    description:
      "Seamless Open Dental integration into GoHighLevel for dental agencies. Sync patients, appointments & payments from your dental PMS into CRM in real-time.",
    featureList: [
      "Real-time scheduling",
      "Two-way data sync",
      "Analytics dashboard",
      "Privacy-first design",
    ],
    publisher: {
      "@type": "Organization",
      name: "Smart Sync",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
    },
  };

  return (
    <>
      <SEO {...metaTags} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={softwareSchema} />
      <IntegrationLayout type="open-dental" />
      
      {/* FAQ Section */}
      {/* <div className="min-h-screen py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Open Dental Integration FAQ
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about integrating Open Dental with GoHighLevel
            </p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </div> */}
    </>
  );
}
