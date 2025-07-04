import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { FileUpload } from "@/components/ui/file-upload";
import { BUSINESS_TYPES, YEARS_IN_BUSINESS, MONTHLY_REVENUE_RANGES, FUNDING_RANGES } from "@/lib/constants";
import ProgressIndicator from "@/components/ui/progress-indicator";

const formSchema = z.object({
  // Personal Information
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  ssn: z.string().min(9, "Social Security Number is required"),
  email: z.string().email("Valid email is required"),
  mobilePhone: z.string().min(10, "Valid mobile phone number is required"),
  
  // Business Information
  legalCompanyName: z.string().min(2, "Legal company name is required"),
  businessStartDate: z.string().min(1, "Business start date is required"),
  industry: z.string().min(1, "Industry is required"),
  stateOfIncorporation: z.string().min(1, "State of incorporation is required"),
  taxId: z.string().min(9, "Tax ID/Company Number is required"),
  companyWebsite: z.string().optional(),
  hasWebsite: z.boolean().default(true),
  businessPhone: z.string().min(10, "Valid business phone number is required"),
  
  // Business Address
  businessAddressLine1: z.string().min(5, "Business address is required"),
  businessAddressLine2: z.string().optional(),
  businessCity: z.string().min(2, "City is required"),
  businessState: z.string().min(2, "State is required"),
  businessZip: z.string().min(5, "ZIP code is required"),
  
  // Business Details
  ficoScore: z.number().min(250).max(900),
  ownershipPercentage: z.number().min(1).max(100),
  numberOfEmployees: z.number().min(0),
  entityType: z.string().min(1, "Entity type is required"),
  processCreditCards: z.boolean(),
  ownMultipleBusinesses: z.boolean(),
  isHomeBased: z.boolean(),
  
  // Funding Information
  monthlyRevenue: z.string().min(1, "Monthly revenue is required"),
  requestedFunding: z.string().min(1, "Requested funding is required"),
  
  // Terms
  termsAgreed: z.boolean().refine(val => val === true, "You must agree to the terms"),
});

type FormData = z.infer<typeof formSchema>;

export default function MerchantApplicationForm() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [preQualification, setPreQualification] = useState<any>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [stepValidation, setStepValidation] = useState({
    1: false,
    2: false,
    3: false,
  });
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // Personal Information
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      ssn: "",
      email: "",
      mobilePhone: "",
      
      // Business Information
      legalCompanyName: "",
      businessStartDate: "",
      industry: "",
      stateOfIncorporation: "",
      taxId: "",
      companyWebsite: "",
      hasWebsite: true,
      businessPhone: "",
      
      // Business Address
      businessAddressLine1: "",
      businessAddressLine2: "",
      businessCity: "",
      businessState: "",
      businessZip: "",
      
      // Business Details
      ficoScore: 650,
      ownershipPercentage: 100,
      numberOfEmployees: 1,
      entityType: "",
      processCreditCards: false,
      ownMultipleBusinesses: false,
      isHomeBased: false,
      
      // Funding Information
      monthlyRevenue: "",
      requestedFunding: "",
      
      // Terms
      termsAgreed: false,
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
      const response = await apiRequest("POST", "/api/merchant-applications", applicationData);
      return response.json();
    },
  });

  const uploadFilesMutation = useMutation({
    mutationFn: async (files: File[]) => {
      // Mock file upload - in production, this would upload to cloud storage
      return files.map(file => ({
        filename: file.name,
        size: file.size,
        url: `/uploads/${file.name}`,
      }));
    },
  });

  // Calculate pre-qualification when monthly revenue changes
  const calculatePreQualification = (monthlyRevenue: string) => {
    let estimatedFunding = { min: 5000, max: 25000 };
    let factorRate = { min: 1.35, max: 1.45 };

    switch (monthlyRevenue) {
      case "$5,000 - $15,000":
        estimatedFunding = { min: 5000, max: 25000 };
        factorRate = { min: 1.35, max: 1.45 };
        break;
      case "$15,000 - $30,000":
        estimatedFunding = { min: 15000, max: 45000 };
        factorRate = { min: 1.30, max: 1.40 };
        break;
      case "$30,000 - $50,000":
        estimatedFunding = { min: 25000, max: 75000 };
        factorRate = { min: 1.25, max: 1.35 };
        break;
      case "$50,000+":
        estimatedFunding = { min: 50000, max: 150000 };
        factorRate = { min: 1.20, max: 1.30 };
        break;
    }

    const avgFunding = (estimatedFunding.min + estimatedFunding.max) / 2;
    const avgFactorRate = (factorRate.min + factorRate.max) / 2;
    const totalRepayment = avgFunding * avgFactorRate;
    const estimatedDailyPayment = Math.round(totalRepayment / 60); // Assuming 60-day term

    return {
      estimatedFunding,
      factorRate,
      example: {
        advance: avgFunding,
        repayment: totalRepayment,
        dailyPayment: estimatedDailyPayment,
      },
    };
  };

  const onSubmit = async (data: FormData) => {
    try {
      // Step 1: Create or get user
      const userData = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        userType: "merchant",
      };

      const user = await createUserMutation.mutateAsync(userData);

      // Step 2: Upload files
      let fileMetadata = [];
      if (uploadedFiles.length > 0) {
        fileMetadata = await uploadFilesMutation.mutateAsync(uploadedFiles);
      }

      // Step 3: Generate pre-qualification results
      const preQualResults = calculatePreQualification(data.monthlyRevenue);

      // Step 4: Create merchant application
      const applicationData = {
        userId: user.id,
        userEmail: data.email,
        businessName: data.businessName,
        businessType: data.businessType,
        yearsInBusiness: data.yearsInBusiness,
        monthlyRevenue: data.monthlyRevenue,
        requestedFunding: data.requestedFunding,
        ownerName: data.ownerName,
        businessAddress: data.businessAddress,
        documentsUploaded: fileMetadata,
        preQualificationResults: preQualResults,
      };

      const application = await createApplicationMutation.mutateAsync(applicationData);

      setPreQualification(preQualResults);

      toast({
        title: "Application Submitted Successfully!",
        description: "Your funding application has been submitted. We'll review it and contact you within 24 hours.",
      });

      // Don't reset the form so user can see their pre-qualification results

    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  // Progress steps configuration
  const steps = [
    { number: 1, title: "Business Information", completed: stepValidation[1] },
    { number: 2, title: "Owner Details", completed: stepValidation[2] },
    { number: 3, title: "Review & Submit", completed: stepValidation[3] },
  ];

  // Step validation logic
  const validateCurrentStep = () => {
    const values = form.getValues();
    switch (currentStep) {
      case 1:
        return values.businessName && values.businessType && values.yearsInBusiness && values.monthlyRevenue && values.requestedFunding;
      case 2:
        return values.firstName && values.lastName && values.email && values.phone && values.ownerName && values.businessAddress;
      case 3:
        return values.termsAgreed;
      default:
        return false;
    }
  };

  // Watch form values for validation
  const watchedValues = form.watch();

  // Update step validation
  useEffect(() => {
    const isValid = validateCurrentStep();
    setStepValidation(prev => ({
      ...prev,
      [currentStep]: isValid
    }));
  }, [currentStep, watchedValues]);

  const nextStep = () => {
    if (currentStep < steps.length && validateCurrentStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-brand-dark">Business Funding Application</CardTitle>
          <p className="text-brand-gray">
            Get fast, flexible funding for your business with our streamlined application process.
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Animated Progress Indicator */}
              <ProgressIndicator 
                steps={steps}
                currentStep={currentStep}
                className="mb-8"
              />
              {/* Business Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-brand-dark">Business Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="businessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="businessType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select business type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {BUSINESS_TYPES.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="yearsInBusiness"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Years in Business</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select years" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {YEARS_IN_BUSINESS.map((years) => (
                              <SelectItem key={years} value={years}>
                                {years}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="monthlyRevenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Monthly Revenue</FormLabel>
                        <Select 
                          onValueChange={(value) => {
                            field.onChange(value);
                            setPreQualification(calculatePreQualification(value));
                          }} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select revenue range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {MONTHLY_REVENUE_RANGES.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="businessAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Funding Request */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-dark">Funding Request</h3>
                
                <FormField
                  control={form.control}
                  name="requestedFunding"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How much funding do you need?</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {FUNDING_RANGES.map((range) => (
                          <div
                            key={range}
                            className={`p-4 border-2 rounded-lg cursor-pointer text-center transition-all ${
                              field.value === range
                                ? "border-brand-blue bg-brand-blue/5"
                                : "border-gray-200 hover:border-brand-blue"
                            }`}
                            onClick={() => field.onChange(range)}
                          >
                            <div className="text-lg font-bold text-brand-blue">{range}</div>
                          </div>
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-dark">Contact Information</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
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
                    name="ownerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Owner Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
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
                          <Input type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="md:col-span-2">
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Document Upload */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-brand-dark">Upload Required Documents</h3>
                <FileUpload
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                  multiple={true}
                  onFilesChange={setUploadedFiles}
                />
                <p className="text-sm text-gray-500">
                  Upload business bank statements (3 months), voided check, business license, and any supporting documents
                </p>
              </div>

              {/* Pre-qualification Results */}
              {preQualification && (
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-brand-dark">Instant Pre-Qualification Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="text-sm text-brand-gray">Estimated Funding Amount</div>
                        <div className="text-2xl font-bold text-brand-teal">
                          {formatCurrency(preQualification.estimatedFunding.min)} - {formatCurrency(preQualification.estimatedFunding.max)}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-brand-gray">Estimated Factor Rate</div>
                        <div className="text-2xl font-bold text-brand-blue">
                          {preQualification.factorRate.min.toFixed(2)}x - {preQualification.factorRate.max.toFixed(2)}x
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-white rounded-lg">
                      <div className="text-sm text-brand-gray mb-2">Example based on your profile:</div>
                      <div className="text-sm">
                        <strong>{formatCurrency(preQualification.example.advance)} advance</strong> → 
                        <strong> {formatCurrency(preQualification.example.repayment)} total repayment</strong> → 
                        <strong> ~{formatCurrency(preQualification.example.dailyPayment)} daily payments</strong>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Terms Agreement */}
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <FormField
                    control={form.control}
                    name="termsAgreed"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-brand-gray">
                            I agree to the terms and conditions and authorize InvestoFund to review my application and documents.
                          </FormLabel>
                          <div className="text-sm text-brand-gray">
                            By submitting this application, you consent to a credit check and agree to our privacy policy. 
                            We'll contact you within 24 hours with next steps.
                          </div>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-brand-blue hover:bg-blue-600 px-8 py-3"
                  disabled={
                    createUserMutation.isPending ||
                    createApplicationMutation.isPending ||
                    uploadFilesMutation.isPending
                  }
                >
                  {createApplicationMutation.isPending ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
