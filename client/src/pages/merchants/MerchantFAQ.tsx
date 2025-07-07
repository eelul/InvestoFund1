import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ChevronDown,
  ChevronUp,
  DollarSign,
  Clock,
  FileText,
  Shield,
  Calculator,
  HelpCircle,
  Phone,
  Mail
} from "lucide-react";
import { Link } from "wouter";

export default function MerchantFAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqCategories = [
    {
      title: "Application Process",
      icon: FileText,
      faqs: [
        {
          question: "What information do I need to apply?",
          answer: "You'll need basic business information including your legal business name, industry, monthly revenue, time in business, and contact details. We may also request business bank statements and processing statements during the review process."
        },
        {
          question: "How long does the application process take?",
          answer: "Our application takes about 5 minutes to complete. You'll receive an initial response within 24-48 hours, and if approved, funding can be deposited within 24 hours of acceptance."
        },
        {
          question: "What are the minimum requirements for approval?",
          answer: "Generally, we require businesses to have been operating for at least 6 months with consistent monthly revenue of $10,000 or more. However, each application is reviewed individually, and exceptions may be made for strong candidates."
        },
        {
          question: "Can I apply if I have bad credit?",
          answer: "Yes! Merchant cash advances are primarily based on your business performance, not personal credit. While we do consider credit history, it's not the determining factor for approval."
        }
      ]
    },
    {
      title: "Funding Terms",
      icon: DollarSign,
      faqs: [
        {
          question: "How much funding can I get?",
          answer: "Funding amounts typically range from $10,000 to $500,000, depending on your business's monthly revenue and qualifications. The exact amount will be determined based on your business's performance and needs."
        },
        {
          question: "What is a factor rate and how does it work?",
          answer: "A factor rate is a simple multiplier used to calculate your total repayment amount. For example, if you receive $50,000 with a 1.35x factor rate, you'll repay $67,500 total. Our rates range from 1.25x to 1.49x based on your qualifications."
        },
        {
          question: "What are the repayment terms?",
          answer: "Repayment terms range from 25 days to 18 months, depending on your business type and the funding amount. Payments are typically structured as daily or weekly automatic debits from your business account."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No hidden fees! The factor rate includes all costs associated with your advance. What you see is what you pay - no surprise fees, no prepayment penalties, and no additional charges."
        }
      ]
    },
    {
      title: "Repayment",
      icon: Calculator,
      faqs: [
        {
          question: "How do I repay the advance?",
          answer: "Repayment is typically structured as automatic daily or weekly debits from your business bank account. The specific schedule will be outlined in your funding agreement and designed to align with your business cash flow."
        },
        {
          question: "Can I pay off my advance early?",
          answer: "Yes, you can pay off your advance early without any prepayment penalties. Early payoff can save you money and position you for additional funding in the future."
        },
        {
          question: "What happens if I miss a payment?",
          answer: "If a payment doesn't process due to insufficient funds, we'll work with you to understand the situation. We prefer to communicate early and find solutions rather than impose penalties."
        },
        {
          question: "Can I get additional funding while repaying?",
          answer: "Yes, once you've repaid a portion of your current advance and demonstrated good payment history, you may be eligible for additional funding. We call this 'stacking' or 'renewal' funding."
        }
      ]
    },
    {
      title: "Usage & Requirements",
      icon: Shield,
      faqs: [
        {
          question: "What can I use the funding for?",
          answer: "You can use the funds for any legitimate business purpose including inventory, equipment, marketing, expansion, working capital, renovations, or operational expenses. Personal use is not permitted."
        },
        {
          question: "Do I need collateral or a personal guarantee?",
          answer: "Most of our advances are unsecured, meaning no collateral is required. However, a personal guarantee may be required depending on the funding amount and business structure."
        },
        {
          question: "What industries do you work with?",
          answer: "We work with most industries including retail, restaurants, healthcare, construction, professional services, automotive, and many others. Some high-risk industries may have different terms or may not qualify."
        },
        {
          question: "Do you work with startups or new businesses?",
          answer: "We typically require businesses to have been operating for at least 6 months with established revenue. However, we may consider newer businesses with strong revenue projections and experienced management."
        }
      ]
    },
    {
      title: "Timeline & Process",
      icon: Clock,
      faqs: [
        {
          question: "How quickly can I get funding?",
          answer: "If approved, funding can be deposited into your account within 24 hours of accepting the terms. The entire process from application to funding typically takes 2-3 business days."
        },
        {
          question: "When will I know if I'm approved?",
          answer: "You'll receive an initial response within 24-48 hours of submitting your application. If additional documentation is needed, we'll contact you immediately to expedite the process."
        },
        {
          question: "What documentation might you need?",
          answer: "Common documents include business bank statements (3-6 months), processing statements if applicable, business license, and ID verification. We'll specify exactly what's needed based on your application."
        },
        {
          question: "Can I track my application status?",
          answer: "Yes, once you submit your application, you'll receive updates via email and phone throughout the process. Our team maintains regular communication until funding is complete."
        }
      ]
    }
  ];

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const itemId = categoryIndex * 100 + faqIndex;
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-brand-gray mb-8">
            Everything you need to know about getting business funding through InvestoFund
          </p>
          
          {/* Quick Contact */}
          <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-brand-dark mb-4">Still have questions?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button variant="outline" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Us
                </Button>
              </Link>
              <Button variant="outline" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call (555) 123-4567
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-brand-blue" />
                  </div>
                  <h2 className="text-2xl font-semibold text-brand-dark">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemId = categoryIndex * 100 + faqIndex;
                    const isOpen = openItem === itemId;
                    
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                          className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="font-medium text-brand-dark pr-4">{faq.question}</h3>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-brand-blue flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-brand-blue flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="p-4 pt-0 border-t border-gray-200">
                            <p className="text-brand-gray leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-brand-blue to-brand-teal text-white">
            <CardContent className="p-8">
              <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl font-bold mb-4">Ready to Apply?</h2>
              <p className="text-lg mb-6 opacity-90">
                Get your funding decision in 24-48 hours
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/merchants/apply">
                  <Button 
                    size="lg" 
                    className="bg-white text-brand-blue hover:bg-gray-100 px-8 py-3 text-lg"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Apply Now
                  </Button>
                </Link>
                
                <Link href="/merchants/how-it-works">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-2 border-white text-white hover:bg-white hover:text-brand-blue px-8 py-3 text-lg"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}