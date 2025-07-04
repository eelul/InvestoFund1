import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  badge?: string;
  badgeVariant?: 'default' | 'secondary' | 'destructive' | 'outline';
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  className?: string;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  features,
  badge,
  badgeVariant = 'default',
  primaryAction,
  secondaryAction,
  className = ''
}: FeatureCardProps) {
  return (
    <Card className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 hover:border-brand-teal/50 ${className}`}>
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 rounded-full group-hover:from-brand-blue/20 group-hover:to-brand-teal/20 transition-all duration-300">
            <Icon className="w-8 h-8 text-brand-teal group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-brand-dark">{title}</h3>
          {badge && (
            <Badge variant={badgeVariant} className="text-xs">
              {badge}
            </Badge>
          )}
        </div>
        <p className="text-brand-gray text-sm">{description}</p>
      </CardHeader>
      <CardContent className="pt-0">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <div className="w-2 h-2 bg-brand-teal rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-brand-gray">{feature}</span>
            </li>
          ))}
        </ul>
        
        {(primaryAction || secondaryAction) && (
          <div className="space-y-2">
            {primaryAction && (
              <Button 
                onClick={primaryAction.onClick}
                className="w-full bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-dark hover:to-brand-blue text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button 
                variant="outline" 
                onClick={secondaryAction.onClick}
                className="w-full border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}