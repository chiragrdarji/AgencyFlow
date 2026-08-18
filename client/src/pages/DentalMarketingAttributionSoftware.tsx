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
  Bot,
  Building2,
  Calendar,
  CalendarCheck,
  CheckCircle,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock,
  CreditCard,
  Database,
  DollarSign,
  FileBarChart,
  FileText,
  Icon,
  LayoutDashboard,
  Lightbulb,
  MapPin,
  Phone,
  RefreshCw,
  Server,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
  Wallet,
  Zap,
} from "lucide-react";
import FAQ from "@/components/FAQ";

const metrics = [
  { icon: Users, label: "New Patients Generated" },
  { icon: DollarSign, label: "Treatment Value Created" },
  { icon: Activity, label: "Procedures Completed" },
  { icon: CreditCard, label: "Payments Received" },
  { icon: TrendingUp, label: "Lifetime Patient Revenue" },
  { icon: CalendarCheck, label: "Revenue After Agency Onboarding" },
];
const pmsSystems = [
  "Open Dental",
  "Dentrix",
  "Dentrix Ascend",
  "Eaglesoft",
  "Curve Hero",
  "Denticon",
  "eClinicalWorks",
  "Dolphin",
  "OrthoTrac",
  "PracticeWorks",
  "Athena",
  "Cloud9",
  "Dentrix Enterprise",
  "Modernizing Medicine",
  "NextGen Office"
];
const steps = [
  "First payment received from each patient",
  "Lifetime payment value",
  "Revenue generated after agency onboarding.",
];
const steps2 = [
  "Follow up when treatment is proposed",
  "Recover missed appointments",
  "Reactivate inactive patients",
  // "Trigger payment follow-ups",
];

const trackItems = [
  { icon: UserPlus, title: "Patient creation" },
  { icon: Calendar, title: "Appointment activity" },
  { icon: ClipboardList, title: "Treatment proposals" },
  { icon: Stethoscope, title: "Completed procedures" },
  { icon: CreditCard, title: "Payments collected" },
];
const crmPlatforms = ["GoHighLevel", "HubSpot", "Salesforce"];

const faqItems = [
  {
    question: "What is dental marketing attribution software?",
    answer:
      "Dental marketing attribution software helps agencies track how their marketing efforts generate real clinic revenue by connecting campaigns directly to treatments, payments, and lifetime patient value using dental PMS data.",
  },
  {
    question: "How can I prove dental marketing ROI to my clients?",
    answer:
      " You can prove dental marketing ROI by integrating CRM platforms with dental practice management systems, allowing you to track actual revenue, procedures, and payments generated after your agency begins managing a clinic.",
  },
  {
    question: "What metrics are important for dental ROI tracking?",
    answer:
      "The most important metrics for dental ROI tracking include new patients, treatment value, completed procedures, payments received, and lifetime patient revenue, which together provide a clear view of marketing performance.",
  },
  {
    question: "Does SmartSync.One integrate with Dentrix and other PMS platforms?",
    answer:
      "SmartSync.One integrates with leading dental PMS platforms like Dentrix, Open Dental, and others, while also connecting with CRMs such as GoHighLevel, HubSpot, and Salesforce for seamless reporting.",
  },
  {
    question:
      "Why is dental revenue analytics better than traditional marketing reports?",
    answer:
      "Dental revenue analytics is more effective than traditional reports because it uses real clinic data like treatments and payments instead of just leads and bookings, giving agencies a true picture of financial impact and ROI.",
  },
];
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Dental Marketing Attribution Software for Agencies",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: "https://smartsync.one/dental-marketing-attribution",
  description:
    "Track real patient revenue generated from dental marketing campaigns using PMS data. SmartSync.One connects Dentrix, Open Dental and other systems with CRM platforms to prove true agency ROI.",

  publisher: {
    "@type": "Organization",
    name: "SmartSync.One",
    url: "https://smartsync.one",
  },
  featureList: [
    "Track new patients generated",
    "Measure treatment value created",
    "Monitor procedures completed",
    "Track payments received",
    "Calculate lifetime patient revenue",
    "Revenue attribution after agency onboarding",
    "Real-time PMS to CRM synchronization",
    "Automated reporting with no manual work",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "50",
  },
};

export default function DentalMarketingAttributionSoftware() {
  const metaTags = getMetaTags("dentalmarketingattributionsoftware");
  const faqSchema = getFAQSchema(faqItems);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://smartsync.one/" },
    {
      name: "Dental Marketing Attribution Software",
      url: "https://smartsync.one/dental-marketing-attribution",
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
                Finally Establish True ROI for{" "}
                <span className="text-primary">Dental Marketing Campaigns</span>
              </h1>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Leads and appointments booked do not tell everything.
              </p>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                SmartSync.One provides a direct link from dental practice management
                systems to your CRM to enable tracking of treatments, payments
                and lifetime patient value once your agency takes on managing a
                clinic.
              </p>
              <p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Let clients see precisely how marketing is helping the
                production and revenue grow.
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
            <div className="relative ">
              {/* <div className="p-6 bg-gradient-to-br from-primary-light to-blue-50 rounded-lg">
                <img
                  src="/img/dental-marketying-campaign.webp"
                  alt="Dentrix and Open Dental to GoHighLevel patient data sync workflow"
                />
              </div> */}
              <img
                src="/img/dental-marketing-campaign.webp"
                alt="dental-marketing-campaign"
                className=" rounded-lg"
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
              With SmartSync.One You Can Track
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
          <div className="text-center mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 sm:gap-4 px-4 sm:px-8 py-1.5 sm:py-3.5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-full shadow-sm">
              <span className="text-sm md:text-lg font-bold text-primary">
                Problem
              </span>
              <span className="text-gray-400 text-xl">→</span>
              <span className="text-sm md:text-lg font-bold text-primary">
                Expectation
              </span>
              <span className="text-gray-400 text-xl">→</span>
              <span className="text-sm md:text-lg font-bold text-primary">
                Solution
              </span>
            </div>
          </div>

          <div className="relative grid lg:grid-cols-3 gap-4 lg:gap-6 items-stretch">
            {/* Card 1 - Problem (light red/orange) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative z-10">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 bg-blue-100 px-4 py-1.5 rounded-full mb-6">
                <AlertTriangle size={18} className="text-primary" />
                The Problem
              </div>

              <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-5">
                Dental Boards Have a Hard Time Proving Actual Outcomes:
              </h2>

              <p className="text-lg text-gray-600 mb-7">
                Most dental marketing report on the following:
              </p>

              <ul className="space-y-5">
                {[
                  { icon: BarChart3, text: "Lead counts" },
                  { icon: Phone, text: "Call tracking" },
                  { icon: Calendar, text: "Appointment bookings" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-lg text-gray-700"
                    >
                      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex-shrink-0">
                        <Icon size={22} strokeWidth={2} />
                      </div>
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Card 2 - Expectation (light blue) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative z-10">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 bg-blue-100 px-4 py-1.5 rounded-full mb-6">
                <Target size={18} className="text-blue-600" />
                Expectation
              </div>

              <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-4">
                But practice owners only care about one thing
              </h2>

              <div className="my-4">
                <div className="text-xl lg:text-2xl font-bold text-primary  leading-none">
                  Revenue
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Without integration of data from the PMS, agencies are unable to
                precisely tie marketing performance back to treatments or
                payments.
              </p>

              <p className="text-lg font-semibold text-gray-900">
                This creates strain at account reviews and renewals.
              </p>
            </div>

            {/* Card 3 - Solution (light green) */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6  lg:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
                <Zap size={18} className="text-primary" />
                The SmartSync.One Solution
              </div>

              <h2 className="text-2xl font-bold text-gray-900 tracking-tight mb-6">
                Connect Marketing Performance
                <br className="hidden sm:block" /> Directly to Clinic Revenue
              </h2>

              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  SmartSync.One automatically synchronizes patient and financial
                  activity from dental PMS systems into CRM platforms used by
                  agencies.
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Once connected, every critical event in the clinic can be
                  quantified.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12  bg-primary-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="">
            <h3 className="text-center text-xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8">
              SmartSync.One tracks:
            </h3>

            <div className="relative w-full">
              <div className="hidden md:block absolute top-10 left-[8%] right-[8%] h-[3px] bg-blue-200"></div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6 relative">
                {trackItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center relative"
                  >
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-sm z-10">
                      <item.icon size={32} strokeWidth={2} />
                    </div>

                    <h4 className="mt-5 text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
              <p className="mt-10    text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4">
                All data updates automatically within minutes. No manual
                reporting required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-20  bg-primary-light">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
         
          <div className="text-center mb-16 md:mb-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
              <Zap size={18} className="text-blue-600" />
              <span>The SmartSync Solution</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Connect Marketing Performance
              <br className="hidden sm:block" /> Directly to Clinic Revenue
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-600">
              <p>
                SmartSync automatically synchronizes patient and financial
                activity from dental PMS systems into CRM platforms used by
                agencies.
              </p>
              <p>
                Once connected, every important clinic event becomes measurable.
              </p>
            </div>
          </div>
          <div className="">
           
            <h3 className="text-center text-xl md:text-3xl font-semibold text-gray-800 mb-6 md:mb-8">
              SmartSync tracks:
            </h3>

            
            <div className="relative w-full">
             
              <div className="hidden md:block absolute top-10 left-[8%] right-[8%] h-[3px] bg-blue-200"></div>

              <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6 relative">
                {trackItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center relative"
                  >
                   
                    <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-sm z-10">
                      <item.icon size={32} strokeWidth={2} />
                    </div>

                    
                    <h4 className="mt-5 text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

         
          <div className="mt-10  mx-auto   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4">
            All data updates automatically within minutes.
            <br className="sm:hidden" /> No manual reporting required.
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap md:flex-nowrap gap-10 items-center">
            <div className="mb-8 w-full md:w-[50%]">
              <span
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary 
             bg-gradient-to-br from-primary-light to-blue-50 px-4 py-1.5 rounded-full mb-4"
              >
                <Star size={18} /> True Revenue Attribution
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-problem-title"
              >
                Measure Revenue Generated After Agency Onboarding
              </h2>
              <p className="text-lg text-gray-600">
                SmartSync.One introduces a powerful attribution capability designed
                specifically for dental agencies.
              </p>
              <p className="text-lg text-gray-600">
                When a clinic starts working with your agency, SmartSync.One
                automatically begins tracking payments generated afterward.
              </p>
              <p className="mt-8  mx-auto   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                This allows agencies to demonstrate measurable financial impact
                over time. Instead of discussing marketing activity,
                conversations shift toward business growth.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-full md:w-[50%]  mx-auto max-w-[700px] rounded-2xl p-8   border-primary/10">
              <p className="text-xl font-semibold  mt-4 mb-6 ">
                Inside the CRM opportunity module you can instantly see:
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
                Schedule a quick demo and see SmartSync.One in action.
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
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
              <Target size={18} className=" text-blue-600" /> What You Can
              Attribute
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Track the Complete Patient Revenue Journey
            </h2>
            <p className="text-lg text-gray-600">
              SmartSync.One allows agencies to understand how patients move through
              treatment and payment stages.
            </p>
          </div>
          <div className="grid sm:grid-col-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: UserPlus,
                title: "Patient Acquisition",
                desc: "Identify new patients entering the practice.",
              },
              {
                icon: ClipboardList,
                title: "Treatment Opportunity",
                desc: "Monitor treatment proposed and pending procedures.",
              },
              {
                icon: CheckCircle,
                title: "Treatment Completion",
                desc: "Track procedures completed inside the PMS.",
              },
              {
                icon: DollarSign,
                title: "Payment Collection",
                desc: "Automatically record payments received.",
              },
              {
                icon: TrendingUp,
                title: "Future Revenue Pipeline",
                desc: "Expect payments from treatments you know are coming",
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
          <p className="mt-10    text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4">
            This provides a complete visibility pipe line from acquisition to
            revenue recognition.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Zap size={18} className="" /> Built For Multi-Location Agencies
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Manage Reporting Across Multiple Clinics
            </h2>
            <p className="text-lg text-gray-600">
              SmartSync.One makes it easy to access reporting and dashboards for
              each clinic from their individual accounts.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 mb-10">
            {[
              {
                icon: FileBarChart,
                title: "Access clinic performance reports",
                description:
                  "View detailed reporting  for each clinic separately.",
              },
              {
                icon: LayoutDashboard,
                title: "Secure individual clinic dashboards",
                description:
                  "Each clinic maintains its own dedicated dashboard and  data.",
              },
              {
                icon: BarChart3,
                title: "Track production and business metrics",
                description:
                  "Monitor  key performance indicators within each clinic account.",
              },
              {
                icon: Building2,
                title: "Manage multiple clinic accounts",
                description:
                  "Easily switch between clinic accounts to review reporting.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6  "
              >
                <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary mx-auto " />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            View clinic-specfic dashboards and reports with ease.
          </p>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
              <Bot size={20} className=" text-blue-600" /> Automation Powered
              Attribution
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Turn Attribution Data Into Automated Growth Campaigns
            </h2>
            <p className="text-lg text-gray-600">
              Because SmartSync.One syncs PMS activity into CRM systems, agencies
              can automate workflows using real clinic events.
            </p>
          </div>
          <div className="">
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
            <p className="mt-10    text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4">
              Marketing automation becomes directly connected to real patient
              outcomes.
            </p>
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
              Works With Leading Dental PMS and CRM Platforms
            </h2>
          </div>
          <div className="card grid lg:grid-cols-[70%_30%] gap-8  rounded-2xl sm:p-8   border-primary">
            <div className="p-6  bg-primary-light rounded-lg">
              <h3 className="font-bold mb-2 p-2 text-lg">PMS Systems </h3>
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
          <div className="gap-8 grid md:grid-cols-2 ">
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
                <Sparkles size={18} />
                Why SmartSync.One is DIfferent
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Database size={24} className="text-primary mr-2" />
                Attribution Based on Real Clinic Data Not Estimates
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Many reporting tools depend on assumptions or manual
                tagging.SmartSync.One uses actual PMS activity.
              </p>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                That means attribution is based on:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Real appointments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Real treatments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Real payments.</span>
                </div>

                <p className="text-gray-600">
                  Agencies gain confidence presenting performance results backed
                  by operational data.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
                <Users size={18} />
                Customer Impact
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <UserCheck size={24} className="text-primary mr-2" />
                Help Agencies Retain Clients Longer
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                When clinics clearly see revenue growth connected to marketing
                efforts:
              </p>
              <div className="space-y-4">
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Client trust increases</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Reporting becomes easier
                  </span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Contract renewals improve.
                  </span>
                </div>

                <p className="text-gray-600">
                  SmartSync.One helps agencies move from service providers to
                  strategic growth partners.
                </p>
              </div>
            </div>
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
            Stop Reporting Leads. Start Reporting Revenue.
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Give your agency the ability to demonstrate measurable financial
            results using real clinic data. Join agencies already using
            SmartSync.One across 120+ dental clinics.
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
