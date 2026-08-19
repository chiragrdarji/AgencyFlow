import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FAQ from "@/components/FAQ";
import SEO from "@/components/SEO";
import SchemaMarkup, { getBreadcrumbSchema, getFAQSchema } from "@/components/SchemaMarkup";
import { getMetaTags } from "@/lib/seoMeta";
import { Laptop, CheckCircle, Clock, RefreshCw, Brain, MonitorSmartphone, Plug, DatabaseZap, ArrowRight, Route, Users, ChevronRight, Megaphone, Building2, Stethoscope, MapPinned, Database, Timer, Ban, Sparkles, BadgeCheck } from "lucide-react";
import { useLocation } from "wouter";
import { desc } from "drizzle-orm";

const faqItems = [
  {
    question: "Which dental PMS platforms does SmartSync.One support?",
    answer: "SmartSync.One supports Open Dental, Dentrix 7, Dentrix 8, Dentrix Ascend, Dentrix Enterprise, Eaglesoft, Curve Dental, Denticon, eClinicalWorks, Dolphin, OrthoTrac, and PracticeWorks. This covers the majority of dental and orthodontic practices in North America.",
  },
  {
    question: "Which CRM platforms does SmartSync.One integrate with?",
    answer: "SmartSync.One supports GoHighLevel (GHL), HubSpot, and Salesforce. GoHighLevel is particularly popular with dental marketing agencies; HubSpot is common among mid-size DSOs; Salesforce is used by enterprise dental organizations that need custom object mapping and complex workflow automation.",
  },
  {
    question: "Is SmartSync.One a two-way sync or one-way only?",
    answer: "SmartSync.One supports bidirectional sync for the defined integration objects. PMS data flows out to CRM (patients, appointments, production, payments, providers). CRM data can write back to PMS for new patient creation, appointment creation, appointment status updates, and custom field updates. One important rule: existing patients in the PMS are never overwritten by CRM data — only net-new patients created in CRM are synced to PMS.",
  },
  {
    question: "How close to real-time is the sync?",
    answer: "SmartSync.One is described as near real-time. In practice, most changes appear in the CRM within a few minutes of occurring in the PMS — not overnight as with batch-based integrations. This latency is sufficient to trigger CRM automations (no-show recovery, appointment confirmations, post-visit sequences) from live clinical activity.",
  },
  {
    question: "Does SmartSync.One work for multi-location dental groups and DSOs?",
    answer: "Yes. SmartSync.One is specifically designed for multi-location dental organizations. Each location's PMS data is synced into CRM with location identifiers intact, enabling both location-level segmentation and group-level roll-up reporting in a single CRM instance.",
  },
  {
    question: "Does SmartSync.One sync production and payment data?",
    answer: "Yes. Production and payments from the PMS sync into CRM Opportunities, giving marketing and operations teams the ability to attribute revenue to lead sources, campaigns, and referring providers. This is one of the key capabilities that distinguishes SmartSync.One from basic contact sync tools — and is what enables agencies to report true ROI rather than just lead counts.",
  },
  {
    question: "Does SmartSync.One support orthodontic PMS systems?",
    answer: "Yes. SmartSync.One supports Dolphin and OrthoTrac — the two most widely used orthodontic practice management platforms. The integration handles orthodontic-specific workflows including consultation tracking, treatment pipeline visibility, and patient lifecycle sync across multi-year treatment courses.",
  },
  {
    question: "What data objects does SmartSync.One sync?",
    answer: "From PMS to CRM: Patients → Contacts, Appointments → Appointments, Appointment Status, Operatory → Calendar, Payments → Opportunities, Production → Opportunities, Procedures → Custom Fields, Patient Custom Fields → Contact Custom Fields, Providers → Users. From CRM to PMS: new Contacts → Patients, Appointments, Appointment Status, and Contact Custom Fields → Patient Custom Fields.",
  },
];

const items = [
  { text: "Open Dental CRM integration", link: "/open-dental-crm-integration" },
  { text: "Dentrix GoHighLevel sync", link: "/dentrix-gohighlevel-integration" },
  { text: "Dentrix HubSpot integration" },
  { text: "Eaglesoft Salesforce sync" },
  { text: "Dolphin orthodontic CRM" },
  { text: "Curve Dental API" },
  { text: "Denticon multi-location" },
];

const platforms = [
  {
    name: "Dentrix",
    description: "All versions supported",
    status: "available",
    color: "blue-600",
    url: "https://marketplace.gohighlevel.com/integration/6836bcb8eb1ce7acf9241b8b",
    features: [
      "Real-time sync",
      "Two-way data flow",
      "All modules supported",
      "Cloud & On-premise",
    ],
    imgUrl: "/img/Dentrix-icon.png"
  },
  {
    name: "Open Dental",
    description: "Cloud & On-premise",
    status: "available",
    color: "green-600",
    url: "https://marketplace.gohighlevel.com/integration/67972665fc19f6448bf732af",
    features: ["Real-time sync", "Two-way data flow", "Custom field mapping"],
    imgUrl: "/img/Open-Dental-icon.png"
  },
  {
    name: "EagleSoft",
    description: "Patterson Dental",
    status: "available",
    color: "gray-400",
    url: "https://marketplace.gohighlevel.com/integration/6836bcb8eb1ce7acf9241b8b",
    features: [
      "Real-time sync",
      "Two-way data flow",
      "All modules supported",
      "Cloud & On-premise",
    ],
    imgUrl: "/img/EagleSoft-icon.png"
  },
  {
    name: "Curve Dental",
    description: "Cloud-based PMS",
    status: "available",
    color: "gray-400",
    url: "https://marketplace.gohighlevel.com/integration/6836bcb8eb1ce7acf9241b8b",
    features: [
      "Real-time sync",
      "Two-way data flow",
      "All modules supported",
      "Cloud & On-premise",
    ],
    imgUrl: "/img/Curve-Dental.png"
  },
];

const PMS_CARDS = [
  { name: 'Open Dental', cat: 'Dental · Open source', desc: 'The most widely used open-source dental PMS. Full patient, appointment, production, and payment sync with near real-time updates.', type: 'dental' },
  { name: 'Dentrix 7 / 8', cat: 'Dental · Henry Schein', desc: 'Sync patient activity, appointments, payments, and production from Dentrix 7 and 8 into your CRM for attribution and reporting.', type: 'dental' },
  { name: 'Dentrix Ascend', cat: 'Dental · Cloud-native', desc: "Henry Schein's cloud PMS. SmartSync.One connects Ascend data into GoHighLevel, HubSpot, or Salesforce without manual exports.", type: 'dental' },
  { name: 'Dentrix Enterprise', cat: 'Dental · DSO / Enterprise', desc: 'Built for large dental organizations. Centralized CRM reporting and multi-location visibility across every Dentrix Enterprise site.', type: 'dental' },
  { name: 'Eaglesoft', cat: 'Dental · Patterson', desc: 'Sync Eaglesoft patient and appointment data into CRM to power lead-to-patient workflows and campaign attribution.', type: 'dental' },
  { name: 'Curve Dental', cat: 'Dental · Cloud', desc: "Connect Curve Dental's cloud-based data to automate patient communication, appointment workflows, and revenue reporting.", type: 'dental' },
  { name: 'Denticon', cat: 'Dental · DSO / Multi-site', desc: 'Denticon data into CRM for multi-location visibility, real-time automation, and group-level attribution reporting.', type: 'dental' },
  { name: 'eClinicalWorks', cat: 'Dental · Clinical', desc: 'Streamline reporting and automate workflows by connecting eClinicalWorks operational data with your CRM marketing layer.', type: 'dental' },
  { name: 'Dolphin', cat: 'Orthodontic', desc: 'Purpose-built orthodontic workflows — consultation tracking, treatment pipeline visibility, and patient follow-up automation.', type: 'ortho' },
  { name: 'OrthoTrac', cat: 'Orthodontic', desc: 'Connect OrthoTrac with CRM to support orthodontic marketing, patient lifecycle reporting, and referral tracking.', type: 'ortho' },
  { name: 'PracticeWorks', cat: 'Dental', desc: 'Sync PracticeWorks data to improve reporting, automate patient communication, and keep records aligned across platforms.', type: 'dental' },
];

const OUTBOUND_ROWS = [
  ['Patients', 'Contacts'],
  ['Appointments', 'Appointments'],
  ['Appointment status', 'Appt. status field'],
  ['Operatory', 'Calendar resource'],
  ['Payments', 'Opportunities'],
  ['Production', 'Opportunities'],
  ['Procedures', 'Contact custom fields'],
  ['Patient custom fields', 'Contact custom fields'],
  ['Providers', 'CRM users'],
];

const INBOUND_ROWS = [
  ['Contacts', 'New patients only'],
  ['Appointments', 'Appointments'],
  ['Appt. status', 'Appointment status'],
  ['Contact custom fields', 'Patient custom fields'],
];

const trackItems = [
  { icon: "1", title: "Lead arrives", desc: "New lead enters CRM from ad, referral, or web form. Contact record created." },
  { icon: "2", title: "Booking confirmed", desc: "Appointment booked in PMS. SmartSync.One syncs appointment data to CRM within minutes." },
  { icon: "3", title: "Visit completed", desc: "Appointment status updates to 'complete.' Production and procedures sync to CRM opportunity." },
  { icon: "4", title: "Payment posted", desc: "Payment recorded in PMS. Synced to CRM opportunity value for revenue attribution." },
  { icon: "5", title: "Reactivation", desc: "Overdue recall triggers CRM automation. Reactivation workflow fires from live PMS status." },
];

const trackItems1 = [
  { icon: Database, title: "100%", desc: "Of patient records available in CRM for segmentation and automation" },
  { icon: Timer, title: "<5 min", desc: "Typical sync latency from PMS event to CRM update" },
  { icon: Ban, title: "$0", desc: "Manual data entry required once SmartSync.One is connected" },
  { icon: Building2, title: "All", desc: "Locations unified in one CRM view, regardless of PMS instance count" },
];

export default function SupportedPlatforms() {
  const [, setLocation] = useLocation(); // <-- hook for navigation
  const metaTags = getMetaTags('supportedPlatforms');

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: 'https://smartsync.one/' },
    { name: 'Supported Platforms', url: 'https://smartsync.one/supported-platforms' },
  ]);

  const faqSchema = getFAQSchema(faqItems);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Supported PMS Platforms",
    description: "smartsync.one connects Dentrix, Open Dental, EagleSoft, and Curve Dental to GoHighLevel CRM with real-time bidirectional sync.",
    url: "https://smartsync.one/supported-platforms",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "Dentrix Integration",
          description: "Connect Dentrix PMS to GoHighLevel with real-time bidirectional sync",
          url: "https://smartsync.one/dentrix-gohighlevel-integration",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "50",
          },
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "Open Dental Integration",
          description: "Connect Open Dental PMS to GoHighLevel with real-time bidirectional sync",
          url: "https://smartsync.one/open-dental-gohighlevel-integration",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            ratingCount: "50",
          },
        },
      ],
    },
  };

  return (
    <>
      <SEO {...metaTags} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={organizationSchema} />

      {/* Banner */}

      <section className="hero-gradient pb-20 pt-12  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-1 gap-12 items-center">
            <div>
              {/* <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6"></div> */}
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
                <RefreshCw className="h-4 w-4 text-[#00C18C] mr-2" />
                <span className="text-sm font-medium text-slate-600">Near Real-Time Dental PMS Sync</span>
              </div>
              <h1
                className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6"
                data-testid="text-hero-headline"
              >
                Connect Your Dental PMS with{" "}
                <span className="text-primary">CRM In Minutes</span> — not Months
              </h1>
              <p
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                data-testid="text-hero-subheading"
              >
                SmartSync.One is the integration layer between your practice management software and your CRM. It continuously moves patient records, appointments, production figures, and payment data — so your marketing, operations, and reporting always reflect what's actually happening in the chair.
              </p>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                <div className="bg-card rounded-xl p-4 shadow-sm border">
                  <p className="text-xl leading-tight font-bold text-gray-900 mb-2">11</p>
                  <span className="text-gray-600">Dental & ortho PMS platforms supported</span>
                </div>

                <div className="bg-card rounded-xl p-4 shadow-sm border">
                  <p className="text-xl leading-tight font-bold text-gray-900 mb-2">3</p>
                  <span className="text-gray-600">CRM platforms: GHL, HubSpot, Salesforce</span>
                </div>

                <div className="bg-card rounded-xl p-4 shadow-sm border">
                  <p className="text-xl leading-tight font-bold text-gray-900 mb-2">2-way</p>
                  <span className="text-gray-600">Bidirectional sync between PMS and CRM</span>
                </div>

                <div className="bg-card rounded-xl p-4 shadow-sm border">
                  <p className="text-xl leading-tight font-bold text-gray-900 mb-2">Real-time</p>
                  <span className="text-gray-600">Near real-time sync — not nightly batch jobs</span>
                </div>
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
                src="/img/dental-pms-crm-sync-dashboard.webp"
                alt="dental-marketing-campaign"
                className=" rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is SmartSync.One? */}

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
              <Brain size={16} />
              <span className="text-blue-600">What is SmartSync.One?</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">The Dental CRM Integration Platform Built for Real Practices</h2>
            <p className="text-lg text-gray-600 pb-4">Most dental practices run two separate data worlds. Their practice management system holds the clinical and financial truth — every patient, appointment, procedure code, and payment. Their CRM holds the marketing and communication layer — leads, campaigns, automations, and pipelines. SmartSync.One bridges these worlds.</p>
            <p className=" text-gray-600 pb-4">Without a bridge, teams manually export CSV files, copy data between platforms, and build reports from memory rather than facts. Follow-up automations fire on stale data. Attribution reports miss production figures entirely. Reactivation campaigns go out to patients who already booked — or miss patients who've gone quiet for six months.</p>
            <p className=" text-gray-600">SmartSync.One resolves this by continuously syncing the objects that matter most — patients, appointments, appointment status, procedures, production, and payments — between your PMS and CRM in near real time, with full support for bidirectional writes and multi-location architectures.</p>
            <p className="mt-10 mx-auto max-w-max text-gray-600  bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] text-left"><strong>Why "near real-time" matters:</strong> A nightly batch sync means your CRM is 23 hours behind your PMS at worst. When a patient books, cancels, or makes a payment, SmartSync.One reflects that change in your CRM within minutes — not the next morning. Automations fire on current data. Reports reflect today, not yesterday.</p>
          </div>
        </div>
      </div>

      {/* Supported Platforms */}

      <div className="py-20  bg-primary-light">
        <div className="max-w-7xl px-5  mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
              <MonitorSmartphone size={16} />
              <span className="font-medium">Supported Platforms</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">11 Dental and Orthodontic PMS Platforms</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">SmartSync.One supports the most widely deployed practice management software in dentistry and orthodontics — from solo practices running Open Dental to enterprise DSOs on Dentrix Enterprise or Denticon.</p>

            <div className="flex gap-5 mb-8 justify-center pt-6">
              <div className="flex items-center gap-2 text-lg text-gray-600">
                <span className="w-4 h-4 rounded-sm bg-primary inline-block"></span> Dental PMS
              </div>
              <div className="flex items-center gap-2 text-lg text-gray-600">
                <span className="w-4 h-4 rounded-sm bg-green-500 inline-block"></span> Orthodontic PMS
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mb-10">
            {PMS_CARDS.map(card => (
              <div
                key={card.name}
                className={`bg-white rounded-xl p-5 border shadow-sm hover:shadow-md transition-shadow relative overflow-hidden ${card.type === 'ortho' ? 'border-blue-100' : 'border-emerald-100'}`}
              >
                <div className={`absolute top-0 left-0 w-1 h-full rounded-l-xl ${card.type === 'ortho' ? 'bg-green-500' : 'bg-primary'}`} />
                <div className="font-bold text-gray-900 text-lg mb-1 pl-1">{card.name}</div>
                <div className={`text-sm font-semibold mb-3 pl-1 ${card.type === 'ortho' ? 'text-green-500' : 'text-primary'}`}>{card.cat}</div>
                <p className="text-gray-600 leading-relaxed pl-1">{card.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-[18px] text-center">
            {items.map((item) => (
              <a
                key={item.text}
                href={item.link}
                className="p-2 bg-white rounded-xl text-foreground text-md flex items-center gap-[5px] font-semibold transition-all hover:shadow-md hover:text-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-check h-4 w-4 text-primary"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>

                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CRM integrations */}

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
              <Plug size={16} />
              <span className="text-blue-600">CRM Integrations</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Works With the CRMs Dental Teams Already Use</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">SmartSync.One doesn't ask you to change your CRM. It connects to GoHighLevel, HubSpot, or Salesforce and syncs your PMS data directly into the objects and fields your team already knows — contacts, appointments, opportunities, and custom fields.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mx-auto">
            {[
              {
                abbr: 'GHL', name: 'GoHighLevel',
                desc: "The CRM of choice for most dental marketing agencies. SmartSync.One syncs PMS data directly into GHL contacts, calendars, pipelines, and custom values — so your automations fire from real patient activity, not manual input.",
                badge: 'Most popular for agencies', badgeBg: 'bg-blue-100', badgeText: 'text-primary', dotBg: 'bg-blue-100', dotText: 'text-primary',
              },
              {
                abbr: 'Hs', name: 'HubSpot',
                desc: "HubSpot is a natural fit for DSOs and multi-location groups that need structured contact management, deal pipelines, and marketing automation. SmartSync.One maps PMS production into HubSpot deals for real revenue attribution.",
                badge: 'Popular for DSOs', badgeBg: 'bg-blue-100', badgeText: 'text-primary', dotBg: 'text-primary', dotText: 'text-primary',
              },
              {
                abbr: 'SF', name: 'Salesforce',
                desc: 'For enterprise dental organizations that run Salesforce at the center of their operations. SmartSync.One integrates PMS data into Salesforce contacts, opportunities, and custom objects, supporting complex reporting and workflow automation at scale.',
                badge: 'Enterprise scale', badgeBg: 'bg-blue-100', badgeText: 'text-primary', dotBg: 'text-primary', dotText: 'text-primary',
              },
            ].map(crm => (
              <div
                key={crm.name}
                className="bg-white shadow-lg p-6 rounded-2xl flex flex-col h-full"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-white border border-primary font-bold flex items-center justify-center mb-4 ${crm.dotBg} ${crm.dotText}`}
                >
                  {crm.abbr}
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">
                  {crm.name}
                </h3>

                <p className="text-gray-600 text-md leading-relaxed mb-2 flex-1">
                  {crm.desc}
                </p>

                <div
                  className={`inline-block mt-auto bg-blue-100 text-primary text-sm font-semibold rounded-full border border-primary px-5 py-2 w-fit ${crm.badgeBg} ${crm.badgeText}`}
                >
                  {crm.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data sync */}

      <div className="py-20  bg-primary-light">
        <div className="max-w-7xl px-5  mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
              <DatabaseZap size={16} />
              <span className="font-medium">Data Sync</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">Complete Bidirectional Data Mapping</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">SmartSync.One moves the objects that drive dental marketing and operations — not just contacts. Production, payments, procedures, and appointment status all flow into CRM so your team can report on what actually happened, not just what was scheduled.</p>
          </div>
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-4 items-center relative">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-2">
                {/* <ArrowRight className="w-4 h-4 text-blue-600" /> */}
                <span className="text-sm font-semibold text-blue-700">PMS → CRM (outbound)</span>
              </div>
              <div className="">
                {OUTBOUND_ROWS.map(([from, to]) => (
                  <div key={from} className="flex items-center py-3 gap-3 ">
                    <span className="text-md text-gray-900 font-semibold w-[165px]">{from}</span>
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-600">{to}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:flex flex-col items-center justify-center gap-8 w-20 relative">

              {/* Top arrow → */}
              <div className="relative w-full">
                <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2
      w-0 h-0
      border-t-[14px] border-t-transparent
      border-b-[14px] border-b-transparent
      border-l-[24px] border-l-blue-500">
                </div>
              </div>

              {/* Bottom arrow ← */}
              <div className="relative w-full">
                <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>

                <div className="absolute left-0 top-1/2 -translate-y-1/2
      w-0 h-0
      border-t-[14px] border-t-transparent
      border-b-[14px] border-b-transparent
      border-r-[24px] border-r-blue-500">
                </div>
              </div>

            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-primary rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative z-10">
              <div className="inline-flex gap-2 items-center px-4 py-1.5 bg-primary text-white text-sm font-semibold rounded-full mb-6">
                {/* <ArrowRight className="w-4 h-4 text-green-600 rotate-180" /> */}
                <span className="text-sm font-semibold text-white">CRM → PMS (inbound)</span>
              </div>
              <div className="divide-">
                {INBOUND_ROWS.map(([from, to]) => (
                  <div key={from} className="flex items-center py-3 gap-3">
                    <span className="text-md text-gray-900 font-semibold w-[170px]">{from}</span>
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-gray-600">{to}</span>
                  </div>
                ))}
                <div className="mt-2 text-gray-600 bg-white p-2 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] text-left">
                  <span className="text-gray-600 text-sm italic">Existing patients are never overwritten in PMS</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-10 mx-auto max-w-max text-gray-600 bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] text-left">
            <strong>Production data in CRM opportunities</strong> is what separates SmartSync.One from basic contact sync tools. When production and payments flow into CRM as opportunity values, your marketing attribution moves from "leads generated" to "actual revenue produced." Agencies can prove ROI in dollars, not click metrics.
          </p>
        </div>
      </div>

      {/* Patient journey */}

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
              <Route size={16} />
              <span className="text-blue-600">Patient Journey</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How SmartSync.One Works Across the Patient Lifecycle</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">SmartSync.One isn't a one-time import. It maintains a continuous live connection between PMS and CRM throughout every stage of the patient relationship — from first inquiry to long-term retention.</p>
          </div>

          <div className="relative w-full">
            <div className="hidden md:block absolute top-10 left-[8%] right-[8%] h-[3px] bg-blue-200"></div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6 relative">
              {trackItems.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-sm z-10">
                    <p className="text-2xl">{item.icon}</p>
                  </div>

                  <h4 className="mt-5 text-lg font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 mx-auto max-w-max text-gray-600  bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] text-left">
              This continuous sync means your CRM automations always reflect clinical reality. A no-show doesn't just update a field — it can trigger an immediate rebooking workflow. A completed implant procedure doesn't just close an opportunity — it can trigger a referral ask sequence, a review request, or a treatment plan follow-up. The intelligence lives in your CRM; the signal comes from SmartSync.One.
            </p>
          </div>
        </div>
      </div>

      {/* Who it's for */}

      <div className="py-20  bg-primary-light">
        <div className="max-w-7xl px-5  mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full mb-6 border border-primary">
              <Users size={16} />
              <span className="font-medium">Who it's For</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 !leading-tight max-w-3xl mx-auto">Built for Dental Agencies, DSOs, and Growing Practices</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">SmartSync.One serves three primary audiences — each with different goals, but all sharing the same core need: a reliable, real-time connection between practice data and their CRM.</p>
          </div>

          <div className="gap-8 grid md:grid-cols-2 ">
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Megaphone size={24} className="text-primary mr-2" />
                Dental Marketing Agencies
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Agencies managing multiple dental clients need more than basic lead tracking. They need to show clients that their campaigns actually produced chair time and revenue — not just website visits. SmartSync.One makes that possible by pulling production and payment data from the PMS directly into CRM reports.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Prove ROI with real production dollars, not vanity metrics</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Automate no-show recovery and reactivation sequences</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Track appointment funnel from lead to billed procedure</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Standardize reporting workflows across all client accounts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Eliminate manual CSV exports and weekly spreadsheet builds</span>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Building2 size={24} className="text-primary mr-2" />
                DSOs and Group Practices
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Dental service organizations running multiple locations face a coordination challenge: each site has its own PMS data, but executive leadership needs a consolidated view. SmartSync.One syncs all locations into a single CRM, giving both site-level visibility and group-wide roll-up reporting.
              </p>
              <div className="space-y-4">
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Sync all locations into one centralized CRM view</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Sync all locations into one centralized CRM view
                  </span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Maintain consistent automation workflows at every location
                  </span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Support accountability tracking with live data
                  </span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Reduce dependency on manual location-level reporting
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <Stethoscope size={24} className="text-primary mr-2" />
                Orthodontic Practices
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Orthodontic workflows differ from general dentistry — treatment spans months or years, consultations are a critical conversion point, and patient lifecycle tracking matters as much as single-visit production. SmartSync.One supports Dolphin and OrthoTrac with orthodontic-aware sync logic.
              </p>
              <div className="space-y-4">
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Track consultation-to-treatment conversion in CRM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Automate follow-up sequences for pending treatment plans
                  </span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Sync treatment milestone updates from PMS to CRM
                  </span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Build referral source attribution into every case record
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-lg p-8 rounded-2xl">
              <h3 className="lg:flex md:block items-center mb-6 font-bold text-gray-900 text-lg">
                <MapPinned size={24} className="text-primary mr-2" />
                Multi-location Practices
              </h3>
              <p className="mx-auto mb-4 max-w-2xl text-[16px] text-gray-600">
                Practices that have grown from one location to three, five, or ten often find their systems haven't kept pace with their scale. Data lives in siloed PMS instances, reporting is manual, and there's no single source of truth for performance. SmartSync.One provides the integration layer to unify that data.
              </p>
              <div className="space-y-4">
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">Unified patient data across all locations in one CRM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Location-level attribution for marketing spend
                  </span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Consistent automation logic applied at every site
                  </span>
                </div>
                <div className="flex  items-center space-x-3">
                  <ChevronRight size={18} className="text-primary " />
                  <span className="text-gray-700">
                    Live dashboards that don't require manual updates
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why SmartSync.One */}

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
              <Sparkles size={16} />
              <span className="text-blue-600">Why SmartSync.One</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How SmartSync.One Compares to the Alternatives</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">There are three common approaches teams take before finding SmartSync.One: native integrations, manual reporting, and spreadsheet-based workflows. Each one falls short in a specific, predictable way.</p>
          </div>

          <div className="space-y-12  px-4 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white border border-primary rounded-2xl p-6 shadow-sm">
              <div className=" items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Native Integrations
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px] " />
                        <span className="text-gray-700 w-fit">
                          Usually limited to basic contact sync — no production or payment data
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px] " />
                        <span className="text-gray-700 w-fit">
                          No dental-specific field mapping or workflow logic
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px]" />
                        <span className="text-gray-700 w-fit">
                          Often one-directional — CRM can't write back to PMS
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px]" />
                        <span className="text-gray-700 w-fit">
                          Batch-based — data lags by hours or overnight
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px] " />
                        <span className="text-gray-700 w-fit">
                          No support for multi-location architectures
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-primary  rounded-2xl p-6 shadow-sm !mt-0">
              <div className="  gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 my-3">
                    Manual Reporting
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px] " />
                        <span className="text-gray-700 w-fit">
                          Requires dedicated staff time every week to export and format data
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px] " />
                        <span className="text-gray-700 w-fit">
                          Always retrospective — reports describe last week, not right now
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px]" />
                        <span className="text-gray-700 w-fit">
                          Human error in data entry and transformation is unavoidable
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px] " />
                        <span className="text-gray-700 w-fit">
                          Impossible to trigger real-time automations from manual data
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px] " />
                        <span className="text-gray-700 w-fit">
                          Doesn't scale as locations are added
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-primary rounded-2xl p-6 shadow-sm !mt-0">
              <div className=" mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 my-3">
                    Spreadsheets
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px] " />
                        <span className="text-gray-700 w-fit">
                          Disconnected from live PMS and CRM — always stale
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px] " />
                        <span className="text-gray-700 w-fit">
                          Version control problems across teams and locations
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px]" />
                        <span className="text-gray-700 w-fit">
                          No automation capability — spreadsheets can't trigger workflows
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px] " />
                        <span className="text-gray-700 w-fit">
                          Attribution is impossible without granular per-record linking
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-12  px-4 mx-auto grid sm:grid-cols md:grid-cols-1 gap-4 mt-4">
            <div className="bg-blue-100 border border-primary rounded-2xl p-6 shadow-sm">
              <div className=" items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    SmartSync.One
                  </h3>
                  <ul className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-2">
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px] " />
                        <span className="text-gray-700 w-fit">
                          Near real-time sync — changes appear in CRM within minutes
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px] " />
                        <span className="text-gray-700 w-fit">
                          Full two-way sync — CRM can write appointments back to PMS
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px]" />
                        <span className="text-gray-700 w-fit">
                          Production and payment data in CRM opportunities
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px]" />
                        <span className="text-gray-700 w-fit">
                          Dental-specific field mapping and workflow support
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px] " />
                        <span className="text-gray-700 w-fit">
                          Multi-location ready from day one
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="flex space-x-2">
                        <ChevronRight size={18} className="text-primary mt-[5px] " />
                        <span className="text-gray-700 w-fit">
                          Attribution-ready data structure for agency reporting
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key benefits */}

      <div className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
              <BadgeCheck size={16} />
              <span className="text-blue-600">Key Benefits</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What SmartSync.One Unlocks for Your Team</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">The downstream effects of reliable PMS-to-CRM sync touch every function in a dental marketing or operations team. Here's what becomes possible when your CRM data actually matches your PMS.</p>
          </div>

          <div className="relative w-full">
            {/* <div className="hidden md:block absolute top-10 left-[8%] right-[8%] h-[3px] bg-blue-200"></div> */}

            <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6 relative">
              {trackItems1.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-sm z-10">
                    <item.icon size={32} strokeWidth={2} />
                  </div>

                  <h4 className="text-xl font-bold text-gray-900 mb-2 mt-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-gray-600">Revenue attribution is perhaps the biggest unlock. Dental marketing agencies spend significant budget on paid search, social ads, and SEO — but without a link between CRM lead data and PMS production data, they can only report on cost per lead. SmartSync.One closes that loop. When a patient who came from a Google Ads campaign books, attends, and generates $4,200 in production, that figure flows into the CRM opportunity against the original lead source. The agency can now report true cost per acquired patient and cost per production dollar.</p>
            <p className="mt-10 mx-auto max-w-max text-gray-600  bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] text-left">
              For operations teams, the benefit shows up as automation fidelity. No-show recovery workflows that fire immediately when appointment status changes to "broken." Recall sequences that trigger based on actual last-visit dates pulled from the PMS. Reactivation campaigns that exclude patients who already rebooked — because SmartSync.One told the CRM they did.
            </p>
          </div>
        </div>
      </div>

      {/* Orthodontic practices */}

      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-blue-100 px-4 py-1.5 rounded-full mb-6">
              <Stethoscope size={16} />
              <span className="text-blue-600">Orthodontic Practices</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Orthodontic CRM Integration — Built for Longer Treatment Cycles</h2>
            <p className="text-lg text-gray-600 pb-4">General dentistry and orthodontics share some data structures, but the workflows are meaningfully different. A new dental patient might complete a case in a single visit; an orthodontic patient might span 24 months of appointments, payments, and status updates. SmartSync.One supports both Dolphin and OrthoTrac with this lifecycle in mind.</p>
            <p className="text-gray-600 pb-4">Consultation conversion is the critical metric in orthodontics. A prospective patient inquires, books a consultation, and then either starts treatment or goes quiet. SmartSync.One syncs consultation appointment data into CRM the moment it's created in the PMS, allowing orthodontic practices to build automated follow-up sequences around consultation outcomes — immediate if treatment wasn't started, celebratory if it was.</p>
            <p className="text-gray-600">Treatment milestone updates — debanding, retainer fit, mid-treatment checks — can sync to CRM as appointment records and trigger communication at each stage. This keeps the patient-practice relationship active and supports referral generation at the moments when patients are most satisfied.</p>
            <p className="mt-10 mx-auto max-w-max text-gray-600 bg-white p-4 rounded-md border-l-[5px] border-primary pl-4 shadow-[0_0_10px_rgba(0,0,0,0.1)] text-left"><strong>Dolphin and OrthoTrac integration</strong> via SmartSync.One brings consultation tracking, treatment pipeline visibility, patient lifecycle reporting, referral source attribution, and orthodontic-specific automation directly into GoHighLevel, HubSpot, or Salesforce.</p>
          </div>
        </div>
      </div>

      {/* FAQ */}

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

      {/* CTA */}

      <div className="py-16 bg-primary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Connect your Dental PMS with CRM Today
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Track appointments, production, payments, and patient activity inside GoHighLevel, HubSpot, or Salesforce — in near real time. Built for dental agencies, DSOs, and multi-location practices.
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
