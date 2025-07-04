import logoMark from "@assets/1_1751612565598.png";

interface BrandSuccessProps {
  title?: string;
  message?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function BrandSuccess({ 
  title = "Success!", 
  message,
  size = "md",
  className = ""
}: BrandSuccessProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <div className={`flex flex-col items-center text-center space-y-3 ${className}`}>
      <div className="relative">
        <img 
          src={logoMark} 
          alt="Success" 
          className={`${sizeClasses[size]} object-contain animate-in fade-in zoom-in duration-300`}
        />
      </div>
      
      <div className="space-y-1">
        <h3 className={`font-semibold text-green-600 ${textSizeClasses[size]}`}>
          {title}
        </h3>
        {message && (
          <p className={`text-gray-600 ${size === 'sm' ? 'text-xs' : 'text-sm'}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}