import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {  Menu } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/supported-platforms", label: "Supported Platforms" },
    { href: "/onboarding", label: "Onboarding" },
    { href: "/education", label: "Education" },
    { href: "/contact", label: "Contact" },
  ];

  const NavLink = ({ href, label, mobile = false }: { href: string; label: string; mobile?: boolean }) => (
    <Link href={href}>
      <span
        className={`${mobile ? "block px-4 py-2" : "inline-block"
          } text-gray-700 hover:text-primary font-medium transition-colors cursor-pointer ${location === href ? "text-primary" : ""
          }`}
        onClick={mobile ? () => setIsOpen(false) : undefined}
        data-testid={`nav-${href.replace("/", "home")}`}
      >
        {label}
      </span>
    </Link>
  );

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <span
              className="flex items-center cursor-pointer"
              data-testid="logo"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3">
                <img
                  src="/sso_logo.svg"
                  alt="SSo Logo"
                  className="w-9 h-9" // adjust size as needed
                />
              </div>

              <span className="text-xl font-bold text-gray-900">
                Smart Sync
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              data-testid="button-book-demo"
              className="bg-primary text-white hover:bg-primary-dark"
            >
              <a
                href="https://calendly.com/dental-support-varianceinfotech/book-a-demo?month=2025-08"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Demo
              </a>
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    data-testid="button-mobile-menu"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col gap-4 mt-8">
                    {navLinks.map((link) => (
                      <NavLink
                        key={link.href}
                        href={link.href}
                        label={link.label}
                        mobile
                      />
                    ))}
                    <Button
                      className="mt-4 bg-primary text-white hover:bg-primary-dark"
                      data-testid="button-mobile-demo"
                    >
                      <a
                        href="https://calendly.com/dental-support-varianceinfotech/book-a-demo?month=2025-08"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Demo
                      </a>
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
