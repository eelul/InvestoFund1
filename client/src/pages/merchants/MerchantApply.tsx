import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  DollarSign, 
  Calendar, 
  Building, 
  FileText, 
  CheckCircle,
  ArrowRight,
  Clock,
  Shield
} from "lucide-react";

export default function MerchantApply() {
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    monthlyRevenue: "",
    requestedAmount: "",
    timeInBusiness: "",
    useOfFunds: "",
    businessDescription: "",
    contactInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      businessPhone: ""
    },
    agreements: {
      terms: false,
      privacy: false,
      factorRate: false
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updateContactInfo = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      contactInfo: {
        ...prev.contactInfo,
        [field]: value
      }
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
            Apply for Business Funding
          </h1>
          <p className="text-xl text-brand-gray mb-8">
            Get the capital you need to grow your business. Fast approval in 24-48 hours.
          </p>
          
          {/* Benefits Bar */}
          <div className="bg-white rounded-full shadow-lg p-4 max-w-4xl mx-auto mb-8">
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-brand-blue mr-2" />
                <span className="text-brand-gray">Fast Approval: <strong className="text-brand-dark">24-48 hours</strong></span>
              </div>
              <div className="flex items-center">
                <DollarSign className="w-4 h-4 text-brand-teal mr-2" />
                <span className="text-brand-gray">Funding: <strong className="text-brand-dark">$10K - $500K</strong></span>
              </div>
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-brand-gray">Factor Rate: <strong className="text-brand-dark">1.25x - 1.49x</strong></span>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Business Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-brand-blue" />
                Business Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="businessName">Legal Business Name *</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => updateFormData('businessName', e.target.value)}
                    placeholder="Enter your legal business name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="industry">Industry *</Label>
                  <Select onValueChange={(value) => updateFormData('industry', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">Retail & E-commerce</SelectItem>
                      <SelectItem value="restaurant">Restaurant & Food Service</SelectItem>
                      <SelectItem value="healthcare">Healthcare & Medical</SelectItem>
                      <SelectItem value="construction">Construction & Contracting</SelectItem>
                      <SelectItem value="professional">Professional Services</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="technology">Technology & Software</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="monthlyRevenue">Monthly Revenue *</Label>
                  <Select onValueChange={(value) => updateFormData('monthlyRevenue', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select monthly revenue range" />
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
                      <SelectValue placeholder="How long have you been in business?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6-12months">6-12 months</SelectItem>
                      <SelectItem value="1-2years">1-2 years</SelectItem>
                      <SelectItem value="2-5years">2-5 years</SelectItem>
                      <SelectItem value="5+years">5+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="businessDescription">Business Description</Label>
                <Textarea
                  id="businessDescription"
                  value={formData.businessDescription}
                  onChange={(e) => updateFormData('businessDescription', e.target.value)}
                  placeholder="Briefly describe your business and what you do"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Funding Requirements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-brand-blue" />
                Funding Requirements
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="requestedAmount">Requested Funding Amount *</Label>
                  <Select onValueChange={(value) => updateFormData('requestedAmount', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select funding amount" />
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
                <div>
                  <Label htmlFor="useOfFunds">Primary Use of Funds</Label>
                  <Select onValueChange={(value) => updateFormData('useOfFunds', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="How will you use the funds?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inventory">Inventory Purchase</SelectItem>
                      <SelectItem value="equipment">Equipment & Machinery</SelectItem>
                      <SelectItem value="marketing">Marketing & Advertising</SelectItem>
                      <SelectItem value="expansion">Business Expansion</SelectItem>
                      <SelectItem value="working-capital">Working Capital</SelectItem>
                      <SelectItem value="renovations">Renovations & Improvements</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-brand-blue" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.contactInfo.firstName}
                    onChange={(e) => updateContactInfo('firstName', e.target.value)}
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.contactInfo.lastName}
                    onChange={(e) => updateContactInfo('lastName', e.target.value)}
                    placeholder="Your last name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.contactInfo.email}
                    onChange={(e) => updateContactInfo('email', e.target.value)}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Personal Phone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.contactInfo.phone}
                    onChange={(e) => updateContactInfo('phone', e.target.value)}
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="businessPhone">Business Phone</Label>
                  <Input
                    id="businessPhone"
                    type="tel"
                    value={formData.contactInfo.businessPhone}
                    onChange={(e) => updateContactInfo('businessPhone', e.target.value)}
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Terms and Agreements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-blue" />
                Terms & Agreements
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
                  I agree to the <a href="/legal" className="text-brand-blue hover:underline">Terms of Service</a> and 
                  <a href="/privacy-policy" className="text-brand-blue hover:underline ml-1">Privacy Policy</a>
                </Label>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="factorRate"
                  checked={formData.agreements.factorRate}
                  onCheckedChange={(checked) => updateAgreements('factorRate', !!checked)}
                />
                <Label htmlFor="factorRate" className="text-sm leading-6">
                  I understand that factor rates range from 1.25x to 1.49x and that the actual rate will be determined based on my business qualifications and risk assessment.
                </Label>
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacy"
                  checked={formData.agreements.privacy}
                  onCheckedChange={(checked) => updateAgreements('privacy', !!checked)}
                />
                <Label htmlFor="privacy" className="text-sm leading-6">
                  I consent to InvestoFund contacting me about my application and business funding opportunities.
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
              disabled={!formData.agreements.terms || !formData.agreements.factorRate || !formData.agreements.privacy}
            >
              Submit Application
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