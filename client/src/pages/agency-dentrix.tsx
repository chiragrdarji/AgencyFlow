import React from "react";
import { Helmet } from "react-helmet-async";
import IntegrationLayout from "@/components/integration-layout";

export default function DentrixIntegration() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does this integration do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It automatically syncs patient data, appointments, contacts, companies and more from Dentrix to GoHighLevel—streamlining operations and enabling smarter marketing automation.",
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
        name: "What Dentrix versions are supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most recent versions of Dentrix are supported. Contact us for version-specific compatibility.",
        },
      },
      {
        "@type": "Question",
        name: "How can I get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: 'Click the "Connect Dentrix to GHL" button or visit our Marketplace listing to begin.',
        },
      },
      {
        "@type": "Question",
        name: "How much does the Dentrix to GoHighLevel integration cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It's just 149$ per Dentrix instance per month, which includes full access to automated syncing, support, and updates. Volume pricing is available for multiple instances.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Dentix To GHL Integration",
        item: "https://smartsync.one/dentrix-gohighlevel-integration",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "OpenDental To GHL Integration",
        item: "https://smartsync.one/open-dental-gohighlevel-integration",
      },
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Dentrix to GoHighLevel Integration",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    softwareVersion: "1.0",
    url: "https://smartsync.one/dentrix-gohighlevel-integration",
    description:
      "Seamlessly integrate Dentrix with GoHighLevel CRM. Sync patients, appointments, providers, and payments to automate your dental practice workflows.",
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
        {/* External scripts via Helmet */}
       
    
        {/* JSON-LD schemas */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(softwareSchema)}
        </script>

        {/* SEO Meta Tags */}
        <title>Dentrix to GoHighLevel Integration - SmartSync</title>
        <meta
          name="description"
          content="Seamlessly integrate Dentrix with GoHighLevel. Sync patients, appointments, and automate your dental practice workflows."
        />
        <meta
          name="keywords"
          content="dentrix integration, gohighlevel, dental software, practice management, patient sync, appointment sync"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Dentrix to GoHighLevel Integration - SmartSync"
        />
        <meta
          property="og:description"
          content="Automate your dental practice with seamless Dentrix to GoHighLevel integration. Real-time patient and appointment syncing."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://smartsync.one/dentrix-gohighlevel-integration"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Dentrix to GoHighLevel Integration"
        />
        <meta
          name="twitter:description"
          content="Seamless integration between Dentrix and GoHighLevel for dental practices"
        />
      </Helmet>

      <IntegrationLayout type="dentrix" />
    </>
  );
}
