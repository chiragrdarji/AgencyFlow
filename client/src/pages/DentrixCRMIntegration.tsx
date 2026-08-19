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
  Brain,
  Calendar,
  CalendarCheck,
  CheckCircle,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock,
  Cloud,
  CreditCard,
  Database,
  DollarSign,
  FileText,
  Gauge,
  HeartPulse,
  Icon,
  IndianRupee,
  Lightbulb,
  Link,
  MapPin,
  Network,
  Phone,
  Plug,
  RefreshCcw,
  RefreshCw,
  RotateCcw,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
  Wallet,
  Wand2,
  Workflow,
  Zap,
} from "lucide-react";
import FAQ from "@/components/FAQ";

const metrics = [
  { icon: Users, label: "New Patients" },
  { icon: Calendar, label: "Appointment Activity" },
  { icon: FileText, label: "Treatment Proposed" },
  { icon: CheckCircle2, label: "Treatment Completed" },
  { icon: DollarSign, label: "Payments Received" },
  { icon: AlertCircle, label: "Outstanding Balances" },
  { icon: RefreshCcw, label: "Patient Lifecycle Information" },
];
const pmsSystems = [
  "Dentrix",
  "Dentrix Ascend",
  "Open Dental",
  "Eaglesoft",
  "Curve Dental",
  "Denticon",
  "eClinicalWorks",
  "Dolphin",
  "OrthoTrac",
  "PracticeWorks",
];
const steps = [
  "Missed appointment recovery",
  "Treatment follow-up campaigns",
  "Patient reactivation workflows",
];
const steps2 = [
  "Dentrix connection",
  "CRM integration",
  "Custom field configuration",
  "Opportunity module setup",
  "Data validation",
];

const trackItems = [
  { icon: Wallet, title: "First payment from patients" },
  { icon: IndianRupee, title: "Lifetime patient revenue" },
  { icon: TrendingUp, title: "Revenue generated during agency engagement" },
];
const crmPlatforms = ["GoHighLevel", "HubSpot", "Salesforce"];

const faqItems = [
  {
    question: "What is Dentrix CRM integration?",
    answer:
      "Dentrix CRM integration connects Dentrix with platforms like GoHighLevel, HubSpot, and Salesforce to automatically sync patient data, appointments, treatments, and payments in real time.",
  },
  {
    question: "How does Dentrix data sync improve marketing performance?",
    answer:
      "Dentrix data sync improves marketing performance by providing real clinic data inside your CRM, allowing agencies to track actual patient revenue, automate campaigns, and measure true ROI.",
  },
  {
    question: "Can I integrate Dentrix with GoHighLevel, HubSpot, and Salesforce?",
    answer:
      "Yes, SmartSync.One enables seamless Dentrix integration with GoHighLevel, HubSpot, and Salesforce, allowing real-time data synchronization across all platforms for reporting and automation.",
  },
  {
    question: "What data is included in Dentrix marketing automation integration?",
    answer:
      " Dentrix marketing automation integration includes syncing patient records, appointment activity, treatment status, payments, balances, and lifecycle data to power accurate workflows and reporting.",
  },
  {
    question:
      "Why is Dentrix CRM integration important for dental agencies?",
    answer:
      "Dentrix CRM integration is important because it eliminates manual reporting and provides real-time visibility into treatments and payments, helping agencies prove ROI and improve client retention.",
  },
];
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Dentrix CRM Integration Software",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://smartsync.one/dentrix-crm-integration",
  description:
    "Integrate Dentrix with GoHighLevel, HubSpot, and Salesforce using SmartSync.One. Sync patients, appointments, treatments, and payments automatically with real-time two-way synchronization.",

  publisher: {
    "@type": "Organization",
    name: "SmartSync.One",
    url: "https://smartsync.one",
  },
  featureList: [
    "Real-time Dentrix to CRM two-way synchronization",
    "Sync patient records, appointments, treatments, and payments automatically",
    "Track patient lifecycle data including first and last visit dates",
    "Monitor treatment proposed, pending procedures, and completed treatments",
    "Track payments received, outstanding balances, and lifetime patient value",
    "Trigger CRM automation workflows based on Dentrix activity",
    "Integration with GoHighLevel, HubSpot, and Salesforce",
    "Revenue attribution tracking after agency onboarding",
    "Analytics dashboards powered by real Dentrix data",
    "Centralized reporting for multi-location dental practices"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "50",
  },
};
export default function DentrixCRMIntegration() {
  const metaTags = getMetaTags("dentrixCRMintegration");
  const faqSchema = getFAQSchema(faqItems);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://smartsync.one/" },
    {
      name: "Dentrix CRM Integration",
      url: "https://smartsync.one/dentrix-crm-integration",
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
                <span className="text-primary">Dentrix CRM Integration </span>{" "}
                Designed For Dental Marketing Agencies And Growing Practices
              </h1>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Integrate Dentrix directly with your CRM and marketing solutions through SmartSync.One’s real-time,   two-way synchronization platform.
              </p>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Sync patient activity, appointments, treatments, and payments automatically to stop manually reporting and gain real revenue visibility.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-white hover:bg-primary-dark text-lg px-8 py-4"
                  data-testid="button-buy-dentrix"
                >
                  <a
                    href="https://api.leadconnectorhq.com/widget/booking/Ff8QEqSOqwBCb7JckznJ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Demo
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative mx-auto">
              <img
                src="/img/dentrix-crm-integration.webp"
                alt="dental-marketing-campaign"
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
              What SmartSync.One Syncs From Dentrix
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {metrics.map(({ icon: Icon, label }, i) => (
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
          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            You receive the updates in your CRM automatically in a matter of minutes.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className=" ">
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-4 items-center relative">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
                  <AlertTriangle size={20} className="text-blue-600" />
                  The Problem
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-5">
                  Dentrix Data Stays Locked Inside the Practice
                </h2>

                <p className="text-lg text-gray-600 mb-2">
                  Dentrix handles vital business data for dental offices, but marketing teams and agencies are typically located within CRM platforms.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Without integration:
                </p>

                <ul className="space-y-5 list-disc ps-5">
                  {[
                    {
                      text: "Agencies rely on manual exports",
                    },
                    {
                      text: "Reporting becomes inaccurate",
                    },
                    {
                      text: "Automation workflows lack real clinic data",
                    },
                    {
                      text: "Discussions about ROI are becoming more difficult",
                    },
                  ].map((item, i) => {
                    return (
                      <li key={i} className="text-lg text-gray-700 !mt-2">
                        <span>{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className="text-lg font-semibold text-gray-900 mt-4">
                  With SmartSync.One you can access Dentrix information directly from your CRM environment.
                </p>
              </div>

              <div className="hidden lg:flex items-center justify-center w-20 relative">
                <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
                <div className="absolute right-0 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[24px] border-l-blue-500" />
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-primary rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-10">
                <div className="inline-flex gap-2 items-center px-4 py-1.5 bg-primary text-white text-sm font-semibold rounded-full mb-6">
                  <Lightbulb size={20} className="text-white" />
                  How SmartSync.One Connects Dentrix
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                  Real-Time Two-Way Dentrix Synchronization
                </h2>

                <p className="text-lg text-gray-600 mb-4">
                  SmartSync.One continuously synchronizes operational updates
                  between Dentrix and supported CRM systems.
                </p>

                <p className="text-lg text-gray-600 mb-4">
                  When activity happens inside Dentrix, the CRM updates
                  automatically.
                </p>
                <p className="text-lg font-semibold text-gray-900 mt-4">
                  Typical synchronization occurs within minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Automatically Synced Dentrix Data
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 mb-10">
            <div className="rounded-lg  bg-white border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
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
            <div
              className="rounded-lg  bg-white 
            border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  "
            >
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

            <div className="rounded-lg  bg-white border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
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
            <div className="rounded-lg  bg-white border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <DollarSign size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-xl text-foreground mb-4">
                Financial Performance
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
          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            CRM records always reflect real clinic activity.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <Target size={16} />
              <span className="text-primary">
                Perfect for Dental Marketing Agencies{" "}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
              Finally Prove Marketing ROI for Dentrix Clinics
            </h2>

            <p className="text-lg text-gray-600 ">
              Dental marketing agencies managing Dentrix practices often
              struggle to demonstrate measurable results.
            </p>
            <p className="text-lg text-gray-600 ">
              SmartSync.One automatically tracks payments received after agency
              onboarding.
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-6">
            Inside CRM opportunities agencies can view:
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
            Client reporting becomes clear and data-driven.
          </p>
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
                Schedule a quick demo and see SmartSync.One in action.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="https://api.leadconnectorhq.com/widget/booking/Ff8QEqSOqwBCb7JckznJ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              Let's Start <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap md:flex-nowrap gap-10 items-center">
            <div className="mb-8 w-full md:w-[50%]">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
                <Plug size={18} />
                Dentrix + Gohighlevel Integration
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-problem-title"
              >
                Dentrix GoHighLevel Integration for Automation and Reporting
              </h2>
              <p className="text-lg text-gray-600 my-4">
                SmartSync.One allows agencies using GoHighLevel to bring real
                Dentrix activity into CRM workflows.
              </p>
              <p className="text-lg text-gray-900">Trigger automation when:</p>

              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " /> New
                  patients are created
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Appointments are missed
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Treatments are proposed
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  payments are recorded
                </li>
              </ul>

              <p className="mt-8  mx-auto   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                Automation becomes aligned with real clinic behavior.
              </p>
            </div>
            <div className="bg-white w-full md:w-[50%]  mx-auto max-w-[700px] rounded-2xl p-8   border-primary/10">
              <p className="text-xl font-semibold  mt-4 mb-6 ">
                Examples include:
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
                    <div className="bg-primary-light rounded-xl px-5 py-3 flex-1 ">
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

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
              <Network size={18} />
              <span className="text-blue-600">Dentrix Hubspot Integration</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bring Dentrix Operational Data Into HubSpot Pipelines
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              SmartSync.One synchronizes Dentrix activity directly into HubSpot
              contacts and deal pipelines.
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-4">
            Marketing and sales teams gain visibility into:
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Activity className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Patient acquisition performance
              </h3>
            </div>

            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <HeartPulse className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Treatment progress
              </h3>
            </div>
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Revenue contribution
              </h3>
            </div>
          </div>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            HubSpot reporting becomes significantly more accurate.
          </p>
        </div>
      </section>
      <section className="py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
              <Cloud size={20} className=" text-primary" /> Dentrix SalesForce
              Integration
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Enterprise Dentrix Integration With Salesforce
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Large dental organizations and consultants using Salesforce can
              centralize clinic intelligence using SmartSync.One.
            </p>
            <p className="text-lg text-gray-600 mb-2">
              Track production performance and patient revenue directly inside
              Salesforce dashboards.
            </p>

            <p className="mt-8  mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              Ideal for multi-location practices and DSOs
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Wand2 size={20} className=" text-blue-600" />
              Guided Setup
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Expert Dentrix Integration Setup Included
            </h2>
            <p className="text-lg text-gray-600 ">
              SmartSync.One onboarding specialists assist during implementation.
            </p>
          </div>
          <div className="">
            <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-6">
              Setup includes:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-14">
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
            <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              Most customers begin seeing synchronized updates shortly after
              onboarding.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gap-8 grid md:grid-cols-2 ">
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
                <Zap size={18} />
                Automation Powered by Dentrix Events
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Workflow size={24} className="text-primary mr-2" />
                Create Dentrix activity as CRM automation triggers:
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                SmartSync.One turns clinic procedures into marketing automation signals.
              </p>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                The available triggers are:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">New Patient Created</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Appointment Booked</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Appointment Modified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Missed Appointment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Patient Showed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Treatment Proposed</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Payment Received</span>
                </div>

                <p className="text-gray-600">
                  Workflows in your CRM run on their own
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
                <Brain size={18} />
                Analytics & Revenue Intelligence
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <BarChart3 size={24} className="text-primary mr-2" />
                Dentrix Analytics Without Manual Reporting
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                With SmartSync.One Dentrix business information can be transformed into analytical dashboards.
              </p>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Keep an eye on:
              </p>
              <div className="space-y-4">
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">New Patient Growth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Appointment Trends</span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Treatment Pipeline</span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Revenue Performance</span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Future Payment Forecast.
                  </span>
                </div>

                <p className="text-gray-600">
                  Found within SmartSync.One dashboards and CRM leads.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Sparkles size={20} />
              <span className="font-semibold text-sm">
                Why SmartSync.One For Dentrix
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              More Than a Basic Dentrix Integration
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SmartSync.One enables agencies and practices to transform Dentrix data
              into growth intelligence.
            </p>
          </div>
          <p className="font-bold p-2 text-lg text-center mb-6">
            Customers use SmartSync.One to:
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <FileText className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Automate reporting
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <BarChart3 className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Prove marketing ROI
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <RotateCcw className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Recover treatment revenue
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Zap className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Power CRM automation
              </h3>
            </div>
          </div>
          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Dentrix operational data becomes actionable business insight.
          </p>
        </div>
      </section>
      <section className="py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
              <ShieldCheck size={20} className=" text-primary" />
              TRUST
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Supporting Agencies Managing 120+ Dental Clinics
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              SmartSync.One helps agencies and practices eliminate manual reporting
              while improving operational visibility across multiple locations.
            </p>

            <p className="mt-8  mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              Reliable synchronization ensures CRM systems reflect real clinic
              performance.
            </p>
          </div>
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
            Connect Dentrix With Your CRM Today
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            Unlock real-time patient, treatment, and payment visibility using
            SmartSync.One.
          </p>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Start transforming Dentrix data into measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="border-2 border-primary bg-white text-primary hover:bg-primary-dark hover:text-white text-lg px-8 py-4"
              data-testid="button-contact-support"
              asChild
            >
              <a href="https://api.leadconnectorhq.com/widget/booking/Ff8QEqSOqwBCb7JckznJ">Book a Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
