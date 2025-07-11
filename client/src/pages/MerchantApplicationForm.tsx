import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  businessName: string;
  industry: string;
  monthlyRevenue: string;
  timeInBusiness: string;
  requestedAmount: string;
  creditScore: string;
  businessDescription: string;
  contactName: string;
  email: string;
  phone: string;
}

export default function MerchantApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    businessName: '',
    industry: '',
    monthlyRevenue: '',
    timeInBusiness: '',
    requestedAmount: '',
    creditScore: '',
    businessDescription: '',
    contactName: '',
    email: '',
    phone: ''
  });

  // Parse URL parameters and autofill form
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramData: Partial<FormData> = {};
    
    if (urlParams.get('businessName')) paramData.businessName = urlParams.get('businessName')!;
    if (urlParams.get('industry')) paramData.industry = urlParams.get('industry')!;
    if (urlParams.get('monthlyRevenue')) paramData.monthlyRevenue = parseInt(urlParams.get('monthlyRevenue')!).toLocaleString();
    if (urlParams.get('timeInBusiness')) paramData.timeInBusiness = urlParams.get('timeInBusiness')!;
    if (urlParams.get('creditScore')) paramData.creditScore = urlParams.get('creditScore')!;
    
    // Auto-suggest requested amount based on monthly revenue
    if (urlParams.get('monthlyRevenue')) {
      const revenue = parseInt(urlParams.get('monthlyRevenue')!);
      // Suggest 3-6 months of revenue as funding amount
      const suggestedAmount = Math.round(revenue * 4);
      paramData.requestedAmount = suggestedAmount.toLocaleString();
    }
    
    if (Object.keys(paramData).length > 0) {
      setFormData(prev => ({ ...prev, ...paramData }));
      setAutoFilledFromScore(true);
      
      // Set passed InvestoScore if available
      if (urlParams.get('investoScore')) {
        setPassedInvestoScore(parseInt(urlParams.get('investoScore')!));
      }
      
      // Update progress after autofill with updated form data
      setTimeout(() => {
        // Manually calculate progress with the new data
        const requiredFields = ['businessName', 'industry', 'monthlyRevenue', 'timeInBusiness', 'requestedAmount', 'contactName', 'email', 'phone'];
        const updatedFormData = { ...formData, ...paramData };
        const filledFields = requiredFields.filter(field => updatedFormData[field as keyof FormData]?.toString().trim() !== '');
        const newProgress = Math.round((filledFields.length / requiredFields.length) * 100);
        setProgress(newProgress);
      }, 200);
      
      // Show success toast
      toast({
        title: "Form Auto-filled!",
        description: "Your information from the InvestoScore assessment has been imported.",
      });
    }
  }, []);
  
  const [files, setFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [autoFilledFromScore, setAutoFilledFromScore] = useState(false);
  const [passedInvestoScore, setPassedInvestoScore] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    updateProgress();
  };

  const updateProgress = () => {
    const requiredFields = ['businessName', 'industry', 'monthlyRevenue', 'timeInBusiness', 'requestedAmount', 'contactName', 'email', 'phone'];
    const filledFields = requiredFields.filter(field => {
      const value = formData[field as keyof FormData];
      return value && value.toString().trim() !== '';
    });
    const newProgress = Math.round((filledFields.length / requiredFields.length) * 100);
    setProgress(newProgress);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
    toast({
      title: "Files uploaded",
      description: `${selectedFiles.length} file(s) added successfully`,
    });
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setProgress(100);
    setSubmitted(true);
    setIsSubmitting(false);
    
    toast({
      title: "Application submitted!",
      description: "We'll respond within 24 hours with your pre-approval decision.",
    });
  };

  const getInvestoScore = () => {
    let score = 650; // Base score
    
    if (formData.monthlyRevenue) {
      const revenue = parseInt(formData.monthlyRevenue.replace(/[^0-9]/g, ''));
      if (revenue >= 50000) score += 50;
      else if (revenue >= 25000) score += 30;
      else if (revenue >= 10000) score += 15;
    }
    
    if (formData.timeInBusiness) {
      const months = parseInt(formData.timeInBusiness);
      if (months >= 24) score += 40;
      else if (months >= 12) score += 20;
    }
    
    if (formData.creditScore) {
      const credit = parseInt(formData.creditScore);
      if (credit >= 700) score += 40;
      else if (credit >= 650) score += 20;
      else if (credit >= 600) score += 10;
    }
    
    if (files.length >= 2) score += 30;
    
    return Math.min(score, 850);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-white shadow-sm">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-brand-dark mb-4">Application Submitted!</h2>
              <p className="text-brand-gray mb-6">
                Thank you for your application. We've received your information and will respond within 24 hours 
                with your pre-approval decision.
              </p>
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-green-800 mb-2">Estimated InvestoScore™</h3>
                <p className="text-2xl font-bold text-green-600">{getInvestoScore()}/850</p>
              </div>
              <Button 
                onClick={() => window.location.href = '/merchants'} 
                className="bg-brand-teal hover:bg-brand-teal/90"
              >
                Return to Merchants Page
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-brand-dark mb-2">5-Minute Business Funding Application</h1>
          <p className="text-brand-gray">Get pre-approved for $2,000-$2,000,000 in merchant cash advances</p>
          <Badge variant="secondary" className="mt-2 bg-brand-teal text-white">
            Advanced Platform
          </Badge>
        </div>

        {/* Auto-fill Notification */}
        {autoFilledFromScore && (
          <Card className="mb-6 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-800">Form Auto-filled from InvestoScore™</h3>
                    <p className="text-sm text-green-700">Your assessment data has been imported. Review and complete remaining fields.</p>
                  </div>
                </div>
                {passedInvestoScore && (
                  <div className="text-right">
                    <div className="text-sm text-green-600">Your InvestoScore™</div>
                    <div className="text-2xl font-bold text-green-800">{passedInvestoScore}/850</div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Progress Bar */}
        <Card className="mb-8 bg-white shadow-sm">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-brand-gray">Application Progress</span>
              <span className="text-sm font-medium text-brand-dark">{progress}%</span>
            </div>
            <Progress value={progress} className="h-3" />
            <p className="text-xs text-brand-gray mt-2">
              {autoFilledFromScore && progress > 0 ? 
                `${progress < 100 ? "Complete remaining contact information to submit" : "Ready to submit!"}` :
                `${progress < 100 ? "Complete all required fields to submit" : "Ready to submit!"}`
              }
            </p>
          </CardContent>
        </Card>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Business Information */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-brand-dark">Business Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="businessName">Business Name *</Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    placeholder="Enter your business name"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="industry">Industry *</Label>
                  <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="retail">Retail</SelectItem>
                      <SelectItem value="restaurant">Restaurant</SelectItem>
                      <SelectItem value="healthcare">Healthcare</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="construction">Construction</SelectItem>
                      <SelectItem value="professional-services">Professional Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="monthlyRevenue">Monthly Revenue *</Label>
                  <Input
                    id="monthlyRevenue"
                    value={formData.monthlyRevenue}
                    onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                    placeholder="$10,000"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="timeInBusiness">Time in Business (months) *</Label>
                  <Input
                    id="timeInBusiness"
                    type="number"
                    value={formData.timeInBusiness}
                    onChange={(e) => handleInputChange('timeInBusiness', e.target.value)}
                    placeholder="24"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="requestedAmount">Requested Funding Amount *</Label>
                  <Input
                    id="requestedAmount"
                    value={formData.requestedAmount}
                    onChange={(e) => handleInputChange('requestedAmount', e.target.value)}
                    placeholder="$50,000"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="creditScore">Credit Score (Optional)</Label>
                  <Input
                    id="creditScore"
                    type="number"
                    value={formData.creditScore}
                    onChange={(e) => handleInputChange('creditScore', e.target.value)}
                    placeholder="650"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="businessDescription">Business Description</Label>
                <Textarea
                  id="businessDescription"
                  value={formData.businessDescription}
                  onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                  placeholder="Briefly describe your business and how you'll use the funding"
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-brand-dark">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contactName">Full Name *</Label>
                  <Input
                    id="contactName"
                    value={formData.contactName}
                    onChange={(e) => handleInputChange('contactName', e.target.value)}
                    placeholder="John Smith"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@business.com"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
            </CardContent>
          </Card>

          {/* Document Upload */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-brand-dark">Required Documents</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <div className="text-center">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-brand-gray mb-2">Upload bank statements (last 3 months)</p>
                  <p className="text-sm text-brand-gray mb-4">PDF, JPG, or PNG files accepted</p>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="mb-2"
                  >
                    Choose Files
                  </Button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </div>
              </div>

              {files.length > 0 && (
                <div className="space-y-2">
                  <h4 className="font-medium text-brand-dark">Uploaded Files:</h4>
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-brand-teal" />
                        <span className="text-sm text-brand-dark">{file.name}</span>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Submit Button */}
          <Card className="bg-white shadow-sm">
            <CardContent className="p-6">
              <div className="flex flex-col items-center space-y-4">
                <Button
                  type="submit"
                  disabled={progress < 100 || isSubmitting}
                  className="w-full md:w-auto bg-brand-teal hover:bg-brand-teal/90 text-white px-8 py-3 text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Clock className="w-5 h-5 mr-2 animate-spin" />
                      Submitting Application...
                    </>
                  ) : (
                    'Submit Application'
                  )}
                </Button>
                <p className="text-sm text-brand-gray text-center">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}