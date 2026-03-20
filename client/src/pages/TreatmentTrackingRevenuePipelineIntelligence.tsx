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
  EyeOff,
  FileBarChart,
  FilePlus,
  FileText,
  GitBranch,
  History,
  Layers,
  LayoutDashboard,
  LifeBuoy,
  Lightbulb,
  LineChart,
  ListTodo,
  Network,
  Phone,
  Route,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
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
  { icon: FilePlus, label: "Treatment Proposed" },
  { icon: Clock, label: "Pending Procedures" },
  { icon: CheckCircle2, label: "Treatment Completed" },
  { icon: DollarSign, label: "Expected Future Payments" },
  { icon: History, label: "Patient Treatment History" },
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
  "Unscheduled procedures",
  "Delayed treatments",
  "Lost production opportunities",
];
const trackItems = [
  { icon: LineChart, title: "Upcoming production value" },
  { icon: ListTodo, title: "Treatment backlog" },
  { icon: BarChart3, title: "Future revenue potential" },
];
const crmPlatforms = ["GoHighLevel", "HubSpot", "Salesforce"];
const steps2 = [
  "Follow-up campaigns after treatment proposals",
  "Reminder sequences for pending procedures",
  "Patient education workflows",
  "Revenue recovery automation",
];

const faqItems = [
  {
    question: "What is dental treatment tracking software?",
    answer:
      "  Dental treatment tracking software helps clinics and agencies monitor treatment proposals, pending procedures, completed treatments, and related payments by syncing data directly from dental PMS systems.",
  },
  {
    question: "How does dental revenue pipeline software improve practice growth?",
    answer:
      " Dental revenue pipeline software improves growth by identifying unscheduled or delayed treatments, allowing teams to recover lost opportunities and forecast future revenue more accurately.",
  },
  {
    question: "What are pending procedures in dental analytics?",
    answer:
      " Pending procedures in dental analytics refer to treatments that have been proposed but not yet scheduled or completed, often representing significant unrealized revenue for the practice.",
  },
  {
    question: " Can SmartSync help with dental treatment acceptance tracking?",
    answer:
      " Yes, SmartSync enables dental treatment acceptance tracking by monitoring which proposed treatments are completed and which remain pending, helping improve conversion and patient follow-up strategies.",
  },
  {
    question: "How does SmartSync support dental production forecasting?",
    answer:
      " SmartSync supports dental production forecasting by analyzing pending treatments and scheduled procedures to estimate expected future payments and overall revenue potential.",
  },
];

export default function TreatmentTrackingRevenuePipelineIntelligence() {
  const metaTags = getMetaTags("treatmenttrackingrevenuepipelineintelligence");
  const faqSchema = getFAQSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://smartsync.one/" },
    {
      name: "Treatment Tracking & Revenue Pipeline Intelligence",
      url: "https://smartsync.one/treatment-tracking-software",
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
                Turn Treatment Data Into Predictable{" "}
                <span className="text-primary">Dental Revenue Growth </span>
              </h1>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Most dental revenue opportunities already exist inside the
                practice they just remain unscheduled or incomplete.
              </p>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                SmartSync connects dental PMS systems with your CRM to track
                treatment proposals, pending procedures, completed treatments,
                and expected payments automatically.
              </p>
              <p
                className="text-lg text-gray-600 mb-5 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                Understand where revenue is being created and where it is being
                lost.
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
                src="/img/treatment-tracking-software.webp"
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
              Track Treatment Intelligence Automatically
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap md:flex-nowrap gap-10 items-center">
            <div className="mb-8 w-full md:w-[50%]">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
                <EyeOff size={18} />
                The Hidden Revenue Problem
              </span>
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-problem-title"
              >
                Millions in Treatment Revenue Often Go Unscheduled
              </h2>
              <p className="text-lg text-gray-600">
                Dental practices frequently propose treatments that patients
                delay or never schedule.
              </p>
              <p className="text-lg text-gray-600">
                Marketing performance alone cannot solve growth challenges
                without understanding treatment conversion.
              </p>
              <p className="mt-8  mx-auto   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                SmartSync helps uncover these opportunities.
              </p>
            </div>
            <div className="bg-primary-light w-full md:w-[50%]  mx-auto max-w-[700px] rounded-2xl p-8   border-primary/10">
              <p className="text-xl font-semibold  mt-4 mb-6 ">
                Without visibility into treatment pipelines, clinics and
                agencies struggle to identify:
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
      <section className="py-20  bg-primary-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
              <Bot size={20} />
              <span className="font-medium">
                SmartSync Revenue Pipeline Intelligence
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Automatically Track the Entire Treatment Lifecycle
            </h2>
            <p className="text-lg text-gray-600">
              SmartSync continuously synchronizes treatment activity from
              supported dental practice management systems.
            </p>
            <p className="text-lg text-gray-600">
              Every update becomes visible inside SmartSync analytics and CRM
              opportunities.
            </p>
            <p className="text-lg text-gray-600">
              Monitor treatment progression from proposal to payment.
            </p>
          </div>

          <div className="space-y-12 max-w-5xl px-4 mx-auto grid sm:grid-cols-2 gap-4 ">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className=" items-start gap-4 mb-4">
                <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 my-3">
                    Treatment Proposed
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="flex items-start space-x-3">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 min-w-fit"
                        />
                        <span className="text-gray-700">
                          Identify treatment plans created for patients.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-start space-x-3">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 min-w-fit"
                        />
                        <span className="text-gray-700">
                          Understand potential production opportunities entering
                          the pipeline
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white  rounded-2xl p-8 shadow-sm !mt-0 ">
              <div className="  gap-4 mb-4">
                <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                  <Calendar className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 my-3">
                    Pending Procedures
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="flex items-start space-x-3">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 min-w-fit"
                        />
                        <span className="text-gray-700">
                          Detect treatments that remain unscheduled or
                          incomplete.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-start space-x-3">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 min-w-fit"
                        />
                        <span className="text-gray-700">
                          These opportunities often represent significant
                          unrealized revenue.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex items-start space-x-3">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 min-w-fit"
                        />
                        <span className="text-gray-700">
                          Agencies and clinics can use this insight to trigger
                          follow-ups or reactivation campaigns.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white  rounded-2xl p-8 shadow-sm !mt-0">
              <div className=" mb-4">
                <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                  <FileText className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 my-3">
                    Treatment Completed
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="flex  items-start space-x-3">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 min-w-fit "
                        />
                        <span className="text-gray-700">
                          Track procedures completed inside the PMS
                          automatically.
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex  items-start space-x-3">
                        <ChevronRight
                          size={18}
                          className="text-primary mt-1 min-w-fit"
                        />
                        <span className="text-gray-700">
                          Measure operational performance and treatment
                          acceptance trends.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white  rounded-2xl p-8 shadow-sm  !mt-0">
              <div className=" mb-4">
                <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                  <DollarSign className="text-primary" size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 my-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      Payment Realization
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="flex items-start space-x-3">
                        <ChevronRight
                          size={18}
                          className="text-primary min-w-fit mt-1"
                        />
                        <span className="text-gray-700">
                          Monitor payments collected after treatments are
                          completed and understand revenue conversion
                          performance.
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <TrendingUp size={16} />
              <span className="text-primary">Forecast Future Revenue </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-4">
              Understand Upcoming Production Before It Happens
            </h2>

            <p className="text-lg text-gray-600 ">
              SmartSync calculates expected future payments based on pending
              procedures and scheduled treatments.
            </p>
          </div>

          <p className="text-lg font-semibold text-gray-900 mt-4 text-center mb-6">
            Practices and agencies gain visibility into:
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
            This helps teams plan growth strategies more effectively.
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
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <TrendingUp size={20} />
              <span className="font-semibold text-sm">
                Powerful for Marketing Agencies
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Identify Growth Opportunities Beyond Lead Generation
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Dental marketing agencies often focus on acquiring new patients.
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
              SmartSync allows agencies to also identify revenue opportunities
              already inside the practice.
            </p>
          </div>

          <p className="font-bold  p-2 text-xl text-center mb-6">
            Agencies can help clinics:
          </p>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <ShieldCheck className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Recover unscheduled treatments
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Clock className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Improve treatment acceptance
              </h3>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Reactivate patients needing procedures
              </h3>
            </div>
          </div>
          <p className="mt-8  mx-auto max-w-max   text-gray-600 text-lg font-medium bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)]">
            This strengthens agency positioning as a growth partner rather than
            a lead provider.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
              <Bot size={20} className=" text-blue-600" />
              Automate Treatment Follows UPs
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Trigger CRM Campaigns Using Treatment Activity
            </h2>
            <p className="text-lg text-gray-600">
              SmartSync synchronizes treatment updates into CRM platforms where
              automation workflows can be triggered.
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
              Automation becomes aligned with real clinical opportunities.
            </p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gap-8 grid md:grid-cols-2 ">
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
                <UserRound size={18} />
                Patient Context Included
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Route size={24} className="text-primary mr-2" />
                Understand Treatment Within the Patient Journey
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                SmartSync also synchronizes important lifecycle data.
              </p>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Track alongside treatment activity:
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">First Visit Date</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Last Visit Date</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Next Appointment Date</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Patient Payment History</span>
                </div>

                <p className="text-gray-600">
                  This provides complete context for smarter outreach and
                  retention strategies.
                </p>
              </div>
            </div>
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-4">
                <Building2 size={18} />
                Multi Location Visibility
              </span>
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Network size={24} className="text-primary mr-2" />
                Monitor Treatment Performance Across Multiple Clinics
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Agencies and DSOs managing multiple locations gain centralized
                insight into treatment pipelines.
              </p>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Compare:
              </p>
              <div className="space-y-4">
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Treatment proposal volume
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Completion trends</span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Revenue realization across clinics
                  </span>
                </div>

                <p className="text-gray-600">
                  Identify operational gaps quickly.
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
              <Server size={18} /> Supported Systems
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Works With Leading Dental PMS Platforms
            </h2>
          </div>
          <div className="card grid lg:grid-cols-[70%_30%] gap-8  rounded-2xl sm:p-8   border-primary">
            <div className="p-6  bg-primary-light rounded-lg">
              <h3 className="font-bold mb-2 p-2 text-lg">
                Supported systems include:{" "}
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
              <h3 className="font-bold mb-2 p-2  text-lg">CRM Integrations</h3>
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
      <section className="py-16 px-6 bg-primary-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-4 border border-primary">
              <Sparkles size={18} />
              <span className="font-medium">Why SmartSync</span>
            </span>
            <h2
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              data-testid="text-problem-title"
            >
              Move From Reactive Reporting to Revenue Intelligence
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
                  "Treatment opportunities remain hidden",
                  "Follow-ups happen manually",
                  "Revenue forecasting is difficult",
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
                  "Treatment pipelines become visible",
                  "Automation improves conversion",
                  "Revenue becomes predictable",
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
            SmartSync bridges clinic operations and growth strategy.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto">
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
            Unlock Revenue Already Inside the Practice
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-2">
            Track treatment opportunities, recover lost production, and forecast
            future payments automatically.
          </p>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto mb-8">
            Join agencies and clinics already using SmartSync across 80+ dental
            practices.
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
