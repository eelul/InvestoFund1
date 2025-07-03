import { useState } from "react";
import { Download, Mail, FileText, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const downloadFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  deliveryMethod: z.enum(["email", "download"]),
});

type DownloadFormData = z.infer<typeof downloadFormSchema>;

interface DownloadPacketProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadPacket({ isOpen, onClose }: DownloadPacketProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<DownloadFormData>({
    resolver: zodResolver(downloadFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      phone: "",
      deliveryMethod: "email",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: DownloadFormData) => {
      const response = await apiRequest("POST", "/api/download-packet", data);
      return response.json();
    },
  });

  const createPacketContent = () => {
    return `GREEN HARVEST FUNDING
ISO INFORMATION PACKET

===============================
TABLE OF CONTENTS
===============================
1. Company Overview
2. Partnership Opportunity
3. Commission Structure
4. Submission Requirements
5. Quality Standards
6. Support & Resources
7. Getting Started

===============================
1. COMPANY OVERVIEW
===============================

Green Harvest Funding is a leading direct funder specializing in Merchant Cash Advances (MCAs) for small and medium-sized businesses. We partner with experienced ISOs and brokers to provide fast, flexible working capital solutions.

Founded: 2018
Headquarters: New York, NY
Funding Volume: $500M+ annually
Network: 200+ active ISOs nationwide

Our Mission: To provide transparent, reliable funding solutions while building long-term partnerships with ISOs who share our commitment to quality and compliance.

===============================
2. PARTNERSHIP OPPORTUNITY
===============================

Why Partner with Green Harvest Funding?

✓ DIRECT FUNDING SOURCE
- No syndication or layering
- Direct decision-making authority
- Consistent approval criteria

✓ COMPETITIVE COMMISSIONS
- 15% standard commission rate
- 20% premium rate for quality deals
- 25% volume bonuses for top producers

✓ FAST TURNAROUND
- 24-hour decision timeframe
- Same-day funding available
- Streamlined documentation process

✓ COMPREHENSIVE SUPPORT
- Dedicated ISO support team
- Marketing materials and tools
- Ongoing training and education

===============================
3. COMMISSION STRUCTURE
===============================

STANDARD COMMISSION RATES:
- Base Rate: 15% of gross profit
- Quality Bonus: +5% for verified deals
- Volume Bonus: +10% for 10+ deals/month

COMMISSION CALCULATION EXAMPLE:
Deal Amount: $50,000
Factor Rate: 1.3
Total Repayment: $65,000
Gross Profit: $15,000
Your Commission (15%): $2,250

PAYMENT TERMS:
- Commissions paid upon funding
- ACH direct deposit available
- Monthly statements provided
- 1099 issued annually

VOLUME TIER BENEFITS:
- Tier 1 (1-4 deals/month): 15% base rate
- Tier 2 (5-9 deals/month): 17% rate
- Tier 3 (10+ deals/month): 20% rate
- Top Producer (25+ deals/month): 25% rate

===============================
4. SUBMISSION REQUIREMENTS
===============================

REQUIRED DOCUMENTATION:
□ Completed application form
□ 3-6 months business bank statements
□ Voided business check
□ Government-issued ID (business owner)
□ Business license (if applicable)

ADDITIONAL DOCUMENTS (as needed):
□ Processing statements
□ Tax returns (last 2 years)
□ Profit & loss statements
□ Articles of incorporation
□ Lease agreement

SUBMISSION GUIDELINES:
- All documents must be clear and legible
- Bank statements must show complete months
- Information must be consistent across documents
- Include ISO contact information
- Submit via secure portal or encrypted email

===============================
5. QUALITY STANDARDS
===============================

DEAL QUALIFICATION CRITERIA:
- Minimum 6 months in business
- Monthly revenue of $10,000+
- Average daily bank balance of $5,000+
- No recent bankruptcies or tax liens
- Stable or growing revenue trend

RED FLAGS TO AVOID:
- Excessive NSF fees
- Declining revenue trends
- Multiple recent advances
- Cash-heavy businesses without documentation
- Inconsistent information

APPROVAL FACTORS:
- Business cash flow strength
- Industry stability
- Credit profile
- Debt-to-income ratio
- Use of funds

===============================
6. SUPPORT & RESOURCES
===============================

ISO PORTAL ACCESS:
- Online submission system
- Real-time status updates
- Commission tracking
- Document management
- Training materials

MARKETING SUPPORT:
- White-label marketing materials
- Email templates
- Social media content
- Website copy
- Logo and branding guidelines

TRAINING PROGRAMS:
- New ISO orientation
- Industry best practices
- Compliance training
- Sales techniques
- Regular webinars

DEDICATED SUPPORT:
- Assigned relationship manager
- Direct phone and email access
- Same-day response guarantee
- Monthly check-in calls

===============================
7. GETTING STARTED
===============================

ONBOARDING PROCESS:
1. Complete ISO application
2. Background and reference check
3. Compliance training completion
4. Portal access setup
5. First deal submission

REQUIRED LICENSES:
- Business license in operating state
- ISO registration (where required)
- Surety bond (varies by state)
- E&O insurance recommended

COMPLIANCE REQUIREMENTS:
- Truth in Lending Act (TILA) knowledge
- Fair Debt Collection Practices Act
- State-specific regulations
- Data security protocols

CONTACT INFORMATION:
ISO Relations: partnerships@greenharvest.com
Support Portal: portal.greenharvest.com
Phone: 1-800-GH-FUNDS (1-800-444-8637)
Emergency Line: 1-888-GH-URGENT

NEXT STEPS:
1. Review this information packet
2. Complete ISO application online
3. Schedule introductory call
4. Begin compliance training
5. Submit your first deal

===============================

Thank you for your interest in partnering with Green Harvest Funding. We look forward to building a successful, long-term relationship that benefits both our organizations and the businesses we serve.

For questions about this packet or the application process, please contact our ISO Relations team at partnerships@greenharvest.com or call 1-800-444-8637.

© 2024 Green Harvest Funding LLC. All rights reserved.`;
  };

  const downloadPacket = () => {
    const content = createPacketContent();
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'green-harvest-iso-information-packet.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download Complete",
      description: "ISO Information Packet has been downloaded",
    });
  };

  const onSubmit = async (data: DownloadFormData) => {
    try {
      if (data.deliveryMethod === "download") {
        downloadPacket();
        setIsSubmitted(true);
        toast({
          title: "Download Started",
          description: "Your ISO Information Packet is downloading now",
        });
      } else {
        await submitMutation.mutateAsync(data);
        setIsSubmitted(true);
        toast({
          title: "Email Sent",
          description: "ISO Information Packet has been sent to your email",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process request. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-brand-blue" />
              <span>ISO Information Packet</span>
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              ✕
            </Button>
          </div>
        </CardHeader>
        
        {!isSubmitted ? (
          <CardContent>
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-brand-dark mb-2">Get Your Complete ISO Guide</h3>
              <p className="text-brand-gray mb-4">
                Download our comprehensive information packet containing:
              </p>
              <ul className="list-disc list-inside text-sm text-brand-gray space-y-1 mb-6">
                <li>Detailed commission structure and payment terms</li>
                <li>Complete submission requirements and quality standards</li>
                <li>Compliance guidelines and best practices</li>
                <li>Marketing support and training resources</li>
                <li>Contact information and next steps</li>
              </ul>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
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
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company Name</FormLabel>
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
                  name="deliveryMethod"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How would you like to receive the packet?</FormLabel>
                      <FormControl>
                        <div className="flex space-x-4">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              value="email"
                              checked={field.value === "email"}
                              onChange={() => field.onChange("email")}
                              className="text-brand-blue"
                            />
                            <Mail className="w-4 h-4" />
                            <span>Email Me</span>
                          </label>
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="radio"
                              value="download"
                              checked={field.value === "download"}
                              onChange={() => field.onChange("download")}
                              className="text-brand-blue"
                            />
                            <Download className="w-4 h-4" />
                            <span>Download Now</span>
                          </label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex space-x-2 pt-4">
                  <Button 
                    type="submit" 
                    className="flex-1"
                    disabled={submitMutation.isPending}
                  >
                    {form.watch("deliveryMethod") === "email" ? (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Send to Email
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download Packet
                      </>
                    )}
                  </Button>
                  <Button type="button" variant="outline" onClick={onClose}>
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        ) : (
          <CardContent className="text-center">
            <div className="py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-brand-dark mb-2">Success!</h3>
              <p className="text-brand-gray mb-6">
                {form.watch("deliveryMethod") === "email" 
                  ? "The ISO Information Packet has been sent to your email address."
                  : "The ISO Information Packet has been downloaded to your computer."
                }
              </p>
              <Button onClick={onClose}>Close</Button>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}