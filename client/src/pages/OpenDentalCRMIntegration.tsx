import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import SchemaMarkup, { getBreadcrumbSchema } from "@/components/SchemaMarkup";
import { getMetaTags } from "@/lib/seoMeta";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  Building,
  Calendar,
  CalendarCheck,
  CheckCircle,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock,
  Clock1,
  Cloud,
  CreditCard,
  Database,
  DollarSign,
  EyeOff,
  FileDown,
  FileText,
  Gauge,
  HeartPulse,
  Icon,
  IndianRupee,
  LifeBuoy,
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
  Settings,
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

const metrics = [
  { icon: Users, label: "New Patients" },
  { icon: Calendar, label: "Appointment Activity" },
  { icon: FileText, label: "Treatment Proposed" },
  { icon: Clock1, label: "Pending Procedures" },
  { icon: CheckCircle2, label: "Treatment Completed" },
  { icon: DollarSign, label: "Payments Received" },
  { icon: RefreshCcw, label: "Patient Lifecycle Data" },
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
  "Treatment follow-up automation",
  "Appointment recovery campaigns",
  "Patient recall workflows",
  "Revenue recovery sequences",
];
const steps2 = [
  "Dentrix connection",
  "CRM integration",
  "Custom field configuration",
  "Opportunity module setup",
  "Data validation",
];

const trackItems = [
  { icon: RotateCcw, title: "Recover pending treatments" },
  { icon: HeartPulse, title: "Improve patient retention" },
  { icon: TrendingUp, title: "Track production growth" },
  { icon: BarChart3, title: "Demonstrate marketing ROI" },
];
const crmPlatforms = ["GoHighLevel", "HubSpot", "Salesforce"];

export default function OpenDentalCRMIntegration() {
  const metaTags = getMetaTags("opendentalCRMintegration");

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://smartsync.one/" },
    {
      name: "Open Dental CRM Integration",
      url: "https://smartsync.one/open-dental-crm-integration",
    },
  ]);
  return (
    <>
      <SEO {...metaTags} />
      <SchemaMarkup schema={breadcrumbSchema} />
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
                  Open Dental CRM Integration{" "}
                </span>{" "}
                Designed for Automation-Driven Dental Agencies
              </h1>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Connect Open Dental directly with your CRM and marketing systems
                using SmartSync’s real-time two-way synchronization platform.
              </p>
              <p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Automatically synchronize patient activity, appointments,
                treatments, and payments to power accurate reporting and
                advanced automation workflows.
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
              <img
                src="/img/dental-marketing-campaign.webp"
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
              Automatically Sync From Open Dental
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
            Updates appear inside your CRM within minutes
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
              <AlertTriangle size={18} />
              <span className="text-blue-600">
                The Challenge With Open Dental Data
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Powerful PMS Data Often Remains Underutilized
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              Open Dental provides extensive operational flexibility for dental
              practices.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              However, agencies and marketing teams often struggle to access
              this data for reporting or automation.
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
                Teams manually export reports
              </h3>
            </div>

            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <EyeOff className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                CRM pipelines lack treatment visibility
              </h3>
            </div>
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Workflow className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Automation workflows rely on assumptions
              </h3>
            </div>
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <IndianRupee className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Revenue attribution becomes difficult
              </h3>
            </div>
          </div>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            SmartSync connects Open Dental directly to CRM platforms used for
            growth and communication.
          </p>
        </div>
      </section>
      <section className="py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <Sparkles size={18} />
              <span className="text-blue-600">
                How SmartSync Integration Open Dental
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Real-Time Two-Way Open Dental Synchronization
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              SmartSync continuously synchronizes operational updates between
              Open Dental and supported CRM platforms.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              When activity changes inside Open Dental, CRM records update
              automatically.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Synchronization typically occurs within minutes.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="rounded-lg  bg-white border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Users size={24} className="text-primary" />
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
                  <ChevronRight size={18} className="text-primary " /> New
                  Patient Creation
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " /> 
                  First Visit Date
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />  Last
                  Visit Date
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />  Next
                  Appointment Date
                </li>
              </ul>
              <p className="text-md text-gray-600 mb-2">
                CRM contacts remain aligned with clinic activity.
              </p>
            </div>
            <div className="rounded-lg  bg-white  border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Calendar size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-lg text-foreground mb-2">
                Appointment Updates
              </p>
              <p className="text-lg text-foreground mb-2">
                Track scheduling activity automatically:
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
              <p className="text-md text-gray-600 mb-2">
                Agencies can instantly respond using CRM automation
              </p>
            </div>
            <div className="rounded-lg  bg-white border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Stethoscope size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-lg text-foreground mb-2">
                Treatment Pipeline Intelligence
              </p>
              <p className="text-lg text-foreground mb-2">
                Open Dental users benefit from deep treatment visibility through
                SmartSync.
              </p>
              <p className="text-lg text-foreground mb-2">
                Automatically synchronize:
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
              <p className="text-md text-gray-600 mb-2">
                Identify unscheduled treatment opportunities directly inside CRM
                dashboards.
              </p>
            </div>
            <div className="rounded-lg  bg-white border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <DollarSign size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-lg text-foreground mb-2">
                Financial Data Synchronization
              </p>
              <p className="text-lg text-foreground mb-2">
                Monitor real financial performance including:
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
              <p className="text-md text-gray-600 mb-2">
                Revenue reporting becomes accurate and automated.
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
                Open Dental + Gohighlevel Integration
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-problem-title"
              >
                Power GoHighLevel Automation Using Open Dental Activity
              </h2>
              <p className="text-lg text-gray-600 mt-4 mb-2">
                Many dental agencies rely on GoHighLevel for communication and
                funnel automation.
              </p>
              <p className="text-lg text-gray-600 mt-2 mb-4">
                SmartSync connects Open Dental clinic activity directly into
                GoHighLevel workflows.
              </p>
              <p className="text-lg text-gray-900">Trigger automation when:</p>

              <ul className="space-y-2 mt-4">
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " /> New
                  patients are added
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " />{" "}
                  Appointments are missed
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " /> Treatment
                  plans are created
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " /> Payments
                  are recorded
                </li>
              </ul>

              <p className="mt-8  mx-auto   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                Automation becomes driven by real patient behavior.
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
              <span className="text-blue-600">Open Dental Hubspot Integration</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bring Clinical Intelligence Into HubSpot Pipelines
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              SmartSync synchronizes Open Dental activity directly into HubSpot contacts and deal pipelines.
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-4">
            Marketing teams gain visibility into:
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white flex gap-4 items-center rounded-2xl p-4 shadow-sm border hover:shadow-md transition-all ">
              <div className=" w-10 h-10  rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Activity className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Patient acquisition
              </h3>
            </div>

            <div className="bg-white flex gap-4 items-center rounded-2xl p-4 shadow-sm border hover:shadow-md transition-all ">
              <div className=" w-10 h-10  rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <HeartPulse className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Treatment progression
              </h3>
            </div>
            <div className="bg-white flex gap-4 items-center rounded-2xl p-4 shadow-sm border hover:shadow-md transition-all ">
              <div className=" w-10 h-10  rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Revenue generation
              </h3>
            </div>
          </div>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            HubSpot reporting becomes connected to real clinic outcomes.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
              <Network size={18} />
              <span className="text-blue-600">
                Open Dental Salesforce Integration
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Reporting Using Open Dental and Salesforce
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              Large dental organizations and consultants using Salesforce can
              centralize clinic performance data using SmartSync.
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

              <h3 className="font-medium text-foreground">Production growth</h3>
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
                Payment trends across locations
              </h3>
            </div>
          </div>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Ideal for DSOs and multi-practice groups.
          </p>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <Building size={20} />
              <span className="text-primary">
                Build for Dental Marketing Agencies{" "}
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
              Help Open Dental Clinics Grow Beyond Lead Generation
            </h2>

            <p className="text-lg text-gray-600 ">
              SmartSync helps agencies move beyond appointment reporting
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-6">
            Agencies can help clinics:
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
          <p className="text-lg text-gray-600 text-center mt-8">
            SmartSync automatically tracks payments generated after agency
            onboarding.
          </p>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Client reporting becomes significantly stronger.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gap-8 grid md:grid-cols-2 ">
            <div className="bg-white border-2 border-primary  shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
                <Settings size={18} />
                Implementation & Onboarding
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Wand2 size={24} className="text-primary mr-2" />
                Guided Open Dental Integration Setup
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
                  <span className="text-gray-700">Open Dental connection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">CRM integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Custom field configuration
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Opportunity mapping</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Data validation</span>
                </div>

                <p className="text-gray-600">
                  Most agencies begin seeing synchronized data quickly after
                  onboarding
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-primary shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
                <LifeBuoy size={18} />
                Why SmartSync for Open Dental
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Brain size={24} className="text-primary mr-2" />
                Transform Open Dental Data Into Growth Intelligence
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                SmartSync goes beyond basic integration.
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
                  <span className="text-gray-700">Power CRM workflows</span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Track treatment opportunities
                  </span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Measure real revenue growth
                  </span>
                </div>

                <p className="text-gray-600">
                  Operational clinic data becomes actionable intelligence.
                </p>
              </div>
            </div>
          </div>
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
              Supporting Agencies and Clinics Across 80+ Dental Locations
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              SmartSync helps agencies standardize reporting and automation
              across practices using different PMS systems including Open
              Dental.
            </p>

            <p className="mt-8  mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              Reliable synchronization ensures accurate decision-making.
            </p>
          </div>
        </div>
      </section>
      <div className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Connect Open Dental With Your CRM Today
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            Unlock patient, treatment, and revenue insights automatically using
            SmartSync.
          </p>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Start building smarter automation and reporting workflows.
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
