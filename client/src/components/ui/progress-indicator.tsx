import { useMemo } from "react";
import { Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  number: number;
  title: string;
  completed: boolean;
  active?: boolean;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
  className?: string;
}

export default function ProgressIndicator({ steps, currentStep, className }: ProgressIndicatorProps) {
  const animatedSteps = useMemo(() => 
    steps.map((step, index) => ({
      ...step,
      active: index + 1 === currentStep
    })), [currentStep, steps.length]);

  const getStepStatus = (stepNumber: number) => {
    if (stepNumber < currentStep) return "completed";
    if (stepNumber === currentStep) return "active";
    return "upcoming";
  };

  const getProgressPercentage = () => {
    return ((currentStep - 1) / (steps.length - 1)) * 100;
  };

  return (
    <div className={cn("w-full", className)}>
      {/* Progress Bar */}
      <div className="relative mb-8">
        <div className="absolute top-5 left-0 w-full h-0.5 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-gradient-to-r from-brand-teal to-brand-blue rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `${getProgressPercentage()}%` }}
          />
        </div>
        
        {/* Step Indicators */}
        <div className="relative flex justify-between">
          {animatedSteps.map((step, index) => {
            const status = getStepStatus(step.number);
            
            return (
              <div key={step.number} className="flex flex-col items-center">
                {/* Step Circle */}
                <div
                  className={cn(
                    "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-500 ease-in-out transform",
                    {
                      "bg-gradient-to-r from-brand-teal to-brand-blue border-brand-teal text-white scale-110 shadow-lg": status === "active",
                      "bg-green-500 border-green-500 text-white shadow-lg shadow-green-500/30 scale-105": status === "completed",
                      "bg-white border-gray-300 text-gray-500": status === "upcoming",
                    }
                  )}
                >
                  {status === "completed" ? (
                    <Check className="w-6 h-6 text-white animate-in zoom-in duration-500 drop-shadow-sm" strokeWidth={3} />
                  ) : status === "active" ? (
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                  ) : (
                    <span className="text-sm font-medium">{step.number}</span>
                  )}
                </div>
                
                {/* Step Title */}
                <div className="mt-3 text-center">
                  <h3
                    className={cn(
                      "text-sm font-medium transition-colors duration-300",
                      {
                        "text-brand-dark": status === "active" || status === "completed",
                        "text-gray-500": status === "upcoming",
                      }
                    )}
                  >
                    {step.title}
                  </h3>
                  
                  {/* Status Indicator */}
                  {status === "active" && (
                    <div className="mt-1 flex items-center justify-center">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-1.5 h-1.5 bg-brand-teal rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                      </div>
                    </div>
                  )}
                  
                  {status === "completed" && (
                    <div className="mt-1 text-xs text-green-500 font-semibold animate-in fade-in duration-500">
                      ✓ Complete
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Progress Summary */}
      <div className="md:hidden bg-white rounded-lg border p-4 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-brand-teal to-brand-blue flex items-center justify-center">
              <span className="text-white text-sm font-bold">{currentStep}</span>
            </div>
            <div>
              <h4 className="font-medium text-brand-dark">
                {steps.find(s => s.number === currentStep)?.title}
              </h4>
              <p className="text-sm text-gray-500">
                Step {currentStep} of {steps.length}
              </p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
        
        <div className="mt-3">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progress</span>
            <span>{Math.round(getProgressPercentage())}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-brand-teal to-brand-blue h-2 rounded-full transition-all duration-700 ease-in-out"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
        </div>
      </div>

      {/* Completion Celebration */}
      {currentStep > steps.length && (
        <div className="text-center py-8 animate-in zoom-in duration-500">
          <div className="w-16 h-16 bg-gradient-to-r from-brand-teal to-brand-blue rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-brand-dark mb-2">
            Application Complete!
          </h3>
          <p className="text-gray-600">
            Thank you for your submission. We'll be in touch soon.
          </p>
        </div>
      )}
    </div>
  );
}