import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  rating: number;
  investmentAmount?: string;
  returns?: string;
  className?: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  testimonial,
  rating,
  investmentAmount,
  returns,
  className = ''
}: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <Card className={`group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 hover:border-brand-teal/50 ${className}`}>
      <CardContent className="p-6 relative">
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote className="w-12 h-12 text-brand-teal" />
        </div>
        
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="w-12 h-12 border-2 border-brand-teal/20">
            <AvatarFallback className="bg-gradient-to-br from-brand-blue/10 to-brand-teal/10 text-brand-dark font-semibold">
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <h4 className="font-semibold text-brand-dark">{name}</h4>
            <p className="text-sm text-brand-gray">{role} at {company}</p>
          </div>
          
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>
        
        <blockquote className="text-brand-gray italic mb-4 leading-relaxed">
          "{testimonial}"
        </blockquote>
        
        {(investmentAmount || returns) && (
          <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
            {investmentAmount && (
              <Badge variant="outline" className="text-xs">
                Invested: {investmentAmount}
              </Badge>
            )}
            {returns && (
              <Badge className="text-xs bg-green-100 text-green-800 hover:bg-green-200">
                Returns: {returns}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}