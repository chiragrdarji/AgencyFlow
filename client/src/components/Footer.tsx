import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, MapPin, Mail, Phone } from "lucide-react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

// 1️⃣ Define schema
const footerFormSchema = z.object({
  firstname: z.string().min(2, "Name must be at least 2 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required") // Required first
    .regex(/^\d+$/, "Phone number must contain only digits") // Only digits
    .min(10, "Phone number must be at least 10 digits") // Min length
});


type FooterFormData = z.infer<typeof footerFormSchema>;

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const features = [
    { href: "/open-dental-gohighlevel-integration", label: " Open Dental to GHL Integration" },
    { href: "/dentrix-gohighlevel-integration", label: " Dentrix to GHL Integration" },
    { href: "/supported-platforms", label: "Suppported Platforms" },
    { href: "/dental-marketing-attribution", label: "Dental Marketing Attribution Software" },
    { href: "/dental-analytics-dashboard", label: "Dental Analytics Dashboard" },
    { href: "/for-dental-marketing-agencies", label: "For Dental Marketing Agencies" },
    { href: "/treatment-tracking-software", label: "Treatment Tracking & Revenue Pipeline Intelligence" },
    { href: "/dental-pms-integrations", label: "Dental PMS Integrations" },
    { href: "/how-smartsync-works", label: "How SmartSync.One Works" },
    { href: "/dentrix-crm-integration", label: " Dentrix CRM Integration" },
    { href: "/open-dental-crm-integration", label: "Open Dental CRM Integration" },
    { href: "/eaglesoft-crm-integration", label: "Eaglesoft CRM Integration" },
    { href: "/gohighlevel-dental-integration", label: "GoHighLevel Dental Integration" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    // { href: "/supported-platforms", label: "Supported Platforms" },
    { href: "/onboarding", label: "Onboarding" },
    { href: "/education", label: "Education Materials" },
    { href: "/contact", label: "Contact Us" },
    { href: "/blog", label: "Blog" },
    { href: "/schedule-a-call", label: "Book a Demo" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/levelup", label: "Meet us at Levelup" },
  ];

  // 2️⃣ Setup form
  const form = useForm<FooterFormData>({
    resolver: zodResolver(footerFormSchema),
    defaultValues: {
      firstname: "",
      name: "",
      email: "",
      phone: "",
    },
  });
  const contactMutation = useMutation({
    mutationFn: async (data: any) => {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to send message");
      }

      return response.json();
    },
    onSuccess: (data: any) => {
      toast({
        title: "Message Sent!",
        description: data.message || "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      console.error("Contact form error:", error);
      toast({
        title: "Error",
        description: error.message || "Sorry, there was an error sending your message. Please try again.",
        variant: "destructive"
      });
    }
  });
  // 3️⃣ Handle submit
  const handleSubmit = (data: FooterFormData) => {
    contactMutation.mutate(data);
    // API request here...
  };

  useEffect(() => {
    form.reset();
  }, [form]);

  return (
    <footer className="bg-gray-900 text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="">
            <div className="flex items-center mb-6">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3">
                <img
                  src="/img/sso_logo.svg"
                  alt="SSo Logo"
                  className="w-9 h-9" // adjust size as needed
                />
              </div>
              <span className="text-xl font-bold">SmartSync.One</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Seamless data sync between dental practice management systems and
              CRM for marketing agencies and dental practices.
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Building2 size={16} className="mr-3 w-4" />
                <span data-testid="text-company-name">SmartSync.One </span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-3 w-4" />
                <span data-testid="text-address">
                  30 N Gould St. Sheridan, WY 82801 USA
                </span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 w-4" />
                <a href="mailto:support@smartsync.one" data-testid="text-email">
                  support@smartsync.one
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-3 w-4" />
                <a href="tel:+16308618263" data-testid="text-phone">
                  +1 630 861 8263
                </a>
              </div>

            </div>
            <div className="flex items-center space-x-4 mt-4">
              <a
                className=" hover:bg-gray-800  flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-200"
                href="https://www.facebook.com/people/SmartSyncOne/61590375405683/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                    fill="#1877F2"
                  />
                  <path
                    d="M16.671 15.543l.532-3.47h-3.328v-2.25c0-.949.465-1.874 1.956-1.874h1.514V4.996s-1.374-.235-2.686-.235c-2.741 0-4.533 1.662-4.533 4.669v2.613H7.078v3.47h3.047v8.385a12.18 12.18 0 003.85 0v-8.385h2.696z"
                    fill="#ffffff"
                  />
                </svg>
              </a>
              <a
                className=" hover:bg-gray-800 hover:border-[#FF0000]/80 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-red-500/20 transition-all duration-200"
                href="https://www.youtube.com/@SmartSync-One"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
                    fill="#FF0000"
                  />
                  <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#ffffff" />
                </svg>
              </a>
              <a
                className=" hover:bg-gray-800 hover:border-[#E1306C]/80 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-200"
                href="https://www.instagram.com/smartsync.one/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="footer-ig-grad" cx="30%" cy="107%" r="150%">
                      <stop offset="0%" stopColor="#fdf497" />
                      <stop offset="5%" stopColor="#fdf497" />
                      <stop offset="45%" stopColor="#fd5949" />
                      <stop offset="60%" stopColor="#d6249f" />
                      <stop offset="90%" stopColor="#285AEB" />
                    </radialGradient>
                  </defs>
                  <rect width="24" height="24" rx="6" fill="url(#footer-ig-grad)" />
                  <path
                    d="M12 5.838c2.007 0 2.245.008 3.037.044.733.034 1.13.156 1.395.259.35.136.6.299.863.562.263.263.426.513.562.863.103.265.225.662.259 1.395.036.792.044 1.03.044 3.037s-.008 2.245-.044 3.037c-.034.733-.156 1.13-.259 1.395-.136.35-.299.6-.562.863-.263.263-.513.426-.863.562-.265.103-.662.225-1.395.259-.792.036-1.03.044-3.037.044s-2.245-.008-3.037-.044c-.733-.034-1.13-.156-1.395-.259a2.32 2.32 0 0 1-.863-.562 2.32 2.32 0 0 1-.562-.863c-.103-.265-.225-.662-.259-1.395-.036-.792-.044-1.03-.044-3.037s.008-2.245.044-3.037c.034-.733.156-1.13.259-1.395.136-.35.299-.6.562-.863.263-.263.513-.426.863-.562.265-.103.662-.225 1.395-.259.792-.036 1.03-.044 3.037-.044zm0-1.638c-2.041 0-2.297.009-3.099.045-.8.037-1.348.164-1.826.35a3.953 3.953 0 0 0-1.428.93 3.953 3.953 0 0 0-.93 1.428c-.186.478-.313 1.026-.35 1.826C4.331 9.565 4.322 9.821 4.322 12s.009 2.435.045 3.099c.037.8.164 1.348.35 1.826.192.496.45.92.93 1.428.48.508.932.738 1.428.93.478.186 1.026.313 1.826.35.802.036 1.058.045 3.099.045s2.297-.009 3.099-.045c.8-.037 1.348-.164 1.826-.35a3.953 3.953 0 0 0 1.428-.93 3.953 3.953 0 0 0 .93-1.428c.186-.478.313-1.026.35-1.826.036-.802.045-1.058.045-3.099s-.009-2.297-.045-3.099c-.037-.8-.164-1.348-.35-1.826a3.953 3.953 0 0 0-.93-1.428 3.953 3.953 0 0 0-1.428-.93c-.478-.186-1.026-.313-1.826-.35-.802-.036-1.058-.045-3.099-.045z"
                    fill="#ffffff"
                  />
                  <path
                    d="M12 8.081a3.919 3.919 0 1 0 0 7.838 3.919 3.919 0 0 0 0-7.838zm0 6.398a2.479 2.479 0 1 1 0-4.958 2.479 2.479 0 0 1 0 4.958zM17.155 7.761a.916.916 0 1 1-1.832 0 .916.916 0 0 1 1.832 0z"
                    fill="#ffffff"
                  />
                </svg>
              </a>
              <a
                className=" hover:bg-gray-800 hover:border-[#0A66C2]/80 flex items-center justify-center hover:scale-110 hover:shadow-lg hover:shadow-blue-600/20 transition-all duration-200"
                href="https://www.linkedin.com/company/smart-sync-one"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#0A66C2" />
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
                    fill="#ffffff"
                  />
                </svg>
              </a>
            </div>

            <div className="hipaa-compliance-footer mt-6">
              <p>
                <img src="/img/hipaa-compliant-shield-badge.svg" alt="HIPAA Shield" className="w-[80px]" />

              </p>
            </div>
          </div>

          {/* Features */}
          <div >
            <h3 className="font-semibold mb-4">Features</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {features.map((links) => (
                <li key={links.href}>
                  <Link href={links.href}>
                    <span
                      className="hover:text-white transition-colors cursor-pointer"
                      data-testid={`link-footer-${links.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {links.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>
                    <span
                      className="hover:text-white transition-colors cursor-pointer"
                      data-testid={`link-footer-${link.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form with Validation */}
          {/* <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            {isClient && (
              <Form {...form}>
                <form
                  className="space-y-3"
                  onSubmit={form.handleSubmit(handleSubmit)}
                >
                  <FormField
                    control={form.control}
                    name="firstname"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="First Name"
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-primary"
                            data-testid="input-footer-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Last Name"
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-primary"
                            data-testid="input-footer-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Email"
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-primary"
                            data-testid="input-footer-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Phone"
                            className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-primary"
                            data-testid="input-footer-phone"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-primary text-white hover:bg-primary-dark"
                    data-testid="button-footer-send"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            )}
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-12 py-8 text-center text-sm text-gray-400">
          <p className="mb-2">
            All product names, logos, and brands are property of their respective owners. Use of these names, logos, and brands does not imply endorsement.
          </p>
          <p data-testid="text-copyright">
            &copy; SmartSync.One . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
