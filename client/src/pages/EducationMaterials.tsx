import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import SchemaMarkup, { getBreadcrumbSchema } from "@/components/SchemaMarkup";
import { getMetaTags } from "@/lib/seoMeta";
import {
  PlayCircle,
  BookOpen,
  Calculator,
  Users,
  Clock,
  Download,
} from "lucide-react";
import { useLocation } from "wouter";

const videoTutorials = [
  {
    title: "Complete Setup Guide",
    duration: "",
    description: "Complete walkthrough of installation and initial setup",
    thumbnail: "setup-tutorial", // replace with actual image path later
    category: "Setup",
    url: "https://www.youtube.com/watch?v=92kQsPHo_jg", // direct watch link
  },
  {
    title: "PMS to GHL Calender Mapping",
    duration: "",
    description: "How to map PMS operatory to GHL Calender",
    thumbnail: "field-mapping",
    category: "Configuration",
    url: "https://www.youtube.com/watch?v=-iGsDwJtNoQ",
  },
  {
    title: "Open Dental eConnector Setup",
    duration: "",
    description: "How to setup Open Dental eConnector and configure API key",
    thumbnail: "automation",
    category: "Marketing",
    url: "https://www.youtube.com/watch?v=RoFXn45J6ts",
  },
  // {
  //   title: "Troubleshooting Common Issues",
  //   duration: "",
  //   description: "Resolve sync problems and optimize performance",
  //   thumbnail: "troubleshooting",
  //   category: "Support",
  //   url: null, // no link
  // },
];

const guides = [
  {
    title: "Complete Setup Guide",
    description: "Step-by-step instructions with screenshots for every PMS",
    icon: BookOpen,
    pages: 24,
    category: "Setup"
  },
  {
    title: "Agency Automation Playbook",
    description: "Campaign templates and automation workflows for dental practices",
    icon: Users,
    pages: 36,
    category: "Marketing"
  },
  {
    title: "ROI Tracking Manual",
    description: "How to measure and report marketing effectiveness to dental clients",
    icon: Calculator,
    pages: 18,
    category: "Analytics"
  },
  {
    title: "Data Security & Compliance",
    description: "HIPAA compliance guidelines and security best practices",
    icon: BookOpen,
    pages: 12,
    category: "Compliance"
  }
];

const templates = [
  {
    name: "New Patient Welcome Sequence",
    description: "5-email automation for new dental patients",
    type: "Email Campaign"
  },
  {
    name: "Reactivation Campaign",
    description: "Win back inactive patients with targeted messaging",
    type: "Multi-channel"
  },
  {
    name: "Appointment Reminder Flow",
    description: "SMS and email reminders to reduce no-shows",
    type: "Automation"
  },
  {
    name: "Monthly ROI Report Template",
    description: "Professional client reporting template",
    type: "Report"
  }
];

export default function EducationMaterials() {
  const metaTags = getMetaTags('education');

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://smartsync.one/' },
    { name: 'Education', url: 'https://smartsync.one/education' },
  ]);

  return (
    <>
      <SEO {...metaTags} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            data-testid="text-page-title"
          >
            Education Materials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to master the Smart Sync One and maximize your
            dental marketing campaigns.
          </p>
        </div>

        {/* Video Tutorials */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Video Tutorials
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {videoTutorials.map((video, index) => (
              // <Card key={index} className="hover:shadow-lg transition-shadow">
              //   <CardHeader className="pb-4">
              //     <div className="relative bg-gray-100 rounded-lg h-48 flex items-center justify-center mb-4 overflow-hidden">
              //       {/* Show thumbnail or placeholder */}
              //       {video.url ? (
              //         <img
              //           src={`https://img.youtube.com/vi/${
              //             video.url.split("v=")[1]
              //           }/hqdefault.jpg`}
              //           alt={video.title}
              //           className="w-full h-full object-cover rounded-lg"
              //         />
              //       ) : (
              //         <PlayCircle className="text-primary" size={64} />
              //       )}

              //       {/* Duration Badge */}
              //       {video.duration && (
              //         <div className="absolute top-4 right-4">
              //           <Badge
              //             variant="secondary"
              //             className="bg-black/50 text-white"
              //           >
              //             <Clock size={12} className="mr-1" />
              //             {video.duration}
              //           </Badge>
              //         </div>
              //       )}

              //       {/* Category Badge */}
              //       {/* <div className="absolute bottom-4 left-4">
              //         <Badge className="bg-primary text-white">
              //           {video.category}
              //         </Badge>
              //       </div> */}
              //     </div>
              //     <CardTitle className="text-lg">{video.title}</CardTitle>
              //   </CardHeader>
              //   <CardContent className="pt-0">
              //     <p className="text-gray-600 mb-4">{video.description}</p>
              //     <Button
              //       className="w-full bg-primary text-white hover:bg-primary-dark"
              //       onClick={() =>
              //         video.url && window.open(video.url, "_blank")
              //       }
              //       disabled={!video.url}
              //     >
              //       <PlayCircle size={16} className="mr-2" />
              //       {video.url ? "Watch Now" : "Coming Soon"}
              //     </Button>
              //   </CardContent>
              // </Card>

              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="relative bg-gray-100 rounded-lg h-[260px] flex items-center justify-center mb-4 overflow-hidden">
                    {video.url ? (
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${video.url.split("v=")[1]
                          }`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg"
                      />
                    ) : (
                      <PlayCircle className="text-primary" size={64} />
                    )}

                    {/* Duration Badge */}
                    {video.duration && (
                      <div className="absolute top-4 right-4">
                        <Badge
                          variant="secondary"
                          className="bg-black/50 text-white"
                        >
                          <Clock size={12} className="mr-1" />
                          {video.duration}
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 mb-0">{video.description}</p>
                </CardContent>
              </Card>

            ))}
          </div>
        </section>

        {/* Guides & Documentation */}
        {/* <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Guides & Documentation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {guides.map((guide, index) => {
              const IconComponent = guide.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3
                            className="text-xl font-bold text-gray-900"
                            data-testid={`guide-title-${index}`}
                          >
                            {guide.title}
                          </h3>
                          <Badge variant="outline">{guide.pages} pages</Badge>
                        </div>
                        <Badge className="bg-primary text-white mb-3">
                          {guide.category}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{guide.description}</p>
                    <Button
                      variant="outline"
                      className="w-full hover:bg-primary hover:text-white"
                      data-testid={`button-download-${index}`}
                    >
                      <Download size={16} className="mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section> */}

        {/* Campaign Templates */}
        {/* <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Campaign Templates
          </h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-center text-gray-600 mb-8">
              Ready-to-use campaign templates designed specifically for dental
              practices. Customize and deploy in minutes.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {templates.map((template, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3
                        className="font-bold text-gray-900"
                        data-testid={`template-name-${index}`}
                      >
                        {template.name}
                      </h3>
                      <Badge variant="outline">{template.type}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {template.description}
                    </p>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full hover:bg-primary hover:text-white" 
                      data-testid={`button-template-${index}`}
                    >
                      <Download size={14} className="mr-2" />
                      Download Template
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* ROI Calculator */}
        {/* <section className="mb-20">
          <Card className="bg-primary text-white">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Calculator className="text-white" size={32} />
              </div>
              <h2 className="text-2xl font-bold mb-4">ROI Calculator Tool</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Calculate the potential return on investment from implementing
                automated dental marketing campaigns. Show clients exactly how
                much revenue they can generate.
              </p>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary-dark hover:text-white text-lg px-8 py-4"
                data-testid="button-roi-calculator"
              >
                <Calculator size={16} className="mr-2" />
                Launch Calculator
              </Button>
            </CardContent>
          </Card>
        </section> */}

        {/* Best Practices */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Best Practices
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn from successful agencies who have implemented our connector
              to grow their dental clients' practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-12  rounded-lg flex items-center justify-center mx-auto mb-4">
                 <img
                  src="/img/Patient-Segmentatio.svg"
                  alt="Patient Segmentation" // adjust size as needed
                />
                </div>
                <h3 className="font-bold text-gray-900 mb-4">
                  Patient Segmentation
                </h3>
                <p className="text-sm text-gray-600">
                  How to segment dental patients for maximum campaign
                  effectiveness and personalization.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-12  rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                  src="/img/Timing-Optimization.svg"
                  alt="Timing Optimization" // adjust size as needed
                />
                </div>
                <h3 className="font-bold text-gray-900 mb-4">
                  Timing Optimization
                </h3>
                <p className="text-sm text-gray-600">
                  Best practices for campaign timing based on appointment
                  schedules and patient behavior.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <img
                  src="/img/Performance-Tracking.png"
                  alt="Performance Tracking" // adjust size as needed
                />
                </div>
                <h3 className="font-bold text-gray-900 mb-4">
                  Performance Tracking
                </h3>
                <p className="text-sm text-gray-600">
                  Key metrics to track and how to present ROI data to dental
                  practice owners.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA */}
        <div className="bg-gray-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Additional Support?
          </h2>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our team is here to help with
            custom training and support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary-dark"
              data-testid="button-contact-support"
              asChild
            >
              <a href="mailto:support@smartsync.one">Contact Support</a>
            </Button>
            {/* <Button
                variant="outline"
                size="lg"
                data-testid="button-request-training"
              >
                Request Training Session
              </Button> */}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
