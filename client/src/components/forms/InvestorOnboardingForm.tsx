import { useState, useEffect } from "react";
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
import { Slider } from "@/components/ui/slider";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { INVESTMENT_TIERS } from "@/lib/constants";
import { formatCurrency, generatePaymentReference, formatPaymentInstructions } from "@/lib/payment-utils";
import PortfolioBlendCalculator from "../calculators/PortfolioBlendCalculator";
import ProgressIndicator from "../ui/progress-indicator";
import ESignatureModal from "../esignature/ESignatureModal";
import { getDocumentTemplate, processDocumentTemplate } from "../esignature/DocumentTemplates";
import FactorRateRiskSlider from "../FactorRateRiskSlider";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  investmentAmount: z.number().min(5000, "Minimum investment is $5,000"),
  investmentType: z.enum(["single", "portfolio"]),
  accreditedStatus: z.boolean().optional(),
  documentsAgreed: z.boolean().refine(val => val === true, "Document agreement required"),
  riskPreference: z.object({
    selectedRate: z.number(),
    riskBand: z.string(),
    color: z.string(),
    notes: z.string()
  }).optional(),
});

type FormData = z.infer<typeof formSchema>;

function InvestorForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTier, setSelectedTier] = useState<string>("");
  const [showPortfolioCalculator, setShowPortfolioCalculator] = useState(false);
  const [paymentInstructions, setPaymentInstructions] = useState<any>(null);
  const [showESignatureModal, setShowESignatureModal] = useState(false);
  const [documentToSign, setDocumentToSign] = useState<any>(null);
  const [signatureCompleted, setSignatureCompleted] = useState(false);
  const [applicationData, setApplicationData] = useState<any>(null);
  const [riskPreference, setRiskPreference] = useState({
    selectedRate: 1.32,
    riskBand: "Medium",
    color: "orange",
    notes: "Balanced Risk Strategy"
  });
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
      riskPreference: {
        selectedRate: 1.32,
        riskBand: "Medium",
        color: "orange",
        notes: "Balanced Risk Strategy"
      },
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
      
      // Store application data for e-signature
      setApplicationData({ application, user });

      // Step 3: Prepare Investment Agreement for E-signature
      const template = getDocumentTemplate('investment-agreement');
      if (template) {
        const documentData = {
          fullName: `${data.firstName} ${data.lastName}`,
          email: data.email,
          investmentAmount: formatCurrency(data.investmentAmount),
          investmentType: data.investmentType,
          accreditedStatus: data.accreditedStatus ? 'Yes - Accredited Investor' : 'No - Non-Accredited',
          applicationId: application.id,
          investmentTypePortfolio: data.investmentType === 'portfolio'
        };

        const processedDocument = {
          title: template.title,
          content: processDocumentTemplate(template, documentData),
          type: 'investment' as const
        };

        setDocumentToSign(processedDocument);
        setShowESignatureModal(true);
        return; // Wait for signature completion
      }

      // Fallback: Continue without e-signature
      await continueAfterSignature();

    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const continueAfterSignature = async () => {
    try {
      if (!applicationData) return;

      const { application } = applicationData;
      const formData = form.getValues();

      // Step 4: Request payment instructions  
      const paymentRequest = await requestPaymentMutation.mutateAsync({
        applicationId: application.id,
        applicationType: "investment",
        amount: formData.investmentAmount,
        userEmail: formData.email,
        userName: `${formData.firstName} ${formData.lastName}`,
      });

      // Step 5: Send investor document packet
      await sendInvestorPacketMutation.mutateAsync({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        investmentAmount: formData.investmentAmount,
        investmentType: formData.investmentType,
        deliveryMethod: "email"
      });

      // Generate payment reference and instructions
      const reference = generatePaymentReference(application.id);
      const instructions = formatPaymentInstructions(formData.investmentAmount, reference);

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

  const handleESignatureComplete = async (signatureData: any) => {
    try {
      if (!applicationData) return;

      const { application, user } = applicationData;
      const formData = form.getValues();

      // Save e-signature to database
      await apiRequest("POST", "/api/e-signatures", {
        userId: user.id,
        documentId: 'investment-agreement',
        documentTitle: documentToSign?.title,
        documentContent: documentToSign?.content,
        documentHash: signatureData.documentHash,
        signerName: signatureData.fullName,
        signerEmail: signatureData.email,
        signatureData: signatureData.signature,
        signatureType: signatureData.signature.startsWith('data:') ? 'drawn' : 'typed',
        ipAddress: signatureData.ipAddress,
        applicationId: application.id,
        applicationType: 'investment',
      });

      setSignatureCompleted(true);
      setShowESignatureModal(false);

      toast({
        title: "Document Signed Successfully!",
        description: "Your investment agreement has been signed. Proceeding with payment instructions.",
      });

      // Continue with the process
      await continueAfterSignature();

    } catch (error: any) {
      toast({
        title: "Signature Error",
        description: error.message || "Failed to save signature. Please try again.",
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

  const goToStep = (stepNumber: number) => {
    if (canNavigateToStep(stepNumber)) {
      setCurrentStep(stepNumber);
    }
  };

  // Update step validation when moving between steps
  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        const investmentAmount = form.getValues("investmentAmount");
        const investmentType = form.getValues("investmentType");
        return investmentAmount >= 5000 && investmentType;
      case 2:
        const { firstName, lastName, email, phone } = form.getValues();
        return firstName && lastName && email && phone;
      case 3:
        return form.getValues("documentsAgreed");
      case 4:
        return true; // Review step
      default:
        return false;
    }
  };

  // Watch form values for validation
  const watchedValues = form.watch();

  // Update step validation whenever form values change
  useEffect(() => {
    const isCurrentStepValid = validateCurrentStep();
    setStepValidation(prev => ({
      ...prev,
      [currentStep]: isCurrentStepValid
    }));
  }, [currentStep, watchedValues]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Animated Progress Indicator */}
        <ProgressIndicator 
          steps={steps}
          currentStep={currentStep}
          className="mb-8"
        />

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
                        <div className="space-y-4">
                          {/* Text Input */}
                          <div className="relative">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-brand-gray">$</span>
                            <Input
                              type="number"
                              placeholder="Enter amount"
                              value={field.value || ""}
                              onChange={(e) => {
                                const value = Number(e.target.value);
                                if (value >= 5000 && value <= 500000) {
                                  field.onChange(value);
                                }
                              }}
                              className="text-lg pl-8 text-center font-semibold"
                              min={5000}
                              max={500000}
                              step={5000}
                            />
                          </div>
                          
                          {/* Slider */}
                          <div className="px-2">
                            <Slider
                              value={[field.value || 25000]}
                              onValueChange={(value) => field.onChange(value[0])}
                              max={500000}
                              min={5000}
                              step={5000}
                              className="w-full"
                            />
                            <div className="flex justify-between text-sm text-brand-gray mt-2">
                              <span>$5,000</span>
                              <span className="text-2xl font-bold text-brand-dark">
                                {formatCurrency(field.value || 25000)}
                              </span>
                              <span>$500,000</span>
                            </div>
                          </div>
                        </div>
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
              {/* Factor Rate Risk Preference Slider */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-dark">Select Your Risk Preference</h3>
                <p className="text-brand-gray text-sm">
                  Choose your preferred factor rate range to match your risk tolerance and return expectations.
                </p>
                <FormField
                  control={form.control}
                  name="riskPreference"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <FactorRateRiskSlider
                          value={riskPreference.selectedRate}
                          onChange={(value) => {
                            const newRiskPreference = {
                              selectedRate: value,
                              riskBand: value <= 1.24 ? "Low" : value <= 1.38 ? "Medium" : "High",
                              color: value <= 1.24 ? "green" : value <= 1.38 ? "orange" : "red",
                              notes: `${value <= 1.24 ? "Conservative" : value <= 1.38 ? "Balanced" : "Aggressive"} Risk Strategy`
                            };
                            setRiskPreference(newRiskPreference);
                            field.onChange(newRiskPreference);
                          }}
                          onRiskDataChange={(riskData) => {
                            setRiskPreference(riskData);
                            field.onChange(riskData);
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

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
                      <p>Risk Strategy: {riskPreference.riskBand} Risk ({riskPreference.selectedRate.toFixed(2)}x factor rate)</p>
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

      {/* E-Signature Modal */}
      {showESignatureModal && documentToSign && (
        <ESignatureModal
          isOpen={showESignatureModal}
          onClose={() => setShowESignatureModal(false)}
          onComplete={handleESignatureComplete}
          document={documentToSign}
          userInfo={{
            firstName: form.getValues('firstName'),
            lastName: form.getValues('lastName'),
            email: form.getValues('email'),
          }}
        />
      )}
    </Form>
  );
}

export default function InvestorOnboardingForm() {
  return <InvestorForm />;
}