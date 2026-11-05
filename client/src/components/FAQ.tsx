import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


export interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <details
          key={index}
          className="group bg-white rounded-lg border border-gray-200"
        >
          <summary className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors cursor-pointer list-none">
            <span className="font-semibold text-gray-900">
              {item.question}
            </span>

            <ChevronDown
              className="text-gray-500 shrink-0 ml-4 transition-transform duration-200 group-open:rotate-180"
              size={20}
            />
          </summary>

          <div className="p-6 pt-4 border-t border-gray-100">
            <div className="text-gray-600">
              {item.answer}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
