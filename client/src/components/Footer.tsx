import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FolderSync, Building2, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/supported-platforms", label: "Supported Platforms" },
    { href: "/onboarding", label: "Onboarding" },
    { href: "/education", label: "Education Materials" },
    { href: "/contact", label: "Contact" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-3">
                <FolderSync className="text-white" size={16} />
              </div>
              <span className="text-xl font-bold">Dentrix Connector</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Seamless data sync between dental practice management systems and GoHighLevel CRM for marketing
              agencies and dental practices.
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Building2 size={16} className="mr-3 w-4" />
                <span data-testid="text-company-name">Dentrix Connector LLC</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-3 w-4" />
                <span data-testid="text-address">123 Main Street, Suite 456, Austin, TX 78701</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 w-4" />
                <span data-testid="text-email">support@dentrixconnector.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-3 w-4" />
                <span data-testid="text-phone">(555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="hover:text-white transition-colors cursor-pointer" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <form className="space-y-3" onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Name"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-primary"
                data-testid="input-footer-name"
              />
              <Input
                type="email"
                placeholder="Email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-primary"
                data-testid="input-footer-email"
              />
              <Input
                type="tel"
                placeholder="Phone"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-primary"
                data-testid="input-footer-phone"
              />
              <Button
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary-dark"
                data-testid="button-footer-send"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
          <p data-testid="text-copyright">&copy; 2024 Dentrix Connector LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
