import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, DollarSign, TrendingUp, Shield, Users, BarChart3, Clock, Award, Star, Target, Zap, Calculator, FileText, BookOpen, Eye, EyeOff, Mail, Phone, Building, CreditCard } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "wouter";
import { scrollToElement } from "@/lib/scrollUtils";

export default function InvestorSignup() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    investmentAmount: "",
    investmentExperience: "",
    riskTolerance: "",
    investmentGoals: "",
    accreditationStatus: "",
    agreeToTerms: false,
    marketingConsent: false
  });

  const [showBenefits, setShowBenefits] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState("");

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log("Investor application submitted:", formData);
    // Redirect to dashboard after submission
    window.location.href = "/deal-dashboard";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-purple-600/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-48 h-48 bg-purple-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500/25 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-500/30 text-blue-100 border border-blue-400/40 mb-4">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Exclusive Investor Access
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Become an InvestoFund
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-200 via-blue-200 to-white bg-clip-text text-transparent">
              Investing Partner
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed max-w-3xl mx-auto">
            Join our exclusive network of investors earning 20.8%+ returns through direct participation 
            in high-quality Merchant Cash Advance opportunities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">20.8%+</div>
              <div className="text-blue-200 text-sm">Average Returns</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">25-540</div>
              <div className="text-blue-200 text-sm">Day Terms</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-white mb-2">$5K+</div>
              <div className="text-blue-200 text-sm">Minimum Investment</div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            onClick={() => scrollToElement('signup-form')}
          >
            Start Your Application
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Investment Options Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">
            Choose Your Investment Approach
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Direct Deal Participation */}
            <Card className="hover:shadow-xl transition-shadow border-2 border-blue-200">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <CardTitle className="flex items-center text-blue-800">
                  <Target className="w-6 h-6 mr-2" />
                  Direct Deal Participation
                </CardTitle>
                <Badge className="bg-blue-100 text-blue-800 w-fit">
                  Full Control • Higher Returns
                </Badge>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20.8%+ Returns</div>
                  <p className="text-gray-600">Choose specific deals and maintain full control</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Select individual MCA deals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Factor rates from 1.15x to 1.49x</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Terms from 25 days to 18 months</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Direct merchant relationships</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Best For:</h4>
                  <p className="text-sm text-blue-700">
                    Experienced investors who want to evaluate each opportunity 
                    and maintain direct control over their investments.
                  </p>
                </div>
                
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => {
                    setSelectedTrack("direct");
                    scrollToElement('signup-form');
                  }}
                >
                  Choose Direct Participation
                </Button>
              </CardContent>
            </Card>

            {/* InvestoBlend Portfolio */}
            <Card className="hover:shadow-xl transition-shadow border-2 border-purple-200">
              <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
                <CardTitle className="flex items-center text-purple-800">
                  <BarChart3 className="w-6 h-6 mr-2" />
                  InvestoBlend™ Portfolio
                </CardTitle>
                <Badge className="bg-purple-100 text-purple-800 w-fit">
                  Diversified • Managed
                </Badge>
              </CardHeader>
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">18.7% Target</div>
                  <p className="text-gray-600">Professionally managed diversified portfolio</p>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Automatic diversification across deals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Professional deal selection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Reduced individual deal risk</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Hands-off management</span>
                  </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Best For:</h4>
                  <p className="text-sm text-purple-700">
                    Investors seeking steady returns with professional management 
                    and automatic risk diversification.
                  </p>
                </div>
                
                <Button 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  onClick={() => {
                    setSelectedTrack("blend");
                    scrollToElement('signup-form');
                  }}
                >
                  Choose InvestoBlend™
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why InvestoFund Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-dark">
            Why Choose InvestoFund?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Direct Access</h3>
                <p className="text-gray-600">
                  No middlemen. Direct access to high-quality MCA deals 
                  with transparent terms and clear documentation.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proven Returns</h3>
                <p className="text-gray-600">
                  Track record of consistent 20.8%+ returns with our 
                  rigorous underwriting and merchant selection process.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expert Support</h3>
                <p className="text-gray-600">
                  Dedicated investor relations team and comprehensive 
                  dashboard for tracking performance and opportunities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investor Application Form */}
      <section id="signup-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark">
              Complete Your Investor Application
            </h2>
            <p className="text-gray-600">
              Join our exclusive investor network in just a few simple steps
            </p>
            
            {/* Progress Indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center space-x-4">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      currentStep >= step 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step}
                    </div>
                    {step < 4 && (
                      <div className={`w-12 h-1 mx-2 ${
                        currentStep > step ? 'bg-blue-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-8">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                    <p className="text-gray-600">Let's start with your basic information</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  
                  <Button 
                    onClick={nextStep} 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                  >
                    Continue to Investment Details
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              )}

              {/* Step 2: Investment Information */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Investment Information</h3>
                    <p className="text-gray-600">Tell us about your investment preferences</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="investmentAmount">Initial Investment Amount *</Label>
                    <Select onValueChange={(value) => handleInputChange('investmentAmount', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select investment amount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5000-25000">$5,000 - $25,000</SelectItem>
                        <SelectItem value="25000-50000">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50000-100000">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100000-250000">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250000+">$250,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="investmentExperience">Investment Experience *</Label>
                    <Select onValueChange={(value) => handleInputChange('investmentExperience', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">New to alternative investments</SelectItem>
                        <SelectItem value="intermediate">Some alternative investment experience</SelectItem>
                        <SelectItem value="experienced">Experienced alternative investor</SelectItem>
                        <SelectItem value="professional">Professional investor/advisor</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="riskTolerance">Risk Tolerance *</Label>
                    <Select onValueChange={(value) => handleInputChange('riskTolerance', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your risk tolerance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conservative">Conservative (Lower risk, steady returns)</SelectItem>
                        <SelectItem value="moderate">Moderate (Balanced risk/return)</SelectItem>
                        <SelectItem value="aggressive">Aggressive (Higher risk, higher potential returns)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="investmentGoals">Investment Goals</Label>
                    <Textarea
                      id="investmentGoals"
                      value={formData.investmentGoals}
                      onChange={(e) => handleInputChange('investmentGoals', e.target.value)}
                      placeholder="Describe your investment goals and expectations"
                      className="min-h-[100px]"
                    />
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button 
                      onClick={prevStep} 
                      variant="outline"
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={nextStep} 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      disabled={!formData.investmentAmount || !formData.investmentExperience || !formData.riskTolerance}
                    >
                      Continue to Accreditation
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Accreditation */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Accreditation Status</h3>
                    <p className="text-gray-600">Help us understand your investor qualification</p>
                  </div>
                  
                  <div>
                    <Label htmlFor="accreditationStatus">Are you an accredited investor? *</Label>
                    <Select onValueChange={(value) => handleInputChange('accreditationStatus', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your accreditation status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes-income">Yes - Income based ($200K+ individual, $300K+ joint)</SelectItem>
                        <SelectItem value="yes-networth">Yes - Net worth based ($1M+ excluding primary residence)</SelectItem>
                        <SelectItem value="yes-professional">Yes - Professional qualification (Series 7, 65, 82)</SelectItem>
                        <SelectItem value="no">No - Not an accredited investor</SelectItem>
                        <SelectItem value="unsure">Unsure - Need guidance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">About Accreditation</h4>
                    <p className="text-sm text-blue-700">
                      Accredited investor status allows access to certain investment opportunities. 
                      Non-accredited investors can still participate in many of our offerings with 
                      different terms and protections.
                    </p>
                  </div>
                  
                  {selectedTrack && (
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">
                        Selected: {selectedTrack === 'direct' ? 'Direct Deal Participation' : 'InvestoBlend™ Portfolio'}
                      </h4>
                      <p className="text-sm text-green-700">
                        Your application will be processed for the {selectedTrack === 'direct' ? 'direct deal' : 'portfolio'} track.
                      </p>
                    </div>
                  )}
                  
                  <div className="flex space-x-4">
                    <Button 
                      onClick={prevStep} 
                      variant="outline"
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={nextStep} 
                      className="flex-1 bg-blue-600 hover:bg-blue-700"
                      disabled={!formData.accreditationStatus}
                    >
                      Review & Submit
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold mb-2">Review & Submit</h3>
                    <p className="text-gray-600">Please review your information and agree to our terms</p>
                  </div>
                  
                  {/* Application Summary */}
                  <Card className="bg-gray-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Application Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Name:</strong> {formData.firstName} {formData.lastName}
                        </div>
                        <div>
                          <strong>Email:</strong> {formData.email}
                        </div>
                        <div>
                          <strong>Phone:</strong> {formData.phone}
                        </div>
                        <div>
                          <strong>Investment Amount:</strong> {formData.investmentAmount}
                        </div>
                        <div>
                          <strong>Experience:</strong> {formData.investmentExperience}
                        </div>
                        <div>
                          <strong>Risk Tolerance:</strong> {formData.riskTolerance}
                        </div>
                        <div className="md:col-span-2">
                          <strong>Accreditation:</strong> {formData.accreditationStatus}
                        </div>
                        {selectedTrack && (
                          <div className="md:col-span-2">
                            <strong>Selected Track:</strong> {selectedTrack === 'direct' ? 'Direct Deal Participation' : 'InvestoBlend™ Portfolio'}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Terms and Conditions */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked)}
                      />
                      <Label htmlFor="agreeToTerms" className="text-sm leading-relaxed">
                        I agree to the{" "}
                        <Link href="/terms-of-service" className="text-blue-600 hover:underline">
                          Terms of Service
                        </Link>
                        ,{" "}
                        <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </Link>
                        , and{" "}
                        <Link href="/risk-disclosure" className="text-blue-600 hover:underline">
                          Risk Disclosure
                        </Link>. I understand that all investments carry risk and past performance does not guarantee future results.
                      </Label>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox 
                        id="marketingConsent"
                        checked={formData.marketingConsent}
                        onCheckedChange={(checked) => handleInputChange('marketingConsent', checked)}
                      />
                      <Label htmlFor="marketingConsent" className="text-sm">
                        I consent to receive investment opportunities, market updates, and other communications 
                        from InvestoFund via email and phone.
                      </Label>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Next Steps</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• Review and verification of your application (1-2 business days)</li>
                      <li>• Access to investor dashboard and deal opportunities</li>
                      <li>• Welcome call with your dedicated investor relations manager</li>
                      <li>• Begin exploring current investment opportunities</li>
                    </ul>
                  </div>
                  
                  <div className="flex space-x-4">
                    <Button 
                      onClick={prevStep} 
                      variant="outline"
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={handleSubmit} 
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                      disabled={!formData.agreeToTerms}
                    >
                      Submit Application
                      <CheckCircle className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-brand-dark">
            Questions About Investing?
          </h2>
          <p className="text-gray-600 mb-8">
            Our investor relations team is here to help you understand the process and find the right investment approach.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Email Support</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Get detailed answers to your investment questions
                </p>
                <Button variant="outline" className="w-full">
                  investors@investofund.com
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Schedule a Call</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Speak directly with an investor relations specialist
                </p>
                <Button variant="outline" className="w-full">
                  Book Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}