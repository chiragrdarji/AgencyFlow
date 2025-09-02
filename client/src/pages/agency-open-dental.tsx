import IntegrationLayout from "@/components/integration-layout";
import { Helmet } from "react-helmet-async";

export default function OpenDentalIntegration() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does this integration do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It automatically syncs patient data, appointments, contacts, companies, and more from OpenDental to GoHighLevel—streamlining operations and enabling smarter marketing automation.",
        },
      },
      {
        "@type": "Question",
        name: "Is the data sync real-time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the integration supports real-time or near real-time syncing to keep your data continuously updated.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need any technical skills to set it up?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No coding needed! The setup is simple, user-friendly, and fully guided.",
        },
      },
      {
        "@type": "Question",
        name: "Can I choose what data gets synced?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, you can customize which fields and types of data get synced between platforms.",
        },
      },
      {
        "@type": "Question",
        name: "Does it support multi-location practices?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the integration handles multiple providers and locations seamlessly.",
        },
      },
      {
        "@type": "Question",
        name: "What OpenDental versions are supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most recent versions of OpenDental are supported. Contact us for version-specific compatibility.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Click the “Connect OpenDental to GHL” button or visit our Marketplace listing to begin.",
        },
      },
      {
        "@type": "Question",
        name: "How much does the OpenDental to GoHighLevel integration cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It’s just $99 per OpenDental instance per month, which includes full access to automated syncing, support, and updates. Volume pricing is available for multiple instances.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Open Dental to GoHighLevel Integration",
        item: "https://smartsync.one/open-dental-gohighlevel-integration",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Dentrix to GoHighLevel Integration",
        item: "https://smartsync.one/dentrix-gohighlevel-integration",
      },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Open Dental Connector App",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    softwareVersion: "1.0",
    url: "https://smartsync.one/open-dental-gohighlevel-integration",
    description:
      "Two-way sync of patients, appointments, providers, and payments between Open Dental (including Ascend/Enterprise) and your CRM.",
    featureList: [
      "Real-time scheduling",
      "Two-way data sync",
      "Analytics dashboard",
      "Privacy-first design",
    ],
    publisher: {
      "@type": "Organization",
      name: "Variance Infotech",
    },
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>
      </Helmet>

      <IntegrationLayout type="open-dental" />
    </>
  );
}
