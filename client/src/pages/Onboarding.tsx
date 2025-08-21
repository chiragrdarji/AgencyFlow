import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FAQ from "@/components/FAQ";
import { CheckCircle, Download, Settings, MapPin, Play, Clock, Shield, Phone } from "lucide-react";

const onboardingSteps = [
  {
    step: 1,
    title: "Initial Consultation",
    description: "Schedule a 45-minute setup call with our technical team",
    icon: Phone,
    details: [
      "Assess your current PMS configuration",
      "Discuss data synchronization requirements",
      "Plan field mapping strategy",
      "Set expectations and timeline"
    ]
  },
  {
    step: 2,
    title: "App Installation",
    description: "Download and install the connector on your PMS system",
    icon: Download,
    details: [
      "Download from official marketplace",
      "Install with administrator privileges", 
      "Verify system compatibility",
      "Complete initial configuration"
    ]
  },
  {
    step: 3,
    title: "Field Mapping",
    description: "Map data fields between your PMS and GoHighLevel",
    icon: MapPin,
    details: [
      "Patient information mapping",
      "Provider and appointment fields",
      "Payment and billing data",
      "Custom field configuration"
    ]
  },
  {
    step: 4,
    title: "Testing & Launch",
    description: "Test the integration and go live with real-time sync",
    icon: Play,
    details: [
      "Test data synchronization",
      "Verify field mappings",
      "Monitor sync performance",
      "Go live with confidence"
    ]
  }
];

const faqItems = [
  {
    question: "What do I need to prepare before the setup call?",
    answer: "Please ensure you have administrator access to both your PMS system and GoHighLevel account. Have your field mapping requirements ready and any custom fields you want to sync identified."
  },
  {
    question: "How long does the complete setup process take?",
    answer: "The entire process typically takes 2-3 business days from initial consultation to going live. The actual setup call is about 45 minutes, with additional time for testing and verification."
  },
  {
    question: "What if I need to modify field mappings later?",
    answer: "Field mappings can be updated at any time through the connector dashboard. However, major changes may require a brief consultation call to ensure data integrity."
  },
  {
    question: "Is there ongoing support after setup?",
    answer: "Yes, we provide ongoing technical support via email and phone. Most issues are resolved within 24 hours, with critical sync problems addressed immediately."
  },
  {
    question: "What happens to existing data during setup?",
    answer: "Existing data remains untouched during setup. The connector only begins syncing new and modified records after the initial configuration is complete and tested."
  }
];

export default function Onboarding() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            data-testid="text-page-title"
          >
            Onboarding Process
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get up and running with our dental PMS connector in just a few
            simple steps. Our team handles the technical setup so you can focus
            on your business.
          </p>
        </div>

        {/* Setup Steps */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Step-by-Step Setup Process
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {onboardingSteps.map((step) => {
              const IconComponent = step.icon;
              return (
                <Card
                  key={step.step}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-primary">
                          Step {step.step}
                        </div>
                        <CardTitle
                          className="text-xl"
                          data-testid={`step-title-${step.step}`}
                        >
                          {step.title}
                        </CardTitle>
                      </div>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-2">
                      {step.details.map((detail, index) => (
                        <li
                          key={index}
                          className="flex items-start text-sm text-gray-600"
                        >
                          <CheckCircle
                            className="text-green-500 mr-2 mt-0.5"
                            size={16}
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Setup Timeline
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary"></div>

              <div className="space-y-12">
                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="font-semibold text-gray-900">Day 1</div>
                      <div className="text-sm text-gray-600">
                        Initial consultation call
                      </div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full relative z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-4 h-4 bg-primary rounded-full relative z-10"></div>
                  <div className="flex-1 text-left pl-8">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="font-semibold text-gray-900">Day 1-2</div>
                      <div className="text-sm text-gray-600">
                        App installation & configuration
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 text-right pr-8">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="font-semibold text-gray-900">Day 2-3</div>
                      <div className="text-sm text-gray-600">
                        Testing & verification
                      </div>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full relative z-10"></div>
                  <div className="flex-1 pl-8"></div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 pr-8"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full relative z-10"></div>
                  <div className="flex-1 text-left pl-8">
                    <div className="bg-white rounded-lg p-4 shadow-sm border-green-200">
                      <div className="font-semibold text-gray-900">Day 3</div>
                      <div className="text-sm text-gray-600">
                        Go live with real-time sync
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What You Get */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What's Included
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  45-Minute Setup Call
                </h3>
                <p className="text-sm text-gray-600">
                  Dedicated technical consultation with our experts
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Complete Configuration
                </h3>
                <p className="text-sm text-gray-600">
                  Full setup and field mapping handled by our team
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Ongoing Support
                </h3>
                <p className="text-sm text-gray-600">
                  Continued technical support after launch
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-primary rounded-2xl p-8 text-center text-white mb-20">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-blue-100 mb-6">
            Book your setup call today and be syncing data within 3 business
            days.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary-dark hover:text-white text-lg px-8 py-4"
            data-testid="button-book-setup-call"
          >
            <a
              href="https://calendly.com/dental-support-varianceinfotech/book-a-demo?month=2025-08"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Book Setup Call
            </a>
          </Button>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Onboarding FAQ
            </h2>
            <p className="text-gray-600">
              Common questions about our setup process
            </p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </div>
    </div>
  );
}
