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
  Briefcase,
  Building2,
  Calendar,
  CalendarPlus,
  Check,
  CheckCircle,
  CheckCircle2,
  ChevronRight,
  Clock,
  CreditCard,
  Database,
  DollarSign,
  EyeOff,
  FileDown,
  FileText,
  Gauge,
  IndianRupee,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Lightbulb,
  Link,
  ListOrdered,
  Megaphone,
  Phone,
  Puzzle,
  RefreshCcw,
  RefreshCw,
  Server,
  Settings,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Star,
  TrendingUp,
  UserCheck,
  UserCog,
  Users,
  Wallet,
  Workflow,
  X,
  XCircle,
  Zap,
} from "lucide-react";
import FAQ from "@/components/FAQ";

const metrics = [
  { icon: RefreshCcw, label: "Real-Time PMS to CRM Synchronization" },
  { icon: IndianRupee, label: "Revenue and Treatment Tracking" },
  { icon: Zap, label: "CRM Automation Triggers" },
  { icon: BarChart3, label: "Agency ROI Reporting" },
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
  "Track marketing attribution",
  "Monitor treatment pipelines",
  "Analyze clinic growth",
  "Automize CRM workflows",
];
const crmPlatforms = ["GoHighLevel", "HubSpot", "Salesforce"];
const crmsetup = [
  "Required custom fields are created",
  "Opportunity modules are configured",
  "Patient and payment mapping is validated",
];
const crmUpdate = [
  "Lifetime Patient Payment",
  "First Payment Date",
  "Revenue After Agency Onboarding",
  "Appointment Activity",
  "Treatment Status",
];
const steps2 = [
  "Missed appointment recovery campaigns",
  "Treatment follow-up automation",
  "Patient reactivation workflows",
  "Payment reminders.",
];
const trackItems = [
  { icon: Link, title: "PMS connection assistance" },
  { icon: Settings, title: "CRM configuration" },
  { icon: SlidersHorizontal, title: "Custom field mapping" },
  { icon: TrendingUp, title: "Opportunity setup" },
  { icon: Shield, title: "Data verification" },
];
const faqItems = [
  {
    question: "How does dental PMS integration work?",
    answer:
      "Dental PMS integration works by connecting practice management systems like Dentrix or Open Dental with CRM platforms, allowing patient activity, appointments, treatments, and payments to sync automatically in real time.",
  },
  {
    question: "What is the SmartSync integration process?",
    answer:
      "The SmartSync integration process involves connecting your dental PMS, linking your CRM, automatically configuring data fields, and enabling real-time synchronization so all clinic activity flows seamlessly into your CRM.",
  },
  {
    question: "How long does it take to set up Dentrix CRM sync?",
    answer:
      "Dentrix CRM sync setup is typically completed during onboarding with guided support, and most users begin seeing synchronized data and updates within a short time after configuration.",
  },
  {
    question: "What data is synced during dental CRM automation integration?",
    answer:
      "Dental CRM automation integration syncs key data such as patient records, appointment updates, treatment status, payments, and expected future revenue to enable accurate reporting and automated workflows.",
  },
  {
    question: "Why is real-time synchronization important for dental CRM integration?",
    answer:
      " Real-time synchronization ensures that CRM systems always reflect the latest clinic activity, enabling accurate reporting, better automation, and improved decision-making without manual data updates.",
  },
];

export default function HowSmartSyncWorks() {
  const metaTags = getMetaTags("howsmartsyncworks");
  const faqSchema = getFAQSchema(faqItems);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://smartsync.one/" },
    {
      name: "How SmartSync Works",
      url: "https://smartsync.one/how-smartsync-works",
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
                See{" "}
                <span className="text-primary">How SmartSync Connects </span>{" "}
                Dental PMS Systems With CRM Platforms
              </h1>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                SmartSync automatically synchronizes patient activity,
                appointments, treatments, and payments between dental practice
                management systems and CRM platforms used by agencies and
                practices.
              </p>
              <p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                The setup process is guided and designed to minimize disruption
                while ensuring accurate data synchronization.
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
                src="/img/how-smartsync-works.webp"
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
              What SmartSync Enables
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
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <LayoutDashboard size={20} className=" text-primary" /> Overview
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Built to Bridge Clinic Operations and Marketing Systems
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Dental practices manage operational activity inside PMS platforms
              while agencies and teams manage communication and reporting inside
              CRM systems.
            </p>
            <p className="text-lg text-gray-600 mb-2">
              SmartSync acts as the connection layer between these systems.
            </p>
            <p className="text-lg text-gray-600 mb-2">
              When activity occurs inside the PMS, SmartSync automatically
              updates the CRM so marketing and reporting workflows remain
              accurate.
            </p>
            <p className="mt-8  mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              Updates typically synchronize within minutes.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary-light">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <ListOrdered size={20} className=" text-primary" /> Step by Step
              Process
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              How SmartSync Works
            </h2>
          </div>

          <div className="relative">
            {/* Vertical timeline line */}
            <div className="block absolute left-2 md:left-5 top-2 h-full w-[2px] bg-primary"></div>
            <div className="absolute left-[2px] md:left-[13px] top-2 translate-y-[-40%] translate-middle z-10">
              <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-md"></div>
            </div>
            <div className="absolute left-[2px] md:left-[13px] bottom-[-20px] translate-y-[-40%] translate-middle z-10">
              <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-md"></div>
            </div>

            <div className="space-y-12">
              {/* STEP 1 */}
              <div className="relative flex items-start gap-6">
                <div className="absolute left-[-8px] md:left-0 top-1/2 translate-y-[-40%] translate-middle z-10">
                  <div className=" w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-md">
                    1
                  </div>
                </div>

                <div className="ml-8 md:ml-16 w-full">
                  <div className="grid sm:grid-col-1 gap-6 mb-8">
                    <div className="bg-card rounded-2xl p-6 border shadow-sm hover:shadow-md transition-shadow">
                      {/* (original number block kept but hidden to avoid duplication) */}
                      <div className="hidden">
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                          <span className="h-6 w-6 text-white font-bold flex items-center justify-center">
                            1
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-2">
                        Connect Your Dental PMS
                      </h3>
                      <p className="text-gray-600 text-md">
                        During onboarding, SmartSync securely connects to your
                        dental practice management system.
                      </p>
                      <p className="text-gray-600 text-md mt-4 font-semibold">
                        Supported systems include:
                      </p>
                      <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-[18px] text-center mb-4">
                        {pmsSystems.map((system) => (
                          <div
                            className="rounded-xl text-foreground text-md flex items-center gap-[5px] font-semibold transition-all"
                            key={system}
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary" />{" "}
                            {system}
                          </div>
                        ))}
                      </div>
                      <p className="text-gray-600 text-md">
                        Our onboarding specialists assist throughout the
                        process.
                      </p>
                      <p className="mt-8 mx-auto text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                        No disruption to daily clinic operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="relative flex items-start gap-6 !mt-0">
                <div className="absolute left-[-8px] md:left-0  top-1/2 translate-y-[-40%] z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-md">
                    2
                  </div>
                </div>

                <div className="ml-8 md:ml-16 w-full">
                  <div className="grid sm:grid-col-1 gap-6 mb-8">
                    <div className="bg-card rounded-2xl p-6 border shadow-sm hover:shadow-md transition-shadow">
                      <div className="hidden">
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                          <span className="h-6 w-6 text-white font-bold flex items-center justify-center">
                            2
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-2">
                        Connect Your CRM Platform
                      </h3>
                      <p className="text-gray-600 text-md">
                        Next, SmartSync integrates with your CRM environment.
                      </p>
                      <p className="text-gray-600 text-md font-semibold mt-4">
                        Supported CRMs include:
                      </p>
                      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 mt-[18px] text-center mb-4">
                        {crmPlatforms.map((system) => (
                          <div
                            className="rounded-xl text-foreground text-md flex items-center gap-[5px] font-semibold transition-all"
                            key={system}
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary" />{" "}
                            {system}
                          </div>
                        ))}
                      </div>
                      <p className="mt-8 mx-auto text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                        This allows operational data from the clinic to flow
                        directly into marketing and reporting pipelines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="relative flex items-start gap-6 !mt-0">
                <div className="absolute left-[-8px] md:left-0  top-1/2 translate-y-[-40%] z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-md">
                    3
                  </div>
                </div>

                <div className="ml-8 md:ml-16 w-full">
                  <div className="grid sm:grid-col-1 gap-6 mb-8">
                    <div className="bg-card rounded-2xl p-6 border shadow-sm hover:shadow-md transition-shadow">
                      <div className="hidden">
                        <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                          <span className="h-6 w-6 text-white font-bold flex items-center justify-center">
                            3
                          </span>
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-foreground mb-2">
                        Automated CRM Configuration
                      </h3>

                      <p className="text-gray-600 text-md ">
                        SmartSync automatically prepares your CRM for
                        synchronization.
                      </p>

                      <div className="grid sm:grid-cols-2 gap-3 mt-[18px] mb-4 ">
                        <div>
                          <p className="text-gray-900 text-md font-semibold px-2">
                            During setup:
                          </p>
                          <div className="grid mt-[18px] mb-4 ">
                            {crmsetup.map((system) => (
                              <div
                                className="p-1 bg-white rounded-xl text-foreground text-md flex items-start gap-[5px] transition-all"
                                key={system}
                              >
                                <CheckCircle2 className="h-4 w-4 text-primary min-w-fit mt-1" />{" "}
                                {system}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <p className="text-gray-900 font-semibold text-md px-2">
                            Fields such as the following are continuously
                            updated:
                          </p>
                          <div className="grid sm:grid-cols-2 mt-[18px] mb-2 ">
                            {crmUpdate.map((system) => (
                              <div
                                className="p-2 bg-white rounded-xl text-foreground text-md flex items-start gap-[5px] transition-all"
                                key={system}
                              >
                                <CheckCircle2 className="h-4 w-4  text-primary mt-1 min-w-fit" />{" "}
                                {system}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <p className="mt-2 mx-auto text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] ">
                        This ensures accurate reporting without manual setup
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 4 */}
              <div className="relative flex items-start gap-2 !mt-0">
                <div className="absolute left-[-8px] md:left-0  top-1/2 translate-y-[-40%] z-10">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-md">
                    4
                  </div>
                </div>
                <div className="ml-8 md:ml-16 w-full">
                  {/* KEEP EVERYTHING SAME AS YOUR ORIGINAL STEP 4 */}
                  {/* (no content changes) */}
                  <div className="bg-card rounded-2xl p-6 border shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      Real-Time Data Synchronization Begins
                    </h3>
                    <p className="text-gray-600 text-md ">
                      Once setup is complete, SmartSync continuously
                      synchronizes important clinic activity.
                    </p>
                    <p className="text-gray-600 text-md ">
                      Updates typically appear inside CRM systems within minutes
                    </p>
                    <p className="text-gray-600 text-md mt-4 font-semibold">
                      Automatically synchronized data includes:
                    </p>
                    <div className="grid   lg:grid-cols-1 gap-3  mt-[18px]  mb-4 ">
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                        {[
                          {
                            icon: Activity,
                            label: "Patient Activity",
                            list: [
                              "New Patient Created",
                              "First Visit Date",
                              "Last Visit Date",
                            ],
                          },
                          {
                            icon: Calendar,
                            label: "Appointment Updates",
                            list: [
                              "Appointment Booked",
                              "Appointment Modified",
                              "Missed Appointment",
                              "Patient Showed",
                            ],
                          },
                          {
                            icon: Brain,
                            label: "Treatment Intelligence",
                            list: [
                              "Treatment Proposed",
                              "Pending Procedures",
                              "Treatment Completed",
                            ],
                          },
                          {
                            icon: Database,
                            label: "Financial Data",
                            list: [
                              "Payments Received",
                              "Outstanding Payments",
                              "Expected Future Payments",
                            ],
                          },
                        ].map(({ icon: Icon, label, list }) => (
                          <div
                            key={label}
                            className="rounded-lg  text-card-foreground  "
                          >
                            {/* <div className="w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary mx-auto" />
                      </div> */}

                            <p className="font-bold text-lg mb-4 text-foreground">
                              {label}
                            </p>

                            <div className="mb-2 space-y-1">
                              {list?.map((item, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <CheckCircle2 className="h-4 w-4 text-primary" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <p className="mt-2  mx-auto    text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] ">
                      CRM workflows can automatically trigger using these
                      updates.
                    </p>
                  </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Workflow size={20} className=" text-blue-600" />
              Automation Flow
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Power CRM Workflows Using Real Clinic Events
            </h2>
            <p className="text-lg text-gray-600 ">
              SmartSync does not replace your CRM automation.
            </p>
            <p className="text-lg font-semibold text-primary my-2">
              Instead, it strengthens it.
            </p>
            <p className="text-lg text-gray-600">
              When PMS activity syncs into CRM systems, existing workflows
              automatically activate.
            </p>
          </div>
          <div className="">
            <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-6">
              Examples include:
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
              Automation becomes aligned with real patient behavior.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
              <ShieldCheck size={20} className=" text-blue-600" /> Data
              Architecture Trust
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Designed to Keep Your Systems in Control
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              SmartSync operates as a synchronization layer between systems.
            </p>
            <p className="text-lg text-gray-600 mb-2">
              SmartSync does not store long-term patient data.
            </p>
            <p className="text-lg text-gray-600 mb-2">
              Instead, operational updates synchronize directly between PMS and
              CRM environments.
            </p>
            <p className="mt-8  mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
              This architecture allows clinics and agencies to maintain control
              of their systems while benefiting from automated integration.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
              <Gauge size={18} />
              <span className="text-blue-600">Performance & Reliability</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Continuous Synchronization You Can Depend On
            </h2>

            <p className="text-lg text-gray-600 mb-4">
              SmartSync monitors synchronization activity continuously.
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-4">
            Typical update timing:
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Data reflected within minutes
              </h3>
            </div>

            <div className="rounded-lg  bg-blue-50/60 text-card-foreground shadow-sm hover:shadow-md transition-shadow  p-4 flex gap-4 items-center ">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <RefreshCw className="h-6 w-6 text-primary" />
              </div>

              <h3 className="font-medium text-foreground">
                Automated syncing throughout the day
              </h3>
            </div>
          </div>
          <p className="text-lg text-gray-600 my-4 mt-8 text-center">
            This ensures CRM reporting always reflects current clinic
            operations.
          </p>

          <p className="mt-10 mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            Reliable synchronization reduces manual reporting errors.
          </p>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <LifeBuoy size={20} />
              <span className="text-primary">Onboarding Support </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
              Guided Setup From Start to Finish
            </h2>

            <p className="text-lg text-gray-600 ">
              SmartSync onboarding specialists assist agencies and clinics
              during implementation.
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-6">
            Support includes:
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
            Most customers begin seeing synchronized activity shortly after
            onboarding.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Puzzle size={18} className="" /> Who Uses SmartSync
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Designed for Agencies and Growing Dental Organizations
            </h2>
          </div>
          <p className="text-lg font-semibold text-gray-900 text-center mb-4">
            SmartSync is used by:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 mb-10">
            {[
              { icon: Megaphone, label: "Dental marketing agencies" },
              {
                icon: Building2,
                label: "Multi-location dental groups",
              },
              {
                icon: UserCog,
                label: "Practice consultants",
              },
              {
                icon: TrendingUp,
                label: "Growth-focused clinics",
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
            Currently supporting synchronization across{" "}
            <strong className="text-primary"> 80+ dental clinics</strong>
          </p>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap md:flex-nowrap gap-10 items-center">
            <div className="mb-8 w-full md:w-[50%]">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
                <Link size={18} />
                Why SmartSync Works Differently
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-problem-title"
              >
                More Than an Integration Tool
              </h2>
              <p className="text-lg text-gray-600">
                SmartSync transforms operational PMS data into actionable
                intelligence.
              </p>

              <p className="mt-8  mx-auto   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                It becomes the operational bridge between marketing and
                production.
              </p>
            </div>
            <div className="bg-white w-full md:w-[50%]  mx-auto max-w-[700px] rounded-2xl p-8   border-primary/10">
              <p className="text-xl font-semibold  mt-4 mb-6 ">
                Customers use SmartSync to:
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
        <div className="max-w-4xl  mx-auto px-4">
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
            Ready to Connect Your PMS and CRM?
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-2">
            See how SmartSync can automate reporting and unlock real-time
            revenue insights across your clinics.
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
