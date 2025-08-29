import { Link, useLocation } from "wouter";
import {
  ChevronDown, Shield, Play, ArrowRight, Calendar, Check,
  FolderSync, Bell, CreditCard, Star, BellRing, Building,
  ChartLine, MessageCircle, CalendarDays, Twitter,
  Linkedin, Facebook, Grid3x3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { CustomDialogContent } from "./custom_dialogue";

interface IntegrationLayoutProps {
  type: "open-dental" | "dentrix";
  children?: React.ReactNode;
}

interface FeatureCard {
  icon: React.ComponentType<{ className?: string }>;
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
  const videourl = isOpenDental ? "https://www.youtube.com/embed/_-xAOF0jltc?si=Fe8JnR0q4lkOvBBd" : "https://www.youtube.com/embed/cGNcWERYxyk?si=ZANLyrP1GHJhxalO"
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
    title: "Open Dental GoHighLevel Integration | AgencyFlow",
    description: "Seamlessly integrate Open Dental with GoHighLevel CRM. Automate patient communication, reduce no-shows, and boost your dental practice revenue with our HIPAA-conscious solution.",
    keywords: "Open Dental integration, GoHighLevel CRM, dental practice management, patient communication automation, HIPAA conscious, dental marketing",
    url: "https://agencyflow.com/open-dental-integration",
    pricing: "$149/month per Open Dental Instance"
  } : {
    title: "Dentrix GoHighLevel Integration | AgencyFlow",
    description: "Connect Dentrix with GoHighLevel CRM for automated patient engagement, marketing campaigns, and practice growth. HIPAA-conscious with 99% uptime.",
    keywords: "Dentrix integration, GoHighLevel CRM, dental practice CRM, patient engagement, multi-practice management, ROI tracking",
    url: "https://agencyflow.com/dentrix-integration",
    pricing: "Starting at $75/month per practice"
  };

  // Features based on integration type
  const features: FeatureCard[] = isOpenDental ? [
    {
      icon: FolderSync,
      title: "Real-Time Data Sync",
      description: "Automatically synchronize patient data, appointments, and treatment plans between Open Dental and GoHighLevel in real-time.",
      bgColor: "bg-blue-50",
      iconColor: "text-primary"
    },
    {
      icon: Bell,
      title: "Smart Appointment Reminders",
      description: "Reduce no-shows by 40% with automated SMS and email reminders, confirmations, and pre-appointment instructions.",
      bgColor: "bg-green-50",
      iconColor: "text-[#00C18C]"
    },
    {
      icon: CreditCard,
      title: "Payment Automation",
      description: "Automate payment reminders, process invoices, and streamline billing workflows with integrated payment processing.",
      bgColor: "bg-red-50",
      iconColor: "text-[#FF3B47]"
    },
    {
      icon: Shield,
      title: "HIPAA conscious",
      description: "Fully secure and HIPAA conscious platform ensuring patient data protection with encrypted transmission and storage.",
      bgColor: "bg-blue-50",
      iconColor: "text-primary"
    },
    {
      icon: BellRing,
      title: "Marketing Campaigns",
      description: "Launch targeted email, SMS, and social media campaigns for patient reactivation, birthday wishes, and seasonal promotions.",
      bgColor: "bg-green-50",
      iconColor: "text-[#00C18C]"
    },
    {
      icon: Star,
      title: "Automated Reviews",
      description: "Boost your online reputation with automated review requests sent at optimal times right after successful appointments.",
      bgColor: "bg-red-50",
      iconColor: "text-[#FF3B47]"
    }
  ] : [
    {
      icon: FolderSync,
      title: "Lightning-Fast Data Sync",
      description: "Real-time synchronization of patient data, appointments, and payment records with 30-45 minute full database syncs and 99% uptime.",
      bgColor: "bg-blue-50",
      iconColor: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "2-Way Communication",
      description: "Enable text, email, and web chat capabilities with patients directly from your unified dashboard with automated responses.",
      bgColor: "bg-green-50",
      iconColor: "text-[#00C18C]"
    },
    {
      icon: ChartLine,
      title: "Revenue Attribution",
      description: "Track which marketing campaigns generate actual appointments and revenue with detailed ROI dashboards and reporting.",
      bgColor: "bg-red-50",
      iconColor: "text-[#FF3B47]"
    },
    {
      icon: Building,
      title: "Multi-Practice Management",
      description: "Monitor and manage multiple dental offices from a single workspace with provider and location-specific workflows.",
      bgColor: "bg-blue-50",
      iconColor: "text-primary"
    },
    {
      icon: CalendarDays,
      title: "Insurance & Holiday Campaigns",
      description: "Automated year-end insurance reminders, birthday campaigns, and seasonal marketing to maximize patient engagement.",
      bgColor: "bg-green-50",
      iconColor: "text-[#00C18C]"
    },
    {
      icon: Shield,
      title: "HIPAA-Ready Platform",
      description: "Fully HIPAA-conscious integration with signed Business Associate Agreement (BAA) and encrypted data transmission.",
      bgColor: "bg-red-50",
      iconColor: "text-[#FF3B47]"
    }
  ];

  // Update document head for SEO
  useEffect(() => {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": `${integration} GoHighLevel Integration`,
          "applicationCategory": "HealthApplication",
          "operatingSystem": "Web",
          "description": seoData.description,
          "provider": {
            "@type": "Organization",
            "name": "AgencyFlow"
          },
          "offers": {
            "@type": "Offer",
            "price": isOpenDental ? "149" : "75",
            "priceCurrency": "USD",
            "priceValidUntil": "2024-12-31"
          }
        })
      }} />

      {/* Navigation */}
      {/* <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="font-bold text-2xl text-primary">
                AgencyFlow
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
              <span className="text-sm font-medium text-slate-600">HIPAA conscious & Secure Integration</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              <span className="text-primary">{integration}</span> + <span className="text-[#00C18C]">GoHighLevel</span><br />
              <span className="text-slate-700">
                {isOpenDental ? "Perfect Integration" : "Seamless Connection"}
              </span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              {isOpenDental
                ? "Seamlessly connect Open Dental with GoHighLevel CRM to automate patient communication, reduce no-shows by 40%, and boost your practice revenue with intelligent workflow automation."
                : "Connect Dentrix with GoHighLevel CRM for comprehensive patient management, automated marketing campaigns, and revenue growth tracking with 99% uptime reliability."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-primary text-white hover:bg-primary-dark text-lg px-8 py-4"
                data-testid="button-start-trial"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
              <Dialog open={open} onOpenChange={setOpen} >
                <CustomDialogContent >
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
              See The Integration In Action
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Watch how our seamless integration transforms dental practice management and patient communication workflows.
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
                      See how {integration} + GoHighLevel work together seamlessly
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Powerful Integration Features
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your dental practice with comprehensive automation and patient engagement tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                <div className={`${feature.bgColor} rounded-lg w-16 h-16 flex items-center justify-center mb-6`}>
                  <feature.icon className={`${feature.iconColor} h-8 w-8`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Easy Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Get Started in 4 Easy Steps
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Set up your integration quickly with our streamlined process and be operational within days.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line for Desktop */}
            <div className="hidden lg:block absolute top-16 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-agencyflow-primary via-agencyflow-secondary to-agencyflow-accent"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="relative text-center group">
                <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow relative z-10">
                  1
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Connect Your Systems</h3>
                <p className="text-slate-600 leading-relaxed">
                  Securely connect your {integration} software with GoHighLevel using our HIPAA-conscious API integration.
                </p>
              </div>

              <div className="relative text-center group">
                <div className="bg-[#00C18C] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow relative z-10">
                  2
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Configure Workflows</h3>
                <p className="text-slate-600 leading-relaxed">
                  Set up automated workflows for appointment reminders, follow-ups, and patient communication preferences.
                </p>
              </div>

              <div className="relative text-center group">
                <div className="bg-[#FF3B47] text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow relative z-10">
                  3
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">FolderSync Patient Data</h3>
                <p className="text-slate-600 leading-relaxed">
                  Import your complete patient database without manual entry, ensuring all historical data is preserved.
                </p>
              </div>

              <div className="relative text-center group">
                <div className="bg-slate-800 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow relative z-10">
                  4
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Go Live & Monitor</h3>
                <p className="text-slate-600 leading-relaxed">
                  Launch your integrated system and monitor performance with detailed analytics and ROI tracking dashboards.
                </p>
              </div>
            </div>
          </div>
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
                ? "Get started with Open Dental + GoHighLevel integration for just $149/month. Includes setup, ongoing support, and regular updates."
                : "Start with Dentrix + GoHighLevel integration from $75/month per practice. Includes HIPAA compliance, multi-practice support, and ROI tracking."
              }
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">
                  {isOpenDental ? "$149" : "$75"}
                  <span className="text-lg text-slate-300">/month</span>
                </div>
                <div className="text-slate-300">
                  {isOpenDental ? "Per Open Dental Instance" : "Per Practice"}
                </div>
              </div>
              <div className="text-white">
                <span className="mx-4">+</span>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20">
                <div className="text-3xl font-bold text-white mb-2">
                  $97<span className="text-lg text-slate-300">+/month</span>
                </div>
                <div className="text-slate-300">GoHighLevel Platform</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              className="bg-primary text-white px-8 py-4 text-lg hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl"
              data-testid="button-start-trial-cta"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy {integration} → GHL
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent text-white px-8 py-4 text-lg border-2 border-white hover:bg-white hover:text-slate-900 transition-all"
              data-testid="button-schedule-demo"
            >
              <Calendar className="mr-2 h-5 w-5" />  <a
                href="https://calendly.com/smart-sync/meeting"
                target="_blank"
                rel="noopener noreferrer"
              > Schedule Demo </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-slate-300 text-sm">
            <div className="flex items-center">
              <Check className="h-5 w-5 text-[#00C18C] mr-2" />
              14-Day Free Trial
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-[#00C18C] mr-2" />
              No Setup Fees
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-[#00C18C] mr-2" />
              24/7 Support
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 text-[#00C18C] mr-2" />
              HIPAA conscious
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-2xl text-primary mb-4">AgencyFlow</div>
              <p className="text-slate-300 mb-4">
                Connecting dental practices with powerful automation tools for growth and efficiency.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-slate-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Integrations</h4>
              <ul className="space-y-2 text-slate-300">
                <li><Link href="/open-dental-integration" className="hover:text-white transition-colors">Open Dental</Link></li>
                <li><Link href="/dentrix-integration" className="hover:text-white transition-colors">Dentrix</Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Eaglesoft</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GoHighLevel</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 AgencyFlow. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
