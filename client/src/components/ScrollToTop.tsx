import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Check if there's a hash (anchor) in the URL
    const hash = window.location.hash;
    
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}