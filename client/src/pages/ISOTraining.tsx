import { useState, useEffect } from "react";
import { Book, Video, Download, Calendar, Phone, CheckCircle, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

const expertCallSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  company: z.string().min(2, "Company name is required"),
  experience: z.enum(["new", "1-2years", "3-5years", "5+years"]),
  preferredTime: z.string().min(1, "Please select a preferred time"),
  topics: z.string().min(10, "Please describe what you'd like to discuss"),
});

type ExpertCallFormData = z.infer<typeof expertCallSchema>;

export default function ISOTraining() {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);
  const [downloadedResources, setDownloadedResources] = useState<string[]>([]);
  const { toast } = useToast();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<ExpertCallFormData>({
    resolver: zodResolver(expertCallSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      experience: "new",
      preferredTime: "",
      topics: "",
    },
  });

  const downloadResource = (resourceName: string, content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    setDownloadedResources(prev => [...prev, resourceName]);
    toast({
      title: "Download Complete",
      description: `${resourceName} has been downloaded`,
    });
  };

  const onSubmitExpertCall = async (data: ExpertCallFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Call Request Submitted",
        description: "We'll contact you within 24 hours to schedule your expert consultation.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const trainingModules = [
    {
      id: 1,
      title: "MCA Industry Fundamentals",
      duration: "45 minutes",
      level: "Beginner",
      description: "Understanding merchant cash advances, factor rates, and industry basics",
      topics: [
        "What is a Merchant Cash Advance?",
        "Factor rates vs. interest rates",
        "Repayment structures and terms",
        "Industry regulations and compliance",
        "Market opportunities and trends"
      ],
      downloadContent: `MCA INDUSTRY FUNDAMENTALS GUIDE

1. WHAT IS A MERCHANT CASH ADVANCE?
A Merchant Cash Advance (MCA) is a financial product where a business receives upfront capital in exchange for a portion of future sales. Unlike traditional loans, MCAs are structured as purchases of future receivables.

2. FACTOR RATES vs. INTEREST RATES
Factor rates range from 1.1 to 1.5, representing the total amount to be repaid.
Example: $50,000 advance with 1.3 factor rate = $65,000 total repayment

3. REPAYMENT STRUCTURES
- Daily percentage of credit card sales
- Fixed daily/weekly ACH withdrawals
- Split payments (percentage of daily deposits)

4. COMPLIANCE REQUIREMENTS
- Truth in Lending Act (TILA) considerations
- State regulations and licensing
- Disclosure requirements
- Collection practices

5. MARKET OPPORTUNITIES
- $100+ billion annual market
- Growing demand for alternative financing
- High commission potential for brokers`
    },
    {
      id: 2,
      title: "Sales Techniques & Client Acquisition",
      duration: "60 minutes",
      level: "Intermediate",
      description: "Proven strategies for finding and converting prospects into funded deals",
      topics: [
        "Identifying qualified prospects",
        "Cold calling and warm outreach",
        "Handling objections effectively",
        "Building trust and credibility",
        "Closing techniques that work"
      ],
      downloadContent: `SALES TECHNIQUES & CLIENT ACQUISITION GUIDE

1. PROSPECTING STRATEGIES
- Target businesses with consistent revenue
- Focus on industries with daily sales volume
- Use public records and business directories
- Leverage referral networks

2. QUALIFYING PROSPECTS
Ask key questions:
- Monthly revenue amount
- Time in business
- Current financing needs
- Credit card processing volume

3. OBJECTION HANDLING
Common objections and responses:
"It's too expensive" → Focus on ROI and growth potential
"We don't need funding" → Explore expansion opportunities
"We're working with another company" → Highlight your competitive advantages

4. BUILDING CREDIBILITY
- Share success stories and case studies
- Provide transparent terms upfront
- Offer references from satisfied clients
- Demonstrate industry expertise

5. CLOSING TECHNIQUES
- Assumptive close: "When would you like to start the application?"
- Alternative close: "Would morning or afternoon work better for funding?"
- Urgency close: "This rate is available for a limited time"`
    },
    {
      id: 3,
      title: "Underwriting & Risk Assessment",
      duration: "50 minutes",
      level: "Advanced",
      description: "Learn to evaluate deals like a funder and improve approval rates",
      topics: [
        "Financial statement analysis",
        "Bank statement review techniques",
        "Red flags and warning signs",
        "Industry-specific considerations",
        "Structuring deals for approval"
      ],
      downloadContent: `UNDERWRITING & RISK ASSESSMENT GUIDE

1. FINANCIAL STATEMENT ANALYSIS
Key metrics to evaluate:
- Monthly average deposits
- Deposit consistency and trends
- NSF fees and overdrafts
- Seasonal variations

2. BANK STATEMENT RED FLAGS
- Declining deposits
- Excessive NSF fees
- Large cash withdrawals
- Irregular deposit patterns
- Other financing payments

3. INDUSTRY CONSIDERATIONS
High-risk industries:
- Restaurants (seasonal, high failure rate)
- Retail (inventory dependent)
- Construction (project-based)

Lower-risk industries:
- Professional services
- Healthcare
- Auto repair

4. DEAL STRUCTURING
- Match advance amount to cash flow
- Consider seasonal businesses
- Structure repayment terms appropriately
- Factor in existing debt obligations

5. IMPROVING APPROVAL RATES
- Complete documentation packages
- Accurate financial representations
- Clear explanation of fund usage
- Strong business narratives`
    },
    {
      id: 4,
      title: "Documentation & Compliance",
      duration: "40 minutes",
      level: "Intermediate",
      description: "Master the paperwork and legal requirements for MCA transactions",
      topics: [
        "Required documentation checklist",
        "Compliance best practices",
        "Legal considerations",
        "Documentation quality standards",
        "Common submission errors"
      ],
      downloadContent: `DOCUMENTATION & COMPLIANCE GUIDE

1. REQUIRED DOCUMENTATION CHECKLIST
Essential documents:
□ 3-6 months business bank statements
□ Voided business check
□ Government-issued ID
□ Business license
□ Processing statements (if applicable)

Additional documents:
□ Tax returns
□ Profit & loss statements
□ Articles of incorporation
□ Lease agreements

2. COMPLIANCE BEST PRACTICES
- Maintain accurate records
- Follow disclosure requirements
- Respect collection limitations
- Ensure proper licensing
- Document all communications

3. LEGAL CONSIDERATIONS
- UCC filings and personal guarantees
- State-specific regulations
- Consumer vs. commercial distinctions
- Default and collection procedures

4. QUALITY STANDARDS
- Clear, legible documents
- Complete date ranges
- Consistent information across documents
- Proper signatures and dates

5. COMMON SUBMISSION ERRORS
- Incomplete bank statements
- Missing signatures
- Inconsistent business information
- Poor document quality
- Missing required disclosures`
    }
  ];

  const resourceLibrary = [
    {
      title: "ISO Compliance Handbook",
      description: "Complete guide to legal requirements and best practices",
      type: "PDF Guide",
      filename: "iso-compliance-handbook.pdf",
      content: "ISO COMPLIANCE HANDBOOK\n\nComplete legal requirements and compliance guidelines for ISOs operating in the merchant cash advance industry..."
    },
    {
      title: "Deal Package Template",
      description: "Standardized template for organizing client submissions",
      type: "Word Template",
      filename: "deal-package-template.docx",
      content: "DEAL PACKAGE TEMPLATE\n\nBusiness Information:\n- Legal Business Name:\n- DBA (if applicable):\n- Federal Tax ID:\n- Business Address:\n- Years in Business:\n\nFinancial Information:\n- Monthly Average Deposits:\n- Requested Funding Amount:\n- Use of Funds:\n\nRequired Documents Checklist:\n□ Bank statements\n□ Voided check\n□ ID copy\n□ Business license"
    },
    {
      title: "Commission Calculator Spreadsheet",
      description: "Excel tool for calculating potential earnings on deals",
      type: "Excel File",
      filename: "commission-calculator.xlsx",
      content: "COMMISSION CALCULATOR\n\nDeal Amount: [Enter amount]\nFactor Rate: [Enter rate]\nCommission Rate: [Enter %]\n\nCalculated Results:\nTotal Repayment: =A1*B1\nGross Profit: =A4-A1\nYour Commission: =A5*C1"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/brokers">
              <Button variant="outline" className="mb-6">
                ← Back to Brokers
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              ISO Training Materials
            </h1>
            <p className="text-xl text-brand-gray">
              Comprehensive training resources to help you succeed in the MCA industry.
            </p>
          </div>
        </div>
      </section>

      {/* Training Modules */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark mb-8">Training Modules</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {trainingModules.map((module) => (
                <Card key={module.id} className={`border-2 transition-all cursor-pointer ${
                  selectedModule === module.id ? 'border-brand-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'
                }`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg text-brand-dark mb-2">{module.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-brand-gray">
                          <span className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{module.duration}</span>
                          </span>
                          <span className={`px-2 py-1 rounded text-xs ${
                            module.level === 'Beginner' ? 'bg-green-100 text-green-600' :
                            module.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                            'bg-red-100 text-red-600'
                          }`}>
                            {module.level}
                          </span>
                        </div>
                      </div>
                      <Book className="w-6 h-6 text-brand-blue" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-brand-gray mb-4">{module.description}</p>
                    
                    {selectedModule === module.id && (
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-brand-dark mb-2">Topics Covered:</h4>
                          <ul className="space-y-1">
                            {module.topics.map((topic, index) => (
                              <li key={index} className="flex items-center space-x-2 text-sm text-brand-gray">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                <span>{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Button 
                            size="sm"
                            onClick={() => downloadResource(
                              module.title,
                              module.downloadContent,
                              `${module.title.toLowerCase().replace(/\s+/g, '-')}.txt`
                            )}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download Guide
                          </Button>
                          <Button size="sm" variant="outline">
                            <Video className="w-4 h-4 mr-2" />
                            Watch Video
                          </Button>
                        </div>
                      </div>
                    )}
                    
                    {selectedModule !== module.id && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setSelectedModule(module.id)}
                      >
                        View Details
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resource Library */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark mb-8">Resource Library</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {resourceLibrary.map((resource, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                        <Download className="w-5 h-5 text-brand-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-brand-dark">{resource.title}</h3>
                        <p className="text-xs text-brand-gray">{resource.type}</p>
                      </div>
                    </div>
                    <p className="text-sm text-brand-gray mb-4">{resource.description}</p>
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => downloadResource(resource.title, resource.content, resource.filename)}
                      disabled={downloadedResources.includes(resource.title)}
                    >
                      {downloadedResources.includes(resource.title) ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Downloaded
                        </>
                      ) : (
                        <>
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Consultation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-brand-dark mb-4">Schedule Expert Consultation</h2>
              <p className="text-xl text-brand-gray">
                Get personalized guidance from our industry experts
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-brand-blue" />
                    <span>What You'll Get</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">30-minute one-on-one consultation</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Personalized business strategy</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Industry best practices</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Q&A with experienced professionals</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-brand-gray">Follow-up resources and action plan</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-brand-teal" />
                    <span>Request a Call</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmitExpertCall)} className="space-y-4">
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
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Experience Level</FormLabel>
                            <FormControl>
                              <select {...field} className="w-full p-2 border border-gray-300 rounded-md">
                                <option value="new">New to MCA Industry</option>
                                <option value="1-2years">1-2 Years Experience</option>
                                <option value="3-5years">3-5 Years Experience</option>
                                <option value="5+years">5+ Years Experience</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="preferredTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Preferred Call Time</FormLabel>
                            <FormControl>
                              <select {...field} className="w-full p-2 border border-gray-300 rounded-md">
                                <option value="">Select a time</option>
                                <option value="morning">Morning (9 AM - 12 PM EST)</option>
                                <option value="afternoon">Afternoon (12 PM - 5 PM EST)</option>
                                <option value="evening">Evening (5 PM - 8 PM EST)</option>
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="topics"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>What would you like to discuss?</FormLabel>
                            <FormControl>
                              <textarea 
                                {...field} 
                                className="w-full p-2 border border-gray-300 rounded-md h-20"
                                placeholder="Describe specific topics, challenges, or goals you'd like to cover..."
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button type="submit" className="w-full">
                        <Phone className="w-4 h-4 mr-2" />
                        Request Expert Call
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}