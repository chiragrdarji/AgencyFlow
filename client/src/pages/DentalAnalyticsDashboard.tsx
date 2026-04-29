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
  Briefcase,
  Calendar,
  CalendarPlus,
  Check,
  CheckCircle,
  CheckCircle2,
  ChevronRight,
  Clock,
  Database,
  DollarSign,
  FileText,
  Layers,
  LayoutDashboard,
  Lightbulb,
  Phone,
  Server,
  Sparkles,
  Star,
  TrendingUp,
  UserCheck,
  Users,
  Wallet,
  X,
  XCircle,
  Zap,
} from "lucide-react";
import FAQ from "@/components/FAQ";

const metrics = [
  { icon: Users, label: "New Patients" },
  { icon: CalendarPlus, label: "New Appointments" },
  { icon: FileText, label: "Treatment Proposed" },
  { icon: CheckCircle2, label: "Treatment Completed" },
  { icon: Wallet, label: "Payments Received" },
  { icon: Clock, label: "Payment Due" },
  { icon: TrendingUp, label: "Expected Future Revenue" },
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
  "Inactive patients",
  "Retention opportunities",
  "Recall campaign targets",
];
const crmPlatforms = ["GoHighLevel", "HubSpot", "Salesforce"];
const faqItems = [
  {
    question: "What is a dental analytics dashboard?",
    answer:
      " A dental analytics dashboard is a centralized platform that converts PMS data into real-time insights, helping agencies and clinics track patients, appointments, treatments, and revenue in one place.",
  },
  {
    question: "How does SmartSync improve dental reporting software?",
    answer:
      " SmartSync improves dental reporting software by automatically syncing data from PMS systems into dashboards and CRMs, eliminating manual reporting while providing accurate, real-time performance insights.",
  },
  {
    question: "What metrics can I track with a dental KPI software?",
    answer:
      "With dental KPI software like SmartSync, you can track key metrics such as new patients, appointments, treatment performance, payments received, outstanding balances, and expected future revenue.",
  },
  {
    question: "Can SmartSync provide dental revenue dashboard insights across multiple clinics?",
    answer:
      "Yes, SmartSync allows agencies and multi-location practices to monitor performance across multiple clinics, compare growth, and track revenue trends from a single analytics dashboard.",
  },
  {
    question:
      "Why is a dental practice analytics platform important for growth?",
    answer:
      " A dental practice analytics platform is important because it provides real-time visibility into patient behavior, treatment performance, and revenue, enabling better decisions and improved long-term growth.",
  },
];
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Dental Analytics Dashboard Software",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://smartsync.one/dental-analytics-dashboard",
  description:
    "Track new patients, appointments, treatments, payments, and future revenue using SmartSync’s dental analytics dashboard integrated directly with Dentrix, Open Dental, Eaglesoft and leading CRMs.",
  
  publisher: {
    "@type": "Organization",
    name: "Smart Sync",
    url: "https://smartsync.one",
  },
  featureList: [
    "Track new patients and patient growth trends",
    "Monitor appointments, changes, and missed visits",
    "Analyze treatment proposed, pending, and completed",
    "Track payments received and outstanding balances",
    "Measure patient lifetime value and revenue performance",
    "Forecast future revenue based on pending treatments",
    "Real-time PMS to CRM data synchronization",
    "Automated analytics dashboards with no manual reporting"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "50",
  },
};

export default function DentalAnalyticsDashboard() {
  const metaTags = getMetaTags("dentalanalyticsdashboard");
  const faqSchema = getFAQSchema(faqItems);
  

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://smartsync.one/" },
    {
      name: "Dental Analytics Dashboard",
      url: "https://smartsync.one/dental-analytics-dashboard",
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
                <span className="text-primary">
                  Dental Analytics Dashboard{" "}
                </span>{" "}
                Built for Agencies and Multi-Location Practices
              </h1>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Turn complex dental PMS data into clear, actionable performance
                insights.
              </p>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                SmartSync automatically converts patient activity, treatments,
                and payments into real-time analytics dashboards inside
                SmartSync and your CRM.
              </p>
              <p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Understand clinic growth, treatment performance, and revenue
                trends without manual reporting.
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
                src="/img/dental-analytics-dashboard.webp"
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
              Track Key Metrics Automatically
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
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className=" mb-10 md:mb-14">
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-4 items-center relative">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
                  <AlertTriangle size={20} className="text-blue-600" />
                  The Problem
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-5">
                  Dental Data Is Everywhere, but There Are No Insights:
                </h2>

                <p className="text-lg text-gray-600 mb-2">
                 Every day, dental offices produce a wealth of data on their operations within their PMS platforms.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  Despite that, agencies and clinic owners are faced with:
                </p>

                <ul className="space-y-5 list-disc ps-5">
                  {[
                    {
                      icon: BarChart3,
                      text: "Manual spreadsheet reporting",
                      color: "text-blue-600 bg-blue-100",
                    },
                    {
                      icon: Phone,
                      text: "Limited visibility into treatment performance",
                      color: "text-blue-600 bg-blue-100",
                    },
                    {
                      icon: Calendar,
                      text: "Delayed financial insights",
                      color: "text-blue-600 bg-blue-100",
                    },
                    {
                      icon: Calendar,
                      text: "Disconnected CRM reporting",
                      color: "text-blue-600 bg-blue-100",
                    },
                  ].map((item, i) => {
                    const Icon = item.icon;

                    return (
                      <li key={i} className="text-lg text-gray-700 !mt-2">
                        <span>{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className="text-lg font-semibold text-gray-900 mt-4">
                  Real growth is hard to discern without a centralized analytics solution.
                </p>
              </div>

              <div className="hidden lg:flex items-center justify-center w-20 relative">
                <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
                <div className="absolute right-0 w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[24px] border-l-blue-500" />
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-primary rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-10">
                <div className="inline-flex gap-2 items-center px-4 py-1.5 bg-primary text-white text-sm font-semibold rounded-full mb-6">
                  <Lightbulb size={20} className="text-white" />
                  The SmartSync Analytics Approach
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
                  Real-Time Analytics From Your PMS:​
                </h2>

                <p className="text-lg text-gray-600 mb-4">
                  SmartSync links directly to compatible dental practice management systems and performs continual synchronization of daily operational data.
                </p>

                <p className="text-lg text-gray-600 mb-4">
                  Analytics update seamlessly as clinic activity occurs.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  There’s nothing to manually export or report on.
                </p>
                <p className="text-lg font-semibold text-gray-900 mt-4">
                  Data become immediately actionable for agencies, consultants, and practice owners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20  bg-primary-light">
        <div className="max-w-7xl px-5  mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
              <BarChart3 size={20} />
              <span className="font-medium">Core Analytics Metrics</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Keep Track of Clinic Performance From One Dashboard
            </h2>
            <p className="text-lg text-gray-600">
              SmartSync analytics offer insights into patient flow, treatment stages and revenue generation.
            </p>
          </div>

          <div className="space-y-12  px-4 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            <div className="bg-white border rounded-2xl p-8 shadow-sm">
              <div className=" items-start gap-4 mb-4">
                <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 my-3">
                    Patient Growth Analytics
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Know if and how practices are expanding over time.
                  </p>
                  <p className="text-gray-700 font-medium mb-3">Track:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="flex items-center space-x-3">
                        <ChevronRight size={18} className="text-primary " />
                        <span className="text-gray-700">
                          New Patients Added
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center space-x-3">
                        <ChevronRight size={18} className="text-primary " />
                        <span className="text-gray-700">
                          First Visit Activity
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center space-x-3">
                        <ChevronRight size={18} className="text-primary " />
                        <span className="text-gray-700">
                          Patient Visit Trends
                        </span>
                      </div>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Determine the efficiency of marketing and the success of patient acquisition.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-2xl p-8 shadow-sm !mt-0">
              <div className="  gap-4 mb-4">
                <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                  <Calendar className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 my-3">
                    Appointment Analytics
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Track the success of scheduling at any or all locations.
                  </p>
                  <p className="text-gray-700 font-medium mb-3">Keep an eye on:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="flex items-center space-x-3">
                        <ChevronRight size={18} className="text-primary " />
                        <span className="text-gray-700">
                          New Appointments Created
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center space-x-3">
                        <ChevronRight size={18} className="text-primary " />
                        <span className="text-gray-700">
                          Appointment Changes
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center space-x-3">
                        <ChevronRight size={18} className="text-primary " />
                        <span className="text-gray-700">
                          Missed Appointments
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center space-x-3">
                        <ChevronRight size={18} className="text-primary " />
                        <span className="text-gray-700">Patient Show Rate</span>
                      </div>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Agencies and clinics can easily pinpoint where they are running inefficiently.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border  rounded-2xl p-8 shadow-sm !mt-0">
              <div className=" mb-4">
                <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                  <FileText className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 my-3">
                    Treatment Performance Analytics
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Receive coverage on treatment acceptance and production potential within your practice.
                  </p>
                  <p className="text-gray-700 mb-3">SmartSync tracks:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="flex items-center space-x-3">
                        <ChevronRight size={18} className="text-primary " />
                        <span className="text-gray-700">
                          Treatment Proposed
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center space-x-3">
                        <ChevronRight size={18} className="text-primary " />
                        <span className="text-gray-700">
                          Pending Procedures
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center space-x-3">
                        <ChevronRight size={18} className="text-primary " />
                        <span className="text-gray-700">
                          Treatment Completed
                        </span>
                      </div>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    This is useful in identifying treatments that are not scheduled or are delayed, affecting your cash flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-12  px-4 max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 mt-4">
            <div className="bg-white   rounded-2xl p-8 shadow-sm border-2 border-[#0095FF]">
              <div className=" mb-4">
                <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                  <DollarSign className="text-primary" size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 my-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      Revenue and Payment Analytics
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Gain complete financial visibility using real PMS payment activity.
                  </p>
                  <p className="text-gray-700 font-medium mb-3">Track:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="flex items-center space-x-3">
                        <ChevronRight size={18} className="text-primary " />
                        <span className="text-gray-700">Payments Received</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center space-x-3">
                        <ChevronRight size={18} className="text-primary " />
                        <span className="text-gray-700">
                          {" "}
                          Due Payments
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center space-x-3">
                        <ChevronRight size={18} className="text-primary " />
                        <span className="text-gray-700">
                          {" "}
                          Patient Lifetime Value
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-center space-x-3">
                        <ChevronRight size={18} className="text-primary " />
                        <span className="text-gray-700">
                          Revenue after Date of Agency Start
                        </span>
                      </div>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    This is for the purpose of making performance reports for the clinics and agencies.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border rounded-2xl p-8 shadow-sm !mt-0">
              <div className=" mb-4">
                <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                  <TrendingUp className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 my-3">
                    Prediction of Future Revenues
                  </h3>
                  <p className="text-gray-600 mb-4">
                    SmartSync estimates future payments due to you taking into account treatments in process and planned treatments.
                  </p>
                  <p className="text-gray-600">
                   Practice visibility into future production potential.
                  </p>
                </div>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
              <LayoutDashboard size={16} />
              <span className="text-blue-600">Avaiable Where You Work</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Analytics Available Inside SmartSync and Your CRM
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              SmartSync ensures insights are accessible without changing
              workflows.
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-4">
            Analytics can be viewed through:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <LayoutDashboard className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                SmartSync Analytics Dashboard
              </h3>
            </div>

            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                CRM Opportunity Module
              </h3>
            </div>
          </div>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Marketing teams, agency managers, and clinic owners can work from
            familiar systems while accessing real operational data.
          </p>
        </div>
      </section>
      <section className="py-20  bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-10 flex-wrap md:flex-nowrap items-center">
            <div className="mb-8 w-full md:w-[50%]">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
                <Activity size={18} /> Patient Lifecycle Insights
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-problem-title"
              >
                Understand Patient Behavior Across the Entire Journey
              </h2>
              <p className="text-lg text-gray-600">
                SmartSync synchronizes important lifecycle information
                automatically.
              </p>
              <p className="text-gray-700 font-medium my-3">Track:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <div className="flex items-center space-x-3">
                    <ChevronRight size={18} className="text-primary " />
                    <span className="text-gray-700">First Visit Date</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center space-x-3">
                    <ChevronRight size={18} className="text-primary " />
                    <span className="text-gray-700">Last Visit Date</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center space-x-3">
                    <ChevronRight size={18} className="text-primary " />
                    <span className="text-gray-700">Next Appointment Date</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center space-x-3">
                    <ChevronRight size={18} className="text-primary " />
                    <span className="text-gray-700">
                      Pending Treatment Opportunities
                    </span>
                  </div>
                </li>
              </ul>
              <p className="mt-8  mx-auto   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                Patient lifecycle analytics improve long-term revenue growth.
              </p>
            </div>
            <div className="bg-white w-full md:w-[50%]  mx-auto max-w-[700px] rounded-2xl p-8   border-primary/10">
              <p className="text-xl font-semibold  mt-4 mb-6 ">
                This helps teams identify:
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
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Server size={18} /> Supported Systems
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Works With Leading Dental Software Ecosystems
            </h2>
          </div>
          <div className="card grid lg:grid-cols-[70%_30%] gap-8  rounded-2xl sm:p-8   border-primary">
            <div className="p-6  bg-primary-light rounded-lg">
              <h3 className="font-bold mb-2 p-2 text-lg">
                PMS Systems Supported{" "}
                <span className="font-semibold text-md">
                  (All integrations support two-way synchronization)
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
              {/* <p className="mt-8      text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">All integrations support two-way synchronization.</p> */}
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
          <div className="gap-8 grid md:grid-cols-2 ">
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
                <Sparkles size={18} />
                Multi Location Visibility
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Database size={24} className="text-primary mr-2" />
                Ideal for Agencies operating multiple dental clinics
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                The SmartSync analytics make it easy to track progress for multiple practices.
              </p>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Agencies can:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Compare clinic growth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Monitor production trends
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Identify revenue gaps</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Evaluate marketing impact across locations.
                  </span>
                </div>

                <p className="text-gray-600">
                  Instead of reviewing separate PMS systems, everything becomes
                  centralized.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
                <Users size={18} />
                Automated Data Accuracy
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <UserCheck size={24} className="text-primary mr-2" />
                Analytics Powered by Real Clinical Activity
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                SmartSync analytics rely on actual PMS updates rather than
                manual reporting.
              </p>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Updates sync automatically when:
              </p>
              <div className="space-y-4">
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Patients are Created</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Appointments Change</span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Treatments are proposed or completed
                  </span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">payments are recorded.</span>
                </div>

                <p className="text-gray-600">
                  Typical synchronization occurs within minutes.
                </p>
                <p className="text-gray-600">
                  This guarantees the dashboards are always up to date with the latest clinic performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <CheckCircle2 size={18} />
              <span className="font-medium">Why SmartSync Analytics</span>
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Move Beyond Manual Dental Reporting
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
                  "Manual exports",
                  "Delayed reporting cycles",
                  "Limited financial visibility",
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
                  "Automated analytics",
                  "Real-time updates",
                  "Revenue intelligence",
                  "Agency-ready reporting",
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
            SmartSync bridges clinic operations and marketing intelligence.
          </p>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-4xl mx-auto px-4">
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
            See the Complete Performance Picture Across Every Clinic
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-2">
            Track patients, treatments, appointments, and revenue automatically
            using real PMS data.
          </p>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
            Join agencies already managing analytics across 80+ dental clinics
            using SmartSync.
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
