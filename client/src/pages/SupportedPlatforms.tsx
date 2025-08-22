import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Laptop, CheckCircle, Clock } from "lucide-react";
import { useLocation } from "wouter";

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
     url:"/Dentrix-icon.png"
  },
  {
    name: "Open Dental",
    description: "Cloud & On-premise",
    status: "available",
    color: "green-600",
    url: "https://marketplace.gohighlevel.com/integration/67972665fc19f6448bf732af",
    features: ["Real-time sync", "Two-way data flow", "Custom field mapping"],
    url:"/Open-Dental-icon.png"
  },
  {
    name: "EagleSoft",
    description: "Patterson Dental",
    status: "coming-soon",
    color: "gray-400",
    url: "https://calendly.com/dental-support-varianceinfotech/book-a-demo?month=2025-08",
    features: [
      "Real-time sync",
      "Two-way data flow",
      "All modules supported",
      "Cloud & On-premise",
    ],
     url:"/EagleSoft-icon.png"
  },
  {
    name: "Curve Dental",
    description: "Cloud-based PMS",
    status: "coming-soon",
    color: "gray-400",
    url: "https://calendly.com/dental-support-varianceinfotech/book-a-demo?month=2025-08",
    features: [
      "Real-time sync",
      "Two-way data flow",
      "All modules supported",
      "Cloud & On-premise",
    ],
     url:"/Curve-Dental.png"
  },
];

export default function SupportedPlatforms() {
  const [, setLocation] = useLocation(); // <-- hook for navigation
  return (
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
                    src={platform.url}
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
                      className="bg-yellow-100 text-yellow-800"
                      data-testid={`status-${platform.name.toLowerCase()}`}
                    >
                      <Clock size={12} className="mr-1" />
                      Coming Soon
                    </Badge>
                  )}
                </div>

                <ul className="text-sm text-gray-600 mb-6 space-y-2">
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

                <Button
                  className={`w-full ${
                    platform.status === "available"
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                  disabled={platform.status === "coming-soon"}
                  data-testid={`button-${platform.name.toLowerCase()}`}
                >
                  {platform.status === "available" ? "Buy Now" : "Book Demo"}
                </Button>
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
                  src="/Data-Security.png"
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
                  src="/Setup-Time.svg"
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
                  src="/Real-time-Sync.svg"
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
                href="https://calendly.com/dental-support-varianceinfotech/book-a-demo?month=2025-08"
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
      </div>
    </div>
  );
}
