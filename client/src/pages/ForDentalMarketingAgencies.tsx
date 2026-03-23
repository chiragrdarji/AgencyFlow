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
  CreditCard,
  Database,
  DollarSign,
  FileBarChart,
  FileText,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Lightbulb,
  Network,
  Phone,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import FAQ from "@/components/FAQ";

const metrics = [
  { icon: TrendingUp, label: "Prove marketing ROI" },
  { icon: Users, label: "Improve client retention" },
  { icon: FileBarChart, label: "Automate reporting" },
  { icon: DollarSign, label: "Track treatment and payment growth" },
  { icon: Building2, label: "Manage multiple clinics efficiently" },
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
  "PMS connection",
  "CRM configuration",
  "Custom field creation",
  "Opportunity mapping",
  "Data validation",
];
const trackItems = [
  { icon: CreditCard, title: "First patient payment" },
  { icon: Wallet, title: "Lifetime patient revenue" },
  { icon: TrendingUp, title: "Revenue generated during agency engagement." },
];
const crmPlatforms = ["GoHighLevel", "HubSpot", "Salesforce"];
const steps2 = [
  "Lifetime Patient Payment",
  "First Payment Date",
  "Revenue After Agency Onboarding",
];

const faqItems = [
  {
    question: "What is software for dental marketing agencies?",
    answer:
      " Software for dental marketing agencies like SmartSync helps connect marketing efforts directly to real clinic performance by tracking patients, treatments, and payments using PMS and CRM integrations.",
  },
  {
    question: "How can dental agencies prove marketing ROI to clients?",
    answer:
      " Dental agencies can prove marketing ROI by tracking actual revenue generated after onboarding a client, including patient payments and treatment value, instead of relying only on leads or appointment data.",
  },
  {
    question: "What does dental agency reporting software track?",
    answer:
      "WDental agency reporting software tracks key metrics such as new patients, appointment activity, treatments proposed and completed, payments received, and future revenue to provide a complete performance view.",
  },
  {
    question: " Does SmartSync support dental CRM integration for agencies?",
    answer:
      "Yes, SmartSync integrates with popular CRM platforms like GoHighLevel, HubSpot, and Salesforce, allowing agencies to sync real-time PMS data directly into their existing workflows.",
  },
  {
    question: "How does SmartSync help improve client retention for agencies?",
    answer:
      " SmartSync improves client retention by providing transparent, data-driven reports that clearly show revenue growth and marketing impact, making it easier to build trust and justify ongoing services.",
  },
];

export default function ForDentalMarketingAgencies() {
  const metaTags = getMetaTags("fordentalmarketingagencies");
  const faqSchema = getFAQSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://smartsync.one/" },
    {
      name: "For Dental Marketing Agencies",
      url: "https://smartsync.one/for-dental-marketing-agencies",
    },
  ]);
  return (
    <>
      <SEO {...metaTags} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <section className="hero-gradient pb-20 pt-4  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"></div>
              <h1
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
                data-testid="text-hero-headline"
              >
                Built Specifically for{" "}
                <span className="text-primary">Dental Marketing Agencies </span>
              </h1>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Stop reporting leads and appointments. Start proving real
                revenue growth for your dental clients.
              </p>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                SmartSync connects dental practice management systems directly
                with your CRM to automatically track patients, treatments, and
                payments generated after your agency begins working with a
                clinic.
              </p>
              <p
                className="text-lg text-gray-600 mb-5 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Show measurable business impact not assumptions.
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
                src="/img/dental-marketing-agencies.webp"
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
              Agencies Use SmartSync To
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
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className=" mb-10 md:mb-14">
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-4 items-center relative">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
                  <AlertTriangle size={20} className="text-blue-600" />
                  The Agency Problem
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-5">
                  Dental Agencies Struggle With Client Reporting
                </h2>

                <p className="text-lg text-gray-600 mb-2">
                  Most agencies rely on fragmented data sources:
                </p>
                <p className="text-lg text-gray-600 font-semibold mb-4 mt-2">
                  Call tracking tools, Lead forms, Appointment reports, Manual
                  spreadsheets.
                </p>

                <p className="text-lg text-gray-600 mb-4">
                  But dental practice owners ultimately evaluate performance
                  based on production and revenue.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Without PMS visibility, agencies face challenges such as:
                </p>
                <p className="text-lg text-gray-600 font-semibold mb-4-2 mt-2">
                  Difficult ROI conversations, Client churn, Time-consuming
                  reporting, Limited operational insight
                </p>

                <p className="text-lg font-semibold text-gray-900 mt-4">
                  SmartSync solves this gap.
                </p>
              </div>

              <div className="hidden lg:flex items-center justify-center w-20 relative">
                <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
                <div className="absolute right-0 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[24px] border-l-blue-500" />
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-primary rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-10">
                <div className="inline-flex gap-2 items-center px-4 py-1.5 bg-primary text-white text-sm font-semibold rounded-full mb-6">
                  <Lightbulb size={20} className="text-white" />
                  How SmartSync Helps Agencies
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                  Connect Marketing Performance to Real Clinic Revenue
                </h2>

                <p className="text-lg text-gray-600 mb-4">
                  SmartSync synchronizes operational data directly from dental
                  PMS systems into CRM platforms agencies already use.
                </p>

                <p className="text-lg text-gray-600 mb-4">
                  Automatically track:
                </p>
                <p className="text-lg text-gray-600 font-semibold mb-4 mt-2">
                  New Patients Generated, Appointment Activity, Treatment
                  Proposed, Treatment Completed, Payments Received, Outstanding
                  Balances, Expected Future Revenue
                </p>

                <p className="text-lg text-gray-600 mb-4">
                  All updates occur automatically within minutes.
                </p>
                <p className="text-lg font-semibold text-gray-900 mt-4">
                  No manual data collection required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <BarChart3 size={16} />
              <span className="text-primary">Prove ROI With Confidence </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
              Show Revenue Generated After Your Agency Started
            </h2>

            <p className="text-lg text-gray-600 ">
              One of the biggest challenges agencies face is demonstrating
              long-term value.
            </p>
          </div>

          <p className="text-lg text-gray-600 mb-2 text-center">
            SmartSync automatically tracks payments received after a clinic
            begins working with your agency.
          </p>
          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-6">
            Inside CRM opportunities you can view:
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
          <p className="text-lg font-semibold text-gray-900  mt-8 text-center my-4">
            This allows agencies to clearly demonstrate financial growth during
            client review meetings.
          </p>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Marketing conversations become business conversations.
          </p>
        </div>
      </section>
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Zap size={18} className="" /> Opportunity Module Intelligence
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Enhanced CRM Opportunities Automatically Updated
            </h2>
            <p className="text-lg text-gray-600">
              During onboarding, SmartSync configures required CRM custom fields
              automatically.
            </p>
          </div>
          <p className="text-lg font-semibold text-gray-900 text-center mb-4">
            Opportunities continuously update with:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Wallet, label: "Lifetime Patient Payment" },
              { icon: CalendarCheck, label: "First Payment Date" },
              { icon: TrendingUp, label: "Revenue After Agency Onboarding" },
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
            Agency teams gain instant visibility without manual updates.
          </p>
        </div>
      </section> */}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gap-8 grid md:grid-cols-2 ">
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
                <Building2 size={18} />
                Built For Multi-Location Management
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Network size={24} className="text-primary mr-2" />
                Manage Performance Across Multiple Clinics From One System
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Agencies managing several dental practices gain centralized
                visibility using SmartSync.
              </p>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Monitor:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Clinic growth trends</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Appointment performance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Treatment pipeline</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Revenue performance across locations.
                  </span>
                </div>

                <p className="text-gray-600">
                  Identify opportunities quickly without logging into multiple
                  PMS systems.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
                <Workflow size={18} />
                Automation for Agency Workflows
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Zap size={24} className="text-primary mr-2" />
                Power CRM Automation Using Real Clinic Activity
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                SmartSync converts PMS updates into automation triggers inside
                your CRM.
              </p>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Supported events include:
              </p>
              <p className="text-lg text-gray-600 font-semibold mb-4 mt-2">
                New Patient Created, Appointment Booked, Appointment Modified,
                Missed Appointment, Patient Showed, Treatment Proposed, Payment
                Received
              </p>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Agencies can build automated workflows such as:
              </p>
              <div className="space-y-4">
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Patient nurture sequences
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Missed appointment recovery
                  </span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Treatment follow-up campaigns
                  </span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Patient reactivation programs.
                  </span>
                </div>
                <p className="text-gray-600">
                  Automation becomes smarter because it is based on real clinic
                  activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Bot size={20} className=" text-blue-600" />
              Opportunity Module Intelligence
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Enhanced CRM Opportunities Automatically Updated
            </h2>
            <p className="text-lg text-gray-600">
              During onboarding, SmartSync configures required CRM custom fields
              automatically.
            </p>
          </div>
          <div className="">
            <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-6">
              Opportunities continuously update with:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
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
              Agency teams gain instant visibility without manual updates.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-primary-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <CheckCircle2 size={18} />
              <span className="font-medium">Save Hours of Reporting Time</span>
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Replace Manual Reports With Automated Intelligence
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Without SmartSync */}
            <div className="bg-white border border-red-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <AlertCircle className="text-red-600" size={20} />
                </div>

                <h3 className="text-2xl font-bold text-red-600">
                  Without SmartSync:
                </h3>
              </div>

              <ul className="space-y-5">
                {[
                  "Export PMS data manually",
                  "Update spreadsheets",
                  "Prepare monthly reports",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <X className="text-red-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With SmartSync */}
            <div className="relative bg-white border-2 border-blue-400 rounded-2xl p-8 shadow-md">
              {/* Recommended Badge */}
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-semibold px-4 py-1 rounded-bl-xl rounded-tr-xl">
                Modern Approach
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                  <CheckCircle className="text-primary" size={20} />
                </div>

                <h3 className="text-2xl font-bold text-primary">
                  With SmartSync:
                </h3>
              </div>

              <ul className="space-y-5">
                {[
                  "Data syncs automatically",
                  "Dashboards update continuously",
                  "CRM reporting becomes effortless",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="text-green-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Agencies can focus on growth instead of reporting tasks.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Server size={18} /> Supported Systems
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Works With the Tools Agencies Already Use
            </h2>
          </div>
          <div className="card grid lg:grid-cols-[70%_30%] gap-8  rounded-2xl sm:p-8   border-primary">
            <div className="p-6  bg-primary-light rounded-lg">
              <h3 className="font-bold mb-2 p-2 text-lg">
                Supported PMS Systems
                <span className="font-semibold text-md">
                  (All integrations support two-way synchronization.)
                </span>{" "}
              </h3>
              <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-3  mt-[18px] text-center ">
                {pmsSystems.map((system) => (
                  <div
                    className=" p-2 bg-white rounded-xl text-foreground text-md flex items-center gap-[5px]   font-semibold  transition-all"
                    key={system}
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {system}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6 bg-primary-light rounded-lg">
              <h3 className="font-bold mb-2 p-2  text-lg">CRM Platforms</h3>
              <div className="grid sm:grid-cols-1 gap-4 mt-[18px] text-center">
                {crmPlatforms.map((platform) => (
                  <div
                    key={platform}
                    className={`p-2 bg-white rounded-xl text-foreground text-md flex items-center gap-[5px] font-semibold transition-all
                                    ${platform === "GoHighLevel" ? "scale-[1.02] border border-primary shadow-md" : ""}
                                  `}
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {platform}
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
            <div className="mb-8 w-full md:w-[50%]">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
                <LifeBuoy size={18} /> Onboarding Support
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-problem-title"
              >
                Guided Setup Designed for Agencies
              </h2>
              <p className="text-lg text-gray-600">
                SmartSync onboarding specialists assist throughout setup to
                ensure accurate synchronization.
              </p>

              <p className="mt-8  mx-auto   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                Most agencies begin seeing synchronized data quickly after
                onboarding.
              </p>
            </div>
            <div className="bg-white w-full md:w-[50%]  mx-auto max-w-[700px] rounded-2xl p-8   border-primary/10">
              <p className="text-xl font-semibold  mt-4 mb-6 ">
                Setup includes:
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
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl px-5 py-3 flex-1 ">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <TrendingUp size={20} />
              <span className="font-semibold text-sm">Customer Results</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Agencies Managing 80+ Dental Clinics
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              SmartSync helps agencies strengthen client relationships through
              transparent reporting and measurable results.
            </p>
          </div>
          <p className="font-bold mb-2 p-2 text-lg text-center mb-6">
            Agencies using SmartSync benefit from:
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <ShieldCheck className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Improved reporting confidence
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Faster performance reviews
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Better client retention
              </h3>
            </div>
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
            Give Your Agency a Competitive Advantage
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-2">
            Move beyond lead reporting and demonstrate real production growth
            for every dental client you manage.
          </p>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
            Join agencies already using SmartSync across dozens of clinics.
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
