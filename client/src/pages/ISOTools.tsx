import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calculator, Users, CheckSquare, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";

export default function ISOTools() {
  const tools = [
    {
      title: "Deal Submission Forms",
      description: "Standardized application forms for merchant submissions",
      category: "Forms",
      icon: <FileText className="w-6 h-6" />,
      items: [
        "MCA Application Form",
        "Business Financial Statement Template",
        "Bank Statement Analysis Sheet",
        "Merchant Information Checklist"
      ]
    },
    {
      title: "Commission Calculators",
      description: "Calculate earnings and deal profitability",
      category: "Calculators",
      icon: <Calculator className="w-6 h-6" />,
      items: [
        "Commission Calculator",
        "Deal Profitability Analyzer",
        "ROI Estimator",
        "Payment Schedule Generator"
      ]
    },
    {
      title: "Marketing Materials",
      description: "Professional marketing assets for client outreach",
      category: "Marketing",
      icon: <Users className="w-6 h-6" />,
      items: [
        "Business Funding Brochures",
        "Email Templates",
        "Social Media Graphics",
        "Client Presentation Decks"
      ]
    },
    {
      title: "Quality Checklists",
      description: "Ensure deal quality and compliance",
      category: "Compliance",
      icon: <CheckSquare className="w-6 h-6" />,
      items: [
        "Pre-Submission Checklist",
        "Document Verification Guide",
        "Risk Assessment Framework",
        "Compliance Verification"
      ]
    },
    {
      title: "Performance Analytics",
      description: "Track and analyze your deal performance",
      category: "Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      items: [
        "Deal Tracking Spreadsheet",
        "Performance Dashboard Template",
        "Monthly Report Generator",
        "Commission Tracking Tools"
      ]
    }
  ];

  const handleDownload = (toolName: string) => {
    // In a real app, this would trigger actual file downloads
    console.log(`Downloading: ${toolName}`);
    alert(`Downloading ${toolName}... (Demo)`);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              ISO Tools & Resources
            </h1>
            <p className="text-xl text-brand-gray max-w-3xl mx-auto">
              Essential tools and resources to streamline your deal submissions and maximize your success as an ISO partner
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {tools.map((tool, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-brand-blue/10 rounded-lg text-brand-blue">
                      {tool.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{tool.title}</CardTitle>
                      <p className="text-sm text-brand-gray">{tool.category}</p>
                    </div>
                  </div>
                  <p className="text-brand-gray">{tool.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tool.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-brand-dark">{item}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDownload(item)}
                          className="ml-2"
                        >
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Support Section */}
          <Card className="bg-brand-blue text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need Additional Support?</h2>
              <p className="text-blue-100 mb-6">
                Our ISO support team is here to help you succeed with additional tools, training, and resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="bg-white text-brand-blue hover:bg-gray-100">
                  Contact ISO Support
                </Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Request Custom Tools
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}