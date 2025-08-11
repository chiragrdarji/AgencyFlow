import { Laptop, TrendingUp, ArrowRight } from "lucide-react";

export default function AnimatedDataFlow() {
  return (
    <div className="relative">
      {/* Animated Data Flow Visualization */}
      <div className="flex items-center justify-between">
        {/* Dentrix Logo Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-6 animate-float" data-testid="dentrix-system">
          <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
            <Laptop className="text-white" size={32} />
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900 mb-1">Dentrix PMS</div>
            <div className="text-sm text-gray-600">Patient Data</div>
          </div>
        </div>

        {/* Animated Arrow */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div className="flex items-center">
            <div className="w-4 h-0.5 bg-primary animate-slide-right"></div>
            <div className="w-4 h-0.5 bg-primary animate-slide-right" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-4 h-0.5 bg-primary animate-slide-right" style={{ animationDelay: "0.4s" }}></div>
            <ArrowRight className="text-primary animate-pulse-slow" size={24} />
          </div>
        </div>

        {/* GoHighLevel Logo Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-6 animate-float" style={{ animationDelay: "1s" }} data-testid="gohighlevel-system">
          <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="text-white" size={32} />
          </div>
          <div className="text-center">
            <div className="font-semibold text-gray-900 mb-1">GoHighLevel</div>
            <div className="text-sm text-gray-600">Marketing CRM</div>
          </div>
        </div>
      </div>

      {/* Data Points Floating */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  );
}
