import { useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { Link, useLocation } from "wouter";
type AccordianProps = {
  setIsOpen?: (open: boolean) => void;
};
export default function Accordian({ setIsOpen }: AccordianProps) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full xl:hidden">
      {" "}
      {/* only visible on mobile */}
      {/* Menu Section */}
      <div>
        <button
          onClick={() => toggleSection("inner_menu")}
          className="flex justify-between items-center w-full py-4 px-4 text-left text-gray-700 font-medium hover:text-primary transition-colors"
        >
          <span>Features</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${openSection === "inner_menu" ? "rotate-180 text-primary" : ""
              }`}
          />
        </button>

        {openSection === "inner_menu" && (
          <div className=" pb-3 px-8 space-y-2 max-h-[200px] overflow-auto">
            <Link
              href="/dental-marketing-attribution"
              className="block py-3 text-sm text-slate-700 hover:bg-slate-50 "
              onClick={() => {
                setOpenSection(null);
                setIsOpen?.(false);
              }}
              data-testid="link-agency-open-dental"
            >
              Dental Marketing Attribution Software
            </Link>
            <Link
              href="/dental-analytics-dashboard"
              className="block  py-3 text-sm text-slate-700 hover:bg-slate-50 "
              onClick={() => {
                setOpenSection(null);
                setIsOpen?.(false);
              }}
              data-testid="link-agency-open-dental"
            >
              Dental Analytics Dashboard
            </Link>
            <Link
              href="/for-dental-marketing-agencies"
              className="block  py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-bl-lg rounded-br-lg "
              onClick={() => {
                setOpenSection(null);
                setIsOpen?.(false);
              }}
              data-testid="link-agency-open-dental"
            >
              For Dental Marketing Agencies
            </Link>
            <Link
              href="/treatment-tracking-software"
              className="block  py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-bl-lg rounded-br-lg "
              onClick={() => {
                setOpenSection(null);
                setIsOpen?.(false);
              }}
              data-testid="link-agency-open-dental"
            >
              Treatment Tracking & Revenue Pipeline Intelligence
            </Link>
            <Link
              href="/dental-pms-integrations"
              className="block  py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-bl-lg rounded-br-lg "
              onClick={() => {
                setOpenSection(null);
                setIsOpen?.(false);
              }}
              data-testid="link-agency-open-dental"
            >
              Dental PMS Integrations
            </Link>
            <Link
              href="/how-smartsync-works"
              className="block py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-bl-lg rounded-br-lg "
              onClick={() => {
                setOpenSection(null);
                setIsOpen?.(false);
              }}
              data-testid="link-agency-open-dental"
            >
              How SmartSync.One Works
            </Link>
            <Link
              href="/dentrix-crm-integration"
              className="block  py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-bl-lg rounded-br-lg "
              onClick={() => {
                setOpenSection(null);
                setIsOpen?.(false);
              }}
              data-testid="link-agency-open-dental"
            >
              Dentrix CRM Integration
            </Link>
            <Link
              href="/open-dental-crm-integration"
              className="block  py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-bl-lg rounded-br-lg "
              onClick={() => {
                setOpenSection(null);
                setIsOpen?.(false);
              }}
              data-testid="link-agency-open-dental"
            >
              Open Dental CRM Integration
            </Link>
            <Link
              href="/eaglesoft-crm-integration"
              className="block  py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-bl-lg rounded-br-lg "
              onClick={() => {
                setOpenSection(null);
                setIsOpen?.(false);
              }}
              data-testid="link-agency-open-dental"
            >
              Eaglesoft CRM Integration
            </Link>
            <Link
              href="/gohighlevel-dental-integration"
              className="block  py-3 text-sm text-slate-700 hover:bg-slate-50 rounded-bl-lg rounded-br-lg "
              onClick={() => {
                setOpenSection(null);
                setIsOpen?.(false);
              }}
              data-testid="link-agency-open-dental"
            >
              GoHighLevel Dental Integration
            </Link>
          </div>
        )}
      </div>
      <div>
        <button
          onClick={() => toggleSection("menu")}
          className="flex justify-between items-center w-full py-4 px-4 text-left text-gray-700 font-medium hover:text-primary transition-colors"
        >
          <span>Supported Platfrom</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${openSection === "menu" ? "rotate-180 text-primary" : ""
              }`}
          />
        </button>

        {openSection === "menu" && (
          <div className=" pb-3 px-8 space-y-2">
            <Link
              href="/open-dental-gohighlevel-integration"
              className="block text-sm text-slate-700 py-2 hover:text-primary"
              onClick={() => {
                setOpenSection(null);
                setIsOpen?.(false);
              }}
            >
              Open Dental Integration
            </Link>
            <Link
              href="/dentrix-gohighlevel-integration"
              className="block text-sm text-slate-700 py-2 hover:text-primary"
              onClick={() => {
                setOpenSection(null);
                setIsOpen?.(false);
              }}
            >
              Dentrix Integration
            </Link>
            <Link
              href="/supported-platforms"
              className="block text-sm text-slate-700 py-2 hover:text-primary"
              onClick={() => {
                setOpenSection(null);
                setIsOpen?.(false);
              }}
            >
              Exolore All Integrations
            </Link>
          </div>
        )}
      </div>
      {/* Resources Section */}
      <div>
        <button
          onClick={() => toggleSection("resources")}
          className="flex justify-between items-center w-full py-4 px-4 text-left text-gray-700 font-medium hover:text-primary transition-colors"
        >
          <span>Resources</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${openSection === "resources" ? "rotate-180 text-primary" : ""
              }`}
          />
        </button>

        {openSection === "resources" && (
          <div className=" pb-3 px-8 space-y-2">
            {/* <a
              href="/pdfs/Smart_sync.pdf"
              download
              className="flex justify-between items-center text-sm text-slate-700 py-2 hover:text-primary"
              onClick={() => {
                setOpenSection(null);
                setIsOpen?.(false);
              }}
            >
              BAA <Download size={16} />
            </a> */}
            <a
              href="/blog"
              className="flex justify-between items-center text-sm text-slate-700 py-2 hover:text-primary"
              onClick={() => {
                setOpenSection(null);
                setIsOpen?.(false);
              }}
            >
              Blog
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
