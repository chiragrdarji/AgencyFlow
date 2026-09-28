import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import AnimatedDataFlow from "@/components/AnimatedDataFlow";
import FAQ from "@/components/FAQ";
import StructuredData from "@/components/StructuredData";
import SEO from "@/components/SEO";
import SchemaMarkup, {
  getFAQSchema,
  getBreadcrumbSchema,
} from "@/components/SchemaMarkup";
import { getMetaTags } from "@/lib/seoMeta";
import {
  Zap,
  Megaphone,
  Building2,
  Clock,
  AlertTriangle,
  TrendingDown,
  FolderSync,
  CalendarCheck,
  Bot,
  Database,
  BarChart3,
  Shield,
  Settings,
  Eye,
  CheckCircle,
  Star,
  RefreshCw,
  Phone,
  Stethoscope,
  MapPinned,
  ArrowRight,
  CheckCircle2,
  Layers,
} from "lucide-react";

const faqItems = [
  {
    question: "How long does setup take?",
    answer:
      "Setup typically takes about 45 minutes with our team. We handle the technical configuration, field mapping, and testing to ensure everything works perfectly before going live.",
  },
  {
    question: "Is patient data secure and HIPAA Compliant?",
    answer:
      "We are HIPAA Compliant. We only sync essential business data (no medical records), use encrypted connections, and automatically delete data from our connector once it's successfully transferred. No treatment or medical data is ever accessed or stored.",
  },
  {
    question: "What data gets synced?",
    answer:
      "We sync patients (contact info, demographics), providers, appointments (scheduled, completed, cancelled), and payment information. You choose which data points to sync during setup. Medical notes and treatment details are never accessed.",
  },
  {
    question: "How often does data sync?",
    answer:
      "Data syncs in real-time using webhooks. When a change occurs in either PMS or GoHighLevel, it's automatically detected and synced within minutes. No batch processing or manual uploads required.",
  },
  {
    question: "What happens if there's a sync conflict?",
    answer:
      "The connector compares timestamps and syncs the most recent version. If both systems are updated at exactly the same time, PMS is treated as the source of truth. Failed syncs are automatically retried multiple times.",
  },
];

const testimonials = [
  {
    name: "Ryan Lunt",
    initials: "RL",
    company: "Opkie OS",
    // date: "Sep 9, 2026",
    rating: 5,
    text: "Seamless to connect Dentrix to GHL. Their support team makes it easy and walk through each step. Made it really easy for our Dental clients to connect on their end.",
  },
  {
    name: "Jean-François Bérubé",
    initials: "JB",
    company: "Sidi.io",
    // date: "Mar 12, 2026",
    rating: 5,
    text: "It's doing exactly what we need it to do. And the Customer service is amazing, very helpful to show us around and connect it properly.",
  },

  {
    name: "KYMA ADMIN",
    initials: "KA",
    company: "KYMA",
    // date: "Sep 1, 2025",
    rating: 5,
    text: "Chirag and His team did an excellent job at helping us connect our clients pms with our crm.",
  },
  {
    name: "Ryan Lunt",
    initials: "RL",
    company: "Opkie OS",
    // date: "Sep 9, 2026",
    rating: 5,
    text: "Easy to connect with OpenDental and great support team.",
  },
  {
    name: "Juan Toro",
    initials: "JT",
    company: "T&C Business ai, llc",
    // date: "May 29, 2026",
    rating: 5,
    text: "Excellent support service.",
  },
  {
    name: "Nicholas Ciardiello",
    initials: "NC",
    company: "LOD Marketing Connect",
    // date: "Mar 27, 2026",
    rating: 5,
    text: "Highly recommended! Can't wait to get started!",
  },
  {
    name: "Jason Edwards",
    initials: "JE",
    company: "Prodental Dallas",
    // date: "Dec 12, 2025",
    rating: 5,
    text: "This was my first dental client, and the ConnectDentrix team helped me get everything set up perfectly. They even did a video call with me while I was at the dental office to make sure I had it all connected. Highly recommended.",
  },
  {
    name: "Devonte Jenkins",
    initials: "DJ",
    company: "Eastside Dental Group",
    // date: "Aug 21, 2025",
    rating: 5,
    text: "This connector app is a game-changer! It samelessly retrive data from Dentrix and Open Dental, making it easy for our agency to run live and targeted marketing campaigns. The support team is extraordinary-quick, knowledgeable, and always ready to help. Highly recommended for any marketing agency working with dental practices!",
  },
  {
    name: "Sarah L.",
    initials: "SL",
    company: "BluePeak Dental Marketing",
    // date: "",
    rating: 5,
    text: "The connector made our campaigns 10x more effective. We finally have accurate patient data without manual updates.",
  },
  {
    name: "Jason K.",
    initials: "JK",
    company: "Smile Growth Partners",
    // date: "",
    rating: 5,
    text: "Our reactivation campaigns now hit at the perfect time. ROI is clear and client retention is higher.",
  },
  {
    name: "Rachel S.",
    initials: "RS",
    company: "ToothTrack Marketing",
    // date: "",
    rating: 5,
    text: "We can finally show our clients exactly how many new patients and how much revenue came from our work.",
  },
];

interface WPPostItem {
  id: number;
  link: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl?: string;
  altText?: string;
}

const fallbackBlogPosts: WPPostItem[] = [
  // {
  //   id: 1,
  //   link: "https://smartsync.one/blog/",
  //   title: "The Autonomous Practice: The Future of AI in Dental Marketing",
  //   excerpt: "The era of \"chatbots\" is over. The era of the \"Digital Associate\" has arrived for dental businesses and marketing agencies.",
  //   date: "July 16, 2026",
  //   category: "Dental Marketing",
  //   imageUrl: "https://smartsync.one/blog/wp-content/uploads/2026/07/future-of-ai-in-dental-marketing-2026.webp",
  //   altText: "Future of AI in Dental Marketing 2026",
  // },
  // {
  //   id: 2,
  //   link: "https://smartsync.one/blog/",
  //   title: "The 2026 Blueprint: Top Tech Stack for Dental Marketing Agencies",
  //   excerpt: "By 2026, the gap between the struggling agency and the scaling one isn't their ad creative—it's their technology stack.",
  //   date: "July 13, 2026",
  //   category: "Tech Stack",
  //   imageUrl: "https://smartsync.one/blog/wp-content/uploads/2026/07/best-tech-stack-for-dental-marketing-agencies-in-2026.webp",
  //   altText: "Best Tech Stack for Dental Marketing Agencies in 2026",
  // },
  // {
  //   id: 3,
  //   link: "https://smartsync.one/blog/",
  //   title: "The Invisible Growth Engine: How Data Integration Scales Practices",
  //   excerpt: "You didn't go to dental school to be a data scientist. Learn how automated PMS integration turns raw data into revenue.",
  //   date: "July 9, 2026",
  //   category: "CRM & PMS",
  //   imageUrl: "https://smartsync.one/blog/wp-content/uploads/2026/07/data-integration-for-dental-practice-growth-768x403.webp",
  //   altText: "Data Integration for Dental Practice Growth",
  // },
];

const metaTags = getMetaTags("home");

export default function Home() {
  const [blogPosts, setBlogPosts] = useState<WPPostItem[]>([]);
  const [blogLoading, setBlogLoading] = useState<boolean>(true);
  const [blogError, setBlogError] = useState<boolean>(false);

  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    setSlideCount(carouselApi.scrollSnapList().length);
    setCurrentSlide(carouselApi.selectedScrollSnap());

    carouselApi.on("select", () => {
      setCurrentSlide(carouselApi.selectedScrollSnap());
    });
  }, [carouselApi]);

  useEffect(() => {
    async function fetchLatestPosts() {
      try {
        setBlogLoading(true);
        setBlogError(false);
        const res = await fetch("https://smartsync.one/blog/wp-json/wp/v2/posts?per_page=3&orderby=date&order=desc&_embed");
        if (!res.ok) {
          throw new Error(`WordPress API returned status ${res.status}`);
        }
        const posts = await res.json();
        if (Array.isArray(posts) && posts.length > 0) {
          const formattedPosts: WPPostItem[] = posts.map((post: any) => {
            const rawTitle = post.title?.rendered || "";
            const rawExcerpt = post.excerpt?.rendered || "";

            const docTitle = new DOMParser().parseFromString(rawTitle, "text/html");
            const cleanTitle = docTitle.body.textContent || rawTitle;

            const docExcerpt = new DOMParser().parseFromString(rawExcerpt, "text/html");
            const cleanExcerpt = docExcerpt.body.textContent || rawExcerpt;

            const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
            const imageUrl = featuredMedia?.source_url || featuredMedia?.media_details?.sizes?.medium_large?.source_url || featuredMedia?.media_details?.sizes?.full?.source_url;
            const altText = featuredMedia?.alt_text || cleanTitle;

            const term = post._embedded?.["wp:term"]?.[0]?.[0];
            const category = term?.name || "Dental Marketing";

            const postDate = post.date ? new Date(post.date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            }) : "";

            return {
              id: post.id,
              link: post.link || "https://smartsync.one/blog/",
              title: cleanTitle,
              excerpt: cleanExcerpt.length > 140 ? cleanExcerpt.substring(0, 140).trim() + "..." : cleanExcerpt,
              date: postDate,
              category,
              imageUrl,
              altText,
            };
          });
          setBlogPosts(formattedPosts);
        } else {
          setBlogError(true);
        }
      } catch (err) {
        console.error("Failed to fetch live WordPress blog posts:", err);
        setBlogError(true);
      } finally {
        setBlogLoading(false);
      }
    }
    fetchLatestPosts();
  }, []);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://smartsync.one/" },
  ]);

  const faqSchema = getFAQSchema(faqItems);

  return (
    <>
      <SEO {...metaTags} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <SchemaMarkup schema={faqSchema} />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="hero-gradient pb-8 pt-4 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Trust Bar */}
            <div
              className="mb-10 text-center flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-white/80 backdrop-blur-md border border-primary/20 shadow-sm rounded-full max-w-fit mx-auto px-6 py-2.5 transition-all hover:shadow-md hover:border-primary/40"
              data-testid="trust-bar"
            >
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800">
                <Zap className="w-4 h-4 text-primary shrink-0" />
                <span><strong className="text-primary font-bold">120+</strong> agencies</span>
              </div>

              <span className="h-4 w-px bg-gray-200 hidden sm:inline-block" aria-hidden="true" />
              <a href="/supported-platforms">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800">

                  <Database className="w-4 h-4 text-primary shrink-0" />
                  <span><strong className="text-primary font-bold">11</strong> PMS platforms</span>

                </div>
              </a>

              <span className="h-4 w-px bg-gray-200 hidden sm:inline-block" aria-hidden="true" />

              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800">
                <Layers className="w-4 h-4 text-primary shrink-0" />
                <span><strong className="text-primary font-bold">3</strong> CRMs</span>
              </div>

              <span className="h-4 w-px bg-gray-200 hidden sm:inline-block" aria-hidden="true" />

              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-800">
                <img src="/img/hipaa-compliant-shield-badge.svg" alt="HIPAA Shield" className="w-4 h-4 " />
                <span className=" font-bold">HIPAA compliant</span>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  className="text-4xl lg:text-[54px] lg:leading-[58px] font-bold text-gray-900 leading-tight mb-6"
                  data-testid="text-hero-headline"
                >
                  The trusted way to connect any{" "}
                  <span className="text-primary">
                    dental PMS to your CRM
                  </span>
                </h1>
                <p
                  className="text-xl text-gray-600 mb-8 leading-relaxed"
                  data-testid="text-hero-subheading"
                >
                  Sync patients, appointments, treatments, and payments between Dentrix, Open Dental, Eaglesoft, and 8 other platforms and GoHighLevel, HubSpot, or Salesforce, so agencies can prove ROI and power AI-driven patient communication.
                </p>
                {/* CTA Buttons */}
                <div className="flex flex-col gap-4 mb-8">
                  {/* Row 1 — Primary */}
                  <div className="grid grid-cols-1 sm:grid-cols-2  sm:flex-row gap-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary text-white hover:bg-primary-dark text-lg px-8 py-4 font-semibold shadow-md"
                      data-testid="button-book-demo"
                    >
                      <Link href="/schedule-a-call">
                        Book a free demo
                      </Link>
                    </Button>

                    <Button
                      asChild
                      variant="outline"
                      size="lg"
                      className="border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4 font-semibold"
                      data-testid="button-call-us"
                    >
                      <a href="tel:+16308618263">
                        <Phone size={18} className="mr-2 inline-block" />
                        Call +1 630 861 8263
                      </a>
                    </Button>
                  </div>

                  {/* Row 2 — Secondary (Demoted) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-500 pt-1">
                    <a
                      href="https://marketplace.gohighlevel.com/integration/6836bcb8eb1ce7acf9241b8b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-lg text-center bg-blue-50/90 px-4 py-2 rounded-xl border border-blue-200/60 text-gray-900 text-primary hover:border-primary"
                      data-testid="button-buy-dentrix"
                    >
                      Buy Dentrix → GHL
                    </a>

                    <a
                      href="https://marketplace.gohighlevel.com/integration/67972665fc19f6448bf732af"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-lg text-center bg-blue-50/90 px-4 py-2 rounded-xl border border-blue-200/60 text-gray-900 text-primary  hover:border-primary"
                      data-testid="button-buy-open-dental"
                    >
                      Buy Open Dental → GHL
                    </a>
                  </div>
                </div>

              </div>
              <div className="relative">
                {/* <img
                  src="/img/Smart-Sync-One.gif"
                  alt="Dentrix and Open Dental to GoHighLevel patient data sync workflow" 
                /> */}

                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className=" h-auto"
                  style={{ visibility: "visible" }}
                >
                  <source src="/img/Smart-Sync-One.webm" type="video/webm" />
                </video>
              </div>

            </div>
            {/* Rating / Review Line */}
            <div className="mt-10 bg-white/90 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-gray-100 shadow-md max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 items-center justify-between gap-3 sm:gap-4">

              <div className="flex items-center justify-center gap-2 bg-blue-50/70 px-4 py-2 rounded-xl border border-blue-200/60 text-gray-900 text-xs sm:text-sm font-semibold shadow-2xs">
                <img src="/img/hipaa-compliant-shield-badge.svg" alt="HIPAA Shield" className="w-5 h-5 " />
                <span>HIPAA compliant</span>
              </div>

              <div className="flex items-center justify-center gap-2 bg-blue-50/70 px-4 py-2 rounded-xl border border-blue-200/60 text-gray-900 text-xs sm:text-sm font-semibold shadow-2xs" data-testid="text-setup-time">
                <Clock size={16} className="text-primary" />
                <span>45-minute setup</span>
              </div>

              <div className="flex items-center justify-center gap-2 bg-blue-50/70 px-4 py-2 rounded-xl border border-blue-200/60 text-gray-900 text-xs sm:text-sm font-semibold shadow-2xs" data-testid="text-real-time-sync">
                <RefreshCw size={16} className="text-primary" />
                <span>Real-time sync</span>
              </div>
            </div>
          </div>
        </section >
        {/* Who This Is For */}
        < section className="py-20 pb-8 bg-white" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-built-for-title"
              >
                Built for Modern Dental Marketing
              </h2>
              <p className="text-xl text-gray-600 max-w-6xl mx-auto">
                Whether you're a marketing agency serving dental clients or a
                dental practice looking to streamline operations, our connector
                bridges the gap between your PMS and CRM.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Marketing agencies */}
              <Card className="bg-primary-light border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 shrink-0">
                      <Megaphone size={24} className="text-primary" />
                    </div>
                    <h3
                      className="text-xl sm:text-2xl font-bold text-gray-900"
                      data-testid="text-agencies-title"
                    >
                      Marketing agencies
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-success mt-1 mr-3 shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700">
                        Run smarter, data-driven campaigns with real-time patient info
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-success mt-1 mr-3 shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700">
                        Provide new patients, reactivations, appointments booked, and revenue generated to dental practices
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* DSOs and group practices */}
              <Card className="bg-gray-50 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 shrink-0">
                      <Building2 size={24} className="text-primary" />
                    </div>
                    <h3
                      className="text-xl sm:text-2xl  font-bold text-gray-900"
                      data-testid="text-dsos-title"
                    >
                      DSOs and group practices
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-success mt-1 mr-3 shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700">
                        Sync all locations into one centralized CRM view
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-success mt-1 mr-3 shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700">
                        Support accountability tracking with live data
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Orthodontic practices */}
              <Card className="bg-gray-50 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 shrink-0">
                      <Stethoscope size={24} className="text-primary" />
                    </div>
                    <h3
                      className="text-xl sm:text-2xl  font-bold text-gray-900"
                      data-testid="text-ortho-title"
                    >
                      Orthodontic practices
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-success mt-1 mr-3 shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700">
                        Track consultation-to-treatment conversion in CRM
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-success mt-1 mr-3 shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700">
                        Automate follow-up sequences for pending treatment plans
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Multi-location practices */}
              <Card className="bg-primary-light border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mr-4 shrink-0">
                      <MapPinned size={24} className="text-primary" />
                    </div>
                    <h3
                      className="text-xl sm:text-2xl  font-bold text-gray-900"
                      data-testid="text-multi-location-title"
                    >
                      Multi-location practices
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-success mt-1 mr-3 shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700">
                        Unified patient data across all locations in one CRM
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-success mt-1 mr-3 shrink-0"
                        size={16}
                      />
                      <span className="text-gray-700">
                        Location-level attribution for marketing spend
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Platform Strip */}
        <section className="pb-16 pt-6">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Eyebrow */}
            <span className="text-sm sm:text-xl font-medium text-gray-900 block mb-4 tracking-wide">
              Works with the platforms you already use
            </span>

            {/* Platform list (PMS) */}
            <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-sm sm:text-base md:text-lg font-medium text-gray-700 leading-relaxed max-w-6xl mx-auto mb-3 px-2">
              <span className="whitespace-nowrap">Open Dental</span>
              <span className="text-gray-400 select-none" aria-hidden="true">·</span>
              <span className="whitespace-nowrap">Dentrix 7/8</span>
              <span className="text-gray-400 select-none" aria-hidden="true">·</span>
              <span className="whitespace-nowrap">Dentrix Ascend</span>
              <span className="text-gray-400 select-none" aria-hidden="true">·</span>
              <span className="whitespace-nowrap">Dentrix Enterprise</span>
              <span className="text-gray-400 select-none" aria-hidden="true">·</span>
              <span className="whitespace-nowrap">Eaglesoft</span>
              <span className="text-gray-400 select-none" aria-hidden="true">·</span>
              <span className="whitespace-nowrap">Curve Dental</span>
              <span className="text-gray-400 select-none" aria-hidden="true">·</span>
              <span className="whitespace-nowrap">Denticon</span>
              <span className="text-gray-400 select-none" aria-hidden="true">·</span>
              <span className="whitespace-nowrap">eClinicalWorks</span>
              <span className="text-gray-400 select-none" aria-hidden="true">·</span>
              <span className="whitespace-nowrap">Dolphin</span>
              <span className="text-gray-400 select-none" aria-hidden="true">·</span>
              <span className="whitespace-nowrap">OrthoTrac</span>
              <span className="text-gray-400 select-none" aria-hidden="true">·</span>
              <span className="whitespace-nowrap">PracticeWorks</span>
            </div>

            {/* Muted CRM line */}
            <p className="text-sm sm:text-base text-gray-500 font-medium mb-6 mt-3">
              + GoHighLevel, HubSpot, Salesforce
            </p>

            {/* Outlined Button */}
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-base px-6 py-3"
              data-testid="button-see-all-platforms"
            >
              <Link href="/supported-platforms">
                See all supported platforms →
              </Link>
            </Button>
          </div>
        </section>
        {/* Problem Statement */}
        < section className="py-20 bg-gray-50" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-problem-title"
              >
                The Problem: Disconnected Systems Are Killing Your ROI
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-red-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <img
                      src="/img/Manual Data Entry.svg"
                      alt="Manual Data Entry"
                      className="w-9 h-9" // adjust size as needed
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Manual Data Entry
                  </h3>
                  <p className="text-gray-600">
                    Hours wasted every week manually updating patient
                    information between systems, leading to outdated campaigns
                    and missed opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <img
                      src="/img/Inaccurate-Campaigns.svg"
                      alt="Inaccurate Campaigns"
                      className="w-9 h-9" // adjust size as needed
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Inaccurate Campaigns
                  </h3>
                  <p className="text-gray-600">
                    Marketing campaigns based on stale data result in poor
                    targeting, low conversion rates, and frustrated dental
                    clients.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-red-100">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                    <img
                      src="/img/No-ROI-Visibility.svg"
                      alt="No ROI Visibility"
                      className="w-9 h-9" // adjust size as needed
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    No ROI Visibility
                  </h3>
                  <p className="text-gray-600">
                    Unable to prove marketing effectiveness to dental clients
                    because the data lives in separate, disconnected systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section >
        {/* Solution Overview */}
        < section className="py-20 bg-white" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-solution-title"
              >
                The Solution: Real-Time, Automated Data Sync
              </h2>
              <p className="text-xl text-gray-600 max-w-6xl mx-auto">
                Connect your dental clients' practice management systems
                directly to GoHighLevel for seamless, automated data
                synchronization.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <img
                        src="/img/Two-Way-Data-Sync.svg"
                        alt="Two-Way Data FolderSync"
                        className="w-9 h-9 min-w-fit" // adjust size as needed
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Two-Way Data Sync
                      </h3>
                      <p className="text-gray-600">
                        Automatically sync patients, providers, appointments, and payments between your PMS and CRM in real-time.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12  rounded-lg flex items-center justify-center mr-4 mt-1">
                      <img
                        src="/img/Live-Appointment-Availability.png"
                        alt="Live Appointment Availability"
                        className="w-9 h-9 min-w-fit" // adjust size as needed
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Live Appointment Availability
                      </h3>
                      <p className="text-gray-600">
                        Display real-time appointment slots on landing pages to
                        attract more patients and reduce booking friction.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12  rounded-lg flex items-center justify-center mr-4 mt-1">
                      <img
                        src="/img/Smart-Campaign-Triggers.svg"
                        alt="Smart Campaign Triggers"
                        className="w-9 h-9 min-w-fit" // adjust size as needed
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Smart Campaign Triggers
                      </h3>
                      <p className="text-gray-600">
                        Launch automated campaigns based on real practice
                        activity - new appointments, completed treatments, or
                        payment status.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary-light to-blue-50 rounded-2xl p-8">
                {/* Process Flow Diagram */}
                <div className="space-y-6">
                  <div className="flex items-center" data-testid="step-1">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                      1
                    </div>
                    <div className="flex-1">
                      <Card>
                        <CardContent className="p-3">
                          <span className="text-gray-900 font-medium">
                            Patient books appointment in your PMS
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-px h-6 bg-primary"></div>
                  </div>

                  <div className="flex items-center" data-testid="step-2">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                      2
                    </div>
                    <div className="flex-1">
                      <Card>
                        <CardContent className="p-3">
                          <span className="text-gray-900 font-medium">
                            Connector instantly syncs to GoHighLevel
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="w-px h-6 bg-primary"></div>
                  </div>

                  <div className="flex items-center" data-testid="step-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                      3
                    </div>
                    <div className="flex-1">
                      <Card>
                        <CardContent className="p-3">
                          <span className="text-gray-900 font-medium">
                            Automated campaigns trigger immediately
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
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
                href="/schedule-a-call"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary font-semibold px-8 py-3 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
              >
                Book a Demo <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>
        {/* Key Features */}
        < section className="py-20 bg-gray-50" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-features-title"
              >
                Features That Drive Results
              </h2>
              <p className="text-xl text-gray-600 max-w-6xl mx-auto">
                Everything you need to sync dental practice data and run
                effective marketing campaigns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16  rounded-lg flex items-center justify-center mb-0">
                    <img
                      src="/img/Sync-What-Matters-Most.svg"
                      alt="FolderSync What Matters Most"
                      className="w-9 h-9" // adjust size as needed
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Sync What Matters Most
                  </h3>
                  <p className="text-gray-600">
                    Connect and automatically sync patient data, providers,
                    appointments, and payment history directly into GoHighLevel.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-0">
                    {/* <img
                  src="/Prove-ROI-with-Confidence.svg"
                  alt="Prove ROI with Confidence"
                  className="w-9 h-9" // adjust size as needed
                /> */}
                    <img
                      src="/img/Prove-ROI-with-Confidence1.svg"
                      alt="Prove ROI with Confidence"
                      className="w-9 h-9" // adjust size as needed
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Prove ROI with Confidence
                  </h3>
                  <p className="text-gray-600">
                    Show dental clients exactly what they're getting: new
                    patients, reactivations, total revenue, pending balances.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16  rounded-lg flex items-center justify-center mb-0">
                    <img
                      src="/img/HIPAA-Conscious-Design.svg"
                      alt="HIPAA Compliant Design"
                      className="w-9 h-9" // adjust size as needed
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    HIPAA Compliant Design
                  </h3>
                  <p className="text-gray-600">
                    Only essential business data is synced and auto-deleted
                    after secure delivery. No medical data is ever accessed.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16  rounded-lg flex items-center justify-center mb-0">
                    <img
                      src="/img/Set-It-and-Forget-It .svg"
                      alt="Set It and Forget It"
                      className="w-9 h-9" // adjust size as needed
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Set It and Forget It
                  </h3>
                  <p className="text-gray-600">
                    One-time setup (~45 minutes) with our team — we handle
                    everything from there. No ongoing maintenance required.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16  rounded-lg flex items-center justify-center mb-0">
                    <img
                      src="/img/Real-Time-Updates.png"
                      alt="Real-Time Updates"
                      className="w-9 h-9" // adjust size as needed
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Real-Time Updates
                  </h3>
                  <p className="text-gray-600">
                    Data syncs instantly when changes occur in either system. No
                    delays, no batch processing, no manual uploads.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16  rounded-lg flex items-center justify-center mb-0">
                    <img
                      src="/img/Analytics-Dashboard.png"
                      alt="Analytics Dashboard"
                      className="w-9 h-9" // adjust size as needed
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Analytics Dashboard
                  </h3>
                  <p className="text-gray-600">
                    Monitor sync activity, view pending updates, and track data
                    flow between your systems with detailed reporting.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section >
        {/* How It Works */}
        < section className="py-20 bg-white" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-how-it-works-title"
              >
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get up and running in minutes with our simple, guided setup
                process.
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8 mb-12">
              <div className="text-center" data-testid="how-it-works-step-1">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Install the App
                </h3>
                <p className="text-gray-600">
                  Download from the marketplace and install on your CRM account
                </p>
              </div>

              <div className="text-center" data-testid="how-it-works-step-2">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Choose Sync Direction
                </h3>
                <p className="text-gray-600">
                  Select one-way from PMS to CRM, or two-way sync between both
                  systems.
                </p>
              </div>

              <div className="text-center" data-testid="how-it-works-step-3">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Map Data Fields
                </h3>
                <p className="text-gray-600">
                  One-time field mapping between PMS and CRM during setup.
                </p>
              </div>

              <div className="text-center" data-testid="how-it-works-step-4">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Start Syncing
                </h3>
                <p className="text-gray-600">
                  Real-time data sync begins automatically. Monitor progress in
                  your dashboard.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-base px-6 py-3 whitespace-pre-wrap"
                data-testid="button-see-onboarding"
              >
                <Link href="/onboarding">
                  See what onboarding actually looks like →
                </Link>
              </Button>
            </div>
          </div>
        </section>
        {/* Testimonials / Reviews Slider */}
        <section className="py-20 bg-primary-light" data-testid="section-testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">

              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                data-testid="text-testimonials-title"
              >
                Why Agencies Love It
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real reviews from marketing agencies using our Dentrix & Open Dental connectors to scale practice growth.
              </p>
            </div>

            <div className="relative px-2 sm:px-12">
              <Carousel
                setApi={setCarouselApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-4 md:basis-1/2 lg:basis-1/3 flex"
                    >
                      <Card className="bg-white border border-gray-200/80 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between w-full h-full">
                        <CardContent className="p-6 flex flex-col justify-between h-full">
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <div className="flex text-amber-400">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} size={16} fill="currentColor" />
                                ))}
                              </div>
                              {/* {testimonial.date && (
                                <span className="text-xs text-gray-400 font-medium">
                                  {testimonial.date}
                                </span>
                              )} */}
                            </div>
                            <p
                              className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 font-normal line-clamp-3"
                              data-testid={`testimonial-text-${index}`}
                            >
                              "{testimonial.text}"
                            </p>
                          </div>

                          <div className="border-t border-gray-100 pt-3 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 text-primary font-bold flex items-center justify-center text-sm shrink-0 border border-blue-200 shadow-xs">
                              {testimonial.initials}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div
                                className="font-bold text-gray-900 text-sm flex items-center gap-1.5 truncate"
                                data-testid={`testimonial-name-${index}`}
                              >
                                <span>{testimonial.name}</span>
                              </div>
                              {testimonial.company && (
                                <div
                                  className="text-xs text-gray-500 font-medium truncate"
                                  data-testid={`testimonial-company-${index}`}
                                >
                                  {testimonial.company}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex -left-5 lg:-left-6 bg-white hover:bg-primary hover:text-white border-gray-200 shadow-md text-gray-700" />
                <CarouselNext className="hidden sm:flex -right-5 lg:-right-6 bg-white hover:bg-primary hover:text-white border-gray-200 shadow-md text-gray-700" />
              </Carousel>

              {/* Slider Pagination Dots */}
              {slideCount > 0 && (
                <div className="flex justify-center gap-2 mt-8">
                  {[...Array(slideCount)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => carouselApi?.scrollTo(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === i
                        ? "w-8 bg-primary"
                        : "w-2.5 bg-gray-300 hover:bg-gray-400"
                        }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
        {/* Latest from the Blog */}
        <section className="py-20 bg-white border-t border-gray-100" data-testid="section-latest-blog">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              {/* <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider block mb-3">
                Insights & Updates
              </span> */}
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
                data-testid="text-blog-section-title"
              >
                Latest from the Blog
              </h2>
              <p className="text-xl text-gray-600 max-w-6xl mx-auto">
                Strategies, integration guides, and AI trends for modern dental marketing agencies and growing practices.
              </p>
            </div>

            {blogLoading ? (
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-2xl border border-gray-200 p-6 h-96 animate-pulse flex flex-col justify-between">
                    <div>
                      <div className="h-44 bg-gray-100 rounded-xl mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/3 mb-3"></div>
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-gray-100 rounded w-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : !blogError && blogPosts.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {blogPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:border-primary/40 transition-all group"
                  >
                    <div>
                      {post.imageUrl && (
                        <a href={post.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
                          <img
                            src={post.imageUrl}
                            alt={post.altText || post.title}
                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </a>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-3">
                          <span className="bg-blue-50 px-2.5 py-1 rounded-md">{post.category}</span>
                          {post.date && (
                            <>
                              <span className="text-gray-400">·</span>
                              <span className="text-gray-500">{post.date}</span>
                            </>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-3 leading-snug">
                          <a href={post.link} target="_blank" rel="noopener noreferrer">
                            {post.title}
                          </a>
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed ">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform"
                      >
                        Continue reading <ArrowRight size={16} className="ml-1.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            <div className="text-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-base px-8 py-3"
                data-testid="button-view-all-blogs"
              >
                <a href="/blog">
                  Explore all blog posts →
                </a>
              </Button>
            </div>
          </div>
        </section>
        {/* FAQ Section */}
        < section className="py-20 bg-gray-50" >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-faq-title"
              >
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our dental PMS connector.
              </p>
            </div>

            <FAQ items={faqItems} />
          </div>
        </section >
        {/* Final CTA */}
        < section className="py-20 bg-primary" >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-3xl lg:text-4xl font-bold text-white mb-6"
              data-testid="text-final-cta-title"
            >
              Get Your Dental Client Data Flowing Into GoHighLevel —
              Automatically
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 120+ marketing agencies already using our connector to grow
              their dental clients' practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary-dark hover:text-white text-lg px-8 py-4"
                data-testid="button-final-buy-dentrix"
              >
                <a
                  href="https://marketplace.gohighlevel.com/integration/6836bcb8eb1ce7acf9241b8b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Dentrix → GHL
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary-dark hover:text-white text-lg px-8 py-4"
                data-testid="button-final-buy-open-dental"
              >
                <a
                  href="https://marketplace.gohighlevel.com/integration/67972665fc19f6448bf732af"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy Open Dental → GHL
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary-dark hover:text-white text-lg px-8 py-4"
                data-testid="button-final-book-demo"
              >
                <a
                  href="/schedule-a-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Demo
                </a>
              </Button>
            </div>

            <div className="text-blue-100 text-sm">
              <Shield size={16} className="inline mr-2" />
              <span data-testid="text-final-guarantees">
                HIPAA Compliant • 45-minute setup • Real-time sync
              </span>
            </div>
          </div>
        </section >
        {/*  */}
        < section className="py-20 bg-gray-50" >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2
                className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
                data-testid="text-features-title"
              >
                Dentrix, Eaglesoft & Open Dental API Integration by SmartSync.One
              </h2>
              <p className="text-xl text-gray-600 max-w-7xl mx-auto">
                SmartSync.One is the integration layer between 11 leading dental and orthodontic PMS platforms and the CRMs your team already runs on. Built for agencies, DSOs, and multi-location practices who need their marketing and their production data to finally agree. Dental APIs and PMS Integrations for Modern Practices.
              </p>
            </div>
          </div>
        </section >
      </div >
    </>
  );
}
