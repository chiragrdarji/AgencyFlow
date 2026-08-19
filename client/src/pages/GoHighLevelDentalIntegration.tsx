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
  Bell,
  Bot,
  Brain,
  Building,
  Building2,
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
  FileSpreadsheet,
  FileText,
  Gauge,
  GitBranch,
  HeartPulse,
  Icon,
  IndianRupee,
  Layers,
  LifeBuoy,
  Lightbulb,
  LineChart,
  Link,
  MapPin,
  MessageCircle,
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
  TrendingDown,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
  Wallet,
  Wand2,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import FAQ from "@/components/FAQ";
const metrics = [
  { icon: RefreshCcw, label: "Real Patient Sync" },
  { icon: GitBranch, label: " Treatment Pipeline Tracking" },
  { icon: IndianRupee, label: "Payment-Based Attribution" },
  { icon: Zap, label: "Automated Workflow Triggers" },
  { icon: BarChart3, label: " Agency ROI Reporting" },
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
  "PMS connection",
  "GoHighLevel configuration",
  "Custom opportunity mapping",
  "Data validation",
];

const trackItems = [
  { icon: Wallet, title: "First Patient Payment" },
  { icon: IndianRupee, title: "Lifetime Patient Revenue" },
  { icon: TrendingUp, title: "Revenue Generated During Agency Engagement" },
];
const crmPlatforms = ["GoHighLevel", "HubSpot", "Salesforce"];

const faqItems = [
  {
    question: "What is GoHighLevel dental integration?",
    answer:
      "GoHighLevel dental integration connects dental PMS systems like Dentrix, Open Dental, and Eaglesoft with GoHighLevel to automatically sync patient data, appointments, treatments, and payments in real time.",
  },
  {
    question: " How does SmartSync.One improve GoHighLevel for dental agencies?",
    answer:
      "SmartSync.One enhances GoHighLevel by syncing real clinic activity into CRM pipelines, enabling accurate reporting, automated workflows, and complete visibility into treatment and revenue performance.",
  },
  {
    question:
      "Can I connect Dentrix and Open Dental with GoHighLevel?",
    answer:
      " Yes, SmartSync.One allows seamless integration of Dentrix, Open Dental, and other PMS platforms with GoHighLevel, ensuring real-time data synchronization for automation and reporting.",
  },
  {
    question: "What data is synced in dental CRM integration with GoHighLevel?",
    answer:
      " Dental CRM integration with GoHighLevel syncs patient records, appointment activity, treatment pipeline data, payments, and lifecycle information to power automation and revenue tracking.",
  },
  {
    question: " Why is GoHighLevel dental automation important for agencies?",
    answer:
      "GoHighLevel dental automation is important because it uses real PMS data to trigger workflows, helping agencies improve patient engagement, track revenue growth, and clearly prove marketing ROI.",
  },
];
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "GoHighLevel Dental Integration Software",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://smartsync.one/gohighlevel-dental-integration",
  description:
    "Connect Dentrix, Open Dental, Eaglesoft and other dental PMS systems with GoHighLevel using SmartSync.One. Sync patients, treatments, and payments to automate workflows and prove agency ROI.",

  publisher: {
    "@type": "Organization",
    name: "SmartSync.One",
    url: "https://smartsync.one",
  },
  featureList: [
    "Real-time synchronization between dental PMS systems and GoHighLevel",
    "Sync patients, appointments, treatments, and payments automatically",
    "Track patient lifecycle data including visit history and upcoming appointments",
    "Monitor treatment pipeline including proposed, pending, and completed procedures",
    "Track payments received, outstanding balances, and lifetime patient value",
    "Revenue attribution tracking after agency onboarding",
    "Trigger GoHighLevel automation workflows using real PMS events",
    "Enhance CRM opportunities with real clinic data and custom fields",
    "Centralized reporting for multi-location dental practices",
    "Analytics dashboards powered by real PMS data inside GoHighLevel"
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "50",
  },
};

export default function GoHighLevelDentalIntegration() {
  const metaTags = getMetaTags("gohighleveldentalintegration");
  const faqSchema = getFAQSchema(faqItems);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://smartsync.one/" },
    {
      name: "GoHighLevel Dental Integration",
      url: "https://smartsync.one/gohighlevel-dental-integration",
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
                Turn <span className="text-primary"> GoHighLevel </span> Into a
                Complete Dental Revenue Intelligence Platform
              </h1>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                SmartSync.One connects dental practice management systems directly
                with GoHighLevel to synchronize patients, appointments,
                treatments, and payments automatically.
              </p>
              <p className="text-lg text-gray-600 mb-2 leading-relaxed">
                Dental marketing agencies can finally track real clinic
                performance and trigger automation using live PMS activity.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Stop managing assumptions. Start managing real revenue data.
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
            <div className="relative">
              <img
                src="/img/gohighlevel-dental-integration.webp"
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
              SmartSync.One + GoHighLevel Enables
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
              <AlertTriangle size={18} />
              <span className="text-blue-600">
                The Biggest Problem Agencies Face
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              GoHighLevel Doesn’t Natively Connect to Dental PMS Systems
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              GoHighLevel is powerful for marketing automation and pipeline
              management.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              But dental clinics operate inside PMS platforms like Dentrix or
              Open Dental.
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-4">
            Without integration:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Opportunities update manually
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
                <FileSpreadsheet className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Reporting relies on spreadsheets
              </h3>
            </div>
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <TrendingDown className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Agencies find it hard to demonstrate ROI
              </h3>
            </div>
          </div>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Your pipelines are a real reflection of what happens in your clinic—automatically.
          </p>
        </div>
      </section>
      <section className="py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <Sparkles size={18} />
              <span className="text-blue-600">
                How SmartSync.One Enhances Gohighlevel
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bring Real Clinic Activity Auto-Sync Into GoHighLevel
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              SmartSync.One continuously syncs PMS updates to GoHighLevel opportunities and contacts.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Updates typically appear within minutes.
            </p>
            <p className="text-lg text-gray-600 mb-4">Automatically sync:</p>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            <div className="rounded-lg  bg-white border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Users size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-lg text-foreground mb-2">
                Patient Intelligence
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
                  <ChevronRight size={18} className="text-primary " /> Last
                  Visit Date
                </li>
                <li className="flex items-center gap-3">
                  {" "}
                  <ChevronRight size={18} className="text-primary " /> Next
                  Appointment Date
                </li>
              </ul>
            </div>
            <div className="rounded-lg  bg-white  border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Calendar size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-lg text-foreground mb-2">
                Appointment Activity
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
            </div>
            <div className="rounded-lg  bg-white border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Stethoscope size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-lg text-foreground mb-2">
                Treatment Intelligence
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
            </div>
            <div className="rounded-lg  bg-white border text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  ">
              <div className=" w-12 h-12 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <DollarSign size={24} className="text-primary" />
              </div>
              <p className="font-semibold text-lg text-foreground mb-2">
                Financial Intelligence
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
            </div>
          </div>
          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            SmartSync.One bridges GoHighLevel directly with clinic operations
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <TrendingUp size={16} />
              <span className="text-primary">Agency ROI Attribution </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
              Prove Marketing ROI Using Real Patient Payments
            </h2>

            <p className="text-lg text-gray-600 ">
              SmartSync.One automatically tracks revenue generated after your agency
              begins managing a clinic.
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-6">
            Inside GoHighLevel Opportunities you can view:
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
          <p className="text-lg  text-gray-600 mt-4 text-center mb-6">
            Client reporting becomes clear and defensible.
          </p>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            This dramatically improves agency retention.
          </p>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <Target className="h-4 w-4" /> Automation Superpowers
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Trigger GoHighLevel Workflows Using Real PMS Events
            </h2>
            <p className="text-lg text-muted-foreground">
              SmartSync.One converts clinic activity into automation triggers.
            </p>
          </div>
          <p className="text-lg font-semibold mb-4 text-center">
            Examples agencies build:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                icon: RotateCcw,
                title: "Missed Appointment Recovery",
                desc: "Automatically send SMS or WhatsApp reminders when appointments are missed.",
              },
              {
                icon: MessageCircle,
                title: "Follow-Up Campaigns for Treatment",
                desc: "Enable nurturing workflows to begin when treatment has been suggested but no appointment has been made.",
              },
              {
                icon: UserPlus,
                title: "Patient Reactivation",
                desc: "Reactivate inactive patients by their visit history.",
              },
              {
                icon: Bell,
                title: "Payment Follow Ups",
                desc: "Automate communication on payment event.",
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
                <p className="text-muted-foreground text-md">{desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Automation becomes driven by real behavior instead of manual
            tagging.
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Server size={18} /> Supported PMS Systems
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Connect GoHighLevel With Leading Dental PMS Platforms
            </h2>
          </div>
          <div className="card grid  gap-8  rounded-2xl sm:p-8   border-primary">
            <div className="p-6  bg-primary-light rounded-lg">
              <h3 className="font-bold mb-2 p-2 text-lg">
                SmartSync.One integrates with:
              </h3>
              <div className="grid  sm:grid-cols-3 lg:grid-cols-5 gap-3  mt-[18px] text-center ">
                {pmsSystems.map((system) => (
                  <div
                    className=" p-2 bg-white rounded-xl text-foreground text-md flex items-center gap-[5px]   font-semibold  transition-all"
                    key={system}
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {system}
                  </div>
                ))}
              </div>
              <p className="mt-8      text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                All integrations support two-way synchronization.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gap-8 grid md:grid-cols-2 ">
            <div className="bg-white   shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
                <Brain size={18} />
                Opportunity Module Intelligence
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Sparkles size={24} className="text-primary mr-2" />
                Automatically Enhanced GoHighLevel Opportunities
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                During setup SmartSync.One creates required custom fields inside
                GoHighLevel.
              </p>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Opportunities continuously update with:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Lifetime Payment From Patient
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">First Payment Date</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Revenue After Agency Start Date
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Treatment Status</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Appointment Activity</span>
                </div>

                <p className="text-gray-600">
                  Agency dashboards instantly become more powerful.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
                <Layers size={18} />
                Build for Multi Location Agencies
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Building2 size={24} className="text-primary mr-2" />
                Manage Multiple Dental Clients Inside One GoHighLevel Account
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                SmartSync.One standardizes PMS data across clinics using different
                systems.
              </p>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Agencies can monitor:
              </p>
              <div className="space-y-4">
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Clinic growth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Revenue trends</span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Treatment pipeline performance
                  </span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Patient acquisition</span>
                </div>

                <p className="text-gray-600">All inside GoHighLevel.</p>
                <p className="text-gray-600">No PMS logins required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
              <AlertTriangle size={18} />
              <span className="text-blue-600">
                Analytics Inside Gohighlevel
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Transform GoHighLevel Into a Dental Analytics Dashboard
            </h2>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-4">
            SmartSync.One allows agencies to track:
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <UserPlus className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                New Patients Generated
              </h3>
            </div>

            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Appointment Growth
              </h3>
            </div>
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <GitBranch className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Treatment Pipeline Value
              </h3>
            </div>
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Wallet className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Payments Collected
              </h3>
            </div>
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <LineChart className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Expected Future Revenue
              </h3>
            </div>
          </div>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Performance reviews become faster and data-driven.
          </p>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <Wand2 size={20} className=" text-blue-600" />
              Fast Guided SetUp
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              GoHighLevel Integration Setup Included
            </h2>
            <p className="text-lg text-gray-600 ">
              SmartSync.One onboarding specialists assist agencies throughout setup.
            </p>
          </div>
          <div className="">
            <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-6">
              Implementation includes:
            </p>
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
            <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              Most agencies begin seeing synced activity shortly after
              onboarding.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Sparkles size={18} />
              <span className="font-medium">Why Agencies Choose SmartSync.One</span>
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              The Missing Layer for Dental Agencies Using GoHighLevel
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Without SmartSync.One */}
            <div className="bg-white border border-red-200 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                  <AlertCircle className="text-red-600" size={20} />
                </div>

                <h3 className="text-2xl font-bold text-red-600">
                  Without SmartSync.One:
                </h3>
              </div>

              <ul className="space-y-5">
                {[
                  "Manual updates",
                  "Limited attribution",
                  "Disconnected reporting",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <X className="text-red-500 w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* With SmartSync.One */}
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
                  With SmartSync.One:
                </h3>
              </div>

              <ul className="space-y-5">
                {[
                  "Automated synchronization",
                  "Payment-based ROI tracking",
                  "Smarter automation",
                  "Better client retention",
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
            SmartSync.One transforms GoHighLevel into a dental growth platform.
          </p>
        </div>
      </section>
      <section className="py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
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
              SmartSync.One helps agencies scale operations while improving
              reporting accuracy across multiple locations.
            </p>

            <p className="mt-8  mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              Reliable synchronization ensures confidence during client
              reporting.
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
            Unlock the Full Power of GoHighLevel for Dental Marketing
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            Connect real clinic activity with your automation and reporting
            workflows.
          </p>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            Start tracking treatments and payments automatically.
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
