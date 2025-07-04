import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { INVESTMENT_TIERS } from "@/lib/constants";
import { formatCurrency, generatePaymentReference, formatPaymentInstructions } from "@/lib/payment-utils";
import PortfolioBlendCalculator from "../calculators/PortfolioBlendCalculator";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  investmentAmount: z.number().min(5000, "Minimum investment is $5,000"),
  investmentType: z.enum(["single", "portfolio"]),
  accreditedStatus: z.boolean().optional(),
  documentsAgreed: z.boolean().refine(val => val === true, "Document agreement required"),
});

type FormData = z.infer<typeof formSchema>;

function InvestorForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTier, setSelectedTier] = useState<string>("");
  const [showPortfolioCalculator, setShowPortfolioCalculator] = useState(false);
  const [paymentInstructions, setPaymentInstructions] = useState<any>(null);
  const [stepValidation, setStepValidation] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });
  const { toast } = useToast();

  const totalSteps = 4;
  const stepTitles = [
    "Choose Your Investment Amount",
    "Personal Information",
    "Investment Verification",
    "Review and Submit"
  ];

  const validateStep = (step: number) => {
    const values = form.getValues();
    
    switch (step) {
      case 1:
        return values.investmentAmount >= 5000 && values.investmentType !== undefined;
      case 2:
        return values.firstName && values.lastName && values.email && values.phone;
      case 3:
        return values.documentsAgreed;
      case 4:
        return true;
      default:
        return false;
    }
  };

  const goToNextStep = () => {
    if (validateStep(currentStep)) {
      setStepValidation(prev => ({ ...prev, [currentStep]: true }));
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    } else {
      toast({
        title: "Please complete all required fields",
        description: "Fill in all the information before proceeding.",
        variant: "destructive",
      });
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToStep = (step: number) => {
    // Only allow going to completed steps or the next step
    const validSteps = [1, 2, 3, 4];
    if (validSteps.includes(step) && (step <= currentStep || stepValidation[step as 1 | 2 | 3 | 4])) {
      setCurrentStep(step);
    }
  };

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      investmentAmount: 25000,
      investmentType: "single",
      accreditedStatus: false,
      documentsAgreed: false,
    },
  });

  const createUserMutation = useMutation({
    mutationFn: async (userData: any) => {
      const response = await apiRequest("POST", "/api/users", userData);
      return response.json();
    },
  });

  const createApplicationMutation = useMutation({
    mutationFn: async (applicationData: any) => {
      const response = await apiRequest("POST", "/api/investment-applications", applicationData);
      return response.json();
    },
  });

  const requestPaymentMutation = useMutation({
    mutationFn: async (paymentData: any) => {
      const response = await apiRequest("POST", "/api/request-payment", paymentData);
      return response.json();
    },
  });

  const sendInvestorPacketMutation = useMutation({
    mutationFn: async (packetData: any) => {
      const response = await apiRequest("POST", "/api/investor-packet", packetData);
      return response.json();
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Step 1: Create or get user
      const userData = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        userType: "investor",
        accreditedInvestor: data.accreditedStatus,
      };

      const user = await createUserMutation.mutateAsync(userData);

      // Step 2: Create investment application
      const applicationData = {
        userId: user.id,
        userEmail: data.email,
        investmentAmount: data.investmentAmount,
        investmentType: data.investmentType,
        accreditedStatus: data.accreditedStatus,
        documentsAgreed: data.documentsAgreed,
      };

      const application = await createApplicationMutation.mutateAsync(applicationData);

      // Step 3: Request payment instructions
      const paymentRequest = await requestPaymentMutation.mutateAsync({
        applicationId: application.id,
        applicationType: "investment",
        amount: data.investmentAmount,
        userEmail: data.email,
        userName: `${data.firstName} ${data.lastName}`,
      });

      // Step 4: Send investor document packet
      await sendInvestorPacketMutation.mutateAsync({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        investmentAmount: data.investmentAmount,
        investmentType: data.investmentType,
        deliveryMethod: "email"
      });

      // Generate payment reference and instructions
      const reference = generatePaymentReference(application.id);
      const instructions = formatPaymentInstructions(data.investmentAmount, reference);

      setPaymentInstructions({
        ...instructions,
        ...paymentRequest.paymentInstructions,
        applicationId: application.id,
      });

      toast({
        title: "Application Submitted Successfully!",
        description: "Your investment application has been submitted. Payment instructions and investor documents have been sent to your email.",
      });

      // Move to step 5 to show payment instructions
      setCurrentStep(5);

    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleInvestmentTypeChange = (value: string) => {
    form.setValue("investmentType", value as "single" | "portfolio");
    setShowPortfolioCalculator(value === "portfolio");
  };

  const steps = [
    { number: 1, title: "Investment Amount", completed: stepValidation[1] },
    { number: 2, title: "Personal Information", completed: stepValidation[2] },
    { number: 3, title: "Investment Verification", completed: stepValidation[3] },
    { number: 4, title: "Review & Submit", completed: stepValidation[4] },
  ];

  const canNavigateToStep = (stepNumber: number) => {
    // Allow navigation to completed steps or current step
    return stepNumber <= currentStep || steps[stepNumber - 1].completed;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className={`flex flex-col items-center ${canNavigateToStep(step.number) ? 'cursor-pointer' : 'cursor-default'}`}
                onClick={() => canNavigateToStep(step.number) && goToStep(step.number)}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm mb-2 transition-all ${
                  currentStep === step.number 
                    ? 'bg-brand-blue text-white' 
                    : step.completed 
                      ? 'bg-brand-teal text-white' 
                      : 'bg-gray-200 text-gray-500'
                }`}>
                  {step.completed ? '✓' : step.number}
                </div>
                <span className={`text-xs text-center ${
                  currentStep === step.number 
                    ? 'text-brand-blue font-medium' 
                    : step.completed 
                      ? 'text-brand-teal' 
                      : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`absolute h-0.5 w-16 ${step.completed ? 'bg-brand-teal' : 'bg-gray-200'}`} 
                       style={{ left: '50%', transform: 'translateX(-50%)', top: '20px', zIndex: -1 }} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1: Investment Amount */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Choose Your Investment Amount</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-dark">Investment Type</h3>
                <FormField
                  control={form.control}
                  name="investmentType"
                  render={({ field }) => (
                    <FormItem>
                      <RadioGroup
                        value={field.value}
                        onValueChange={handleInvestmentTypeChange}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border-2 border-green-200">
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value="single" id="single" />
                            <div>
                              <FormLabel htmlFor="single" className="text-brand-dark font-medium">
                                Option 1: Direct Deal Participation
                              </FormLabel>
                              <p className="text-sm text-brand-gray">Minimum: $5,000</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                          <div className="flex items-center space-x-3">
                            <RadioGroupItem value="portfolio" id="portfolio" />
                            <div>
                              <FormLabel htmlFor="portfolio" className="text-brand-dark font-medium">
                                Option 2: Portfolio Blend
                              </FormLabel>
                              <p className="text-sm text-brand-gray">Minimum: $25,000</p>
                            </div>
                          </div>
                        </div>
                      </RadioGroup>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-dark">Investment Amount</h3>
                <FormField
                  control={form.control}
                  name="investmentAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter amount"
                          {...field}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                          className="text-lg"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {showPortfolioCalculator && (
                <div className="mt-6">
                  <PortfolioBlendCalculator />
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Step 2: Personal Information */}
        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 2: Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Enter phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Investment Verification */}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 3: Investment Verification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <FormField
                control={form.control}
                name="accreditedStatus"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-brand-dark mb-4">Investor Status (Optional)</h3>
                      <FormControl>
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            checked={field.value || false}
                            onCheckedChange={field.onChange}
                            className="mt-1"
                          />
                          <div>
                            <FormLabel className="text-brand-dark font-medium">
                              I am an accredited investor
                            </FormLabel>
                            <div className="text-sm text-brand-gray mt-2">
                              <p className="mb-2">✓ Check if you meet accredited investor criteria:</p>
                              <ul className="list-disc list-inside space-y-1">
                                <li>Annual income exceeding $200K ($300K with spouse)</li>
                                <li>Net worth exceeding $1 million</li>
                                <li>Certain professional certifications (Series 7, 65, 82)</li>
                              </ul>
                              <p className="mt-2 text-xs text-brand-gray">
                                <em>Note: This is optional. Non-accredited investors are also welcome to participate.</em>
                              </p>
                            </div>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="documentsAgreed"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-brand-dark mb-4">Document Agreement</h3>
                      <FormControl>
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1"
                          />
                          <div>
                            <FormLabel className="text-brand-dark font-medium">
                              I agree to the terms and have reviewed all documents
                            </FormLabel>
                            <div className="text-sm text-brand-gray mt-2">
                              <p>By checking this box, you acknowledge that you have received and reviewed:</p>
                              <ul className="list-disc list-inside mt-1 space-y-1">
                                <li>Investment agreement and profit-sharing terms</li>
                                <li>Risk disclosure statements</li>
                                <li>Regulatory compliance information</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        )}

        {/* Step 4: Review & Submit */}
        {currentStep === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 4: Review & Submit</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-4">Review Your Application</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-brand-dark mb-2">Personal Information</h4>
                    <div className="text-sm text-brand-gray space-y-1">
                      <p>{form.watch("firstName")} {form.watch("lastName")}</p>
                      <p>{form.watch("email")}</p>
                      <p>{form.watch("phone")}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-brand-dark mb-2">Investment Details</h4>
                    <div className="text-sm text-brand-gray space-y-1">
                      <p>Type: {form.watch("investmentType") === "single" ? "Direct Deal Participation" : "Portfolio Blend"}</p>
                      <p>Amount: {formatCurrency(form.watch("investmentAmount"))}</p>
                      <p>Accredited: {form.watch("accreditedStatus") ? "Yes" : "No"}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-4">Next Steps</h3>
                <div className="text-sm text-brand-gray space-y-2">
                  <p>1. Your application will be reviewed within 24 hours</p>
                  <p>2. You'll receive wire transfer instructions via email</p>
                  <p>3. Once funding is received, your investment will be deployed</p>
                  <p>4. You'll receive regular updates on deal performance</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={goToPreviousStep}
            disabled={currentStep === 1}
            className="flex items-center space-x-2"
          >
            <span>← Previous</span>
          </Button>

          <div className="text-sm text-brand-gray">
            Step {currentStep} of {totalSteps}
          </div>

          {currentStep < totalSteps ? (
            <Button
              type="button"
              onClick={goToNextStep}
              className="flex items-center space-x-2"
            >
              <span>Next →</span>
            </Button>
          ) : (
            <Button
              type="submit"
              disabled={createUserMutation.isPending || createApplicationMutation.isPending || requestPaymentMutation.isPending}
              className="flex items-center space-x-2"
            >
              <span>Submit Application</span>
            </Button>
          )}
        </div>

        {/* Payment Instructions Display */}
        {currentStep === 5 && paymentInstructions && (
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-green-600">Application Submitted Successfully!</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-brand-dark mb-4">Wire Transfer Instructions</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Bank Name:</strong> {paymentInstructions.bankName || "Wells Fargo Bank"}
                  </div>
                  <div>
                    <strong>Routing Number:</strong> {paymentInstructions.routingNumber || "121000248"}
                  </div>
                  <div>
                    <strong>Account Number:</strong> {paymentInstructions.accountNumber || "4532********1234"}
                  </div>
                  <div>
                    <strong>Reference:</strong> {paymentInstructions.reference || `INV-${Date.now()}`}
                  </div>
                </div>
                <div className="mt-4 p-4 bg-white rounded border-l-4 border-green-500">
                  <strong>Amount to Transfer:</strong> {formatCurrency(form.watch("investmentAmount"))}
                </div>
              </div>
              
              <div className="text-sm text-brand-gray">
                <p>Important: Please include the reference number with your wire transfer. Instructions have also been sent to your email address.</p>
              </div>
            </CardContent>
          </Card>
        )}
      </form>
    </Form>
  );
}

export default function InvestorOnboardingForm() {
  return <InvestorForm />;
}