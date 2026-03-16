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

export default function DentalPMSIntegrations() {
  const metaTags = getMetaTags("dentalPMSintegrations");

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://smartsync.one/" },
    {
      name: "Dental PMS Integrations",
      url: "https://smartsync.one/dental-pms-integrations",
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
               Connect Your <span className="text-primary">Dental PMS </span>  With CRM and Marketing Systems Automatically
                
              </h1>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed">
               SmartSync integrates leading dental practice management systems with modern CRM platforms to synchronize patients, appointments, treatments, and payments in real time.
              </p>
              <p
                className="text-lg text-gray-600 mb-2 leading-relaxed"
                data-testid="text-hero-subheading"
              >
               Eliminate manual reporting and keep operational and marketing data aligned across systems.
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
              Supported With Two-Way Synchronization
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
    </>
  )}