interface GradientBackgroundProps {
  variant?: 'primary' | 'secondary' | 'success' | 'warm';
  children: React.ReactNode;
  className?: string;
}

export default function GradientBackground({ variant = 'primary', children, className = '' }: GradientBackgroundProps) {
  const gradients = {
    primary: 'bg-gradient-to-br from-brand-blue/10 to-brand-teal/10',
    secondary: 'bg-gradient-to-br from-gray-50 to-white',
    success: 'bg-gradient-to-br from-green-50 to-blue-50',
    warm: 'bg-gradient-to-br from-orange-50 to-yellow-50'
  };

  return (
    <div className={`${gradients[variant]} ${className}`}>
      {children}
    </div>
  );
}