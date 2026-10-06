import React, { useState, useEffect } from "react";
import SEO from "@/components/SEO";
import SchemaMarkup, { getBreadcrumbSchema } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Gift,
  Lock,
  ArrowRight,
  CheckSquare,
  Square,
  Check,
  Clock,
  BookOpen,
  Lightbulb,
  Sparkles,
  MapPin,
  MessageSquare,
  Tag,
  CheckCircle2,
  Users,
  Trophy,
  Rocket,
  Handshake,
  ShieldCheck,
} from "lucide-react";

export default function LevelUpLanding() {
  // All topics start UNSELECTED at start as requested by user
  const [selectedTopics, setSelectedTopics] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState({ days: 28, hours: 5, minutes: 8, seconds: 42 });
  const [iframeUrl, setIframeUrl] = useState("https://api.leadconnectorhq.com/widget/form/pCduXevfcFAFdWBrduXx?notrack=true");

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const scrollToRegister = () => {
    const baseUrl = "https://api.leadconnectorhq.com/widget/form/pCduXevfcFAFdWBrduXx";
    let url = baseUrl + "?notrack=true";

    if (selectedTopics.length > 0) {
      const selectedTexts = selectedTopics.map(idx => topics[idx]);
      const mapped = selectedTexts.map(v => v.indexOf("None of these") !== -1 ? "Other" : v);
      const commaVal = mapped.join(",");

      url += "&AXwhWU91YQc1axbEBqYe=" + encodeURIComponent(commaVal);
      url += "&pain=" + encodeURIComponent(commaVal);
      url += "&checkbox_4v7h=" + encodeURIComponent(commaVal);

      mapped.forEach(v => {
        url += "&AXwhWU91YQc1axbEBqYe=" + encodeURIComponent(v);
      });
    }

    setIframeUrl(url);

    const el = document.getElementById("register-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleTopic = (index: number) => {
    setSelectedTopics(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const topics = [
    "Your PMS and GHL don't talk to each other in real time",
    "Your GHL calendar doesn't show what's actually happening in the PMS",
    "Your Voice AI can't see real patient data",
    "You're juggling five calendar links across ad campaigns instead of one",
    "Your intake forms don't sync back to the PMS automatically",
    "None of these — but something else is broken. Bring it anyway."
  ];

  const schedule = [
    {
      date: "Mon, Oct 26",
      time: "5:00pm - 7:00pm",
      title: "LevelUp Kickoff",
      desc: "Easiest place to grab us for a first hello..",
      // location: "Main Networking Halls",
      // badge: "Day 1",
      icon: Rocket
    },
    {
      date: "Tue, Oct 27",
      time: "5:00 - 7:30 PM",
      title: "Exhibitor Networking",
      desc: "The longest open window of the week.",
      // location: "Exhibitor Floor & Lounges",
      // badge: "Day 2",
      icon: Users
    },
    {
      date: "Wed, Oct 28",
      time: "4:00 - 7:00 PM & 7:00 - 11:00 PM",
      title: "Exhibitor Networking + Awards Gala",
      desc: "Best day for a proper sit-down conversation.",
      // location: "Grand Ballroom & Networking Lounge",
      // badge: "Day 3",
      icon: Trophy
    },
    {
      date: "Thu, Oct 29",
      time: "3:30 - 4:00 PM",
      title: "Closing Exhibitor Networking",
      desc: "last chance before everyone heads to the airport.",
      // location: "Networking Hub",
      // badge: "Day 4",
      icon: Handshake
    }
  ];

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://smartsync.one/" },
    { name: "LevelUp 2026", url: "https://smartsync.one/levelup" },
  ]);

  return (
    <>
      <SEO
        title="LevelUp 2026 Dallas | SmartSync.One PMS to GHL Integration"
        description="Meet SmartSync.One at LevelUp Dallas 2026. 120+ dental customers, 40+ PMS/EHRs. Register to claim your Dental Growth Playbook and spin for 6 months Free."
        keywords="LevelUp 2026, SmartSync.One, GoHighLevel Dental Integration, Dentrix GHL sync, Open Dental GHL, Dental Marketing Agency"
        canonical="https://smartsync.one/levelup"
      />
      <SchemaMarkup schema={breadcrumbSchema} />

      <div className="min-h-screen bg-white text-gray-900 font-sans">

        {/* HERO SECTION - LIGHT THEME (Matches /dental-marketing-attribution) */}
        <section className="hero-gradient py-8 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

            {/* Header Event Pill */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-primary/20 text-primary text-sm font-medium shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <Calendar className="w-4 h-4 text-primary shrink-0" />
                <span>LevelUp 2026 &middot; Oct 26&ndash;29 &middot; Hilton Anatole, Dallas</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="max-w-6xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                120+ dental customers. 40+ PMS/EHRs.{" "}
                <span className="text-primary">Now we want to learn from You.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-6xl mx-auto leading-relaxed">
                We've learned a lot connecting dental PMS data to CRM. At LevelUp, sit down with us for a real conversation about Dental + CRM + Automation + Growth. No sales presentation. No pitch deck.
              </p>

              {/* Primary CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <Button
                  onClick={scrollToRegister}
                  size="lg"
                  className="bg-primary hover:bg-primary-dark text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-md transition-all hover:scale-105 whitespace-pre-wrap"
                >
                  Register & get your Dental Growth Playbook
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>

              {/* Guarantee Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 px-4 py-2 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
                  <span>Handed to you when we meet in person at LevelUp.</span>
                </div>
                <div className="flex items-center gap-2  border border-orange-500 px-4 py-2 rounded-lg text-gray-800 bg-orange-50 shadow-xs font-bold ">
                  <Gift className="w-5 h-5 text-orange-500 shrink-0 animate-bounce" />
                  <span>Plus something special for agencies ready to grow. Ask us in person.</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 2: THE AGENCY FORUM */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-5xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
                <MessageSquare className="w-4 h-4 text-primary shrink-0" />
                The conversation
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-4">
                What's working? What's not? What should we build next?
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Tick what's not working for you &mdash; it goes straight to us, so we arrive already knowing what to talk about.
              </p>
            </div>

            {/* Checklist Topics - Single Column Stacked Card */}
            <div id="pain-list" className="bg-white border border-gray-200/90 rounded-2xl overflow-hidden shadow-sm mb-6 sm:max-w-4xl mx-auto">
              <div className="divide-y divide-gray-100">
                {topics.map((topic, idx) => {
                  const isChecked = selectedTopics.includes(idx);
                  const isLast = idx === topics.length - 1;
                  return (
                    <div
                      key={idx}
                      onClick={() => toggleTopic(idx)}
                      className={`flex items-center gap-4 px-6 py-4 cursor-pointer transition-all duration-150 ${isLast
                        ? isChecked
                          ? "bg-blue-50/80"
                          : "bg-slate-50/70 hover:bg-slate-100/60"
                        : isChecked
                          ? "bg-blue-50/60"
                          : "bg-white hover:bg-slate-50/60"
                        }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        value={topic}
                        readOnly
                        className="hidden"
                      />
                      <div className="shrink-0">
                        {isChecked ? (
                          <div className="w-5 h-5 rounded bg-primary flex items-center justify-center text-white shadow-sm transition-transform scale-105">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded border border-gray-300 bg-white flex items-center justify-center transition-colors" />
                        )}
                      </div>
                      <span className={`text-sm sm:text-base leading-snug ${isChecked ? "text-gray-900 font-medium" : "text-gray-700 font-normal"
                        }`}>
                        {topic}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Button & Dynamic Selection Counter */}
            <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-center gap-4 sm:gap-6 mt-6">
              <Button
                onClick={scrollToRegister}
                size="lg"
                className="register-trigger bg-primary hover:bg-primary-dark text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-md transition-all sm:whitespace-nowrap whitespace-pre-wrap"
              >
                Register &mdash; we'll bring these to the table
              </Button>

              <p id="pain-count" className="text-sm font-medium text-gray-500">
                {selectedTopics.length === 0 ? (
                  "Nothing ticked yet? No problem, tell us in person."
                ) : selectedTopics.length === 1 ? (
                  <>1 selected. We'll come prepared to talk about it.</>
                ) : (
                  <>{selectedTopics.length} selected. We'll come prepared to talk about them.</>
                )}
              </p>
            </div>
          </div>
        </section>


        {/* SECTION 3: WHAT YOU GET FOR SHOWING UP */}
        <section className="py-20 bg-primary-light">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full border border-primary/30 shadow-sm">
                <Sparkles className="w-4 h-4 text-primary shrink-0" />
                You bring your experience. We bring what we've learned.
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-3">
                What you get for showing up.
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                You're taking time to meet us. Here's what we bring to the table.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-card border-gray-200 shadow-sm rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:shadow-md">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-light to-blue-50 border border-primary/20 flex items-center justify-center mb-6 text-primary">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    The Dental Growth Playbook
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Practical lessons, use cases and ideas from working across the dental ecosystem. Yours when we meet — Free, whether you buy or not.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-gray-200 shadow-sm rounded-2xl overflow-hidden hover:border-primary/40 transition-all hover:shadow-md">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-light to-blue-50 border border-primary/20 flex items-center justify-center mb-6 text-primary">
                    <Lightbulb className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    Ideas get built for Free
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Tell us what PMS-to-GHL sync should do. The best ideas may get built for Free.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Vibrant Blue Highlighted Offer Banner (Redesigned per Screenshot 2) */}
            <div className="bg-gradient-to-r from-[#2082eb] via-[#298bf3] to-[#3b82f6] rounded-[28px] p-4 sm:p-6 relative overflow-hidden mb-10 shadow-xl shadow-blue-500/20 text-white flex justify-between items-center">
              {/* Curved Quarter Circle Overlay on Top-Left */}
              <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-white/15 pointer-events-none" />

              <div className="relative z-10 max-w-6xl justify-between md:flex items-center">
                <div className="mr-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                    Ask about the In-Person Offer
                  </h3>
                  <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6 font-normal max-w-2xl">
                    Special terms, with extra months on us, for agencies ready to grow with SmartSync.One. We share the details in person only.
                  </p>
                </div>
                <div>

                  <Button
                    onClick={scrollToRegister}
                    variant="outline"
                    className="border border-white/90 bg-white/10 hover:bg-white hover:text-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 shadow-sm backdrop-blur-sm sm:whitespace-nowrap whitespace-pre-wrap"
                  >
                    Register & get your Dental Growth Playbook
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 4: THE WHEEL IS LOCKED */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Premium Card Box Wrapper */}
            <div className="bg-gradient-to-br from-blue-50/70 via-white to-sky-50/50 border border-primary/20 rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
              {/* Background ambient glows */}
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

              <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-3">
                  <Lock className="w-4 h-4 text-primary shrink-0" />
                  Unlocked in person only
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
                  The wheel is locked.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
                {/* Left Column: Visual Spin Wheel Illustration */}
                <div className="md:col-span-5 flex justify-center">
                  <img src="/img/free-months-discount-no-risk-offer.png" alt="Free months or a discount Wheel" />
                </div>

                {/* Right Column: Text Content */}
                <div className="md:col-span-7 text-left space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight leading-snug">
                    Free months or a discount. Nothing to lose.
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
                    Six real prizes &mdash; every one a win. Show your QR code when you find us in Dallas, and we spin it together.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* SECTION 5: EVENT SCHEDULE */}
        <section className="py-20 bg-gray-50 border-b border-gray-200/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full mb-4">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                Where to find us
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-3">
                No booth &mdash; we're working the room.
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                We don't have an exhibitor table this year, which means we're Free to be wherever the conversation is.
              </p>
            </div>

            {/* Schedule Cards Timeline */}
            <div className="grid grid-cols-1 gap-5">
              {schedule.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="group bg-white hover:bg-white border border-gray-200 hover:border-primary/40 rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                        <IconComponent className="w-6 h-6 transition-colors duration-300" />
                      </div>
                      <div className="space-y-1">
                        {/* <div className="flex flex-wrap items-center gap-2.5 mb-1">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary font-bold text-xs">
                            <Calendar className="w-3.5 h-3.5" />
                            {item.date}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 text-gray-600 font-medium text-xs">
                            <Clock className="w-3.5 h-3.5" />
                            {item.time}
                          </span>
                        </div> */}
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 pt-4 md:pt-0 border-gray-200 shrink-0 gap-2 flex-wrap">
                      <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-gray-800 font-bold text-xs shadow-sm">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        {item.date}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500">
                        <MapPin className="w-3.5 h-3.5 text-primary" />
                        {item.time}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* How to spot us banner callout */}
            {/* <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-primary/20 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h5 className="text-sm font-bold text-gray-900">How to spot our team in Dallas</h5>
                  <p className="text-xs text-gray-600">Look for team members wearing blue <strong>SmartSync.One</strong> badges at Hilton Anatole.</p>
                </div>
              </div>
              <Button
                onClick={scrollToRegister}
                variant="outline"
                size="sm"
                className="shrink-0 border-primary text-primary hover:bg-primary hover:text-white font-semibold rounded-lg text-xs transition-colors"
              >
                Schedule 1:1 Meetup
              </Button>
            </div> */}
          </div>
        </section>


        {/* SECTION 6: HOW TO REGISTER & IFRAME BOOKING FORM */}
        <section className="py-20 bg-primary-light" id="register-form">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full border border-primary/30 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                How it works
              </span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-4 mb-3">
                Register. Meet us. Get your playbook.
              </h2>
            </div>

            {/* 3 Step Instruction Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-4 text-sm">
                  1
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1">Register on this page</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Takes under a minute — name, company, and email.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-4 text-sm">
                  2
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1">Get your QR code by email</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  It's your ticket to a real conversation at LevelUp.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center mb-4 text-sm">
                  3
                </div>
                <h4 className="text-base font-bold text-gray-900 mb-1">Find us in Dallas, show your QR</h4>
                <p className="text-gray-600 text-xs leading-relaxed">
                  Collect your Dental Growth Playbook, share your wishlist, spin the wheel.
                </p>
              </div>
            </div>

            {/* LeadConnector Form iFrame Container */}
            <div className="register-form-wrap bg-white rounded-2xl shadow-xl overflow-hidden p-2 sm:p-4 border border-gray-200">
              <div className="max-w-7xl mx-auto px-4 py-10">
                <iframe
                  src={iframeUrl}
                  style={{
                    width: "100%",
                    height: "650px",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  id="inline-pCduXevfcFAFdWBrduXx"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="LevelUp-Meeting"
                  data-height="622"
                  data-layout-iframe-id="inline-pCduXevfcFAFdWBrduXx"
                  data-form-id="pCduXevfcFAFdWBrduXx"
                  data-cookie-consent="true"
                  data-cookie-consent-provider="auto"
                  title="LevelUp-Meeting"
                />
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 7: FOOTER COUNTDOWN & SEE YOU IN DALLAS */}
        <div className="bg-gradient-to-r from-[#2082eb] via-[#298bf3] to-[#3b82f6] rounded-[28px] p-4 sm:p-6 relative overflow-hidden mb-10 shadow-xl shadow-blue-500/20 text-white flex justify-center items-center max-w-5xl sm:mx-auto  mr-5 ml-5 p-6 mt-10">
          {/* Curved Quarter Circle Overlay on Top-Left */}
          <div className="hidden sm:block absolute -top-16 -left-16 w-56 h-56 rounded-full bg-white/15 pointer-events-none" />

          <div className="relative z-10  justify-center flex flex-col gap-4 items-center">

            <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-primary text-sm font-semibold rounded-full border border-primary/30 shadow-sm">
              <MapPin className="w-4 h-4 text-primary shrink-0" />
              Countdown to Dallas
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white  tracking-tight text-center">
              See you in Dallas.
            </h3>
            <p className="text-white/90 text-sm sm:text-base text-center leading-relaxed  font-normal max-w-3xl">
              Special terms, with extra months on us, for agencies ready to grow with SmartSync.One. We share the details in person only.
            </p>

            <div className="flex items-center justify-center gap-2 mb-6 sm:gap-6 max-w-xs sm:max-w-sm mx-auto">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3.5 rounded-xl w-18 sm:w-20 text-center">
                <span className="text-xl sm:text-2xl font-bold text-white block">{timeLeft.days}</span>
                <span className="text-[10px] text-white/80 uppercase tracking-wider font-semibold">Days</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3.5 rounded-xl w-18 sm:w-20 text-center">
                <span className="text-xl sm:text-2xl font-bold text-white block">{timeLeft.hours}</span>
                <span className="text-[10px] text-white/80 uppercase tracking-wider font-semibold">Hours</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3.5 rounded-xl w-18 sm:w-20 text-center">
                <span className="text-xl sm:text-2xl font-bold text-white block">{timeLeft.minutes}</span>
                <span className="text-[10px] text-white/80 uppercase tracking-wider font-semibold">Mins</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3.5 rounded-xl w-18 sm:w-20 text-center">
                <span className="text-xl sm:text-2xl font-bold text-white block">{timeLeft.seconds}</span>
                <span className="text-[10px] text-white/80 uppercase tracking-wider font-semibold">Secs</span>
              </div>
            </div>

            <Button
              onClick={scrollToRegister}
              variant="outline"
              className="border border-white/90 bg-white/10 hover:bg-white hover:text-blue-600 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 shadow-sm backdrop-blur-sm whitespace-pre-wrap"
            >
              Register & get your Dental Growth Playbook
            </Button>



          </div>
        </div>

      </div>
    </>
  );
}

