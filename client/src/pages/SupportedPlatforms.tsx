import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FAQ from "@/components/FAQ";
import SEO from "@/components/SEO";
import SchemaMarkup, { getBreadcrumbSchema, getFAQSchema } from "@/components/SchemaMarkup";
import { getMetaTags } from "@/lib/seoMeta";
import { Laptop, CheckCircle, Clock } from "lucide-react";
import { useLocation } from "wouter";

const faqItems = [
  {
    question: "Which dental PMS systems does Smart Sync support?",
    answer: "Smart Sync currently supports Dentrix and Open Dental with real-time bidirectional sync. EagleSoft and Curve Dental integrations are coming soon.",
  },
  {
    question: "What's the difference between Dentrix and Open Dental?",
    answer: "Dentrix is a desktop-based or cloud PMS with enterprise features, while Open Dental is a flexible PMS supporting both cloud and on-premise deployments. Both sync seamlessly with GoHighLevel through Smart Sync.",
  },
  {
    question: "Are there other PMS systems coming?",
    answer: "Yes! We're working on EagleSoft and Curve Dental integrations. Sign up for our newsletter or book a demo to get early access.",
  },
  {
    question: "Can I sync multiple PMS systems at once?",
    answer: "Yes, if you manage multiple dental practices with different PMS systems, each can be connected independently through Smart Sync.",
  },
  {
    question: "How does real-time sync work?",
    answer: "Our integrations use webhooks and API connections to detect changes in your PMS instantly and sync them to GoHighLevel within minutes.",
  },
  {
    question: "Is the sync two-way?",
    answer: "Yes! Data flows bidirectionally - changes in your PMS sync to GHL, and updates made in GHL sync back to your PMS.",
  },
  {
    question: "How long does setup take?",
    answer: "Our guided 45-minute setup process covers platform selection, API configuration, field mapping, and testing. Our team handles the technical details.",
  },
  {
    question: "What data can I sync?",
    answer: "You can sync patients (contact info, demographics), providers, appointments (all statuses), and payment information. Medical records are never accessed.",
  },
];

const platforms = [
  {
    name: "Dentrix",
    description: "All versions supported",
    status: "available",
    color: "blue-600",
    url: "https://marketplace.gohighlevel.com/integration/6836bcb8eb1ce7acf9241b8b",
    features: [
      "Real-time sync",
      "Two-way data flow",
      "All modules supported",
      "Cloud & On-premise",
    ],
     imgUrl:"/img/Dentrix-icon.png"
  },
  {
    name: "Open Dental",
    description: "Cloud & On-premise",
    status: "available",
    color: "green-600",
    url: "https://marketplace.gohighlevel.com/integration/67972665fc19f6448bf732af",
    features: ["Real-time sync", "Two-way data flow", "Custom field mapping"],
    imgUrl:"/img/Open-Dental-icon.png"
  },
  {
    name: "EagleSoft",
    description: "Patterson Dental",
    status: "coming-soon",
    color: "gray-400",
    url: "https://calendly.com/smart-sync/meeting",
    features: [
      "Real-time sync",
      "Two-way data flow",
      "All modules supported",
      "Cloud & On-premise",
    ],
     imgUrl:"/img/EagleSoft-icon.png"
  },
  {
    name: "Curve Dental",
    description: "Cloud-based PMS",
    status: "coming-soon",
    color: "gray-400",
    url: "https://calendly.com/smart-sync/meeting",
    features: [
      "Real-time sync",
      "Two-way data flow",
      "All modules supported",
      "Cloud & On-premise",
    ],
     imgUrl:"/img/Curve-Dental.png"
  },
];

export default function SupportedPlatforms() {
  const [, setLocation] = useLocation(); // <-- hook for navigation
  const metaTags = getMetaTags('supportedPlatforms');

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://smartsync.one/' },
    { name: 'Supported Platforms', url: 'https://smartsync.one/supported-platforms' },
  ]);

  const faqSchema = getFAQSchema(faqItems);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Supported PMS Platforms",
    description: "Smart Sync connects Dentrix, Open Dental, EagleSoft, and Curve Dental to GoHighLevel CRM with real-time bidirectional sync.",
    url: "https://smartsync.one/supported-platforms",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "Dentrix Integration",
          description: "Connect Dentrix PMS to GoHighLevel with real-time bidirectional sync",
          url: "https://smartsync.one/dentrix-gohighlevel-integration",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "50",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "Open Dental Integration",
          description: "Connect Open Dental PMS to GoHighLevel with real-time bidirectional sync",
          url: "https://smartsync.one/open-dental-gohighlevel-integration",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "50",
          },
        },
      ],
    },
  };

  return (
    <>
      <SEO {...metaTags} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={organizationSchema} />
      <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            data-testid="text-page-title"
          >
            Supported Platforms
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect the most popular dental practice management systems with
            GoHighLevel CRM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {platforms.map((platform) => (
            <Card
              key={platform.name}
              className={`${
                platform.status === "available"
                  ? "border-green-200"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16  rounded-lg flex items-center justify-center mx-auto mb-4`}
                >
                  <img
                    src={platform.imgUrl}
                    alt="Dentrix iocn"
                    className="w-9 h-9" // adjust size as needed
                  />
                </div>
                <h3
                  className="text-2xl font-bold text-gray-900 mb-2"
                  data-testid={`platform-name-${platform.name.toLowerCase()}`}
                >
                  {platform.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {platform.description}
                </p>

                <div className="mb-6">
                 {platform.status === "available" ? (
                      <Badge
                        className="bg-green-100 text-green-800"
                        data-testid={`status-${platform.name.toLowerCase()}`}
                      >
                        <CheckCircle size={12} className="mr-1" />
                        Available Now
                      </Badge>
                    ) : (
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                        data-testid={`status-${platform.name.toLowerCase()}`}
                      >
                        <Clock size={12} className="mr-1" />2 months Free Trial
                      </Badge>
                    )}
                </div>

                <ul className="text-sm text-gray-600 mb-6 space-y-2 h-[100px]">
                  {platform.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center"
                    >
                      <CheckCircle
                        size={14}
                        className={`mr-2 ${
                          platform.status === "available"
                            ? "text-green-500"
                            : "text-gray-400"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {platform.status === "available" ? (
                    <Button
                      asChild
                      className="w-full bg-primary text-white hover:bg-primary-dark"
                    >
                      <a
                        href={platform?.url || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Buy Now
                      </a>
                    </Button>
                  ) : (
                    <Button className="w-full bg-primary text-white hover:bg-primary-dark">
                      <a
                        href={platform?.url || ""}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Demo
                      </a>
                    </Button>
                  )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Details */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Integration Details
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12  rounded-lg flex items-center justify-center mx-auto mb-4">
                <img
                  src="/img/Data-Security.png"
                  alt="Data Security" // adjust size as needed
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Data Security</h3>
              <p className="text-sm text-gray-600">
                HIPAA-conscious design with encrypted connections and automatic
                data deletion
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img
                  src="/img/Setup-Time.svg"
                  alt="Setup Time" // adjust size as needed
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Setup Time</h3>
              <p className="text-sm text-gray-600">
                45-minute guided setup with our technical team
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <img
                  src="/img/Real-time-Sync.svg"
                  alt="Real-time Sync" // adjust size as needed
                />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Real-time Sync</h3>
              <p className="text-sm text-gray-600">
                Instant data synchronization using webhooks and API connections
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Connect Your PMS?
          </h2>
          <p className="text-gray-600 mb-8">
            Choose your platform above or book a demo to learn more about
            upcoming integrations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary-dark"
              data-testid="button-book-demo"
            >
              <a
                href="https://calendly.com/smart-sync/meeting"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Demo Call
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4"
              data-testid="button-contact-sales"
              onClick={() => setLocation("/contact")}
            >
              Contact Sales
            </Button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our PMS integrations and how Smart Sync works
            </p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </div>
      </div>
    </>
  );
}
