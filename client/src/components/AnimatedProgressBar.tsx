import { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';

interface AnimatedProgressBarProps {
  value: number;
  duration?: number;
  className?: string;
  color?: string;
}

export default function AnimatedProgressBar({ 
  value, 
  duration = 2000, 
  className = '',
  color = 'bg-brand-teal'
}: AnimatedProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(`progress-${value}`);
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [value]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = Math.min((currentTime - startTime) / duration, 1);
      
      // Ease out animation
      const easeOut = 1 - Math.pow(1 - elapsed, 3);
      setProgress(value * easeOut);

      if (elapsed < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <div id={`progress-${value}`} className={className}>
      <Progress value={progress} className={`h-3 ${color}`} />
    </div>
  );
}