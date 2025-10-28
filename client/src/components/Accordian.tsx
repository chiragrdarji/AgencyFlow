import { useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { Link, useLocation } from "wouter";
export default function Accordian() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="w-full lg:hidden"> {/* only visible on mobile */}
      {/* Menu Section */}
      <div>
        <button
          onClick={() => toggleSection("menu")}
          className="flex justify-between items-center w-full py-4 px-4 text-left text-gray-700 font-medium hover:text-primary transition-colors"
        >
          <span>Supported Platfrom</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              openSection === "menu" ? "rotate-180 text-primary" : ""
            }`}
          />
        </button>

        {openSection === "menu" && (
          <div className=" pb-3 px-8 space-y-2">
            <Link
              href="/open-dental-gohighlevel-integration"
              className="block text-sm text-slate-700 py-2 hover:text-primary"
              onClick={() => setOpenSection(null)}
            >
              Open Dental Integration
            </Link>
            <Link
              href="/dentrix-gohighlevel-integration"
              className="block text-sm text-slate-700 py-2 hover:text-primary"
              onClick={() => setOpenSection(null)}
            >
              Dentrix Integration
            </Link>
            <Link
              href="/supported-platforms"
              className="block text-sm text-slate-700 py-2 hover:text-primary"
              onClick={() => setOpenSection(null)}
            >
              Other Platforms
            </Link>
          </div>
        )}
      </div>

      {/* Resources Section */}
      <div >
        <button
          onClick={() => toggleSection("resources")}
          className="flex justify-between items-center w-full py-4 px-4 text-left text-gray-700 font-medium hover:text-primary transition-colors"
        >
          <span>Resources</span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${
              openSection === "resources" ? "rotate-180 text-primary" : ""
            }`}
          />
        </button>

        {openSection === "resources" && (
          <div className=" pb-3 px-8 space-y-2">
            <a
              href="/pdfs/Smart_sync.pdf"
              download
              className="flex justify-between items-center text-sm text-slate-700 py-2 hover:text-primary"
              onClick={() => setOpenSection(null)}
            >
              BAA <Download size={16} />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
