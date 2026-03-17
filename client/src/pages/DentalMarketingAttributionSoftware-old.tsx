import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import SchemaMarkup, { getBreadcrumbSchema } from "@/components/SchemaMarkup";
import { getMetaTags } from "@/lib/seoMeta";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bot,
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
  FileText,
  Icon,
  MapPin,
  Phone,
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

const metrics = [
  { icon: Users, label: "New Patients Generated" },
  { icon: DollarSign, label: "Treatment Value Created" },
  { icon: Activity, label: "Procedures Completed" },
  { icon: CreditCard, label: "Payments Received" },
  { icon: TrendingUp, label: "Lifetime Patient Revenue" },
  { icon: CalendarCheck, label: "Revenue After Agency Onboarding" },
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
  "First payment received from each patient",
  "Lifetime payment value",
  "Revenue generated after agency onboarding.",
];
const steps2 = [
  "Follow up when treatment is proposed",
  "Recover missed appointments",
  "Reactivate inactive patients",
  "Trigger payment follow-ups",
];
const crmPlatforms = ["GoHighLevel", "HubSpot", "Salesforce"];

export default function DentalMarketingAttributionSoftwareOld() {
  const metaTags = getMetaTags("dentalmarketingattributionsoftware");

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
      <section className="hero-gradient pb-20 pt-4  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"></div>
              <h1
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
                data-testid="text-hero-headline"
              >
                Finally Prove Real ROI for{" "}
                <span className="text-primary">Dental Marketing Campaigns</span>
              </h1>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Leads and booked appointments don’t tell the full story.
              </p>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                SmartSync connects dental practice management systems directly
                with your CRM to track treatments, payments, and lifetime
                patient value generated after your agency begins managing a
                clinic.
              </p>
              <p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Show clients exactly how marketing contributes to production and
                revenue growth.
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
                src="/img/Smart-Sync-One.gif"
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
              With SmartSync You Can Track
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
                <span className="text-sm font-medium text-foreground text-left">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary
             bg-blue-100 px-4 py-1.5 rounded-full mb-4"
            >
              <AlertTriangle className="h-4 w-4" /> The Problem
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Dental Agencies Struggle to Prove Real Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Most dental marketing reports rely on:
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { icon: Users, label: "Lead counts" },
              { icon: Phone, label: "Call tracking" },
              { icon: CalendarCheck, label: "Appointment bookings" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-gradient-to-br from-primary-light to-blue-50 rounded-xl p-5 text-center"
              >
                <Icon className="h-6 w-6 text-primary mx-auto mb-2" />
                <p className="font-medium text-foreground">{label}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary-light to-blue-50 rounded-2xl p-8 text-center border border-primary/10">
            <p className="text-lg text-muted-foreground mb-2">
              But clinic owners ultimately care about one thing:
            </p>
            <p className="text-3xl font-extrabold text-primary">Revenue</p>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Without PMS data integration, agencies cannot accurately connect
              marketing performance to treatments or payments. This creates
              uncertainty during client reviews and renewals.
            </p>
          </div>
        </div>
      </section> */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* LEFT - PROBLEM */}
            <div className="bg-white border border-gray-200 rounded-2xl p-8">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
                <AlertTriangle className="h-4 w-4" /> The Problem
              </span>

              <p className="text-xl text-foreground mb-2 font-semibold">
                Dental Agencies Struggle to Prove Real Results
              </p>

              <p className="text-muted-foreground mb-6">
                Most dental marketing reports rely on :
              </p>

              <div className="space-y-4 grid lg:grid-cols-2 gap-5">
                {[
                  { icon: Users, label: "Lead counts" },
                  { icon: Phone, label: "Call tracking" },
                  { icon: CalendarCheck, label: "Appointment bookings" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 !mt-0"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <p className="font-medium text-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT - SOLUTION */}
            <div className="bg-blue-50 rounded-2xl p-8 border border-primary/10 ">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-white/70 px-4 py-1.5 rounded-full mb-6 w-fit">
                <CheckCircle2 className="h-4 w-4" /> The Solution
              </span>

              <p className="text-xl text-foreground mb-2 font-semibold">
                But clinic owners ultimately care about one thing
              </p>

              <p className="text-4xl font-extrabold text-primary mb-4">
                Revenue
              </p>

              <p className="text-muted-foreground max-w-lg">
                Without PMS data integration, agencies cannot accurately connect
                marketing performance to treatments or payments.
              </p>
              <p className="text-muted-foreground max-w-lg mt-2">
                This creates uncertainty during client reviews and renewals.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Zap className="h-4 w-4" /> The SmartSync Solution
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Connect Marketing Performance Directly to Clinic Revenue
            </h2>
            <p className="text-lg text-muted-foreground">
              SmartSync automatically synchronizes patient and financial
              activity from dental PMS systems into CRM platforms used by
              agencies.
            </p>
            <p className="text-lg text-muted-foreground">
              Once connected, every important clinic event becomes measurable.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
            {[
              { icon: Users, label: "Patient creation" },
              { icon: Calendar, label: "Appointment activity" },
              { icon: FileText, label: "Treatment proposals" },
              { icon: Stethoscope, label: "Completed procedures" },
              { icon: Wallet, label: "Payments collected" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-6 text-center"
              >
                <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-primary-light to-blue-50 inline-flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary mx-auto " />
                </div>
                <p className="font-medium text-foreground">{label}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6 text-center">
            All data updates automatically within minutes. No manual reporting
            required.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary 
             bg-gradient-to-br from-primary-light to-blue-50 px-4 py-1.5 rounded-full mb-4"
            >
              <Star className="h-4 w-4" /> True Revenue Attribution
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Measure Revenue Generated After Agency Onboarding
            </h2>
            <p className="text-lg text-muted-foreground">
              SmartSync introduces a powerful attribution capability designed
              specifically for dental agencies.
            </p>
            <p className="text-lg text-muted-foreground">
              When a clinic starts working with your agency, SmartSync
              automatically begins tracking payments generated afterward.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary-light to-blue-50 mx-auto max-w-[700px] rounded-2xl p-8   border-primary/10">
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
                    <span className="absolute left-4 top-8 w-[2px] h-full bg-primary"></span>
                  )}

                  {/* Number circle */}
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 z-10">
                    {i + 1}
                  </div>

                  {/* Text box */}
                  <div className="bg-white rounded-xl px-5 py-3 flex-1 ">
                    <p className="text-sm font-medium text-foreground">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
              This allows agencies to demonstrate measurable financial impact
              over time. Instead of discussing marketing activity, conversations
              shift toward business growth.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Target className="h-4 w-4" /> What You Can Attribute
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Track the Complete Patient Revenue Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              SmartSync allows agencies to understand how patients move through
              treatment and payment stages.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                desc: "Automatically record payments received and outstanding balances.",
              },
              {
                icon: TrendingUp,
                title: "Future Revenue Pipeline",
                desc: "Understand expected payments from upcoming treatments",
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
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-md text-muted-foreground mt-10 text-center">
            This creates a full visibility pipeline from acquisition to revenue
            realization.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Zap className="h-4 w-4" /> Built For Multi-Location Agencies
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Perfect for Agencies Managing Multiple Clinics
            </h2>
            <p className="text-lg text-muted-foreground">
              SmartSync simplifies reporting across multiple dental practices.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Activity, label: "Monitor clinic performance" },
              { icon: TrendingUp, label: "Compare revenue growth" },
              { icon: BarChart3, label: "Track production trends" },
              {
                icon: MapPin,
                label: "Identify underperforming locations",
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
          <p className="text-sm text-muted-foreground mt-6 text-center">
            Client reporting becomes faster and significantly more accurate.
          </p>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary 
             bg-blue-100 px-4 py-1.5 rounded-full mb-4"
            >
              <Bot className="h-4 w-4" /> Automation Powered Attribution
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Turn Attribution Data Into Automated Growth Campaigns
            </h2>
            <p className="text-lg text-muted-foreground">
              Because SmartSync syncs PMS activity into CRM systems, agencies
              can automate workflows using real clinic events.
            </p>
          </div>
          <div className="bg-white mx-auto max-w-[700px] rounded-2xl p-8   border">
            <p className="text-xl font-semibold  mt-4 mb-6 ">
              Examples include:
            </p>

            <div className="space-y-4">
              {steps2.map((step, i) => (
                <div
                  key={step}
                  className="flex items-start gap-4 relative pb-6 !mt-0"
                >
                  {/* Vertical line */}
                  {i !== steps2.length - 1 && (
                    <span className="absolute left-4 top-8 w-[2px] h-full bg-primary"></span>
                  )}

                  {/* Number circle */}
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold flex-shrink-0 z-10">
                    {i + 1}
                  </div>

                  {/* Text box */}
                  <div className="bg-gradient-to-br from-primary-light to-blue-50 rounded-xl px-5 py-3 flex-1 ">
                    <p className="text-sm font-medium text-foreground">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 text-center">
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
              <Server className="h-4 w-4" /> Supported Systems
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Works With Leading Dental PMS and CRM Platforms
            </h2>
          </div>
          <div className="card grid lg:grid-cols-[70%_30%] gap-8  rounded-2xl sm:p-8   border-primary/10">
            <div className="p-6  bg-gradient-to-br from-primary-light to-blue-50 rounded-lg">
              <h3 className="font-bold mb-2 p-2 text-lg">PMS Systems </h3>
              <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-3  mt-[18px] text-center ">
                {pmsSystems.map((system) => (
                  <div
                    className=" p-2 bg-white rounded-xl text-foreground text-md flex items-center gap-[5px]   font-semibold  transition-all"
                    key={system}
                  >
                   <CheckCircle2 className="h-4 w-4" /> {system}
                  </div>
                ))}
              </div>
            </div>
            <div  className="p-6  bg-gradient-to-br from-primary-light to-blue-50 rounded-lg">
              <h3 className="font-bold mb-2 p-2  text-lg">
                CRM Platforms 
              </h3>
              <div className="grid sm:grid-col-1  gap-4 mt-[18px] text-center">
                {crmPlatforms.map((platform) => (
                  <div
                    className="p-2 bg-white  rounded-xl text-foreground text-md flex items-center gap-[5px]   font-semibold  transition-all"
                    key={platform}
                  >
                   <CheckCircle2 className="h-4 w-4" /> {platform}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gap-8 grid md:grid-cols-2 ">
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
                <Sparkles className="h-4 w-4" />
                Why SmartSync is DIfferent
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Database size={24} className="text-primary mr-2" />
                Attribution Based on Real Clinic Data Not Estimates
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Many reporting tools depend on assumptions or manual
                tagging.SmartSync uses actual PMS activity.
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
                <Users className="h-4 w-4" />
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
                  SmartSync helps agencies move from service providers to
                  strategic growth partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop Reporting Leads. Start Reporting Revenue.
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Give your agency the ability to demonstrate measurable financial
            results using real clinic data. Join agencies already using
            SmartSync across 80+ dental clinics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary-dark"
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
