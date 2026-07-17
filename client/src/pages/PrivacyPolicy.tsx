import SEO from "@/components/SEO";
import SchemaMarkup, { getBreadcrumbSchema } from "@/components/SchemaMarkup";
import { getMetaTags } from "@/lib/seoMeta";
import { Shield, Lock, FileText, Info, HelpCircle } from "lucide-react";

export default function PrivacyPolicy() {
  const metaTags = getMetaTags("privacyPolicy");

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: "https://smartsync.one/" },
    { name: "Privacy Policy", url: "https://smartsync.one/privacy-policy" },
  ]);

  return (
    <>
      <SEO {...metaTags} />
      <SchemaMarkup schema={breadcrumbSchema} />
      
      <div className="min-h-screen bg-gray-50/50">
        {/* Header */}
        <section className="hero-gradient py-20 text-center">
          <div className="max-w-6xl mx-auto px-4">
            <div className="inline-flex items-center px-4 bg-white  py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <Shield size={16} className="mr-2" />
              <span>Trust & Security</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Privacy <span className="text-primary">Policy</span> 
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Learn how we collect, use, protect, and process your information at  <a href="https://smartsync.one" target="_blank" className="hover:text-primary"> SmartSync.One.</a>
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-6 md:p-8 sm:p-12 space-y-12">
              
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Info className="text-primary w-6 h-6" />
                  Introduction
                </h2>
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    Welcome to <a href="https://smartsync.one" target="_blank" className="hover:text-primary"> SmartSync.One </a>("SmartSync.One", "we", "our", or "us").
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, use, protect, disclose, and process your information when you visit <a href="https://smartsync.one" target="_blank" className="hover:text-primary">https://smartsync.one</a>, use our applications, APIs, integrations, or related services (collectively, the "Service").
                  </p>
                  <p>
                    By accessing or using SmartSync.One, you agree to the collection and use of information in accordance with this Privacy Policy.
                  </p>
                  <p>
                    SmartSync.One provides secure synchronization between Dental Practice Management Systems (PMS), CRM platforms, marketing automation tools, and related business applications.
                  </p>
                </div>
              </div>

           

              {/* Definitions */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="text-primary w-6 h-6" />
                  Definitions
                </h2>
                <div className="grid gap-6 md:grid-cols-2 mt-6">
                  {[
                    { term: "Service", desc: "The SmartSync.One website, applications, APIs, and integration platform." },
                    { term: "Personal Data", desc: "Information that identifies or can reasonably identify an individual." },
                    { term: "Usage Data", desc: "Information automatically collected while using our website or platform." },
                    { term: "Cookies", desc: "Small files stored on your device to improve website functionality and user experience." },
                    { term: "Data Controller", desc: "SmartSync.One determines how and why personal information is processed for our website visitors." },
                    { term: "Data Processor", desc: "For customer data synchronized through our platform, SmartSync.One acts as a data processor on behalf of our customers." },
                    { term: "Customer", desc: "Any organization or business using SmartSync.One." },
                    { term: "User", desc: "Any individual accessing or using the Service." }
                  ].map((item, index) => (
                    <div key={index} className="p-5 bg-gray-50 shadow-sm rounded-xl border border-gray-100">
                      <h3 className="font-bold text-gray-900 mb-2">{item.term}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Shield className="text-primary w-6 h-6" />
                  Information We Collect
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  We collect information necessary to provide, secure, and improve our services.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-50/50 shadow-sm rounded-xl border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Personal Information</h3>
                    <p className="text-gray-600 mb-3">You may provide:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>First and Last Name</li>
                      <li>Company Name</li>
                      <li>Email Address</li>
                      <li>Phone Number</li>
                      <li>Demo Booking Information</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50/50 rounded-xl shadow-sm border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Integration Data</h3>
                    <p className="text-gray-600 mb-3">Depending on your connected systems, SmartSync.One may process:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>CRM record identifiers</li>
                      <li>Dental PMS record identifiers</li>
                      <li>Appointment information</li>
                      <li>Contact information</li>
                      <li>Custom field mappings</li>
                      <li>Synchronization logs</li>
                    </ul>
                    <p className="text-gray-600 mt-3 text-sm italic">
                      SmartSync.One only processes the data necessary to perform synchronization between connected systems.
                    </p>
                  </div>

                  <div className="bg-gray-50/50 shadow-sm rounded-xl border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Usage Data</h3>
                    <p className="text-gray-600 mb-3">We automatically collect:</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600 list-disc pl-5">
                      <li>IP Address</li>
                      <li>Browser Type</li>
                      <li>Device Information</li>
                      <li>Operating System</li>
                      <li>Pages Visited</li>
                      <li>Session Duration</li>
                      <li>Referral URLs</li>
                      <li>Error Logs</li>
                      <li>Feature Usage</li>
                      <li>API Requests</li>
                    </ul>
                  </div>

                  <div className="bg-gray-50/50 shadow-sm rounded-xl border border-gray-100 p-6">
                    <h3 className="font-bold text-gray-900 mb-3">Cookies & Tracking Technologies</h3>
                    <p className="text-gray-600 mb-3">We use cookies and similar technologies to:</p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-1">
                      <li>Maintain secure sessions</li>
                      <li>Remember preferences</li>
                      <li>Improve website performance</li>
                      <li>Analyze traffic</li>
                      <li>Measure marketing effectiveness</li>
                    </ul>
                    <p className="text-gray-600 mt-3 text-sm italic">
                      Users can manage cookie preferences through their browser settings.
                    </p>
                  </div>
                </div>
              </div>

              

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Lock className="text-primary w-6 h-6" />
                  How We Use Your Information
                </h2>
                <div className="bg-gray-50/50 shadow-sm rounded-xl border border-gray-100 p-6">
                  <p className="text-gray-600 mb-3">We use collected information to:</p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-2">
                    <li>Deliver SmartSync.One services</li>
                    <li>Synchronize connected applications</li>
                    <li>Authenticate users</li>
                    <li>Manage customer accounts</li>
                    <li>Respond to support requests</li>
                    <li>Improve platform performance</li>
                    <li>Monitor system reliability</li>
                    <li>Provide product updates</li>
                    <li>Conduct analytics</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>

              

              {/* Dental Practice Data */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Dental Practice Data
                </h2>
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    SmartSync.One is designed to synchronize business information between authorized systems.
                  </p>
                  <p>
                    We process customer data only according to customer instructions and applicable agreements.
                  </p>
                  <p>
                    Customers remain responsible for ensuring they have the legal right to process and synchronize their data.
                  </p>
                </div>
              </div>

              

              {/* Data Sharing */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Data Sharing
                </h2>
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    We do not sell personal information.
                  </p>
                  <p>
                    Information may be shared with:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Cloud hosting providers</li>
                    <li>Payment processors</li>
                    <li>Customer support providers</li>
                    <li>Email delivery services</li>
                    <li>Analytics providers</li>
                    <li>Security monitoring providers</li>
                    <li>Legal authorities when required by law</li>
                  </ul>
                  <p className="text-sm italic">
                    All third-party providers are required to protect your information appropriately.
                  </p>
                </div>
              </div>

              

              {/* Data Retention */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Data Retention
                </h2>
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    We do not retain any PHI or We retain client’s personal information only as long as necessary to:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Provide our services</li>
                    <li>Meet contractual obligations</li>
                    <li>Resolve disputes</li>
                    <li>Maintain security</li>
                    <li>Comply with applicable laws</li>
                  </ul>
                  <p>
                    Synchronization logs may be retained for operational, auditing, and troubleshooting purposes.
                  </p>
                </div>
              </div>

              

              {/* International Data Transfers */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  International Data Transfers
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Your information may be processed or stored in countries outside your jurisdiction. Where required, appropriate safeguards are implemented to protect transferred data.
                </p>
              </div>

              

              {/* Security */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Security
                </h2>
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    We implement industry-standard technical and organizational measures including:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Encryption in transit</li>
                    <li>Secure cloud infrastructure</li>
                    <li>Access controls</li>
                    <li>Authentication mechanisms</li>
                    <li>Activity monitoring</li>
                    <li>Regular security updates</li>
                  </ul>
                  <p>
                    While we strive to protect your information, no internet transmission or storage method can be guaranteed to be completely secure.
                  </p>
                </div>
              </div>

              

              {/* Your Privacy Rights */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Your Privacy Rights
                </h2>
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    Depending on your location, you may have rights to:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Access your information</li>
                    <li>Correct inaccurate information</li>
                    <li>Delete personal information</li>
                    <li>Restrict processing</li>
                    <li>Object to processing</li>
                    <li>Request data portability</li>
                    <li>Withdraw consent where applicable</li>
                  </ul>
                  <p>
                    To exercise these rights, please contact us.
                  </p>
                </div>
              </div>

              

              {/* GDPR & CCPA Compliance */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  GDPR & CCPA Compliance
                </h2>
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    Where applicable, SmartSync.One supports customer compliance with:
                  </p>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>General Data Protection Regulation (GDPR)</li>
                    <li>California Consumer Privacy Act (CCPA)</li>
                    <li>California Privacy Rights Act (CPRA)</li>
                  </ul>
                  <p>
                    Customers remain responsible for complying with privacy laws governing the data they upload or synchronize.
                  </p>
                </div>
              </div>

              

              {/* Third-Party Integrations */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Third-Party Integrations
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  SmartSync.One integrates with third-party platforms including Dental Practice Management Systems, CRM platforms, marketing automation software, and communication services. Your use of these integrations is also subject to the privacy policies of those providers.
                </p>
              </div>

              

              {/* Payment Information */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Payment Information
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Payments are securely processed through trusted third-party payment providers. SmartSync.One does not store complete credit card or payment card information on its servers.
                </p>
              </div>

              

              {/* Analytics & Marketing */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Analytics & Marketing
                </h2>
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    We may use analytics and marketing tools to understand website performance and improve customer experience.
                  </p>
                  <p>
                    These services may use cookies and similar tracking technologies.
                  </p>
                  <p>
                    You may opt out of promotional emails at any time.
                  </p>
                </div>
              </div>

              

              {/* Children's Privacy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Children's Privacy
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  SmartSync.One is intended for business use and is not directed toward individuals under the age of 18. We do not knowingly collect personal information from children.
                </p>
              </div>

              

              {/* External Links */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  External Links
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those external websites.
                </p>
              </div>

              

              {/* Changes to This Privacy Policy */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Changes to This Privacy Policy
                </h2>
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    We may update this Privacy Policy periodically.
                  </p>
                  <p>
                    Changes become effective immediately upon publication on this page.
                  </p>
                  <p>
                    We encourage users to review this page regularly.
                  </p>
                </div>
              </div>

             

              {/* Contact Us */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h2>
                <div className="text-gray-600 space-y-4 leading-relaxed">
                  <p>
                    If you have questions regarding this Privacy Policy, please contact us.
                  </p>
                  <div className="bg-gray-50/50 shadow-sm rounded-xl border border-gray-100 p-6 space-y-2 mt-4 max-w-md">
                    <p className="font-bold text-gray-900">SmartSync.One</p>
                    <p>
                      <span className="font-semibold text-gray-800">Website:</span>{" "}
                      <a href="https://smartsync.one" className="text-primary hover:underline">
                        https://smartsync.one
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-gray-800">Email:</span>{" "}
                      <a href="mailto:support@smartsync.one" className="text-primary hover:underline">
                        support@smartsync.one
                      </a>
                    </p>
                    <p>
                      <span className="font-semibold text-gray-800">Phone:</span>{" "}
                      <a href="tel:+16308618263" className="text-primary hover:underline">
                        +1 (630) 861-8263
                      </a>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}
