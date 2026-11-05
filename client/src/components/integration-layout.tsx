import { Link, useLocation } from "wouter";
import {
  ChevronDown, Shield, Play, ArrowRight, Calendar, Check,
  FolderSync, Bell, CreditCard, Star, BellRing, Building,
  ChartLine, MessageCircle, CalendarDays, Twitter,
  Linkedin, Facebook, Grid3x3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { CustomDialogContent } from "./custom_dialogue";
import FAQ from "@/components/FAQ";
import SetupFlow from "./SetupFlow";

interface IntegrationLayoutProps {
  type: "open-dental" | "dentrix";
  children?: React.ReactNode;
}

interface FeatureCard {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
}

export default function IntegrationLayout({ type }: IntegrationLayoutProps) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [playing, setPlaying] = useState(false)

  const isOpenDental = type === "open-dental";
  const integration = isOpenDental ? "Open Dental" : "Dentrix";
  const url = isOpenDental ? "https://marketplace.gohighlevel.com/integration/67972665fc19f6448bf732af" : "https://marketplace.gohighlevel.com/integration/6836bcb8eb1ce7acf9241b8b";
  const videourl = isOpenDental ? "https://player.vimeo.com/video/1102095318" : "https://www.youtube.com/embed/cGNcWERYxyk?si=ZANLyrP1GHJhxalO"
  const otherIntegration = isOpenDental ? "Dentrix" : "Open Dental";
  const otherPath = isOpenDental ? "/dentrix-integration" : "/open-dental-integration";

  const [open, setOpen] = useState(false);
  const getEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(/(?:v=|youtu\.be\/|embed\/)([^&?/]+)/)
    const videoId = videoIdMatch ? videoIdMatch[1] : null
    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
      : url
  }
  // SEO data based on integration type
  const seoData = isOpenDental ? {
    title: "Open Dental GoHighLevel Integration | SmartSync.One",
    description: "Seamlessly integrate Open Dental with GoHighLevel CRM. Automate patient communication, reduce no-shows, and boost your dental practice revenue with our HIPAA Compliant solution.",
    keywords: "Open Dental integration, GoHighLevel CRM, dental practice management, patient communication automation, HIPAA Compliant, dental marketing",
    url: "https://smartsync.one/open-dental-gohighlevel-integration",
    pricing: "$149/month per Open Dental Instance"
  } : {
    title: "Dentrix GoHighLevel Integration | SmartSync.One",
    description: "Connect Dentrix with GoHighLevel CRM for automated patient engagement, marketing campaigns, and practice growth. HIPAA Compliant with 99% uptime.",
    keywords: "Dentrix integration, GoHighLevel CRM, dental practice CRM, patient engagement, multi-practice management, ROI tracking",
    url: "https://smartsync.one/dentrix-gohighlevel-integration",
    pricing: "Starting at $75/month per practice"
  };
  const ConnetsDentrix = [
    {
      agencUrl: "/img/patient.svg",
      title: "Patient",
      content: "Sync new and updated patient information from Dentrix into GoHighLevel automatically."
    },
    {
      agencUrl: "/img/appointment.svg",
      title: "Appointment",
      content: " Real-time syncing of scheduled, updated, or cancelled appointments."
    },
    {
      agencUrl: "/img/payment.svg",
      title: "Payment",
      content: " Payment activity flows directly into GHL for segmentation, reporting, and automation."
    },
    {
      agencUrl: "/img/opportunity.svg",
      title: "Opportunity",
      content: " Automatically create and update opportunities in GoHighLevel based on real-time patient activity from Dentrix."
    },
    {
      agencUrl: "/img/two-way-sync.svg",
      title: "Two-way Sync",
      content: " Designed for accurate, real-time dental PMS and GoHighLevel  integration without duplicates or migration issues."
    },
    {
      agencUrl: "/img/automation-ready.svg",
      title: "Automation-Ready",
      content: "  Use sync events to trigger GHL workflows, pipelines, reminders, and campaigns."
    }
  ]

  const ConnetsOpenDental = [
    {
      agencUrl: "/img/patient.svg",
      title: "Patient",
      content: "Sync new and updated patient contact records and custom fields from Open Dental into GoHighLevel automatically."
    },
    {
      agencUrl: "/img/appointment.svg",
      title: "Appointment",
      content: "Near real-time syncing of scheduled, completed, cancelled, or broken appointments and operatory calendars."
    },
    {
      agencUrl: "/img/payment.svg",
      title: "Payment",
      content: "Open Dental ledger payment activity flows directly into GHL opportunities for revenue attribution and automation."
    },
    {
      agencUrl: "/img/opportunity.svg",
      title: "Opportunity",
      content: "Automatically create and update opportunities in GoHighLevel based on treatment acceptance and completed procedures."
    },
    {
      agencUrl: "/img/two-way-sync.svg",
      title: "Two-way Sync",
      content: "Bidirectional sync ensures new patients created in GoHighLevel flow into Open Dental without duplicates."
    },
    {
      agencUrl: "/img/automation-ready.svg",
      title: "Automation-Ready",
      content: "Use Open Dental clinical events to trigger GoHighLevel workflows, reactivation campaigns, and reminders."
    }
  ];

  const marketingAgencies = [
    {
      agencUrl: "/img/Instant-Dental-Appointments.png",
      title: "Automated Dental Appointments – Right Inside Your CRM",
      content: "Streamline scheduling with near real-time calendar access. Book patients in seconds, eliminate back-and-forth, and keep your agency running smoothly."
    },
    {
      agencUrl: "/img/Real-Time-Patient-Data.png",
      title: "Track Patient Attendance with Near Real-Time Sync",
      content: "See if patients attended their appointments right inside your CRM as it updates. Use visit data to optimize campaigns and sharpen follow-ups"
    },
    {
      agencUrl: "/img/Track-Patient-Attendance.svg",
      title: "Automate Outreach with Near Real-Time Patient Data",
      content: "Leverage synced records to send timely reminders, confirmations, and special messages. Keep patients engaged while strengthening loyalty—without lifting a finger"
    }
  ]
  // Features based on integration type
  const features: any = isOpenDental ? [
    {
      icon: "/img/loop-arrow.svg",
      title: "Two-Way Open Dental Synchronization",
      description: "Automatically synchronize patient records, appointments, and treatment plans between Open Dental and GoHighLevel in near real-time.",
      bgColor: "bg-blue-50",
      iconColor: "text-primary"
    },
    {
      icon: "/img/data-storage.svg",
      title: "Automated Appointment Reminders",
      description: "Reduce no-shows with automated SMS and email reminders, confirmations, and pre-appointment instructions triggered by Open Dental calendar status.",
      bgColor: "bg-green-50",
      iconColor: "text-[#00C18C]"
    },
    {
      icon: "/img/authentication.svg",
      title: "Revenue & Payment Attribution",
      description: "Sync completed Open Dental ledger payments and treatment values into GoHighLevel opportunities to calculate true marketing ROI.",
      bgColor: "bg-red-50",
      iconColor: "text-[#FF3B47]"
    },
    {
      icon: "/img/process.svg",
      title: "Configurable Field Mapping",
      description: "Customize which Open Dental patient fields, custom fields, and appointment types sync to GoHighLevel without technical complexity.",
      bgColor: "bg-blue-50",
      iconColor: "text-primary"
    },
    {
      icon: "/img/api.svg",
      title: "HIPAA Compliant Data Pipeline",
      description: "Zero persistent PHI storage with end-to-end encryption (TLS 1.3 / AES-256) and signed Business Associate Agreements (BAAs).",
      bgColor: "bg-green-50",
      iconColor: "text-[#00C18C]"
    },
    {
      icon: "/img/monitoring.svg",
      title: "Continuous Sync Monitoring",
      description: "Near real-time sync status monitoring and automated retry mechanisms to ensure data integrity between Open Dental and CRM.",
      bgColor: "bg-red-50",
      iconColor: "text-[#FF3B47]"
    }
  ] : [
    {
      icon: "/img/paitent-payment-real-time-sync.svg",
      title: "Two-Way Dentrix Synchronization",
      description: "Automatically sync patient records, appointments, and treatment plans between Dentrix G6/G7/G8/Ascend/Enterprise and GoHighLevel in near real-time.",
      bgColor: "bg-blue-50",
      iconColor: "text-primary"
    },
    {
      icon: "/img/loop-arrow.svg",
      title: "Dentrix Appointment Book Integration",
      description: "Sync operatories, providers, and appointment statuses (Scheduled, Completed, Cancelled, Broken) directly into GoHighLevel calendars.",
      bgColor: "bg-green-50",
      iconColor: "text-[#00C18C]"
    },
    {
      icon: "/img/seamless-data-flow.svg",
      title: "Dentrix Ledger & Treatment Intelligence",
      description: "Track proposed, accepted, and completed Dentrix treatment plans and payments inside GoHighLevel opportunity pipelines for accurate revenue attribution.",
      bgColor: "bg-red-50",
      iconColor: "text-[#FF3B47]"
    },
    {
      icon: "/img/data-storage.svg",
      title: "Multi-Location & Enterprise Visibility",
      description: "Centralize multiple Dentrix databases or Dentrix Enterprise clinics into unified GoHighLevel accounts with location tagging.",
      bgColor: "bg-blue-50",
      iconColor: "text-primary"
    },
    {
      icon: "/img/process.svg",
      title: "Configurable Field Mapping",
      description: "Map standard and custom Dentrix fields to GoHighLevel contact fields and custom values during guided onboarding.",
      bgColor: "bg-green-50",
      iconColor: "text-[#00C18C]"
    },
    {
      icon: "/img/api.svg",
      title: "HIPAA Compliant & Secure",
      description: "Fully HIPAA Compliant with signed BAA, zero persistent PHI storage, and automated payload deletion after secure delivery.",
      bgColor: "bg-red-50",
      iconColor: "text-[#FF3B47]"
    }
  ];

  const faqItems = isOpenDental
    ? [
      {
        question: "What does this integration do?",
        answer:
          "SmartSync.One application syncs patients, providers, appointments, and payments between Open Dental and GoHighLevel so you can focus on growing your clients' practices.",
      },
      {
        question: "Is the data sync real-time?",
        answer:
          "SmartSync.One provides near real-time synchronization. Updates typically appear in your CRM within minutes, ensuring patient records, appointments, and contacts stay continuously accurate.",
      },
      {
        question: "Do I need any technical skills to set it up?",
        answer:
          "No technical expertise is required. The setup is straightforward, user-friendly, and comes with step-by-step guidance.",
      },
      {
        question: "Can I choose what data gets synced?",
        answer:
          "Yes. You have full control to customize which fields and data types are synced between the platforms, so you only share what matters most.",
      },
      {
        question: "Does it support multi-location practices?",
        answer:
          "Yes. The integration seamlessly supports multiple providers and locations, making it easy to manage all your data in one place.",
      },
      {
        question: "What Open Dental versions are supported?",
        answer:
          "SmartSync.One supports Open Dental version 18.x through 24.x+, including both on-premise MySQL/MariaDB installations and Open Dental Cloud deployments.",
      },
      {
        question: "How can I get started?",
        answer: (
          <>
            Click the “Connect Open Dental to GHL” button or visit our{" "}
            <a
              href="https://marketplace.gohighlevel.com/integration/67972665fc19f6448bf732af"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold"
            >
              Marketplace listing
            </a>{" "}
            to begin.
          </>
        ),
      },
      {
        question: "How much does the Open Dental to GoHighLevel integration cost?",
        answer:
          "Pricing starts at $79 per Open Dental instance per month and goes up to $129, depending on the plan.",
      },

    ]
    : [
      {
        question: "What is a PMS API?",
        answer:
          "A PMS API is a secure interface that allows dental practice management systems to sync data with external tools like CRMs.",
      },
      {
        question: "Do we support Dentrix Ascend API?",
        answer:
          "Yes, we currently support the Dentrix Ascend API.",
      },
      {
        question: "What does this integration do?",
        answer:
          "SmartSync.One application syncs patients, providers, appointments, and payments between Dentrix and GoHighLevel so you can focus on growing your clients' practices.",
      },
      {
        question: "Is the data sync real-time?",
        answer:
          "SmartSync.One provides near real-time synchronization. Updates typically appear in your CRM within minutes, ensuring patient records, appointments, and contacts stay continuously accurate.",
      },
      {
        question: "Do I need any technical skills to set it up?",
        answer:
          "No. The setup requires no coding or technical expertise. It’s simple, user-friendly, and fully guided by our team.",
      },
      {
        question: "Can I choose what data gets synced?",
        answer:
          "Yes. You can fully customize which fields and data types are synced between the platforms, so you only share the information that matters most to your practice.",
      },
      {
        question: "Does it support multi-location practices?",
        answer:
          "Yes. The integration fully supports multiple providers and locations, allowing you to manage all your practices seamlessly in one system.",
      },
      {
        question: "What Dentrix versions are supported?",
        answer:
          "The integration works with most recent versions of Dentrix. For version-specific compatibility, please contact our team for confirmation.",
      },
      {
        question: "How can I get started?",
        answer: (
          <>
            Click the “Connect Dentrix to GHL” button or visit our{" "}
            <a
              href="https://marketplace.gohighlevel.com/integration/6836bcb8eb1ce7acf9241b8b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-bold "
            >
              Marketplace listing
            </a>{" "}
            to begin.
          </>
        ),
      },
      {
        question: "How much does the Dentrix to GoHighLevel integration cost?",
        answer:
          "Pricing starts at $150 per Dentrix instance per month and goes up to $200, depending on the plan.",
      },

    ]

  const steps = isOpenDental
    ? [
      {
        stepNo: "Step 1:-",
        title: " Install ConnectorApp from the GHL Marketplace.",
        description: "Install ConnectorApp from the GHL Marketplace.",
        image: "/img/opendental/open-dental-gohighlevel-connector-dashboard-view.png",
        alt: "Dashboard view of Open Dental Connector app in the GoHighLevel marketplace showing app details, screenshots, and install button"
      },
      {
        stepNo: "Step 2:-",
        title: " Set up the required key.",
        description: "Add your API key to enable synchronization.",
        image: "/img/opendental/open-dental-gohighlevel-connector-configuration-step1.png",
        alt: "Open Dental Connector configuration screen showing developer key, customer key, and time zone setup in GoHighLevel"
      },
      {
        stepNo: "Step 3:-",
        title: " Choose the required module to sync with GHL and set up the calendar.",
        description: "Select the module to sync with GHL and configure the calendar.",
        image: "/img/opendental/open-dental-gohighlevel-calendar-mapping-step2.png",
        alt: "Open Dental Connector calendar mapping screen in GoHighLevel showing provider-to-calendar synchronization setup",
      },
      {
        stepNo: "Step 4:-",
        title: "Configure field mapping.",
        description: "Map fields between your PMS and GoHighLevel.",
        image: "/img/opendental/open-dental-gohighlevel-field-mapping-interface.png",
        alt: "Field mapping interface in Open Dental Connector showing data fields matched between Open Dental and GoHighLevel for personal information synchronization"
      },
    ] :
    [
      {
        stepNo: "Step 1:-",
        title: " Install ConnectorApp from the GHL Marketplace",
        description: "Install ConnectorApp from the GHL Marketplace.",
        image: "/img/dentrix/dentrix-connector.png",
        alt: "Dashboard view of Dentrix Connector app in the GoHighLevel marketplace showing app details, screenshots, and install button",
      },
      {
        stepNo: "Step 2:-",
        title: " Set up the required product key.",
        description: "Add your API key to enable synchronization.",
        image: "/img/dentrix/dentrix-gohighlevel-connector-dashboard-view.png",
        alt: "Dentrix Connector configuration screen showing developer key, customer key, and time zone setup in GoHighLevel",

      },
      {
        stepNo: "Step 3:-",
        title: " Choose the required module to sync with GHL and set up the calendar",
        description: "Select the module to sync with GHL and configure the calendar.",
        image: "/img/dentrix/dentrix-gohighlevel-calendar-mapping-step3.png",
        alt: "Dentrix Connector calendar mapping screen in GoHighLevel showing provider-to-calendar synchronization setup",
      },
      {
        stepNo: "Step 4:-",
        title: " Configure field mapping.",
        description: "Map fields between your PMS and GoHighLevel.",
        image: "/img/dentrix/dentrix-gohighlevel-field-mapping-interface.png",
        alt: "Field mapping interface in Dentrix Connector showing data fields matched between Dentrix and GoHighLevel for personal information synchronization",
      },
    ];

  // Update document head for SEO
  useEffect(() => {
    if (typeof document === 'undefined') return;

    document.title = seoData.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', seoData.description);

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seoData.keywords);
  }, [seoData]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Schema Markup */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: `${integration} GoHighLevel Integration`,
            applicationCategory: "HealthApplication",
            operatingSystem: "Web",
            description: seoData.description,
            provider: {
              "@type": "Organization",
              name: "SmartSync.One",
            },
            offers: {
              "@type": "Offer",
              price: isOpenDental ? "149" : "75",
              priceCurrency: "USD",
              priceValidUntil: "2024-12-31",
            },
          }),
        }}
      /> */}

      {/* Navigation */}
      {/* <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="font-bold text-2xl text-primary">
                SmartSync.One
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-slate-600 hover:text-primary transition-colors">
                Home
              </Link>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                Services
              </a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                Integrations
              </a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                Contact
              </a>
              
              <div className="relative">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="flex items-center text-primary font-medium hover:text-blue-700 transition-colors"
                  data-testid="integration-menu-toggle"
                >
                  <span>{integration} Integration</span>
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
                
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-slate-200 z-10">
                    <Link 
                      href="/open-dental-integration" 
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-t-lg"
                      onClick={() => setIsMenuOpen(false)}
                      data-testid="link-open-dental"
                    >
                      🦷 Open Dental Integration
                    </Link>
                    <Link 
                      href="/dentrix-integration" 
                      className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-b-lg border-t border-slate-100"
                      onClick={() => setIsMenuOpen(false)}
                      data-testid="link-dentrix"
                    >
                      🦷 Dentrix Integration
                    </Link>
                  </div>
                )}
              </div>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600"
                data-testid="mobile-menu-toggle"
              >
                <Grid3x3 className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section className="hero-gradient pb-20 pt-4  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
              <Shield className="h-4 w-4 text-[#00C18C] mr-2" />
              <span className="text-sm font-medium text-slate-600">
                HIPAA Compliant & Secure Integration
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              <span className="text-primary">{integration}</span> to{" "}
              <span className="text-[#00C18C]">GoHighLevel</span>
              <br />
              <span className="text-slate-700">
                {isOpenDental ? "Perfect Integration" : "Integration for Dental Agencies"}
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              {isOpenDental
                ? "Seamlessly connect Open Dental with GoHighLevel CRM to automate patient communication, minimize no-shows through automated confirmation workflows, and boost practice revenue with intelligent workflow automation."
                : "Our solution connects your Dentrix practice management system (PMS) via the Dentrix API into the GoHighLevel CRM a best-in-class dental PMS integration."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-primary text-white hover:bg-primary-dark text-lg px-8 py-4"
                data-testid="button-start-trial"
              >
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Buy {integration} → GHL
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4"
                data-testid="button-watch-demo"
                onClick={() => setOpen(true)}
              >
                <Play className="mr-2 h-5 w-5" /> Watch Demo
              </Button>

              {/* Popup dialog with iframe */}
              {/* <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-4xl p-0 overflow-hidden" >
                
                  <DialogClose asChild>
                    <button
                      className="absolute top-3 right-3 rounded-full p-1 text-gray-500 hover:text-gray-800 bg-white/70 backdrop-blur-md shadow"
                      aria-label="Close"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </DialogClose>

                  <div className="aspect-video w-full">
                    <iframe
                      src={videourl}
                      title="Demo Video"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      className="w-full h-full"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog> */}
              <Dialog open={open} onOpenChange={setOpen}>
                <CustomDialogContent>
                  <DialogClose asChild>
                    <button
                      className="absolute top-[-30px] right-0 text-white "
                      aria-label="Close"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </DialogClose>
                  <div className="aspect-video w-full">
                    <iframe
                      src={videourl}
                      title="Demo Video"
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      className="w-full h-full border rounded"
                    ></iframe>
                  </div>
                </CustomDialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {isOpenDental
                ? " See The Integration In Action" : " How Dentrix to GoHighLevel Integration Works "}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Watch how our seamless integration transforms dental practice
              management and patient communication workflows.
            </p>
          </div>

          {/* <Card className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
                <div className="text-center">
                  <button
                    className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-6 mx-auto shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                    data-testid="video-play-button"
                  >
                    <Play className="text-primary text-2xl ml-1" />
                  </button>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Integration Demo Video</h3>
                  <p className="text-slate-600">See how {integration} + GoHighLevel work together seamlessly</p>
                </div>
              </div>
            </div>
          </Card> */}
          <Card className="relative bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              {playing ? (
                // Show YouTube video autoplay
                <iframe
                  src={getEmbedUrl(videourl)}
                  title="Demo Video"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                // Show Play Button + Info
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
                  <div className="text-center">
                    <button
                      onClick={() => setPlaying(true)}
                      className="bg-white rounded-full w-24 h-24 flex items-center justify-center mb-6 mx-auto shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                    >
                      <Play className="text-primary text-2xl ml-1" />
                    </button>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      Integration Demo Video
                    </h3>
                    <p className="text-slate-600">
                      See how {integration} + GoHighLevel work together
                      seamlessly
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" >
              {isOpenDental
                ? " Set Up in Four Easy Steps " : " Dentrix to GoHighLevel Integration Steps "}

            </h2>
            <p className={` ${isOpenDental ? "hidden" : " text-xl md:text-2xl font-bold text-slate-900 mb-4"}`}> Set Up in Four Easy Steps</p>
          </div>
          <SetupFlow steps={steps} />
          <div className="flex flex-col sm:flex-row  gap-4 justify-start mb-8 mt-[20px] lg:mt-[-20px] ms-4">
            <Button
              className="bg-primary text-white px-8 py-4 text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl"
              data-testid="button-start-trial-cta"
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                Buy {integration} → GHL
              </a>
            </Button>
            {/* <Button
              variant="outline"
              className="bg-transparent text-white px-8 py-4 text-lg border-2 border-white hover:bg-white hover:text-slate-900 transition-all"
              data-testid="button-schedule-demo"
            >
              <Calendar className="mr-2 h-5 w-5" />  <a
                href="/schedule-a-call"
                target="_blank"
                rel="noopener noreferrer"
              > Schedule Demo </a>
            </Button> */}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {isOpenDental
                ? " Powerful Integration Features" : "Dentrix to GoHighLevel (GHL) Sync Features "}

            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your dental practice with comprehensive automation and
              patient engagement tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature: any, index: any) => (
              <Card
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
              >
                <div
                  className={` rounded-lg  h-16 flex items-center text-center justify-center mb-6`}
                >
                  {/* <feature.icon className={`${feature.iconColor} h-8 w-8`} /> */}
                  <img
                    src={feature.icon}
                    alt="icon" // adjust size as needed
                  />
                </div>
                <h3 className="text-xl text-center font-bold text-slate-900 mb-3">
                  {feature.title}
                </h3>
                {/* <p className="text-slate-600 leading-relaxed">{feature.description}</p> */}
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">

              {isOpenDental
                ? " Open Dental to GHL Sync for Marketing Agencies" : "Dentrix to GoHighLevel Integration for Dental Marketing Agencies"}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {isOpenDental
                ? "SmartSync.One delivers the most reliable and automation-ready Open Dental integration for dental agencies. By connecting Open Dental with GoHighLevel through the secure Open Dental API, your team can finally streamline operations, automate communication, and sync all essential dental PMS data in near real-time."
                : "SmartSync.One delivers the most reliable and automation-ready Dentrix integration for dental agencies. By connecting Dentrix with GoHighLevel through the secure Dentrix API, your team can finally streamline operations, automate communication, and sync all essential dental PMS data in near real-time."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingAgencies.map((agency) => (
              <Card className="hover:shadow-md transition-shadow rounded-lg border bg-card text-card-foreground shadow-sm border-red-100">
                <CardContent className="p-8 ">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <img
                      src={agency.agencUrl}
                      alt="Icon"
                      className="w-9 h-9" // adjust size as needed
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {agency.title}
                  </h3>
                  <p className="text-gray-600 text-center">{agency.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Modules Section */}
      <section className="py-20 bg-slate-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {isOpenDental
                ? "How SmartSync.One Connects Open Dental to GoHighLevel"
                : "How SmartSync.One Connects Dentrix to GoHighLevel"}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {isOpenDental
                ? "Our connector provides full end-to-end dental PMS GHL integration, allowing your agency to manage patients, appointments, and payments inside GoHighLevel without manual work. Below are the modules we sync to and from Open Dental to GHL."
                : "Our connector provides full end-to-end dental PMS GHL integration, allowing your agency to manage patients, appointments, and payments inside GoHighLevel without manual work. Below are the modules we sync to and from Dentrix to GHL."}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(isOpenDental ? ConnetsOpenDental : ConnetsDentrix).map((connect) => (
              <Card key={connect.title} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <img
                      src={connect.agencUrl}
                      alt="Icon"
                      className="w-9 h-9"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {connect.title}
                  </h3>
                  <p className="text-gray-600 text-center">{connect.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-20 ${isOpenDental ? "bg-slate-50" : " bg-white"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to know about our {integration} to
              gohighlevel-integration.
            </p>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>
      {/* Pricing & CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              {isOpenDental
                ? "Get started with Open Dental + GoHighLevel integration today. Includes setup, ongoing support, and regular updates."
                : "Start with Dentrix + GoHighLevel integration today. Includes HIPAA Compliant, multi-practice support, and ROI tracking."}
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">
                  {isOpenDental ? "$79" : "$150"}
                  <span className="text-lg text-slate-300">/month</span>
                </div>
                <div className="text-slate-300">
                  {isOpenDental ? "Basic" : "Basic"}
                </div>
              </div>
              <div className="text-white">
                <span className="mx-4">+</span>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">
                  <div className="text-slate-300">
                    {isOpenDental ? "$109" : "$200"}
                    <span className="text-lg text-slate-300">/month</span>
                  </div>
                </div>
                <div className="text-slate-300">
                  {isOpenDental ? "Standard" : "Gold"}
                </div>
              </div>
              {isOpenDental && (
                <div className="text-white">
                  <span className="mx-4">+</span>
                </div>
              )}
              {isOpenDental && (
                <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                  <div className="text-3xl font-bold text-white mb-2">
                    <div className="text-slate-300">
                      {isOpenDental ? "$129" : "$200"}
                      <span className="text-lg text-slate-300">/month</span>
                    </div>
                  </div>
                  <div className="text-slate-300">
                    {isOpenDental ? "Gold" : "Gold"}
                  </div>
                </div>
              )}
            </div> */}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              className="bg-primary text-white px-8 py-4 text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl"
              data-testid="button-start-trial-cta"
            >
              <a href={url} target="_blank" rel="noopener noreferrer">
                Buy {integration} → GHL
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent text-white px-8 py-4 text-lg border-2 border-white hover:bg-white hover:text-slate-900 transition-all"
              data-testid="button-schedule-demo"
            >
              <Calendar className="mr-2 h-5 w-5" />{" "}
              <a
                href="/schedule-a-call"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Schedule Demo{" "}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-slate-300 text-sm">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-[#00C18C] mr-2" />
              No Setup Fees
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-[#00C18C] mr-2" />
              Dedicated Technical Support
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-[#00C18C] mr-2" />
              HIPAA Compliant
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
