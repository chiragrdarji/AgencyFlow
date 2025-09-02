import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Download, Menu, ChevronDown } from "lucide-react";
import Accordian from "@/components/Accordian";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { link } from "fs";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSupportMenu, setisSupportMenu] = useState(false);

  const navLinks = [
    { href: "/", label: "Home", type: "link" },
    { href: "/supported-platforms", label: "Supported Platforms", type: "menu" },
    { href: "/onboarding", label: "Onboarding", type: "link" },
    { href: "/education", label: "Education", type: "link" },
    { href: "/contact", label: "Contact", type: "link" },
  ];

  interface NavLinkProps {
    href: string;
    label: string;
    type?: string;
    mobile?: boolean;
    setIsOpen?: (open: boolean) => void;
  }

  const NavLink = ({ href, label, type, mobile = false, setIsOpen }: NavLinkProps) => {
   

    if (type === "menu") return (<div className="relative"
      onMouseEnter={() => setisSupportMenu(true)}
      onMouseLeave={() => setisSupportMenu(false)}>
      <button
        className={`flex items-center ${isSupportMenu ? "text-primary" : " text-gray-700 "} py-[20px] font-medium hover:text-primary transition-colors`}
        data-testid="agency-menu-toggle"
      >
        <span>{label}</span>
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      {isSupportMenu && (
        <div className="absolute left-0  w-[250px] bg-white  rounded-bl-lg rounded-br-lg shadow-lg border-slate-200 z-10">

          <Link
            href="/open-dental-gohighlevel-integration"
            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 "
            onClick={() => setisSupportMenu(false)}
            data-testid="link-agency-open-dental"
          >
            Open dental to GHL Integration
          </Link>
          <Link
            href="/dentrix-gohighlevel-integration"
            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 "
            onClick={() => setisSupportMenu(false)}
            data-testid="link-agency-open-dental"
          >
            Dentrix to GHL Integration
          </Link>
          <Link
            href="/supported-platforms"
            className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-bl-lg rounded-br-lg "
            onClick={() => setisSupportMenu(false)}
            data-testid="link-agency-open-dental"
          >
            Other Platforms
          </Link>
        </div>
      )}
    </div>);

    return (
      <Link href={href}>
        <span
          className={`${mobile ? "block px-4 py-2" : "inline-block"} 
          text-gray-700 hover:text-primary font-medium transition-colors cursor-pointer 
        }`}
          onClick={mobile && setIsOpen ? () => setIsOpen(false) : undefined}
          data-testid={`nav-${href.replace("/", "home")}`}
        >
          {label}
        </span>
      </Link>
    );
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-99">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <span
              className="flex items-center cursor-pointer"
              data-testid="logo"
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mr-3">
                <img
                  src="/img/sso_logo.svg"
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
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} type={link.type} />

            ))}
            <div className="relative" onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)} >
              <button
                className={`flex items-center py-[20px] ${isMenuOpen ? "text-primary" : " text-gray-700 "} font-medium hover:text-primary  transition-colors`}
                data-testid="agency-menu-toggle"
              >
                <span>Resources</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </button>

              {isMenuOpen && (
                <div className="absolute left-0  w-[120px] bg-white  rounded-bl-lg rounded-br-lg shadow-lg border-slate-200 z-10">

                  <a href="/pdfs/Smart_sync.pdf" download className=" flex  justify-between px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-bl-lg rounded-br-lg  " onClick={() => setIsMenuOpen(false)}>
                    BAA <Download size={16} /> </a>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" asChild>
            <a href="/pdfs/Smart_sync.pdf" download className="flex items-center gap-2 hover:bg-primary hover:text-white">
              <Download size={16} />
             
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Business Associate Agreement</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider> */}
            <Button
              data-testid="button-book-demo"
              className="bg-primary text-white hover:bg-primary-dark"
            >
              <a
                href="https://calendly.com/smart-sync/meeting"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Demo
              </a>
            </Button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
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
                    {navLinks.map((link) =>
                      link.type === "menu" ? null : (
                        <NavLink
                          key={link.href}
                          href={link.href}
                          label={link.label}
                          type={link.type}
                          mobile
                        />
                      ))}

                    {/* Call the accordion component for mobile */}
                    <Accordian />

                    <Button
                      className="mt-4 bg-primary text-white hover:bg-primary-dark"
                      data-testid="button-mobile-demo"
                    >
                      <a
                        href="https://calendly.com/smart-sync/meeting"
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
