import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  FileText, 
  Building, 
  DollarSign, 
  User,
  CheckCircle,
  ArrowRight,
  Upload,
  Percent
} from "lucide-react";

export default function BrokerSubmitDeal() {
  const [formData, setFormData] = useState({
    // Merchant Information
    merchantName: "",
    industry: "",
    monthlyRevenue: "",
    timeInBusiness: "",
    requestedAmount: "",
    
    // Contact Information
    contactName: "",
    contactPhone: "",
    contactEmail: "",
    
    // Deal Structure
    suggestedFactorRate: "",
    suggestedTerm: "",
    
    // Broker Information
    brokerName: "",
    brokerCompany: "",
    brokerEmail: "",
    brokerPhone: "",
    
    // Additional Details
    dealNotes: "",
    merchantDescription: "",
    
    // Documents
    documentsUploaded: false,
    
    // Agreements
    agreements: {
      terms: false,
      accuracy: false,
      commission: false
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Deal submitted:", formData);
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateAgreements = (field: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      agreements: {
        ...prev.agreements,
        [field]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">
            Submit a Deal
          </h1>
          <p className="text-xl text-brand-gray mb-8">
            Partner with InvestoFund to provide funding solutions for your merchants
          </p>
          
          {/* Commission Info */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue">15%</div>
                <div className="text-sm text-brand-gray">Commission Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue">24-48 hrs</div>
                <div className="text-sm text-brand-gray">Decision Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-blue">94%</div>
                <div className="text-sm text-brand-gray">Approval Rate</div>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Merchant Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-brand-blue" />
                Merchant Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="merchantName">Merchant Business Name *</Label>
                  <Input
                    id="merchantName"
                    value={formData.merchantName}
                    onChange={(e) => updateFormData('merchantName', e.target.value)}
                    placeholder="Legal business name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="industry">Industry *</Label>
                  <Select onValueChange={(value) => updateFormData('industry', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">Retail & E-commerce</SelectItem>
                      <SelectItem value="restaurant">Restaurant & Food Service</SelectItem>
                      <SelectItem value="healthcare">Healthcare & Medical</SelectItem>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="professional">Professional Services</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="monthlyRevenue">Monthly Revenue *</Label>
                  <Select onValueChange={(value) => updateFormData('monthlyRevenue', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select revenue range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                      <SelectItem value="250k+">$250,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="timeInBusiness">Time in Business *</Label>
                  <Select onValueChange={(value) => updateFormData('timeInBusiness', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6-12months">6-12 months</SelectItem>
                      <SelectItem value="1-2years">1-2 years</SelectItem>
                      <SelectItem value="2-5years">2-5 years</SelectItem>
                      <SelectItem value="5+years">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="requestedAmount">Requested Amount *</Label>
                  <Select onValueChange={(value) => updateFormData('requestedAmount', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select amount" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                      <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                      <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="merchantDescription">Business Description</Label>
                <Textarea
                  id="merchantDescription"
                  value={formData.merchantDescription}
                  onChange={(e) => updateFormData('merchantDescription', e.target.value)}
                  placeholder="Describe the merchant's business model and operations"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Merchant Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-brand-blue" />
                Merchant Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="contactName">Contact Name *</Label>
                  <Input
                    id="contactName"
                    value={formData.contactName}
                    onChange={(e) => updateFormData('contactName', e.target.value)}
                    placeholder="Primary contact"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contactPhone">Phone *</Label>
                  <Input
                    id="contactPhone"
                    type="tel"
                    value={formData.contactPhone}
                    onChange={(e) => updateFormData('contactPhone', e.target.value)}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="contactEmail">Email *</Label>
                  <Input
                    id="contactEmail"
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => updateFormData('contactEmail', e.target.value)}
                    placeholder="contact@business.com"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Deal Structure */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Percent className="w-5 h-5 text-brand-blue" />
                Suggested Deal Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="suggestedFactorRate">Suggested Factor Rate</Label>
                  <Select onValueChange={(value) => updateFormData('suggestedFactorRate', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Suggest a factor rate" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1.25">1.25x</SelectItem>
                      <SelectItem value="1.30">1.30x</SelectItem>
                      <SelectItem value="1.35">1.35x</SelectItem>
                      <SelectItem value="1.40">1.40x</SelectItem>
                      <SelectItem value="1.45">1.45x</SelectItem>
                      <SelectItem value="1.49">1.49x</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="suggestedTerm">Suggested Term</Label>
                  <Select onValueChange={(value) => updateFormData('suggestedTerm', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Suggest term length" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="25-45days">25-45 days</SelectItem>
                      <SelectItem value="2-3months">2-3 months</SelectItem>
                      <SelectItem value="3-6months">3-6 months</SelectItem>
                      <SelectItem value="6-12months">6-12 months</SelectItem>
                      <SelectItem value="12-18months">12-18 months</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="dealNotes">Deal Notes & Qualifications</Label>
                <Textarea
                  id="dealNotes"
                  value={formData.dealNotes}
                  onChange={(e) => updateFormData('dealNotes', e.target.value)}
                  placeholder="Additional notes about the merchant's qualifications, special circumstances, or deal structure recommendations"
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Broker Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-blue" />
                Broker Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="brokerName">Your Name *</Label>
                  <Input
                    id="brokerName"
                    value={formData.brokerName}
                    onChange={(e) => updateFormData('brokerName', e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="brokerCompany">Company/ISO Name</Label>
                  <Input
                    id="brokerCompany"
                    value={formData.brokerCompany}
                    onChange={(e) => updateFormData('brokerCompany', e.target.value)}
                    placeholder="Your brokerage company"
                  />
                </div>
                <div>
                  <Label htmlFor="brokerEmail">Email *</Label>
                  <Input
                    id="brokerEmail"
                    type="email"
                    value={formData.brokerEmail}
                    onChange={(e) => updateFormData('brokerEmail', e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="brokerPhone">Phone *</Label>
                  <Input
                    id="brokerPhone"
                    type="tel"
                    value={formData.brokerPhone}
                    onChange={(e) => updateFormData('brokerPhone', e.target.value)}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Document Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-brand-blue" />
                Required Documents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-brand-gray">
                  Please ensure you have the following documents ready to upload:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Business bank statements (3-6 months)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Processing statements (if applicable)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Business license/registration</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span className="text-sm">Owner's ID verification</span>
                  </li>
                </ul>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-brand-gray mb-2">Drop files here or click to upload</p>
                  <Button variant="outline" type="button">
                    Select Files
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms and Agreements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-blue" />
                Broker Agreement
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="terms"
                  checked={formData.agreements.terms}
                  onCheckedChange={(checked) => updateAgreements('terms', !!checked)}
                />
                <Label htmlFor="terms" className="text-sm leading-6">
                  I agree to the broker <a href="/brokers/requirements" className="text-brand-blue hover:underline">Terms & Conditions</a> and 
                  understand the commission structure (15% of gross profit).
                </Label>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="accuracy"
                  checked={formData.agreements.accuracy}
                  onCheckedChange={(checked) => updateAgreements('accuracy', !!checked)}
                />
                <Label htmlFor="accuracy" className="text-sm leading-6">
                  I certify that all information provided is accurate and complete to the best of my knowledge.
                </Label>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="commission"
                  checked={formData.agreements.commission}
                  onCheckedChange={(checked) => updateAgreements('commission', !!checked)}
                />
                <Label htmlFor="commission" className="text-sm leading-6">
                  I understand that commission payments are made within 30 days of successful funding and merchant acceptance.
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-12 py-4 text-lg"
              disabled={!formData.agreements.terms || !formData.agreements.accuracy || !formData.agreements.commission}
            >
              Submit Deal
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-brand-gray mt-4">
              You'll receive a response within 24-48 hours
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}