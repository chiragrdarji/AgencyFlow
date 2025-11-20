// structured-data.js

(function() {
  // Helper to inject JSON-LD scripts
  function addJsonLd(data) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }

  // FAQ Schema
  addJsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        name: "WWhat is a PMS API?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A PMS API is a secure interface that allows dental practice management systems to sync data with external tools like CRMs.",
        },
      },
       {
        "@type": "Question",
        name: "Do we support Dentrix Ascend API?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we currently support the Dentrix Ascend API.",
        },
      },
      {
        "@type": "Question",
        "name": "What does this integration do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It automatically syncs patient data, appointments, contacts, companies and more from Dentrix to GoHighLevel—streamlining operations and enabling smarter marketing automation."
        }
      },
      {
        "@type": "Question",
        "name": "Is the data sync real-time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the integration supports real-time or near real-time syncing to keep your data continuously updated."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need any technical skills to set it up?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No coding needed! The setup is simple, user-friendly, and fully guided."
        }
      },
      {
        "@type": "Question",
        "name": "Can I choose what data gets synced?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can customize which fields and types of data get synced between platforms."
        }
      },
      {
        "@type": "Question",
        "name": "Does it support multi-location practices?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the integration handles multiple providers and locations seamlessly."
        }
      },
      {
        "@type": "Question",
        "name": "What Dentrix versions are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most recent versions of Dentrix are supported. Contact us for version-specific compatibility."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get started?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Click the “Connect Dentrix to GHL” button or visit our Marketplace listing to begin."
        }
      },
      {
        "@type": "Question",
        "name": "How much does the Dentrix to GoHighLevel integration cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It’s just 149$ per Dentrix instance per month, which includes full access to automated syncing, support, and updates. Volume pricing is available for multiple instances."
        }
      }
    ]
  });

  // Breadcrumb Schema
  addJsonLd({
    "@context": "https://schema.org/", 
    "@type": "BreadcrumbList", 
    "itemListElement": [
      {
        "@type": "ListItem", 
        "position": 1, 
        "name": "Dentix To GHL Integration",
        "item": "https://smartsync.one/dentrix-gohighlevel-integration"
      },
      {
        "@type": "ListItem", 
        "position": 2,    
        "name": "OpenDental To GHL Integration",
        "item": "https://smartsync.one/open-dental-gohighlevel-integration"  
      }
    ]
  });

  // Software Application Schema
  addJsonLd({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Dentrix to GoHighLevel Integration",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "softwareVersion": "1.0",
    "url": "https://smartsync.one/dentrix-gohighlevel-integration",
    "description": "Seamlessly integrate Dentrix with GoHighLevel CRM. Sync patients, appointments, providers, and payments to automate your dental practice workflows.",
    "featureList": [
      "Real-time scheduling",
      "Two-way data sync",
      "Analytics dashboard",
      "Privacy-first design"
    ],
    "publisher": {
      "@type": "Organization",
      "name": "Variance Infotech"
    }
  });

})();
