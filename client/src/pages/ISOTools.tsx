import { useState } from "react";
import { Download, Copy, ExternalLink, Palette, FileText, Calculator, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

export default function ISOTools() {
  const [copiedText, setCopiedText] = useState<string>("");
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    toast({
      title: "Copied to clipboard",
      description: `${label} copied successfully`,
    });
    setTimeout(() => setCopiedText(""), 2000);
  };

  const downloadFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download started",
      description: `${filename} is downloading`,
    });
  };

  const marketingTemplates = {
    emailTemplate: `Subject: Fast Business Funding - Get Approved in 24 Hours

Dear [Business Owner Name],

Is your business ready to take the next step but held back by cash flow?

Green Harvest Funding specializes in providing fast, flexible working capital for businesses like yours. Here's what sets us apart:

✓ Funding from $5,000 to $1,000,000
✓ Approval decisions within 24 hours
✓ No collateral required
✓ Flexible repayment terms
✓ Industry expertise you can trust

Our simple application process means you could have funds in your account within days, not weeks or months.

Ready to grow your business? Let's talk.

Best regards,
[Your Name]
[Your Company]
[Contact Information]

Apply now: [Your Referral Link]`,

    socialMediaPost: `🚀 Need working capital to grow your business?

Green Harvest Funding offers:
💰 $5K - $1M funding amounts
⚡ 24-hour approval decisions
📋 Simple application process
🤝 No collateral required

Don't let cash flow hold back your business growth!

#BusinessFunding #WorkingCapital #SmallBusiness #MerchantCashAdvance`,

    websiteContent: `## Fast Business Funding Solutions

**Get the working capital your business needs to thrive**

At Green Harvest Funding, we understand that timing is everything in business. That's why we've streamlined our funding process to get you approved and funded faster than traditional lenders.

### Why Choose Green Harvest Funding?

- **Quick Decisions**: Get approved in as little as 24 hours
- **Flexible Terms**: Repayment options that work with your cash flow
- **No Collateral**: Funding based on your business performance
- **Experienced Team**: Industry experts who understand your needs

### Funding Solutions Available:
- Merchant Cash Advances
- Business Lines of Credit
- Revenue-Based Financing
- Equipment Financing

**Ready to get started?** Contact us today for a free consultation and discover how we can help your business reach its potential.`,
  };

  const calculatorTools = [
    {
      title: "Commission Calculator",
      description: "Calculate your potential earnings on deal submissions",
      component: <CommissionCalculator />
    },
    {
      title: "Deal Qualifier",
      description: "Quick tool to assess if a prospect meets our criteria",
      component: <DealQualifier />
    },
    {
      title: "ROI Projector",
      description: "Show clients potential returns on their funding",
      component: <ROIProjector />
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
              White-Label Tools & Resources
            </h1>
            <p className="text-xl text-brand-gray">
              Professional marketing materials and tools to help you grow your business and close more deals.
            </p>
          </div>
        </div>
      </section>

      {/* Marketing Templates */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark mb-8">Marketing Templates</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-brand-blue" />
                    <span>Email Template</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-brand-gray mb-4">
                    Professional email template for reaching out to potential clients
                  </p>
                  <div className="space-y-2">
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => copyToClipboard(marketingTemplates.emailTemplate, "Email Template")}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      {copiedText === "Email Template" ? "Copied!" : "Copy Template"}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => downloadFile(marketingTemplates.emailTemplate, "email-template.txt")}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Palette className="w-5 h-5 text-brand-teal" />
                    <span>Social Media Post</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-brand-gray mb-4">
                    Ready-to-use social media content for LinkedIn, Facebook, Twitter
                  </p>
                  <div className="space-y-2">
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => copyToClipboard(marketingTemplates.socialMediaPost, "Social Media Post")}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      {copiedText === "Social Media Post" ? "Copied!" : "Copy Post"}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => downloadFile(marketingTemplates.socialMediaPost, "social-media-post.txt")}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <ExternalLink className="w-5 h-5 text-green-500" />
                    <span>Website Content</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-brand-gray mb-4">
                    Website copy you can use on your landing pages and marketing sites
                  </p>
                  <div className="space-y-2">
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => copyToClipboard(marketingTemplates.websiteContent, "Website Content")}
                    >
                      <Copy className="w-4 h-4 mr-2" />
                      {copiedText === "Website Content" ? "Copied!" : "Copy Content"}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="w-full"
                      onClick={() => downloadFile(marketingTemplates.websiteContent, "website-content.md")}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tools */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark mb-8">Interactive Tools</h2>
            
            <div className="space-y-8">
              {calculatorTools.map((tool, index) => (
                <Card key={index} className="border-2">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Calculator className="w-5 h-5 text-brand-blue" />
                      <span>{tool.title}</span>
                    </CardTitle>
                    <p className="text-brand-gray">{tool.description}</p>
                  </CardHeader>
                  <CardContent>
                    {tool.component}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Branding Guidelines */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark mb-8">Branding Guidelines</h2>
            
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-dark mb-4">Brand Colors</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-600 rounded"></div>
                        <span className="text-sm">Primary Blue: #2563EB</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-teal-600 rounded"></div>
                        <span className="text-sm">Accent Teal: #0D9488</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-800 rounded"></div>
                        <span className="text-sm">Dark Gray: #1F2937</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-brand-dark mb-4">Typography</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-brand-gray">Headers: Inter, Bold</p>
                      <p className="text-sm text-brand-gray">Body: Inter, Regular</p>
                      <p className="text-sm text-brand-gray">Accent: Inter, Medium</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

// Commission Calculator Component
function CommissionCalculator() {
  const [dealAmount, setDealAmount] = useState<number>(50000);
  const [factorRate, setFactorRate] = useState<number>(1.3);
  const [commissionRate, setCommissionRate] = useState<number>(15);

  const calculateCommission = () => {
    const repayment = dealAmount * factorRate;
    const grossProfit = repayment - dealAmount;
    const commission = grossProfit * (commissionRate / 100);
    
    return {
      repayment,
      grossProfit,
      commission
    };
  };

  const results = calculateCommission();

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Deal Amount ($)
            </label>
            <Input
              type="number"
              value={dealAmount}
              onChange={(e) => setDealAmount(Number(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Factor Rate
            </label>
            <Input
              type="number"
              step="0.01"
              value={factorRate}
              onChange={(e) => setFactorRate(Number(e.target.value))}
              className="w-full"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Commission Rate (%)
            </label>
            <Input
              type="number"
              value={commissionRate}
              onChange={(e) => setCommissionRate(Number(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-brand-gray">Total Repayment</div>
            <div className="text-2xl font-bold text-brand-dark">
              ${results.repayment.toLocaleString()}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-brand-gray">Gross Profit</div>
            <div className="text-2xl font-bold text-brand-blue">
              ${results.grossProfit.toLocaleString()}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <div className="text-sm text-brand-gray">Your Commission</div>
            <div className="text-2xl font-bold text-green-600">
              ${results.commission.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Deal Qualifier Component
function DealQualifier() {
  const [answers, setAnswers] = useState({
    timeInBusiness: "",
    monthlyRevenue: "",
    creditScore: "",
    bankBalance: ""
  });

  const getQualificationStatus = () => {
    const timeInBusinessMonths = parseInt(answers.timeInBusiness) || 0;
    const monthlyRev = parseInt(answers.monthlyRevenue) || 0;
    const credit = parseInt(answers.creditScore) || 0;
    const balance = parseInt(answers.bankBalance) || 0;

    let score = 0;
    if (timeInBusinessMonths >= 6) score += 25;
    if (monthlyRev >= 10000) score += 25;
    if (credit >= 500) score += 25;
    if (balance >= 5000) score += 25;

    if (score >= 75) return { status: "Excellent", color: "text-green-600", message: "Very likely to be approved" };
    if (score >= 50) return { status: "Good", color: "text-blue-600", message: "Good chance of approval" };
    if (score >= 25) return { status: "Fair", color: "text-yellow-600", message: "May need additional documentation" };
    return { status: "Poor", color: "text-red-600", message: "Consider alternative options" };
  };

  const qualification = getQualificationStatus();

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Time in Business (months)
            </label>
            <Input
              type="number"
              value={answers.timeInBusiness}
              onChange={(e) => setAnswers({...answers, timeInBusiness: e.target.value})}
              placeholder="e.g., 12"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Monthly Revenue ($)
            </label>
            <Input
              type="number"
              value={answers.monthlyRevenue}
              onChange={(e) => setAnswers({...answers, monthlyRevenue: e.target.value})}
              placeholder="e.g., 25000"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Credit Score
            </label>
            <Input
              type="number"
              value={answers.creditScore}
              onChange={(e) => setAnswers({...answers, creditScore: e.target.value})}
              placeholder="e.g., 650"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Average Bank Balance ($)
            </label>
            <Input
              type="number"
              value={answers.bankBalance}
              onChange={(e) => setAnswers({...answers, bankBalance: e.target.value})}
              placeholder="e.g., 15000"
            />
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="text-center">
            <div className={`text-4xl font-bold ${qualification.color} mb-2`}>
              {qualification.status}
            </div>
            <div className="text-brand-gray mb-4">
              {qualification.message}
            </div>
            <div className="bg-white rounded-lg p-4">
              <div className="text-sm text-brand-gray mb-2">Qualification Score</div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-brand-blue to-brand-teal h-3 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, (Object.values(answers).filter(a => a !== "").length / 4) * 100)}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ROI Projector Component
function ROIProjector() {
  const [fundingAmount, setFundingAmount] = useState<number>(100000);
  const [factorRate, setFactorRate] = useState<number>(1.25);
  const [termWeeks, setTermWeeks] = useState<number>(12);

  const calculateProjection = () => {
    const totalRepayment = fundingAmount * factorRate;
    const totalCost = totalRepayment - fundingAmount;
    const weeklyPayment = totalRepayment / termWeeks;
    const costOfCapital = (totalCost / fundingAmount) * 100;
    const annualizedRate = (costOfCapital * 52) / termWeeks;

    return {
      totalRepayment,
      totalCost,
      weeklyPayment,
      costOfCapital,
      annualizedRate
    };
  };

  const projection = calculateProjection();

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Funding Amount ($)
            </label>
            <Input
              type="number"
              value={fundingAmount}
              onChange={(e) => setFundingAmount(Number(e.target.value))}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Factor Rate
            </label>
            <Input
              type="number"
              step="0.01"
              value={factorRate}
              onChange={(e) => setFactorRate(Number(e.target.value))}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-brand-dark mb-2">
              Term (weeks)
            </label>
            <Input
              type="number"
              value={termWeeks}
              onChange={(e) => setTermWeeks(Number(e.target.value))}
            />
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="bg-white rounded-lg p-3">
            <div className="text-xs text-brand-gray">Total Repayment</div>
            <div className="text-lg font-bold text-brand-dark">
              ${projection.totalRepayment.toLocaleString()}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-3">
            <div className="text-xs text-brand-gray">Weekly Payment</div>
            <div className="text-lg font-bold text-brand-blue">
              ${projection.weeklyPayment.toLocaleString()}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-3">
            <div className="text-xs text-brand-gray">Total Cost</div>
            <div className="text-lg font-bold text-yellow-600">
              ${projection.totalCost.toLocaleString()}
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-3">
            <div className="text-xs text-brand-gray">Cost of Capital</div>
            <div className="text-lg font-bold text-green-600">
              {projection.costOfCapital.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}