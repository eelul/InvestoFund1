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
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { FileUpload } from "@/components/ui/file-upload";
import ISOCommissionCalculator from "../calculators/ISOCommissionCalculator";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email is required"),
  isoName: z.string().min(2, "ISO/Broker name is required"),
  merchantBusinessName: z.string().min(2, "Merchant business name is required"),
  requestedAmount: z.number().min(5000, "Minimum amount is $5,000"),
  factorRate: z.number().min(1.25).max(1.49),
  qualityChecklist: z.object({
    bankStatements: z.boolean(),
    voidedCheck: z.boolean(),
    application: z.boolean(),
    creditReport: z.boolean(),
    taxReturns: z.boolean(),
    verified: z.boolean(),
  }),
  agreements: z.object({
    isoTerms: z.boolean().refine(val => val === true, "ISO terms agreement required"),
    commission: z.boolean().refine(val => val === true, "Commission understanding required"),
    compliance: z.boolean().refine(val => val === true, "Compliance confirmation required"),
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function BrokerSubmissionForm() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      isoName: "",
      merchantBusinessName: "",
      requestedAmount: 25000,
      factorRate: 1.45,
      qualityChecklist: {
        bankStatements: false,
        voidedCheck: false,
        application: false,
        creditReport: false,
        taxReturns: false,
        verified: false,
      },
      agreements: {
        isoTerms: false,
        commission: false,
        compliance: false,
      },
    },
  });

  const createUserMutation = useMutation({
    mutationFn: async (userData: any) => {
      const response = await apiRequest("POST", "/api/users", userData);
      return response.json();
    },
  });

  const createDealSubmissionMutation = useMutation({
    mutationFn: async (submissionData: any) => {
      const response = await apiRequest("POST", "/api/deal-submissions", submissionData);
      return response.json();
    },
  });

  const uploadFilesMutation = useMutation({
    mutationFn: async (files: File[]) => {
      // This would upload files to storage service
      // For now, return mock file metadata
      return files.map(file => ({
        filename: file.name,
        size: file.size,
        url: `/uploads/${file.name}`,
      }));
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Step 1: Create or get user
      const userData = {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        userType: "iso",
      };

      const user = await createUserMutation.mutateAsync(userData);

      // Step 2: Upload files
      let fileMetadata = [];
      if (uploadedFiles.length > 0) {
        fileMetadata = await uploadFilesMutation.mutateAsync(uploadedFiles);
      }

      // Step 3: Calculate commission
      const repayment = data.requestedAmount * data.factorRate;
      const grossProfit = repayment - data.requestedAmount;
      const estimatedCommission = grossProfit * 0.15;

      // Step 4: Create deal submission
      const submissionData = {
        userId: user.id,
        userEmail: data.email,
        isoName: data.isoName,
        merchantBusinessName: data.merchantBusinessName,
        requestedAmount: data.requestedAmount,
        factorRate: data.factorRate,
        estimatedCommission,
        dealFiles: fileMetadata,
        qualityChecklist: data.qualityChecklist,
      };

      await createDealSubmissionMutation.mutateAsync(submissionData);

      toast({
        title: "Deal Submitted Successfully!",
        description: "Your deal has been submitted for review. We'll contact you within 24 hours with next steps.",
      });

      // Reset form
      form.reset();
      setUploadedFiles([]);

    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  const calculateCommission = () => {
    const amount = form.watch("requestedAmount");
    const rate = form.watch("factorRate");
    const repayment = amount * rate;
    const grossProfit = repayment - amount;
    return grossProfit * 0.15;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Commission Calculator */}
      <ISOCommissionCalculator />

      {/* Deal Submission Form */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-brand-dark">Deal Submission Portal</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Contact Information */}
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
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="isoName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>ISO/Broker Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Deal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="merchantBusinessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Merchant Business Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="requestedAmount"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Requested Amount</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          {...field}
                          onChange={(e) => field.onChange(parseFloat(e.target.value))}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* File Upload */}
              <div>
                <FormLabel>Upload Deal Package</FormLabel>
                <FileUpload
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg"
                  multiple={true}
                  onFilesChange={setUploadedFiles}
                  className="mt-2"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Upload bank statements, application, voided check, and any supporting documents
                </p>
              </div>

              {/* Quality Checklist */}
              <Card className="bg-yellow-50 border-yellow-200">
                <CardHeader>
                  <CardTitle className="text-brand-dark">Deal Quality Checklist</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="qualityChecklist.bankStatements"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel>3+ months bank statements</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="qualityChecklist.voidedCheck"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel>Voided check included</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="qualityChecklist.application"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel>Completed application</FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="space-y-2">
                      <FormField
                        control={form.control}
                        name="qualityChecklist.creditReport"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel>Credit report (optional)</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="qualityChecklist.taxReturns"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel>Tax returns (if required)</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="qualityChecklist.verified"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-3">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel>Information verified</FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Agreement Terms */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-brand-dark">Submission Agreement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <FormField
                    control={form.control}
                    name="agreements.isoTerms"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>I agree to the ISO partnership terms</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="agreements.commission"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>I understand the commission structure</FormLabel>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="agreements.compliance"
                    render={({ field }) => (
                      <FormItem className="flex items-center space-x-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormLabel>This deal meets compliance requirements</FormLabel>
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
                  className="bg-brand-blue hover:bg-blue-600"
                  disabled={
                    createUserMutation.isPending ||
                    createDealSubmissionMutation.isPending ||
                    uploadFilesMutation.isPending
                  }
                >
                  Submit Deal for Review
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
