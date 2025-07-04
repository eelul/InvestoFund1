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
import { ChevronLeft, ChevronRight, CheckCircle } from "lucide-react";

// Enhanced form schema with all the comprehensive fields
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

// Constants for dropdowns
const INDUSTRY_OPTIONS = [
  "Restaurant & Food Service",
  "Retail & E-commerce",
  "Construction & Contractors",
  "Professional Services",
  "Health & Medical",
  "Automotive Services",
  "Beauty & Personal Care",
  "Real Estate",
  "Technology & Software",
  "Manufacturing",
  "Transportation & Logistics",
  "Education & Training",
  "Entertainment & Recreation",
  "Other"
];

const ENTITY_TYPES = [
  "Sole Proprietorship",
  "Partnership",
  "LLC",
  "Corporation",
  "S-Corporation",
  "Non-Profit",
  "Other"
];

const US_STATES = [
  "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA",
  "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD",
  "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ",
  "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
];

const MONTHLY_REVENUE_RANGES = [
  "$5,000 - $15,000",
  "$15,000 - $30,000", 
  "$30,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000+"
];

const FUNDING_RANGES = [
  "$5,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $250,000",
  "$250,000+"
];

export default function EnhancedMerchantApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [preQualification, setPreQualification] = useState<any>(null);
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

  const onSubmit = async (data: FormData) => {
    try {
      // Create user
      const userData = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.mobilePhone,
        userType: "merchant",
      };

      const user = await createUserMutation.mutateAsync(userData);

      // Create application with all the comprehensive data
      const applicationData = {
        userId: user.id,
        userEmail: data.email,
        businessName: data.legalCompanyName,
        businessType: data.industry,
        yearsInBusiness: calculateYearsFromStartDate(data.businessStartDate),
        monthlyRevenue: data.monthlyRevenue,
        requestedFunding: data.requestedFunding,
        ownerName: `${data.firstName} ${data.lastName}`,
        businessAddress: `${data.businessAddressLine1}, ${data.businessCity}, ${data.businessState} ${data.businessZip}`,
        
        // Enhanced fields
        personalInfo: {
          dateOfBirth: data.dateOfBirth,
          ssn: data.ssn,
          mobilePhone: data.mobilePhone,
        },
        businessDetails: {
          legalCompanyName: data.legalCompanyName,
          businessStartDate: data.businessStartDate,
          industry: data.industry,
          stateOfIncorporation: data.stateOfIncorporation,
          taxId: data.taxId,
          companyWebsite: data.hasWebsite ? data.companyWebsite : null,
          businessPhone: data.businessPhone,
          ficoScore: data.ficoScore,
          ownershipPercentage: data.ownershipPercentage,
          numberOfEmployees: data.numberOfEmployees,
          entityType: data.entityType,
          processCreditCards: data.processCreditCards,
          ownMultipleBusinesses: data.ownMultipleBusinesses,
          isHomeBased: data.isHomeBased,
        },
        businessAddressDetails: {
          line1: data.businessAddressLine1,
          line2: data.businessAddressLine2,
          city: data.businessCity,
          state: data.businessState,
          zip: data.businessZip,
        }
      };

      const application = await createApplicationMutation.mutateAsync(applicationData);

      toast({
        title: "Application Submitted Successfully!",
        description: "Thank you for placing your trust in us. We will process your request right away and contact you within 24 hours.",
      });

      // Move to success step
      setCurrentStep(5);

    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const calculateYearsFromStartDate = (startDate: string): string => {
    const start = new Date(startDate);
    const now = new Date();
    const years = now.getFullYear() - start.getFullYear();
    
    if (years < 1) return "Less than 1 year";
    if (years === 1) return "1 year";
    if (years <= 3) return "1-3 years";
    if (years <= 5) return "3-5 years";
    return "5+ years";
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const steps = [
    { number: 1, title: "Personal Information", completed: false },
    { number: 2, title: "Business Information", completed: false },
    { number: 3, title: "Business Details", completed: false },
    { number: 4, title: "Review & Submit", completed: false },
  ];

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className={`
            w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium
            ${currentStep >= step.number 
              ? 'bg-brand-blue text-white' 
              : 'bg-gray-200 text-gray-500'
            }
          `}>
            {currentStep > step.number ? <CheckCircle className="w-5 h-5" /> : step.number}
          </div>
          <div className="ml-3 mr-6">
            <p className={`text-sm font-medium ${
              currentStep >= step.number ? 'text-brand-blue' : 'text-gray-500'
            }`}>
              {step.title}
            </p>
          </div>
          {index < steps.length - 1 && (
            <div className={`w-12 h-0.5 ${
              currentStep > step.number ? 'bg-brand-blue' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Personal Information</h3>
              <p className="text-brand-gray">
                Thank you for placing your trust in us. Please take a few minutes to complete the form below.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
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
                    <FormLabel>Last Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date of Birth *</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ssn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SSN/NIN *</FormLabel>
                    <FormControl>
                      <Input placeholder="XXX-XX-XXXX" {...field} />
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
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email@business.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mobilePhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Phone *</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(XXX) XXX-XXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Business Information</h3>
              <p className="text-brand-gray">
                Tell us about your business details and registration information.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <FormField
                  control={form.control}
                  name="legalCompanyName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Legal Company Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Smith Roofing" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="businessStartDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Start Date *</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="industry"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Industry</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {INDUSTRY_OPTIONS.map((industry) => (
                          <SelectItem key={industry} value={industry}>
                            {industry}
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
                name="stateOfIncorporation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State of Incorporation *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {US_STATES.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
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
                name="taxId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tax ID / Company Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="XX-XXXXXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="md:col-span-2">
                <FormField
                  control={form.control}
                  name="hasWebsite"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={!field.value}
                          onCheckedChange={(checked) => field.onChange(!checked)}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>This business does not have a website</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>

              {form.watch("hasWebsite") && (
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="companyWebsite"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Website *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter URL" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <FormField
                control={form.control}
                name="businessPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Business Phone *</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="(XXX) XXX-XXXX" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Business Address Section */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-brand-dark">Business Address</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="businessAddressLine1"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Address Line 1 *</FormLabel>
                        <FormControl>
                          <Input placeholder="42 Railroad st." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="md:col-span-2">
                  <FormField
                    control={form.control}
                    name="businessAddressLine2"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Business Address Line 2</FormLabel>
                        <FormControl>
                          <Input placeholder="Apt. 4" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="businessCity"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business City *</FormLabel>
                      <FormControl>
                        <Input placeholder="New York" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="businessState"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business State *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {US_STATES.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
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
                  name="businessZip"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Zip *</FormLabel>
                      <FormControl>
                        <Input placeholder="10001" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Business Details</h3>
              <p className="text-brand-gray">
                Additional information about your business operations and funding needs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="ficoScore"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>FICO Score * (250-900)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min="250" 
                        max="900" 
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="ownershipPercentage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Ownership % *</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min="1" 
                        max="100" 
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="numberOfEmployees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Employees *</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        min="0" 
                        placeholder="100"
                        {...field}
                        onChange={(e) => field.onChange(parseInt(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="entityType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Entity Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select entity type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {ENTITY_TYPES.map((type) => (
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
                name="monthlyRevenue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Monthly Revenue *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
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

              <FormField
                control={form.control}
                name="requestedFunding"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Requested Funding *</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select funding amount" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {FUNDING_RANGES.map((range) => (
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

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-brand-dark">Business Operations</h4>
              
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="processCreditCards"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Do you process credit cards? *</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="ownMultipleBusinesses"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Do you own multiple businesses?</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isHomeBased"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>Are you home based?</FormLabel>
                      </div>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Review & Submit</h3>
              <p className="text-brand-gray">
                Please review your information and agree to the terms before submitting.
              </p>
            </div>
            
            {/* Summary of information */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><strong>Name:</strong> {form.watch("firstName")} {form.watch("lastName")}</p>
                  <p><strong>Email:</strong> {form.watch("email")}</p>
                  <p><strong>Phone:</strong> {form.watch("mobilePhone")}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Business Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <p><strong>Company:</strong> {form.watch("legalCompanyName")}</p>
                  <p><strong>Industry:</strong> {form.watch("industry")}</p>
                  <p><strong>Revenue:</strong> {form.watch("monthlyRevenue")}</p>
                  <p><strong>Funding Requested:</strong> {form.watch("requestedFunding")}</p>
                </CardContent>
              </Card>
            </div>

            <FormField
              control={form.control}
              name="termsAgreed"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I agree to the terms and conditions and authorize InvestoFund to process my application *
                    </FormLabel>
                  </div>
                </FormItem>
              )}
            />
          </div>
        );

      case 5:
        return (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-brand-dark mb-2">Application Submitted Successfully!</h3>
              <p className="text-brand-gray">
                Thank you for placing your trust in us. We will process your request right away and contact you within 24 hours.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-brand-dark text-center">Business Funding Application</CardTitle>
          <p className="text-brand-gray text-center">
            Complete our comprehensive application to get fast, flexible funding for your business.
          </p>
        </CardHeader>
        <CardContent>
          {currentStep < 5 && renderStepIndicator()}
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {renderStepContent()}
              
              {currentStep < 5 && (
                <div className="flex justify-between pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="flex items-center"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  
                  {currentStep === 4 ? (
                    <Button
                      type="submit"
                      disabled={createApplicationMutation.isPending || !form.watch("termsAgreed")}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      {createApplicationMutation.isPending ? "Submitting..." : "Submit Application"}
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="flex items-center"
                    >
                      Next
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}