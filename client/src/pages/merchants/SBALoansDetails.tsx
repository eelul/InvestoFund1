import { CheckCircle, Clock, ArrowRight, Landmark, DollarSign, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SBALoansDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden">
        {/* Indigo Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-indigo-700 to-blue-800"></div>
        
        {/* Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 via-blue-600/20 to-indigo-600/30"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-32 right-20 w-48 h-48 bg-blue-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500/25 rounded-full blur-xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-500/30 text-indigo-100 border border-indigo-400/40 mb-4">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
                Government-Backed Loan
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-indigo-100 to-blue-200 bg-clip-text text-transparent">
                SBA 7(a) Loans
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-200 via-indigo-200 to-white bg-clip-text text-transparent">
                Backed. Trusted. Proven.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 leading-relaxed max-w-3xl mx-auto">
              The SBA 7(a) loan is ideal for major expansions, acquisitions, and long-term working capital. Enjoy favorable rates and extended terms with government backing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get SBA 7(a) Loan
              </Button>
              <Button 
                size="lg" 
                className="bg-white/15 backdrop-blur-sm border-white/40 text-white hover:bg-white/25 hover:border-white/60 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/merchants'}
              >
                Compare All Options
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">$5M</div>
                <div className="text-indigo-200 text-sm">Max Amount</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">25 Years</div>
                <div className="text-indigo-200 text-sm">Max Terms</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Government</div>
                <div className="text-indigo-200 text-sm">Backed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">Favorable</div>
                <div className="text-indigo-200 text-sm">Rates</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section id="apply-now" className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-dark mb-6">
              Government-Backed Financing for Growth
            </h2>
            <p className="text-xl text-brand-gray mb-8">
              Access up to $5M with government backing, favorable rates, and extended terms for major business initiatives.
            </p>
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-12 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/merchants#apply-funding'}
            >
              Apply for SBA 7(a) Loan
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}