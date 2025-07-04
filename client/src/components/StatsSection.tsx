import { TrendingUp, Users, DollarSign, Clock, CheckCircle, Target } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import AnimatedProgressBar from './AnimatedProgressBar';

interface StatItem {
  icon: React.ComponentType<any>;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  color: string;
  description?: string;
  progress?: number;
}

export default function StatsSection() {
  const stats: StatItem[] = [
    {
      icon: TrendingUp,
      value: 20.8,
      label: 'Average Return Per Deal',
      suffix: '%',
      decimals: 1,
      color: 'text-brand-teal',
      description: 'Based on 1.49x factor rate with 50% profit split',
      progress: 85
    },
    {
      icon: DollarSign,
      value: 2300000,
      label: 'Total Invested This Month',
      prefix: '$',
      color: 'text-brand-blue',
      description: 'Growing investor community',
      progress: 75
    },
    {
      icon: Clock,
      value: 45,
      label: 'Average Deal Term',
      suffix: ' days',
      color: 'text-brand-dark',
      description: 'Quick turnaround for reinvestment',
      progress: 60
    },
    {
      icon: CheckCircle,
      value: 94.7,
      label: 'Success Rate',
      suffix: '%',
      decimals: 1,
      color: 'text-green-600',
      description: 'Proven track record',
      progress: 95
    },
    {
      icon: Users,
      value: 1250,
      label: 'Active Investors',
      color: 'text-purple-600',
      description: 'Growing community',
      progress: 70
    },
    {
      icon: Target,
      value: 8.1,
      label: 'Deals Per Year',
      decimals: 1,
      color: 'text-orange-600',
      description: 'Frequent opportunities',
      progress: 80
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Our Track Record Speaks for Itself
          </h2>
          <p className="text-xl text-brand-gray max-w-3xl mx-auto">
            Join thousands of successful investors who trust InvestoFund with their alternative investment strategy
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 group border-2 border-transparent hover:border-brand-teal/20 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 rounded-full group-hover:from-brand-blue/20 group-hover:to-brand-teal/20 transition-all duration-300">
                  <stat.icon className={`w-6 h-6 ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                {stat.progress && (
                  <div className="w-16">
                    <AnimatedProgressBar 
                      value={stat.progress} 
                      className="h-2" 
                      color={stat.color.replace('text-', 'bg-')} 
                    />
                  </div>
                )}
              </div>
              
              <div className="text-center">
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  <AnimatedCounter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals || 0}
                  />
                </div>
                <h3 className="text-brand-dark font-semibold mb-2">{stat.label}</h3>
                {stat.description && (
                  <p className="text-sm text-brand-gray">{stat.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-white rounded-full shadow-lg p-6 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="text-brand-gray">
                  <strong className="text-brand-dark">Live Data</strong> - Updated in real-time
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 text-brand-teal mr-2" />
                <span className="text-brand-gray">
                  <strong className="text-brand-dark">Verified</strong> - Audited performance
                </span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-4 h-4 text-brand-blue mr-2" />
                <span className="text-brand-gray">
                  <strong className="text-brand-dark">Growing</strong> - Expanding opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}