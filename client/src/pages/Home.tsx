import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedDataFlow from "@/components/AnimatedDataFlow";
import FAQ from "@/components/FAQ";
import StructuredData from "@/components/StructuredData";
import SEO from "@/components/SEO";
import SchemaMarkup, { getFAQSchema, getBreadcrumbSchema } from "@/components/SchemaMarkup";
import { getMetaTags } from "@/lib/seoMeta";
import {
  Zap,
  Megaphone,
  Building2,
  Clock,
  AlertTriangle,
  TrendingDown,
  FolderSync,
  CalendarCheck,
  Bot,
  Database,
  BarChart3,
  Shield,
  Settings,
  Eye,
  CheckCircle,
  Star,
} from "lucide-react";

const faqItems = [
  {
    question: "How long does setup take?",
    answer:
      "Setup typically takes about 45 minutes with our team. We handle the technical configuration, field mapping, and testing to ensure everything works perfectly before going live.",
  },
  {
    question: "Is patient data secure and HIPAA conscious?",
    answer:
      "We are HIPAA conscious. We only sync essential business data (no medical records), use encrypted connections, and automatically delete data from our connector once it's successfully transferred. No treatment or medical data is ever accessed or stored.",
  },
  {
    question: "What data gets synced?",
    answer:
      "We sync patients (contact info, demographics), providers, appointments (scheduled, completed, cancelled), and payment information. You choose which data points to sync during setup. Medical notes and treatment details are never accessed.",
  },
  {
    question: "How often does data sync?",
    answer:
      "Data syncs in real-time using webhooks. When a change occurs in either PMS or GoHighLevel, it's automatically detected and synced within minutes. No batch processing or manual uploads required.",
  },
  {
    question: "What happens if there's a sync conflict?",
    answer:
      "The connector compares timestamps and syncs the most recent version. If both systems are updated at exactly the same time, PMS is treated as the source of truth. Failed syncs are automatically retried multiple times.",
  },
];

const testimonials = [
  {
    name: "Sarah L.",
    company: "BluePeak Dental Marketing",
    rating: 5,
    text: "The connector made our campaigns 10x more effective. We finally have accurate patient data without manual updates.",
  },
  {
    name: "Jason K.",
    company: "Smile Growth Partners",
    rating: 5,
    text: "Our reactivation campaigns now hit at the perfect time. ROI is clear and client retention is higher.",
  },
  {
    name: "Rachel S.",
    company: "ToothTrack Marketing",
    rating: 5,
    text: "We can finally show our clients exactly how many new patients and how much revenue came from our work.",
  },
];

const metaTags = getMetaTags('home');

export default function Home() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://smartsync.one/' },
  ]);

  const faqSchema = getFAQSchema(faqItems);

  return (
    <>
      <SEO {...metaTags} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient pb-20 pt-4  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
                <Zap size={16} className="mr-2" />
                <span data-testid="text-trusted-badge">
                  Trusted by 50+ Marketing Agencies
                </span>
              </div>
              <h1
                className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6"
                data-testid="text-hero-headline"
              >
                Seamless Patient Data Sync for{" "}
                <span className="text-primary">Dental Marketing Agencies</span>
              </h1>
              <p
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Stop wasting time on manual data entry. Automatically sync
                patients, providers, appointments, and payments between
                Dentrix/Open Dental and GoHighLevel so you can focus on growing
                your clients' practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary-dark text-lg px-8 py-4"
                  data-testid="button-buy-dentrix"
                >
                  <a
                    href="https://marketplace.gohighlevel.com/integration/6836bcb8eb1ce7acf9241b8b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Dentrix → GHL
                  </a>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4"
                  data-testid="button-buy-open-dental"
                >
                  <a
                    href="https://marketplace.gohighlevel.com/integration/67972665fc19f6448bf732af"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy Open Dental → GHL
                  </a>
                </Button>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Clock size={16} className="mr-2" />
                <span data-testid="text-setup-features">
                  45-minute setup • Real-time sync • HIPAA-conscious
                </span>
              </div>
            </div>
            <div className="relative">
             {/* <img
                  src="/img/Smart-Sync-One.gif"
                  alt="Dentrix and Open Dental to GoHighLevel patient data sync workflow" 
                /> */}

                <video
            autoPlay
            loop
            muted
            playsInline
            className=" h-auto"
            style={{ visibility: "visible" }}
          >
            <source
              src="/img/Smart-Sync-One.webm"
              type="video/webm"
            />
          </video>
            </div>
          </div>
        </div>
      </section>
      {/* Who This Is For */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-built-for-title"
            >
              Built for Modern Dental Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a marketing agency serving dental clients or a
              dental practice looking to streamline operations, our connector
              bridges the gap between your PMS and CRM.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* For Marketing Agencies */}
            <Card className="bg-primary-light border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12  rounded-lg flex items-center justify-center mr-4">
                     <img
                  src="/img/For-Marketing-Agencies.svg"
                  alt="For Marketing Agencies"
                  className="w-9 h-9" // adjust size as needed
                />
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-900"
                    data-testid="text-agencies-title"
                  >
                    For Marketing Agencies
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-success mt-1 mr-3" size={16} />
                    <span className="text-gray-700 w-fit">
                      Run smarter, data-driven campaigns with real-time patient
                      info
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-success mt-1 mr-3" size={16} />
                    <span className="text-gray-700 w-fit">
                      No more CSV imports or outdated contact lists
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-success mt-1 mr-3" size={16} />
                    <span className="text-gray-700 w-fit">
                      Automate reminders, confirmations, and offers with
                      accurate data
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-success mt-1 mr-3" size={16} />
                    <span className="text-gray-700 w-fit">
                      Provide new patients, reactivations, appointments booked,
                      and revenue generated to dental practices
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* For Dental Clinics */}
            <Card className="bg-gray-50 border-0">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12  rounded-lg flex items-center justify-center mr-4">
                     <img
                  src="/img/For-Dental-Clinics.png"
                  alt="For Dental Clinics"
                  className="w-9 h-9" // adjust size as needed
                />
                  </div>
                  <h3
                    className="text-2xl font-bold text-gray-900"
                    data-testid="text-clinics-title"
                  >
                    For Dental Clinics
                  </h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="text-success mt-1 mr-3" size={16} />
                    <span className="text-gray-700 w-fit">
                      Reduce admin work and eliminate double entry
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-success mt-1 mr-3 " size={16} />
                    <span className="text-gray-700 w-fit">
                      Keep schedules, patients, and payments in sync
                      automatically
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-success mt-1 mr-3" size={16} />
                    <span className="text-gray-700 w-fit">
                      Improve patient experience with real-time appointment
                      availability
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Problem Statement */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              The Problem: Disconnected Systems Are Killing Your ROI
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-red-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                   <img
                  src="/img/Manual Data Entry.svg"
                  alt="Manual Data Entry"
                  className="w-9 h-9" // adjust size as needed
                />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Manual Data Entry
                </h3>
                <p className="text-gray-600">
                  Hours wasted every week manually updating patient information
                  between systems, leading to outdated campaigns and missed
                  opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                   <img
                  src="/img/Inaccurate-Campaigns.svg"
                  alt="Inaccurate Campaigns"
                  className="w-9 h-9" // adjust size as needed
                />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Inaccurate Campaigns
                </h3>
                <p className="text-gray-600">
                  Marketing campaigns based on stale data result in poor
                  targeting, low conversion rates, and frustrated dental
                  clients.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-100">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <img
                  src="/img/No-ROI-Visibility.svg"
                  alt="No ROI Visibility"
                  className="w-9 h-9" // adjust size as needed
                />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  No ROI Visibility
                </h3>
                <p className="text-gray-600">
                  Unable to prove marketing effectiveness to dental clients
                  because the data lives in separate, disconnected systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* Solution Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-solution-title"
            >
              The Solution: Real-Time, Automated Data Sync
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect your dental clients' practice management systems directly
              to GoHighLevel for seamless, automated data synchronization.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                    <img
                  src="/img/Two-Way-Data-Sync.svg"
                  alt="Two-Way Data FolderSync"
                  className="w-9 h-9" // adjust size as needed
                />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Two-Way Data Sync
                    </h3>
                    <p className="text-gray-600">
                      Automatically sync patients, providers, appointments, and
                      payments between Dentrix and GoHighLevel in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12  rounded-lg flex items-center justify-center mr-4 mt-1">
                    <img
                  src="/img/Live-Appointment-Availability.png"
                  alt="Live Appointment Availability"
                  className="w-9 h-9" // adjust size as needed
                />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Live Appointment Availability
                    </h3>
                    <p className="text-gray-600">
                      Display real-time appointment slots on landing pages to
                      attract more patients and reduce booking friction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12  rounded-lg flex items-center justify-center mr-4 mt-1">
                    <img
                  src="/img/Smart-Campaign-Triggers.svg"
                  alt="Smart Campaign Triggers"
                  className="w-9 h-9" // adjust size as needed
                />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Smart Campaign Triggers
                    </h3>
                    <p className="text-gray-600">
                      Launch automated campaigns based on real practice activity
                      - new appointments, completed treatments, or payment
                      status.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-light to-blue-50 rounded-2xl p-8">
              {/* Process Flow Diagram */}
              <div className="space-y-6">
                <div className="flex items-center" data-testid="step-1">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    1
                  </div>
                  <div className="flex-1">
                    <Card>
                      <CardContent className="p-3">
                        <span className="text-gray-900 font-medium">
                          Patient books appointment in Dentrix
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-px h-6 bg-primary"></div>
                </div>

                <div className="flex items-center" data-testid="step-2">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    2
                  </div>
                  <div className="flex-1">
                    <Card>
                      <CardContent className="p-3">
                        <span className="text-gray-900 font-medium">
                          Connector instantly syncs to GoHighLevel
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="w-px h-6 bg-primary"></div>
                </div>

                <div className="flex items-center" data-testid="step-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    3
                  </div>
                  <div className="flex-1">
                    <Card>
                      <CardContent className="p-3">
                        <span className="text-gray-900 font-medium">
                          Automated campaigns trigger immediately
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-features-title"
            >
              Features That Drive Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to sync dental practice data and run effective
              marketing campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mb-0">
                   <img
                  src="/img/Sync-What-Matters-Most.svg"
                  alt="FolderSync What Matters Most"
                  className="w-9 h-9" // adjust size as needed
                />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Sync What Matters Most
                </h3>
                <p className="text-gray-600">
                  Connect and automatically sync patient data, providers,
                  appointments, and payment history directly into GoHighLevel.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-0">
                  {/* <img
                  src="/Prove-ROI-with-Confidence.svg"
                  alt="Prove ROI with Confidence"
                  className="w-9 h-9" // adjust size as needed
                /> */}
                 <img
                  src="/img/Prove-ROI-with-Confidence1.svg"
                  alt="Prove ROI with Confidence"
                  className="w-9 h-9" // adjust size as needed
                />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Prove ROI with Confidence
                </h3>
                <p className="text-gray-600">
                  Show dental clients exactly what they're getting: new
                  patients, reactivations, total revenue, pending balances.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mb-0">
                   <img
                  src="/img/HIPAA-Conscious-Design.svg"
                  alt="HIPAA-Conscious Design"
                  className="w-9 h-9" // adjust size as needed
                />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  HIPAA-Conscious Design
                </h3>
                <p className="text-gray-600">
                  Only essential business data is synced and auto-deleted after
                  secure delivery. No medical data is ever accessed.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mb-0">
                   <img
                  src="/img/Set-It-and-Forget-It .svg"
                  alt="Set It and Forget It"
                  className="w-9 h-9" // adjust size as needed
                />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Set It and Forget It
                </h3>
                <p className="text-gray-600">
                  One-time setup (~45 minutes) with our team — we handle
                  everything from there. No ongoing maintenance required.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mb-0">
                   <img
                  src="/img/Real-Time-Updates.png"
                  alt="Real-Time Updates"
                  className="w-9 h-9" // adjust size as needed
                />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Real-Time Updates
                </h3>
                <p className="text-gray-600">
                  Data syncs instantly when changes occur in either system. No
                  delays, no batch processing, no manual uploads.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16  rounded-lg flex items-center justify-center mb-0">
                   <img
                  src="/img/Analytics-Dashboard.png"
                  alt="Analytics Dashboard"
                  className="w-9 h-9" // adjust size as needed
                />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Analytics Dashboard
                </h3>
                <p className="text-gray-600">
                  Monitor sync activity, view pending updates, and track data
                  flow between your systems with detailed reporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-how-it-works-title"
            >
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get up and running in minutes with our simple, guided setup
              process.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="how-it-works-step-1">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Install the App
              </h3>
              <p className="text-gray-600">
                Download from the marketplace and install on your CRM account
              </p>
            </div>

            <div className="text-center" data-testid="how-it-works-step-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Choose Sync Direction
              </h3>
              <p className="text-gray-600">
                Select one-way from PMS to CRM, or two-way sync between both
                systems.
              </p>
            </div>

            <div className="text-center" data-testid="how-it-works-step-3">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Map Data Fields
              </h3>
              <p className="text-gray-600">
                One-time field mapping between PMS and CRM during
                setup.
              </p>
            </div>

            <div className="text-center" data-testid="how-it-works-step-4">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Start Syncing
              </h3>
              <p className="text-gray-600">
                Real-time data sync begins automatically. Monitor progress in
                your dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-testimonials-title"
            >
              Why Agencies Love It
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from marketing agencies using our connector to grow
              their dental clients' practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <p
                    className="text-gray-700 mb-6"
                    data-testid={`testimonial-text-${index}`}
                  >
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <div
                      className="font-semibold text-gray-900"
                      data-testid={`testimonial-name-${index}`}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      className="text-gray-600"
                      data-testid={`testimonial-company-${index}`}
                    >
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-faq-title"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our dental PMS connector.
            </p>
          </div>

          <FAQ items={faqItems} />
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-6"
            data-testid="text-final-cta-title"
          >
            Get Your Dental Client Data Flowing Into GoHighLevel — Automatically
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 50+ marketing agencies already using our connector to grow
            their dental clients' practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary-dark hover:text-white text-lg px-8 py-4"
              data-testid="button-final-buy-dentrix"
            >
              <a
                href="https://marketplace.gohighlevel.com/integration/6836bcb8eb1ce7acf9241b8b"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Dentrix → GHL
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary-dark hover:text-white text-lg px-8 py-4"
              data-testid="button-final-buy-open-dental"
            >
              <a
                href="https://marketplace.gohighlevel.com/integration/67972665fc19f6448bf732af"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Open Dental → GHL
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary-dark hover:text-white text-lg px-8 py-4"
              data-testid="button-final-book-demo"
            >
              <a
                href="https://calendly.com/smart-sync/meeting"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Demo
              </a>
            </Button>
          </div>

          <div className="text-blue-100 text-sm">
            <Shield size={16} className="inline mr-2" />
            <span data-testid="text-final-guarantees">
              HIPAA-conscious • 45-minute setup • Real-time sync
            </span>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
