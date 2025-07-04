import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProgressIndicator from "@/components/ui/progress-indicator";

export default function ProgressDemo() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    { number: 1, title: "Account Setup", completed: completedSteps.includes(1) },
    { number: 2, title: "Personal Details", completed: completedSteps.includes(2) },
    { number: 3, title: "Verification", completed: completedSteps.includes(3) },
    { number: 4, title: "Review & Complete", completed: completedSteps.includes(4) },
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCompletedSteps(prev => [...prev, currentStep]);
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const reset = () => {
    setCurrentStep(1);
    setCompletedSteps([]);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Animated Progress Indicator Demo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <ProgressIndicator 
          steps={steps}
          currentStep={currentStep}
        />
        
        <div className="flex justify-center space-x-4">
          <Button 
            onClick={prevStep} 
            disabled={currentStep === 1}
            variant="outline"
          >
            Previous
          </Button>
          <Button 
            onClick={nextStep} 
            disabled={currentStep > steps.length}
          >
            {currentStep === steps.length ? "Complete" : "Next Step"}
          </Button>
          <Button 
            onClick={reset}
            variant="secondary"
          >
            Reset
          </Button>
        </div>

        <div className="text-center text-sm text-gray-600">
          <p>Current Step: {currentStep} of {steps.length}</p>
          <p>Completed Steps: {completedSteps.length}</p>
        </div>
      </CardContent>
    </Card>
  );
}