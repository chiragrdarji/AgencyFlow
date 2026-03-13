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
  CalendarPlus,
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
const crmPlatforms = ["GoHighLevel", "HubSpot", "Salesforce"];

export default function DentalAnalyticsDashboard() {
  const metaTags = getMetaTags("dentalanalyticsdashboard");

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
                Dental Analytics Dashboard Built for{" "}
                <span className="text-primary">
                   Agencies  </span> and  <span className="text-primary">Multi-Location Practices
                </span>
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
              Track Key Metrics Automatically
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
            <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-2 lg:gap-4 items-center relative">
              <div className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
                  <AlertTriangle size={20} className="text-blue-600" />
                  The Problem
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight mb-5">
                  Dental Data Exists Everywhere But Insights Are Missing
                </h2>

                <p className="text-lg text-gray-600 mb-2">
                  Dental practices generate large amounts of operational data every day inside their PMS systems.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                 However, agencies and clinic owners often struggle with:
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
                      <li
                        key={i}
                        className="text-lg text-gray-700 !mt-2"
                      >
                        <span>{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
                <p className="text-lg font-semibold text-gray-900 mt-4">
                  Without centralized analytics, understanding real growth becomes difficult.
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
                  Real-Time Analytics Directly From Your PMS
                </h2>

                <p className="text-lg text-gray-600 mb-4">
                  SmartSync connects directly with supported dental practice management systems and continuously synchronizes operational updates.
                </p>

                <p className="text-lg text-gray-600 mb-4">
                  Analytics update automatically as activity occurs inside the clinic.
                </p>
                <p className="text-lg text-gray-600 mb-4">
                  There is no manual export or reporting process required.
                </p>
                <p className="text-lg font-semibold text-gray-900 mt-4">
                  Data becomes instantly usable for agencies, consultants, and practice owners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 bg-primary-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
            <BarChart3 size={20} />
            <span className="font-medium">Core Analytics Metrics</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Monitor Clinic Performance From One Dashboard
          </h2>
          <p className="text-lg text-gray-600">
            SmartSync analytics provide visibility across patient acquisition, treatment pipeline, and revenue performance.
          </p>
        </div>

        <div className="space-y-12 max-w-5xl mx-auto grid grid-cols-3 gap-4 ">
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <div className=" items-start gap-4 mb-4">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Users className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 my-3">Patient Growth Analytics</h3>
                <p className="text-gray-600 mb-4">Understand how practices are growing over time.</p>
                <p className="text-gray-700 font-medium mb-3">Track:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0095FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">New Patients Added</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0095FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">First Visit Activity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0095FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Patient Visit Trends</span>
                  </li>
                </ul>
                <p className="text-gray-600 mt-4">Identify marketing performance and patient acquisition effectiveness.</p>
              </div>
            </div>
          </div>

          <div className="bg-white  rounded-2xl p-8 shadow-sm !mt-0">
            <div className="  gap-4 mb-4">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <Calendar className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 my-3">Appointment Analytics</h3>
                <p className="text-gray-600 mb-4">Monitor scheduling performance across locations.</p>
                <p className="text-gray-700 font-medium mb-3">Track:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0095FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">New Appointments Created</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0095FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Appointment Changes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0095FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Missed Appointments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0095FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Patient Show Rate</span>
                  </li>
                </ul>
                <p className="text-gray-600 mt-4">Agencies and clinics can quickly identify operational inefficiencies.</p>
              </div>
            </div>
          </div>

          <div className="bg-white  rounded-2xl p-8 shadow-sm !mt-0">
            <div className=" mb-4">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <FileText className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 my-3">Treatment Performance Analytics</h3>
                <p className="text-gray-600 mb-4">Understand treatment acceptance and production opportunities.</p>
                <p className="text-gray-700 mb-3">SmartSync tracks:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0095FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Treatment Proposed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0095FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Pending Procedures</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0095FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Treatment Completed</span>
                  </li>
                </ul>
                <p className="text-gray-600 mt-4">This helps identify unscheduled or delayed treatments impacting revenue.</p>
              </div>
            </div>
          </div>
       </div> 
       <div className="space-y-12 max-w-5xl mx-auto grid grid-cols-2 gap-4 mt-4">         
          <div className="bg-white  rounded-2xl p-8 shadow-sm border-2 border-[#0095FF]">
            <div className=" mb-4">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <DollarSign className="text-primary" size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2 my-3">
                  <h3 className="text-xl font-bold text-gray-900">Revenue and Payment Analytics</h3>
                </div>
                <p className="text-gray-600 mb-4">Gain complete financial visibility using real PMS payment activity.</p>
                <p className="text-gray-700 font-medium mb-3">Monitor:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0095FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Payments Received</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0095FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Outstanding Payments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0095FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Patient Lifetime Value</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#0095FF] rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Revenue Generated After Agency Start Date</span>
                  </li>
                </ul>
                <p className="text-gray-600 mt-4">This enables accurate performance reporting for clinics and agencies.</p>
              </div>
            </div>
          </div>

          <div className="bg-white  rounded-2xl p-8 shadow-sm !mt-0">
            <div className=" mb-4">
              <div className=" w-10 h-10 mb-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 inline-flex items-center justify-center">
                <TrendingUp className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 my-3">Future Revenue Forecasting</h3>
                <p className="text-gray-600 mb-4">
                  SmartSync calculates expected future payments based on pending treatments and scheduled procedures.
                </p>
                <p className="text-gray-600">Practices gain visibility into upcoming production potential.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>
    </>
  );
}
