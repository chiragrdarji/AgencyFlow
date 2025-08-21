import { Laptop, TrendingUp, ArrowRight, ArrowLeft, FolderSync } from "lucide-react";

export default function AnimatedDataFlow() {
  return (
    <div className="relative py-8">
      {/* Top Row - PMS Systems */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-md p-4 animate-float text-center" data-testid="dentrix-system">
          <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
            <Laptop className="text-white" size={20} />
          </div>
          <div className="text-xs font-semibold text-gray-900">PMS</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 animate-float text-center" style={{ animationDelay: "0.2s" }} data-testid="opendental-system">
          <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
            <Laptop className="text-white" size={20} />
          </div>
          <div className="text-xs font-semibold text-gray-900">Open Dental</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 animate-float text-center" style={{ animationDelay: "0.4s" }} data-testid="eaglesoft-system">
          <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center mx-auto mb-2">
            <Laptop className="text-white" size={20} />
          </div>
          <div className="text-xs font-semibold text-gray-900">EagleSoft</div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4 animate-float text-center" style={{ animationDelay: "0.6s" }} data-testid="curve-system">
          <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
            <Laptop className="text-white" size={20} />
          </div>
          <div className="text-xs font-semibold text-gray-900">Curve Dental</div>
        </div>
      </div>

      {/* Animated Arrows Down */}
      <div className="flex justify-center mb-4">
        <div className="grid grid-cols-4 gap-4 w-full max-w-md">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex justify-center">
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-4 bg-primary animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                <ArrowRight className="text-primary rotate-90 animate-bounce" size={16} style={{ animationDelay: `${i * 0.2}s` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle Row - Connector App */}
      <div className="flex justify-center mb-4">
        <div className="bg-primary rounded-xl shadow-lg p-6 animate-float text-center" style={{ animationDelay: "0.8s" }} data-testid="connector-app">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-3">
            <FolderSync className="text-primary" size={32} />
          </div>
          <div className="font-bold text-white mb-1">Connector App</div>
          <div className="text-sm text-blue-100">Real-time Sync</div>
        </div>
      </div>

      {/* Animated Arrows Down */}
      <div className="flex justify-center mb-4">
        <div className="flex flex-col items-center">
          <div className="w-0.5 h-4 bg-primary animate-pulse"></div>
          <ArrowRight className="text-primary rotate-90 animate-bounce" size={16} />
        </div>
      </div>

      {/* Bottom Row - GoHighLevel */}
      <div className="flex justify-center">
        <div className="bg-white rounded-xl shadow-lg p-6 animate-float text-center" style={{ animationDelay: "1s" }} data-testid="gohighlevel-system">
          <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
            <TrendingUp className="text-white" size={32} />
          </div>
          <div className="font-semibold text-gray-900 mb-1">GoHighLevel</div>
          <div className="text-sm text-gray-600">Marketing CRM</div>
        </div>
      </div>

      {/* Bidirectional Data Flow Indicators */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="flex space-x-1">
          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>

      {/* Bidirectional Arrows */}
      <div className="absolute top-20 right-8 transform rotate-12">
        <div className="flex items-center space-x-1">
          <ArrowRight className="text-primary animate-slide-right" size={16} />
          <ArrowLeft className="text-green-500 animate-slide-right" size={16} style={{ animationDelay: "0.5s" }} />
        </div>
      </div>
      
      <div className="absolute bottom-20 left-8 transform -rotate-12">
        <div className="flex items-center space-x-1">
          <ArrowLeft className="text-blue-500 animate-slide-right" size={16} />
          <ArrowRight className="text-purple-500 animate-slide-right" size={16} style={{ animationDelay: "0.3s" }} />
        </div>
      </div>
    </div>
  );
}
