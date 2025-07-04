import TestimonialCard from './TestimonialCard';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Portfolio Manager",
      company: "Apex Capital",
      testimonial: "InvestoFund has revolutionized my alternative investment strategy. The 20.8% returns per deal have significantly outperformed traditional investments. The platform is intuitive and the deal flow is consistent.",
      rating: 5,
      investmentAmount: "$50,000",
      returns: "23.2% last deal"
    },
    {
      name: "Michael Chen",
      role: "Private Investor",
      company: "Chen Holdings",
      testimonial: "I've been investing with InvestoFund for 8 months now. The transparency in deal structures and the reliable returns have exceeded my expectations. The 45-day average term allows for excellent capital velocity.",
      rating: 5,
      investmentAmount: "$25,000",
      returns: "21.5% average"
    },
    {
      name: "Jennifer Rodriguez",
      role: "Investment Advisor",
      company: "Meridian Wealth",
      testimonial: "As a financial advisor, I needed a platform I could trust for my high-net-worth clients. InvestoFund's track record and professional approach have made it a cornerstone of our alternative investment offerings.",
      rating: 5,
      investmentAmount: "$100,000",
      returns: "19.8% last quarter"
    },
    {
      name: "David Thompson",
      role: "Business Owner",
      company: "Thompson Enterprises",
      testimonial: "The diversification options and clear risk management have been impressive. I particularly appreciate the Option 2 portfolio blend which gives me exposure without the need for individual deal management.",
      rating: 5,
      investmentAmount: "$75,000",
      returns: "18.7% blended"
    },
    {
      name: "Lisa Park",
      role: "Retired Executive",
      company: "Former Tech CEO",
      testimonial: "After selling my company, I needed high-yield investments that weren't tied to the stock market. InvestoFund has delivered consistent returns that help maintain my lifestyle in retirement.",
      rating: 5,
      investmentAmount: "$200,000",
      returns: "22.1% YTD"
    },
    {
      name: "Robert Johnson",
      role: "Real Estate Investor",
      company: "Johnson Properties",
      testimonial: "The short-term nature of MCA deals through InvestoFund perfectly complements my real estate portfolio. The liquidity and returns have been outstanding compared to traditional lending.",
      rating: 5,
      investmentAmount: "$40,000",
      returns: "20.3% average"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-blue/5 to-brand-teal/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            What Our Investors Are Saying
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Don't just take our word for it. Here's what successful investors have to say about their InvestoFund experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              className="h-full"
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-brand-teal mb-2">98%</div>
                <div className="text-brand-gray">Investor Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-blue mb-2">1,250+</div>
                <div className="text-brand-gray">Happy Investors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-brand-dark mb-2">$50M+</div>
                <div className="text-brand-gray">Successfully Invested</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}