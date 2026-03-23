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
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Brain,
  Building,
  CalendarCheck,
  CalendarPlus,
  CheckCircle2,
  ChevronRight,
  Clock,
  Clock10,
  Database,
  Eye,
  FileDown,
  FileText,
  GitBranch,
  HeartPulse,
  History,
  IndianRupee,
  LifeBuoy,
  LineChart,
  Network,
  Plug,
  Plug2,
  RefreshCcw,
  Settings,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
  Wand2,
  Workflow,
} from "lucide-react";
import FAQ from "@/components/FAQ";

const metrics = [
  { icon: Users, label: "New Patients" },
  { icon: CalendarPlus, label: "Appointment Updates" },
  { icon: FileText, label: "Treatment Proposed" },
  { icon: Clock10, label: "Pending Procedures" },
  { icon: CheckCircle2, label: "Treatment Completed" },
  { icon: Wallet, label: "Payments Received" },
  { icon: History, label: "Patient Visit History" },
];

const steps = [
  "Appointment recovery automation",
  "Treatment acceptance campaigns",
  "Patient recall workflows",
];

const trackItems = [
  { icon: Wallet, title: "First Patient Payment" },
  { icon: IndianRupee, title: "Lifetime Revenue" },
  { icon: TrendingUp, title: "Agency Influenced Revenue Growth" },
];

const faqItems = [
  {
    question: "What is Eaglesoft CRM integration?",
    answer:
      " Eaglesoft CRM integration connects Eaglesoft with platforms like GoHighLevel, HubSpot, and Salesforce to automatically sync patient data, appointments, treatments, and payments in real time.",
  },
  {
    question:
      "How does Eaglesoft data sync improve marketing and reporting?",
    answer:
      " Eaglesoft data sync improves marketing and reporting by bringing real clinic data into your CRM, enabling accurate analytics, better automation, and clear visibility into treatment and revenue performance.",
  },
  {
    question:
      "Can I integrate Eaglesoft with GoHighLevel, HubSpot, and Salesforce?",
    answer:
      " Yes, SmartSync allows seamless Eaglesoft integration with GoHighLevel, HubSpot, and Salesforce, enabling real-time synchronization for automation, reporting, and revenue tracking.",
  },
  {
    question:
      "What data is included in Eaglesoft marketing integration?",
    answer:
      " Eaglesoft marketing integration includes syncing patient records, appointment activity, treatment pipeline data, payments, and patient lifecycle information to power CRM workflows and reporting.",
  },
  {
    question:
      "Why is Eaglesoft CRM integration important for dental agencies?",
    answer:
      "Eaglesoft CRM integration is important because it provides agencies with real treatment and payment data, helping them automate campaigns, track revenue growth, and prove marketing ROI effectively.",
  },
];
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Eaglesoft CRM Integration Software",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://smartsync.one/eaglesoft-crm-integration",
  description:
    "Integrate Eaglesoft with GoHighLevel, HubSpot, and Salesforce using SmartSync. Automatically sync patients, appointments, treatments, and payments with real-time two-way synchronization.",
  brand: {
    "@type": "Brand",
    name: "Smart Sync",
  },
  publisher: {
    "@type": "Organization",
    name: "Smart Sync",
    url: "https://smartsync.one",
  },
  featureList: [
    "Real-time Eaglesoft to CRM two-way synchronization",
    "Sync patient records, appointments, treatments, and payments automatically",
    "Track patient lifecycle data including visit history and upcoming appointments",
    "Monitor treatment proposed, pending procedures, and completed treatments",
    "Track payments received, outstanding balances, and lifetime patient value",
    "Trigger CRM automation workflows based on Eaglesoft activity",
    "Integration with GoHighLevel, HubSpot, and Salesforce",
    "Treatment pipeline visibility for unscheduled and pending procedures",
    "Analytics dashboards powered by real Eaglesoft data",
    "Centralized reporting for multi-location dental practices"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    ratingCount: 50,
  },
};

export default function EaglesoftCRMIntegration() {
  const metaTags = getMetaTags("eaglesoftCRMintegration");
  const faqSchema = getFAQSchema(faqItems);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://smartsync.one/" },
    {
      name: "Eaglesoft CRM Integration",
      url: "https://smartsync.one/eaglesoft-crm-integration",
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
                <span className="text-primary">Eaglesoft CRM Integration </span>{" "}
                for Dental Agencies and Multi-Location Practices
              </h1>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Connect Eaglesoft directly with your CRM and marketing platforms
                using SmartSync’s real-time two-way synchronization.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Automatically sync patient records, appointments, treatments,
                and payments to eliminate manual reporting and unlock accurate
                revenue insights.
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
                src="/img/eaglesoft-crm-integration.webp"
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
              SmartSync Automatically Syncs
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
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
            CRM systems update automatically within minutes.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
              <AlertTriangle size={18} />
              <span className="text-blue-600">
                The Eaglesoft Integration Challenge
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Eaglesoft Data Often Remains Isolated From Marketing Systems
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              Many successful dental practices rely on Eaglesoft to manage daily
              operations.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              However, agencies and growth teams typically operate inside CRM
              platforms.
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-4">
            Without integration:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <FileDown className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Patient updates must be exported manually
              </h3>
            </div>

            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Reporting takes significant time
              </h3>
            </div>
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Workflow className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Automation workflows lack clinic intelligence
              </h3>
            </div>
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Marketing ROI becomes difficult to prove
              </h3>
            </div>
          </div>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            SmartSync connects Eaglesoft operational activity directly with CRM
            workflows
          </p>
        </div>
      </section>
      <section className="py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <Sparkles size={18} />
              <span className="text-blue-600">
                How SmartSync Connects Eaglesoft
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real-Time Two-Way Eaglesoft Synchronization
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              SmartSync continuously synchronizes clinic activity between
              Eaglesoft and supported CRM platforms.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              When updates occur inside Eaglesoft, CRM records automatically
              reflect those changes.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Typical synchronization occurs within minutes.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="rounded-lg  bg-white border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <RefreshCcw size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-lg text-foreground mb-2">
                Patient Data Synchronization
              </p>
              <p className="text-lg text-foreground mb-2">
                Automatically sync:
              </p>
              <ul className="space-y-2 mb-2">
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Patient Creation
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  First Visit Date
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " /> Last
                  Visit Date
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " /> Upcoming
                  Appointment Information.
                </li>
              </ul>
              <p className="text-md text-gray-900 mb-2">
                Marketing and reporting systems stay accurate without manual
                updates.
              </p>
            </div>
            <div className="rounded-lg  bg-white  border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Activity size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-lg text-foreground mb-2">
                Appointment Activity Tracking
              </p>
              <p className="text-lg text-foreground mb-2">
                SmartSync synchronizes scheduling activity including:
              </p>
              <ul className="space-y-2 mb-2">
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
              <p className="text-md text-gray-900 mb-2">
                Agencies can automate recovery workflows immediately.
              </p>
            </div>
            <div className="rounded-lg  bg-white border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Eye size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-lg text-foreground mb-2">
                Treatment Pipeline Visibility
              </p>
              <p className="text-lg text-foreground mb-2">
                SmartSync provides deep insight into treatment performance for
                Eaglesoft clinics.
              </p>
              <p className="text-lg text-foreground mb-2">
                Track automatically:
              </p>
              <ul className="space-y-2 mb-2">
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
              <p className="text-md text-gray-900 mb-2">
                Identify production opportunities that may otherwise remain
                hidden.
              </p>
            </div>
            <div className="rounded-lg  bg-white border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Database size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-lg text-foreground mb-2">
                Financial Data Integration
              </p>
              <p className="text-lg text-foreground mb-2">
                Monitor real clinic revenue performance including:
              </p>
              <ul className="space-y-2 mb-2">
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Payments Received
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Outstanding Payments
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
              <p className="text-md text-gray-900 mb-2">
                Revenue reporting becomes automated and reliable.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap md:flex-nowrap gap-10 items-center">
            <div className="mb-8 w-full md:w-[50%]">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
                <Plug size={20} />
                Eaglesoft + Gohighlevel Integration
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-problem-title"
              >
                Power GoHighLevel Automation Using Eaglesoft Activity
              </h2>
              <p className="text-lg text-gray-600 mt-4 mb-2">
                SmartSync enables agencies using GoHighLevel to activate
                workflows using real clinic events.
              </p>

              <p className="text-lg text-gray-900">
                Automation triggers include:
              </p>

              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " /> New
                  patient creation
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />
                  Missed appointments
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " /> Treatment
                  proposals
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " /> Payment
                  updates
                </li>
              </ul>

              <p className="mt-8  mx-auto   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                Marketing automation becomes connected to real operations.
              </p>
            </div>
            <div className="bg-primary-light w-full md:w-[50%]  mx-auto max-w-[700px] rounded-2xl p-8   border-primary/10">
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
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <Network size={18} />
              <span className="text-blue-600">
                Eaglesoft Hubspot Integration
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bring Eaglesoft Practice Data Into HubSpot
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              SmartSync synchronizes Eaglesoft activity into HubSpot contacts
              and deal pipelines.
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-4">
            Teams gain visibility into:
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white flex gap-4 items-center rounded-2xl p-4 shadow-sm border hover:shadow-md transition-all ">
              <div className=" w-10 h-10  rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Activity className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Patient acquisition performance
              </h3>
            </div>

            <div className="bg-white flex gap-4 items-center rounded-2xl p-4 shadow-sm border hover:shadow-md transition-all ">
              <div className=" w-10 h-10  rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <HeartPulse className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Treatment progress
              </h3>
            </div>
            <div className="bg-white flex gap-4 items-center rounded-2xl p-4 shadow-sm border hover:shadow-md transition-all ">
              <div className=" w-10 h-10  rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">Production growth</h3>
            </div>
          </div>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            HubSpot dashboards become significantly more meaningful.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
              <Plug2 size={18} />
              <span className="text-blue-600">
                Eaglesoft Salesforce Integration
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Eaglesoft Reporting Using Salesforce
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              Organizations using Salesforce can centralize clinic intelligence
              across multiple Eaglesoft practices.
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-4">
            Monitor:
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">Revenue trends</h3>
            </div>

            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Activity className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Treatment performance
              </h3>
            </div>
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Operational growth
              </h3>
            </div>
          </div>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Ideal for consultants and multi-location organizations.
          </p>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <Building size={20} />
              <span className="text-primary">
                Build for Dental Marketing Agencies
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
              Help Eaglesoft Clinics Understand Real Growth
            </h2>

            <p className="text-lg text-gray-600 ">
              SmartSync allows agencies to move beyond appointment reporting.
            </p>
            <p className="text-lg text-gray-600 ">
              Automatically track payments generated after agency onboarding.
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-6">
            Inside CRM opportunities agencies can view:
          </p>

          <div className="relative w-[90%] mx-auto">
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
            Client conversations shift toward measurable results.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Sparkles size={20} />
              <span className="font-semibold text-sm">
                Analytics and Reporting
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Eaglesoft Analytics Without Manual Exports
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SmartSync converts Eaglesoft operational data into analytics
              dashboards.
            </p>
          </div>
          <p className="font-bold p-2 text-lg text-center mb-6">Track:</p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <TrendingUp className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                New Patient Growth
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <CalendarCheck className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Appointment Performance
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <GitBranch className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Treatment Pipeline
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <BarChart3 className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Revenue Collection Trends
              </h3>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <LineChart className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Future Production Forecast
              </h3>
            </div>
          </div>
          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Available inside SmartSync dashboards and CRM systems.
          </p>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gap-8 grid md:grid-cols-2 ">
            <div className="bg-white   shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
                <Settings size={18} />
                Implementation Support
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Wand2 size={24} className="text-primary mr-2" />
                Guided Eaglesoft Integration Setup Included
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                SmartSync onboarding specialists assist throughout
                implementation.
              </p>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Setup includes:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Eaglesoft connection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">CRM configuration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Custom field creation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Opportunity synchronization
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Data validation</span>
                </div>

                <p className="text-gray-600">
                  Most agencies begin seeing synchronized activity quickly after
                  onboarding.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
                <LifeBuoy size={18} />
                Why SmartSync for Eaglesoft
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Brain size={24} className="text-primary mr-2" />
                Modernize Eaglesoft Reporting and Automation
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                SmartSync transforms Eaglesoft operational data into actionable
                intelligence.
              </p>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Customers use SmartSync to:
              </p>
              <div className="space-y-4">
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Automate reporting</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Improve treatment follow-ups
                  </span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Power CRM automation</span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Prove marketing ROI</span>
                </div>

                <p className="text-gray-600">
                  Operational data becomes growth intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <ShieldCheck size={20} className=" text-primary" />
              TRUST
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Supporting Agencies and Clinics Across 80+ Dental Locations
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              SmartSync helps agencies standardize reporting and automation
              across clinics using Eaglesoft and other PMS systems.
            </p>

            <p className="mt-8  mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              Reliable synchronization ensures accurate insights
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
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
            Connect Eaglesoft With Your CRM Today
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            Eliminate manual reporting and unlock real-time visibility into
            patient activity and revenue performance.
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
