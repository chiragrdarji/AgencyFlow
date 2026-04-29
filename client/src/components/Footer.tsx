import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {Building2, MapPin, Mail, Phone } from "lucide-react";
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
    { href: "/dental-marketing-attribution", label: "Dental Marketing Attribution Software" },
    { href: "/dental-analytics-dashboard", label: "Dental Analytics Dashboard" },
    { href: "/for-dental-marketing-agencies", label: "For Dental Marketing Agencies" },
    { href: "/treatment-tracking-software", label: "Treatment Tracking & Revenue Pipeline Intelligence" },
    { href: "/dental-pms-integrations", label: "Dental PMS Integrations" },
    { href: "/how-smartsync-works", label: "How SmartSync Works" },
    { href: "/dentrix-crm-integration", label: " Dentrix CRM Integration" },
    { href: "/open-dental-crm-integration", label: "Open Dental CRM Integration" },
    { href: "/eaglesoft-crm-integration", label: "Eaglesoft CRM Integration" },
    { href: "/gohighlevel-dental-integration", label: "GoHighLevel Dental Integration" },
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/supported-platforms", label: "Supported Platforms" },
    { href: "/onboarding", label: "Onboarding" },
    { href: "/education", label: "Education Materials" },
    { href: "/contact", label: "Contact" },
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
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3">
                <img
                  src="/img/sso_logo.svg"
                  alt="SSo Logo"
                  className="w-9 h-9" // adjust size as needed
                />
              </div>
              <span className="text-xl font-bold">Smart Sync</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Seamless data sync between dental practice management systems and
               CRM for marketing agencies and dental practices.
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Building2 size={16} className="mr-3 w-4" />
                <span data-testid="text-company-name">Smart Sync </span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-3 w-4" />
                <span data-testid="text-address">
                  30 N Gould St. Sheridan, WY 82801 USA
                </span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 w-4" />
                <a href="mailto:info@smartsync.one" data-testid="text-email">
                  info@smartsync.one
                </a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-3 w-4" />
                <a href="tel:+16308618263" data-testid="text-phone">
                  +1 630 861 8263
                </a>
              </div>
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
                  <Link href={link.href}>
                    <span
                      className="hover:text-white transition-colors cursor-pointer"
                      data-testid={`link-footer-${link.label
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form with Validation */}
          <div>
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
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 py-8 text-center text-sm text-gray-400">
          <p className="mb-2">
            All product names, logos, and brands are property of their respective owners. Use of these names, logos, and brands does not imply endorsement.
          </p>
          <p data-testid="text-copyright">
            &copy; Smart Sync . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
