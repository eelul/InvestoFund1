import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronDown, ChevronUp, HelpCircle, DollarSign, Shield, Clock } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // Investment Questions
  {
    id: "invest-1",
    question: "What is the minimum investment amount?",
    answer: "The minimum investment varies by opportunity type. For Direct Deal Participation, the minimum is $25,000. For Portfolio Blend investments, the minimum is $50,000. These minimums ensure adequate diversification and access to institutional-quality deals.",
    category: "investment"
  },
  {
    id: "invest-2",
    question: "What are the expected returns?",
    answer: "Target returns range from 12-25% annually depending on the investment type and risk profile. Direct Deal Participation typically targets 15-25% returns, while Portfolio Blend investments target 12-20%. Past performance does not guarantee future results.",
    category: "investment"
  },
  {
    id: "invest-3",
    question: "How long are the investment terms?",
    answer: "Investment terms typically range from 12-18 months. Direct deals may have shorter terms (8-15 months) depending on the merchant's cash flow cycle, while portfolio investments generally have 12-18 month terms with quarterly distribution options.",
    category: "investment"
  },
  {
    id: "invest-4",
    question: "Can I withdraw my investment early?",
    answer: "MCA investments are illiquid by nature. Early withdrawal is generally not possible except in extraordinary circumstances. Investors should be prepared to commit funds for the full investment term.",
    category: "investment"
  },
  {
    id: "invest-5",
    question: "What happens if a merchant defaults?",
    answer: "Default risk is inherent in MCA investments. We employ rigorous due diligence and monitoring to minimize defaults. In case of default, we pursue collection efforts and may recover partial amounts. Portfolio diversification helps mitigate individual deal losses.",
    category: "investment"
  },

  // Accreditation Questions
  {
    id: "accred-1",
    question: "What qualifies as an accredited investor?",
    answer: "Per SEC regulations, accredited investors include individuals with income exceeding $200,000 ($300,000 jointly) for two years with expectation to continue, or net worth exceeding $1 million (excluding primary residence). Certain entities and professionals also qualify.",
    category: "accreditation"
  },
  {
    id: "accred-2",
    question: "What documentation is required for accreditation?",
    answer: "Required documentation includes tax returns, bank statements, investment account statements, or a letter from a CPA, attorney, or investment advisor verifying accredited status. All documents must be recent (within 90 days).",
    category: "accreditation"
  },
  {
    id: "accred-3",
    question: "How often must I re-verify my accredited status?",
    answer: "Accredited status verification is typically required annually or when making new investments. We may request updated documentation periodically to ensure ongoing compliance with securities regulations.",
    category: "accreditation"
  },

  // Process Questions
  {
    id: "process-1",
    question: "How does the investment process work?",
    answer: "The process involves: 1) Complete application and accreditation verification, 2) Review and sign investment documents, 3) Transfer funds via wire transfer, 4) Receive confirmation and reporting access, 5) Monitor performance through quarterly reports.",
    category: "process"
  },
  {
    id: "process-2",
    question: "How do I fund my investment?",
    answer: "Investments are funded exclusively through wire transfers. Upon approval, you'll receive detailed wire instructions including our banking information and your unique reference number. ACH transfers and checks are not accepted for security reasons.",
    category: "process"
  },
  {
    id: "process-3",
    question: "When will I receive returns?",
    answer: "Return schedules vary by investment type. Direct deals distribute returns as merchants make payments (typically weekly/monthly). Portfolio investments provide quarterly distributions. Final principal and returns are distributed upon deal completion.",
    category: "process"
  },
  {
    id: "process-4",
    question: "How do I track my investment performance?",
    answer: "Investors receive quarterly performance reports detailing deal status, payment collections, and returns. Additionally, you'll have access to our investor portal for real-time performance tracking and document access.",
    category: "process"
  },

  // Legal Questions
  {
    id: "legal-1",
    question: "Are these investments regulated?",
    answer: "Yes, our investments are structured as private placements under securities regulations. We comply with federal and state securities laws, including proper accredited investor verification and disclosure requirements.",
    category: "legal"
  },
  {
    id: "legal-2",
    question: "What are the tax implications?",
    answer: "Investment returns are typically treated as ordinary income. You'll receive appropriate tax documentation (K-1 or 1099) annually. We recommend consulting with a tax professional to understand your specific tax obligations.",
    category: "legal"
  },
  {
    id: "legal-3",
    question: "Is my investment FDIC insured?",
    answer: "No, these are alternative investments and are not FDIC insured. They carry substantial risk including potential total loss of principal. These investments are suitable only for sophisticated investors who can afford to lose their entire investment.",
    category: "legal"
  },

  // ISO/Broker Questions
  {
    id: "iso-1",
    question: "How do I become an ISO partner?",
    answer: "To become an ISO partner, complete our partnership application, provide required documentation (business license, financial statements, references), pass background verification, and complete our training program. Approval typically takes 5-10 business days.",
    category: "iso"
  },
  {
    id: "iso-2",
    question: "What commission rates do you offer?",
    answer: "Commission rates range from 3-10% based on volume and performance. Bronze partners (0-$500K monthly) earn 3-5%, Silver partners ($500K-$1M) earn 5-7%, and Gold partners ($1M+) earn 7-10%, plus additional bonuses for quality and volume.",
    category: "iso"
  },
  {
    id: "iso-3",
    question: "How quickly do you approve deals?",
    answer: "Our typical approval process takes 24-48 hours for complete applications. Priority partners may receive same-day approvals. Incomplete applications or those requiring additional documentation may take longer.",
    category: "iso"
  },
  {
    id: "iso-4",
    question: "When do I get paid commissions?",
    answer: "Commission payment schedules vary by partner tier: Bronze partners receive monthly payments, Silver partners receive bi-weekly payments, and Gold partners receive weekly payments. Commissions are paid only on successfully funded deals.",
    category: "iso"
  }
];

export default function FAQs() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle },
    { id: "investment", name: "Investment", icon: DollarSign },
    { id: "accreditation", name: "Accreditation", icon: Shield },
    { id: "process", name: "Process", icon: Clock },
    { id: "legal", name: "Legal", icon: Shield },
    { id: "iso", name: "ISO/Broker", icon: DollarSign }
  ];

  const filteredFAQs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-brand-dark mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto">
              Find answers to common questions about our investment opportunities, application process, and partnership programs.
            </p>
          </div>

          {/* Category Filter */}
          <Card className="mb-8">
            <CardContent className="py-6">
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                        activeCategory === category.id
                          ? "bg-brand-teal text-white border-brand-teal"
                          : "bg-white text-brand-gray border-gray-200 hover:border-brand-teal"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFAQs.map((faq) => (
              <Card key={faq.id} className="overflow-hidden">
                <CardHeader 
                  className="cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => toggleItem(faq.id)}
                >
                  <CardTitle className="flex items-center justify-between text-lg">
                    <span className="text-brand-dark">{faq.question}</span>
                    {openItems.has(faq.id) ? (
                      <ChevronUp className="w-5 h-5 text-brand-teal flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-gray flex-shrink-0" />
                    )}
                  </CardTitle>
                </CardHeader>
                {openItems.has(faq.id) && (
                  <CardContent className="pt-0 pb-6">
                    <p className="text-brand-gray leading-relaxed">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>

          {/* Contact Section */}
          <Card className="mt-12">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold text-brand-dark mb-4">
                Still Have Questions?
              </h3>
              <p className="text-brand-gray mb-6">
                Our team is here to help. Contact us for personalized assistance with your investment or partnership questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="text-center">
                  <div className="text-sm text-brand-gray">Email Support</div>
                  <div className="font-semibold text-brand-dark">support@investofund.com</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-brand-gray">Phone Support</div>
                  <div className="font-semibold text-brand-dark">(555) 123-4567</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-brand-gray">Business Hours</div>
                  <div className="font-semibold text-brand-dark">Mon-Fri 9AM-6PM EST</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}