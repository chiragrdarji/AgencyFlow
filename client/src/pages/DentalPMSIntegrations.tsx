import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import SchemaMarkup, {
  getBreadcrumbSchema,
  getFAQSchema,
} from "@/components/SchemaMarkup";
import { getMetaTags } from "@/lib/seoMeta";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bot,
  Briefcase,
  Building2,
  Calendar,
  CalendarCheck,
  CalendarPlus,
  CheckCircle,
  CheckCircle2,
  ChevronRight,
  Clock,
  Cloud,
  Compass,
  CreditCard,
  Database,
  DollarSign,
  EyeOff,
  FileBarChart,
  FileDown,
  FilePlus,
  FileText,
  GitBranch,
  History,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Lightbulb,
  LineChart,
  Link,
  Link2,
  ListTodo,
  MapPin,
  Network,
  Phone,
  Plug,
  Puzzle,
  Route,
  Server,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  TrendingUp,
  UserCheck,
  UserRound,
  Users,
  Wallet,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import FAQ from "@/components/FAQ";

const metrics = [
  { icon: CheckCircle, label: "Open Dental" },
  { icon: CheckCircle, label: "Dentrix" },
  { icon: CheckCircle, label: "Dentrix Ascend" },
  { icon: CheckCircle, label: "Eaglesoft" },
  { icon: CheckCircle, label: "Curve Hero" },
  { icon: CheckCircle, label: "Denticon" },
  { icon: CheckCircle, label: "eClinicalWorks" },
  { icon: CheckCircle, label: "Dolphin" },
  { icon: CheckCircle, label: "OrthoTrac" },
  { icon: CheckCircle, label: "PracticeWorks" },
  { icon: CheckCircle, label: "Athena" },
  { icon: CheckCircle, label: "Cloud9" },
  { icon: CheckCircle, label: "Dentrix Enterprise" },
  { icon: CheckCircle, label: "Modernizing Medicine" },
   { icon: CheckCircle, label: "NextGen Office" },
];
const data = [
  { icon: CheckCircle, label: "Patient Records" },
  { icon: CheckCircle, label: "Appointment Activity" },
  { icon: CheckCircle, label: "Treatment Information" },
  { icon: CheckCircle, label: "Procedures" },
  { icon: CheckCircle, label: "Payments and Balances" },
  { icon: CheckCircle, label: "Patient Lifecycle Dates." },
];
const pmsSystems = [
  "Curve Dental",
  "Denticon",
  "eClinicalWorks",
  "Dolphin",
  "OrthoTrac",
  "PracticeWorks",
];
const steps = [
  "New Patients",
  "Appointment Updates",
  "Treatment Plans",
  "Completed Procedures",
  "Payments Received",
];
const dentrix_step = [
  "Patient communication automation",
  "Reporting dashboards",
  "Revenue attribution tracking",
];
const opendental_step = [
  "Patient creation",
  "Appointment scheduling",
  "Treatment proposed",
  "Treatment completed",
  "Payment activity",
];
const eaglesoft_step = [
  "Patient acquisition",
  "Treatment pipeline",
  "Revenue performance.",
];

const trackItems = [
  { icon: Target, title: "Marketing attribution" },
  { icon: BarChart3, title: "Revenue analytics" },
  { icon: GitBranch, title: "Treatment pipeline tracking" },
  { icon: Zap, title: "CRM automation triggers" },
];
const crmPlatforms = ["GoHighLevel", "HubSpot", "Salesforce"];
const steps2 = [
  "PMS connection",
  "CRM configuration",
  "Custom field setup",
  "Opportunity synchronization",
];
const faqItems = [
  {
    question: "What is dental PMS integration software?",
    answer:
      " Dental PMS integration software connects practice management systems like Dentrix, Open Dental, and Eaglesoft with CRM platforms to automatically sync patient, appointment, treatment, and payment data in real time.",
  },
  {
    question: "How does Dentrix CRM integration help dental agencies?",
    answer:
      "Dentrix CRM integration helps dental agencies by syncing real clinic data such as patients, treatments, and payments directly into CRM systems, enabling accurate reporting, automation, and ROI tracking.",
  },
  {
    question: " Does SmartSync support Open Dental CRM integration?",
    answer:
      "  Yes, SmartSync supports Open Dental CRM integration by synchronizing patient activity, appointments, treatments, and payment data into platforms like GoHighLevel, HubSpot, and Salesforce.",
  },
  {
    question: "What data is synced with dental PMS sync software?",
    answer:
      "Dental PMS sync software like SmartSync synchronizes key data including patient records, appointment activity, treatment plans, completed procedures, payments, balances, and patient lifecycle information.",
  },
  {
    question: "Why is two-way dental PMS integration important?",
    answer:
      "Two-way dental PMS integration is important because it keeps both PMS and CRM systems updated automatically, ensuring accurate data, better marketing automation, and reliable reporting without manual effort.",
  },
];

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Dental PMS Integrations & CRM Synchronization Software",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://smartsync.one/dental-pms-integrations",
  description:
    "Connect Dentrix, Open Dental, Eaglesoft and other dental PMS systems with GoHighLevel, HubSpot, and Salesforce using SmartSync’s real-time two-way synchronization platform.",
  
  publisher: {
    "@type": "Organization",
    name: "Smart Sync",
    url: "https://smartsync.one",
  },
  featureList: [
    "Two-way synchronization between PMS and CRM systems",
    "Sync patient records, appointments, treatments, and payments in real time",
    "Dentrix CRM integration with automated data updates",
    "Open Dental CRM integration with real-time analytics",
    "Eaglesoft integration for treatment and revenue tracking",
    "Support for multiple PMS platforms including Denticon, Curve Dental, and Dolphin",
    "CRM integrations with GoHighLevel, HubSpot, and Salesforce",
    "Automated patient lifecycle and financial data synchronization",
    "Centralized reporting across multiple clinic locations",
    "Real-time updates with no manual data exports",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "50",
  },
};

export default function DentalPMSIntegrations() {
  const metaTags = getMetaTags("dentalPMSintegrations");
  const faqSchema = getFAQSchema(faqItems);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://smartsync.one/" },
    {
      name: "Dental PMS Integrations",
      url: "https://smartsync.one/dental-pms-integrations",
    },
  ]);
  return (
    <>
      <SEO {...metaTags} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={softwareSchema} />
      <section className="hero-gradient pb-20 pt-4  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"></div>
              <h1
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
                data-testid="text-hero-headline"
              >
                Automatically Link You <span className="text-primary">Dental PMS </span>{" "}
                With CRM and Marketing Services
              </h1>
              <p className="text-lg text-gray-600 mb-2 leading-relaxed">
                SmartSync connects the top dental practice management systems to the latest CRM solutions, providing a real-time synchronization of patients, appointments, treatments and payments
              </p>
              <p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Stop manual reporting and ensure your operational and marketing data are in lock step across your systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary-dark text-lg px-8 py-4"
                  data-testid="button-buy-dentrix"
                >
                  <a
                    href="https://calendly.com/smart-sync/meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Demo
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              {/* <div className="p-6 bg-gradient-to-br from-primary-light to-blue-50 rounded-lg">
                <img
                  src="/img/Smart-Sync-One.gif"
                  alt="Dentrix and Open Dental to GoHighLevel patient data sync workflow"
                />
              </div> */}
              <img
                src="/img/connect-dental-pms-integration.webp"
                alt="Dentrix and Open Dental to GoHighLevel patient data sync workflow"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Supported With Two-Way Synchronization
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {metrics.map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-4 shadow-sm border flex items-center gap-3"
              >
                <div className="flex-shrink-0 ">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-md font-medium text-foreground text-left">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Puzzle size={18} className="" /> Why PMS Integration Matters
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Dental Growth Requires Connected Systems
            </h2>
            <p className="text-lg text-gray-600">
              Dental clinics manage operational data inside PMS platforms while
              marketing and communication workflows run inside CRM systems.
            </p>
          </div>
          <p className="text-lg font-semibold text-gray-900 text-center mb-4">
            Without proper integration:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Clock, label: "Patient data becomes outdated" },
              {
                icon: FileDown,
                label: "Reporting requires manual exports",
              },
              {
                icon: AlertTriangle,
                label: "Marketing automation lacks accuracy",
              },
              {
                icon: EyeOff,
                label: "Agencies cannot track real revenue impact",
              },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  "
              >
                <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary mx-auto " />
                </div>
                <p className="font-medium text-foreground">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            SmartSync bridges this gap using automated synchronization.
          </p>
        </div>
      </section>

      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
              <EyeOff size={18} />
              Real Time Two Way Sync
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Ensure PMS and CRM Data is Always Current
            </h2>
            <p className="text-lg text-gray-600">
              SmartSync enables real-time bi-directional sync for a select list of PMS systems with CRM solutions.
            </p>
            <p className="text-lg text-gray-600">
              Updates typically appear within minutes.
            </p>
            <p className="text-xl font-semibold  mt-4 mb-6 ">
              Automatically synchronize:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map(({ icon: Icon, label }, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-4 shadow-sm border flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <span className="text-md font-medium text-foreground text-left">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8  mx-auto   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Both systems remain aligned without manual intervention.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap md:flex-nowrap gap-10 items-center">
            <div className="mb-8 w-full md:w-[50%]">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
                <Link size={18} />
                Dentrix CRM Integration
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-problem-title"
              >
                Dentrix CRM Integration for Agencies and Practices
              </h2>
              <p className="text-lg text-gray-600">
                Dentrix is one of the most widely used dental practice
                management systems.
              </p>
              <p className="text-lg text-gray-600">
                SmartSync connects Dentrix directly with CRM platforms such as
                GoHighLevel, HubSpot, and Salesforce.
              </p>
              <p className="text-lg text-gray-600">
                Marketing teams gain real operational visibility without
                accessing the PMS directly.
              </p>
              <p className="mt-8  mx-auto   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                Perfect for agencies managing multiple Dentrix clinics.
              </p>
            </div>
            <div className="bg-primary-light w-full md:w-[50%]  mx-auto max-w-[700px] rounded-2xl p-8   border-primary/10">
              <p className="text-xl font-semibold  mt-4 mb-6 ">
                Automatically synchronize:
              </p>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 relative pb-6 !mt-0"
                  >
                    {/* Vertical line */}
                    {i !== steps.length - 1 && (
                      <span className="absolute left-5 top-8 w-[2px] h-full bg-primary"></span>
                    )}

                    {/* Number circle */}
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-md font-bold flex-shrink-0 z-10">
                      {i + 1}
                    </div>

                    {/* Text box */}
                    <div className="bg-white rounded-xl px-5 py-3 flex-1 ">
                      <p className="text-md font-medium text-foreground">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex  flex-wrap md:flex-nowrap gap-10 items-center">
            <div className="bg-white w-full md:w-[50%] order-2 md:order-1 mx-auto max-w-[700px] rounded-2xl p-8   border-primary/10">
              <p className="text-xl font-semibold  mt-4 mb-6 ">
                Use synchronized data to power:
              </p>
              <div className="space-y-4">
                {dentrix_step.map((step, i) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 relative pb-6 !mt-0"
                  >
                    {/* Vertical line */}
                    {i !== dentrix_step.length - 1 && (
                      <span className="absolute left-5 top-8 w-[2px] h-full bg-primary"></span>
                    )}

                    {/* Number circle */}
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-md font-bold flex-shrink-0 z-10">
                      {i + 1}
                    </div>

                    {/* Text box */}
                    <div className="bg-primary-light rounded-xl px-5 py-3 flex-1 ">
                      <p className="text-md font-medium text-foreground">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8 w-full md:w-[50%] order-1 md:order-2">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
                <Link2 size={18} />
                Dentrix Ascend Integration
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-problem-title"
              >
                Dentrix Ascend Integration With Marketing and CRM Platforms
              </h2>
              <p className="text-lg text-gray-600 ">
                Cloud-based practices using Dentrix Ascend can synchronize
                operational activity directly into CRM workflows.
              </p>

              <p className="mt-8  mx-auto   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                SmartSync ensures patient and appointment data flows
                automatically between systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" flex flex-wrap md:flex-nowrap gap-10 items-center">
            <div className="mb-8 w-full md:w-[50%]">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
                <Plug size={18} />
                Open Dental CRM Integration
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-problem-title"
              >
                Open Dental CRM Integration With Real-Time Analytics
              </h2>
              <p className="text-lg text-gray-600">
                SmartSync enables powerful Open Dental integrations for agencies
                and growing practices.
              </p>
              <p className="text-lg text-gray-600">
                CRM automation workflows can trigger based on real clinic
                activity.
              </p>

              <p className="mt-8  mx-auto   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                Agencies gain accurate reporting without manual exports.
              </p>
            </div>
            <div className="bg-primary-light w-full md:w-[50%]  mx-auto max-w-[700px] rounded-2xl p-8   border-primary/10">
              <p className="text-xl font-semibold  mt-4 mb-6 ">
                Automatically sync:
              </p>
              <div className="space-y-4">
                {opendental_step.map((step, i) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 relative pb-6 !mt-0"
                  >
                    {/* Vertical line */}
                    {i !== opendental_step.length - 1 && (
                      <span className="absolute left-5 top-8 w-[2px] h-full bg-primary"></span>
                    )}

                    {/* Number circle */}
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-md font-bold flex-shrink-0 z-10">
                      {i + 1}
                    </div>

                    {/* Text box */}
                    <div className="bg-white rounded-xl px-5 py-3 flex-1 ">
                      <p className="text-md font-medium text-foreground">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap md:flex-nowrap gap-10 items-center">
            <div className="bg-white w-full md:w-[50%] order-2 md:order-1  mx-auto max-w-[700px] rounded-2xl p-8   border-primary/10">
              <p className="text-xl font-semibold  mt-4 mb-6 ">Track:</p>
              <div className="space-y-4">
                {eaglesoft_step.map((step, i) => (
                  <div
                    key={step}
                    className="flex items-start gap-4 relative pb-6 !mt-0"
                  >
                    {/* Vertical line */}
                    {i !== eaglesoft_step.length - 1 && (
                      <span className="absolute left-5 top-8 w-[2px] h-full bg-primary"></span>
                    )}

                    {/* Number circle */}
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-md font-bold flex-shrink-0 z-10">
                      {i + 1}
                    </div>

                    {/* Text box */}
                    <div className="bg-primary-light rounded-xl px-5 py-3 flex-1 ">
                      <p className="text-md font-medium text-foreground">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-8 w-full md:w-[50%] order-1 md:order-2">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
                <Settings size={18} />
                Eaglesoft Integration
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-problem-title"
              >
                Eaglesoft PMS Integration for Marketing Intelligence
              </h2>
              <p className="text-lg text-gray-600 ">
                SmartSync connects Eaglesoft data directly with CRM
                opportunities and analytics dashboards.
              </p>

              <p className="mt-8  mx-auto   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                This allows agencies and consultants to monitor clinic growth
                using real operational data.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gradient-to-r from-primary to-blue-500">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left Content */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-1">
                Want to Talk to Us?
              </h3>
              <p className="text-blue-100">
                Schedule a quick demo and see SmartSync in action.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="https://calendly.com/smart-sync/meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              Let's Start <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Layers size={18} /> Additional PMS Supported{" "}
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
             Integration Across Contemporary Dental Software Systems
            </h2>
          </div>
          <div className="card  gap-8  rounded-2xl sm:p-8   border-primary">
            <div className="p-6  bg-primary-light rounded-lg">
              <h3 className="font-bold mb-2 p-2 text-lg text-center">
                SmartSync also integrates with:{" "}
              </h3>
              <div className="grid  sm:grid-cols-3 lg:grid-cols-6 gap-3  mt-[18px] text-center ">
                {pmsSystems.map((system) => (
                  <div
                    className=" p-2 bg-white rounded-xl text-foreground text-md flex items-center gap-[5px]   font-semibold  transition-all"
                    key={system}
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {system}
                  </div>
                ))}
              </div>
              <p className="mt-8  mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                Two-way synchronization guarantees the updates are continuously propagated between systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
              <Network size={18} className=" text-blue-600" /> CRM Integrations
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Compatible with major CRM platforms loved by agencies
            </h2>
            <p className="text-lg text-gray-600">
              SmartSync integrates seamlessly with:
            </p>
          </div>
          <div className="grid sm:grid-col-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: TrendingUp,
                title: "GoHighLevel",
                desc: "Auto-update deals and run workflows using activity from your PMS.",
              },
              {
                icon: Network,
                title: "HubSpot",
                desc: "Push dental business operation data from pipelines straight into sales or marketing.",
              },
              {
                icon: Cloud,
                title: "Salesforce",
                desc: "Enterprise practices and agencies gain advanced reporting capabilities using synchronized patient data.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-card rounded-2xl p-6 border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-light to-blue-50 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-gray-600 text-md">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Database size={18} className="" /> What Data SmartSync Syncs
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Complete Operational Visibility Inside Your CRM
            </h2>
            <p className="text-lg text-gray-600">
              SmartSync synchronizes important clinic activity including:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 mb-10">
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Users size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-xl text-foreground mb-4">
                Patient Intelligence
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " /> New
                  Patient Creation
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " /> First
                  Visit Date
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " /> Last
                  Visit Date
                </li>
              </ul>
            </div>
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Calendar size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-foreground text-xl mb-4">
                Appointment Activity
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Appointment Booked
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Appointment Modified
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Missed Appointment
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Patient Showed
                </li>
              </ul>
            </div>

            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Stethoscope size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-xl text-foreground mb-4">
                Treatment Intelligence
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Treatment Proposed
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Pending Procedures
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Treatment Completed
                </li>
              </ul>
            </div>
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <DollarSign size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-xl text-foreground mb-4">
                Financial Data
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Payments Received
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Payment Due
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Lifetime Patient Value
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Expected Future Payments
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
              <Building2 size={18} className=" text-blue-600" /> Build for
              Agencies Managing Multiple Clinics
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Centralize Data Across Locations
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Dental marketing agencies and DSOs often manage clinics using
              different PMS platforms.
            </p>
            <p className="text-lg text-gray-600 mb-2">
              SmartSync standardizes data across systems and sends it into one
              CRM environment.
            </p>
            <p className="mt-8  mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              Agencies gain consistent reporting regardless of PMS differences.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Compass size={20} className=" text-primary" /> Guided Setup
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Expert Onboarding Included
            </h2>
            <p className="text-lg text-gray-600">
              SmartSync onboarding specialists assist with:
            </p>
          </div>
          <div className="">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
              {steps2.map((step, i) => (
                <div
                  key={step}
                  className="text-center"
                  data-testid={`automation-step-${i + 1}`}
                >
                  {/* Number Circle */}
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white text-2xl font-bold">
                      {i + 1}
                    </span>
                  </div>

                  {/* Step Text */}
                  <p className="text-lg font-bold text-gray-900 ">{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-8  mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              Most integrations become operational quickly after setup
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <Sparkles size={16} />
              <span className="text-primary">Why SmartSync </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
              More Than a Basic Integration
            </h2>

            <p className="text-lg text-gray-600 ">
              SmartSync does more than transfer data.
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-6">
            It enables:
          </p>

          <div className="relative w-[80%] mx-auto">
            <div className="hidden md:block absolute top-10 left-[8%] right-[10%] h-[3px] bg-blue-200"></div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6 relative">
              {trackItems.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-sm z-10">
                    <item.icon size={32} strokeWidth={2} />
                  </div>

                  <h4 className="mt-5 text-lg font-semibold text-gray-900 max-w-[250px]">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Operational data becomes growth intelligence.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          <FAQ items={faqItems} />
        </div>
      </section>
      <div className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Connect Your Dental PMS and CRM Today
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-2">
            Eliminate manual reporting and unlock real-time patient, treatment,
            and revenue insights.
          </p>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
            Join agencies already using SmartSync across 80+ dental clinics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="border-2 border-primary bg-white text-primary hover:bg-primary-dark hover:text-white text-lg px-8 py-4"
              data-testid="button-contact-support"
              asChild
            >
              <a href="https://calendly.com/smart-sync/meeting">Book a Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
