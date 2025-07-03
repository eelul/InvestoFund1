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
  accreditedStatus: z.boolean().refine(val => val === true, "Accredited investor status required"),
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

  const onSubmit = async (data: FormData) => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
      return;
    }

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
        description: "Your investment application has been submitted. Payment instructions have been sent to your email.",
      });

      // Move to step 6 to show payment instructions
      setCurrentStep(6);

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
    { number: 1, title: "Investment Amount", completed: currentStep > 1 },
    { number: 2, title: "Accredited Status", completed: currentStep > 2 },
    { number: 3, title: "Investment Preferences", completed: currentStep > 3 },
    { number: 4, title: "Personal Information", completed: currentStep > 4 },
    { number: 5, title: "Review & Submit", completed: currentStep > 5 },
    { number: 6, title: "Payment Instructions", completed: false },
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
                onClick={() => canNavigateToStep(step.number) && setCurrentStep(step.number)}
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
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {INVESTMENT_TIERS.map((tier) => (
                  <div
                    key={tier.value}
                    className={`investment-option p-4 border-2 rounded-lg text-center cursor-pointer transition-all ${
                      selectedTier === tier.value
                        ? "border-brand-blue bg-brand-blue/5 selected"
                        : "border-gray-200 hover:border-brand-blue"
                    }`}
                    onClick={() => {
                      setSelectedTier(tier.value);
                      form.setValue("investmentAmount", tier.min);
                    }}
                  >
                    <div className="text-2xl font-bold text-brand-blue">{tier.label}</div>
                    <div className="text-sm text-brand-gray">
                      {tier.value === "5000-25000" && "Starter"}
                      {tier.value === "25000-100000" && "Growth"}
                      {tier.value === "100000-500000" && "Premium"}
                      {tier.value === "500000+" && "Enterprise"}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Accredited Investor Status */}
        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 2: Accredited Investor Status</CardTitle>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="accreditedStatus"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <div className="bg-white rounded-lg p-6">
                      <FormControl>
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                          <FormLabel className="text-brand-gray">
                            I confirm my accredited investor status
                          </FormLabel>
                        </div>
                      </FormControl>
                      <div className="text-sm text-brand-gray mt-4">
                        <p>An accredited investor is someone with:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1">
                          <li>Annual income exceeding $200K ($300K with spouse)</li>
                          <li>Net worth exceeding $1 million</li>
                          <li>Certain professional certifications (Series 7, 65, 82)</li>
                        </ul>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
        )}

        {/* Step 3: Investment Preferences */}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 3: Investment Preferences</CardTitle>
            </CardHeader>
            <CardContent>
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
                      <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                        <div>
                          <div className="font-medium text-brand-dark">Single Deal Focus</div>
                          <div className="text-sm text-brand-gray">Deploy capital into one high-quality MCA</div>
                        </div>
                        <RadioGroupItem value="single" />
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                        <div>
                          <div className="font-medium text-brand-dark">Portfolio Diversification</div>
                          <div className="text-sm text-brand-gray">Spread risk across multiple MCA deals</div>
                        </div>
                        <RadioGroupItem value="portfolio" />
                      </div>
                    </RadioGroup>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {showPortfolioCalculator && (
                <div className="mt-8">
                  <PortfolioBlendCalculator />
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Step 4: Contact Information */}
        {currentStep === 4 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 4: Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
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
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
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
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 5: Final Review */}
        {currentStep === 5 && (
          <Card>
            <CardHeader>
              <CardTitle>Step 5: Final Review & Submit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                  <div className="flex items-center mb-4">
                    <div className="w-6 h-6 bg-brand-blue rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-brand-gray">Ready to submit your investment application</span>
                  </div>
                  <div className="text-sm text-brand-gray">
                    <p className="mb-3">Upon submission, you will receive payment instructions via email for:</p>
                    <div className="bg-white p-4 rounded border">
                      <p className="font-medium text-brand-dark text-lg">
                        {formatCurrency(form.watch("investmentAmount"))} Investment
                      </p>
                      <p className="text-sm text-brand-gray mt-1">
                        Type: {form.watch("investmentType") === "single" ? "Single Deal" : "Portfolio Blend"}
                      </p>
                    </div>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="documentsAgreed"
                  render={({ field }) => (
                    <FormItem>
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h4 className="font-medium text-brand-dark mb-3">Required Documentation</h4>
                        <div className="space-y-3">
                          <FormControl>
                            <div className="flex items-center space-x-3">
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                              <FormLabel className="text-brand-gray">
                                I have read and agree to all required documents
                              </FormLabel>
                            </div>
                          </FormControl>
                          <div className="text-sm text-brand-gray ml-6">
                            <p>📄 Documents will be sent to your email for review and digital signature:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                              <li>Profit Sharing Agreement (PSA)</li>
                              <li>Risk Disclosure Summary</li>
                              <li>Investor Welcome Packet</li>
                              <li>Terms of Service</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 6: Payment Instructions */}
        {currentStep === 6 && paymentInstructions && (
          <Card>
            <CardHeader>
              <CardTitle>Payment Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-lg">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-green-800">Application Submitted Successfully!</h3>
                      <p className="text-green-600 text-sm">Reference: {paymentInstructions.reference}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-brand-dark mb-2">Investment Amount</h4>
                    <p className="text-2xl font-bold text-brand-blue">{paymentInstructions.amount}</p>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium text-brand-dark mb-3">Wire Transfer Instructions</h4>
                    <div className="space-y-2 text-sm text-brand-gray">
                      {paymentInstructions.instructions.map((instruction: string, index: number) => (
                        <p key={index}>• {instruction}</p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-medium text-brand-dark mb-2">Important</h4>
                    <p className="text-sm text-brand-gray">
                      Payment instructions have been sent to your email. Please reference number{" "}
                      <span className="font-mono bg-white px-2 py-1 rounded border">
                        {paymentInstructions.reference}
                      </span>{" "}
                      when making your wire transfer.
                    </p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    type="button"
                    onClick={() => {
                      form.reset();
                      setCurrentStep(1);
                      setPaymentInstructions(null);
                    }}
                    className="bg-brand-blue hover:bg-brand-blue-light text-white"
                  >
                    Start New Application
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        {currentStep < 6 && (
          <div className="flex justify-between">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                Previous
              </Button>
            )}
            <Button
              type="submit"
              className="bg-brand-blue hover:bg-brand-blue-light text-white"
              disabled={
                createUserMutation.isPending ||
                createApplicationMutation.isPending ||
                requestPaymentMutation.isPending
              }
            >
              {currentStep === 5 ? "Submit Investment Application" : "Next"}
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
}

export default function InvestorOnboardingForm() {
  return <InvestorForm />;
}
