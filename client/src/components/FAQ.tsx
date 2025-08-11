import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (openItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200">
          <button
            className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
            onClick={() => toggleItem(index)}
            data-testid={`faq-question-${index}`}
          >
            <span className="font-semibold text-gray-900">{item.question}</span>
            {openItems.has(index) ? (
              <ChevronUp className="text-gray-500" size={20} />
            ) : (
              <ChevronDown className="text-gray-500" size={20} />
            )}
          </button>
          {openItems.has(index) && (
            <div className="p-6 pt-0 border-t border-gray-100" data-testid={`faq-answer-${index}`}>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
